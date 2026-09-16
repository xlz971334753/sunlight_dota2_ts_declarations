# sunlight_dota2_ts_declarations

TypeScript declarations for Dota 2 Custom Game
[Lua](https://github.com/xlz971334753/sunlight_dota2_ts_declarations/tree/master/packages/dota-lua-types) and
[Panorama](https://github.com/xlz971334753/sunlight_dota2_ts_declarations/tree/master/packages/panorama-types)
API, generated from [dota-data](https://github.com/ark120202/dota-data) dumps.

Check out our [addon template](https://github.com/ModDota/TypeScriptAddonTemplate) for usage
examples.

### Updating after a DOTA2 update (for contributors)

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
