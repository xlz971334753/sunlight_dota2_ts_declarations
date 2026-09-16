const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { spawn } = require('child_process');
const { within } = require('./keyvalues');

function sha256(filename) {
  return crypto.createHash('sha256').update(fs.readFileSync(filename)).digest('hex');
}

function verifyFiles(directory, manifest) {
  try {
    if (!fs.lstatSync(directory).isDirectory() || fs.lstatSync(directory).isSymbolicLink())
      return false;
    return Object.entries(manifest.files).every(([name, digest]) => {
      const filename = path.join(directory, name);
      const stat = fs.lstatSync(filename);
      return stat.isFile() && !stat.isSymbolicLink() && sha256(filename) === digest;
    });
  } catch (error) {
    if (error.code === 'ENOENT' || error.code === 'ENOTDIR') return false;
    throw error;
  }
}

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { windowsHide: true, stdio: ['ignore', 'ignore', 'pipe'] });
    let stderr = '';
    child.stderr.on('data', (data) => {
      stderr = (stderr + data.toString()).slice(-8000);
    });
    child.on('error', (error) => reject(new Error(`无法执行 ${command}：${error.message}`)));
    child.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} 执行失败（${code}）：${stderr.trim()}`));
    });
  });
}

async function download(url, destination) {
  // Windows 10/11 ships curl and tar. Curl honors HTTPS_PROXY without persistent configuration.
  await run('curl.exe', [
    '--fail',
    '--location',
    '--silent',
    '--show-error',
    '--proto',
    '=https',
    '--proto-redir',
    '=https',
    '--connect-timeout',
    '15',
    '--max-time',
    '300',
    '--retry',
    '2',
    '--output',
    destination,
    url,
  ]);
}

async function unpack(archive, destination) {
  await run('tar.exe', ['-xf', archive, '-C', destination]);
}

// The caller holds the resource-update lock through download, extraction and publication.
async function ensureTool(root, operations = {}) {
  root = path.resolve(root);
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'tools/source2viewer.json'), 'utf8'));
  if (
    !manifest.url.startsWith('https://') ||
    !/^[a-f0-9]{64}$/.test(manifest.sha256) ||
    !Number.isSafeInteger(manifest.size) ||
    manifest.size <= 0 ||
    !manifest.files?.['Source2Viewer-CLI.exe'] ||
    Object.entries(manifest.files).some(
      ([name, digest]) =>
        name !== path.basename(name) ||
        name.includes('/') ||
        name.includes('\\') ||
        !/^[a-f0-9]{64}$/.test(digest),
    )
  ) {
    throw new Error('tools/source2viewer.json 中的下载或哈希配置无效。');
  }
  const installed = path.join(root, 'tools/cli-windows-x64');
  const executable = path.join(installed, 'Source2Viewer-CLI.exe');
  if (verifyFiles(installed, manifest)) return executable;

  console.log(
    `下载并校验 Source2Viewer ${manifest.version}（${(manifest.size / 1024 / 1024).toFixed(
      1,
    )} MiB）…`,
  );
  const work = fs.mkdtempSync(path.join(root, '.resource-work-tool-'));
  let keepWork = false;
  try {
    const archive = path.join(work, 'cli-windows-x64.zip');
    await (operations.download || download)(manifest.url, archive);
    if (fs.statSync(archive).size !== manifest.size || sha256(archive) !== manifest.sha256) {
      throw new Error('下载的 Source2Viewer 压缩包大小或 SHA-256 不匹配，拒绝安装。');
    }
    const extracted = path.join(work, 'extracted');
    fs.mkdirSync(extracted);
    await (operations.unpack || unpack)(archive, extracted);
    if (!verifyFiles(extracted, manifest))
      throw new Error('解压后的 Source2Viewer 文件 SHA-256 不匹配，拒绝安装。');
    const backup = path.join(work, 'previous');
    const hadPrevious = fs.existsSync(installed);
    if (hadPrevious) fs.renameSync(installed, backup);
    try {
      fs.renameSync(extracted, installed);
    } catch (error) {
      if (hadPrevious) {
        try {
          fs.renameSync(backup, installed);
        } catch (rollbackError) {
          keepWork = true;
          throw new Error(
            `工具安装失败且无法回滚，原工具保存在 ${backup}：${error.message}；${rollbackError.message}`,
          );
        }
      }
      throw error;
    }
    console.log(`Source2Viewer ${manifest.version} 已安装并通过 SHA-256 校验。`);
    return executable;
  } finally {
    if (
      !keepWork &&
      within(root, work) &&
      path.dirname(work) === root &&
      path.basename(work).startsWith('.resource-work-tool-')
    ) {
      fs.rmSync(work, { recursive: true, force: true });
    }
  }
}

module.exports = { ensureTool, verifyFiles };
