const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');
const { parseKeyValues, readText, get, requireBlock } = require('./keyvalues');

function steamRoots() {
  const roots = [process.env.STEAM_PATH];
  if (process.platform === 'win32') {
    for (const [key, name] of [
      ['HKCU\\Software\\Valve\\Steam', 'SteamPath'],
      ['HKLM\\SOFTWARE\\WOW6432Node\\Valve\\Steam', 'InstallPath'],
      ['HKLM\\SOFTWARE\\Valve\\Steam', 'InstallPath'],
    ]) {
      const result = spawnSync('reg.exe', ['query', key, '/v', name], {
        encoding: 'utf8',
        windowsHide: true,
      });
      const match = result.stdout?.match(/REG_SZ\s+(.+)/);
      if (match) roots.push(match[1].trim());
    }
    for (const base of [process.env['ProgramFiles(x86)'], process.env.ProgramFiles]) {
      if (base) roots.push(path.join(base, 'Steam'));
    }
  } else {
    roots.push(
      path.join(os.homedir(), '.steam/steam'),
      path.join(os.homedir(), '.local/share/Steam'),
      path.join(os.homedir(), 'Library/Application Support/Steam'),
    );
  }
  return [...new Set(roots.filter(Boolean).map((root) => path.resolve(root)))];
}

function installation(directory, manifestPath) {
  const root = fs.realpathSync(directory);
  const vpk = path.join(root, 'game/dota/pak01_dir.vpk');
  if (!fs.existsSync(vpk)) throw new Error(`Dota 2 安装目录中没有 ${vpk}`);
  return { root, vpk, manifestPath: fs.existsSync(manifestPath) ? manifestPath : null };
}

function findDota(explicitPath, roots = steamRoots()) {
  if (explicitPath) {
    return installation(explicitPath, path.resolve(explicitPath, '../../appmanifest_570.acf'));
  }
  const libraries = new Set(roots);
  for (const root of roots) {
    for (const relative of ['steamapps/libraryfolders.vdf', 'config/libraryfolders.vdf']) {
      const filename = path.join(root, relative);
      if (!fs.existsSync(filename)) continue;
      const folders = requireBlock(
        parseKeyValues(readText(filename), filename),
        'libraryfolders',
        filename,
      );
      for (const [key, value] of folders) {
        if (!/^\d+$/.test(key)) continue;
        const folder = Array.isArray(value) ? get(value, 'path') : value;
        if (typeof folder === 'string') libraries.add(path.resolve(folder));
      }
    }
  }
  for (const library of libraries) {
    const manifestPath = path.join(library, 'steamapps/appmanifest_570.acf');
    if (!fs.existsSync(manifestPath)) continue;
    const state = requireBlock(
      parseKeyValues(readText(manifestPath), manifestPath),
      'AppState',
      manifestPath,
    );
    const directory = get(state, 'installdir');
    if (typeof directory !== 'string') continue;
    const root = path.join(library, 'steamapps/common', directory);
    if (fs.existsSync(path.join(root, 'game/dota/pak01_dir.vpk')))
      return installation(root, manifestPath);
  }
  throw new Error(
    '未找到 Dota 2。请设置 DOTA2_PATH，或使用 --dota-path "D:/Steam/steamapps/common/dota 2 beta"。',
  );
}

function readBuild(install) {
  if (!install.manifestPath) return null;
  const state = requireBlock(
    parseKeyValues(readText(install.manifestPath), install.manifestPath),
    'AppState',
    install.manifestPath,
  );
  if (get(state, 'appid') !== '570') throw new Error('Steam manifest 的 appid 不是 570。');
  const flags = Number(get(state, 'StateFlags'));
  // FullyInstalled, optionally AppRunning. Refuse a partial/staged/updating installation.
  if (!Number.isInteger(flags) || !(flags & 4) || (flags & ~(4 | 64)) !== 0) {
    throw new Error(`Dota 2 尚未完成更新（StateFlags=${flags}），请等待 Steam 完成更新后重试。`);
  }
  return { buildId: get(state, 'buildid'), lastUpdated: get(state, 'lastupdated') };
}

module.exports = { findDota, readBuild };
