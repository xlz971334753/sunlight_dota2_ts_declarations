const fs = require('fs');
const path = require('path');
const { URL } = require('url');
const { spawnSync } = require('child_process');
const { within } = require('./keyvalues');
const { download, sha256, unpack, verifyFiles } = require('./tool');

const REPOSITORY = 'ValveResourceFormat/ValveResourceFormat';
const LATEST_RELEASE_URL = `https://github.com/${REPOSITORY}/releases/latest`;
const DOWNLOAD_BASE_URL = `https://github.com/${REPOSITORY}/releases/download`;
const ARCHIVE_NAME = 'cli-windows-x64.zip';
const TOOL_FILES = ['Source2Viewer-CLI.exe', 'libSkiaSharp.dll', 'spirv-cross.dll'];
const USER_AGENT = 'sunlight-dota2-ts-declarations';

const manifestPath = (root) => path.join(root, 'tools/source2viewer.json');

const installedPath = (root) => path.join(root, 'tools/cli-windows-x64');

function parseVersion(value) {
  const text = String(value).trim().replace(/^v/i, '');
  const match = text.match(/^(\d+(?:\.\d+)*)(?:[-+].*)?$/);
  if (!match) throw new Error(`无法识别 Source2Viewer 版本：${value}`);
  return { text, parts: match[1].split('.').map(Number) };
}

function compareVersionParts(left, right) {
  const length = Math.max(left.length, right.length);
  for (let index = 0; index < length; index += 1) {
    const leftPart = left[index] || 0;
    const rightPart = right[index] || 0;
    if (leftPart !== rightPart) return leftPart - rightPart;
  }

  return 0;
}

const compareVersions = (left, right) =>
  compareVersionParts(parseVersion(left).parts, parseVersion(right).parts);

function isSameRelease(left, right) {
  const leftParts = parseVersion(left).parts;
  const rightParts = parseVersion(right).parts.slice(0, leftParts.length);
  return compareVersionParts(leftParts, rightParts) === 0;
}

function readManifest(root) {
  const filename = manifestPath(root);
  let manifest;
  try {
    manifest = JSON.parse(fs.readFileSync(filename, 'utf8'));
  } catch (error) {
    throw new Error(`无法读取 Source2Viewer 清单：${error.message}`);
  }

  parseVersion(manifest.version);
  return manifest;
}

function tagFromEffectiveUrl(effectiveUrl) {
  let parsed;
  try {
    parsed = new URL(effectiveUrl);
  } catch {
    throw new Error(`查询 Source2Viewer 最新版本返回了无效地址：${effectiveUrl || '空响应'}`);
  }

  const match = parsed.pathname.match(/\/releases\/tag\/([^/]+)$/);
  if (!match) throw new Error(`无法从 GitHub 地址识别 Source2Viewer 版本：${effectiveUrl}`);
  return decodeURIComponent(match[1]);
}

function requestLatestTag(url = LATEST_RELEASE_URL) {
  const result = spawnSync(
    'curl.exe',
    [
      '--fail',
      '--silent',
      '--show-error',
      '--head',
      '--location',
      '--connect-timeout',
      '15',
      '--max-time',
      '30',
      '--retry',
      '2',
      '--proto',
      '=https',
      '--proto-redir',
      '=https',
      '--user-agent',
      USER_AGENT,
      '--output',
      'NUL',
      '--dump-header',
      'NUL',
      '--write-out',
      '%{url_effective}',
      url,
    ],
    { encoding: 'utf8', windowsHide: true, maxBuffer: 1024 * 1024 },
  );
  if (result.error || result.status !== 0) {
    throw new Error(
      `curl.exe 执行失败：${result.error?.message || result.stderr || result.status}`,
    );
  }

  return tagFromEffectiveUrl(result.stdout.trim());
}

async function getLatestRelease(fetchTag = requestLatestTag) {
  const tag = await fetchTag();
  const version = parseVersion(tag).text;
  return {
    tag,
    version,
    assetUrl: `${DOWNLOAD_BASE_URL}/${encodeURIComponent(tag)}/${ARCHIVE_NAME}`,
  };
}

function installedVersion(executable) {
  const result = spawnSync(executable, ['--version'], {
    encoding: 'utf8',
    windowsHide: true,
    maxBuffer: 1024 * 1024,
  });
  if (result.error || result.status !== 0) return null;
  const match = `${result.stdout || ''}\n${result.stderr || ''}`.match(/(?:^|\n)version:\s*(\S+)/i);
  return match ? parseVersion(match[1]).text : null;
}

async function checkForUpdate(root, extractor, fetchTag = requestLatestTag) {
  const manifest = readManifest(root);
  const latest = await getLatestRelease(fetchTag);
  const current = installedVersion(extractor) || parseVersion(manifest.version).text;
  const latestParts = parseVersion(latest.version).parts;
  const currentParts = parseVersion(current).parts.slice(0, latestParts.length);
  return {
    currentVersion: current,
    latestVersion: latest.version,
    available: compareVersionParts(latestParts, currentParts) > 0,
  };
}

const fileDigests = (directory) =>
  Object.fromEntries(
    TOOL_FILES.map((name) => {
      const filename = path.join(directory, name);
      const stat = fs.lstatSync(filename);
      if (!stat.isFile() || stat.isSymbolicLink()) {
        throw new Error(`Source2Viewer 解压结果缺少文件或包含符号链接：${name}`);
      }

      return [name, sha256(filename)];
    }),
  );

async function updateSource2Viewer(options = {}) {
  const root = path.resolve(options.root || path.resolve(__dirname, '../..'));
  const latest = await (options.getLatestRelease || getLatestRelease)();
  const filename = manifestPath(root);
  const installed = installedPath(root);
  if (fs.existsSync(filename)) {
    try {
      const current = readManifest(root);
      if (isSameRelease(latest.version, current.version) && verifyFiles(installed, current)) {
        console.log(`Source2Viewer ${current.version} 已是最新，无需更新。`);
        return { updated: false, version: current.version, manifest: current };
      }
    } catch {
      // A missing or invalid local installation is repaired below.
    }
  }

  const work = fs.mkdtempSync(path.join(root, '.resource-work-source2viewer-'));
  const archive = path.join(work, ARCHIVE_NAME);
  const extracted = path.join(work, 'extracted');
  const installedBackup = path.join(work, 'previous-tool');
  const manifestBackup = path.join(work, 'previous-manifest.json');
  const manifestTemporary = path.join(work, 'source2viewer.json');
  let keepWork = false;
  let installedMoved = false;
  let manifestMoved = false;
  let newInstalled = false;
  let newManifest = false;

  try {
    await (options.download || download)(latest.assetUrl, archive);
    if (!fs.existsSync(archive) || !fs.statSync(archive).isFile()) {
      throw new Error('Source2Viewer 下载结果不存在或不是文件。');
    }

    const archiveSize = fs.statSync(archive).size;
    const archiveSha256 = sha256(archive);
    fs.mkdirSync(extracted);
    await (options.unpack || unpack)(archive, extracted);
    const files = fileDigests(extracted);
    const manifest = {
      version: latest.version,
      url: latest.assetUrl,
      size: archiveSize,
      sha256: archiveSha256,
      files,
    };
    if (!verifyFiles(extracted, manifest)) throw new Error('解压后的 Source2Viewer 文件校验失败。');
    fs.writeFileSync(manifestTemporary, `${JSON.stringify(manifest, null, 2)}\n`);

    if (fs.existsSync(installed)) {
      fs.renameSync(installed, installedBackup);
      installedMoved = true;
    }

    fs.renameSync(extracted, installed);
    newInstalled = true;
    if (fs.existsSync(filename)) {
      fs.renameSync(filename, manifestBackup);
      manifestMoved = true;
    }

    fs.renameSync(manifestTemporary, filename);
    newManifest = true;
    console.log(`Source2Viewer ${latest.version} 已下载、校验并安装。`);
    return { updated: true, version: latest.version, manifest };
  } catch (error) {
    try {
      if (newManifest && fs.existsSync(filename)) fs.rmSync(filename, { force: true });
      if (manifestMoved && fs.existsSync(manifestBackup)) fs.renameSync(manifestBackup, filename);
      if (newInstalled) fs.rmSync(installed, { recursive: true, force: true });
      if (installedMoved && fs.existsSync(installedBackup)) {
        fs.renameSync(installedBackup, installed);
      }
    } catch (rollbackError) {
      keepWork = true;
      throw new Error(
        `Source2Viewer 更新失败且无法完整回滚，临时目录保留在 ${work}：${error.message}；${rollbackError.message}`,
      );
    }

    throw error;
  } finally {
    if (!keepWork && within(root, work) && path.basename(work).startsWith('.resource-work-')) {
      fs.rmSync(work, { recursive: true, force: true });
    }
  }
}

const warning = (text) => `\u001B[33m提示：${text}\u001B[0m`;

module.exports = {
  checkForUpdate,
  compareVersions,
  getLatestRelease,
  installedVersion,
  parseVersion,
  updateSource2Viewer,
  warning,
};
