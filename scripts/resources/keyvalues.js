const fs = require('fs');
const path = require('path');

// Keep ordered pairs: Valve KV allows duplicate keys (notably shops' "item").
function parseKeyValues(text, filename = '<text>') {
  const tokens = [];
  const pattern =
    /\s+|\/\/[^\r\n]*|\/\*[\s\S]*?\*\/|"(?:\\[\s\S]|[^"\\])*"|[{}]|\[[^\]]*\]|[^\s{}"\[\]]+/gy;
  let offset = text.charCodeAt(0) === 0xfeff ? 1 : 0;
  while (offset < text.length) {
    pattern.lastIndex = offset;
    const match = pattern.exec(text);
    if (!match) throw new Error(`${filename}: 无法解析 KV，位置 ${offset}`);
    const raw = match[0];
    offset = pattern.lastIndex;
    if (raw.startsWith('/*') && !raw.endsWith('*/')) {
      throw new Error(`${filename}: 未闭合的 KV 注释`);
    }
    if (/^\s|^\/\//.test(raw) || raw.startsWith('/*')) continue;
    const quoted = raw.startsWith('"');
    const value = quoted
      ? raw
          .slice(1, -1)
          .replace(/\\([\\"nrt])/g, (_, char) => ({ n: '\n', r: '\r', t: '\t' }[char] || char))
      : raw;
    tokens.push({ value, quoted });
  }
  let index = 0;
  function block(nested) {
    const entries = [];
    while (index < tokens.length) {
      const key = tokens[index++];
      if (!key.quoted && key.value === '}') {
        if (!nested) throw new Error(`${filename}: 多余的 }`);
        return entries;
      }
      if (!key.quoted && ['{', '['].includes(key.value[0])) {
        throw new Error(`${filename}: 无效的 KV 键 ${key.value}`);
      }
      const token = tokens[index++];
      if (!token || (!token.quoted && token.value === '}')) {
        throw new Error(`${filename}: ${key.value} 缺少值`);
      }
      const value = !token.quoted && token.value === '{' ? block(true) : token.value;
      // Silently ignoring platform conditions could select the wrong Steam path or data.
      if (tokens[index] && !tokens[index].quoted && tokens[index].value.startsWith('[')) {
        throw new Error(`${filename}: 尚不支持 KV 条件 ${tokens[index].value}`);
      }
      entries.push([key.value, value]);
    }
    if (nested) throw new Error(`${filename}: KV 块缺少 }`);
    return entries;
  }
  return block(false);
}

function readText(filename) {
  const data = fs.readFileSync(filename);
  if (data[0] === 0xff && data[1] === 0xfe) return data.subarray(2).toString('utf16le');
  if (data[0] === 0xfe && data[1] === 0xff) return data.subarray(2).swap16().toString('utf16le');
  return data.toString('utf8');
}

function get(entries, name) {
  return entries.find(([key]) => key.toLowerCase() === name.toLowerCase())?.[1];
}

function requireBlock(entries, name, filename) {
  // #include can add another root block with the same name; consume every block.
  const matches = entries.filter(([key]) => key.toLowerCase() === name.toLowerCase());
  if (!matches.length || matches.some(([, value]) => !Array.isArray(value))) {
    throw new Error(`${filename}: 缺少或无效的 ${name} 块`);
  }
  return matches.flatMap(([, value]) => value);
}

function walk(entries, visit) {
  for (const [key, value] of entries) {
    visit(key, value);
    if (Array.isArray(value)) walk(value, visit);
  }
}

function within(root, filename) {
  const relative = path.relative(path.resolve(root), path.resolve(filename));
  return relative !== '..' && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative);
}

function mergeBase(local, base) {
  const result = local.map(([key, value]) => [key, value]);
  for (const [key, value] of base) {
    const existing = result.find(([name]) => name === key);
    if (!existing) result.push([key, value]);
    else if (Array.isArray(existing[1]) && Array.isArray(value)) {
      existing[1] = mergeBase(existing[1], value);
    }
  }
  return result;
}

function loadKeyValues(filename, root = path.dirname(filename), stack = []) {
  filename = path.resolve(filename);
  if (!within(root, filename)) throw new Error(`KV 引用超出资源目录：${filename}`);
  if (stack.includes(filename))
    throw new Error(`KV 循环引用：${[...stack, filename].join(' -> ')}`);
  const entries = parseKeyValues(readText(filename), filename);
  let result = entries.filter(([key]) => !key.startsWith('#'));
  for (const [key, value] of entries.filter(([name]) => name.startsWith('#'))) {
    if (!['#base', '#include'].includes(key) || typeof value !== 'string') {
      throw new Error(`${filename}: 不支持的 KV 指令 ${key}`);
    }
    const included = loadKeyValues(path.resolve(path.dirname(filename), value), root, [
      ...stack,
      filename,
    ]);
    result = key === '#base' ? mergeBase(result, included) : result.concat(included);
  }
  return result;
}

module.exports = { parseKeyValues, readText, get, requireBlock, walk, within, loadKeyValues };
