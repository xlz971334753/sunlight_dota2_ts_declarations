const crypto = require('crypto');

// This reader maps file bytes only. It never loads a DLL or executes its code.
class PeImage {
  constructor(data) {
    this.data = data;
    if (data.length < 0x40 || data.toString('ascii', 0, 2) !== 'MZ') {
      throw new Error('不是有效的 PE 文件');
    }
    const header = this.u32(0x3c);
    if (this.u32(header) !== 0x4550 || this.u16(header + 4) !== 0x8664) {
      throw new Error('检查器目前只支持 Windows x64 PE DLL');
    }
    const optional = header + 24;
    const optionalSize = this.u16(header + 20);
    if (optionalSize < 112 || this.u16(optional) !== 0x20b) {
      throw new Error('缺少有效的 PE32+ 可选头');
    }
    this.requireRange(optional, optionalSize);
    this.imageBase = this.u64(optional + 24);
    if (this.imageBase === null) throw new Error('PE ImageBase 超出安全整数范围');
    this.timestamp = this.u32(header + 8);
    this.sections = [];
    const sectionCount = this.u16(header + 6);
    if (sectionCount === 0 || sectionCount > 96) throw new Error('PE 节数量异常');
    for (let index = 0; index < sectionCount; index += 1) {
      const at = optional + optionalSize + index * 40;
      this.requireRange(at, 40);
      const section = {
        name: data.toString('ascii', at, at + 8).replace(/\0.*$/, ''),
        rva: this.u32(at + 12),
        size: this.u32(at + 16),
        raw: this.u32(at + 20),
        executable: (this.u32(at + 36) & 0x20000000) !== 0,
      };
      this.requireRange(section.raw, section.size);
      this.sections.push(section);
    }
    this.sha256 = crypto.createHash('sha256').update(data).digest('hex');
  }

  requireRange(offset, size) {
    if (!Number.isInteger(offset) || offset < 0 || offset + size > this.data.length) {
      throw new Error('PE 数据越界或文件被截断');
    }
  }

  u16(offset) {
    this.requireRange(offset, 2);
    return this.data.readUInt16LE(offset);
  }

  u32(offset) {
    this.requireRange(offset, 4);
    return this.data.readUInt32LE(offset);
  }

  u64(offset) {
    this.requireRange(offset, 8);
    const value = this.data.readBigUInt64LE(offset);
    return value <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(value) : null;
  }

  offset(rva, size = 1) {
    const section = this.sections.find(
      (item) => rva >= item.rva && rva + size <= item.rva + item.size,
    );
    return section ? section.raw + rva - section.rva : null;
  }

  rva(offset) {
    const section = this.sections.find(
      (item) => offset >= item.raw && offset < item.raw + item.size,
    );
    return section ? section.rva + offset - section.raw : null;
  }

  isCode(rva) {
    return this.sections.some(
      (section) => section.executable && rva >= section.rva && rva < section.rva + section.size,
    );
  }

  stringAt(va) {
    if (va === null) return null;
    const offset = this.offset(va - this.imageBase);
    if (offset === null) return null;
    const end = this.data.indexOf(0, offset);
    if (
      end < offset ||
      end - offset > 2048 ||
      this.offset(va - this.imageBase, end - offset + 1) === null
    ) {
      return null;
    }
    const bytes = this.data.subarray(offset, end);
    return bytes.every((byte) => byte >= 32 && byte <= 126) ? bytes.toString('ascii') : null;
  }

  find(bytes) {
    const offsets = [];
    let offset = this.data.indexOf(bytes);
    while (offset !== -1) {
      if (this.rva(offset) !== null) offsets.push(offset);
      offset = this.data.indexOf(bytes, offset + 1);
    }
    return offsets;
  }

  pointersTo(va) {
    const bytes = Buffer.alloc(8);
    bytes.writeBigUInt64LE(BigInt(va));
    return this.find(bytes);
  }
}

function readModifierEnums(image) {
  const firstName = 'MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE';
  const candidates = [];
  for (const stringOffset of image.find(Buffer.from(`${firstName}\0`))) {
    const va = image.imageBase + image.rva(stringOffset);
    for (const start of image.pointersTo(va)) {
      if (start % 8 !== 0 || start + 96 > image.data.length) continue;
      if (
        image.u64(start + 8) !== 0 ||
        image.stringAt(image.u64(start + 32)) !== `${firstName}_TARGET` ||
        image.u64(start + 40) !== 1 ||
        image.stringAt(image.u64(start + 64)) !== `${firstName}_PROC` ||
        image.u64(start + 72) !== 2
      ) {
        continue;
      }
      const members = [];
      const names = new Set();
      for (let index = 0; index < 2048; index += 1) {
        const offset = start + index * 32;
        if (image.offset(image.rva(start) + index * 32, 32) === null) break;
        const name = image.stringAt(image.u64(offset));
        if (!name || !/^MODIFIER_(?:PROPERTY_|EVENT_|FUNCTION_)/.test(name)) break;
        const value = image.u64(offset + 8);
        if (value === null || value > 0xffffffff || names.has(name)) {
          throw new Error('modifier 枚举记录异常');
        }
        names.add(name);
        members.push({ name, value, recordRva: image.rva(offset) });
      }
      // Require a terminal marker so a changed record layout cannot silently truncate coverage.
      if (members.some((member) => member.name === 'MODIFIER_FUNCTION_LAST')) {
        candidates.push({ tableRva: image.rva(start), members });
      }
    }
  }
  if (candidates.length !== 1)
    throw new Error(`无法唯一定位 modifier 枚举表（${candidates.length} 个候选）`);
  return candidates[0];
}

function findLuaVtable(image) {
  const tables = new Map();
  for (const nameOffset of image.find(Buffer.from('.?AVCDOTA_Modifier_Lua@@\0'))) {
    const descriptorRva = image.rva(nameOffset - 16);
    if (descriptorRva === null) continue;
    const bytes = Buffer.alloc(4);
    bytes.writeUInt32LE(descriptorRva);
    for (const reference of image.find(bytes)) {
      const locator = reference - 12;
      if (locator < 0 || image.offset(image.rva(locator), 24) === null) continue;
      if (
        image.u32(locator) !== 1 ||
        image.u32(locator + 4) !== 0 ||
        image.u32(locator + 20) !== image.rva(locator)
      ) {
        continue;
      }
      for (const pointer of image.pointersTo(image.imageBase + image.rva(locator))) {
        const methods = [];
        const tableRva = image.rva(pointer + 8);
        if (tableRva === null) continue;
        for (let slot = 0; slot < 1024; slot += 1) {
          const offset = image.offset(tableRva + slot * 8, 8);
          if (offset === null) break;
          const va = image.u64(offset);
          if (va === null || !image.isCode(va - image.imageBase)) break;
          methods.push({ slot, rva: va - image.imageBase });
        }
        if (methods.length > 0) tables.set(tableRva, { tableRva, methods });
      }
    }
  }
  if (tables.size !== 1)
    throw new Error(`无法唯一定位 CDOTA_Modifier_Lua 主虚函数表（${tables.size} 个候选）`);
  return [...tables.values()][0];
}

module.exports = { PeImage, readModifierEnums, findLuaVtable };
