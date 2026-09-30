const { PeImage, readModifierEnums, findLuaVtable } = require('./pe');

const hex = (value) => `0x${value.toString(16).toUpperCase()}`;

function matches(data, offset, bytes) {
  return (
    offset >= 0 &&
    offset + bytes.length <= data.length &&
    data.subarray(offset, offset + bytes.length).equals(Buffer.from(bytes))
  );
}

function readBinding(image, rva) {
  const offset = image.offset(rva, 19);
  if (offset === null || !image.isCode(rva)) return null;
  const data = image.data;
  // MSVC x64 member-function pointer result: function address + this adjustment.
  if (
    matches(data, offset, [0x33, 0xc0, 0x48, 0x89, 0x01, 0x89, 0x41, 0x08, 0x48, 0x8b, 0xc1, 0xc3])
  ) {
    return { status: 'unbound', branchRva: rva };
  }
  if (
    !matches(data, offset, [0x48, 0x8d, 0x05]) ||
    !matches(
      data,
      offset + 7,
      [0x48, 0x89, 0x01, 0x33, 0xc0, 0x89, 0x41, 0x08, 0x48, 0x8b, 0xc1, 0xc3],
    )
  ) {
    return null;
  }
  const callbackRva = rva + 7 + data.readInt32LE(offset + 3);
  return image.isCode(callbackRva) ? { status: 'bound', branchRva: rva, callbackRva } : null;
}

function readDispatch(image, rva) {
  const offset = image.offset(rva, 36);
  if (offset === null) return null;
  const data = image.data;
  if (
    !matches(data, offset, [0x41, 0x81, 0xf8]) ||
    !matches(data, offset + 7, [0x0f, 0x87]) ||
    !matches(data, offset + 13, [0x49, 0x63, 0xc0, 0x4c, 0x8d, 0x05]) ||
    !matches(data, offset + 23, [0x41, 0x8b, 0x94, 0x80]) ||
    !matches(data, offset + 31, [0x49, 0x03, 0xd0, 0xff, 0xe2])
  ) {
    return null;
  }
  const maximum = data.readUInt32LE(offset + 3);
  const defaultRva = rva + 13 + data.readInt32LE(offset + 9);
  // The LEA must recover ImageBase before indexing an RVA jump table.
  if (rva + 23 + data.readInt32LE(offset + 19) !== 0 || maximum > 2047) return null;
  const tableRva = data.readUInt32LE(offset + 27);
  const tableOffset = image.offset(tableRva, (maximum + 1) * 4);
  const fallback = readBinding(image, defaultRva);
  if (tableOffset === null || !fallback || fallback.status !== 'unbound') return null;
  const bindings = [];
  for (let value = 0; value <= maximum; value += 1) {
    const branchRva = data.readUInt32LE(tableOffset + value * 4);
    bindings.push(readBinding(image, branchRva) || { status: 'unknown', branchRva });
  }
  if (bindings[0]?.status !== 'bound' || bindings[1]?.status !== 'bound') return null;
  return { rva, maximum, tableRva, defaultRva, bindings };
}

function findDispatch(image, vtable) {
  const candidates = new Map();
  for (const method of vtable.methods) {
    const offset = image.offset(method.rva);
    if (offset === null) continue;
    if (
      !matches(image.data, offset, [0x48, 0x89, 0x5c, 0x24, 0x18, 0x56, 0x48, 0x83, 0xec, 0x30])
    ) {
      continue;
    }
    // Recognize the property-list loop, including the enum passed as r8d and its stored result.
    // This bounds the search to the first 256 bytes of an RTTI-identified Lua virtual method.
    for (let relative = 4; relative < 256; relative += 1) {
      const at = offset + relative;
      if (
        !matches(image.data, at - 4, [0x44, 0x8b, 0x04, 0x2f, 0xe8]) ||
        !matches(image.data, at + 5, [0x48, 0x63, 0x0c, 0x2f]) ||
        !matches(image.data, at + 22, [0x0f, 0x10, 0x00, 0x0f, 0x11, 0x04, 0xcb])
      ) {
        continue;
      }
      const callRva = method.rva + relative;
      const targetRva = callRva + 5 + image.data.readInt32LE(at + 1);
      const dispatch = readDispatch(image, targetRva);
      if (dispatch)
        candidates.set(targetRva, {
          ...dispatch,
          methodRva: method.rva,
          vtableSlot: method.slot,
          callRva,
        });
    }
  }
  if (candidates.size !== 1)
    throw new Error(`无法唯一识别 Lua modifier 回调分派结构（${candidates.size} 个候选）`);
  return [...candidates.values()][0];
}

function analyzeDll(data, declarations = [], comments = {}) {
  const declared = new Map(declarations.map((member) => [member.name, member]));
  const referenceNames = Object.keys(comments)
    .filter((key) => key.startsWith('enum:modifierfunction#member:'))
    .map((key) => key.slice('enum:modifierfunction#member:'.length));
  let image;
  let enums;
  let dispatch;
  let vtable;
  const errors = [];
  try {
    image = new PeImage(data);
    enums = readModifierEnums(image);
    vtable = findLuaVtable(image);
    dispatch = findDispatch(image, vtable);
  } catch (error) {
    errors.push(error.message);
  }
  const runtime = new Map((enums?.members || []).map((member) => [member.name, member]));
  const names = [...new Set([...runtime.keys(), ...declared.keys(), ...referenceNames])]
    .filter((name) => /^MODIFIER_(?:PROPERTY|EVENT)_/.test(name))
    .sort();
  const entries = names.map((name) => {
    const member = runtime.get(name);
    const declaration = declared.get(name);
    const comment = comments[`enum:modifierfunction#member:${name}`]?.description;
    const intendedCallback = declaration?.description?.match(/Method Name: `([^`]+)`/)?.[1];
    let binding;
    if (dispatch && member) {
      binding =
        member.value <= dispatch.maximum
          ? dispatch.bindings[member.value]
          : {
              status: 'unbound',
              branchRva: dispatch.defaultRva,
            };
    }
    const status = binding?.status || (enums && !member ? 'not_in_binary' : 'unknown');
    const entry = {
      name,
      status,
      runtimeValue: member?.value ?? null,
      declarationValue: declaration?.value ?? null,
      declaredCallback: intendedCallback || null,
      referenceComment: comment || null,
      declarationValueMismatch: Boolean(
        member && declaration && member.value !== declaration.value,
      ),
      evidence: {
        enumRecordRva: member ? hex(member.recordRva) : null,
        branchRva: binding ? hex(binding.branchRva) : null,
        callbackRva: binding?.callbackRva ? hex(binding.callbackRva) : null,
      },
    };
    if (status === 'unknown') entry.reason = errors[0] || '分派分支的指令结构尚未识别';
    if (status === 'not_in_binary') entry.reason = '已识别的当前 modifier 枚举表没有此名称';
    return entry;
  });
  const summary = Object.fromEntries(
    ['bound', 'unbound', 'not_in_binary', 'unknown'].map((status) => [
      status,
      entries.filter((entry) => entry.status === status).length,
    ]),
  );
  return {
    complete: errors.length === 0 && summary.unknown === 0,
    errors,
    sha256: image?.sha256 || require('crypto').createHash('sha256').update(data).digest('hex'),
    imageBase: image ? hex(image.imageBase) : null,
    peTimestamp: image?.timestamp ?? null,
    enumTableRva: enums ? hex(enums.tableRva) : null,
    route: dispatch
      ? {
          className: 'CDOTA_Modifier_Lua',
          vtableRva: hex(vtable.tableRva),
          vtableSlot: dispatch.vtableSlot,
          methodRva: hex(dispatch.methodRva),
          callRva: hex(dispatch.callRva),
          dispatchRva: hex(dispatch.rva),
          jumpTableRva: hex(dispatch.tableRva),
          maximumValue: dispatch.maximum,
          emptyBranchRva: hex(dispatch.defaultRva),
        }
      : null,
    summary,
    declarationValueMismatches: entries
      .filter((entry) => entry.declarationValueMismatch)
      .map((entry) => entry.name),
    entries,
  };
}

module.exports = { analyzeDll, readBinding, readDispatch, findDispatch };
