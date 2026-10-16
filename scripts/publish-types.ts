import { execFileSync, execSync } from 'child_process';
import * as fs from 'fs';
import * as os from 'os';
import path from 'path';
import * as readline from 'readline';

interface PackageTarget {
  directory: string;
  name: string;
}

interface PublishResult {
  name: string;
  status: 'published' | 'skipped' | 'failed';
  version?: string;
  reason?: string;
}

type BumpType = 'major' | 'minor' | 'patch';

const ROOT_DIRECTORY = path.resolve(__dirname, '..');

const PACKAGE_TARGETS: PackageTarget[] = [
  {
    directory: path.join(ROOT_DIRECTORY, 'packages', 'dota-lua-types'),
    name: '@sunlight_xlz/dota-lua-types',
  },
  {
    directory: path.join(ROOT_DIRECTORY, 'packages', 'panorama-types'),
    name: '@sunlight_xlz/panorama-types',
  },
];

function parse_otp_argument(): string | undefined {
  const args = process.argv.slice(2);
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg.startsWith('--otp=')) {
      return arg.slice('--otp='.length);
    }

    if (arg === '--otp') {
      return args[index + 1] ?? '';
    }
  }

  return process.env.NPM_OTP;
}

function validate_otp(value: string | undefined): string | undefined {
  if (value === undefined) {
    return undefined;
  }

  const otp = value.trim();
  if (otp.startsWith('npm_')) {
    throw new Error(
      'An npm access token is not a 2FA OTP. Configure the token in npm authentication settings, ' +
        'not --otp or NPM_OTP. For a passkey/security key, omit --otp and authenticate in the browser.',
    );
  }

  // Match the numeric OTP / 64-character hexadecimal format accepted by npm CLI.
  if (!/^[\d ]+$|^[a-f\d]{64}$/i.test(otp)) {
    throw new Error(
      'Invalid npm OTP. Enter the numeric code from your authenticator, or omit --otp ' +
        'and NPM_OTP to use npm browser authentication. Never enter an npm access token here.',
    );
  }

  return otp.replace(/ /g, '');
}

function parse_bump_argument(): BumpType | undefined {
  const args = process.argv.slice(2);
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg.startsWith('--bump=')) {
      return arg.slice('--bump='.length) as BumpType;
    }

    if (arg === '--bump') {
      return args[index + 1] as BumpType;
    }
  }

  return undefined;
}

const is_bump_type = (value: string | undefined): value is BumpType =>
  value === 'major' || value === 'minor' || value === 'patch';

function redact_secrets(message: string, secrets: string[] = []): string {
  let redacted = message;
  for (const secret of secrets) {
    if (secret) {
      redacted = redacted.split(secret).join('[REDACTED]');
    }
  }

  return redacted
    .replace(/npm_[\w-]+/g, '[REDACTED npm token]')
    .replace(/(--otp(?:=|\s+))\S+/g, '$1[REDACTED]');
}

function run(
  command: string,
  cwd = ROOT_DIRECTORY,
  interactive = false,
  secrets: string[] = [],
): string {
  try {
    const output = execSync(command, {
      cwd,
      encoding: 'utf8',
      stdio: interactive ? 'inherit' : ['ignore', 'pipe', 'pipe'],
    });
    return interactive ? '' : output.trim();
  } catch (error) {
    const exec_error = error as { stdout?: string; stderr?: string; message?: string };
    const details = exec_error.stderr?.trim() || exec_error.stdout?.trim() || exec_error.message;
    throw new Error(redact_secrets(details || `Command failed: ${command}`, secrets));
  }
}

function ensure_npm_login(): void {
  try {
    const user_name = run('npm whoami');
    console.log(`Authenticated as ${user_name}`);
  } catch {
    throw new Error(
      'Cannot verify npm login. Run `npm whoami`, then `npm login` or configure a granular access token.',
    );
  }
}

function list_files_recursive(directory: string, base_directory = directory): string[] {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const absolute_path = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...list_files_recursive(absolute_path, base_directory));
      continue;
    }

    files.push(path.relative(base_directory, absolute_path).split(path.sep).join('/'));
  }

  return files.sort((left, right) => left.localeCompare(right));
}

function normalize_file_content(relative_path: string, content: Buffer): string {
  if (relative_path === 'package.json') {
    const parsed = JSON.parse(content.toString('utf8')) as Record<string, unknown>;
    delete parsed.version;
    return `${JSON.stringify(parsed, null, 2)}\n`;
  }

  return content.toString('utf8').replace(/\r\n/g, '\n');
}

function read_normalized_tree(package_root: string): Map<string, string> {
  const tree = new Map<string, string>();
  for (const relative_path of list_files_recursive(package_root)) {
    const absolute_path = path.join(package_root, relative_path);
    const content = fs.readFileSync(absolute_path);
    tree.set(relative_path, normalize_file_content(relative_path, content));
  }

  return tree;
}

function trees_are_equal(left: Map<string, string>, right: Map<string, string>): boolean {
  if (left.size !== right.size) {
    return false;
  }

  for (const [relative_path, left_content] of left) {
    if (right.get(relative_path) !== left_content) {
      return false;
    }
  }

  return true;
}

function pack_local_package(package_directory: string, output_directory: string): string {
  fs.mkdirSync(output_directory, { recursive: true });

  const packed = run(`npm pack --pack-destination "${output_directory}"`, package_directory)
    .split(/\r?\n/)
    .filter(Boolean)
    .pop();

  if (!packed) {
    throw new Error(`npm pack produced no tarball for ${package_directory}`);
  }

  return path.isAbsolute(packed) ? packed : path.join(output_directory, packed);
}

function extract_tarball(tarball_path: string, destination: string): string {
  fs.rmSync(destination, { recursive: true, force: true });
  fs.mkdirSync(destination, { recursive: true });
  execFileSync('tar', ['-xzf', tarball_path, '-C', destination], { stdio: 'pipe' });

  const package_root = path.join(destination, 'package');
  if (!fs.existsSync(package_root)) {
    throw new Error(`Expected package/ in extracted tarball ${tarball_path}`);
  }

  return package_root;
}

async function download_latest_tarball(
  package_name: string,
  destination_file: string,
): Promise<'found' | 'missing'> {
  let metadata_raw: string;
  try {
    metadata_raw = run(`npm view ${package_name} dist.tarball --json`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (message.includes('E404') || message.includes('404 Not Found')) {
      return 'missing';
    }

    throw error;
  }

  const tarball_url = JSON.parse(metadata_raw) as string;
  const response = await fetch(tarball_url);
  if (!response.ok) {
    throw new Error(`Failed to download ${tarball_url}: ${response.status} ${response.statusText}`);
  }

  fs.mkdirSync(path.dirname(destination_file), { recursive: true });
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(destination_file, buffer);
  return 'found';
}

function bump_version(package_directory: string, bump_type: BumpType): string {
  run(`npm version ${bump_type} --git-tag-version false`, package_directory);
  const package_json = JSON.parse(
    fs.readFileSync(path.join(package_directory, 'package.json'), 'utf8'),
  ) as { version: string };
  return package_json.version;
}

function prepare_version(target: PackageTarget, bump_type: BumpType): string {
  const package_json = JSON.parse(
    fs.readFileSync(path.join(target.directory, 'package.json'), 'utf8'),
  ) as { version: string };
  const current_version = package_json.version;
  let published_versions: string[];
  try {
    // Let npm resolve the semver range, including versions published under other tags.
    const metadata = JSON.parse(
      run(`npm view "${target.name}@>=${current_version}" version --json`),
    ) as string | string[];
    published_versions = typeof metadata === 'string' ? [metadata] : metadata;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (!message.includes('E404')) {
      throw error;
    }

    // A failed or cancelled publish leaves its version ready for the next attempt.
    console.log(`Using unpublished version ${target.name}@${current_version}`);
    return current_version;
  }

  if (published_versions.some((version) => version !== current_version)) {
    throw new Error(
      `A newer version of ${target.name} is already published. Update the local version before retrying.`,
    );
  }

  if (!published_versions.includes(current_version)) {
    throw new Error(`Unexpected npm version response for ${target.name}; refusing to bump.`);
  }

  const next_version = bump_version(target.directory, bump_type);
  console.log(`Bumped ${target.name} to ${next_version}`);
  return next_version;
}

function is_otp_error(message: string): boolean {
  const lower = message.toLowerCase();
  return (
    lower.includes('eotp') ||
    lower.includes('one-time password') ||
    lower.includes('two-factor authentication') ||
    lower.includes('bypass 2fa')
  );
}

const otp_help_message = (): string =>
  [
    'npm publish requires two-factor authentication.',
    'For a passkey/security key, run in an interactive terminal without --otp or NPM_OTP.',
    'npm will display the browser authentication link when required by the registry.',
    'For an authenticator app, use a fresh numeric code:',
    '  yarn publish:types --otp=<code>',
    '  npm run publish:types -- --otp=<code>',
    '  $env:NPM_OTP="<code>"; yarn publish:types',
    'npm_ access tokens belong in npm authentication settings, never in the OTP field.',
    'For automated publishing, configure a granular token with publish access and Bypass 2FA, if permitted by the package.',
  ].join('\n');

function simplify_error_message(message: string): string {
  if (is_otp_error(message)) {
    return otp_help_message();
  }

  const redacted = redact_secrets(message);
  const lines = redacted
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith('npm error'));
  return lines.length > 0 ? lines.join('\n') : redacted;
}

async function ask_bump_type(default_bump_type: BumpType): Promise<BumpType> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question('Select bump (major/minor/patch) [patch]: ', (answer) => {
      rl.close();
      const normalized = answer.trim();
      if (!normalized) {
        resolve(default_bump_type);
        return;
      }

      if (is_bump_type(normalized)) {
        resolve(normalized);
        return;
      }

      console.log(`Invalid bump '${normalized}', defaulting to ${default_bump_type}.`);
      resolve(default_bump_type);
    });
  });
}

function publish_package(package_directory: string, otp?: string): void {
  const validated_otp = validate_otp(otp);
  const otp_flag = validated_otp ? ` --otp=${validated_otp}` : '';
  // npm needs both streams to be TTYs for its native browser/OTP authentication flow.
  const interactive = !validated_otp && Boolean(process.stdin.isTTY && process.stdout.isTTY);
  try {
    run(
      `npm publish --access public${otp_flag}`,
      package_directory,
      interactive,
      validated_otp ? [validated_otp] : [],
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(simplify_error_message(message));
  }
}

async function process_package(
  target: PackageTarget,
  temporary_root: string,
  bump_type: BumpType,
  otp?: string,
): Promise<PublishResult> {
  console.log(`\n=== ${target.name} ===`);

  const package_key = path.basename(target.directory);
  const local_pack_directory = path.join(temporary_root, 'local-pack', package_key);
  const local_extract_directory = path.join(temporary_root, 'local-extract', package_key);
  const remote_pack_directory = path.join(temporary_root, 'remote-pack', package_key);
  const remote_extract_directory = path.join(temporary_root, 'remote-extract', package_key);

  const local_tarball = pack_local_package(target.directory, local_pack_directory);
  const local_root = extract_tarball(local_tarball, local_extract_directory);
  const local_tree = read_normalized_tree(local_root);

  const remote_tarball_path = path.join(remote_pack_directory, 'latest.tgz');
  const remote_status = await download_latest_tarball(target.name, remote_tarball_path);

  if (remote_status === 'found') {
    const remote_root = extract_tarball(remote_tarball_path, remote_extract_directory);
    const remote_tree = read_normalized_tree(remote_root);
    if (trees_are_equal(local_tree, remote_tree)) {
      console.log(`No substantive changes vs npm latest. Skipping ${target.name}.`);
      return { name: target.name, status: 'skipped', reason: 'identical to npm latest' };
    }

    console.log(`Substantive changes detected for ${target.name}.`);
  } else {
    console.log(`${target.name} is not on npm yet. Will publish initial version.`);
  }

  const next_version = prepare_version(target, bump_type);
  publish_package(target.directory, otp);
  console.log(`Published ${target.name}@${next_version}`);

  return { name: target.name, status: 'published', version: next_version };
}

async function main(): Promise<void> {
  const otp = validate_otp(parse_otp_argument());
  const default_bump_type: BumpType = 'patch';
  const bump_arg = parse_bump_argument();
  const bump_type = is_bump_type(bump_arg)
    ? bump_arg
    : process.stdin.isTTY
    ? await ask_bump_type(default_bump_type)
    : default_bump_type;

  ensure_npm_login();

  console.log('\nBuilding packages...');
  run('npm run build');
  console.log('Build completed.');

  const temporary_root = fs.mkdtempSync(path.join(os.tmpdir(), 'publish-types-'));
  const results: PublishResult[] = [];

  try {
    for (const target of PACKAGE_TARGETS) {
      try {
        results.push(await process_package(target, temporary_root, bump_type, otp));
      } catch (error) {
        const reason = error instanceof Error ? error.message : String(error);
        console.error(`Failed to publish ${target.name}: ${reason}`);
        results.push({ name: target.name, status: 'failed', reason });
        break;
      }
    }
  } finally {
    fs.rmSync(temporary_root, { recursive: true, force: true });
  }

  console.log('\n=== Summary ===');
  for (const result of results) {
    if (result.status === 'published') {
      console.log(`published  ${result.name}@${result.version}`);
    } else if (result.status === 'skipped') {
      console.log(`skipped    ${result.name} (${result.reason})`);
    } else {
      console.log(`failed     ${result.name} (${result.reason})`);
    }
  }

  if (results.some((result) => result.status === 'failed')) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
