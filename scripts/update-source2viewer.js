const path = require('path');
const { acquireLock } = require('./update-resources');
const { updateSource2Viewer } = require('./resources/source2viewer');

function parseArguments(args) {
  const options = {};
  for (const arg of args) {
    if (arg === '--help' || arg === '-h') options.help = true;
    else throw new Error(`未知参数：${arg}。使用 --help 查看用法。`);
  }
  return options;
}

async function main() {
  const options = parseArguments(process.argv.slice(2));
  if (options.help) {
    console.log(
      'yarn update:source2viewer\n检测并下载 ValveResourceFormat 官方最新 Source2Viewer-CLI，校验后替换本地工具和 tools/source2viewer.json。',
    );
    return;
  }
  if (process.platform !== 'win32')
    throw new Error('Source2Viewer-CLI 更新使用 Windows x64 工具，请在 Windows 上运行。');
  const root = path.resolve(__dirname, '..');
  const unlock = acquireLock(root);
  try {
    await updateSource2Viewer({ root });
  } finally {
    unlock();
  }
}

if (require.main === module)
  main().catch((error) => {
    console.error(`Source2Viewer 更新失败：${error.message}`);
    process.exitCode = 1;
  });

module.exports = { parseArguments };
