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

function createReport(t, fixture = createFixture()) {
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
  const report = runCheck(parseArguments(['--dll', dll, '--output', output]));
  const write = () => fs.writeFileSync(output, JSON.stringify(report));
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

test('verified binary evidence adds independent enum and callback comments with the checked side', (t) => {
  const { output } = createReport(t);
  const comments = loadModifierComments(output);
  assert.match(comments.get(MEMBER), /服务端 server/);
  assert.doesNotMatch(comments.get(MEMBER), /客户端 client/);
  assert.match(comments.get(MEMBER), /Lua不可用：没有常规 Lua 回调绑定/);
  assert.match(comments.get(MEMBER), /DLL SHA-256 [a-f\d]{16}/);
  assert.equal(comments.get(CALLBACK), `${PROC}\n${comments.get(MEMBER)}`);
  assert.doesNotMatch(
    comments.get('enum:modifierfunction#member:MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE'),
    /Lua不可用/,
  );
});

test('unrecognized branches and absent enum names never become unavailable annotations', (t) => {
  const fixture = createFixture();
  fixture.data[fixture.offset(fixture.cases[3])] = 0x90;
  const { output, report } = createReport(t, fixture);
  assert.equal(report.results[0].complete, false);
  const comments = loadModifierComments(output);
  const unknown = comments.get(`${MEMBER.replace('_PROC', '')}_POST_CRIT`);
  assert.match(unknown, /无法识别绑定/);
  assert.doesNotMatch(unknown, /Lua不可用/);
  const absent = comments.get(
    'enum:modifierfunction#member:MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT',
  );
  assert.match(absent, /当前 DLL 枚举表未收录/);
  assert.doesNotMatch(absent, /Lua不可用/);
  assert.match(comments.get(MEMBER), /Lua不可用/);
});

test('server and client conclusions are retained separately, including different statuses', (t) => {
  const { output, report, write } = createReport(t);
  report.build = { buildId: '123456' };
  const client = JSON.parse(JSON.stringify(report.results[0]));
  client.side = 'client';
  const entry = client.entries.find((item) => item.name === PROC);
  entry.status = 'unknown';
  entry.evidence = { enumRecordRva: null, branchRva: null, callbackRva: null };
  report.results.push(client);
  write();
  const comment = loadModifierComments(output).get(MEMBER);
  assert.match(comment, /服务端 server.*Lua不可用/);
  assert.match(comment, /客户端 client.*无法识别绑定/);
  assert.match(comment, /Steam build 123456/);
  assert.equal((comment.match(/Lua不可用/g) || []).length, 1);
});

test('a missing default report is optional, but an explicitly selected missing report fails', (t) => {
  const { directory } = createReport(t);
  const filename = path.join(directory, 'missing.json');
  const warning = t.mock.method(console, 'warn', () => {});
  assert.equal(loadModifierComments(filename).size, 0);
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
  report.results.push(report.results[0]);
  write();
  assert.throws(() => loadModifierComments(output), /无效或重复/);
  report.results.pop();
  report.results[0].route = null;
  write();
  assert.throws(() => loadModifierComments(output), /缺少已确认的回调分派证据/);
  fs.writeFileSync(output, '{ invalid');
  assert.throws(() => loadModifierComments(output), /JSON 无法读取或解析/);
});

test('generation appends binding results to Chinese enum and API descriptions without changing tags or types', (t) => {
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
    assert.match(content, /Lua不可用/);
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
  assert.match(callback.jsDocComment, /Lua不可用/);
  assert.match(callback.jsDocComment, /@abstract/);
  assert.match(callback.jsDocComment, /@client/);
  assert.match(callback.jsDocComment, /@param damage 上游参数/);
  assert.equal(callback.returnType.name, 'number');
  assert.equal(callback.parameters[0].type.name, 'number');
  assert.equal(resolve_comment(CALLBACK, 'param:damage', '参数'), '参数');
  assert.equal(resolve_comment('unrelated', 'description', '原说明'), '原说明');
});
