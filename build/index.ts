import fs from 'fs-extra';
import path from 'path';
import { generatedLua, generatedLuaEnumMappings } from './lua';
import { generatedPanorama, generatedPanoramaEnumMappings } from './panorama';
import { diff_types, render_diff_markdown } from '../scripts/diff-types';

const write = (packageName: string, type: string, content: string) =>
  fs.outputFile(
    path.resolve(__dirname, `../packages/${packageName}/types/${type}.generated.d.ts`),
    content,
  );

const snapshot_root = path.resolve(__dirname, '../artifacts/type-snapshots');
const snapshot_previous = path.join(snapshot_root, 'prev');
const snapshot_current = path.join(snapshot_root, 'current');

const changelog_root = path.resolve(__dirname, '../artifacts/changelog');
const changelog_md_path = path.join(changelog_root, 'types-changelog.md');

function format_local_timestamp(date: Date): string {
  const pad2 = (n: number) => String(n).padStart(2, '0');
  const yyyy = date.getFullYear();
  const mm = pad2(date.getMonth() + 1);
  const dd = pad2(date.getDate());
  const hh = pad2(date.getHours());
  const mi = pad2(date.getMinutes());
  const ss = pad2(date.getSeconds());
  return `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss}`;
}

function strip_changelog_title(md: string): string {
  const lines = md.split(/\r?\n/);
  if (lines.length > 0 && lines[0].trim() === '# Types changelog') {
    lines.shift();
    if (lines.length > 0 && lines[0].trim() === '') lines.shift();
  }

  return lines.join('\n').replace(/^\s+/, '');
}

async function ensure_changelog_header(): Promise<void> {
  const changelog_exists = await fs.pathExists(changelog_md_path);
  if (changelog_exists) return;

  await fs.outputFile(changelog_md_path, '# Types changelog\n');
}

async function update_snapshots_and_changelog() {
  await fs.ensureDir(snapshot_root);
  await fs.ensureDir(changelog_root);

  if (await fs.pathExists(snapshot_current)) {
    // Copy before clearing current; open directory handles can block renames on Windows.
    await fs.emptyDir(snapshot_previous);
    await fs.copy(snapshot_current, snapshot_previous, { overwrite: true });
  }

  await fs.emptyDir(snapshot_current);

  const copy_targets = [
    path.resolve(__dirname, '../packages/dota-lua-types/types'),
    path.resolve(__dirname, '../packages/panorama-types/types'),
    path.resolve(__dirname, '../packages/dota-lua-types/index.d.ts'),
    path.resolve(__dirname, '../packages/dota-lua-types/normalized.d.ts'),
    path.resolve(__dirname, '../packages/panorama-types/index.d.ts'),
    path.resolve(__dirname, '../packages/panorama-types/normalized.d.ts'),
  ];

  for (const target of copy_targets) {
    const relative_path = path.relative(path.resolve(__dirname, '..'), target);
    const destination = path.join(snapshot_current, relative_path);
    await fs.copy(target, destination, { overwrite: true });
  }

  if (await fs.pathExists(snapshot_previous)) {
    const diff = diff_types(snapshot_previous, snapshot_current);
    if (diff.summary.added === 0 && diff.summary.removed === 0 && diff.summary.changed === 0) {
      return;
    }

    await ensure_changelog_header();

    const timestamp = format_local_timestamp(new Date());
    const md = strip_changelog_title(render_diff_markdown(diff));
    const entry = `\n\n## ${timestamp}\n\n${md}`.replace(/\s+$/, '');
    await fs.appendFile(changelog_md_path, entry);
  } else {
    await ensure_changelog_header();
  }
}

Promise.all([
  ...Object.entries(generatedLua).map(([t, c]) => write('dota-lua-types', t, c)),
  fs.outputJson(
    path.resolve(__dirname, '../packages/dota-lua-types/transformer/mappings.json'),
    generatedLuaEnumMappings,
    { spaces: 4 },
  ),

  ...Object.entries(generatedPanorama).map(([t, c]) => write('panorama-types', t, c)),
  fs.outputJson(
    path.resolve(__dirname, '../packages/panorama-types/transformer/mappings.json'),
    generatedPanoramaEnumMappings,
    { spaces: 4 },
  ),
])
  .then(update_snapshots_and_changelog)
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
