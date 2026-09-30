const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const { createFixture } = require('./fixture');
const { PeImage } = require('./pe');
const { analyzeDll } = require('./analyze');
const { parseArguments, renderMarkdown, runCheck } = require('./check');

const PROC = 'MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_PROC';
const byName = (report, name) => report.entries.find((entry) => entry.name === name);

test('relocated DLL addresses and a different ImageBase do not change binding classification', () => {
  for (const options of [{}, { shift: 0x10000, imageBase: 0x7ff00000000 }]) {
    const fixture = createFixture(options);
    const report = analyzeDll(fixture.data, fixture.members);
    assert.equal(report.complete, true);
    assert.deepEqual(report.summary, { bound: 3, unbound: 2, not_in_binary: 0, unknown: 0 });
    assert.equal(report.route.vtableSlot, 0);
    assert.equal(report.route.methodRva, `0x${fixture.caller.toString(16).toUpperCase()}`);
    assert.equal(byName(report, PROC).status, 'unbound');
    assert.equal(byName(report, 'MODIFIER_PROPERTY_CUSTOM1').status, 'unbound');
  }
});

test('a callback name in a DLL or in upstream declarations is not evidence of a binding', () => {
  const fixture = createFixture();
  const declarations = fixture.members.map((member) => ({ ...member }));
  declarations[2].description = 'Method Name: `GetModifierPreAttack_BonusDamage_Proc`';
  const report = analyzeDll(fixture.data, declarations);
  assert.equal(byName(report, PROC).declaredCallback, 'GetModifierPreAttack_BonusDamage_Proc');
  assert.equal(byName(report, PROC).status, 'unbound');
  assert.equal(byName(report, PROC).evidence.callbackRva, null);
});

test('stale declaration values are reported, and runtime values select the branch', () => {
  const fixture = createFixture();
  const declarations = fixture.members.map((member) => ({ ...member }));
  declarations[2].value = 0;
  const report = analyzeDll(fixture.data, declarations);
  assert.equal(byName(report, PROC).status, 'unbound');
  assert.deepEqual(report.declarationValueMismatches, [PROC]);
});

test('missing enum names are distinguished from empty callback bindings', () => {
  const fixture = createFixture();
  const name = 'MODIFIER_PROPERTY_FUTURE';
  const report = analyzeDll(fixture.data, [...fixture.members, { name, value: 1000 }]);
  assert.equal(byName(report, name).status, 'not_in_binary');
  assert.equal(byName(report, name).evidence.branchRva, null);
});

test('changed dispatch instructions fail closed instead of marking callbacks unavailable', () => {
  const fixture = createFixture();
  fixture.data[fixture.offset(fixture.dispatch + 23)] = 0x90;
  const report = analyzeDll(fixture.data, fixture.members);
  assert.equal(report.complete, false);
  assert.equal(report.summary.unbound, 0);
  assert.equal(byName(report, PROC).status, 'unknown');
  assert.match(report.errors[0], /分派结构/);
});

test('a changed case stays unknown while recognized cases retain their evidence', () => {
  const fixture = createFixture();
  fixture.data[fixture.offset(fixture.cases[3])] = 0x90;
  const report = analyzeDll(fixture.data, fixture.members);
  assert.equal(report.complete, false);
  assert.equal(byName(report, `${PROC.replace('_PROC', '')}_POST_CRIT`).status, 'unknown');
  assert.equal(byName(report, PROC).status, 'unbound');
});

test('without Lua RTTI the enum table cannot establish callback availability', () => {
  const fixture = createFixture();
  fixture.data[fixture.offset(fixture.nameRva)] = 0;
  const report = analyzeDll(fixture.data, fixture.members);
  assert.equal(report.complete, false);
  assert.equal(byName(report, PROC).status, 'unknown');
});

test('the terminal enum marker prevents a changed layout from silently truncating coverage', () => {
  const fixture = createFixture();
  fixture.data.writeBigUInt64LE(0n, fixture.offset(fixture.enumTable + 5 * 32));
  const report = analyzeDll(fixture.data, fixture.members);
  assert.equal(report.complete, false);
  assert.equal(byName(report, PROC).status, 'unknown');
});

test('a dispatch-looking function outside the identified Lua vtable is rejected', () => {
  const fixture = createFixture();
  fixture.data[fixture.offset(fixture.caller)] = 0xc3;
  const report = analyzeDll(fixture.data, fixture.members);
  assert.equal(report.complete, false);
  assert.equal(report.route, null);
});

test('truncated, non-PE and non-x64 inputs produce unknown results', () => {
  const fixture = createFixture();
  const x86 = Buffer.from(fixture.data);
  x86.writeUInt16LE(0x14c, 0x84);
  for (const data of [Buffer.from('not a DLL'), fixture.data.subarray(0, 0x200), x86]) {
    assert.throws(() => new PeImage(data));
    const report = analyzeDll(data, fixture.members);
    assert.equal(report.complete, false);
    assert.equal(byName(report, PROC).status, 'unknown');
  }
});

test('CLI arguments reject unsupported combinations and accept offline DLLs', () => {
  assert.equal(parseArguments(['--dll', 'client.dll']).side, 'client');
  assert.equal(parseArguments([]).side, 'both');
  for (const args of [
    ['--side', 'all'],
    ['--dll'],
    ['--dll', 'x.dll', '--side', 'both'],
    ['--dll', 'x.dll', '--dota-path', 'x'],
    ['--side', 'server', '--side', 'client'],
    ['--output', 'x.dll'],
    ['--unknown', 'x'],
  ]) {
    assert.throws(() => parseArguments(args));
  }
});

test('offline checking writes parseable reports and leaves DLL bytes unchanged', (t) => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'modifier-check-'));
  t.after(() => {
    const resolved = fs.realpathSync(directory);
    assert.equal(path.dirname(resolved), fs.realpathSync(os.tmpdir()));
    assert.ok(path.basename(resolved).startsWith('modifier-check-'));
    fs.rmSync(resolved, { recursive: true, force: true });
  });
  const fixture = createFixture();
  const dll = path.join(directory, 'server.dll');
  fs.writeFileSync(dll, fixture.data);
  const output = path.join(directory, 'report.json');
  const report = runCheck(parseArguments(['--dll', dll, '--output', output]));
  assert.equal(report.results[0].complete, true);
  assert.deepEqual(fs.readFileSync(dll), fixture.data);
  assert.equal(JSON.parse(fs.readFileSync(output, 'utf8')).schema, 2);
  assert.match(fs.readFileSync(path.join(directory, 'report.md'), 'utf8'), /未进行局内验证/);
  assert.match(renderMarkdown(report), /PREATTACK_BONUS_DAMAGE_PROC/);
});
