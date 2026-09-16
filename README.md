# sunlight_dota2_ts_declarations

TypeScript declarations for Dota 2 Custom Game
[Lua](https://github.com/xlz971334753/sunlight_dota2_ts_declarations/tree/master/packages/dota-lua-types) and
[Panorama](https://github.com/xlz971334753/sunlight_dota2_ts_declarations/tree/master/packages/panorama-types)
API, generated from [dota-data](https://github.com/ark120202/dota-data) dumps.

Check out our [addon template](https://github.com/ModDota/TypeScriptAddonTemplate) for usage
examples.

### Updating after a DOTA2 update (for contributors)

#### 自动更新本机 Dota 2 资源与名称声明

在 Windows x64 上安装 Node.js 18 或更高版本并执行 `yarn install` 后，运行：

```sh
yarn update:resources
```

该命令使用 `tools/cli-windows-x64/Source2Viewer-CLI.exe`，不依赖 Python、Excel 或手动解包。
首次运行会从 ValveResourceFormat 官方 GitHub Release 下载固定的 `20.0` 版本（约 50.3 MiB），
校验压缩包 SHA-256 后解压，再校验 EXE 和 DLL；下载地址、大小和哈希保存在 `tools/source2viewer.json`。
后续每次校验本地工具，匹配时无需联网；缺失或不匹配时重新下载，失败时保留已有工具和输出。
工具二进制仅缓存在本地，不加入 Git。下载和解压使用 Windows 10/11 自带的 `curl.exe`、`tar.exe`，
需要代理时可设置 `HTTPS_PROXY` 环境变量。
它从 Steam 注册表和 `libraryfolders.vdf` 查找安装了 Dota 2（App ID 570）的库；
以本机 Steam build ID、VPK 目录内容与分卷大小/修改时间判断资源是否变化。
首次运行、生成脚本或解包工具变化、结果缺失或被修改时，也会重新生成；全部未变化时跳过。
这里检查的是**本机已安装版本**，不会查询或下载 Steam 上的更新。请先等待 Steam 完成更新。

流程会解包 `scripts/npc/*.txt`（含子目录）、`scripts/shops.txt` 和两份简体中文文本，
并将 `soundevents/*.vsndevts_c`（含子目录）反编译为文本，生成：

| 路径 | 内容 |
| --- | --- |
| `output/npc/` | NPC 文本、英雄分文件、`shops.txt`、`localization/abilities_schinese.txt` 和 `dota_schinese.txt` |
| `output/soundevents/` | 解包后的 `.vsndevts` 文本；不生成音效枚举 |
| `output/dota2_ability_map.txt` | 无表头四列 CSV：所属英雄或物品名、英雄中文名或物品分类、技能或物品名、中文名 |
| `output/_NameDeclarations.d.ts` | 保持原有类型别名和 `CustomAbility`、`CustomHero`、`CustomItem`、`DotaAbility`、`DotaHero`、`DotaItem`、`NeutralItem`、`NeutralEnhancement` 枚举 |

生成规则参照 `temp` 中的旧脚本，直接读取 KV 的结构与 `#base` / `#include` 引用：
保留英雄技能、命石技能标记、标准商店分类、中立物品和附魔，排除隐藏占位技能、天赋与注释中的旧条目。
重复项去重，最后一行也会生成，中文文本中的英文大小写保持原样；含逗号或引号的 CSV 字段会按标准转义。
没有对应中文名称的条目按旧流程跳过，名单记录在 `output/.resources-state.json`。
该状态文件同时保存成功版本、数量及各输出的 SHA-256，不加入版本控制。

所有解包和分析先在临时目录完成，确认文件齐全、期间游戏没有更新后才替换上述资源及结果；
运行失败不标记为成功，替换失败会尝试回滚。新版本替换整个 `npc` 和 `soundevents` 目录，以移除过期文件。
这些目录及两份结果均由脚本管理，手工内容请另存；声明中的 `Custom*` 仍生成为空枚举。
解包工具日志位于 `artifacts/resource-update.log`。KV 损坏、循环引用或不支持的条件会明确报错。

可选用法：

```sh
yarn update:resources --force
yarn update:resources --dota-path "D:/Steam/steamapps/common/dota 2 beta"
yarn update:resources --help
yarn test:resources
```

`--force` 忽略缓存。`--dota-path` 或环境变量 `DOTA2_PATH` 指向包含 `game` 的 Dota 2 安装根目录；
`STEAM_PATH` 可指定 Steam 根目录作为自动发现入口。命令不依赖当前终端目录，产物始终写入本项目 `output`。

#### 更新 Lua / Panorama API 声明

1. Update https://github.com/ModDota/dota-data and publish a new package version
2. Update the `@moddota/dota-data` package version in `package.json`
3. `npm ci`
4. `npm run build`
5. Commit to a new branch
6. Make a merge request

### Publishing packages (for maintainers)

1. Make sure you are logged in to npm with an account that can publish the `@sunlight_xlz` scope
   (`npm whoami`).
2. Run `npm run publish:types` (or `yarn publish:types`).
   - Choose version bump type (defaults to patch):
     - `yarn publish:types --bump=minor`
     - `npm run publish:types -- --bump=major`
     - If no `--bump` is passed and the script is running in a TTY, it will prompt interactively.
   - If your account has 2FA enabled for publish, provide an OTP:
     - `yarn publish:types --otp=123456`
     - `npm run publish:types -- --otp=123456`
     - or set `NPM_OTP=123456`
   - If no OTP is passed and publish fails with `EOTP`, the script will prompt for one
     interactively.
3. The script builds both packages, compares each package against the npm `latest` tarball
   (ignoring `version`), skips packages with no substantive changes, and for changed/new packages
   bumps a version (major/minor/patch) then runs `npm publish --access public`.
4. If versions were bumped, commit the updated package `package.json` files if you want the version
   changes tracked in git.

### Generating changelog, overrides, and manual comments

- **Changelog output**: every `npm run build:types` updates snapshots under `artifacts/type-snapshots/` and
  appends a new entry to `artifacts/changelog/types-changelog.md` (only when changes are detected) by
  diffing `prev/` vs `current/`.
- **Overrides**: put signature fixes into `config/api_overrides.json` (keyed by identifier, e.g.
  `ListenToGameEvent` or `CDOTA_BaseNPC.IsFort`). These overrides take precedence over the built-in ones.
- **Manual comments**: put human-written comment overrides into `config/manual_comments.json` (keyed by
  identifier, e.g. `CDOTA_Modifier_Lua.GetModifierPropertyRestorationAmplification`). When present, the
  override replaces the upstream English comment for that field (`description`, `deprecated`, or
  `params.<paramName>`). Otherwise the generator keeps the original upstream comment unchanged.
- **API supplements**: put declarations missing from the upstream dump into `config/api_supplements.json`.
  Members are merged into the matching interface on every build (skipped if the dump already provides them).
  Supplement signatures may reference consumer-side types (e.g. `AnyTable` from typescript-to-lua);
  do **not** add those aliases into this repo's `common.d.ts` / snapshots.
