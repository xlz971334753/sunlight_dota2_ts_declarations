// Small PE fixtures exercise relocation and failure handling without redistributing Valve binaries.
function createFixture({ shift = 0, imageBase = 0x180000000 } = {}) {
  const data = Buffer.alloc(0x5400);
  const sections = [
    { name: '.text', rva: 0x2000 + shift, raw: 0x400, size: 0x1000, flags: 0x60000020 },
    { name: '.rdata', rva: 0x6000 + shift, raw: 0x1400, size: 0x3000, flags: 0x40000040 },
    { name: '.data', rva: 0xa000 + shift, raw: 0x4400, size: 0x1000, flags: 0xc0000040 },
  ];
  const offset = (rva) => {
    const section = sections.find((item) => rva >= item.rva && rva < item.rva + item.size);
    return section.raw + rva - section.rva;
  };
  const write32 = (rva, value) => data.writeUInt32LE(value, offset(rva));
  const pointer = (rva, target) => data.writeBigUInt64LE(BigInt(imageBase + target), offset(rva));
  const bytes = (rva, values) => Buffer.from(values).copy(data, offset(rva));
  const string = (rva, text) => data.write(`${text}\0`, offset(rva), 'ascii');
  data.write('MZ');
  data.writeUInt32LE(0x80, 0x3c);
  data.writeUInt32LE(0x4550, 0x80);
  data.writeUInt16LE(0x8664, 0x84);
  data.writeUInt16LE(3, 0x86);
  data.writeUInt16LE(0xf0, 0x94);
  data.writeUInt16LE(0x20b, 0x98);
  data.writeBigUInt64LE(BigInt(imageBase), 0xb0);
  sections.forEach((section, index) => {
    const at = 0x188 + index * 40;
    data.write(section.name, at, 'ascii');
    data.writeUInt32LE(section.size, at + 8);
    data.writeUInt32LE(section.rva, at + 12);
    data.writeUInt32LE(section.size, at + 16);
    data.writeUInt32LE(section.raw, at + 20);
    data.writeUInt32LE(section.flags, at + 36);
  });
  const caller = 0x2100 + shift;
  const dispatch = 0x2300 + shift;
  const jumpTable = 0x2380 + shift;
  const cases = [0x2420, 0x2440, 0x2500, 0x2460].map((rva) => rva + shift);
  const empty = 0x2500 + shift;
  const nameRva = 0x6110 + shift;
  const locator = 0x6200 + shift;
  const vtable = 0x6300 + shift;
  string(nameRva, '.?AVCDOTA_Modifier_Lua@@');
  write32(locator, 1);
  write32(locator + 12, nameRva - 16);
  write32(locator + 20, locator);
  pointer(vtable - 8, locator);
  pointer(vtable, caller);
  bytes(caller, [0x48, 0x89, 0x5c, 0x24, 0x18, 0x56, 0x48, 0x83, 0xec, 0x30]);
  const call = caller + 40;
  bytes(call - 4, [0x44, 0x8b, 0x04, 0x2f, 0xe8]);
  data.writeInt32LE(dispatch - call - 5, offset(call + 1));
  bytes(call + 5, [0x48, 0x63, 0x0c, 0x2f]);
  bytes(call + 22, [0x0f, 0x10, 0x00, 0x0f, 0x11, 0x04, 0xcb]);
  bytes(dispatch, [0x41, 0x81, 0xf8]);
  write32(dispatch + 3, 3);
  bytes(dispatch + 7, [0x0f, 0x87]);
  data.writeInt32LE(empty - dispatch - 13, offset(dispatch + 9));
  bytes(dispatch + 13, [0x49, 0x63, 0xc0, 0x4c, 0x8d, 0x05]);
  data.writeInt32LE(-dispatch - 23, offset(dispatch + 19));
  bytes(dispatch + 23, [0x41, 0x8b, 0x94, 0x80]);
  write32(dispatch + 27, jumpTable);
  bytes(dispatch + 31, [0x49, 0x03, 0xd0, 0xff, 0xe2]);
  cases.forEach((branch, index) => write32(jumpTable + index * 4, branch));
  bytes(empty, [0x33, 0xc0, 0x48, 0x89, 0x01, 0x89, 0x41, 0x08, 0x48, 0x8b, 0xc1, 0xc3]);
  for (const index of [0, 1, 3]) {
    const branch = cases[index];
    const callback = 0x2600 + index * 0x30 + shift;
    bytes(branch, [0x48, 0x8d, 0x05]);
    data.writeInt32LE(callback - branch - 7, offset(branch + 3));
    bytes(branch + 7, [0x48, 0x89, 0x01, 0x33, 0xc0, 0x89, 0x41, 0x08, 0x48, 0x8b, 0xc1, 0xc3]);
    bytes(callback, [0xc3]);
  }
  const prefix = 'MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE';
  const members = [
    { name: prefix, value: 0 },
    { name: `${prefix}_TARGET`, value: 1 },
    { name: `${prefix}_PROC`, value: 2 },
    { name: `${prefix}_POST_CRIT`, value: 3 },
    { name: 'MODIFIER_PROPERTY_CUSTOM1', value: 4 },
    { name: 'MODIFIER_FUNCTION_LAST', value: 5 },
    { name: 'MODIFIER_FUNCTION_INVALID', value: 0xffff },
  ];
  const enumTable = 0x6800 + shift;
  members.forEach((member, index) => {
    const textRva = 0x7000 + index * 0x100 + shift;
    string(textRva, member.name);
    pointer(enumTable + index * 32, textRva);
    write32(enumTable + index * 32 + 8, member.value);
  });
  string(0x7800 + shift, 'GetModifierPreAttack_BonusDamage_Proc');
  pointer(0xa100 + shift, 0x7800 + shift);
  return {
    data,
    members,
    offset,
    dispatch,
    empty,
    cases,
    enumTable,
    caller,
    vtable,
    nameRva,
    locator,
  };
}

module.exports = { createFixture };
