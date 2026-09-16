const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const { parseKeyValues, loadKeyValues, get, readText, within } = require('./keyvalues');
const { findDota, readBuild } = require('./steam');
const { buildRows, renderDeclarations, csvField } = require('./generate');
const { ensureTool, verifyFiles } = require('./tool');
const { createHash } = require('node:crypto');
const {
  updateResources,
  publish,
  acquireLock,
  parseArguments,
  OWNED,
} = require('../update-resources');

function temporary(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'dota-resources-test-'));
  t.after(() => {
    assert.ok(within(os.tmpdir(), root) && path.basename(root).startsWith('dota-resources-test-'));
    fs.rmSync(root, { recursive: true, force: true });
  });
  return root;
}

function write(root, name, data) {
  const filename = path.join(root, name);
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  fs.writeFileSync(filename, data);
  return filename;
}

function fixture(root) {
  write(
    root,
    'npc/npc_heroes.txt',
    '#base "heroes/alpha.txt"\n#base "heroes/beta.txt"\n"DOTAHeroes" {}',
  );
  write(
    root,
    'npc/heroes/alpha.txt',
    `"DOTAHeroes" {
    "npc_dota_hero_base" { "Ability1" "ignored" }
    "npc_dota_hero_alpha" {
      "Ability1" "alpha_hit" "Ability2" "generic_hidden" "Ability10" "special_bonus_hp_10"
      "AbilityDraftAbilities" { "Ability1" "alpha_draft" }
      "Facets" { "facet" { "Abilities" { "1" { "AbilityName" "alpha_facet" } } } }
    }
  }`,
  );
  write(
    root,
    'npc/heroes/beta.txt',
    '"DOTAHeroes" { "npc_dota_hero_beta" { "Ability1" "beta_hit" "Ability2" "alpha_hit" } }',
  );
  write(
    root,
    'npc/shops.txt',
    `"dota_shops" { "consumables" {
    "item" "item_first" // "item" "item_commented"
    "item" "item_second"
    "item" "item_first"
  } "pregame" { "item" "item_pregame" } }`,
  );
  write(
    root,
    'npc/neutral_items.txt',
    `"neutral_items" { "neutral_tiers" { "1" {
    "items" { "item_neutral" "1" }
    "enhancements" { "strength" { "item_enhancement_last" "1" } }
  } } }`,
  );
  write(
    root,
    'npc/localization/dota_schinese.txt',
    '"lang" { "Tokens" { "npc_dota_hero_alpha" "甲" "npc_dota_hero_beta" "乙" } }',
  );
  write(
    root,
    'npc/localization/abilities_schinese.txt',
    `"lang" { "Tokens" {
    "DOTA_Tooltip_ability_alpha_hit" "普攻 AoE"
    "DOTA_Tooltip_ability_alpha_draft" "征召技能"
    "DOTA_Tooltip_ability_alpha_facet" "命石"
    "DOTA_Tooltip_ability_beta_hit" "乙技能"
    "DOTA_Tooltip_ability_item_first" "第一件"
    "DOTA_Tooltip_ability_item_second" "第二件"
    "DOTA_Tooltip_ability_item_commented" "已移除"
    "DOTA_Tooltip_ability_item_pregame" "非标准商店"
    "DOTA_Tooltip_ability_item_neutral" "中立物品"
    "DOTA_Tooltip_ability_item_enhancement_last:n" "末行附魔"
  } }`,
  );
  write(root, 'soundevents/events.vsndevts', '<!-- kv3 -->\n{ Test.Event = {} }');
}

function fakeInstall(root) {
  const gameRoot = path.join(root, 'steam/steamapps/common/dota 2 beta');
  const vpk = write(gameRoot, 'game/dota/pak01_dir.vpk', 'test archive');
  const manifestPath = write(
    root,
    'steam/steamapps/appmanifest_570.acf',
    '"AppState" { "appid" "570" "StateFlags" "4" "installdir" "dota 2 beta" "buildid" "1" "lastupdated" "1" }',
  );
  return { root: gameRoot, vpk, manifestPath };
}

function fakeProject(t) {
  const root = temporary(t);
  const project = path.resolve(__dirname, '../..');
  for (const name of [
    'scripts/update-resources.js',
    'scripts/resources/generate.js',
    'scripts/resources/steam.js',
    'scripts/resources/keyvalues.js',
    'scripts/resources/tool.js',
    'tools/source2viewer.json',
    'package.json',
  ]) {
    write(root, name, fs.readFileSync(path.join(project, name)));
  }
  for (const name of ['Source2Viewer-CLI.exe', 'libSkiaSharp.dll', 'spirv-cross.dll']) {
    write(root, `tools/cli-windows-x64/${name}`, 'test tool fingerprint');
  }
  const install = fakeInstall(root);
  let extractions = 0;
  const extract = (_install, _tool, work) => {
    extractions++;
    const staged = path.join(work, 'output');
    fixture(staged);
    return staged;
  };
  return {
    root,
    install,
    extract,
    extractions: () => extractions,
    ensureTool: async () => path.join(root, 'tools/cli-windows-x64/Source2Viewer-CLI.exe'),
  };
}

test('KV retains duplicate keys, comments and escaped text', () => {
  const parsed = parseKeyValues(
    '\ufeff"root" { "item" "one" /* ignored */ "item" "two" "url" "https://x" "text" "A\\"B\\nC" } // tail',
  );
  assert.deepEqual(get(parsed, 'root'), [
    ['item', 'one'],
    ['item', 'two'],
    ['url', 'https://x'],
    ['text', 'A"B\nC'],
  ]);
  assert.throws(() => parseKeyValues('"root" { "item" "x"'), /缺少/);
  assert.throws(() => parseKeyValues('"root" { "item" }'), /缺少值/);
  assert.throws(() => parseKeyValues('"root" {} /*unclosed'), /未闭合/);
  assert.throws(() => parseKeyValues('"root" "windows" [$WIN32]'), /尚不支持 KV 条件/);
});

test('KV loads #base with local overrides and rejects cycles and traversal', (t) => {
  const root = temporary(t);
  const file = write(root, 'main.txt', '#base "base.txt"\n"root" { "local" "new" }');
  write(root, 'base.txt', '"root" { "local" "old" "inherited" "yes" }');
  assert.deepEqual(get(loadKeyValues(file), 'root'), [
    ['local', 'new'],
    ['inherited', 'yes'],
  ]);
  write(root, 'base.txt', '#base "main.txt"');
  assert.throws(() => loadKeyValues(file), /循环引用/);
  write(root, 'base.txt', '#base "../outside.txt"');
  assert.throws(() => loadKeyValues(file), /超出资源目录/);
});

test('localization text supports UTF-16 BOM', (t) => {
  const file = write(
    temporary(t),
    'utf16.txt',
    Buffer.concat([Buffer.from([0xff, 0xfe]), Buffer.from('"中文" "名称"', 'utf16le')]),
  );
  assert.deepEqual(parseKeyValues(readText(file)), [['中文', '名称']]);
});

test('Steam discovery follows multiple library paths and the install manifest', (t) => {
  const root = temporary(t);
  const install = fakeInstall(root);
  const bootstrap = path.join(root, 'bootstrap');
  write(
    bootstrap,
    'steamapps/libraryfolders.vdf',
    `"libraryfolders" { "0" { "path" ${JSON.stringify(
      path.join(root, 'empty library'),
    )} } "1" { "path" ${JSON.stringify(path.join(root, 'steam'))} } }`,
  );
  assert.equal(findDota(undefined, [bootstrap]).vpk, install.vpk);
  assert.equal(findDota(install.root, []).vpk, install.vpk);
  assert.equal(readBuild(install).buildId, '1');
  write(
    root,
    'steam/steamapps/appmanifest_570.acf',
    '"AppState" { "appid" "570" "StateFlags" "1028" }',
  );
  assert.throws(() => readBuild(install), /尚未完成更新/);
  assert.throws(() => findDota(undefined, [path.join(root, 'absent')]), /未找到 Dota 2/);
});

test('generation preserves formats, facet priority, item classes and the final row', (t) => {
  const root = temporary(t);
  fixture(root);
  const { rows, missing } = buildRows(path.join(root, 'npc'));
  assert.equal(rows.length, 8);
  assert.deepEqual(missing, []);
  assert.deepEqual(rows[0], ['npc_dota_hero_alpha', '甲', 'alpha_hit', '普攻 AoE']);
  assert.ok(rows.some((row) => row[3] === '命石 (命石技能)'));
  assert.ok(!rows.some((row) => row[2] === 'item_commented' || row[2] === 'item_pregame'));
  assert.deepEqual(rows.at(-1), [
    'item_enhancement_last',
    '中立装备附魔',
    'item_enhancement_last',
    '末行附魔',
  ]);
  const { text, counts } = renderDeclarations(rows);
  assert.deepEqual(counts, {
    DotaAbility: 4,
    DotaHero: 2,
    DotaItem: 2,
    NeutralItem: 1,
    NeutralEnhancement: 1,
  });
  assert.match(text, /enhancement_last = "item_enhancement_last"/);
  assert.match(text, /declare const enum CustomAbility/);
  assert.equal(csvField('a,"b"'), '"a,""b"""');
});

test('malformed or missing required resources cannot generate partial output', (t) => {
  const root = temporary(t);
  fixture(root);
  write(root, 'npc/heroes/alpha.txt', '"DOTAHeroes" {');
  assert.throws(() => buildRows(path.join(root, 'npc')), /缺少/);
});

test('#include keeps heroes from every included DOTAHeroes block', (t) => {
  const root = temporary(t);
  fixture(root);
  write(
    root,
    'npc/npc_heroes.txt',
    '#include "heroes/alpha.txt"\n#include "heroes/beta.txt"\n"DOTAHeroes" {}',
  );
  const { rows } = buildRows(path.join(root, 'npc'));
  assert.ok(rows.some((row) => row[0] === 'npc_dota_hero_alpha'));
  assert.ok(rows.some((row) => row[0] === 'npc_dota_hero_beta'));
});

test('refresh commits only after success; unchanged content skips; missing output and changed VPK regenerate', async (t) => {
  const project = fakeProject(t);
  assert.equal((await updateResources(project)).skipped, false);
  assert.equal((await updateResources(project)).skipped, true);
  assert.equal(project.extractions(), 1);
  fs.unlinkSync(path.join(project.root, 'output/_NameDeclarations.d.ts'));
  assert.equal((await updateResources(project)).skipped, false);
  fs.appendFileSync(project.install.vpk, ' updated');
  assert.equal((await updateResources(project)).skipped, false);
  write(project.root, 'output/npc/removed-in-new-version.txt', 'obsolete');
  await updateResources(project);
  assert.equal(
    fs.existsSync(path.join(project.root, 'output/npc/removed-in-new-version.txt')),
    false,
  );
  await updateResources({ ...project, force: true });
  assert.equal(project.extractions(), 5);
  assert.equal(
    fs.readdirSync(project.root).some((name) => name.startsWith('.resource-work-')),
    false,
  );
});

test('extractor/parse failures and a game update during extraction retain old outputs and version state', async (t) => {
  const project = fakeProject(t);
  await updateResources(project);
  const statePath = path.join(project.root, 'output/.resources-state.json');
  const mapPath = path.join(project.root, 'output/dota2_ability_map.txt');
  const oldState = fs.readFileSync(statePath, 'utf8');
  const oldMap = fs.readFileSync(mapPath, 'utf8');
  await assert.rejects(
    updateResources({
      ...project,
      force: true,
      ensureTool() {
        throw new Error('download failed');
      },
    }),
    /download failed/,
  );
  await assert.rejects(
    updateResources({
      ...project,
      force: true,
      extract() {
        throw new Error('tool failed');
      },
    }),
    /tool failed/,
  );
  await assert.rejects(
    updateResources({
      ...project,
      force: true,
      extract(...args) {
        const staged = project.extract(...args);
        write(staged, 'npc/shops.txt', '"broken" {');
        return staged;
      },
    }),
    /缺少/,
  );
  await assert.rejects(
    updateResources({
      ...project,
      force: true,
      extract(...args) {
        const staged = project.extract(...args);
        fs.appendFileSync(project.install.vpk, ' changed mid-run');
        return staged;
      },
    }),
    /处理期间 Dota 2 文件发生变化/,
  );
  assert.equal(fs.readFileSync(statePath, 'utf8'), oldState);
  assert.equal(fs.readFileSync(mapPath, 'utf8'), oldMap);
  assert.equal(fs.existsSync(path.join(project.root, '.resources-update.lock')), false);
});

test('publish rolls back replaced files when a later rename fails', (t) => {
  const root = temporary(t);
  const staged = path.join(root, 'staged');
  const output = path.join(root, 'output');
  for (const name of OWNED) {
    write(staged, name, `new ${name}`);
    write(output, name, `old ${name}`);
  }
  let calls = 0;
  assert.throws(
    () =>
      publish(staged, output, path.join(root, 'backup'), (from, to) => {
        if (++calls === 6) throw new Error('simulated rename failure');
        fs.renameSync(from, to);
      }),
    /simulated rename failure/,
  );
  for (const name of OWNED)
    assert.equal(fs.readFileSync(path.join(output, name), 'utf8'), `old ${name}`);
});

test('lock prevents concurrent updates and arguments reject typos', (t) => {
  const root = temporary(t);
  const unlock = acquireLock(root);
  assert.throws(() => acquireLock(root), /已有资源更新进程/);
  unlock();
  assert.deepEqual(parseArguments(['--force', '--dota-path', 'D:/Steam Library/dota 2 beta']), {
    force: true,
    dotaPath: 'D:/Steam Library/dota 2 beta',
  });
  assert.deepEqual(parseArguments(['--dota-path=D:/dota']), { dotaPath: 'D:/dota' });
  assert.throws(() => parseArguments(['--dota-path']), /缺少参数值/);
  assert.throws(() => parseArguments(['--froce']), /未知参数/);
});

function toolFixture(t) {
  const root = temporary(t);
  const archive = Buffer.from('pinned archive');
  const contents = {
    'Source2Viewer-CLI.exe': 'pinned exe',
    'libSkiaSharp.dll': 'pinned dll',
    'spirv-cross.dll': 'pinned shader',
  };
  const digest = (data) => createHash('sha256').update(data).digest('hex');
  const manifest = {
    version: 'test',
    url: 'https://example.com/tool.zip',
    size: archive.length,
    sha256: digest(archive),
    files: Object.fromEntries(
      Object.entries(contents).map(([name, content]) => [name, digest(content)]),
    ),
  };
  write(root, 'tools/source2viewer.json', JSON.stringify(manifest));
  let downloads = 0;
  const operations = {
    async download(_url, destination) {
      downloads++;
      fs.writeFileSync(destination, archive);
    },
    async unpack(_archive, destination) {
      for (const [name, content] of Object.entries(contents)) write(destination, name, content);
    },
  };
  return { root, manifest, operations, downloads: () => downloads };
}

test('tool downloads on first use, reuses verified files offline and repairs a corrupt binary', async (t) => {
  const fixture = toolFixture(t);
  const executable = await ensureTool(fixture.root, fixture.operations);
  assert.equal(fs.readFileSync(executable, 'utf8'), 'pinned exe');
  assert.equal(verifyFiles(path.dirname(executable), fixture.manifest), true);
  await ensureTool(fixture.root, {
    download() {
      throw new Error('must stay offline');
    },
  });
  assert.equal(fixture.downloads(), 1);
  fs.writeFileSync(executable, 'corrupt');
  await ensureTool(fixture.root, fixture.operations);
  assert.equal(fixture.downloads(), 2);
  assert.equal(fs.readFileSync(executable, 'utf8'), 'pinned exe');
});

test('download, archive checksum, unpack and extracted checksum failures preserve the previous tool', async (t) => {
  for (const mode of ['network', 'archive', 'unpack', 'extracted']) {
    const fixture = toolFixture(t);
    const oldFile = write(fixture.root, 'tools/cli-windows-x64/Source2Viewer-CLI.exe', 'old tool');
    const operations = { ...fixture.operations };
    if (mode === 'network')
      operations.download = async () => {
        throw new Error('network failed');
      };
    if (mode === 'archive') {
      operations.download = async (_url, destination) =>
        fs.writeFileSync(destination, 'broken archive');
      operations.unpack = async () => assert.fail('Do not unpack an unverified archive');
    }
    if (mode === 'unpack')
      operations.unpack = async () => {
        throw new Error('unpack failed');
      };
    if (mode === 'extracted')
      operations.unpack = async (_archive, destination) =>
        write(destination, 'Source2Viewer-CLI.exe', 'wrong exe');
    await assert.rejects(ensureTool(fixture.root, operations), /failed|SHA-256/);
    assert.equal(fs.readFileSync(oldFile, 'utf8'), 'old tool');
    assert.equal(
      fs.readdirSync(fixture.root).some((name) => name.startsWith('.resource-work-')),
      false,
    );
  }
});
