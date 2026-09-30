const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { findDota, readBuild } = require('../resources/steam');
const { analyzeDll } = require('./analyze');

const PROJECT_ROOT = path.resolve(__dirname, '../..');
const STATUS_LABELS = {
  bound: '有 Lua 回调绑定（未验证实际效果）',
  unbound: '无 Lua 回调绑定',
  not_in_binary: '当前 DLL 枚举表未收录',
  unknown: '无法识别',
};

function parseArguments(args) {
  const options = {
    side: 'both',
    output: path.join(PROJECT_ROOT, 'artifacts/modifier-functions.json'),
  };
  const keys = {
    '--dota-path': 'dotaPath',
    '--dll': 'dll',
    '--side': 'side',
    '--output': 'output',
  };
  const seen = new Set();
  for (let index = 0; index < args.length; index += 1) {
    const flag = args[index];
    if (flag === '--help') return { help: true };
    const key = keys[flag];
    const value = args[index + 1];
    if (!key || !value || value.startsWith('--') || seen.has(flag)) {
      throw new Error(`参数无效或重复：${flag}`);
    }
    options[key] = value;
    seen.add(flag);
    index += 1;
  }
  if (!['server', 'client', 'both'].includes(options.side))
    throw new Error('--side 必须是 server、client 或 both');
  if (options.dll && options.dotaPath) throw new Error('--dll 与 --dota-path 不能同时使用');
  if (options.dll && !seen.has('--side')) {
    options.side = path.basename(options.dll).toLowerCase() === 'client.dll' ? 'client' : 'server';
  }
  if (options.dll && options.side === 'both') throw new Error('单个 --dll 不能使用 --side both');
  if (!options.output.endsWith('.json')) throw new Error('--output 必须是 .json 报告路径');
  options.output = path.resolve(options.output);
  if (options.dll) options.dll = path.resolve(options.dll);
  return options;
}

function markdownCell(value) {
  return String(value ?? '')
    .replace(/\|/g, '\\|')
    .replace(/[\r\n]+/g, ' ');
}

function renderMarkdown(report) {
  const lines = [
    '# Modifier function Lua 绑定检查',
    '',
    `检查时间：${report.checkedAt}；Steam build：${report.build?.buildId || '未提供'}。`,
    '',
    '本报告检查 Windows x64 DLL 中 CDOTA_Modifier_Lua 的常规回调绑定路径。',
    '“有绑定”不保证回调的触发条件、参数、返回值或实际游戏效果正确；未进行局内验证。',
    '“无法识别”表示二进制结构未被检查器确认，不能据此判断不可用。',
    '',
  ];
  for (const result of report.results) {
    lines.push(
      `## ${result.side}`,
      '',
      `文件：${result.path}`,
      '',
      `SHA-256：${result.sha256}`,
      '',
    );
    lines.push(`完整识别：${result.complete ? '是' : '否'}。`, '');
    if (result.errors.length) lines.push(...result.errors.map((error) => `- ${error}`), '');
    lines.push('| 状态 | 数量 |', '| --- | ---: |');
    for (const [status, count] of Object.entries(result.summary)) {
      lines.push(`| ${STATUS_LABELS[status]} | ${count} |`);
    }
    lines.push('');
    if (result.route) {
      lines.push(
        `虚函数表：${result.route.vtableRva}；槽位：${result.route.vtableSlot}。`,
        '',
        `分派函数：${result.route.dispatchRva}；跳转表：${result.route.jumpTableRva}；空绑定分支：${result.route.emptyBranchRva}。`,
        '',
      );
    }
    lines.push('### 声明中的枚举值变化', '');
    lines.push(
      ...(result.declarationValueMismatches.length
        ? result.declarationValueMismatches.map((name) => `- ${name}`)
        : ['无差异。']),
      '',
    );
    lines.push(
      '### 全部结果',
      '',
      '| 名称 | DLL 值 | 声明值 | 状态 | 分支 RVA | 回调 RVA | 中文参考 |',
      '| --- | ---: | ---: | --- | --- | --- | --- |',
    );
    for (const entry of result.entries) {
      lines.push(
        `| ${[
          entry.name,
          entry.runtimeValue,
          entry.declarationValue,
          STATUS_LABELS[entry.status],
          entry.evidence.branchRva,
          entry.evidence.callbackRva,
          entry.referenceComment,
        ]
          .map(markdownCell)
          .join(' | ')} |`,
      );
    }
    lines.push('');
  }
  return `${lines.join('\n')}\n`;
}

function atomicWrite(filename, text) {
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  const temporary = `${filename}.${process.pid}.${crypto.randomBytes(4).toString('hex')}.tmp`;
  try {
    fs.writeFileSync(temporary, text, { flag: 'wx' });
    fs.renameSync(temporary, filename);
  } finally {
    if (fs.existsSync(temporary)) fs.unlinkSync(temporary);
  }
}

function runCheck(options) {
  const declarationsPath = require.resolve('@moddota/dota-data/files/vscripts/enums.json');
  const declarations = JSON.parse(fs.readFileSync(declarationsPath, 'utf8')).find(
    (item) => item.name === 'modifierfunction',
  ).members;
  const comments = JSON.parse(
    fs.readFileSync(path.join(PROJECT_ROOT, 'config/manual_comments.json'), 'utf8'),
  );
  let install;
  if (!options.dll) install = findDota(options.dotaPath || process.env.DOTA2_PATH);
  const sides = options.side === 'both' ? ['server', 'client'] : [options.side];
  const report = {
    schema: 2,
    analysisVersion: 1,
    checkedAt: new Date().toISOString(),
    build: install ? readBuild(install) : null,
    scope: 'Windows x64 CDOTA_Modifier_Lua static callback binding; no runtime verification',
    declarationsVersion: require('@moddota/dota-data/package.json').version,
    declarationsSha256: crypto
      .createHash('sha256')
      .update(fs.readFileSync(declarationsPath))
      .digest('hex'),
    results: [],
  };
  for (const side of sides) {
    const filename = options.dll || path.join(install.root, 'game/dota/bin/win64', `${side}.dll`);
    const data = fs.readFileSync(filename);
    report.results.push({
      side,
      path: fs.realpathSync(filename),
      size: data.length,
      ...analyzeDll(data, declarations, comments),
    });
  }
  const inputs = report.results.map((result) => path.resolve(result.path).toLowerCase());
  const markdownPath = options.output.replace(/\.json$/, '.md');
  if ([options.output, markdownPath].some((filename) => inputs.includes(filename.toLowerCase()))) {
    throw new Error('报告路径不能覆盖输入 DLL');
  }
  atomicWrite(options.output, `${JSON.stringify(report, null, 2)}\n`);
  atomicWrite(markdownPath, renderMarkdown(report));
  return report;
}

function main(args) {
  const options = parseArguments(args);
  if (options.help) {
    console.log(
      '用法：npm run check:modifiers -- [--dota-path <安装目录>] [--side server|client|both] [--output <报告.json>]',
    );
    console.log('离线检查：npm run check:modifiers -- --dll <DLL路径> [--side server|client]');
    return 0;
  }
  const report = runCheck(options);
  for (const result of report.results)
    console.log(`${result.side}: ${JSON.stringify(result.summary)}`);
  console.log(`报告：${options.output}`);
  return report.results.every((result) => result.complete) ? 0 : 2;
}

if (require.main === module) {
  try {
    process.exitCode = main(process.argv.slice(2));
  } catch (error) {
    console.error(`modifier 检查失败：${error.message}`);
    process.exitCode = 2;
  }
}

module.exports = { parseArguments, renderMarkdown, runCheck };
