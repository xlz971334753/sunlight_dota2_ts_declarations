import crypto from 'crypto';
import fs from 'fs';
import enums from '@moddota/dota-data/files/vscripts/enums';

const statusDescriptions = new Map([
    ['bound', '存在常规 Lua 回调绑定，触发及效果尚未验证。'],
    ['unbound', 'Lua不可用：没有常规 Lua 回调绑定。'],
    ['not_in_binary', '当前 DLL 枚举表未收录，不能判断 Lua 是否可用。'],
    ['unknown', '无法识别绑定，不能判断 Lua 是否可用。'],
]);

const isObject = (value: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && value !== null && !Array.isArray(value);

const hashFile = (filename: string): string =>
    crypto.createHash('sha256').update(fs.readFileSync(filename)).digest('hex');

function reportError(filename: string, reason: string): never {
    throw new Error(
        `modifier 检查报告不可用：${filename}（${reason}）。请重新运行 check:modifiers。`,
    );
}

/** Keep binary evidence separate from the manually maintained descriptions. */
export function loadModifierComments(filename: string, required = false): Map<string, string> {
    const comments = new Map<string, string>();
    if (!fs.existsSync(filename)) {
        if (required) reportError(filename, '指定的报告不存在');
        console.warn(
            '未找到 modifier 检查报告，本次不追加 Lua 绑定注释；可先运行 npm run check:modifiers。',
        );
        return comments;
    }

    let report: unknown;
    try {
        report = JSON.parse(fs.readFileSync(filename, 'utf8')) as unknown;
    } catch {
        return reportError(filename, 'JSON 无法读取或解析');
    }

    if (
        !isObject(report) ||
        report.schema !== 2 ||
        report.analysisVersion !== 1 ||
        !Array.isArray(report.results) ||
        report.results.length === 0 ||
        report.results.length > 2
    ) {
        return reportError(filename, '报告格式或检查器版本不受支持');
    }

    const declarationsPath = require.resolve('@moddota/dota-data/files/vscripts/enums.json');
    const { version: declarationsVersion } = JSON.parse(
        fs.readFileSync(require.resolve('@moddota/dota-data/package.json'), 'utf8'),
    ) as { version: string; };
    if (
        report.declarationsVersion !== declarationsVersion ||
        report.declarationsSha256 !== hashFile(declarationsPath)
    ) {
        return reportError(filename, '声明来源已变化');
    }

    const version =
        isObject(report.build) && typeof report.build.buildId === 'string'
            ? `；Steam build ${report.build.buildId}`
            : '';
    const sides = new Set<string>();
    const byMember = new Map<string, string[]>();
    for (const result of report.results as unknown[]) {
        if (
            !isObject(result) ||
            (result.side !== 'server' && result.side !== 'client') ||
            sides.has(result.side) ||
            typeof result.path !== 'string' ||
            typeof result.sha256 !== 'string' ||
            !/^[a-f\d]{64}$/.test(result.sha256) ||
            !Array.isArray(result.entries)
        ) {
            return reportError(filename, 'DLL 检查结果格式无效或重复');
        }

        sides.add(result.side);
        let currentHash: string;
        try {
            currentHash = hashFile(result.path);
        } catch {
            return reportError(filename, `无法读取 ${result.side} DLL，无法核对报告是否仍适用`);
        }

        if (currentHash !== result.sha256) return reportError(filename, `${result.side} DLL 已变化`);

        const names = new Set<string>();
        for (const entry of result.entries as unknown[]) {
            if (
                !isObject(entry) ||
                typeof entry.name !== 'string' ||
                !/^MODIFIER_(?:PROPERTY|EVENT)_/.test(entry.name) ||
                names.has(entry.name) ||
                typeof entry.status !== 'string' ||
                !statusDescriptions.has(entry.status)
            ) {
                return reportError(filename, 'modifier 条目格式无效或重复');
            }

            names.add(entry.name);
            if (entry.status === 'bound' || entry.status === 'unbound') {
                if (
                    !isObject(result.route) ||
                    result.route.className !== 'CDOTA_Modifier_Lua' ||
                    !isObject(entry.evidence) ||
                    typeof entry.evidence.branchRva !== 'string' ||
                    !/^0x[\dA-F]+$/.test(entry.evidence.branchRva) ||
                    typeof entry.runtimeValue !== 'number' ||
                    !Number.isInteger(entry.runtimeValue) ||
                    entry.runtimeValue < 0 ||
                    (entry.status === 'unbound' && entry.evidence.callbackRva !== null) ||
                    (entry.status === 'bound' &&
                        (typeof entry.evidence.callbackRva !== 'string' ||
                            !/^0x[\dA-F]+$/.test(entry.evidence.callbackRva)))
                ) {
                    return reportError(filename, `${entry.name} 缺少已确认的回调分派证据`);
                }
            }

            const side = result.side === 'server' ? '服务端 server' : '客户端 client';
            const description = `Lua绑定检查（Windows x64，${side}${version}；DLL SHA-256 ${result.sha256.slice(
                0,
                16,
            )}）：${statusDescriptions.get(entry.status)}`;
            byMember.set(entry.name, [...(byMember.get(entry.name) || []), description]);
        }
    }

    for (const [name, descriptions] of byMember) {
        comments.set(`enum:modifierfunction#member:${name}`, descriptions.join('\n'));
    }

    const modifierEnum = enums.find(
        (declaration): declaration is enums.Enum =>
            declaration.kind === 'enum' && declaration.name === 'modifierfunction',
    );
    for (const member of modifierEnum?.members || []) {
        const callback = member.description?.match(/Method Name: `([^`]+)`/)?.[1];
        const description = comments.get(`enum:modifierfunction#member:${member.name}`);
        if (callback && description) {
            const identifier = `CDOTA_Modifier_Lua.${callback}`;
            const previous = comments.get(identifier);
            // Retain the enum context if several properties ever share a callback.
            const addition = `${member.name}\n${description}`;
            comments.set(identifier, previous ? `${previous}\n${addition}` : addition);
        }
    }

    return comments;
}
