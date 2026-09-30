const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const { createFixture } = require('./fixture');
const { analyzeDll } = require('./analyze');
const { parseArguments, runCheck } = require('./check');

require('ts-node').register({
  project: path.resolve(__dirname, '../../build/tsconfig.json'),
  compilerOptions: { types: ['node'] },
});
const { loadModifierComments } = require('../../build/common/modifier-comments');

const PROC = 'MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_PROC';
const MEMBER = `enum:modifierfunction#member:${PROC}`;
const CALLBACK = 'CDOTA_Modifier_Lua.GetModifierPreAttack_BonusDamage_Proc';

function createReport(t, fixture = createFixture(), sides = ['server', 'client']) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'modifier-comments-'));
  t.after(() => {
    const resolved = fs.realpathSync(directory);
    assert.equal(path.dirname(resolved), fs.realpathSync(os.tmpdir()));
    assert.ok(path.basename(resolved).startsWith('modifier-comments-'));
    fs.rmSync(resolved, { recursive: true, force: true });
  });
  const dll = path.join(directory, 'server.dll');
  fs.writeFileSync(dll, fixture.data);
  const output = path.join(directory, 'report.json');
  const report = runCheck(parseArguments(['--dll', dll, '--side', sides[0], '--output', output]));
  const original = report.results[0];
  report.results = sides.map((side) => ({ ...JSON.parse(JSON.stringify(original)), side }));
  const write = () => fs.writeFileSync(output, JSON.stringify(report));
  write();
  return { directory, dll, output, report, write };
}

test('manual comments retain Chinese meaning without any unavailable annotations', () => {
  const comments = require('../../config/manual_comments.json');
  assert.doesNotMatch(JSON.stringify(comments), /lua\s*不可用/i);
  assert.equal(comments[MEMBER].description, '触发额外攻击力（例：射手天赋）');
  assert.equal(comments[CALLBACK].description, comments[MEMBER].description);
  const fixture = createFixture();
  const baseline = analyzeDll(fixture.data, fixture.members);
  const annotated = analyzeDll(fixture.data, fixture.members, {
    [MEMBER]: { description: '手工写成可用或不可用也不能改变二进制结果' },
  });
  assert.deepEqual(annotated.summary, baseline.summary);
  assert.deepEqual(
    annotated.entries.map(({ name, status }) => [name, status]),
    baseline.entries.map(({ name, status }) => [name, status]),
  );
  assert.equal('annotationDiscrepancies' in annotated, false);
});

test('verified binary evidence produces compact tags for enum members and callbacks', (t) => {
  const { output } = createReport(t);
  const comments = loadModifierComments(output);
  assert.equal(comments.get(MEMBER), '@function GetModifierPreAttack_BonusDamage_Proc\n@lua不可用');
  assert.equal(comments.get(CALLBACK), '@lua不可用');
  assert.equal(
    comments.get('enum:modifierfunction#member:MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE'),
    '@function GetModifierPreAttack_BonusDamage\n@both',
  );
  assert.equal(comments.get('CDOTA_Modifier_Lua.GetModifierPreAttack_BonusDamage'), '@both');
  assert.doesNotMatch([...comments.values()].join('\n'), /Lua绑定检查|SHA-256|Steam build/);
});

test('unrecognized branches and absent enum names never become unavailable annotations', (t) => {
  const fixture = createFixture();
  fixture.data[fixture.offset(fixture.cases[3])] = 0x90;
  const { output, report } = createReport(t, fixture);
  assert.equal(report.results[0].complete, false);
  const comments = loadModifierComments(output);
  const unknown = comments.get(`${MEMBER.replace('_PROC', '')}_POST_CRIT`);
  assert.match(unknown, /^@function [^\n]+$/);
  const absent = comments.get(
    'enum:modifierfunction#member:MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT',
  );
  assert.match(absent, /^@function [^\n]+$/);
  assert.match(comments.get(MEMBER), /@lua不可用/);
});

test('availability tags combine both sides without treating unknown or absent results as unavailable', (t) => {
  const { output, report, write } = createReport(t);
  for (const [server, client, expected] of [
    ['bound', 'bound', '@both'],
    ['bound', 'unbound', '@server'],
    ['unbound', 'bound', '@client'],
    ['unbound', 'unbound', '@lua不可用'],
    ['unknown', 'unbound', ''],
    ['not_in_binary', 'unbound', ''],
    ['bound', 'unknown', '@server'],
    ['unknown', 'bound', '@client'],
  ]) {
    for (const [index, status] of [server, client].entries()) {
      const result = report.results[index];
      const entry = result.entries.find((item) => item.name === PROC);
      entry.status = status;
      entry.evidence.callbackRva =
        status === 'bound'
          ? result.entries.find((item) => item.name !== PROC && item.status === 'bound').evidence
              .callbackRva
          : null;
    }
    write();
    const comments = loadModifierComments(output);
    assert.equal(comments.get(CALLBACK), expected);
    assert.equal(
      comments.get(MEMBER),
      ['@function GetModifierPreAttack_BonusDamage_Proc', expected].filter(Boolean).join('\n'),
    );
  }
});

test('a single checked side produces only its confirmed availability and cannot establish global unavailability', (t) => {
  for (const side of ['server', 'client']) {
    const { output } = createReport(t, createFixture(), [side]);
    const comments = loadModifierComments(output);
    assert.equal(comments.get('CDOTA_Modifier_Lua.GetModifierPreAttack_BonusDamage'), `@${side}`);
    assert.equal(comments.get(CALLBACK), '');
    assert.equal(comments.get(MEMBER), '@function GetModifierPreAttack_BonusDamage_Proc');
  }
});

test('a missing default report is optional, but an explicitly selected missing report fails', (t) => {
  const { directory } = createReport(t);
  const filename = path.join(directory, 'missing.json');
  const warning = t.mock.method(console, 'warn', () => {});
  const comments = loadModifierComments(filename);
  assert.equal(comments.get(MEMBER), '@function GetModifierPreAttack_BonusDamage_Proc');
  assert.equal(comments.has(CALLBACK), false);
  assert.doesNotMatch(
    [...comments.values()].join('\n'),
    /@(?:both|server|client|lua不可用)(?=\s|$)/,
  );
  assert.equal(warning.mock.callCount(), 1);
  assert.throws(() => loadModifierComments(filename, true), /指定的报告不存在/);
});

test('changed DLL bytes or inaccessible DLLs prevent stale availability comments', (t) => {
  const { output, dll, report, write } = createReport(t);
  fs.appendFileSync(dll, Buffer.from([0]));
  assert.throws(() => loadModifierComments(output), /server DLL 已变化/);
  report.results[0].path = path.join(path.dirname(dll), 'missing.dll');
  write();
  assert.throws(() => loadModifierComments(output), /无法读取 server DLL/);
});

test('old schemas, changed declaration inputs, duplicate sides and missing evidence are rejected', (t) => {
  const { output, report, write } = createReport(t);
  report.schema = 1;
  write();
  assert.throws(() => loadModifierComments(output), /版本不受支持/);
  report.schema = 2;
  const hash = report.declarationsSha256;
  report.declarationsSha256 = '0'.repeat(64);
  write();
  assert.throws(() => loadModifierComments(output), /声明来源已变化/);
  report.declarationsSha256 = hash;
  report.results[1].side = 'server';
  write();
  assert.throws(() => loadModifierComments(output), /无效或重复/);
  report.results[1].side = 'client';
  report.results[0].route = null;
  write();
  assert.throws(() => loadModifierComments(output), /缺少已确认的回调分派证据/);
  fs.writeFileSync(output, '{ invalid');
  assert.throws(() => loadModifierComments(output), /JSON 无法读取或解析/);
});

test('generation emits compact enum tags and replaces conflicting callback availability without changing types', (t) => {
  const { output } = createReport(t);
  const previous = process.env.MODIFIER_FUNCTION_REPORT;
  process.env.MODIFIER_FUNCTION_REPORT = output;
  t.after(() => {
    if (previous === undefined) delete process.env.MODIFIER_FUNCTION_REPORT;
    else process.env.MODIFIER_FUNCTION_REPORT = previous;
  });
  const { resolve_comment } = require('../../build/common/utils');
  const { generateEnumDeclarations } = require('../../build/common/enums');
  const { getFunction } = require('../../build/lua/utils');
  const dom = require('dts-dom');
  const enums = require('@moddota/dota-data/files/vscripts/enums.json');
  const modifier = enums.find((item) => item.name === 'modifierfunction');
  const declaration = {
    ...modifier,
    members: modifier.members.filter((member) => member.name === PROC),
  };
  for (const normalized of [true, false]) {
    const content = generateEnumDeclarations([declaration], false, normalized);
    assert.match(content, /触发额外攻击力（例：射手天赋）/);
    assert.match(
      content,
      /\* 触发额外攻击力（例：射手天赋）\n\s*\* @function GetModifierPreAttack_BonusDamage_Proc\n\s*\* @lua不可用\n\s*\*\//,
    );
    assert.match(content, new RegExp(`= ${declaration.members[0].value}\\b`));
  }
  const [callback] = getFunction(
    (parameters, returnType) =>
      dom.create.method('GetModifierPreAttack_BonusDamage_Proc', parameters, returnType),
    CALLBACK,
    {
      args: [{ name: 'damage', types: ['int'], description: '上游参数' }],
      returns: ['int'],
      description: '上游描述',
      available: 'client',
    },
    'server',
    true,
  );
  assert.match(callback.jsDocComment, /触发额外攻击力（例：射手天赋）/);
  assert.match(callback.jsDocComment, /@lua不可用/);
  assert.match(callback.jsDocComment, /@abstract/);
  assert.doesNotMatch(callback.jsDocComment, /@(?:both|server|client)\b/);
  assert.doesNotMatch(callback.jsDocComment, /@function|Lua绑定检查|SHA-256/);
  assert.match(callback.jsDocComment, /@param damage 上游参数/);
  assert.equal(callback.returnType.name, 'number');
  assert.equal(callback.parameters[0].type.name, 'number');
  assert.equal(resolve_comment(CALLBACK, 'param:damage', '参数'), '参数');
  assert.equal(resolve_comment('unrelated', 'description', '原说明'), '原说明');

  const [bound] = getFunction(
    (parameters, returnType) =>
      dom.create.method('GetModifierPreAttack_BonusDamage', parameters, returnType),
    'CDOTA_Modifier_Lua.GetModifierPreAttack_BonusDamage',
    { args: [], returns: ['int'], available: 'client' },
    'server',
    true,
  );
  assert.equal((bound.jsDocComment.match(/@both\b/g) || []).length, 1);
  assert.doesNotMatch(bound.jsDocComment, /@(?:client|server|lua不可用)/);
  assert.equal(bound.returnType.name, 'number');

  const { overrides } = require('../../build/lua/overrides');
  const previousOverride = overrides[CALLBACK];
  overrides[CALLBACK] = { description: 'API 覆盖说明\n@both' };
  t.after(() => {
    if (previousOverride === undefined) delete overrides[CALLBACK];
    else overrides[CALLBACK] = previousOverride;
  });
  const [overridden] = getFunction(
    (parameters, returnType) =>
      dom.create.method('GetModifierPreAttack_BonusDamage_Proc', parameters, returnType),
    CALLBACK,
    { args: [], returns: ['int'], available: 'both' },
  );
  assert.equal(overridden.jsDocComment, 'API 覆盖说明\n@lua不可用');
});
