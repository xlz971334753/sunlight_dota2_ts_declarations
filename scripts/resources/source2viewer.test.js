const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const {
  checkForUpdate,
  compareVersions,
  parseVersion,
  updateSource2Viewer,
} = require('./source2viewer');

function temporary(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'source2viewer-test-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  return root;
}

function write(root, name, data) {
  const filename = path.join(root, name);
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  fs.writeFileSync(filename, data);
  return filename;
}

function manifest(root, version = '20.0') {
  write(root, 'tools/source2viewer.json', `${JSON.stringify({ version, files: {} })}\n`);
}

test('Source2Viewer 版本比较支持工具构建号', () => {
  assert.deepEqual(parseVersion('v20.1.6980').parts, [20, 1, 6980]);
  assert.equal(compareVersions('20.1', '20.0.9999') > 0, true);
  assert.equal(compareVersions('20.1.6980', '20.1'), 6980);
});

test('运行时能检测到较新的 Source2Viewer', async (t) => {
  const root = temporary(t);
  manifest(root);
  const result = await checkForUpdate(
    root,
    path.join(root, 'tools/cli-windows-x64/Source2Viewer-CLI.exe'),
    async () => '21.1',
  );
  assert.deepEqual(result, {
    currentVersion: '20.0',
    latestVersion: '21.1',
    available: true,
  });
});

test('升级命令校验并原子替换工具和清单', async (t) => {
  const root = temporary(t);
  manifest(root);
  for (const name of ['Source2Viewer-CLI.exe', 'libSkiaSharp.dll', 'spirv-cross.dll']) {
    write(root, `tools/cli-windows-x64/${name}`, 'old');
  }

  const result = await updateSource2Viewer({
    root,
    getLatestRelease: async () => ({
      tag: '21.1',
      version: '21.1',
      assetUrl:
        'https://github.com/ValveResourceFormat/ValveResourceFormat/releases/download/21.1/cli-windows-x64.zip',
    }),
    download: async (_url, filename) =>
      write(path.dirname(filename), path.basename(filename), 'archive'),
    async unpack(_archive, directory) {
      for (const name of ['Source2Viewer-CLI.exe', 'libSkiaSharp.dll', 'spirv-cross.dll']) {
        write(directory, name, 'new');
      }
    },
  });

  assert.equal(result.updated, true);
  assert.equal(
    JSON.parse(fs.readFileSync(path.join(root, 'tools/source2viewer.json'))).version,
    '21.1',
  );
  assert.equal(
    fs.readFileSync(path.join(root, 'tools/cli-windows-x64/Source2Viewer-CLI.exe'), 'utf8'),
    'new',
  );
  assert.equal(fs.existsSync(path.join(root, '.resource-work-source2viewer-')), false);
});
