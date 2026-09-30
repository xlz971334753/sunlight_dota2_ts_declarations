# 中文注释与 modifier 回调检查

`manual_comments.json` 是声明注释的维护入口。既有生成器通过 `resolve_comment` 读取它，生成普通与
normalized 声明；不需要在生成文件中手工修改注释。

本轮参考 Wikibox 的 `scripts/resource/addon_schinese.txt`，来源指纹和导入数量记在
`comment_sources.json`。生成流程不依赖作者电脑上的路径，也不需要随包分发该参考项目。

## 注释匹配范围

- 枚举成员按完整名称匹配，使用 `enum:<枚举名>#member:<成员名>`；顶层常量使用 `const:<名称>`。
- Lua 接口按实体、技能、物品、modifier 对应的说明区段匹配，使用 `类名.方法名`。同名 UI 标签不能直接
  跨类套用，例如单位的 `GetLevel` 与技能的 `GetLevel`。
- modifier 回调按上游枚举描述中的 `Method Name` 映射到 `CDOTA_Modifier_Lua` 的真实声明成员。既有 API
  手工说明予以保留。
- 中文配置仅保存含义和示例，已移除参考文本的 181 个不可用前缀；保留“未知”等机制说明。不要在
  `manual_comments.json` 中维护可用性结论。
- 中文 `description` 替换该项的上游描述后，生成器再追加方法对应关系和绑定标签。参数、返回类型和
  `@abstract` 等标签保留原有生成方式；已检查的 modifier 回调范围由检查结果决定。

## 自动检查 modifier function

要求 Node.js 18 或以上；项目已经使用 Node 内置测试运行器。检查器没有新增依赖，只读取 Windows x64 PE
DLL，不加载 DLL、不执行其中的代码。

```powershell
npm run check:modifiers
npm run check:modifiers -- --dota-path "D:/steam/steamapps/common/dota 2 beta"
npm run check:modifiers -- --side server
npm run check:modifiers -- --dll "D:/备份/server.dll" --output "artifacts/backup-modifiers.json"
```

默认通过现有 Steam 定位逻辑读取 `server.dll`、`client.dll`；也支持 `DOTA2_PATH`。默认结果为
`artifacts/modifier-functions.json` 和同名 `.md`，均不提交 Git。直接指定 DLL 时，没有 Steam build 信
息，以 DLL SHA-256 标识检查对象。

检查器先识别 PE 节和 modifier 枚举记录，再通过 MSVC RTTI 定位 `CDOTA_Modifier_Lua` 主虚函数表，验证
属性列表初始化循环、分派函数和跳转表的指令结构。文件地址、虚函数槽位、枚举编号和分派范围均从输入文件
解析，未写死本机 RVA。

目前支持已验证的 MSVC x64 指令结构。编译器或引擎改变结构时，检查器保留“无法识别”结果并以退出码 2 结
束，需要重新核对解析规则。不能把未识别结构当成无绑定。

| JSON 状态       | 含义                                                                 |
| --------------- | -------------------------------------------------------------------- |
| `bound`         | 分派分支返回有效代码地址，存在常规 Lua 回调绑定；尚未验证触发和效果  |
| `unbound`       | 已确认分派分支清空回调指针，或该编号超过分派范围并进入同一空绑定分支 |
| `not_in_binary` | 已完整识别的当前 modifier 枚举表没有该名称；不能推广为永久不可用     |
| `unknown`       | 文件、RTTI、分派结构或该分支无法确认                                 |

报告同时记录声明中的枚举值、当前 DLL 值、差异项、中文说明和具体证据 RVA。中文说明不参与可用性判断，
也不再与人工可用性标注比较。判断绑定时使用 DLL 枚举值，因此旧声明的编号变化不会把检查导向另一个属性
。

退出码 0 表示所选 DLL 的结构和各条结果均已识别，包含预期的无绑定条目；2 表示输入错误或存在无法识别结
果。检查器只写报告；声明生成器读取报告并追加注释，不把结论写回中文配置，也不删掉声明。

## 在生成声明时追加检查注释

```powershell
npm run check:modifiers
npm run build:types
```

生成器默认读取 `artifacts/modifier-functions.json`，同时为 modifier 枚举成员和对应
`CDOTA_Modifier_Lua` 回调追加简短标签，普通和 normalized 声明使用同一结果。版本、SHA-256、原因和分派
证据仅保留在报告中。

- 枚举按上游 `Method Name` 添加 `@function 方法名`。这项对应关系不依赖 DLL 报告。
- 两端均为 `unbound` 时，枚举和回调只添加 `@lua不可用`。
- 存在 `bound` 时，枚举和回调按已确认的绑定范围添加 `@both`、`@server` 或 `@client`，每项只保留一个
  范围标签。
- `unknown`、`not_in_binary` 不推断不可用。只检查一端时，仅标出该端已确认的绑定，不推断另一端结果；
  也不使用单端无绑定结果添加全局不可用标签。
- 已检查的回调不再沿用上游范围标签，避免与检查结果重复或冲突。未识别的条目省略可用性标签。

```typescript
/**
 * 移除modifier时（例：神杖高射火炮）
 * @function OnModifierRemoved
 * @lua不可用
 */
MODIFIER_EVENT_ON_MODIFIER_REMOVED = 238,
```

读取报告时核对格式版本、声明数据包版本、枚举来源文件 SHA-256，以及报告所指 DLL 的当前 SHA-256。 DLL
更新、声明来源变化、输入 DLL 无法读取或报告格式无效时停止生成，并提示重跑检查，防止沿用过期结论。报
告格式现为 schema 2，旧报告需要重新生成。

默认报告不存在时，输出提示并继续生成中文说明及 `@function`，不追加绑定标签，因此构建不强制依赖本机
Dota 安装。使用离线 DLL 或自定义报告路径时可以显式指定报告，显式指定的文件不存在则报错：

```powershell
npm run check:modifiers -- --dll "D:/备份/server.dll" --output "artifacts/backup-modifiers.json"
$env:MODIFIER_FUNCTION_REPORT = "artifacts/backup-modifiers.json"
npm run build:types
Remove-Item Env:MODIFIER_FUNCTION_REPORT
```

离线模式仍需保留被检查的 DLL，以便生成时核对 SHA-256。检查报告不会修正枚举编号；报告列出的声明值变化
仍应通过上游声明数据更新单独处理。

```powershell
npm run test:modifiers
npm run lint:modifiers
```

测试覆盖 DLL 地址和 ImageBase 变化、仅有名称但没有绑定、旧声明编号漂移、未收录枚举、结构变化、损坏文
件、离线报告和输入文件保持不变，以及注释生成、双端差异、未知结果、报告缺失和过期校验。

## 是否扩展到所有官方接口

有必要持续核对所有接口的**暴露信息**：名称是否仍在当前 Lua VM 的注册描述中、服务端/客户端范围、参数
声明和版本变化。既有 `@moddota/dota-data` 的导出链路正是这类数据的来源；后续优先更新导出快照并对比本
项目声明。

暂不建议把所有接口都纳入同一种“可用/不可用”二元判断：普通方法、Lua 可覆写回调、Panorama 接口和枚举的
注册方式不同。DLL 中有字符串不能证明绑定存在；存在绑定也不能证明某个参数组合或游戏场景有效。许多
setter、实体方法和事件还依赖合法实体、对局阶段和其他引擎状态，逐个自动调用也不能提供完整证明。

本检查器优先处理 modifier function，因为它有统一、可核对的回调分派结构，能明确区分“枚举已公开”和“Lua
回调未绑定”。普通 API 的下一步应是当前 VM 注册快照对比；实际效果测试应按需要使用的接口和具体场景补充
。
