const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { spawnSync } = require('child_process');
const { findDota, readBuild } = require('./resources/steam');
const { within } = require('./resources/keyvalues');
const { generate } = require('./resources/generate');
const { ensureTool } = require('./resources/tool');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const OWNED = [
  'npc',
  'soundevents',
  '_NameDeclarations.d.ts',
  'dota2_ability_map.txt',
  '.resources-state.json',
];
const NPC_FILTER =
  'scripts/npc/,scripts/shops.txt,resource/localization/abilities_schinese.txt,resource/localization/dota_schinese.txt';

function hash(filename) {
  return crypto.createHash('sha256').update(fs.readFileSync(filename)).digest('hex');
}

function sourceFingerprint(install) {
  const build = readBuild(install);
  const directory = path.dirname(install.vpk);
  const archives = fs
    .readdirSync(directory)
    .filter((name) => /^pak01_(?:dir|\d+)\.vpk$/.test(name))
    .sort()
    .map((name) => {
      const stat = fs.statSync(path.join(directory, name));
      return [name, stat.size, stat.mtimeMs];
    });
  return { root: install.root, build, directoryHash: hash(install.vpk), archives };
}

async function pipelineFingerprint(root, extractor) {
  const files = [
    'scripts/update-resources.js',
    'scripts/resources/keyvalues.js',
    'scripts/resources/steam.js',
    'scripts/resources/generate.js',
    'scripts/resources/tool.js',
    'tools/source2viewer.json',
  ];
  const toolFiles = ['Source2Viewer-CLI.exe', 'libSkiaSharp.dll', 'spirv-cross.dll'].map((name) =>
    path.join(path.dirname(extractor), name),
  );
  return {
    scripts: files.map((name) => [name, hash(path.join(root, name))]),
    tools: toolFiles.map((filename) => [path.basename(filename), hash(filename)]),
    prettier: require('prettier/package.json').version,
    format: await require('prettier').resolveConfig(
      path.join(root, 'output/_NameDeclarations.d.ts'),
    ),
  };
}

function inventory(directory, prefix = '') {
  const entries = [];
  for (const name of fs.readdirSync(directory).sort()) {
    const relative = prefix ? `${prefix}/${name}` : name;
    const filename = path.join(directory, name);
    const stat = fs.lstatSync(filename);
    if (stat.isSymbolicLink()) throw new Error(`资源目录不允许符号链接：${filename}`);
    if (stat.isDirectory()) entries.push(...inventory(filename, relative));
    else entries.push([relative, hash(filename)]);
  }
  return entries;
}

function outputInventory(directory) {
  return OWNED.filter((name) => name !== '.resources-state.json').flatMap((name) => {
    const filename = path.join(directory, name);
    const stat = fs.lstatSync(filename);
    if (stat.isSymbolicLink()) throw new Error(`资源目录不允许符号链接：${filename}`);
    return stat.isDirectory() ? inventory(filename, name) : [[name, hash(filename)]];
  });
}

function isCurrent(state, source, pipeline, output) {
  if (
    !state ||
    state.schema !== 1 ||
    JSON.stringify(state.source) !== JSON.stringify(source) ||
    JSON.stringify(state.pipeline) !== JSON.stringify(pipeline)
  )
    return false;
  try {
    return JSON.stringify(state.files) === JSON.stringify(outputInventory(output));
  } catch {
    return false;
  }
}

function removeWorkDirectory(root, directory) {
  const resolved = path.resolve(directory);
  if (
    !within(root, resolved) ||
    path.dirname(resolved) !== path.resolve(root) ||
    !path.basename(resolved).startsWith('.resource-work-')
  ) {
    throw new Error(`拒绝清理非工作目录：${resolved}`);
  }
  fs.rmSync(resolved, { recursive: true, force: true });
}

function acquireLock(root) {
  const filename = path.join(root, '.resources-update.lock');
  if (fs.existsSync(filename)) {
    let previous;
    try {
      previous = JSON.parse(fs.readFileSync(filename, 'utf8'));
    } catch {
      throw new Error(`锁文件损坏，请确认没有更新任务后删除：${filename}`);
    }
    if (!Number.isInteger(previous.pid) || previous.pid <= 0)
      throw new Error(`无效的锁文件：${filename}`);
    let alive = true;
    try {
      process.kill(previous.pid, 0);
    } catch (error) {
      if (error.code === 'ESRCH') alive = false;
      else throw error;
    }
    if (alive) throw new Error(`已有资源更新进程正在运行（PID ${previous.pid}）。`);
    fs.unlinkSync(filename);
  }
  const descriptor = fs.openSync(filename, 'wx');
  fs.writeFileSync(descriptor, JSON.stringify({ pid: process.pid }));
  fs.closeSync(descriptor);
  return () => fs.unlinkSync(filename);
}

function tool(extractor, args, logFile) {
  const result = spawnSync(extractor, args, {
    encoding: 'utf8',
    windowsHide: true,
    maxBuffer: 64 * 1024 * 1024,
  });
  fs.appendFileSync(
    logFile,
    `${JSON.stringify(args)}\n${result.stdout || ''}${result.stderr || ''}\n`,
  );
  if (result.error || result.status !== 0) {
    throw new Error(
      `解包工具执行失败：${result.error?.message || result.stderr || `退出码 ${result.status}`}`,
    );
  }
  return result.stdout;
}

function extract(install, extractor, work, logFile) {
  const extracted = path.join(work, 'extracted');
  const staged = path.join(work, 'output');
  fs.mkdirSync(extracted);
  fs.mkdirSync(staged);
  for (const [label, filter, extensions, decompile] of [
    ['NPC 与中文文本', NPC_FILTER, 'txt', false],
    ['音效事件', 'soundevents/', 'vsndevts_c', true],
  ]) {
    const selection = ['-i', install.vpk, '--vpk_filepath', filter, '--vpk_extensions', extensions];
    const listing = tool(extractor, [...selection, '--vpk_list'], logFile);
    const files = listing
      .split(/\r?\n/)
      .map((line) => line.match(/^(.+) CRC:[\da-f]+ size:(\d+)$/i))
      .filter(Boolean)
      .map((match) => ({ name: match[1], size: Number(match[2]) }));
    if (!files.length) throw new Error(`${label} 未找到匹配的 VPK 条目。`);
    for (const { name } of files) {
      if (!within(extracted, path.resolve(extracted, name)))
        throw new Error(`VPK 条目超出资源目录：${name}`);
    }
    console.log(`解包${label}：${files.length} 个文件${decompile ? '（反编译为文本）' : ''}…`);
    tool(
      extractor,
      [...selection, '-o', extracted, ...(decompile ? ['--decompile'] : [])],
      logFile,
    );
    for (const { name, size } of files) {
      const filename = path.resolve(extracted, decompile ? name.replace(/_c$/, '') : name);
      if (
        !within(extracted, filename) ||
        !fs.existsSync(filename) ||
        fs.statSync(filename).size === 0
      ) {
        throw new Error(`解包结果缺失或为空：${name}`);
      }
      if (!decompile && fs.statSync(filename).size !== size) {
        throw new Error(`解包结果大小与 VPK 索引不符：${name}`);
      }
      if (decompile && !fs.readFileSync(filename, 'utf8').startsWith('<!-- kv3')) {
        throw new Error(`音效事件未正确反编译为 KV3 文本：${name}`);
      }
    }
  }
  fs.renameSync(path.join(extracted, 'scripts/npc'), path.join(staged, 'npc'));
  fs.renameSync(path.join(extracted, 'soundevents'), path.join(staged, 'soundevents'));
  const localization = path.join(staged, 'npc/localization');
  fs.mkdirSync(localization, { recursive: true });
  for (const name of ['abilities_schinese.txt', 'dota_schinese.txt']) {
    fs.copyFileSync(
      path.join(extracted, 'resource/localization', name),
      path.join(localization, name),
    );
  }
  fs.copyFileSync(path.join(extracted, 'scripts/shops.txt'), path.join(staged, 'npc/shops.txt'));
  return staged;
}

function publish(staged, output, backup, rename = fs.renameSync) {
  fs.mkdirSync(output, { recursive: true });
  fs.mkdirSync(backup);
  const saved = [];
  const installed = [];
  try {
    // State is deliberately last: it only describes a completely installed result.
    for (const name of OWNED) {
      if (fs.existsSync(path.join(output, name))) {
        rename(path.join(output, name), path.join(backup, name));
        saved.push(name);
      }
      rename(path.join(staged, name), path.join(output, name));
      installed.push(name);
    }
  } catch (error) {
    try {
      for (const name of installed.reverse())
        rename(path.join(output, name), path.join(staged, name));
      for (const name of saved.reverse()) rename(path.join(backup, name), path.join(output, name));
    } catch (rollbackError) {
      const failure = new Error(
        `更新失败且无法完整回滚，旧文件保存在 ${backup}。${error.message}；${rollbackError.message}`,
      );
      failure.keepWork = true;
      throw failure;
    }
    throw error;
  }
}

async function updateResources(options = {}) {
  const root = options.root || PROJECT_ROOT;
  const install = options.install || findDota(options.dotaPath || process.env.DOTA2_PATH);
  const output = path.join(root, 'output');
  const unlock = acquireLock(root);
  let work;
  let keepWork = false;
  try {
    const source = sourceFingerprint(install);
    const extractor = await (options.ensureTool || ensureTool)(root);
    const pipeline = await pipelineFingerprint(root, extractor);
    console.log(
      `Dota 2：${install.root}\nSteam build：${
        source.build?.buildId || '无 manifest，使用 VPK 指纹'
      }`,
    );
    let previous;
    try {
      previous = JSON.parse(fs.readFileSync(path.join(output, '.resources-state.json'), 'utf8'));
    } catch (error) {
      if (error.code !== 'ENOENT' && !(error instanceof SyntaxError)) throw error;
    }
    if (!options.force && isCurrent(previous, source, pipeline, output)) {
      console.log('游戏资源、生成器及输出均未变化，跳过解包和生成。');
      return { skipped: true, counts: previous.counts };
    }
    console.log(
      options.force ? '强制刷新资源。' : '检测到更新、缺失输出或首次运行，开始刷新资源。',
    );
    work = fs.mkdtempSync(path.join(root, '.resource-work-'));
    const logFile = path.join(root, 'artifacts/resource-update.log');
    fs.mkdirSync(path.dirname(logFile), { recursive: true });
    fs.writeFileSync(logFile, '');
    const staged = (options.extract || extract)(install, extractor, work, logFile);
    console.log('分析英雄、命石、商店物品、中立物品和中文名称…');
    const counts = await generate(staged, root);
    if (JSON.stringify(source) !== JSON.stringify(sourceFingerprint(install))) {
      throw new Error('处理期间 Dota 2 文件发生变化，请等待 Steam 更新完成后重新运行。');
    }
    const state = {
      schema: 1,
      generatedAt: new Date().toISOString(),
      source,
      pipeline,
      counts,
      files: outputInventory(staged),
    };
    fs.writeFileSync(
      path.join(staged, '.resources-state.json'),
      `${JSON.stringify(state, null, 2)}\n`,
    );
    publish(staged, output, path.join(work, 'backup'));
    console.log(
      `完成：${counts.DotaHero} 个英雄、${counts.DotaAbility} 个技能、${counts.DotaItem} 个商店物品、${counts.NeutralItem} 个中立物品、${counts.NeutralEnhancement} 个附魔。`,
    );
    if (counts.missingLocalization.length)
      console.log(
        `沿用旧规则，跳过 ${counts.missingLocalization.length} 个没有中文名称的条目；详情见 output/.resources-state.json。`,
      );
    console.log('输出：output/_NameDeclarations.d.ts、output/dota2_ability_map.txt');
    return { skipped: false, counts };
  } catch (error) {
    keepWork = Boolean(error.keepWork);
    throw error;
  } finally {
    try {
      if (work && !keepWork) removeWorkDirectory(root, work);
    } finally {
      unlock();
    }
  }
}

function parseArguments(args) {
  const options = {};
  for (let index = 0; index < args.length; index++) {
    const arg = args[index];
    if (arg === '--force') options.force = true;
    else if (arg === '--help' || arg === '-h') options.help = true;
    else if (arg === '--dota-path' && args[index + 1] && !args[index + 1].startsWith('--'))
      options.dotaPath = args[++index];
    else if (arg.startsWith('--dota-path=') && arg.slice(12)) options.dotaPath = arg.slice(12);
    else throw new Error(`未知参数或缺少参数值：${arg}。使用 --help 查看用法。`);
  }
  return options;
}

async function main() {
  const options = parseArguments(process.argv.slice(2));
  if (options.help) {
    console.log(
      'yarn update:resources [--force] [--dota-path "D:/Steam/steamapps/common/dota 2 beta"]\n自动定位本机 Dota 2；本地版本变化后解包 NPC、中文文本和 soundevents，并生成名称声明与技能映射。\n--force 忽略缓存重新生成。也可以设置 DOTA2_PATH 或 STEAM_PATH 环境变量。',
    );
    return;
  }
  if (process.platform !== 'win32')
    throw new Error('资源更新使用 Windows x64 解包工具，请在 Windows 上运行。');
  await updateResources(options);
}

if (require.main === module)
  main().catch((error) => {
    console.error(
      `资源更新失败：${error.message}\n解包日志（如已执行解包）：artifacts/resource-update.log`,
    );
    process.exitCode = 1;
  });

module.exports = {
  updateResources,
  parseArguments,
  sourceFingerprint,
  isCurrent,
  outputInventory,
  publish,
  acquireLock,
  OWNED,
};
