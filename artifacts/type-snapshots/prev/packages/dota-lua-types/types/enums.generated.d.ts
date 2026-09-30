/**
 * 物品栏槽位数量
 */
declare const DOTA_ITEM_INVENTORY_SIZE: 9;

/**
 * 最大物品槽位数
 */
declare const DOTA_ITEM_MAX: 25;

/**
 * 储藏处终止索引
 */
declare const DOTA_ITEM_STASH_MAX: 15;

/**
 * 储藏处起始索引
 */
declare const DOTA_ITEM_STASH_MIN: 9;

/**
 * 储藏处槽位数量
 */
declare const DOTA_ITEM_STASH_SIZE: 6;

/**
 * 最大技能数
 */
declare const DOTA_MAX_ABILITIES: 40;

/**
 * 全地图范围搜索
 */
declare const FIND_UNITS_EVERYWHERE: -1;

declare const SPAWN_GROUP_HANDLE_INVALID: 0;

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type AbilityTypes = ABILITY_TYPES;

/**
 * @compileMembersOnly
 */
declare enum ABILITY_TYPES {
    /**
     * 基础技能
     */ ABILITY_TYPE_BASIC = 0,
    /**
     * 终极技能
     */
    ABILITY_TYPE_ULTIMATE = 1,
    /**
     * 天赋技能
     */
    ABILITY_TYPE_ATTRIBUTES = 2,
    /**
     * 隐藏技能
     */
    ABILITY_TYPE_HIDDEN = 3,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type AbilityLearnResult = AbilityLearnResult_t;

/**
 * @compileMembersOnly
 */
declare enum AbilityLearnResult_t {
    /**
     * 可升级
     */ ABILITY_CAN_BE_UPGRADED = 0,
    /**
     * 不可升级
     */
    ABILITY_CANNOT_BE_UPGRADED_NOT_UPGRADABLE = 1,
    /**
     * 已达到最大等级
     */
    ABILITY_CANNOT_BE_UPGRADED_AT_MAX = 2,
    /**
     * 升级需要更高等级
     */
    ABILITY_CANNOT_BE_UPGRADED_REQUIRES_LEVEL = 3,
    /**
     * 不可学习
     */
    ABILITY_NOT_LEARNABLE = 4,
}

/**
 * @compileMembersOnly
 */
declare enum ActivateType {
    /**
     * 首次创建时激活
     */ ACTIVATE_TYPE_INITIAL_CREATION = 0,
    /**
     * 数据更新时激活
     */
    ACTIVATE_TYPE_DATAUPDATE_CREATION = 1,
    /**
     * 从保存中恢复时激活
     */
    ACTIVATE_TYPE_ONRESTORE = 2,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type AttackRecord = attackfail;

/**
 * @compileMembersOnly
 */
declare enum attackfail {
    /**
     * 无攻击失败
     */ DOTA_ATTACK_RECORD_FAIL_NO = 0,
    /**
     * 因地形而攻击失败
     */
    DOTA_ATTACK_RECORD_FAIL_TERRAIN_MISS = 1,
    /**
     * 因攻击来源而攻击失败
     */
    DOTA_ATTACK_RECORD_FAIL_SOURCE_MISS = 2,
    /**
     * 因闪避而攻击失败
     */
    DOTA_ATTACK_RECORD_FAIL_TARGET_EVADED = 3,
    /**
     * 因无敌而攻击失败
     */
    DOTA_ATTACK_RECORD_FAIL_TARGET_INVULNERABLE = 4,
    /**
     * 因超出范围而攻击失败
     */
    DOTA_ATTACK_RECORD_FAIL_TARGET_OUT_OF_RANGE = 5,
    /**
     * 攻击无法失败
     */
    DOTA_ATTACK_RECORD_CANNOT_FAIL = 6,
    /**
     * 因弹道被摧毁而攻击失败
     */
    DOTA_ATTACK_RECORD_FAIL_BLOCKED_BY_OBSTRUCTION = 7,
}

/**
 * @compileMembersOnly
 */
declare enum AttributeDerivedStats {
    /**
     * 力量攻击力
     */ DOTA_ATTRIBUTE_STRENGTH_DAMAGE = 0,
    /**
     * 力量最大生命值
     */
    DOTA_ATTRIBUTE_STRENGTH_HP = 1,
    /**
     * 力量生命恢复
     */
    DOTA_ATTRIBUTE_STRENGTH_HP_REGEN = 2,
    /**
     * 敏捷攻击力
     */
    DOTA_ATTRIBUTE_AGILITY_DAMAGE = 3,
    /**
     * 敏捷护甲
     */
    DOTA_ATTRIBUTE_AGILITY_ARMOR = 4,
    /**
     * 敏捷攻击速度
     */
    DOTA_ATTRIBUTE_AGILITY_ATTACK_SPEED = 5,
    /**
     * 智力攻击力
     */
    DOTA_ATTRIBUTE_INTELLIGENCE_DAMAGE = 6,
    /**
     * 智力最大魔法值
     */
    DOTA_ATTRIBUTE_INTELLIGENCE_MANA = 7,
    /**
     * 智力魔法恢复
     */
    DOTA_ATTRIBUTE_INTELLIGENCE_MANA_REGEN = 8,
    /**
     * 智力魔法抗性
     */
    DOTA_ATTRIBUTE_INTELLIGENCE_MAGIC_RESIST = 9,
    /**
     * 全才攻击力
     */
    DOTA_ATTRIBUTE_ALL_DAMAGE = 10,
}

/**
 * @compileMembersOnly
 */
declare enum Attributes {
    /**
     * 无效占位
     */ DOTA_ATTRIBUTE_INVALID = -1,
    /**
     * 力量
     */
    DOTA_ATTRIBUTE_STRENGTH = 0,
    /**
     * 敏捷
     */
    DOTA_ATTRIBUTE_AGILITY = 1,
    /**
     * 智力
     */
    DOTA_ATTRIBUTE_INTELLECT = 2,
    /**
     * 全才
     */
    DOTA_ATTRIBUTE_ALL = 3,
    /**
     * 上限占位
     */
    DOTA_ATTRIBUTE_MAX = 4,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type ClickBehaviors = CLICK_BEHAVIORS;

/**
 * @compileMembersOnly
 */
declare enum CLICK_BEHAVIORS {
    /**
     * 空白占位
     */ DOTA_CLICK_BEHAVIOR_NONE = 0,
    /**
     * 移动点击行为
     */
    DOTA_CLICK_BEHAVIOR_MOVE = 1,
    /**
     * 攻击点击行为
     */
    DOTA_CLICK_BEHAVIOR_ATTACK = 2,
    /**
     * 施法点击行为
     */
    DOTA_CLICK_BEHAVIOR_CAST = 3,
    /**
     * 丢弃物品点击行为
     */
    DOTA_CLICK_BEHAVIOR_DROP_ITEM = 4,
    /**
     * 出售物品点击行为
     */
    DOTA_CLICK_BEHAVIOR_DROP_SHOP_ITEM = 5,
    /**
     * 拖拽点击行为
     */
    DOTA_CLICK_BEHAVIOR_DRAG = 6,
    /**
     * 学习技能点击行为
     */
    DOTA_CLICK_BEHAVIOR_LEARN_ABILITY = 7,
    /**
     * 巡逻点击行为
     */
    DOTA_CLICK_BEHAVIOR_PATROL = 8,
    /**
     * 矢量施法点击行为
     */
    DOTA_CLICK_BEHAVIOR_VECTOR_CAST = 9,
    /**
     * 未使用点击行为
     */
    DOTA_CLICK_BEHAVIOR_UNUSED = 10,
    /**
     * 雷达点击行为
     */
    DOTA_CLICK_BEHAVIOR_RADAR = 11,
    /**
     * 终止占位
     */
    DOTA_CLICK_BEHAVIOR_LAST = 12,
}

/**
 * @compileMembersOnly
 */
declare enum ConVarFlags {
    /**
     * 空白占位
     */ FCVAR_NONE = 0,
    /**
     * 开发者模式变量标记
     */
    FCVAR_DEVELOPMENTONLY = 2,
    /**
     * 隐藏变量标记
     */
    FCVAR_HIDDEN = 16,
    /**
     * 保护变量标记
     */
    FCVAR_PROTECTED = 32,
    /**
     * 单人模式变量标记
     */
    FCVAR_SPONLY = 64,
    /**
     * 配置文件变量标记
     */
    FCVAR_ARCHIVE = 128,
    /**
     * 同步通知变量标记
     */
    FCVAR_NOTIFY = 256,
    /**
     * 用户信息变量标记
     */
    FCVAR_USERINFO = 512,
    /**
     * 非记录变量标记
     */
    FCVAR_UNLOGGED = 2048,
    /**
     * 客户端同步变量标记
     */
    FCVAR_REPLICATED = 8192,
    /**
     * 作弊模式变量标记
     */
    FCVAR_CHEAT = 16384,
    /**
     * 用户差异变量标记
     */
    FCVAR_PER_USER = 32768,
    /**
     * 演示变量标记
     */
    FCVAR_DEMO = 65536,
    /**
     * 非录像变量标记
     */
    FCVAR_DONTRECORD = 131072,
    /**
     * 焦点交互变量标记
     */
    FCVAR_VCONSOLE_SET_FOCUS = 134217728,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type DamageTypes = DAMAGE_TYPES;

/**
 * @compileMembersOnly
 */
declare enum DAMAGE_TYPES {
    /**
     * 无伤害
     */ DAMAGE_TYPE_NONE = 0,
    /**
     * 物理
     */
    DAMAGE_TYPE_PHYSICAL = 1,
    /**
     * 魔法
     */
    DAMAGE_TYPE_MAGICAL = 2,
    /**
     * 纯粹
     */
    DAMAGE_TYPE_PURE = 4,
    /**
     * 全类型
     */
    DAMAGE_TYPE_ALL = 7,
    /**
     * 生命流失
     */
    DAMAGE_TYPE_HP_REMOVAL = 8,
    /**
     * 自定义技能伤害
     */
    DAMAGE_TYPE_ABILITY_DEFINED = 16,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type DamageCategory = DamageCategory_t;

/**
 * @compileMembersOnly
 */
declare enum DamageCategory_t {
    /**
     * 技能伤害
     */ DOTA_DAMAGE_CATEGORY_SPELL = 0,
    /**
     * 攻击伤害
     */
    DOTA_DAMAGE_CATEGORY_ATTACK = 1,
    /**
     * 对护盾伤害
     */
    DOTA_DAMAGE_CATEGORY_BARRIER = 2,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type AbilityBehavior = DOTA_ABILITY_BEHAVIOR;

/**
 * @compileMembersOnly
 */
declare enum DOTA_ABILITY_BEHAVIOR {
    /**
     * 备用点目标施放
     */ DOTA_ABILITY_BEHAVIOR_LAST_RESORT_POINT = -2147483648,
    /**
     * 被锁闭禁用
     */
    DOTA_ABILITY_BEHAVIOR_AFFECTED_BY_MUTE = 0,
    /**
     * 多样施法
     */
    DOTA_ABILITY_BEHAVIOR_ALT_CASTABLE = 0,
    /**
     * 特殊自身施法
     */
    DOTA_ABILITY_BEHAVIOR_CAN_SELF_CAST = 0,
    /**
     * 不触发其他技能
     */
    DOTA_ABILITY_BEHAVIOR_DONT_PROC_OTHER_ABILITIES = 0,
    /**
     * 强制键位绑定
     */
    DOTA_ABILITY_BEHAVIOR_FORCE_KEYBIND = 0,
    /**
     * 强制不使用先天技能界面
     */
    DOTA_ABILITY_BEHAVIOR_FORCE_NO_INNATE_UI = 0,
    /**
     * 自由绘制轨迹
     */
    DOTA_ABILITY_BEHAVIOR_FREE_DRAW_TARGETING = 0,
    /**
     * 不中断隐身
     */
    DOTA_ABILITY_BEHAVIOR_IGNORE_INVISIBLE = 0,
    /**
     * 无视锁闭
     */
    DOTA_ABILITY_BEHAVIOR_IGNORE_MUTED = 0,
    /**
     * 无视沉默
     */
    DOTA_ABILITY_BEHAVIOR_IGNORE_SILENCE = 0,
    /**
     * 先天界面展示
     */
    DOTA_ABILITY_BEHAVIOR_INNATE_UI = 0,
    /**
     * 虚拟物品
     */
    DOTA_ABILITY_BEHAVIOR_IS_FAKE_ITEM = 0,
    /**
     * 可灌注物品
     */
    DOTA_ABILITY_BEHAVIOR_ITEM_IMBUE = 0,
    /**
     * 空白占位
     */
    DOTA_ABILITY_BEHAVIOR_NONE = 0,
    /**
     * 过度施法距离
     */
    DOTA_ABILITY_BEHAVIOR_OVERSHOOT = 0,
    /**
     * 技能页面展示
     */
    DOTA_ABILITY_BEHAVIOR_SHOW_IN_GUIDES = 0,
    /**
     * 跳过快捷键
     */
    DOTA_ABILITY_BEHAVIOR_SKIP_FOR_KEYBINDS = 0,
    /**
     * 忽略关联消耗
     */
    DOTA_ABILITY_BEHAVIOR_SUPPRESS_ASSOCIATED_CONSUMABLE = 0,
    /**
     * 效果索引解锁
     */
    DOTA_ABILITY_BEHAVIOR_UNLOCKED_BY_EFFECT_INDEX = 0,
    /**
     * 无法交换
     */
    DOTA_ABILITY_BEHAVIOR_UNSWAPPABLE = 0,
    /**
     * 隐藏技能
     */
    DOTA_ABILITY_BEHAVIOR_HIDDEN = 1,
    /**
     * 被动
     */
    DOTA_ABILITY_BEHAVIOR_PASSIVE = 2,
    /**
     * 无目标技能
     */
    DOTA_ABILITY_BEHAVIOR_NO_TARGET = 4,
    /**
     * 单位目标技能
     */
    DOTA_ABILITY_BEHAVIOR_UNIT_TARGET = 8,
    /**
     * 点目标技能
     */
    DOTA_ABILITY_BEHAVIOR_POINT = 16,
    /**
     * 视觉指示器
     */
    DOTA_ABILITY_BEHAVIOR_AOE = 32,
    /**
     * 非学习技能
     */
    DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE = 64,
    /**
     * 持续施法
     */
    DOTA_ABILITY_BEHAVIOR_CHANNELLED = 128,
    /**
     * 活动物品技能
     */
    DOTA_ABILITY_BEHAVIOR_ITEM = 256,
    /**
     * 开关/切换
     */
    DOTA_ABILITY_BEHAVIOR_TOGGLE = 512,
    /**
     * 矢量视觉指示器
     */
    DOTA_ABILITY_BEHAVIOR_DIRECTIONAL = 1024,
    /**
     * 即时生效
     */
    DOTA_ABILITY_BEHAVIOR_IMMEDIATE = 2048,
    /**
     * 自动施法
     */
    DOTA_ABILITY_BEHAVIOR_AUTOCAST = 4096,
    /**
     * 可选单位目标
     */
    DOTA_ABILITY_BEHAVIOR_OPTIONAL_UNIT_TARGET = 8192,
    /**
     * 可选点目标
     */
    DOTA_ABILITY_BEHAVIOR_OPTIONAL_POINT = 16384,
    /**
     * 可选无目标
     */
    DOTA_ABILITY_BEHAVIOR_OPTIONAL_NO_TARGET = 32768,
    /**
     * 光环
     */
    DOTA_ABILITY_BEHAVIOR_AURA = 65536,
    /**
     * 主动攻击特效
     */
    DOTA_ABILITY_BEHAVIOR_ATTACK = 131072,
    /**
     * 施法中断移动
     */
    DOTA_ABILITY_BEHAVIOR_DONT_RESUME_MOVEMENT = 262144,
    /**
     * 被缠绕禁用
     */
    DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES = 524288,
    /**
     * 无视死亡和无法行动
     */
    DOTA_ABILITY_BEHAVIOR_UNRESTRICTED = 1048576,
    /**
     * 无视控制及行动队列
     */
    DOTA_ABILITY_BEHAVIOR_IGNORE_PSEUDO_QUEUE = 2097152,
    /**
     * 无视持续施法
     */
    DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL = 4194304,
    /**
     * 保留移动指令
     */
    DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_MOVEMENT = 8388608,
    /**
     * 不警告目标
     */
    DOTA_ABILITY_BEHAVIOR_DONT_ALERT_TARGET = 16777216,
    /**
     * 施法中断攻击
     */
    DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK = 33554432,
    /**
     * 无视窃取前摇
     */
    DOTA_ABILITY_BEHAVIOR_NORMAL_WHEN_STOLEN = 67108864,
    /**
     * 无施法后摇
     */
    DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING = 134217728,
    /**
     * 神符目标技能
     */
    DOTA_ABILITY_BEHAVIOR_RUNE_TARGET = 268435456,
    /**
     * 不取消持续施法
     */
    DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_CHANNEL = 536870912,
    /**
     * 矢量目标
     */
    DOTA_ABILITY_BEHAVIOR_VECTOR_TARGETING = 1073741824,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type GameState = DOTA_GameState;

/**
 * @compileMembersOnly
 */
declare enum DOTA_GameState {
    /**
     * 初始化阶段
     */ DOTA_GAMERULES_STATE_INIT = 0,
    /**
     * 加载游戏阶段
     */
    DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD = 1,
    /**
     * 自定义游戏设置阶段
     */
    DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP = 2,
    /**
     * 玩家选取阶段
     */
    DOTA_GAMERULES_STATE_PLAYER_DRAFT = 3,
    /**
     * 英雄选择阶段
     */
    DOTA_GAMERULES_STATE_HERO_SELECTION = 4,
    /**
     * 策略准备阶段
     */
    DOTA_GAMERULES_STATE_STRATEGY_TIME = 5,
    /**
     * 队伍展示阶段
     */
    DOTA_GAMERULES_STATE_TEAM_SHOWCASE = 6,
    /**
     * 等待地图加载阶段
     */
    DOTA_GAMERULES_STATE_WAIT_FOR_MAP_TO_LOAD = 7,
    /**
     * 游戏前阶段
     */
    DOTA_GAMERULES_STATE_PRE_GAME = 8,
    /**
     * 场景设置阶段
     */
    DOTA_GAMERULES_STATE_SCENARIO_SETUP = 9,
    /**
     * 游戏进行中
     */
    DOTA_GAMERULES_STATE_GAME_IN_PROGRESS = 10,
    /**
     * 游戏结束阶段
     */
    DOTA_GAMERULES_STATE_POST_GAME = 11,
    /**
     * 玩家断开连接
     */
    DOTA_GAMERULES_STATE_DISCONNECT = 12,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type GcTeam = DOTA_GC_TEAM;

/**
 * @compileMembersOnly
 */
declare enum DOTA_GC_TEAM {
    /**
     * 天辉
     */ DOTA_GC_TEAM_GOOD_GUYS = 0,
    /**
     * 夜魇
     */
    DOTA_GC_TEAM_BAD_GUYS = 1,
    /**
     * 解说员
     */
    DOTA_GC_TEAM_BROADCASTER = 2,
    /**
     * 观战者
     */
    DOTA_GC_TEAM_SPECTATOR = 3,
    /**
     * 玩家池队伍
     */
    DOTA_GC_TEAM_PLAYER_POOL = 4,
    /**
     * 非玩家队伍
     */
    DOTA_GC_TEAM_NOTEAM = 5,
    /**
     * 自定义队伍1
     */
    DOTA_GC_TEAM_CUSTOM_1 = 6,
    /**
     * 自定义队伍2
     */
    DOTA_GC_TEAM_CUSTOM_2 = 7,
    /**
     * 自定义队伍3
     */
    DOTA_GC_TEAM_CUSTOM_3 = 8,
    /**
     * 自定义队伍4
     */
    DOTA_GC_TEAM_CUSTOM_4 = 9,
    /**
     * 自定义队伍5
     */
    DOTA_GC_TEAM_CUSTOM_5 = 10,
    /**
     * 自定义队伍6
     */
    DOTA_GC_TEAM_CUSTOM_6 = 11,
    /**
     * 自定义队伍7
     */
    DOTA_GC_TEAM_CUSTOM_7 = 12,
    /**
     * 自定义队伍8
     */
    DOTA_GC_TEAM_CUSTOM_8 = 13,
    /**
     * 中立
     */
    DOTA_GC_TEAM_NEUTRALS = 14,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type HeroPickState = DOTA_HeroPickState;

/**
 * @compileMembersOnly
 */
declare enum DOTA_HeroPickState {
    /**
     * 未选取状态
     */ DOTA_HEROPICK_STATE_NONE = 0,
    /**
     * 全阵营模式选择阶段
     */
    DOTA_HEROPICK_STATE_AP_SELECT = 1,
    /**
     * 单一征召模式选择阶段
     */
    DOTA_HEROPICK_STATE_SD_SELECT = 2,
    /**
     * 未使用引导选择状态
     */
    DOTA_HEROPICK_STATE_INTRO_SELECT_UNUSED = 3,
    /**
     * 未使用随机征召选择状态
     */
    DOTA_HEROPICK_STATE_RD_SELECT_UNUSED = 4,
    /**
     * 队长模式介绍阶段
     */
    DOTA_HEROPICK_STATE_CM_INTRO = 5,
    /**
     * 队长选择阶段
     */
    DOTA_HEROPICK_STATE_CM_CAPTAINPICK = 6,
    /**
     * 队长模式第1轮禁英雄阶段
     */
    DOTA_HEROPICK_STATE_CM_BAN1 = 7,
    /**
     * 队长模式第2轮禁英雄阶段
     */
    DOTA_HEROPICK_STATE_CM_BAN2 = 8,
    /**
     * 队长模式第3轮禁英雄阶段
     */
    DOTA_HEROPICK_STATE_CM_BAN3 = 9,
    /**
     * 队长模式第4轮禁英雄阶段
     */
    DOTA_HEROPICK_STATE_CM_BAN4 = 10,
    /**
     * 队长模式第5轮禁英雄阶段
     */
    DOTA_HEROPICK_STATE_CM_BAN5 = 11,
    /**
     * 队长模式第6轮禁英雄阶段
     */
    DOTA_HEROPICK_STATE_CM_BAN6 = 12,
    /**
     * 队长模式第7轮禁英雄阶段
     */
    DOTA_HEROPICK_STATE_CM_BAN7 = 13,
    /**
     * 队长模式第8轮禁英雄阶段
     */
    DOTA_HEROPICK_STATE_CM_BAN8 = 14,
    /**
     * 队长模式第9轮禁英雄阶段
     */
    DOTA_HEROPICK_STATE_CM_BAN9 = 15,
    /**
     * 队长模式第10轮禁英雄阶段
     */
    DOTA_HEROPICK_STATE_CM_BAN10 = 16,
    /**
     * 队长模式第11轮禁英雄阶段
     */
    DOTA_HEROPICK_STATE_CM_BAN11 = 17,
    /**
     * 队长模式第12轮禁英雄阶段
     */
    DOTA_HEROPICK_STATE_CM_BAN12 = 18,
    /**
     * 队长模式第13轮禁英雄阶段
     */
    DOTA_HEROPICK_STATE_CM_BAN13 = 19,
    /**
     * 队长模式第14轮禁英雄阶段
     */
    DOTA_HEROPICK_STATE_CM_BAN14 = 20,
    /**
     * 队长模式第1轮选人阶段
     */
    DOTA_HEROPICK_STATE_CM_SELECT1 = 21,
    /**
     * 队长模式第2轮选人阶段
     */
    DOTA_HEROPICK_STATE_CM_SELECT2 = 22,
    /**
     * 队长模式第3轮选人阶段
     */
    DOTA_HEROPICK_STATE_CM_SELECT3 = 23,
    /**
     * 队长模式第4轮选人阶段
     */
    DOTA_HEROPICK_STATE_CM_SELECT4 = 24,
    /**
     * 队长模式第5轮选人阶段
     */
    DOTA_HEROPICK_STATE_CM_SELECT5 = 25,
    /**
     * 队长模式第6轮选人阶段
     */
    DOTA_HEROPICK_STATE_CM_SELECT6 = 26,
    /**
     * 队长模式第7轮选人阶段
     */
    DOTA_HEROPICK_STATE_CM_SELECT7 = 27,
    /**
     * 队长模式第8轮选人阶段
     */
    DOTA_HEROPICK_STATE_CM_SELECT8 = 28,
    /**
     * 队长模式第9轮选人阶段
     */
    DOTA_HEROPICK_STATE_CM_SELECT9 = 29,
    /**
     * 队长模式第10轮选人阶段
     */
    DOTA_HEROPICK_STATE_CM_SELECT10 = 30,
    /**
     * 队长模式最终确定选择
     */
    DOTA_HEROPICK_STATE_CM_PICK = 31,
    /**
     * 全随机模式选择阶段
     */
    DOTA_HEROPICK_STATE_AR_SELECT = 32,
    /**
     * 变异模式选择阶段
     */
    DOTA_HEROPICK_STATE_MO_SELECT = 33,
    /**
     * 加速模式选择阶段
     */
    DOTA_HEROPICK_STATE_FH_SELECT = 34,
    /**
     * 队长征召模式介绍阶段
     */
    DOTA_HEROPICK_STATE_CD_INTRO = 35,
    /**
     * 队长征召中队长选择阶段
     */
    DOTA_HEROPICK_STATE_CD_CAPTAINPICK = 36,
    /**
     * 队长征召第1轮禁英雄
     */
    DOTA_HEROPICK_STATE_CD_BAN1 = 37,
    /**
     * 队长征召第2轮禁英雄
     */
    DOTA_HEROPICK_STATE_CD_BAN2 = 38,
    /**
     * 队长征召第3轮禁英雄
     */
    DOTA_HEROPICK_STATE_CD_BAN3 = 39,
    /**
     * 队长征召第4轮禁英雄
     */
    DOTA_HEROPICK_STATE_CD_BAN4 = 40,
    /**
     * 队长征召第5轮禁英雄
     */
    DOTA_HEROPICK_STATE_CD_BAN5 = 41,
    /**
     * 队长征召第6轮禁英雄
     */
    DOTA_HEROPICK_STATE_CD_BAN6 = 42,
    /**
     * 队长征召第1轮选人阶段
     */
    DOTA_HEROPICK_STATE_CD_SELECT1 = 43,
    /**
     * 队长征召第2轮选人阶段
     */
    DOTA_HEROPICK_STATE_CD_SELECT2 = 44,
    /**
     * 队长征召第3轮选人阶段
     */
    DOTA_HEROPICK_STATE_CD_SELECT3 = 45,
    /**
     * 队长征召第4轮选人阶段
     */
    DOTA_HEROPICK_STATE_CD_SELECT4 = 46,
    /**
     * 队长征召第5轮选人阶段
     */
    DOTA_HEROPICK_STATE_CD_SELECT5 = 47,
    /**
     * 队长征召第6轮选人阶段
     */
    DOTA_HEROPICK_STATE_CD_SELECT6 = 48,
    /**
     * 队长征召第7轮选人阶段
     */
    DOTA_HEROPICK_STATE_CD_SELECT7 = 49,
    /**
     * 队长征召第8轮选人阶段
     */
    DOTA_HEROPICK_STATE_CD_SELECT8 = 50,
    /**
     * 队长征召第9轮选人阶段
     */
    DOTA_HEROPICK_STATE_CD_SELECT9 = 51,
    /**
     * 队长征召第10轮选人阶段
     */
    DOTA_HEROPICK_STATE_CD_SELECT10 = 52,
    /**
     * 队长征召最终确定选择
     */
    DOTA_HEROPICK_STATE_CD_PICK = 53,
    /**
     * 平衡征召模式选择阶段
     */
    DOTA_HEROPICK_STATE_BD_SELECT = 54,
    /**
     * 技能征召模式选择阶段
     */
    DOTA_HERO_PICK_STATE_ABILITY_DRAFT_SELECT = 55,
    /**
     * 全随机死亡模式选择阶段
     */
    DOTA_HERO_PICK_STATE_ARDM_SELECT = 56,
    /**
     * 全体征召模式选择阶段
     */
    DOTA_HEROPICK_STATE_ALL_DRAFT_SELECT = 57,
    /**
     * 自定义游戏的英雄选择阶段
     */
    DOTA_HERO_PICK_STATE_CUSTOMGAME_SELECT = 58,
    /**
     * 选人惩罚状态
     */
    DOTA_HEROPICK_STATE_SELECT_PENALTY = 59,
    /**
     * 自定义选人规则状态
     */
    DOTA_HEROPICK_STATE_CUSTOM_PICK_RULES = 60,
    /**
     * 特殊剧情或场景的选人阶段
     */
    DOTA_HEROPICK_STATE_SCENARIO_PICK = 61,
    /**
     * 计数占位
     */
    DOTA_HEROPICK_STATE_COUNT = 62,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type InvalidOrders = DOTA_INVALID_ORDERS;

/**
 * @compileMembersOnly
 */
declare enum DOTA_INVALID_ORDERS {
    /**
     * 指令执行成功
     */ DOTA_ORDER_SUCCESS = -1,
    /**
     * 玩家无法控制该单位
     */
    DOTA_INVALID_ORDER_NOT_CONTROLLABLE_BY_PLAYER = 0,
    /**
     * 单位不是非玩家角色
     */
    DOTA_INVALID_ORDER_UNIT_IS_NOT_NPC = 1,
    /**
     * 技能实体无效
     */
    DOTA_INVALID_ORDER_BAD_ABILITY_ENTITY = 2,
    /**
     * 未识别的指令类型
     */
    DOTA_INVALID_ORDER_UNRECOGNIZED_ORDER = 3,
    /**
     * 需要指定技能
     */
    DOTA_INVALID_ORDER_ABILITY_REQUIRED = 4,
    /**
     * 需要非玩家角色为目标
     */
    DOTA_INVALID_ORDER_NPC_TARGET_REQUIRED = 5,
    /**
     * 目标不是一棵树
     */
    DOTA_INVALID_ORDER_TARGET_TREE_INDEX_NOT_A_TREE = 6,
    /**
     * 实体索引超出范围
     */
    DOTA_INVALID_ORDER_TARGET_ENTITY_INDEX_OUT_OF_RANGE = 7,
    /**
     * 技能不是一个物品
     */
    DOTA_INVALID_ORDER_ABILITY_NOT_AN_ITEM = 8,
    /**
     * 需要实体物品目标
     */
    DOTA_INVALID_ORDER_PHYSICAL_ITEM_TARGET_REQUIRED = 9,
    /**
     * 需要神符目标
     */
    DOTA_INVALID_ORDER_RUNE_TARGET_REQUIRED = 10,
    /**
     * 单位未拥有该技能
     */
    DOTA_INVALID_ORDER_ABILITY_NOT_OWNED_BY_UNIT = 11,
    /**
     * 技能不可升级
     */
    DOTA_INVALID_ORDER_ABILITY_CANT_BE_UPGRADED = 12,
    /**
     * 没有技能点可用
     */
    DOTA_INVALID_ORDER_NO_POINTS_FOR_ABILITY_UPGRADE = 13,
    /**
     * 魔法值不足
     */
    DOTA_INVALID_ORDER_NOT_ENOUGH_MANA = 14,
    /**
     * 技能冷却中
     */
    DOTA_INVALID_ORDER_ABILITY_IN_COOLDOWN = 15,
    /**
     * 技能未学习
     */
    DOTA_INVALID_ORDER_ABILITY_NOT_LEARNED = 16,
    /**
     * 不能施放被动技能
     */
    DOTA_INVALID_ORDER_CANT_CAST_PASSIVE_ABILITY = 17,
    /**
     * 幻象目标无效
     */
    DOTA_INVALID_ORDER_PHANTOM_TARGET = 18,
    /**
     * 目标已死亡
     */
    DOTA_INVALID_ORDER_DEAD_TARGET = 19,
    /**
     * 单位已死亡
     */
    DOTA_INVALID_ORDER_UNIT_IS_DEAD = 20,
    /**
     * 目标是技能免疫敌人
     */
    DOTA_INVALID_ORDER_TARGET_MAGIC_IMMUNE_ENEMY = 21,
    /**
     * 目标是无敌状态
     */
    DOTA_INVALID_ORDER_TARGET_INVULNERABLE = 22,
    /**
     * 目标是攻击免疫状态
     */
    DOTA_INVALID_ORDER_TARGET_ATTACK_IMMUNE = 23,
    /**
     * 单位被沉默
     */
    DOTA_INVALID_ORDER_UNIT_SILENCED = 24,
    /**
     * 技能无法切换
     */
    DOTA_INVALID_ORDER_ABILITY_CANT_BE_TOGGLED = 25,
    /**
     * 无法看到目标
     */
    DOTA_INVALID_ORDER_TARGET_CANT_BE_SEEN = 26,
    /**
     * 目标隐身
     */
    DOTA_INVALID_ORDER_TARGET_INVISIBLE = 27,
    /**
     * 英雄不能被补刀
     */
    DOTA_INVALID_ORDER_HERO_CANT_BE_DENIED = 28,
    /**
     * 无法对队友施放
     */
    DOTA_INVALID_ORDER_CANT_CAST_ON_TEAMMATE = 29,
    /**
     * 无法对敌人施放
     */
    DOTA_INVALID_ORDER_CANT_CAST_ON_ENEMY = 30,
    /**
     * 单位不能移动
     */
    DOTA_INVALID_ORDER_UNIT_CANT_MOVE = 31,
    /**
     * 不能对攻击免疫单位施放
     */
    DOTA_INVALID_ORDER_CANT_CAST_ON_ATTACK_IMMUNE = 32,
    /**
     * 无效物品无法购买
     */
    DOTA_INVALID_ORDER_PURCHASE_INVALID_ITEM = 33,
    /**
     * 物品不在背包中
     */
    DOTA_INVALID_ORDER_ITEM_NOT_IN_INVENTORY = 34,
    /**
     * 物品不属于该单位
     */
    DOTA_INVALID_ORDER_ITEM_NOT_IN_UNIT_INVENTORY = 35,
    /**
     * 目标不可选
     */
    DOTA_INVALID_ORDER_TARGET_UNSELECTABLE = 36,
    /**
     * 物品不在主背包中
     */
    DOTA_INVALID_ORDER_ITEM_NOT_IN_ACTIVE_INVENTORY = 37,
    /**
     * 单位无法捡起神符
     */
    DOTA_INVALID_ORDER_UNIT_CANT_PICK_UP_RUNES = 38,
    /**
     * 单位无法操作物品
     */
    DOTA_INVALID_ORDER_UNIT_CANT_MANIPULATE_ITEMS = 39,
    /**
     * 单位是幻象
     */
    DOTA_INVALID_ORDER_UNIT_IS_ILLUSION = 40,
    /**
     * 单位不能攻击
     */
    DOTA_INVALID_ORDER_UNIT_CANT_ATTACK = 41,
    /**
     * 物品无法丢弃
     */
    DOTA_INVALID_ORDER_ITEM_CANT_BE_DROPPED = 42,
    /**
     * 目标树不可交互
     */
    DOTA_INVALID_ORDER_TARGET_TREE_NOT_ACTIVE = 43,
    /**
     * 技能不能自动施放
     */
    DOTA_INVALID_ORDER_ABILITY_CANT_AUTO_CAST = 44,
    /**
     * 目标位置超出地图边界
     */
    DOTA_INVALID_ORDER_TARGET_POSITION_OFF_MAP = 45,
    /**
     * 移动目标超出范围
     */
    DOTA_INVALID_ORDER_UNIT_CANT_MOVE_TARGET_OUT_OF_RANGE = 46,
    /**
     * 不能施放在英雄身上
     */
    DOTA_INVALID_ORDER_CANT_CAST_ON_HERO = 47,
    /**
     * 不能施放在此目标上
     */
    DOTA_INVALID_ORDER_CANT_CAST_ON_OTHER = 48,
    /**
     * 不能施放在建筑上
     */
    DOTA_INVALID_ORDER_CANT_CAST_ON_BUILDING = 49,
    /**
     * 不能施放在远古单位上
     */
    DOTA_INVALID_ORDER_CANT_CAST_ON_ANCIENT = 50,
    /**
     * 物品不能放入储藏处
     */
    DOTA_INVALID_ORDER_ITEM_CANT_BE_MOVED_TO_STASH = 51,
    /**
     * 物品不能移到该格子
     */
    DOTA_INVALID_ORDER_ITEM_CANT_BE_MOVED_TO_SLOT = 52,
    /**
     * 不能施放在机械单位上
     */
    DOTA_INVALID_ORDER_CANT_CAST_ON_MECHANICAL = 53,
    /**
     * 不能接受攻击目标
     */
    DOTA_INVALID_ORDER_CANT_ACCEPT_ATTACK_TARGET = 54,
    /**
     * 技能没有可用充能
     */
    DOTA_INVALID_ORDER_CANT_CAST_NO_CHARGES = 55,
    /**
     * 不能施放在小兵上
     */
    DOTA_INVALID_ORDER_CANT_CAST_ON_CREEP = 56,
    /**
     * 目标不能拾取物品
     */
    DOTA_INVALID_ORDER_TARGET_CANT_TAKE_ITEMS = 57,
    /**
     * 不能给予物品给敌人
     */
    DOTA_INVALID_ORDER_CANT_GIVE_ITEM_TO_ENEMY = 58,
    /**
     * 不能施放在信使身上
     */
    DOTA_INVALID_ORDER_CANT_CAST_ON_COURIER = 59,
    /**
     * 技能已隐藏
     */
    DOTA_INVALID_ORDER_ABILITY_IS_HIDDEN = 60,
    /**
     * 物品冷却中
     */
    DOTA_INVALID_ORDER_ITEM_IN_COOLDOWN = 61,
    /**
     * 秘密商店距离太远
     */
    DOTA_INVALID_ORDER_SECRET_SHOP_NOT_IN_RANGE = 62,
    /**
     * 金钱不足
     */
    DOTA_INVALID_ORDER_NOT_ENOUGH_GOLD = 63,
    /**
     * 合成图纸自动合并失败
     */
    DOTA_INVALID_ORDER_PURCHASE_AUTOCOMBINE_RECIPE = 64,
    /**
     * 血量太高无法补刀
     */
    DOTA_INVALID_ORDER_CANT_DENY_HEALTH_TOO_HIGH = 65,
    /**
     * 旁路商店距离太远
     */
    DOTA_INVALID_ORDER_SIDE_SHOP_NOT_IN_RANGE = 66,
    /**
     * 主商店距离太远
     */
    DOTA_INVALID_ORDER_HOME_SHOP_NOT_IN_RANGE = 67,
    /**
     * 无法拾取物品
     */
    DOTA_INVALID_ORDER_CANT_PICK_UP_ITEM = 68,
    /**
     * 附近无商店无法出售
     */
    DOTA_INVALID_ORDER_CANT_SELL_NO_SHOP_IN_RANGE = 69,
    /**
     * 该物品无法出售
     */
    DOTA_INVALID_ORDER_CANT_SELL_ITEM = 70,
    /**
     * 死亡状态无法出售物品
     */
    DOTA_INVALID_ORDER_CANT_SELL_ITEM_WHILE_DEAD = 71,
    /**
     * 目标不能被补刀
     */
    DOTA_INVALID_ORDER_TARGET_CANT_BE_DENIED = 72,
    /**
     * 技能被缠绕效果禁用
     */
    DOTA_INVALID_ORDER_ABILITY_DISABLED_BY_ROOT = 73,
    /**
     * 单位受命令限制
     */
    DOTA_INVALID_ORDER_UNIT_COMMAND_RESTRICTED = 74,
    /**
     * 单位被锁闭
     */
    DOTA_INVALID_ORDER_UNIT_MUTED = 75,
    /**
     * 不能施放在召唤物上
     */
    DOTA_INVALID_ORDER_CANT_CAST_ON_SUMMONED = 76,
    /**
     * 技能免疫队友不能为目标
     */
    DOTA_INVALID_ORDER_TARGET_MAGIC_IMMUNE_ALLY = 77,
    /**
     * 禁止购买该物品
     */
    DOTA_INVALID_ORDER_CANT_PURCHASE_DISALLOWED_ITEM = 78,
    /**
     * 无法施放在支配单位上
     */
    DOTA_INVALID_ORDER_CANT_CAST_ON_DOMINATED = 79,
    /**
     * 自定义施法失败
     */
    DOTA_INVALID_ORDER_CAST_CUSTOM = 80,
    /**
     * 该物品不能拆解
     */
    DOTA_INVALID_ORDER_ITEM_NOT_DISASSEMBLABLE = 81,
    /**
     * 商店该物品已售罄
     */
    DOTA_INVALID_ORDER_ITEM_OUT_OF_STOCK = 82,
    /**
     * 技能已满级无法升级
     */
    DOTA_INVALID_ORDER_ABILITY_CANT_BE_UPGRADED_AT_MAX = 83,
    /**
     * 技能未激活
     */
    DOTA_INVALID_ORDER_ABILITY_INACTIVE = 84,
    /**
     * 物品不在主背包中
     */
    DOTA_INVALID_ORDER_ITEM_NOT_IN_MAIN_INVENTORY = 85,
    /**
     * 无法使用防御符文
     */
    DOTA_INVALID_ORDER_CANT_GLYPH = 86,
    /**
     * 无法拖动正在引导的物品
     */
    DOTA_INVALID_ORDER_CANT_DRAG_CHANNELING_ITEM = 87,
    /**
     * 非英雄单位无法买活
     */
    DOTA_INVALID_ORDER_CANT_BUYBACK_UNIT_NOT_A_HERO = 88,
    /**
     * 单位未死亡无法买活
     */
    DOTA_INVALID_ORDER_CANT_BUYBACK_UNIT_NOT_DEAD = 89,
    /**
     * 买活金币不足
     */
    DOTA_INVALID_ORDER_CANT_BUYBACK_NOT_ENOUGH_GOLD = 90,
    /**
     * 买活冷却中
     */
    DOTA_INVALID_ORDER_CANT_BUYBACK_IN_COOLDOWN = 91,
    /**
     * 储藏处不在范围内无法拆解
     */
    DOTA_INVALID_ORDER_CANT_DISASSEMBLE_STASH_OUT_OF_RANGE = 92,
    /**
     * 物品不在储藏处无法弹出
     */
    DOTA_INVALID_ORDER_CANT_EJECT_ITEM_NOT_IN_STASH = 93,
    /**
     * 游戏暂停中无法操作
     */
    DOTA_INVALID_ORDER_GAME_IS_PAUSED = 94,
    /**
     * 无法对类英雄单位施放
     */
    DOTA_INVALID_ORDER_CANT_CAST_ON_CONSIDERED_HERO = 95,
    /**
     * 自动购买开启中无法购买
     */
    DOTA_INVALID_ORDER_CANT_SHOP_AUTO_BUY_ENABLED = 96,
    /**
     * 只能主动取消引导技能
     */
    DOTA_INVALID_ORDER_ONLY_DELIBERATE_CHANNELING_CANCEL = 97,
    /**
     * 因恶魔交易无法买活
     */
    DOTA_INVALID_ORDER_CANT_BUYBACK_DEVILS_BARGAIN = 98,
    /**
     * 当前游戏模式禁用买活
     */
    DOTA_INVALID_ORDER_CANT_BUYBACK_DISABLED_BY_GAME_MODE = 99,
    /**
     * 技能信号因错误队伍而发送失败
     */
    DOTA_INVALID_ORDER_CANT_ABILITY_PING_BAD_TEAM = 100,
    /**
     * 技能需要指向位置
     */
    DOTA_INVALID_ORDER_ABILITY_NOT_POSITIONED = 101,
    /**
     * 技能需要目标
     */
    DOTA_INVALID_ORDER_ABILITY_NOT_TARGETTED = 102,
    /**
     * 技能要求目标单位
     */
    DOTA_INVALID_ORDER_ABILITY_REQUIRES_TARGET = 103,
    /**
     * 无法使用扫描
     */
    DOTA_INVALID_ORDER_CANT_RADAR = 104,
    /**
     * 没有信使可用
     */
    DOTA_INVALID_ORDER_NO_COURIER = 105,
    /**
     * 自定义商店不在范围内
     */
    DOTA_INVALID_ORDER_CUSTOM_SHOP_NOT_IN_RANGE = 106,
    /**
     * 无法施放河道染色技能
     */
    DOTA_INVALID_ORDER_CANT_CAST_RIVER_PAINT = 107,
    /**
     * 单位被阻挡无法执行指令
     */
    DOTA_INVALID_ORDER_UNIT_OBSTRUCTED = 108,
    /**
     * 技能需要拖动目标
     */
    DOTA_INVALID_ORDER_CANT_CAST_DRAG_REQUIRED = 109,
    /**
     * 技能被链接效果禁用
     */
    DOTA_INVALID_ORDER_ABILITY_DISABLED_BY_TETHER = 110,
    /**
     * 技能未解锁
     */
    DOTA_INVALID_ORDER_ABILITY_NOT_UNLOCKED = 111,
    /**
     * 英雄未死亡不能喷泉丢物品
     */
    DOTA_INVALID_ORDER_CANT_FOUNTAIN_DROP_UNIT_NOT_DEAD = 112,
    /**
     * 物品不在中立物品栏中
     */
    DOTA_INVALID_ORDER_ITEM_NOT_IN_NEUTRAL_ITEM_STASH = 113,
    /**
     * 该物品已购买
     */
    DOTA_INVALID_ORDER_ITEM_ALREADY_PURCHASED = 114,
    /**
     * 超出物品携带上限
     */
    DOTA_INVALID_ORDER_BEYOND_PHYSICAL_ITEM_LIMIT = 115,
    /**
     * 无法对已死亡队友使用技能信号
     */
    DOTA_INVALID_ORDER_ABILITY_PING_DEAD_ALLY = 116,
    /**
     * 无法锁定合并中立物品
     */
    DOTA_INVALID_ORDER_CANT_LOCKCOMBINE_NEUTRAL_ITEMS = 117,
    /**
     * 技能不能以多样施法施放
     */
    DOTA_INVALID_ORDER_ABILITY_CANT_ALT_CAST = 118,
    /**
     * 物品不能被消耗
     */
    DOTA_INVALID_ORDER_ITEM_CANNOT_BE_CONSUMED = 119,
    /**
     * 挽歌犹唱状态中无法买活
     */
    DOTA_INVALID_ORDER_CANT_BUYBACK_CEASELESS_DIRGE = 120,
    /**
     * 无法攻击建筑
     */
    DOTA_INVALID_ORDER_CANT_ATTACK_BUILDINGS = 121,
    /**
     * 因等级无法购买
     */
    DOTA_INVALID_ORDER_PURCHASE_LEVEL = 122,
    /**
     * 计数占位
     */
    DOTA_INVALID_ORDER_COUNT = 123,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type MotionControllerPriority = DOTA_MOTION_CONTROLLER_PRIORITY;

/**
 * @compileMembersOnly
 */
declare enum DOTA_MOTION_CONTROLLER_PRIORITY {
    /**
     * 最低运动优先级
     */ DOTA_MOTION_CONTROLLER_PRIORITY_LOWEST = 0,
    /**
     * 低运动优先级
     */
    DOTA_MOTION_CONTROLLER_PRIORITY_LOW = 1,
    /**
     * 中运动优先级
     */
    DOTA_MOTION_CONTROLLER_PRIORITY_MEDIUM = 2,
    /**
     * 高运动优先级
     */
    DOTA_MOTION_CONTROLLER_PRIORITY_HIGH = 3,
    /**
     * 极高运动优先级
     */
    DOTA_MOTION_CONTROLLER_PRIORITY_HIGHEST = 4,
    /**
     * 最高运动优先级
     */
    DOTA_MOTION_CONTROLLER_PRIORITY_ULTRA = 5,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type OverheadAlert = DOTA_OVERHEAD_ALERT;

/**
 * @compileMembersOnly
 */
declare enum DOTA_OVERHEAD_ALERT {
    /**
     * 显示获得的金钱
     */ OVERHEAD_ALERT_GOLD = 0,
    /**
     * 显示反补提示
     */
    OVERHEAD_ALERT_DENY = 1,
    /**
     * 显示致命一击伤害
     */
    OVERHEAD_ALERT_CRITICAL = 2,
    /**
     * 显示获得的经验值
     */
    OVERHEAD_ALERT_XP = 3,
    /**
     * 显示技能额外伤害
     */
    OVERHEAD_ALERT_BONUS_SPELL_DAMAGE = 4,
    /**
     * 攻击未命中
     */
    OVERHEAD_ALERT_MISS = 5,
    /**
     * 显示伤害
     */
    OVERHEAD_ALERT_DAMAGE = 6,
    /**
     * 显示闪避
     */
    OVERHEAD_ALERT_EVADE = 7,
    /**
     * 显示被格挡伤害
     */
    OVERHEAD_ALERT_BLOCK = 8,
    /**
     * 显示中毒额外伤害
     */
    OVERHEAD_ALERT_BONUS_POISON_DAMAGE = 9,
    /**
     * 显示治疗量
     */
    OVERHEAD_ALERT_HEAL = 10,
    /**
     * 显示获得的法力值
     */
    OVERHEAD_ALERT_MANA_ADD = 11,
    /**
     * 显示被消耗或吸取法力值
     */
    OVERHEAD_ALERT_MANA_LOSS = 12,
    /**
     * 显示被格挡魔法伤害
     */
    OVERHEAD_ALERT_MAGICAL_BLOCK = 16,
    /**
     * 显示承受伤害
     */
    OVERHEAD_ALERT_INCOMING_DAMAGE = 17,
    /**
     * 显示造成伤害
     */
    OVERHEAD_ALERT_OUTGOING_DAMAGE = 18,
    /**
     * 显示控制抗性相关信息
     */
    OVERHEAD_ALERT_DISABLE_RESIST = 19,
    /**
     * 显示单位死亡提示
     */
    OVERHEAD_ALERT_DEATH = 20,
    /**
     * 显示已格挡伤害
     */
    OVERHEAD_ALERT_BLOCKED = 21,
    /**
     * 显示获得物品提示
     */
    OVERHEAD_ALERT_ITEM_RECEIVED = 22,
    /**
     * 显示阿哈利姆魔晶提示
     */
    OVERHEAD_ALERT_SHARD = 23,
    /**
     * 显示致死打击伤害
     */
    OVERHEAD_ALERT_DEADLY_BLOW = 24,
    /**
     * 显示攻击被强制落空
     */
    OVERHEAD_ALERT_FORCE_MISS = 25,
    /**
     * 显示不朽之守护提示
     */
    OVERHEAD_ALERT_AEGIS = 26,
    /**
     * 显示驱散提示
     */
    OVERHEAD_ALERT_DISPEL = 27,
    /**
     * 显示额外纯粹伤害
     */
    OVERHEAD_ALERT_BONUS_PURE_DAMAGE = 28,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type RuneType = DOTA_RUNES;

/**
 * @compileMembersOnly
 */
declare enum DOTA_RUNES {
    /**
     * 无效占位
     */ DOTA_RUNE_INVALID = -1,
    /**
     * 增伤神符
     */
    DOTA_RUNE_DOUBLEDAMAGE = 0,
    /**
     * 极速神符
     */
    DOTA_RUNE_HASTE = 1,
    /**
     * 幻象神符
     */
    DOTA_RUNE_ILLUSION = 2,
    /**
     * 隐身神符
     */
    DOTA_RUNE_INVISIBILITY = 3,
    /**
     * 恢复神符
     */
    DOTA_RUNE_REGENERATION = 4,
    /**
     * 赏金神符
     */
    DOTA_RUNE_BOUNTY = 5,
    /**
     * 奥术神符
     */
    DOTA_RUNE_ARCANE = 6,
    /**
     * 圣水神符
     */
    DOTA_RUNE_WATER = 7,
    /**
     * 智慧神符
     */
    DOTA_RUNE_XP = 8,
    /**
     * 护盾神符
     */
    DOTA_RUNE_SHIELD = 9,
    /**
     * 计数占位
     */
    DOTA_RUNE_COUNT = 10,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type ShopType = DOTA_SHOP_TYPE;

/**
 * @compileMembersOnly
 */
declare enum DOTA_SHOP_TYPE {
    /**
     * 基地商店
     */ DOTA_SHOP_HOME = 0,
    /**
     * 边路商店
     */
    DOTA_SHOP_SIDE = 1,
    /**
     * 神秘商店
     */
    DOTA_SHOP_SECRET = 2,
    /**
     * 地面商店
     */
    DOTA_SHOP_GROUND = 3,
    /**
     * 边路商店2
     */
    DOTA_SHOP_SIDE2 = 4,
    /**
     * 神秘商店2
     */
    DOTA_SHOP_SECRET2 = 5,
    /**
     * 自定义商店
     */
    DOTA_SHOP_CUSTOM = 6,
    /**
     * 中立商店
     */
    DOTA_SHOP_NEUTRALS = 7,
    /**
     * 空白占位
     */
    DOTA_SHOP_NONE = 8,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type UnitTargetFlags = DOTA_UNIT_TARGET_FLAGS;

/**
 * @compileMembersOnly
 */
declare enum DOTA_UNIT_TARGET_FLAGS {
    /**
     * 空白占位
     */ DOTA_UNIT_TARGET_FLAG_NONE = 0,
    /**
     * 仅可选定远程单位目标
     */
    DOTA_UNIT_TARGET_FLAG_RANGED_ONLY = 2,
    /**
     * 仅可选定近战单位目标
     */
    DOTA_UNIT_TARGET_FLAG_MELEE_ONLY = 4,
    /**
     * 可选定死亡目标
     */
    DOTA_UNIT_TARGET_FLAG_DEAD = 8,
    /**
     * 可选定技能免疫敌方目标
     */
    DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES = 16,
    /**
     * 无法选定技能免疫友方目标
     */
    DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES = 32,
    /**
     * 可选定无敌目标
     */
    DOTA_UNIT_TARGET_FLAG_INVULNERABLE = 64,
    /**
     * 可选定战争迷雾可见目标
     */
    DOTA_UNIT_TARGET_FLAG_FOW_VISIBLE = 128,
    /**
     * 可选定非隐身目标
     */
    DOTA_UNIT_TARGET_FLAG_NO_INVIS = 256,
    /**
     * 可选定视野内目标
     */
    DOTA_UNIT_TARGET_FLAG_CAN_BE_SEEN = 384,
    /**
     * 无法选定远古单位目标
     */
    DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS = 512,
    /**
     * 可选定玩家可控单位目标
     */
    DOTA_UNIT_TARGET_FLAG_PLAYER_CONTROLLED = 1024,
    /**
     * 无法选定被支配目标
     */
    DOTA_UNIT_TARGET_FLAG_NOT_DOMINATED = 2048,
    /**
     * 无法选定召唤单位目标
     */
    DOTA_UNIT_TARGET_FLAG_NOT_SUMMONED = 4096,
    /**
     * 无法选定幻象目标
     */
    DOTA_UNIT_TARGET_FLAG_NOT_ILLUSIONS = 8192,
    /**
     * 无法选定攻击免疫单位目标
     */
    DOTA_UNIT_TARGET_FLAG_NOT_ATTACK_IMMUNE = 16384,
    /**
     * 仅可选定拥有魔法值单位目标
     */
    DOTA_UNIT_TARGET_FLAG_MANA_ONLY = 32768,
    /**
     * 检测禁用帮助选定目标
     */
    DOTA_UNIT_TARGET_FLAG_CHECK_DISABLE_HELP = 65536,
    /**
     * 无法选定英雄级单位目标
     */
    DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO = 131072,
    /**
     * 可选定隐藏目标
     */
    DOTA_UNIT_TARGET_FLAG_OUT_OF_WORLD = 262144,
    /**
     * 无法选定睡眠目标
     */
    DOTA_UNIT_TARGET_FLAG_NOT_NIGHTMARED = 524288,
    /**
     * 优先选定敌方目标
     */
    DOTA_UNIT_TARGET_FLAG_PREFER_ENEMIES = 1048576,
    /**
     * 考虑地形选定目标
     */
    DOTA_UNIT_TARGET_FLAG_RESPECT_OBSTRUCTIONS = 2097152,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type UnitTargetTeam = DOTA_UNIT_TARGET_TEAM;

/**
 * @compileMembersOnly
 */
declare enum DOTA_UNIT_TARGET_TEAM {
    /**
     * 空白占位
     */ DOTA_UNIT_TARGET_TEAM_NONE = 0,
    /**
     * 友方目标
     */
    DOTA_UNIT_TARGET_TEAM_FRIENDLY = 1,
    /**
     * 敌方目标
     */
    DOTA_UNIT_TARGET_TEAM_ENEMY = 2,
    /**
     * 敌友双方目标
     */
    DOTA_UNIT_TARGET_TEAM_BOTH = 3,
    /**
     * 自定义阵营目标
     */
    DOTA_UNIT_TARGET_TEAM_CUSTOM = 4,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type UnitTargetType = DOTA_UNIT_TARGET_TYPE;

/**
 * @compileMembersOnly
 */
declare enum DOTA_UNIT_TARGET_TYPE {
    /**
     * 空白占位
     */ DOTA_UNIT_TARGET_NONE = 0,
    /**
     * 英雄目标
     */
    DOTA_UNIT_TARGET_HERO = 1,
    /**
     * 小兵目标
     */
    DOTA_UNIT_TARGET_CREEP = 2,
    /**
     * 建筑目标
     */
    DOTA_UNIT_TARGET_BUILDING = 4,
    /**
     * 信使目标
     */
    DOTA_UNIT_TARGET_COURIER = 16,
    /**
     * 基础单位目标
     */
    DOTA_UNIT_TARGET_BASIC = 18,
    /**
     * 英雄和小兵目标
     */
    DOTA_UNIT_TARGET_HEROES_AND_CREEPS = 19,
    /**
     * 其他单位目标
     */
    DOTA_UNIT_TARGET_OTHER = 32,
    /**
     * 通用单位目标
     */
    DOTA_UNIT_TARGET_ALL = 55,
    /**
     * 树木目标
     */
    DOTA_UNIT_TARGET_TREE = 64,
    /**
     * 自定义单位目标
     */
    DOTA_UNIT_TARGET_CUSTOM = 128,
    /**
     * 自身目标
     */
    DOTA_UNIT_TARGET_SELF = 256,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type AbilitySpeakTrigger = DOTAAbilitySpeakTrigger_t;

/**
 * @compileMembersOnly
 */
declare enum DOTAAbilitySpeakTrigger_t {
    /**
     * 前摇开始时触发语音
     */ DOTA_ABILITY_SPEAK_START_ACTION_PHASE = 0,
    /**
     * 施法完成时触发语音
     */
    DOTA_ABILITY_SPEAK_CAST = 1,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type ConnectionState = DOTAConnectionState_t;

/**
 * @compileMembersOnly
 */
declare enum DOTAConnectionState_t {
    /**
     * 未知连接状态
     */ DOTA_CONNECTION_STATE_UNKNOWN = 0,
    /**
     * 尚未连接
     */
    DOTA_CONNECTION_STATE_NOT_YET_CONNECTED = 1,
    /**
     * 已连接
     */
    DOTA_CONNECTION_STATE_CONNECTED = 2,
    /**
     * 已断开连接
     */
    DOTA_CONNECTION_STATE_DISCONNECTED = 3,
    /**
     * 已放弃游戏
     */
    DOTA_CONNECTION_STATE_ABANDONED = 4,
    /**
     * 正加载游戏
     */
    DOTA_CONNECTION_STATE_LOADING = 5,
    /**
     * 连接失败
     */
    DOTA_CONNECTION_STATE_FAILED = 6,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type CustomCameraEventFlags = DOTACustomCameraEventFlags_t;

/**
 * @compileMembersOnly
 */
declare enum DOTACustomCameraEventFlags_t {
    /**
     * 缩放镜头
     */ k_ECustomCameraEventFlags_Zoom = 1,
    /**
     * 调整镜头位置
     */
    k_ECustomCameraEventFlags_Position = 2,
    /**
     * 聚焦玩家镜头
     */
    k_ECustomCameraEventFlags_PositionPlayerHero = 4,
    /**
     * 设置镜头俯角
     */
    k_ECustomCameraEventFlags_Pitch = 8,
    /**
     * 设置镜头偏角
     */
    k_ECustomCameraEventFlags_Yaw = 16,
    /**
     * 锁定镜头
     */
    k_ECustomCameraEventFlags_Lock = 32,
    /**
     * 解锁镜头
     */
    k_ECustomCameraEventFlags_Unlock = 64,
    /**
     * 重置默认镜头
     */
    k_ECustomCameraEventFlags_ResetDefault = 128,
    /**
     * 特定玩家镜头
     */
    k_ECustomCameraEventFlags_SpecificPlayer = 256,
    /**
     * 淡出镜头
     */
    k_ECustomCameraEventFlags_FadeOut = 512,
    /**
     * 淡入镜头
     */
    k_ECustomCameraEventFlags_FadeIn = 1024,
    /**
     * 开启镜头黑边
     */
    k_ECustomCameraEventFlags_LetterboxOn = 2048,
    /**
     * 关闭镜头黑边
     */
    k_ECustomCameraEventFlags_LetterboxOff = 4096,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type DamageFlag = DOTADamageFlag_t;

/**
 * @compileMembersOnly
 */
declare enum DOTADamageFlag_t {
    /**
     * 空白占位
     */ DOTA_DAMAGE_FLAG_NONE = 0,
    /**
     * 忽略魔法抗性
     */
    DOTA_DAMAGE_FLAG_IGNORES_MAGIC_ARMOR = 1,
    /**
     * 忽略护甲
     */
    DOTA_DAMAGE_FLAG_IGNORES_PHYSICAL_ARMOR = 2,
    /**
     * 忽略无敌
     */
    DOTA_DAMAGE_FLAG_BYPASSES_INVULNERABILITY = 4,
    /**
     * 忽略物理伤害格挡
     */
    DOTA_DAMAGE_FLAG_BYPASSES_PHYSICAL_BLOCK = 8,
    /**
     * 反弹
     */
    DOTA_DAMAGE_FLAG_REFLECTION = 16,
    /**
     * 生命移除
     */
    DOTA_DAMAGE_FLAG_HPLOSS = 32,
    /**
     * 跳过导演系统结算
     */
    DOTA_DAMAGE_FLAG_NO_DIRECTOR_EVENT = 64,
    /**
     * 不致死
     */
    DOTA_DAMAGE_FLAG_NON_LETHAL = 128,
    /**
     * 无视伤害调整
     */
    DOTA_DAMAGE_FLAG_NO_DAMAGE_MULTIPLIERS = 512,
    /**
     * 无视技能增强
     */
    DOTA_DAMAGE_FLAG_NO_SPELL_AMPLIFICATION = 1024,
    /**
     * 伤害来源隐身时无伤害提示
     */
    DOTA_DAMAGE_FLAG_DONT_DISPLAY_DAMAGE_IF_SOURCE_HIDDEN = 2048,
    /**
     * 无视技能吸血
     */
    DOTA_DAMAGE_FLAG_NO_SPELL_LIFESTEAL = 4096,
    /**
     * 火焰伤害
     */
    DOTA_DAMAGE_FLAG_PROPERTY_FIRE = 8192,
    /**
     * 忽略基础护甲
     */
    DOTA_DAMAGE_FLAG_IGNORES_BASE_PHYSICAL_ARMOR = 16384,
    /**
     * 次级攻击弹道
     */
    DOTA_DAMAGE_FLAG_SECONDARY_PROJECTILE_ATTACK = 32768,
    /**
     * 强制技能增强
     */
    DOTA_DAMAGE_FLAG_FORCE_SPELL_AMPLIFICATION = 65536,
    /**
     * 魔法自动攻击行为
     */
    DOTA_DAMAGE_FLAG_MAGIC_AUTO_ATTACK = 131072,
    /**
     * 攻击特效
     */
    DOTA_DAMAGE_FLAG_ATTACK_MODIFIER = 262144,
    /**
     * 忽略所有伤害格挡
     */
    DOTA_DAMAGE_FLAG_BYPASSES_ALL_BLOCK = 524288,
    /**
     * 强制无法反弹
     */
    DOTA_DAMAGE_FLAG_NO_REFLECTION = 1048576,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type DefaultUiElement = DotaDefaultUIElement_t;

/**
 * @compileMembersOnly
 */
declare enum DotaDefaultUIElement_t {
    /**
     * 无效占位
     */ DOTA_DEFAULT_UI_INVALID = -1,
    /**
     * 昼夜时间条
     */
    DOTA_DEFAULT_UI_TOP_TIMEOFDAY = 0,
    /**
     * 顶部英雄栏
     */
    DOTA_DEFAULT_UI_TOP_HEROES = 1,
    /**
     * 顶部计分板
     */
    DOTA_DEFAULT_UI_FLYOUT_SCOREBOARD = 2,
    /**
     * 单位面板
     */
    DOTA_DEFAULT_UI_ACTION_PANEL = 3,
    /**
     * 小地图
     */
    DOTA_DEFAULT_UI_ACTION_MINIMAP = 4,
    /**
     * 商店
     */
    DOTA_DEFAULT_UI_INVENTORY_PANEL = 5,
    /**
     * 商店按钮
     */
    DOTA_DEFAULT_UI_INVENTORY_SHOP = 6,
    /**
     * 物品栏
     */
    DOTA_DEFAULT_UI_INVENTORY_ITEMS = 7,
    /**
     * 快速购买区域
     */
    DOTA_DEFAULT_UI_INVENTORY_QUICKBUY = 8,
    /**
     * 信使界面
     */
    DOTA_DEFAULT_UI_INVENTORY_COURIER = 9,
    /**
     * 物品保护
     */
    DOTA_DEFAULT_UI_INVENTORY_PROTECT = 10,
    /**
     * 金钱
     */
    DOTA_DEFAULT_UI_INVENTORY_GOLD = 11,
    /**
     * 推荐物品
     */
    DOTA_DEFAULT_UI_SHOP_SUGGESTEDITEMS = 12,
    /**
     * 常用物品
     */
    DOTA_DEFAULT_UI_SHOP_COMMONITEMS = 13,
    /**
     * 队伍名（选英雄时）
     */
    DOTA_DEFAULT_UI_HERO_SELECTION_TEAMS = 14,
    /**
     * 游戏模式名（选英雄时）
     */
    DOTA_DEFAULT_UI_HERO_SELECTION_GAME_NAME = 15,
    /**
     * 计时器（选英雄时）
     */
    DOTA_DEFAULT_UI_HERO_SELECTION_CLOCK = 16,
    /**
     * 顶部信息（选英雄时）
     */
    DOTA_DEFAULT_UI_HERO_SELECTION_HEADER = 17,
    /**
     * 左上角菜单栏
     */
    DOTA_DEFAULT_UI_TOP_MENU_BUTTONS = 18,
    /**
     * 顶部栏背景
     */
    DOTA_DEFAULT_UI_TOP_BAR_BACKGROUND = 19,
    /**
     * 天辉头像栏
     */
    DOTA_DEFAULT_UI_TOP_BAR_RADIANT_TEAM = 20,
    /**
     * 夜魇头像栏
     */
    DOTA_DEFAULT_UI_TOP_BAR_DIRE_TEAM = 21,
    /**
     * 顶部比分
     */
    DOTA_DEFAULT_UI_TOP_BAR_SCORE = 22,
    /**
     * 结束结算
     */
    DOTA_DEFAULT_UI_ENDGAME = 23,
    /**
     * 聊天框
     */
    DOTA_DEFAULT_UI_ENDGAME_CHAT = 24,
    /**
     * 击杀助攻统计数据
     */
    DOTA_DEFAULT_UI_QUICK_STATS = 25,
    /**
     * 战略布局信息
     */
    DOTA_DEFAULT_UI_PREGAME_STRATEGYUI = 26,
    /**
     * 击杀镜头回放
     */
    DOTA_DEFAULT_UI_KILLCAM = 27,
    /**
     * 战斗回顾
     */
    DOTA_DEFAULT_UI_FIGHT_RECAP = 28,
    /**
     * 顶部栏总览
     */
    DOTA_DEFAULT_UI_TOP_BAR = 29,
    /**
     * 自定义界面显示层
     */
    DOTA_DEFAULT_UI_CUSTOMUI_BEHIND_HUD_ELEMENTS = 30,
    /**
     * 阿哈利姆迷宫指示界面
     */
    DOTA_DEFAULT_UI_AGHANIMS_STATUS = 31,
    /**
     * 计数占位
     */
    DOTA_DEFAULT_UI_ELEMENT_COUNT = 32,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type HudVisibility = DOTAHUDVisibility_t;

/**
 * @compileMembersOnly
 */
declare enum DOTAHUDVisibility_t {
    /**
     * 无效占位
     */ DOTA_HUD_VISIBILITY_INVALID = -1,
    /**
     * 昼夜时间条
     */
    DOTA_HUD_VISIBILITY_TOP_TIMEOFDAY = 0,
    /**
     * 顶部英雄栏
     */
    DOTA_HUD_VISIBILITY_TOP_HEROES = 1,
    /**
     * 顶部计分板
     */
    DOTA_HUD_VISIBILITY_TOP_SCOREBOARD = 2,
    /**
     * 单位面板
     */
    DOTA_HUD_VISIBILITY_ACTION_PANEL = 3,
    /**
     * 小地图
     */
    DOTA_HUD_VISIBILITY_ACTION_MINIMAP = 4,
    /**
     * 物品总览
     */
    DOTA_HUD_VISIBILITY_INVENTORY_PANEL = 5,
    /**
     * 商店
     */
    DOTA_HUD_VISIBILITY_INVENTORY_SHOP = 6,
    /**
     * 物品栏
     */
    DOTA_HUD_VISIBILITY_INVENTORY_ITEMS = 7,
    /**
     * 快速购买区域
     */
    DOTA_HUD_VISIBILITY_INVENTORY_QUICKBUY = 8,
    /**
     * 信使界面
     */
    DOTA_HUD_VISIBILITY_INVENTORY_COURIER = 9,
    /**
     * 物品保护
     */
    DOTA_HUD_VISIBILITY_INVENTORY_PROTECT = 10,
    /**
     * 金钱
     */
    DOTA_HUD_VISIBILITY_INVENTORY_GOLD = 11,
    /**
     * 推荐物品
     */
    DOTA_HUD_VISIBILITY_SHOP_SUGGESTEDITEMS = 12,
    /**
     * 常用物品
     */
    DOTA_HUD_VISIBILITY_SHOP_COMMONITEMS = 13,
    /**
     * 队伍名（选英雄时）
     */
    DOTA_HUD_VISIBILITY_HERO_SELECTION_TEAMS = 14,
    /**
     * 游戏模式名（选英雄时）
     */
    DOTA_HUD_VISIBILITY_HERO_SELECTION_GAME_NAME = 15,
    /**
     * 计时器（选英雄时）
     */
    DOTA_HUD_VISIBILITY_HERO_SELECTION_CLOCK = 16,
    /**
     * 顶部信息（选英雄时）
     */
    DOTA_HUD_VISIBILITY_HERO_SELECTION_HEADER = 17,
    /**
     * 左上角菜单栏
     */
    DOTA_HUD_VISIBILITY_TOP_MENU_BUTTONS = 18,
    /**
     * 顶部栏背景
     */
    DOTA_HUD_VISIBILITY_TOP_BAR_BACKGROUND = 19,
    /**
     * 天辉头像栏
     */
    DOTA_HUD_VISIBILITY_TOP_BAR_RADIANT_TEAM = 20,
    /**
     * 夜魇头像栏
     */
    DOTA_HUD_VISIBILITY_TOP_BAR_DIRE_TEAM = 21,
    /**
     * 顶部比分
     */
    DOTA_HUD_VISIBILITY_TOP_BAR_SCORE = 22,
    /**
     * 结束结算
     */
    DOTA_HUD_VISIBILITY_ENDGAME = 23,
    /**
     * 聊天框
     */
    DOTA_HUD_VISIBILITY_ENDGAME_CHAT = 24,
    /**
     * 击杀助攻统计数据
     */
    DOTA_HUD_VISIBILITY_QUICK_STATS = 25,
    /**
     * 战略布局信息
     */
    DOTA_HUD_VISIBILITY_PREGAME_STRATEGYUI = 26,
    /**
     * 击杀镜头回放
     */
    DOTA_HUD_VISIBILITY_KILLCAM = 27,
    /**
     * 战斗回顾
     */
    DOTA_HUD_VISIBILITY_FIGHT_RECAP = 28,
    /**
     * 顶部栏总览
     */
    DOTA_HUD_VISIBILITY_TOP_BAR = 29,
    /**
     * 自定义界面后层显示
     */
    DOTA_HUD_CUSTOMUI_BEHIND_HUD_ELEMENTS = 30,
    /**
     * 阿哈利姆迷宫指示界面
     */
    DOTA_HUD_VISIBILITY_AGHANIMS_STATUS = 31,
    /**
     * 计数占位
     */
    DOTA_HUD_VISIBILITY_COUNT = 32,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type InventoryFlags = DOTAInventoryFlags_t;

/**
 * @compileMembersOnly
 */
declare enum DOTAInventoryFlags_t {
    /**
     * 无法使用任意物品栏
     */ DOTA_INVENTORY_ALLOW_NONE = 0,
    /**
     * 仅可使用主物品栏
     */
    DOTA_INVENTORY_ALLOW_MAIN = 1,
    /**
     * 仅可使用储藏处
     */
    DOTA_INVENTORY_ALLOW_STASH = 2,
    /**
     * 可使用物品栏
     */
    DOTA_INVENTORY_ALL_ACCESS = 3,
    /**
     * 可将物品置于地面
     */
    DOTA_INVENTORY_ALLOW_DROP_ON_GROUND = 4,
    /**
     * 可将物品置入泉水
     */
    DOTA_INVENTORY_ALLOW_DROP_AT_FOUNTAIN = 8,
    /**
     * 仅能将物品置于地面
     */
    DOTA_INVENTORY_LIMIT_DROP_ON_GROUND = 16,
}

/**
 * @compileMembersOnly
 */
declare enum DOTALimits_t {
    /**
     * 默认最大队伍数
     */ DOTA_DEFAULT_MAX_TEAM = 5,
    /**
     * 队伍默认最大玩家数
     */
    DOTA_DEFAULT_MAX_TEAM_PLAYERS = 10,
    /**
     * 最大玩家队伍数
     */
    DOTA_MAX_PLAYER_TEAMS = 10,
    /**
     * 观战者最大人数
     */
    DOTA_MAX_SPECTATOR_LOBBY_SIZE = 15,
    /**
     * 最大队伍数
     */
    DOTA_MAX_TEAM = 24,
    /**
     * 队伍最大玩家数
     */
    DOTA_MAX_TEAM_PLAYERS = 24,
    /**
     * 观战者队伍最大人数
     */
    DOTA_MAX_SPECTATOR_TEAM_SIZE = 40,
    /**
     * 最大玩家数
     */
    DOTA_MAX_PLAYERS = 64,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type MinimapEventType = DOTAMinimapEvent_t;

/**
 * @compileMembersOnly
 */
declare enum DOTAMinimapEvent_t {
    /**
     * 遗迹受攻击时
     */ DOTA_MINIMAP_EVENT_ANCIENT_UNDER_ATTACK = 2,
    /**
     * 基础建筑受攻击时
     */
    DOTA_MINIMAP_EVENT_BASE_UNDER_ATTACK = 4,
    /**
     * 启动防御符文时
     */
    DOTA_MINIMAP_EVENT_BASE_GLYPHED = 8,
    /**
     * 队友被攻击时
     */
    DOTA_MINIMAP_EVENT_TEAMMATE_UNDER_ATTACK = 16,
    /**
     * 队友传送时
     */
    DOTA_MINIMAP_EVENT_TEAMMATE_TELEPORTING = 32,
    /**
     * 队友死亡时
     */
    DOTA_MINIMAP_EVENT_TEAMMATE_DIED = 64,
    /**
     * 教学任务激活时
     */
    DOTA_MINIMAP_EVENT_TUTORIAL_TASK_ACTIVE = 128,
    /**
     * 教学任务完成时
     */
    DOTA_MINIMAP_EVENT_TUTORIAL_TASK_FINISHED = 256,
    /**
     * 提示位置时
     */
    DOTA_MINIMAP_EVENT_HINT_LOCATION = 512,
    /**
     * 敌方传送时
     */
    DOTA_MINIMAP_EVENT_ENEMY_TELEPORTING = 1024,
    /**
     * 取消传送时
     */
    DOTA_MINIMAP_EVENT_CANCEL_TELEPORTING = 2048,
    /**
     * 启动雷达时
     */
    DOTA_MINIMAP_EVENT_RADAR = 4096,
    /**
     * 被雷达检测时
     */
    DOTA_MINIMAP_EVENT_RADAR_TARGET = 8192,
    /**
     * 移动至目标时
     */
    DOTA_MINIMAP_EVENT_MOVE_TO_TARGET = 16384,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type ModifierAttribute = DOTAModifierAttribute_t;

/**
 * @compileMembersOnly
 */
declare enum DOTAModifierAttribute_t {
    /**
     * 无特殊属性（默认）
     */ MODIFIER_ATTRIBUTE_NONE = 0,
    /**
     * 永久状态（例：冰）
     */
    MODIFIER_ATTRIBUTE_PERMANENT = 1,
    /**
     * 独立结算（例：沸血之矛）
     */
    MODIFIER_ATTRIBUTE_MULTIPLE = 2,
    /**
     * 可对无敌单位生效（例：衰退光环）
     */
    MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE = 4,
    /**
     * 光环优先级（未知）
     */
    MODIFIER_ATTRIBUTE_AURA_PRIORITY = 8,
    /**
     * 忽略躲避（未知）
     */
    MODIFIER_ATTRIBUTE_IGNORE_DODGE = 16,
    /**
     * 可被复制（未知）
     */
    MODIFIER_ATTRIBUTE_DUPLICATED = 32,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type MusicStatus = DOTAMusicStatus_t;

/**
 * @compileMembersOnly
 */
declare enum DOTAMusicStatus_t {
    /**
     * 无音乐阶段
     */ DOTA_MUSIC_STATUS_NONE = 0,
    /**
     * 探索音乐阶段
     */
    DOTA_MUSIC_STATUS_EXPLORATION = 1,
    /**
     * 战斗音乐阶段
     */
    DOTA_MUSIC_STATUS_BATTLE = 2,
    /**
     * 游戏开始前音乐阶段
     */
    DOTA_MUSIC_STATUS_PRE_GAME_EXPLORATION = 3,
    /**
     * 死亡音乐阶段
     */
    DOTA_MUSIC_STATUS_DEAD = 4,
    /**
     * 终止占位
     */
    DOTA_MUSIC_STATUS_LAST = 5,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type PostGameColumn = DOTAPostGameColumn_t;

/**
 * @compileMembersOnly
 */
declare enum DOTAPostGameColumn_t {
    /**
     * 赛后统计等级
     */ DOTA_POST_GAME_COLUMN_LEVEL = 0,
    /**
     * 赛后统计物品
     */
    DOTA_POST_GAME_COLUMN_ITEMS = 1,
    /**
     * 赛后统计击杀
     */
    DOTA_POST_GAME_COLUMN_KILLS = 2,
    /**
     * 赛后统计死亡
     */
    DOTA_POST_GAME_COLUMN_DEATHS = 3,
    /**
     * 赛后统计助攻
     */
    DOTA_POST_GAME_COLUMN_ASSISTS = 4,
    /**
     * 赛后统计净资产
     */
    DOTA_POST_GAME_COLUMN_NET_WORTH = 5,
    /**
     * 赛后统计补刀
     */
    DOTA_POST_GAME_COLUMN_LAST_HITS = 6,
    /**
     * 赛后统计反补
     */
    DOTA_POST_GAME_COLUMN_DENIES = 7,
    /**
     * 赛后统计伤害
     */
    DOTA_POST_GAME_COLUMN_DAMAGE = 8,
    /**
     * 赛后统计治疗
     */
    DOTA_POST_GAME_COLUMN_HEALING = 9,
    /**
     * 上限占位
     */
    DOTA_POST_GAME_COLUMN_MAX = 10,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type PostGameLayout = DOTAPostGameLayout_t;

/**
 * @compileMembersOnly
 */
declare enum DOTAPostGameLayout_t {
    /**
     * 双列布局
     */ DOTA_POST_GAME_LAYOUT_DOUBLE_COLUMN = 0,
    /**
     * 单列布局
     */
    DOTA_POST_GAME_LAYOUT_SINGLE_COLUMN = 1,
    /**
     * 上限占位
     */
    DOTA_POST_GAME_LAYOUT_MAX = 2,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type ProjectileAttachment = DOTAProjectileAttachment_t;

/**
 * @compileMembersOnly
 */
declare enum DOTAProjectileAttachment_t {
    /**
     * 无攻击点位
     */ DOTA_PROJECTILE_ATTACHMENT_NONE = 0,
    /**
     * 攻击点位1
     */
    DOTA_PROJECTILE_ATTACHMENT_ATTACK_1 = 1,
    /**
     * 攻击点位2
     */
    DOTA_PROJECTILE_ATTACHMENT_ATTACK_2 = 2,
    /**
     * 以攻击落点为准
     */
    DOTA_PROJECTILE_ATTACHMENT_HITLOCATION = 3,
    /**
     * 攻击点位3
     */
    DOTA_PROJECTILE_ATTACHMENT_ATTACK_3 = 4,
    /**
     * 攻击点位4
     */
    DOTA_PROJECTILE_ATTACHMENT_ATTACK_4 = 5,
    /**
     * 终止占位
     */
    DOTA_PROJECTILE_ATTACHMENT_LAST = 6,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type InventorySlot = DOTAScriptInventorySlot_t;

/**
 * @compileMembersOnly
 */
declare enum DOTAScriptInventorySlot_t {
    /**
     * 物品栏槽位1
     */ DOTA_ITEM_SLOT_1 = 0,
    /**
     * 物品栏槽位2
     */
    DOTA_ITEM_SLOT_2 = 1,
    /**
     * 物品栏槽位3
     */
    DOTA_ITEM_SLOT_3 = 2,
    /**
     * 物品栏槽位4
     */
    DOTA_ITEM_SLOT_4 = 3,
    /**
     * 物品栏槽位5
     */
    DOTA_ITEM_SLOT_5 = 4,
    /**
     * 物品栏槽位6
     */
    DOTA_ITEM_SLOT_6 = 5,
    /**
     * 背包栏槽位1
     */
    DOTA_ITEM_SLOT_7 = 6,
    /**
     * 背包栏槽位2
     */
    DOTA_ITEM_SLOT_8 = 7,
    /**
     * 背包栏槽位3
     */
    DOTA_ITEM_SLOT_9 = 8,
    /**
     * 储藏处槽位1
     */
    DOTA_STASH_SLOT_1 = 9,
    /**
     * 储藏处槽位2
     */
    DOTA_STASH_SLOT_2 = 10,
    /**
     * 储藏处槽位3
     */
    DOTA_STASH_SLOT_3 = 11,
    /**
     * 储藏处槽位4
     */
    DOTA_STASH_SLOT_4 = 12,
    /**
     * 储藏处槽位5
     */
    DOTA_STASH_SLOT_5 = 13,
    /**
     * 储藏处槽位6
     */
    DOTA_STASH_SLOT_6 = 14,
    /**
     * 回城卷轴专用槽位
     */
    DOTA_ITEM_TP_SCROLL = 15,
    /**
     * 中立物品槽位
     */
    DOTA_ITEM_NEUTRAL_ACTIVE_SLOT = 16,
    /**
     * 中立物品附魔槽位
     */
    DOTA_ITEM_NEUTRAL_PASSIVE_SLOT = 17,
    /**
     * 临时物品槽位
     */
    DOTA_ITEM_TRANSIENT_ITEM = 23,
    /**
     * 临时图纸槽位
     */
    DOTA_ITEM_TRANSIENT_RECIPE = 24,
    /**
     * 临时可施法物品槽位
     */
    DOTA_ITEM_TRANSIENT_CAST_ITEM = 26,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type LoadoutType = DOTASlotType_t;

/**
 * @compileMembersOnly
 */
declare enum DOTASlotType_t {
    /**
     * 无效占位
     */ DOTA_LOADOUT_TYPE_INVALID = -1,
    /**
     * 主武器饰品
     */
    DOTA_LOADOUT_TYPE_WEAPON = 0,
    /**
     * 副武器饰品
     */
    DOTA_LOADOUT_TYPE_OFFHAND_WEAPON = 1,
    /**
     * 主武器饰品2
     */
    DOTA_LOADOUT_TYPE_WEAPON2 = 2,
    /**
     * 副武器饰品2
     */
    DOTA_LOADOUT_TYPE_OFFHAND_WEAPON2 = 3,
    /**
     * 头部饰品
     */
    DOTA_LOADOUT_TYPE_HEAD = 4,
    /**
     * 肩部饰品
     */
    DOTA_LOADOUT_TYPE_SHOULDER = 5,
    /**
     * 手臂饰品
     */
    DOTA_LOADOUT_TYPE_ARMS = 6,
    /**
     * 护甲饰品
     */
    DOTA_LOADOUT_TYPE_ARMOR = 7,
    /**
     * 腰带饰品
     */
    DOTA_LOADOUT_TYPE_BELT = 8,
    /**
     * 颈部饰品
     */
    DOTA_LOADOUT_TYPE_NECK = 9,
    /**
     * 背部饰品
     */
    DOTA_LOADOUT_TYPE_BACK = 10,
    /**
     * 手套饰品
     */
    DOTA_LOADOUT_TYPE_GLOVES = 11,
    /**
     * 腿部饰品
     */
    DOTA_LOADOUT_TYPE_LEGS = 12,
    /**
     * 尾部饰品
     */
    DOTA_LOADOUT_TYPE_TAIL = 13,
    /**
     * 杂项饰品
     */
    DOTA_LOADOUT_TYPE_MISC = 14,
    /**
     * 饰品套装
     */
    DOTA_LOADOUT_TYPE_COSTUME = 15,
    /**
     * 英雄基础模型饰品
     */
    DOTA_LOADOUT_TYPE_HERO_BASE = 16,
    /**
     * 头身饰品
     */
    DOTA_LOADOUT_TYPE_BODY_HEAD = 17,
    /**
     * 坐骑饰品
     */
    DOTA_LOADOUT_TYPE_MOUNT = 18,
    /**
     * 召唤单位饰品
     */
    DOTA_LOADOUT_TYPE_SUMMON = 19,
    /**
     * 变身形态饰品
     */
    DOTA_LOADOUT_TYPE_SHAPESHIFT = 20,
    /**
     * 嘲讽动作饰品
     */
    DOTA_LOADOUT_TYPE_TAUNT = 21,
    /**
     * 英雄雕像饰品
     */
    DOTA_LOADOUT_TYPE_HERO_EFFIGY = 22,
    /**
     * 环境特效饰品
     */
    DOTA_LOADOUT_TYPE_AMBIENT_EFFECTS = 23,
    /**
     * 普攻特效饰品
     */
    DOTA_LOADOUT_TYPE_ABILITY_ATTACK = 24,
    /**
     * 技能1饰品
     */
    DOTA_LOADOUT_TYPE_ABILITY1 = 25,
    /**
     * 技能2饰品
     */
    DOTA_LOADOUT_TYPE_ABILITY2 = 26,
    /**
     * 技能3饰品
     */
    DOTA_LOADOUT_TYPE_ABILITY3 = 27,
    /**
     * 技能4饰品
     */
    DOTA_LOADOUT_TYPE_ABILITY4 = 28,
    /**
     * 终极技能饰品
     */
    DOTA_LOADOUT_TYPE_ABILITY_ULTIMATE = 29,
    /**
     * 技能1特效饰品
     */
    DOTA_LOADOUT_TYPE_ABILITY_EFFECTS_1 = 30,
    /**
     * 技能2特效饰品
     */
    DOTA_LOADOUT_TYPE_ABILITY_EFFECTS_2 = 31,
    /**
     * 技能3特效饰品
     */
    DOTA_LOADOUT_TYPE_ABILITY_EFFECTS_3 = 32,
    /**
     * 技能4特效饰品
     */
    DOTA_LOADOUT_TYPE_ABILITY_EFFECTS_4 = 33,
    /**
     * 技能5特效饰品
     */
    DOTA_LOADOUT_TYPE_ABILITY_EFFECTS_5 = 34,
    /**
     * 技能6特效饰品
     */
    DOTA_LOADOUT_TYPE_ABILITY_EFFECTS_6 = 35,
    /**
     * 技能7特效饰品
     */
    DOTA_LOADOUT_TYPE_ABILITY_EFFECTS_7 = 36,
    /**
     * 技能8特效饰品
     */
    DOTA_LOADOUT_TYPE_ABILITY_EFFECTS_8 = 37,
    /**
     * 技能9特效饰品
     */
    DOTA_LOADOUT_TYPE_ABILITY_EFFECTS_9 = 38,
    /**
     * 语音包饰品
     */
    DOTA_LOADOUT_TYPE_VOICE = 39,
    /**
     * 个人视角初始饰品
     */
    DOTA_LOADOUT_PERSONA_1_START = 40,
    /**
     * 个人视角主武器饰品
     */
    DOTA_LOADOUT_TYPE_WEAPON_PERSONA_1 = 40,
    /**
     * 个人视角副武器饰品
     */
    DOTA_LOADOUT_TYPE_OFFHAND_WEAPON_PERSONA_1 = 41,
    /**
     * 个人视角主武器饰品2
     */
    DOTA_LOADOUT_TYPE_WEAPON2_PERSONA_1 = 42,
    /**
     * 个人视角副武器饰品2
     */
    DOTA_LOADOUT_TYPE_OFFHAND_WEAPON2_PERSONA_1 = 43,
    /**
     * 个人视角头部饰品
     */
    DOTA_LOADOUT_TYPE_HEAD_PERSONA_1 = 44,
    /**
     * 个人视角肩部饰品
     */
    DOTA_LOADOUT_TYPE_SHOULDER_PERSONA_1 = 45,
    /**
     * 个人视角手臂饰品
     */
    DOTA_LOADOUT_TYPE_ARMS_PERSONA_1 = 46,
    /**
     * 个人视角护甲饰品
     */
    DOTA_LOADOUT_TYPE_ARMOR_PERSONA_1 = 47,
    /**
     * 个人视角腰带饰品
     */
    DOTA_LOADOUT_TYPE_BELT_PERSONA_1 = 48,
    /**
     * 个人视角颈部饰品
     */
    DOTA_LOADOUT_TYPE_NECK_PERSONA_1 = 49,
    /**
     * 个人视角背部饰品
     */
    DOTA_LOADOUT_TYPE_BACK_PERSONA_1 = 50,
    /**
     * 个人视角腿部饰品
     */
    DOTA_LOADOUT_TYPE_LEGS_PERSONA_1 = 51,
    /**
     * 个人视角手套饰品
     */
    DOTA_LOADOUT_TYPE_GLOVES_PERSONA_1 = 52,
    /**
     * 个人视角尾部饰品
     */
    DOTA_LOADOUT_TYPE_TAIL_PERSONA_1 = 53,
    /**
     * 个人视角杂项饰品
     */
    DOTA_LOADOUT_TYPE_MISC_PERSONA_1 = 54,
    /**
     * 个人视角头身饰品
     */
    DOTA_LOADOUT_TYPE_BODY_HEAD_PERSONA_1 = 55,
    /**
     * 个人视角坐骑饰品
     */
    DOTA_LOADOUT_TYPE_MOUNT_PERSONA_1 = 56,
    /**
     * 个人视角召唤单位饰品
     */
    DOTA_LOADOUT_TYPE_SUMMON_PERSONA_1 = 57,
    /**
     * 个人视角变身形态饰品
     */
    DOTA_LOADOUT_TYPE_SHAPESHIFT_PERSONA_1 = 58,
    /**
     * 个人视角嘲讽动作饰品
     */
    DOTA_LOADOUT_TYPE_TAUNT_PERSONA_1 = 59,
    /**
     * 个人视角英雄雕像饰品
     */
    DOTA_LOADOUT_TYPE_HERO_EFFIGY_PERSONA_1 = 60,
    /**
     * 个人视角环境特效饰品
     */
    DOTA_LOADOUT_TYPE_AMBIENT_EFFECTS_PERSONA_1 = 61,
    /**
     * 个人视角普攻特效饰品
     */
    DOTA_LOADOUT_TYPE_ABILITY_ATTACK_PERSONA_1 = 62,
    /**
     * 个人视角1技能饰品
     */
    DOTA_LOADOUT_TYPE_ABILITY1_PERSONA_1 = 63,
    /**
     * 个人视角2技能饰品
     */
    DOTA_LOADOUT_TYPE_ABILITY2_PERSONA_1 = 64,
    /**
     * 个人视角3技能饰品
     */
    DOTA_LOADOUT_TYPE_ABILITY3_PERSONA_1 = 65,
    /**
     * 个人视角4技能饰品
     */
    DOTA_LOADOUT_TYPE_ABILITY4_PERSONA_1 = 66,
    /**
     * 个人视角终极技能饰品
     */
    DOTA_LOADOUT_TYPE_ABILITY_ULTIMATE_PERSONA_1 = 67,
    /**
     * 个人视角最终饰品
     */
    DOTA_LOADOUT_PERSONA_1_END = 68,
    /**
     * 个人视角语音包饰品
     */
    DOTA_LOADOUT_TYPE_VOICE_PERSONA_1 = 68,
    /**
     * 人设选择器装饰
     */
    DOTA_LOADOUT_TYPE_PERSONA_SELECTOR = 69,
    /**
     * 信使饰品
     */
    DOTA_LOADOUT_TYPE_COURIER = 70,
    /**
     * 玩家装饰项初始饰品
     */
    DOTA_PLAYER_LOADOUT_START = 70,
    /**
     * 解说语音饰品
     */
    DOTA_LOADOUT_TYPE_ANNOUNCER = 71,
    /**
     * 连杀语音饰品
     */
    DOTA_LOADOUT_TYPE_MEGA_KILLS = 72,
    /**
     * 音乐包饰品
     */
    DOTA_LOADOUT_TYPE_MUSIC = 73,
    /**
     * 守卫饰品
     */
    DOTA_LOADOUT_TYPE_WARD = 74,
    /**
     * 界面外观饰品
     */
    DOTA_LOADOUT_TYPE_HUD_SKIN = 75,
    /**
     * 加载画面饰品
     */
    DOTA_LOADOUT_TYPE_LOADING_SCREEN = 76,
    /**
     * 地图天气饰品
     */
    DOTA_LOADOUT_TYPE_WEATHER = 77,
    /**
     * 英雄雕像饰品
     */
    DOTA_LOADOUT_TYPE_HEROIC_STATUE = 78,
    /**
     * 连杀饰品
     */
    DOTA_LOADOUT_TYPE_MULTIKILL_BANNER = 79,
    /**
     * 鼠标样式饰品
     */
    DOTA_LOADOUT_TYPE_CURSOR_PACK = 80,
    /**
     * 传送特效饰品
     */
    DOTA_LOADOUT_TYPE_TELEPORT_EFFECT = 81,
    /**
     * 闪烁特效饰品
     */
    DOTA_LOADOUT_TYPE_BLINK_EFFECT = 82,
    /**
     * 玩家纹章饰品
     */
    DOTA_LOADOUT_TYPE_EMBLEM = 83,
    /**
     * 地图地形饰品
     */
    DOTA_LOADOUT_TYPE_TERRAIN = 84,
    /**
     * 天辉小兵饰品
     */
    DOTA_LOADOUT_TYPE_RADIANT_CREEPS = 85,
    /**
     * 夜魇小兵饰品
     */
    DOTA_LOADOUT_TYPE_DIRE_CREEPS = 86,
    /**
     * 天辉防御塔饰品
     */
    DOTA_LOADOUT_TYPE_RADIANT_TOWER = 87,
    /**
     * 夜魇防御塔饰品
     */
    DOTA_LOADOUT_TYPE_DIRE_TOWER = 88,
    /**
     * 对阵画面饰品
     */
    DOTA_LOADOUT_TYPE_VERSUS_SCREEN = 89,
    /**
     * 连杀特效饰品
     */
    DOTA_LOADOUT_TYPE_STREAK_EFFECT = 90,
    /**
     * 击杀特效饰品
     */
    DOTA_LOADOUT_TYPE_KILL_EFFECT = 91,
    /**
     * 死亡特效饰品
     */
    DOTA_LOADOUT_TYPE_DEATH_EFFECT = 92,
    /**
     * 头部特效饰品
     */
    DOTA_LOADOUT_TYPE_HEAD_EFFECT = 93,
    /**
     * 地图视觉特效饰品
     */
    DOTA_LOADOUT_TYPE_MAP_EFFECT = 94,
    /**
     * 信使粒子特效饰品
     */
    DOTA_LOADOUT_TYPE_COURIER_EFFECT = 95,
    /**
     * 天辉攻城单位饰品
     */
    DOTA_LOADOUT_TYPE_RADIANT_SIEGE_CREEPS = 96,
    /**
     * 夜魇攻城单位饰品
     */
    DOTA_LOADOUT_TYPE_DIRE_SIEGE_CREEPS = 97,
    /**
     * 肉山饰品
     */
    DOTA_LOADOUT_TYPE_ROSHAN = 98,
    /**
     * 痛苦魔方饰品
     */
    DOTA_LOADOUT_TYPE_TORMENTOR = 99,
    /**
     * 遗迹饰品
     */
    DOTA_LOADOUT_TYPE_ANCIENT = 100,
    /**
     * 宠物雕像饰品
     */
    DOTA_LOADOUT_TYPE_PET_EFFIGY = 101,
    /**
     * 玩家最终装饰项饰品
     */
    DOTA_PLAYER_LOADOUT_END = 101,
    /**
     * 空白占位
     */
    DOTA_LOADOUT_TYPE_NONE = 102,
    /**
     * 计数占位
     */
    DOTA_LOADOUT_TYPE_COUNT = 103,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type SpeechType = DOTASpeechType_t;

/**
 * @compileMembersOnly
 */
declare enum DOTASpeechType_t {
    /**
     * 无效占位
     */ DOTA_SPEECH_USER_INVALID = 0,
    /**
     * 仅对单一玩家
     */
    DOTA_SPEECH_USER_SINGLE = 1,
    /**
     * 对当前阵营玩家
     */
    DOTA_SPEECH_USER_TEAM = 2,
    /**
     * 对当前阵营附近玩家
     */
    DOTA_SPEECH_USER_TEAM_NEARBY = 3,
    /**
     * 对所有阵营附近玩家
     */
    DOTA_SPEECH_USER_NEARBY = 4,
    /**
     * 对所有玩家
     */
    DOTA_SPEECH_USER_ALL = 5,
    /**
     * 对天辉玩家
     */
    DOTA_SPEECH_GOOD_TEAM = 6,
    /**
     * 对夜魇玩家
     */
    DOTA_SPEECH_BAD_TEAM = 7,
    /**
     * 对观战者
     */
    DOTA_SPEECH_SPECTATOR = 8,
    /**
     * 对除观战者之外的玩家
     */
    DOTA_SPEECH_USER_TEAM_NOSPECTATOR = 9,
    /**
     * 上限占位
     */
    DOTA_SPEECH_RECIPIENT_TYPE_MAX = 10,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type DotaTeam = DOTATeam_t;

/**
 * @compileMembersOnly
 */
declare enum DOTATeam_t {
    /**
     * 初始占位
     */ DOTA_TEAM_FIRST = 2,
    /**
     * 天辉
     */
    DOTA_TEAM_GOODGUYS = 2,
    /**
     * 夜魇
     */
    DOTA_TEAM_BADGUYS = 3,
    /**
     * 中立
     */
    DOTA_TEAM_NEUTRALS = 4,
    /**
     * 特殊中立
     */
    DOTA_TEAM_NOTEAM = 5,
    /**
     * 自定义阵营1
     */
    DOTA_TEAM_CUSTOM_1 = 6,
    /**
     * 自定义阵营下限占位
     */
    DOTA_TEAM_CUSTOM_MIN = 6,
    /**
     * 自定义阵营2
     */
    DOTA_TEAM_CUSTOM_2 = 7,
    /**
     * 自定义阵营3
     */
    DOTA_TEAM_CUSTOM_3 = 8,
    /**
     * 自定义阵营计数占位
     */
    DOTA_TEAM_CUSTOM_COUNT = 8,
    /**
     * 自定义阵营4
     */
    DOTA_TEAM_CUSTOM_4 = 9,
    /**
     * 自定义阵营5
     */
    DOTA_TEAM_CUSTOM_5 = 10,
    /**
     * 自定义阵营6
     */
    DOTA_TEAM_CUSTOM_6 = 11,
    /**
     * 自定义阵营7
     */
    DOTA_TEAM_CUSTOM_7 = 12,
    /**
     * 自定义阵营8
     */
    DOTA_TEAM_CUSTOM_8 = 13,
    /**
     * 自定义阵营上限占位
     */
    DOTA_TEAM_CUSTOM_MAX = 13,
    /**
     * 阵营选取池
     */
    DOTA_TEAM_DRAFT_POOL = 14,
    /**
     * 阵营计数占位
     */
    DOTA_TEAM_COUNT = 15,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type UnitAttackCapability = DOTAUnitAttackCapability_t;

/**
 * @compileMembersOnly
 */
declare enum DOTAUnitAttackCapability_t {
    /**
     * 不可攻击
     */ DOTA_UNIT_CAP_NO_ATTACK = 0,
    /**
     * 近战
     */
    DOTA_UNIT_CAP_MELEE_ATTACK = 1,
    /**
     * 远程
     */
    DOTA_UNIT_CAP_RANGED_ATTACK = 2,
    /**
     * 上限占位
     */
    DOTA_UNIT_ATTACK_CAPABILITY_BIT_COUNT = 3,
    /**
     * 远程朝向攻击
     */
    DOTA_UNIT_CAP_RANGED_ATTACK_DIRECTIONAL = 4,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type UnitMoveCapability = DOTAUnitMoveCapability_t;

/**
 * @compileMembersOnly
 */
declare enum DOTAUnitMoveCapability_t {
    /**
     * 不可移动
     */ DOTA_UNIT_CAP_MOVE_NONE = 0,
    /**
     * 地面
     */
    DOTA_UNIT_CAP_MOVE_GROUND = 1,
    /**
     * 飞行
     */
    DOTA_UNIT_CAP_MOVE_FLY = 2,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type UnitOrder = dotaunitorder_t;

/**
 * @compileMembersOnly
 */
declare enum dotaunitorder_t {
    /**
     * 无指令
     */ DOTA_UNIT_ORDER_NONE = 0,
    /**
     * 移动到指定位置
     */
    DOTA_UNIT_ORDER_MOVE_TO_POSITION = 1,
    /**
     * 移动到目标单位
     */
    DOTA_UNIT_ORDER_MOVE_TO_TARGET = 2,
    /**
     * 移动并攻击
     */
    DOTA_UNIT_ORDER_ATTACK_MOVE = 3,
    /**
     * 攻击目标单位
     */
    DOTA_UNIT_ORDER_ATTACK_TARGET = 4,
    /**
     * 对位置施法
     */
    DOTA_UNIT_ORDER_CAST_POSITION = 5,
    /**
     * 对单位施法
     */
    DOTA_UNIT_ORDER_CAST_TARGET = 6,
    /**
     * 对树施法
     */
    DOTA_UNIT_ORDER_CAST_TARGET_TREE = 7,
    /**
     * 无目标施法
     */
    DOTA_UNIT_ORDER_CAST_NO_TARGET = 8,
    /**
     * 开关技能施法
     */
    DOTA_UNIT_ORDER_CAST_TOGGLE = 9,
    /**
     * 固守原位
     */
    DOTA_UNIT_ORDER_HOLD_POSITION = 10,
    /**
     * 学习技能
     */
    DOTA_UNIT_ORDER_TRAIN_ABILITY = 11,
    /**
     * 丢弃物品
     */
    DOTA_UNIT_ORDER_DROP_ITEM = 12,
    /**
     * 将物品给目标单位
     */
    DOTA_UNIT_ORDER_GIVE_ITEM = 13,
    /**
     * 拾取物品
     */
    DOTA_UNIT_ORDER_PICKUP_ITEM = 14,
    /**
     * 拾取神符
     */
    DOTA_UNIT_ORDER_PICKUP_RUNE = 15,
    /**
     * 购买物品
     */
    DOTA_UNIT_ORDER_PURCHASE_ITEM = 16,
    /**
     * 出售物品
     */
    DOTA_UNIT_ORDER_SELL_ITEM = 17,
    /**
     * 拆解物品
     */
    DOTA_UNIT_ORDER_DISASSEMBLE_ITEM = 18,
    /**
     * 移动物品
     */
    DOTA_UNIT_ORDER_MOVE_ITEM = 19,
    /**
     * 进行自动施法
     */
    DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO = 20,
    /**
     * 停止当前动作
     */
    DOTA_UNIT_ORDER_STOP = 21,
    /**
     * 嘲讽
     */
    DOTA_UNIT_ORDER_TAUNT = 22,
    /**
     * 买活
     */
    DOTA_UNIT_ORDER_BUYBACK = 23,
    /**
     * 使用防御神符
     */
    DOTA_UNIT_ORDER_GLYPH = 24,
    /**
     * 从储藏处卸下物品
     */
    DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH = 25,
    /**
     * 对神符施法
     */
    DOTA_UNIT_ORDER_CAST_RUNE = 26,
    /**
     * 小地图进行警示
     */
    DOTA_UNIT_ORDER_PING_ABILITY = 27,
    /**
     * 向方向移动
     */
    DOTA_UNIT_ORDER_MOVE_TO_DIRECTION = 28,
    /**
     * 巡逻
     */
    DOTA_UNIT_ORDER_PATROL = 29,
    /**
     * 矢量施法
     */
    DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION = 30,
    /**
     * 使用扫描
     */
    DOTA_UNIT_ORDER_RADAR = 31,
    /**
     * 锁定合成
     */
    DOTA_UNIT_ORDER_SET_ITEM_COMBINE_LOCK = 32,
    /**
     * 继续执行
     */
    DOTA_UNIT_ORDER_CONTINUE = 33,
    /**
     * 取消矢量施法
     */
    DOTA_UNIT_ORDER_VECTOR_TARGET_CANCELED = 34,
    /**
     * 河道涂色技能
     */
    DOTA_UNIT_ORDER_CAST_RIVER_PAINT = 35,
    /**
     * 选人阶段调整物品分配
     */
    DOTA_UNIT_ORDER_PREGAME_ADJUST_ITEM_ASSIGNMENT = 36,
    /**
     * 将物品丢在泉水
     */
    DOTA_UNIT_ORDER_DROP_ITEM_AT_FOUNTAIN = 37,
    /**
     * 取出中立物品
     */
    DOTA_UNIT_ORDER_TAKE_ITEM_FROM_NEUTRAL_ITEM_STASH = 38,
    /**
     * 相向移动
     */
    DOTA_UNIT_ORDER_MOVE_RELATIVE = 39,
    /**
     * 多样施法
     */
    DOTA_UNIT_ORDER_CAST_TOGGLE_ALT = 40,
    /**
     * 使用消耗品
     */
    DOTA_UNIT_ORDER_CONSUME_ITEM = 41,
    /**
     * 标记待出售物品
     */
    DOTA_UNIT_ORDER_SET_ITEM_MARK_FOR_SELL = 42,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type ModifyGoldReason = EDOTA_ModifyGold_Reason;

/**
 * @compileMembersOnly
 */
declare enum EDOTA_ModifyGold_Reason {
    /**
     * 未指定原因影响金钱
     */ DOTA_ModifyGold_Unspecified = 0,
    /**
     * 因死亡而损失的金钱
     */
    DOTA_ModifyGold_Death = 1,
    /**
     * 用于买活的金钱
     */
    DOTA_ModifyGold_Buyback = 2,
    /**
     * 购买消耗品消耗金钱
     */
    DOTA_ModifyGold_PurchaseConsumable = 3,
    /**
     * 购买普通物品消耗金钱
     */
    DOTA_ModifyGold_PurchaseItem = 4,
    /**
     * 因队友逃跑而分配的金钱
     */
    DOTA_ModifyGold_AbandonedRedistribute = 5,
    /**
     * 出售物品获得的金钱
     */
    DOTA_ModifyGold_SellItem = 6,
    /**
     * 使用技能所消耗的金钱
     */
    DOTA_ModifyGold_AbilityCost = 7,
    /**
     * 使用作弊命令修改的金钱
     */
    DOTA_ModifyGold_CheatCommand = 8,
    /**
     * 选择英雄超时的金钱惩罚
     */
    DOTA_ModifyGold_SelectionPenalty = 9,
    /**
     * 每秒自然获得的金钱
     */
    DOTA_ModifyGold_GameTick = 10,
    /**
     * 推塔获得的金钱
     */
    DOTA_ModifyGold_Building = 11,
    /**
     * 击杀敌方英雄获得的金钱
     */
    DOTA_ModifyGold_HeroKill = 12,
    /**
     * 击杀兵线小兵获得的金钱
     */
    DOTA_ModifyGold_CreepKill = 13,
    /**
     * 击杀野怪获得的金钱
     */
    DOTA_ModifyGold_NeutralKill = 14,
    /**
     * 击杀肉山获得的金钱
     */
    DOTA_ModifyGold_RoshanKill = 15,
    /**
     * 击杀信使获得的金钱
     */
    DOTA_ModifyGold_CourierKill = 16,
    /**
     * 拾取赏金神符获得的金钱
     */
    DOTA_ModifyGold_BountyRune = 17,
    /**
     * 队伍共享金钱
     */
    DOTA_ModifyGold_SharedGold = 18,
    /**
     * 由技能产生的金钱
     */
    DOTA_ModifyGold_AbilityGold = 19,
    /**
     * 摧毁敌方视野守卫获得的金钱
     */
    DOTA_ModifyGold_WardKill = 20,
    /**
     * 玩家亲自击杀信使获得的额外金钱
     */
    DOTA_ModifyGold_CourierKilledByThisPlayer = 21,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type ModifyXpReason = EDOTA_ModifyXP_Reason;

/**
 * @compileMembersOnly
 */
declare enum EDOTA_ModifyXP_Reason {
    /**
     * 未指定原因影响经验
     */ DOTA_ModifyXP_Unspecified = 0,
    /**
     * 击杀敌方英雄获得的经验
     */
    DOTA_ModifyXP_HeroKill = 1,
    /**
     * 击杀小兵获得的经验
     */
    DOTA_ModifyXP_CreepKill = 2,
    /**
     * 击杀肉山获得的经验
     */
    DOTA_ModifyXP_RoshanKill = 3,
    /**
     * 使用知识之书获得的经验
     */
    DOTA_ModifyXP_TomeOfKnowledge = 4,
    /**
     * 控制前哨获得的经验
     */
    DOTA_ModifyXP_Outpost = 5,
    /**
     * 落后补偿机制提供的额外经验
     */
    DOTA_ModifyXP_CatchUp = 6,
    /**
     * 通过英雄技能获得的经验
     */
    DOTA_ModifyXP_HeroAbility = 7,
    /**
     * 上限占位
     */
    DOTA_ModifyXP_MAX = 8,
}

/**
 * @compileMembersOnly
 */
declare enum EntityEffects {
    /**
     * 不渲染实体特效
     */ EF_NODRAW = 32,
}

/**
 * @compileMembersOnly
 */
declare enum EntityThinkPhase {
    /**
     * 模拟前阶段
     */ PRESIM = 0,
    /**
     * 传调前阶段
     */
    PRESENSING = 1,
    /**
     * 传调后阶段
     */
    POSTSENSING = 2,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type ItemShareability = EShareAbility;

/**
 * @compileMembersOnly
 */
declare enum EShareAbility {
    /**
     * 可完全共享
     */ ITEM_FULLY_SHAREABLE = 0,
    /**
     * 可部分共享
     */
    ITEM_PARTIALLY_SHAREABLE = 1,
    /**
     * 不可共享
     */
    ITEM_NOT_SHAREABLE = 2,
}

/**
 * @compileMembersOnly
 */
declare enum FindOrder {
    /**
     * 任意顺序
     */ FIND_ANY_ORDER = 0,
    /**
     * 优先最近
     */
    FIND_CLOSEST = 1,
    /**
     * 优先最远
     */
    FIND_FARTHEST = 2,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type GameActivity = GameActivity_t;

/**
 * @compileMembersOnly
 */
declare enum GameActivity_t {
    /**
     * 重置动画状态
     */ ACT_RESET = 0,
    /**
     * 原地待机
     */
    ACT_IDLE = 1,
    /**
     * 动作过渡
     */
    ACT_TRANSITION = 2,
    /**
     * 躲避
     */
    ACT_COVER = 3,
    /**
     * 中度掩体
     */
    ACT_COVER_MED = 4,
    /**
     * 低掩体
     */
    ACT_COVER_LOW = 5,
    /**
     * 行走
     */
    ACT_WALK = 6,
    /**
     * 行走瞄准
     */
    ACT_WALK_AIM = 7,
    /**
     * 蹲行
     */
    ACT_WALK_CROUCH = 8,
    /**
     * 蹲行瞄准
     */
    ACT_WALK_CROUCH_AIM = 9,
    /**
     * 奔跑
     */
    ACT_RUN = 10,
    /**
     * 奔跑瞄准
     */
    ACT_RUN_AIM = 11,
    /**
     * 蹲跑
     */
    ACT_RUN_CROUCH = 12,
    /**
     * 蹲跑瞄准
     */
    ACT_RUN_CROUCH_AIM = 13,
    /**
     * 受保护奔跑
     */
    ACT_RUN_PROTECTED = 14,
    /**
     * 自定义脚本移动
     */
    ACT_SCRIPT_CUSTOM_MOVE = 15,
    /**
     * 远程攻击1
     */
    ACT_RANGE_ATTACK1 = 16,
    /**
     * 远程攻击2
     */
    ACT_RANGE_ATTACK2 = 17,
    /**
     * 低姿远程攻击1
     */
    ACT_RANGE_ATTACK1_LOW = 18,
    /**
     * 低姿远程攻击2
     */
    ACT_RANGE_ATTACK2_LOW = 19,
    /**
     * 简单死亡
     */
    ACT_DIESIMPLE = 20,
    /**
     * 向后倒地死亡
     */
    ACT_DIEBACKWARD = 21,
    /**
     * 向前倒地死亡
     */
    ACT_DIEFORWARD = 22,
    /**
     * 剧烈死亡
     */
    ACT_DIEVIOLENT = 23,
    /**
     * 布娃娃死亡效果
     */
    ACT_DIERAGDOLL = 24,
    /**
     * 飞行
     */
    ACT_FLY = 25,
    /**
     * 悬浮
     */
    ACT_HOVER = 26,
    /**
     * 滑翔
     */
    ACT_GLIDE = 27,
    /**
     * 游泳
     */
    ACT_SWIM = 28,
    /**
     * 跳跃
     */
    ACT_JUMP = 29,
    /**
     * 小跳
     */
    ACT_HOP = 30,
    /**
     * 跃起
     */
    ACT_LEAP = 31,
    /**
     * 落地
     */
    ACT_LAND = 32,
    /**
     * 攀爬向上
     */
    ACT_CLIMB_UP = 33,
    /**
     * 攀爬向下
     */
    ACT_CLIMB_DOWN = 34,
    /**
     * 结束攀爬
     */
    ACT_CLIMB_DISMOUNT = 35,
    /**
     * 爬船梯上
     */
    ACT_SHIPLADDER_UP = 36,
    /**
     * 爬船梯下
     */
    ACT_SHIPLADDER_DOWN = 37,
    /**
     * 向左横移
     */
    ACT_STRAFE_LEFT = 38,
    /**
     * 向右横移
     */
    ACT_STRAFE_RIGHT = 39,
    /**
     * 左翻滚
     */
    ACT_ROLL_LEFT = 40,
    /**
     * 右翻滚
     */
    ACT_ROLL_RIGHT = 41,
    /**
     * 向左转身
     */
    ACT_TURN_LEFT = 42,
    /**
     * 向右转身
     */
    ACT_TURN_RIGHT = 43,
    /**
     * 蹲下
     */
    ACT_CROUCH = 44,
    /**
     * 蹲着待机
     */
    ACT_CROUCHIDLE = 45,
    /**
     * 站起
     */
    ACT_STAND = 46,
    /**
     * 使用道具
     */
    ACT_USE = 47,
    /**
     * 异形地底待机
     */
    ACT_ALIEN_BURROW_IDLE = 48,
    /**
     * 异形钻出
     */
    ACT_ALIEN_BURROW_OUT = 49,
    /**
     * 信号动作1
     */
    ACT_SIGNAL1 = 50,
    /**
     * 信号动作2
     */
    ACT_SIGNAL2 = 51,
    /**
     * 信号动作3
     */
    ACT_SIGNAL3 = 52,
    /**
     * 前进手势
     */
    ACT_SIGNAL_ADVANCE = 53,
    /**
     * 向前手势
     */
    ACT_SIGNAL_FORWARD = 54,
    /**
     * 集结信号
     */
    ACT_SIGNAL_GROUP = 55,
    /**
     * 停止信号
     */
    ACT_SIGNAL_HALT = 56,
    /**
     * 左转信号
     */
    ACT_SIGNAL_LEFT = 57,
    /**
     * 右转信号
     */
    ACT_SIGNAL_RIGHT = 58,
    /**
     * 躲避信号
     */
    ACT_SIGNAL_TAKECOVER = 59,
    /**
     * 向右回头
     */
    ACT_LOOKBACK_RIGHT = 60,
    /**
     * 向左回头
     */
    ACT_LOOKBACK_LEFT = 61,
    /**
     * 畏缩
     */
    ACT_COWER = 62,
    /**
     * 小幅受击反应
     */
    ACT_SMALL_FLINCH = 63,
    /**
     * 大幅受击反应
     */
    ACT_BIG_FLINCH = 64,
    /**
     * 近战攻击1
     */
    ACT_MELEE_ATTACK1 = 65,
    /**
     * 近战攻击2
     */
    ACT_MELEE_ATTACK2 = 66,
    /**
     * 装弹
     */
    ACT_RELOAD = 67,
    /**
     * 开始装弹
     */
    ACT_RELOAD_START = 68,
    /**
     * 完成装弹
     */
    ACT_RELOAD_FINISH = 69,
    /**
     * 低姿态装弹
     */
    ACT_RELOAD_LOW = 70,
    /**
     * 武装
     */
    ACT_ARM = 71,
    /**
     * 卸除武器
     */
    ACT_DISARM = 72,
    /**
     * 丢弃武器
     */
    ACT_DROP_WEAPON = 73,
    /**
     * 丢弃霰弹枪
     */
    ACT_DROP_WEAPON_SHOTGUN = 74,
    /**
     * 捡地面物品
     */
    ACT_PICKUP_GROUND = 75,
    /**
     * 从架子上拿
     */
    ACT_PICKUP_RACK = 76,
    /**
     * 愤怒待机
     */
    ACT_IDLE_ANGRY = 77,
    /**
     * 放松待机
     */
    ACT_IDLE_RELAXED = 78,
    /**
     * 紧张待机
     */
    ACT_IDLE_STIMULATED = 79,
    /**
     * 焦躁待机
     */
    ACT_IDLE_AGITATED = 80,
    /**
     * 潜行待机
     */
    ACT_IDLE_STEALTH = 81,
    /**
     * 受伤待机
     */
    ACT_IDLE_HURT = 82,
    /**
     * 放松行走
     */
    ACT_WALK_RELAXED = 83,
    /**
     * 紧张行走
     */
    ACT_WALK_STIMULATED = 84,
    /**
     * 焦躁行走
     */
    ACT_WALK_AGITATED = 85,
    /**
     * 潜行行走
     */
    ACT_WALK_STEALTH = 86,
    /**
     * 放松奔跑
     */
    ACT_RUN_RELAXED = 87,
    /**
     * 紧张奔跑
     */
    ACT_RUN_STIMULATED = 88,
    /**
     * 焦躁奔跑
     */
    ACT_RUN_AGITATED = 89,
    /**
     * 潜行奔跑
     */
    ACT_RUN_STEALTH = 90,
    /**
     * 放松瞄准待机
     */
    ACT_IDLE_AIM_RELAXED = 91,
    /**
     * 紧张瞄准待机
     */
    ACT_IDLE_AIM_STIMULATED = 92,
    /**
     * 焦躁瞄准待机
     */
    ACT_IDLE_AIM_AGITATED = 93,
    /**
     * 潜行瞄准待机
     */
    ACT_IDLE_AIM_STEALTH = 94,
    /**
     * 放松走路瞄准
     */
    ACT_WALK_AIM_RELAXED = 95,
    /**
     * 紧张走路瞄准
     */
    ACT_WALK_AIM_STIMULATED = 96,
    /**
     * 焦躁走路瞄准
     */
    ACT_WALK_AIM_AGITATED = 97,
    /**
     * 潜行走路瞄准
     */
    ACT_WALK_AIM_STEALTH = 98,
    /**
     * 放松跑步瞄准
     */
    ACT_RUN_AIM_RELAXED = 99,
    /**
     * 紧张跑步瞄准
     */
    ACT_RUN_AIM_STIMULATED = 100,
    /**
     * 焦躁跑步瞄准
     */
    ACT_RUN_AIM_AGITATED = 101,
    /**
     * 潜行跑步瞄准
     */
    ACT_RUN_AIM_STEALTH = 102,
    /**
     * 紧张蹲待机
     */
    ACT_CROUCHIDLE_STIMULATED = 103,
    /**
     * 紧张蹲瞄准待机
     */
    ACT_CROUCHIDLE_AIM_STIMULATED = 104,
    /**
     * 焦躁蹲待机
     */
    ACT_CROUCHIDLE_AGITATED = 105,
    /**
     * 受伤走路
     */
    ACT_WALK_HURT = 106,
    /**
     * 受伤奔跑
     */
    ACT_RUN_HURT = 107,
    /**
     * 特殊攻击1
     */
    ACT_SPECIAL_ATTACK1 = 108,
    /**
     * 特殊攻击2
     */
    ACT_SPECIAL_ATTACK2 = 109,
    /**
     * 战斗待机
     */
    ACT_COMBAT_IDLE = 110,
    /**
     * 惊恐走路
     */
    ACT_WALK_SCARED = 111,
    /**
     * 惊恐奔跑
     */
    ACT_RUN_SCARED = 112,
    /**
     * 胜利舞蹈
     */
    ACT_VICTORY_DANCE = 113,
    /**
     * 爆头死亡
     */
    ACT_DIE_HEADSHOT = 114,
    /**
     * 胸部中弹死亡
     */
    ACT_DIE_CHESTSHOT = 115,
    /**
     * 腹部中弹死亡
     */
    ACT_DIE_GUTSHOT = 116,
    /**
     * 背后中弹死亡
     */
    ACT_DIE_BACKSHOT = 117,
    /**
     * 头部受击反应
     */
    ACT_FLINCH_HEAD = 118,
    /**
     * 胸部受击反应
     */
    ACT_FLINCH_CHEST = 119,
    /**
     * 腹部受击反应
     */
    ACT_FLINCH_STOMACH = 120,
    /**
     * 左臂受击反应
     */
    ACT_FLINCH_LEFTARM = 121,
    /**
     * 右臂受击反应
     */
    ACT_FLINCH_RIGHTARM = 122,
    /**
     * 左腿受击反应
     */
    ACT_FLINCH_LEFTLEG = 123,
    /**
     * 右腿受击反应
     */
    ACT_FLINCH_RIGHTLEG = 124,
    /**
     * 物理受击反应
     */
    ACT_FLINCH_PHYSICS = 125,
    /**
     * 后脑受击反应
     */
    ACT_FLINCH_HEAD_BACK = 126,
    /**
     * 背部胸击反应
     */
    ACT_FLINCH_CHEST_BACK = 127,
    /**
     * 背部腹击反应
     */
    ACT_FLINCH_STOMACH_BACK = 128,
    /**
     * 蹲前受击
     */
    ACT_FLINCH_CROUCH_FRONT = 129,
    /**
     * 蹲后受击
     */
    ACT_FLINCH_CROUCH_BACK = 130,
    /**
     * 蹲左受击
     */
    ACT_FLINCH_CROUCH_LEFT = 131,
    /**
     * 蹲右受击
     */
    ACT_FLINCH_CROUCH_RIGHT = 132,
    /**
     * 着火待机
     */
    ACT_IDLE_ON_FIRE = 133,
    /**
     * 着火走路
     */
    ACT_WALK_ON_FIRE = 134,
    /**
     * 着火奔跑
     */
    ACT_RUN_ON_FIRE = 135,
    /**
     * 向左转身180度
     */
    ACT_180_LEFT = 137,
    /**
     * 向右转身180度
     */
    ACT_180_RIGHT = 138,
    /**
     * 向左转身90度
     */
    ACT_90_LEFT = 139,
    /**
     * 向右转身90度
     */
    ACT_90_RIGHT = 140,
    /**
     * 向左迈步
     */
    ACT_STEP_LEFT = 141,
    /**
     * 向右迈步
     */
    ACT_STEP_RIGHT = 142,
    /**
     * 向后迈步
     */
    ACT_STEP_BACK = 143,
    /**
     * 向前迈步
     */
    ACT_STEP_FORE = 144,
    /**
     * 动作远程攻击1
     */
    ACT_GESTURE_RANGE_ATTACK1 = 145,
    /**
     * 动作远程攻击2
     */
    ACT_GESTURE_RANGE_ATTACK2 = 146,
    /**
     * 动作近战攻击1
     */
    ACT_GESTURE_MELEE_ATTACK1 = 147,
    /**
     * 动作近战攻击2
     */
    ACT_GESTURE_MELEE_ATTACK2 = 148,
    /**
     * 动作低姿远攻1
     */
    ACT_GESTURE_RANGE_ATTACK1_LOW = 149,
    /**
     * 动作低姿远攻2
     */
    ACT_GESTURE_RANGE_ATTACK2_LOW = 150,
    /**
     * 挥击近战攻击动作
     */
    ACT_MELEE_ATTACK_SWING_GESTURE = 151,
    /**
     * 小幅受击动作
     */
    ACT_GESTURE_SMALL_FLINCH = 152,
    /**
     * 大幅受击动作
     */
    ACT_GESTURE_BIG_FLINCH = 153,
    /**
     * 爆炸受击动作
     */
    ACT_GESTURE_FLINCH_BLAST = 154,
    /**
     * 霰弹爆炸受击动作
     */
    ACT_GESTURE_FLINCH_BLAST_SHOTGUN = 155,
    /**
     * 被爆炸重伤反应
     */
    ACT_GESTURE_FLINCH_BLAST_DAMAGED = 156,
    /**
     * 被霰弹爆炸重伤反应
     */
    ACT_GESTURE_FLINCH_BLAST_DAMAGED_SHOTGUN = 157,
    /**
     * 头部受击动作
     */
    ACT_GESTURE_FLINCH_HEAD = 158,
    /**
     * 胸部受击动作
     */
    ACT_GESTURE_FLINCH_CHEST = 159,
    /**
     * 腹部受击动作
     */
    ACT_GESTURE_FLINCH_STOMACH = 160,
    /**
     * 左臂受击动作
     */
    ACT_GESTURE_FLINCH_LEFTARM = 161,
    /**
     * 右臂受击动作
     */
    ACT_GESTURE_FLINCH_RIGHTARM = 162,
    /**
     * 左腿受击动作
     */
    ACT_GESTURE_FLINCH_LEFTLEG = 163,
    /**
     * 右腿受击动作
     */
    ACT_GESTURE_FLINCH_RIGHTLEG = 164,
    /**
     * 向左转身动作
     */
    ACT_GESTURE_TURN_LEFT = 165,
    /**
     * 向右转身动作
     */
    ACT_GESTURE_TURN_RIGHT = 166,
    /**
     * 向左转45度动作
     */
    ACT_GESTURE_TURN_LEFT45 = 167,
    /**
     * 向右转45度动作
     */
    ACT_GESTURE_TURN_RIGHT45 = 168,
    /**
     * 向左转90度动作
     */
    ACT_GESTURE_TURN_LEFT90 = 169,
    /**
     * 向右转90度动作
     */
    ACT_GESTURE_TURN_RIGHT90 = 170,
    /**
     * 平面向左转45度动作
     */
    ACT_GESTURE_TURN_LEFT45_FLAT = 171,
    /**
     * 平面向右转45度动作
     */
    ACT_GESTURE_TURN_RIGHT45_FLAT = 172,
    /**
     * 平面向左转90度动作
     */
    ACT_GESTURE_TURN_LEFT90_FLAT = 173,
    /**
     * 平面向右转90度动作
     */
    ACT_GESTURE_TURN_RIGHT90_FLAT = 174,
    /**
     * 吊舌怪击打动作
     */
    ACT_BARNACLE_HIT = 175,
    /**
     * 吊舌怪拉拽动作
     */
    ACT_BARNACLE_PULL = 176,
    /**
     * 吊舌怪咬合动作
     */
    ACT_BARNACLE_CHOMP = 177,
    /**
     * 吊舌怪咀嚼动作
     */
    ACT_BARNACLE_CHEW = 178,
    /**
     * 请勿打扰动作
     */
    ACT_DO_NOT_DISTURB = 179,
    /**
     * 特殊序列动作
     */
    ACT_SPECIFIC_SEQUENCE = 180,
    /**
     * 武器模型拔出动作
     */
    ACT_VM_DEPLOY = 181,
    /**
     * 空弹装填动作
     */
    ACT_VM_RELOAD_EMPTY = 182,
    /**
     * 武器拔出动作
     */
    ACT_VM_DRAW = 183,
    /**
     * 武器收起动作
     */
    ACT_VM_HOLSTER = 184,
    /**
     * 武器待机动作
     */
    ACT_VM_IDLE = 185,
    /**
     * 武器小动作
     */
    ACT_VM_FIDGET = 186,
    /**
     * 武器后拉动作
     */
    ACT_VM_PULLBACK = 187,
    /**
     * 武器高后拉动作
     */
    ACT_VM_PULLBACK_HIGH = 188,
    /**
     * 武器低后拉动作
     */
    ACT_VM_PULLBACK_LOW = 189,
    /**
     * 武器投掷动作
     */
    ACT_VM_THROW = 190,
    /**
     * 武器丢弃动作
     */
    ACT_VM_DROP = 191,
    /**
     * 拔掉手雷插销动作
     */
    ACT_VM_PULLPIN = 192,
    /**
     * 武器主攻击动作
     */
    ACT_VM_PRIMARYATTACK = 193,
    /**
     * 武器副攻击动作
     */
    ACT_VM_SECONDARYATTACK = 194,
    /**
     * 装弹动作
     */
    ACT_VM_RELOAD = 195,
    /**
     * 空枪射击动作
     */
    ACT_VM_DRYFIRE = 196,
    /**
     * 武器左侧击打动作
     */
    ACT_VM_HITLEFT = 197,
    /**
     * 武器左侧击打动作2
     */
    ACT_VM_HITLEFT2 = 198,
    /**
     * 武器右侧击打动作
     */
    ACT_VM_HITRIGHT = 199,
    /**
     * 武器右侧击打动作2
     */
    ACT_VM_HITRIGHT2 = 200,
    /**
     * 武器中心击打动作
     */
    ACT_VM_HITCENTER = 201,
    /**
     * 武器中心击打动作2
     */
    ACT_VM_HITCENTER2 = 202,
    /**
     * 武器左侧未击中动作
     */
    ACT_VM_MISSLEFT = 203,
    /**
     * 武器左侧未击中动作2
     */
    ACT_VM_MISSLEFT2 = 204,
    /**
     * 武器右侧未击中动作
     */
    ACT_VM_MISSRIGHT = 205,
    /**
     * 武器右侧未击中动作2
     */
    ACT_VM_MISSRIGHT2 = 206,
    /**
     * 武器中心未击中动作
     */
    ACT_VM_MISSCENTER = 207,
    /**
     * 武器中心未击中动作2
     */
    ACT_VM_MISSCENTER2 = 208,
    /**
     * 武器后拉准备动作
     */
    ACT_VM_HAULBACK = 209,
    /**
     * 武器用力挥动动作
     */
    ACT_VM_SWINGHARD = 210,
    /**
     * 武器挥击未击中动作
     */
    ACT_VM_SWINGMISS = 211,
    /**
     * 武器挥击击中动作
     */
    ACT_VM_SWINGHIT = 212,
    /**
     * 武器待机转低姿态动作
     */
    ACT_VM_IDLE_TO_LOWERED = 213,
    /**
     * 武器低姿态待机动作
     */
    ACT_VM_IDLE_LOWERED = 214,
    /**
     * 武器低姿态转待机动作
     */
    ACT_VM_LOWERED_TO_IDLE = 215,
    /**
     * 武器后坐力动作1
     */
    ACT_VM_RECOIL1 = 216,
    /**
     * 武器后坐力动作2
     */
    ACT_VM_RECOIL2 = 217,
    /**
     * 武器后坐力动作3
     */
    ACT_VM_RECOIL3 = 218,
    /**
     * 武器拾取动作
     */
    ACT_VM_PICKUP = 219,
    /**
     * 武器释放动作
     */
    ACT_VM_RELEASE = 220,
    /**
     * 武器连击循环动作
     */
    ACT_VM_MAUL_LOOP = 221,
    /**
     * 安装消音器动作
     */
    ACT_VM_ATTACH_SILENCER = 222,
    /**
     * 拆卸消音器动作
     */
    ACT_VM_DETACH_SILENCER = 223,
    /**
     * 粘贴炸弹贴墙待机动作
     */
    ACT_SLAM_STICKWALL_IDLE = 224,
    /**
     * 粘贴炸弹贴墙不爆炸待机动作
     */
    ACT_SLAM_STICKWALL_ND_IDLE = 225,
    /**
     * 粘贴炸弹贴墙附着动作
     */
    ACT_SLAM_STICKWALL_ATTACH = 226,
    /**
     * 粘贴炸弹贴墙附着动作2
     */
    ACT_SLAM_STICKWALL_ATTACH2 = 227,
    /**
     * 粘贴炸弹贴墙不爆炸附着动作
     */
    ACT_SLAM_STICKWALL_ND_ATTACH = 228,
    /**
     * 粘贴炸弹贴墙不爆炸附着动作2
     */
    ACT_SLAM_STICKWALL_ND_ATTACH2 = 229,
    /**
     * 粘贴炸弹贴墙爆炸动作
     */
    ACT_SLAM_STICKWALL_DETONATE = 230,
    /**
     * 粘贴炸弹引爆器收起动作
     */
    ACT_SLAM_STICKWALL_DETONATOR_HOLSTER = 231,
    /**
     * 粘贴炸弹贴墙拔出动作
     */
    ACT_SLAM_STICKWALL_DRAW = 232,
    /**
     * 粘贴炸弹贴墙不爆炸拔出动作
     */
    ACT_SLAM_STICKWALL_ND_DRAW = 233,
    /**
     * 粘贴炸弹贴墙转投掷动作
     */
    ACT_SLAM_STICKWALL_TO_THROW = 234,
    /**
     * 粘贴炸弹贴墙转投掷不爆炸动作
     */
    ACT_SLAM_STICKWALL_TO_THROW_ND = 235,
    /**
     * 粘贴炸弹贴墙转地雷不爆炸动作
     */
    ACT_SLAM_STICKWALL_TO_TRIPMINE_ND = 236,
    /**
     * 投掷炸弹待机动作
     */
    ACT_SLAM_THROW_IDLE = 237,
    /**
     * 投掷炸弹不爆炸待机动作
     */
    ACT_SLAM_THROW_ND_IDLE = 238,
    /**
     * 投掷炸弹动作
     */
    ACT_SLAM_THROW_THROW = 239,
    /**
     * 投掷炸弹动作2
     */
    ACT_SLAM_THROW_THROW2 = 240,
    /**
     * 投掷炸弹不爆炸动作
     */
    ACT_SLAM_THROW_THROW_ND = 241,
    /**
     * 投掷炸弹不爆炸动作2
     */
    ACT_SLAM_THROW_THROW_ND2 = 242,
    /**
     * 投掷炸弹拔出动作
     */
    ACT_SLAM_THROW_DRAW = 243,
    /**
     * 投掷炸弹不爆炸拔出动作
     */
    ACT_SLAM_THROW_ND_DRAW = 244,
    /**
     * 投掷炸弹转贴墙动作
     */
    ACT_SLAM_THROW_TO_STICKWALL = 245,
    /**
     * 投掷炸弹转贴墙不爆炸动作
     */
    ACT_SLAM_THROW_TO_STICKWALL_ND = 246,
    /**
     * 投掷炸弹爆炸动作
     */
    ACT_SLAM_THROW_DETONATE = 247,
    /**
     * 投掷炸弹引爆器收起动作
     */
    ACT_SLAM_THROW_DETONATOR_HOLSTER = 248,
    /**
     * 投掷炸弹转地雷不爆炸动作
     */
    ACT_SLAM_THROW_TO_TRIPMINE_ND = 249,
    /**
     * 地雷待机动作
     */
    ACT_SLAM_TRIPMINE_IDLE = 250,
    /**
     * 地雷拔出动作
     */
    ACT_SLAM_TRIPMINE_DRAW = 251,
    /**
     * 地雷附着动作
     */
    ACT_SLAM_TRIPMINE_ATTACH = 252,
    /**
     * 地雷附着动作2
     */
    ACT_SLAM_TRIPMINE_ATTACH2 = 253,
    /**
     * 地雷转贴墙不爆炸动作
     */
    ACT_SLAM_TRIPMINE_TO_STICKWALL_ND = 254,
    /**
     * 地雷转投掷不爆炸动作
     */
    ACT_SLAM_TRIPMINE_TO_THROW_ND = 255,
    /**
     * 引爆器待机动作
     */
    ACT_SLAM_DETONATOR_IDLE = 256,
    /**
     * 引爆器拔出动作
     */
    ACT_SLAM_DETONATOR_DRAW = 257,
    /**
     * 引爆器爆炸动作
     */
    ACT_SLAM_DETONATOR_DETONATE = 258,
    /**
     * 引爆器收起动作
     */
    ACT_SLAM_DETONATOR_HOLSTER = 259,
    /**
     * 引爆器贴墙拔出动作
     */
    ACT_SLAM_DETONATOR_STICKWALL_DRAW = 260,
    /**
     * 引爆器投掷拔出动作
     */
    ACT_SLAM_DETONATOR_THROW_DRAW = 261,
    /**
     * 霰弹枪装弹开始动作
     */
    ACT_SHOTGUN_RELOAD_START = 262,
    /**
     * 霰弹枪装弹完成动作
     */
    ACT_SHOTGUN_RELOAD_FINISH = 263,
    /**
     * 霰弹枪抽壳动作
     */
    ACT_SHOTGUN_PUMP = 264,
    /**
     * SMG2待机动作2
     */
    ACT_SMG2_IDLE2 = 265,
    /**
     * SMG2射击动作2
     */
    ACT_SMG2_FIRE2 = 266,
    /**
     * SMG2拔枪动作2
     */
    ACT_SMG2_DRAW2 = 267,
    /**
     * SMG2装弹动作2
     */
    ACT_SMG2_RELOAD2 = 268,
    /**
     * SMG2空枪射击动作2
     */
    ACT_SMG2_DRYFIRE2 = 269,
    /**
     * SMG2切换自动射击动作
     */
    ACT_SMG2_TOAUTO = 270,
    /**
     * SMG2切换点射动作
     */
    ACT_SMG2_TOBURST = 271,
    /**
     * 物理枪升级动作
     */
    ACT_PHYSCANNON_UPGRADE = 272,
    /**
     * 远程攻击AR1动作
     */
    ACT_RANGE_ATTACK_AR1 = 273,
    /**
     * 远程攻击AR2动作
     */
    ACT_RANGE_ATTACK_AR2 = 274,
    /**
     * 低姿态远程攻击AR2动作
     */
    ACT_RANGE_ATTACK_AR2_LOW = 275,
    /**
     * 远程攻击AR2手雷动作
     */
    ACT_RANGE_ATTACK_AR2_GRENADE = 276,
    /**
     * 远程攻击重机枪动作1
     */
    ACT_RANGE_ATTACK_HMG1 = 277,
    /**
     * 远程攻击机枪发射器动作
     */
    ACT_RANGE_ATTACK_ML = 278,
    /**
     * 远程攻击冲锋枪动作1
     */
    ACT_RANGE_ATTACK_SMG1 = 279,
    /**
     * 低姿态远程攻击冲锋枪动作1
     */
    ACT_RANGE_ATTACK_SMG1_LOW = 280,
    /**
     * 远程攻击冲锋枪动作2
     */
    ACT_RANGE_ATTACK_SMG2 = 281,
    /**
     * 远程攻击霰弹枪动作
     */
    ACT_RANGE_ATTACK_SHOTGUN = 282,
    /**
     * 低姿态远程攻击霰弹枪动作
     */
    ACT_RANGE_ATTACK_SHOTGUN_LOW = 283,
    /**
     * 远程攻击手枪动作
     */
    ACT_RANGE_ATTACK_PISTOL = 284,
    /**
     * 低姿态远程攻击手枪动作
     */
    ACT_RANGE_ATTACK_PISTOL_LOW = 285,
    /**
     * 远程攻击SLAM炸弹动作
     */
    ACT_RANGE_ATTACK_SLAM = 286,
    /**
     * 远程攻击绊线动作
     */
    ACT_RANGE_ATTACK_TRIPWIRE = 287,
    /**
     * 远程攻击投掷动作
     */
    ACT_RANGE_ATTACK_THROW = 288,
    /**
     * 远程攻击狙击步枪动作
     */
    ACT_RANGE_ATTACK_SNIPER_RIFLE = 289,
    /**
     * 远程攻击火箭筒动作
     */
    ACT_RANGE_ATTACK_RPG = 290,
    /**
     * 近战攻击挥击动作
     */
    ACT_MELEE_ATTACK_SWING = 291,
    /**
     * 低姿态远程瞄准动作
     */
    ACT_RANGE_AIM_LOW = 292,
    /**
     * 低姿态远程冲锋枪瞄准动作1
     */
    ACT_RANGE_AIM_SMG1_LOW = 293,
    /**
     * 低姿态远程手枪瞄准动作
     */
    ACT_RANGE_AIM_PISTOL_LOW = 294,
    /**
     * 低姿态远程AR2瞄准动作
     */
    ACT_RANGE_AIM_AR2_LOW = 295,
    /**
     * 低姿态手枪掩护动作
     */
    ACT_COVER_PISTOL_LOW = 296,
    /**
     * 低姿态冲锋枪掩护动作1
     */
    ACT_COVER_SMG1_LOW = 297,
    /**
     * 手势远程攻击AR1动作
     */
    ACT_GESTURE_RANGE_ATTACK_AR1 = 298,
    /**
     * 手势远程攻击AR2动作
     */
    ACT_GESTURE_RANGE_ATTACK_AR2 = 299,
    /**
     * 手势远程攻击AR2手雷动作
     */
    ACT_GESTURE_RANGE_ATTACK_AR2_GRENADE = 300,
    /**
     * 手势远程攻击重机枪动作1
     */
    ACT_GESTURE_RANGE_ATTACK_HMG1 = 301,
    /**
     * 手势远程攻击机枪发射器动作
     */
    ACT_GESTURE_RANGE_ATTACK_ML = 302,
    /**
     * 手势远程攻击冲锋枪动作1
     */
    ACT_GESTURE_RANGE_ATTACK_SMG1 = 303,
    /**
     * 低姿态手势远程攻击冲锋枪动作1
     */
    ACT_GESTURE_RANGE_ATTACK_SMG1_LOW = 304,
    /**
     * 手势远程攻击冲锋枪动作2
     */
    ACT_GESTURE_RANGE_ATTACK_SMG2 = 305,
    /**
     * 手势远程攻击霰弹枪动作
     */
    ACT_GESTURE_RANGE_ATTACK_SHOTGUN = 306,
    /**
     * 手势远程攻击手枪动作
     */
    ACT_GESTURE_RANGE_ATTACK_PISTOL = 307,
    /**
     * 低姿态手势远程攻击手枪动作
     */
    ACT_GESTURE_RANGE_ATTACK_PISTOL_LOW = 308,
    /**
     * 手势远程攻击SLAM炸弹动作
     */
    ACT_GESTURE_RANGE_ATTACK_SLAM = 309,
    /**
     * 手势远程攻击绊线动作
     */
    ACT_GESTURE_RANGE_ATTACK_TRIPWIRE = 310,
    /**
     * 手势远程攻击投掷动作
     */
    ACT_GESTURE_RANGE_ATTACK_THROW = 311,
    /**
     * 手势远程攻击狙击步枪动作
     */
    ACT_GESTURE_RANGE_ATTACK_SNIPER_RIFLE = 312,
    /**
     * 手势近战攻击挥击动作
     */
    ACT_GESTURE_MELEE_ATTACK_SWING = 313,
    /**
     * 持步枪待机动作
     */
    ACT_IDLE_RIFLE = 314,
    /**
     * 持冲锋枪待机动作1
     */
    ACT_IDLE_SMG1 = 315,
    /**
     * 愤怒持冲锋枪待机动作1
     */
    ACT_IDLE_ANGRY_SMG1 = 316,
    /**
     * 持手枪待机动作
     */
    ACT_IDLE_PISTOL = 317,
    /**
     * 愤怒持手枪待机动作
     */
    ACT_IDLE_ANGRY_PISTOL = 318,
    /**
     * 愤怒持霰弹枪待机动作
     */
    ACT_IDLE_ANGRY_SHOTGUN = 319,
    /**
     * 隐匿状态持手枪待机动作
     */
    ACT_IDLE_STEALTH_PISTOL = 320,
    /**
     * 携带包裹待机动作
     */
    ACT_IDLE_PACKAGE = 321,
    /**
     * 携带包裹行走动作
     */
    ACT_WALK_PACKAGE = 322,
    /**
     * 携带手提箱待机动作
     */
    ACT_IDLE_SUITCASE = 323,
    /**
     * 携带手提箱行走动作
     */
    ACT_WALK_SUITCASE = 324,
    /**
     * 放松持冲锋枪待机动作1
     */
    ACT_IDLE_SMG1_RELAXED = 325,
    /**
     * 激动持冲锋枪待机动作1
     */
    ACT_IDLE_SMG1_STIMULATED = 326,
    /**
     * 放松持步枪行走动作
     */
    ACT_WALK_RIFLE_RELAXED = 327,
    /**
     * 放松持步枪奔跑动作
     */
    ACT_RUN_RIFLE_RELAXED = 328,
    /**
     * 激动持步枪行走动作
     */
    ACT_WALK_RIFLE_STIMULATED = 329,
    /**
     * 激动持步枪奔跑动作
     */
    ACT_RUN_RIFLE_STIMULATED = 330,
    /**
     * 激动持步枪瞄准待机动作
     */
    ACT_IDLE_AIM_RIFLE_STIMULATED = 331,
    /**
     * 激动持步枪瞄准行走动作
     */
    ACT_WALK_AIM_RIFLE_STIMULATED = 332,
    /**
     * 激动持步枪瞄准奔跑动作
     */
    ACT_RUN_AIM_RIFLE_STIMULATED = 333,
    /**
     * 放松持霰弹枪待机动作
     */
    ACT_IDLE_SHOTGUN_RELAXED = 334,
    /**
     * 激动持霰弹枪待机动作
     */
    ACT_IDLE_SHOTGUN_STIMULATED = 335,
    /**
     * 激怒持霰弹枪待机动作
     */
    ACT_IDLE_SHOTGUN_AGITATED = 336,
    /**
     * 愤怒行走动作
     */
    ACT_WALK_ANGRY = 337,
    /**
     * 警察骚扰动作1
     */
    ACT_POLICE_HARASS1 = 338,
    /**
     * 警察骚扰动作2
     */
    ACT_POLICE_HARASS2 = 339,
    /**
     * 操控机枪待机动作
     */
    ACT_IDLE_MANNEDGUN = 340,
    /**
     * 持近战武器待机动作
     */
    ACT_IDLE_MELEE = 341,
    /**
     * 愤怒持近战武器待机动作
     */
    ACT_IDLE_ANGRY_MELEE = 342,
    /**
     * 放松持火箭筒待机动作
     */
    ACT_IDLE_RPG_RELAXED = 343,
    /**
     * 持火箭筒待机动作
     */
    ACT_IDLE_RPG = 344,
    /**
     * 愤怒持火箭筒待机动作
     */
    ACT_IDLE_ANGRY_RPG = 345,
    /**
     * 低姿态掩护持火箭筒动作
     */
    ACT_COVER_LOW_RPG = 346,
    /**
     * 持火箭筒行走动作
     */
    ACT_WALK_RPG = 347,
    /**
     * 持火箭筒奔跑动作
     */
    ACT_RUN_RPG = 348,
    /**
     * 蹲伏持火箭筒行走动作
     */
    ACT_WALK_CROUCH_RPG = 349,
    /**
     * 蹲伏持火箭筒奔跑动作
     */
    ACT_RUN_CROUCH_RPG = 350,
    /**
     * 放松持火箭筒行走动作
     */
    ACT_WALK_RPG_RELAXED = 351,
    /**
     * 放松持火箭筒奔跑动作
     */
    ACT_RUN_RPG_RELAXED = 352,
    /**
     * 持步枪行走动作
     */
    ACT_WALK_RIFLE = 353,
    /**
     * 持步枪瞄准行走动作
     */
    ACT_WALK_AIM_RIFLE = 354,
    /**
     * 蹲伏持步枪行走动作
     */
    ACT_WALK_CROUCH_RIFLE = 355,
    /**
     * 蹲伏持步枪瞄准行走动作
     */
    ACT_WALK_CROUCH_AIM_RIFLE = 356,
    /**
     * 持步枪奔跑动作
     */
    ACT_RUN_RIFLE = 357,
    /**
     * 持步枪瞄准奔跑动作
     */
    ACT_RUN_AIM_RIFLE = 358,
    /**
     * 蹲伏持步枪奔跑动作
     */
    ACT_RUN_CROUCH_RIFLE = 359,
    /**
     * 蹲伏持步枪瞄准奔跑动作
     */
    ACT_RUN_CROUCH_AIM_RIFLE = 360,
    /**
     * 隐匿状态持手枪奔跑动作
     */
    ACT_RUN_STEALTH_PISTOL = 361,
    /**
     * 持霰弹枪瞄准行走动作
     */
    ACT_WALK_AIM_SHOTGUN = 362,
    /**
     * 持霰弹枪瞄准奔跑动作
     */
    ACT_RUN_AIM_SHOTGUN = 363,
    /**
     * 持手枪行走动作
     */
    ACT_WALK_PISTOL = 364,
    /**
     * 持手枪奔跑动作
     */
    ACT_RUN_PISTOL = 365,
    /**
     * 持手枪瞄准行走动作
     */
    ACT_WALK_AIM_PISTOL = 366,
    /**
     * 持手枪瞄准奔跑动作
     */
    ACT_RUN_AIM_PISTOL = 367,
    /**
     * 隐匿状态持手枪行走动作
     */
    ACT_WALK_STEALTH_PISTOL = 368,
    /**
     * 隐匿状态持手枪瞄准行走动作
     */
    ACT_WALK_AIM_STEALTH_PISTOL = 369,
    /**
     * 隐匿状态持手枪瞄准奔跑动作
     */
    ACT_RUN_AIM_STEALTH_PISTOL = 370,
    /**
     * 手枪装弹动作
     */
    ACT_RELOAD_PISTOL = 371,
    /**
     * 低姿态手枪装弹动作
     */
    ACT_RELOAD_PISTOL_LOW = 372,
    /**
     * 冲锋枪装弹动作1
     */
    ACT_RELOAD_SMG1 = 373,
    /**
     * 低姿态冲锋枪装弹动作1
     */
    ACT_RELOAD_SMG1_LOW = 374,
    /**
     * 霰弹枪装弹动作
     */
    ACT_RELOAD_SHOTGUN = 375,
    /**
     * 低姿态霰弹枪装弹动作
     */
    ACT_RELOAD_SHOTGUN_LOW = 376,
    /**
     * 手势装弹动作
     */
    ACT_GESTURE_RELOAD = 377,
    /**
     * 手势手枪装弹动作
     */
    ACT_GESTURE_RELOAD_PISTOL = 378,
    /**
     * 手势冲锋枪装弹动作1
     */
    ACT_GESTURE_RELOAD_SMG1 = 379,
    /**
     * 手势霰弹枪装弹动作
     */
    ACT_GESTURE_RELOAD_SHOTGUN = 380,
    /**
     * 忙碌状态向左倚靠动作
     */
    ACT_BUSY_LEAN_LEFT = 381,
    /**
     * 进入忙碌左倚靠动作
     */
    ACT_BUSY_LEAN_LEFT_ENTRY = 382,
    /**
     * 退出忙碌左倚靠动作
     */
    ACT_BUSY_LEAN_LEFT_EXIT = 383,
    /**
     * 忙碌状态向后倚靠动作
     */
    ACT_BUSY_LEAN_BACK = 384,
    /**
     * 进入忙碌向后倚靠动作
     */
    ACT_BUSY_LEAN_BACK_ENTRY = 385,
    /**
     * 退出忙碌向后倚靠动作
     */
    ACT_BUSY_LEAN_BACK_EXIT = 386,
    /**
     * 忙碌状态坐地动作
     */
    ACT_BUSY_SIT_GROUND = 387,
    /**
     * 进入忙碌坐地动作
     */
    ACT_BUSY_SIT_GROUND_ENTRY = 388,
    /**
     * 退出忙碌坐地动作
     */
    ACT_BUSY_SIT_GROUND_EXIT = 389,
    /**
     * 忙碌状态坐椅子动作
     */
    ACT_BUSY_SIT_CHAIR = 390,
    /**
     * 进入忙碌坐椅子动作
     */
    ACT_BUSY_SIT_CHAIR_ENTRY = 391,
    /**
     * 退出忙碌坐椅子动作
     */
    ACT_BUSY_SIT_CHAIR_EXIT = 392,
    /**
     * 忙碌站立动作
     */
    ACT_BUSY_STAND = 393,
    /**
     * 忙碌排队动作
     */
    ACT_BUSY_QUEUE = 394,
    /**
     * 蹲伏闪避动作
     */
    ACT_DUCK_DODGE = 395,
    /**
     * 被吸盘怪吞噬死亡动作
     */
    ACT_DIE_BARNACLE_SWALLOW = 396,
    /**
     * 吸盘怪掐颈手势动作
     */
    ACT_GESTURE_BARNACLE_STRANGLE = 397,
    /**
     * 正面死亡动作
     */
    ACT_DIE_FRONTSIDE = 402,
    /**
     * 右侧死亡动作
     */
    ACT_DIE_RIGHTSIDE = 403,
    /**
     * 背面死亡动作
     */
    ACT_DIE_BACKSIDE = 404,
    /**
     * 左侧死亡动作
     */
    ACT_DIE_LEFTSIDE = 405,
    /**
     * 蹲伏正面死亡动作
     */
    ACT_DIE_CROUCH_FRONTSIDE = 406,
    /**
     * 蹲伏右侧死亡动作
     */
    ACT_DIE_CROUCH_RIGHTSIDE = 407,
    /**
     * 蹲伏背面死亡动作
     */
    ACT_DIE_CROUCH_BACKSIDE = 408,
    /**
     * 蹲伏左侧死亡动作
     */
    ACT_DIE_CROUCH_LEFTSIDE = 409,
    /**
     * 无力死亡动作
     */
    ACT_DIE_INCAP = 410,
    /**
     * 站立死亡动作
     */
    ACT_DIE_STANDING = 411,
    /**
     * 开门动作
     */
    ACT_OPEN_DOOR = 412,
    /**
     * Alyx僵尸近战攻击动作
     */
    ACT_DI_ALYX_ZOMBIE_MELEE = 413,
    /**
     * Alyx僵尸躯干近战攻击动作
     */
    ACT_DI_ALYX_ZOMBIE_TORSO_MELEE = 414,
    /**
     * Alyx跳蛛近战攻击动作
     */
    ACT_DI_ALYX_HEADCRAB_MELEE = 415,
    /**
     * Alyx蚁狮攻击动作
     */
    ACT_DI_ALYX_ANTLION = 416,
    /**
     * Alyx僵尸霰弹枪动作64
     */
    ACT_DI_ALYX_ZOMBIE_SHOTGUN64 = 417,
    /**
     * Alyx僵尸霰弹枪动作26
     */
    ACT_DI_ALYX_ZOMBIE_SHOTGUN26 = 418,
    /**
     * 准备状态从放松到激励
     */
    ACT_READINESS_RELAXED_TO_STIMULATED = 419,
    /**
     * 准备状态从放松到激励行走
     */
    ACT_READINESS_RELAXED_TO_STIMULATED_WALK = 420,
    /**
     * 准备状态从激动到激励
     */
    ACT_READINESS_AGITATED_TO_STIMULATED = 421,
    /**
     * 准备状态从激励到放松
     */
    ACT_READINESS_STIMULATED_TO_RELAXED = 422,
    /**
     * 手枪准备从放松到激励
     */
    ACT_READINESS_PISTOL_RELAXED_TO_STIMULATED = 423,
    /**
     * 手枪准备从放松到激励行走
     */
    ACT_READINESS_PISTOL_RELAXED_TO_STIMULATED_WALK = 424,
    /**
     * 手枪准备从激动到激励
     */
    ACT_READINESS_PISTOL_AGITATED_TO_STIMULATED = 425,
    /**
     * 手枪准备从激励到放松
     */
    ACT_READINESS_PISTOL_STIMULATED_TO_RELAXED = 426,
    /**
     * 携物待机动作
     */
    ACT_IDLE_CARRY = 427,
    /**
     * 携物行走动作
     */
    ACT_WALK_CARRY = 428,
    /**
     * 开始死亡动作
     */
    ACT_STARTDYING = 429,
    /**
     * 死亡循环动作
     */
    ACT_DYINGLOOP = 430,
    /**
     * 死亡转入死亡状态动作
     */
    ACT_DYINGTODEAD = 431,
    /**
     * 操控机枪动作
     */
    ACT_RIDE_MANNED_GUN = 432,
    /**
     * 武器冲刺进入动作
     */
    ACT_VM_SPRINT_ENTER = 433,
    /**
     * 武器冲刺待机动作
     */
    ACT_VM_SPRINT_IDLE = 434,
    /**
     * 武器冲刺退出动作
     */
    ACT_VM_SPRINT_LEAVE = 435,
    /**
     * 开始射击动作
     */
    ACT_FIRE_START = 436,
    /**
     * 射击循环动作
     */
    ACT_FIRE_LOOP = 437,
    /**
     * 射击结束动作
     */
    ACT_FIRE_END = 438,
    /**
     * 蹲伏手雷待机动作
     */
    ACT_CROUCHING_GRENADEIDLE = 439,
    /**
     * 蹲伏手雷准备动作
     */
    ACT_CROUCHING_GRENADEREADY = 440,
    /**
     * 蹲伏主攻击动作
     */
    ACT_CROUCHING_PRIMARYATTACK = 441,
    /**
     * 叠加手雷待机动作
     */
    ACT_OVERLAY_GRENADEIDLE = 442,
    /**
     * 叠加手雷准备动作
     */
    ACT_OVERLAY_GRENADEREADY = 443,
    /**
     * 叠加主攻击动作
     */
    ACT_OVERLAY_PRIMARYATTACK = 444,
    /**
     * 叠加盾牌抬起动作
     */
    ACT_OVERLAY_SHIELD_UP = 445,
    /**
     * 叠加盾牌放下动作
     */
    ACT_OVERLAY_SHIELD_DOWN = 446,
    /**
     * 叠加盾牌抬起待机动作
     */
    ACT_OVERLAY_SHIELD_UP_IDLE = 447,
    /**
     * 叠加盾牌攻击动作
     */
    ACT_OVERLAY_SHIELD_ATTACK = 448,
    /**
     * 叠加盾牌击退动作
     */
    ACT_OVERLAY_SHIELD_KNOCKBACK = 449,
    /**
     * 盾牌抬起动作
     */
    ACT_SHIELD_UP = 450,
    /**
     * 盾牌放下动作
     */
    ACT_SHIELD_DOWN = 451,
    /**
     * 盾牌抬起待机动作
     */
    ACT_SHIELD_UP_IDLE = 452,
    /**
     * 盾牌攻击动作
     */
    ACT_SHIELD_ATTACK = 453,
    /**
     * 盾牌击退动作
     */
    ACT_SHIELD_KNOCKBACK = 454,
    /**
     * 蹲伏盾牌抬起动作
     */
    ACT_CROUCHING_SHIELD_UP = 455,
    /**
     * 蹲伏盾牌放下动作
     */
    ACT_CROUCHING_SHIELD_DOWN = 456,
    /**
     * 蹲伏盾牌抬起待机动作
     */
    ACT_CROUCHING_SHIELD_UP_IDLE = 457,
    /**
     * 蹲伏盾牌攻击动作
     */
    ACT_CROUCHING_SHIELD_ATTACK = 458,
    /**
     * 蹲伏盾牌击退动作
     */
    ACT_CROUCHING_SHIELD_KNOCKBACK = 459,
    /**
     * 右转45度动作
     */
    ACT_TURNRIGHT45 = 460,
    /**
     * 左转45度动作
     */
    ACT_TURNLEFT45 = 461,
    /**
     * 转向动作
     */
    ACT_TURN = 462,
    /**
     * 物体组装动作
     */
    ACT_OBJ_ASSEMBLING = 463,
    /**
     * 物体拆卸动作
     */
    ACT_OBJ_DISMANTLING = 464,
    /**
     * 物体启动动作
     */
    ACT_OBJ_STARTUP = 465,
    /**
     * 物体运行动作
     */
    ACT_OBJ_RUNNING = 466,
    /**
     * 物体待机动作
     */
    ACT_OBJ_IDLE = 467,
    /**
     * 物体放置动作
     */
    ACT_OBJ_PLACING = 468,
    /**
     * 物体损坏动作
     */
    ACT_OBJ_DETERIORATING = 469,
    /**
     * 物体升级动作
     */
    ACT_OBJ_UPGRADING = 470,
    /**
     * 部署动作
     */
    ACT_DEPLOY = 471,
    /**
     * 部署待机动作
     */
    ACT_DEPLOY_IDLE = 472,
    /**
     * 解除部署动作
     */
    ACT_UNDEPLOY = 473,
    /**
     * 弩拉弦（无箭）动作
     */
    ACT_CROSSBOW_DRAW_UNLOADED = 474,
    /**
     * 高斯枪启动旋转动作
     */
    ACT_GAUSS_SPINUP = 475,
    /**
     * 高斯枪旋转循环动作
     */
    ACT_GAUSS_SPINCYCLE = 476,
    /**
     * 武器主攻（消音）动作
     */
    ACT_VM_PRIMARYATTACK_SILENCED = 477,
    /**
     * 武器装弹（消音）动作
     */
    ACT_VM_RELOAD_SILENCED = 478,
    /**
     * 武器空击（消音）动作
     */
    ACT_VM_DRYFIRE_SILENCED = 479,
    /**
     * 武器待机（消音）动作
     */
    ACT_VM_IDLE_SILENCED = 480,
    /**
     * 武器拔出（消音）动作
     */
    ACT_VM_DRAW_SILENCED = 481,
    /**
     * 武器空闲左手动作
     */
    ACT_VM_IDLE_EMPTY_LEFT = 482,
    /**
     * 武器左手空击动作
     */
    ACT_VM_DRYFIRE_LEFT = 483,
    /**
     * 武器瞄准拔出动作
     */
    ACT_VM_IS_DRAW = 484,
    /**
     * 武器瞄准收起动作
     */
    ACT_VM_IS_HOLSTER = 485,
    /**
     * 武器瞄准待机动作
     */
    ACT_VM_IS_IDLE = 486,
    /**
     * 武器瞄准主攻动作
     */
    ACT_VM_IS_PRIMARYATTACK = 487,
    /**
     * 玩家射击待机动作
     */
    ACT_PLAYER_IDLE_FIRE = 488,
    /**
     * 玩家蹲伏射击动作
     */
    ACT_PLAYER_CROUCH_FIRE = 489,
    /**
     * 玩家蹲伏行走射击动作
     */
    ACT_PLAYER_CROUCH_WALK_FIRE = 490,
    /**
     * 玩家行走射击动作
     */
    ACT_PLAYER_WALK_FIRE = 491,
    /**
     * 玩家奔跑射击动作
     */
    ACT_PLAYER_RUN_FIRE = 492,
    /**
     * 待机转奔跑动作
     */
    ACT_IDLETORUN = 493,
    /**
     * 奔跑转待机动作
     */
    ACT_RUNTOIDLE = 494,
    /**
     * 武器拔出（部署状态）动作
     */
    ACT_VM_DRAW_DEPLOYED = 495,
    /**
     * HL2多人游戏近战待机动作
     */
    ACT_HL2MP_IDLE_MELEE = 496,
    /**
     * HL2多人游戏奔跑近战动作
     */
    ACT_HL2MP_RUN_MELEE = 497,
    /**
     * HL2多人游戏蹲伏近战待机动作
     */
    ACT_HL2MP_IDLE_CROUCH_MELEE = 498,
    /**
     * HL2多人游戏蹲伏近战行走动作
     */
    ACT_HL2MP_WALK_CROUCH_MELEE = 499,
    /**
     * HL2多人游戏手势远程近战攻击动作
     */
    ACT_HL2MP_GESTURE_RANGE_ATTACK_MELEE = 500,
    /**
     * HL2多人游戏手势装弹近战动作
     */
    ACT_HL2MP_GESTURE_RELOAD_MELEE = 501,
    /**
     * HL2多人游戏跳跃近战动作
     */
    ACT_HL2MP_JUMP_MELEE = 502,
    /**
     * 多人游戏站立待机动作
     */
    ACT_MP_STAND_IDLE = 503,
    /**
     * 多人游戏蹲伏待机动作
     */
    ACT_MP_CROUCH_IDLE = 504,
    /**
     * 多人游戏蹲伏部署待机动作
     */
    ACT_MP_CROUCH_DEPLOYED_IDLE = 505,
    /**
     * 多人游戏蹲伏部署动作
     */
    ACT_MP_CROUCH_DEPLOYED = 506,
    /**
     * 多人游戏部署待机动作
     */
    ACT_MP_DEPLOYED_IDLE = 507,
    /**
     * 多人游戏奔跑动作
     */
    ACT_MP_RUN = 508,
    /**
     * 多人游戏行走动作
     */
    ACT_MP_WALK = 509,
    /**
     * 多人游戏空中行走动作
     */
    ACT_MP_AIRWALK = 510,
    /**
     * 多人游戏蹲伏行走动作
     */
    ACT_MP_CROUCHWALK = 511,
    /**
     * 多人游戏冲刺动作
     */
    ACT_MP_SPRINT = 512,
    /**
     * 多人游戏跳跃动作
     */
    ACT_MP_JUMP = 513,
    /**
     * 多人游戏跳跃开始动作
     */
    ACT_MP_JUMP_START = 514,
    /**
     * 多人游戏跳跃悬浮动作
     */
    ACT_MP_JUMP_FLOAT = 515,
    /**
     * 多人游戏跳跃着陆动作
     */
    ACT_MP_JUMP_LAND = 516,
    /**
     * 多人游戏二段跳动作
     */
    ACT_MP_DOUBLEJUMP = 517,
    /**
     * 多人游戏游泳动作
     */
    ACT_MP_SWIM = 518,
    /**
     * 多人游戏武器已部署动作
     */
    ACT_MP_DEPLOYED = 519,
    /**
     * 多人游戏游泳时武器已部署动作
     */
    ACT_MP_SWIM_DEPLOYED = 520,
    /**
     * 多人游戏语音命令动作
     */
    ACT_MP_VCD = 521,
    /**
     * 多人游戏站立主武器射击动作
     */
    ACT_MP_ATTACK_STAND_PRIMARYFIRE = 522,
    /**
     * 多人游戏展开状态站立主武器射击动作
     */
    ACT_MP_ATTACK_STAND_PRIMARYFIRE_DEPLOYED = 523,
    /**
     * 多人游戏站立副武器射击动作
     */
    ACT_MP_ATTACK_STAND_SECONDARYFIRE = 524,
    /**
     * 多人游戏站立投掷手榴弹动作
     */
    ACT_MP_ATTACK_STAND_GRENADE = 525,
    /**
     * 多人游戏蹲伏主武器射击动作
     */
    ACT_MP_ATTACK_CROUCH_PRIMARYFIRE = 526,
    /**
     * 多人游戏展开状态蹲伏主武器射击动作
     */
    ACT_MP_ATTACK_CROUCH_PRIMARYFIRE_DEPLOYED = 527,
    /**
     * 多人游戏蹲伏副武器射击动作
     */
    ACT_MP_ATTACK_CROUCH_SECONDARYFIRE = 528,
    /**
     * 多人游戏蹲伏投掷手榴弹动作
     */
    ACT_MP_ATTACK_CROUCH_GRENADE = 529,
    /**
     * 多人游戏游泳主武器射击动作
     */
    ACT_MP_ATTACK_SWIM_PRIMARYFIRE = 530,
    /**
     * 多人游戏游泳副武器射击动作
     */
    ACT_MP_ATTACK_SWIM_SECONDARYFIRE = 531,
    /**
     * 多人游戏游泳投掷手榴弹动作
     */
    ACT_MP_ATTACK_SWIM_GRENADE = 532,
    /**
     * 多人游戏空中移动主武器射击动作
     */
    ACT_MP_ATTACK_AIRWALK_PRIMARYFIRE = 533,
    /**
     * 多人游戏空中移动副武器射击动作
     */
    ACT_MP_ATTACK_AIRWALK_SECONDARYFIRE = 534,
    /**
     * 多人游戏空中移动投掷手榴弹动作
     */
    ACT_MP_ATTACK_AIRWALK_GRENADE = 535,
    /**
     * 多人游戏站立换弹动作
     */
    ACT_MP_RELOAD_STAND = 536,
    /**
     * 多人游戏站立换弹循环动作
     */
    ACT_MP_RELOAD_STAND_LOOP = 537,
    /**
     * 多人游戏站立换弹结束动作
     */
    ACT_MP_RELOAD_STAND_END = 538,
    /**
     * 多人游戏蹲伏换弹动作
     */
    ACT_MP_RELOAD_CROUCH = 539,
    /**
     * 多人游戏蹲伏换弹循环动作
     */
    ACT_MP_RELOAD_CROUCH_LOOP = 540,
    /**
     * 多人游戏蹲伏换弹结束动作
     */
    ACT_MP_RELOAD_CROUCH_END = 541,
    /**
     * 多人游戏游泳换弹动作
     */
    ACT_MP_RELOAD_SWIM = 542,
    /**
     * 多人游戏游泳换弹循环动作
     */
    ACT_MP_RELOAD_SWIM_LOOP = 543,
    /**
     * 多人游戏游泳换弹结束动作
     */
    ACT_MP_RELOAD_SWIM_END = 544,
    /**
     * 多人游戏空中移动换弹动作
     */
    ACT_MP_RELOAD_AIRWALK = 545,
    /**
     * 多人游戏空中移动换弹循环动作
     */
    ACT_MP_RELOAD_AIRWALK_LOOP = 546,
    /**
     * 多人游戏空中移动换弹结束动作
     */
    ACT_MP_RELOAD_AIRWALK_END = 547,
    /**
     * 多人游戏站立预备射击动作
     */
    ACT_MP_ATTACK_STAND_PREFIRE = 548,
    /**
     * 多人游戏站立后射击动作
     */
    ACT_MP_ATTACK_STAND_POSTFIRE = 549,
    /**
     * 多人游戏站立开始射击动作
     */
    ACT_MP_ATTACK_STAND_STARTFIRE = 550,
    /**
     * 多人游戏蹲伏预备射击动作
     */
    ACT_MP_ATTACK_CROUCH_PREFIRE = 551,
    /**
     * 多人游戏蹲伏后射击动作
     */
    ACT_MP_ATTACK_CROUCH_POSTFIRE = 552,
    /**
     * 多人游戏游泳预备射击动作
     */
    ACT_MP_ATTACK_SWIM_PREFIRE = 553,
    /**
     * 多人游戏游泳后射击动作
     */
    ACT_MP_ATTACK_SWIM_POSTFIRE = 554,
    /**
     * 多人游戏站立主武器待机动作
     */
    ACT_MP_STAND_PRIMARY = 555,
    /**
     * 多人游戏蹲伏主武器待机动作
     */
    ACT_MP_CROUCH_PRIMARY = 556,
    /**
     * 多人游戏跑步主武器动作
     */
    ACT_MP_RUN_PRIMARY = 557,
    /**
     * 多人游戏走路主武器动作
     */
    ACT_MP_WALK_PRIMARY = 558,
    /**
     * 多人游戏空中移动主武器动作
     */
    ACT_MP_AIRWALK_PRIMARY = 559,
    /**
     * 多人游戏蹲伏走路主武器动作
     */
    ACT_MP_CROUCHWALK_PRIMARY = 560,
    /**
     * 多人游戏跳跃主武器动作
     */
    ACT_MP_JUMP_PRIMARY = 561,
    /**
     * 多人游戏开始跳跃主武器动作
     */
    ACT_MP_JUMP_START_PRIMARY = 562,
    /**
     * 多人游戏空中漂浮主武器动作
     */
    ACT_MP_JUMP_FLOAT_PRIMARY = 563,
    /**
     * 多人游戏着陆主武器动作
     */
    ACT_MP_JUMP_LAND_PRIMARY = 564,
    /**
     * 多人游戏游泳主武器动作
     */
    ACT_MP_SWIM_PRIMARY = 565,
    /**
     * 多人游戏展开状态主武器动作
     */
    ACT_MP_DEPLOYED_PRIMARY = 566,
    /**
     * 多人游戏游泳展开状态主武器动作
     */
    ACT_MP_SWIM_DEPLOYED_PRIMARY = 567,
    /**
     * 多人游戏站立主武器攻击动作
     */
    ACT_MP_ATTACK_STAND_PRIMARY = 568,
    /**
     * 多人游戏展开站立主武器攻击动作
     */
    ACT_MP_ATTACK_STAND_PRIMARY_DEPLOYED = 569,
    /**
     * 多人游戏蹲伏主武器攻击动作
     */
    ACT_MP_ATTACK_CROUCH_PRIMARY = 570,
    /**
     * 多人游戏展开蹲伏主武器攻击动作
     */
    ACT_MP_ATTACK_CROUCH_PRIMARY_DEPLOYED = 571,
    /**
     * 多人游戏游泳主武器攻击动作
     */
    ACT_MP_ATTACK_SWIM_PRIMARY = 572,
    /**
     * 多人游戏空中移动主武器攻击动作
     */
    ACT_MP_ATTACK_AIRWALK_PRIMARY = 573,
    /**
     * 多人游戏站立换弹主武器动作
     */
    ACT_MP_RELOAD_STAND_PRIMARY = 574,
    /**
     * 多人游戏站立换弹循环主武器动作
     */
    ACT_MP_RELOAD_STAND_PRIMARY_LOOP = 575,
    /**
     * 多人游戏站立换弹结束主武器动作
     */
    ACT_MP_RELOAD_STAND_PRIMARY_END = 576,
    /**
     * 多人游戏蹲伏换弹主武器动作
     */
    ACT_MP_RELOAD_CROUCH_PRIMARY = 577,
    /**
     * 多人游戏蹲伏换弹循环主武器动作
     */
    ACT_MP_RELOAD_CROUCH_PRIMARY_LOOP = 578,
    /**
     * 多人游戏蹲伏换弹结束主武器动作
     */
    ACT_MP_RELOAD_CROUCH_PRIMARY_END = 579,
    /**
     * 多人游戏游泳换弹主武器动作
     */
    ACT_MP_RELOAD_SWIM_PRIMARY = 580,
    /**
     * 多人游戏游泳换弹循环主武器动作
     */
    ACT_MP_RELOAD_SWIM_PRIMARY_LOOP = 581,
    /**
     * 多人游戏游泳换弹结束主武器动作
     */
    ACT_MP_RELOAD_SWIM_PRIMARY_END = 582,
    /**
     * 多人游戏空中移动换弹主武器动作
     */
    ACT_MP_RELOAD_AIRWALK_PRIMARY = 583,
    /**
     * 多人游戏空中移动换弹循环主武器动作
     */
    ACT_MP_RELOAD_AIRWALK_PRIMARY_LOOP = 584,
    /**
     * 多人游戏空中移动换弹结束主武器动作
     */
    ACT_MP_RELOAD_AIRWALK_PRIMARY_END = 585,
    /**
     * 多人游戏站立手榴弹主武器攻击动作
     */
    ACT_MP_ATTACK_STAND_GRENADE_PRIMARY = 586,
    /**
     * 多人游戏蹲伏手榴弹主武器攻击动作
     */
    ACT_MP_ATTACK_CROUCH_GRENADE_PRIMARY = 587,
    /**
     * 多人游戏游泳手榴弹主武器攻击动作
     */
    ACT_MP_ATTACK_SWIM_GRENADE_PRIMARY = 588,
    /**
     * 多人游戏空中移动手榴弹主武器攻击动作
     */
    ACT_MP_ATTACK_AIRWALK_GRENADE_PRIMARY = 589,
    /**
     * 多人游戏站立副武器待机动作
     */
    ACT_MP_STAND_SECONDARY = 590,
    /**
     * 多人游戏蹲伏副武器待机动作
     */
    ACT_MP_CROUCH_SECONDARY = 591,
    /**
     * 多人游戏跑步副武器动作
     */
    ACT_MP_RUN_SECONDARY = 592,
    /**
     * 多人游戏走路副武器动作
     */
    ACT_MP_WALK_SECONDARY = 593,
    /**
     * 多人游戏空中移动副武器动作
     */
    ACT_MP_AIRWALK_SECONDARY = 594,
    /**
     * 多人游戏蹲伏走路副武器动作
     */
    ACT_MP_CROUCHWALK_SECONDARY = 595,
    /**
     * 多人游戏跳跃副武器动作
     */
    ACT_MP_JUMP_SECONDARY = 596,
    /**
     * 多人游戏开始跳跃副武器动作
     */
    ACT_MP_JUMP_START_SECONDARY = 597,
    /**
     * 多人游戏空中漂浮副武器动作
     */
    ACT_MP_JUMP_FLOAT_SECONDARY = 598,
    /**
     * 多人游戏着陆副武器动作
     */
    ACT_MP_JUMP_LAND_SECONDARY = 599,
    /**
     * 多人游戏游泳副武器动作
     */
    ACT_MP_SWIM_SECONDARY = 600,
    /**
     * 多人游戏站立副武器攻击动作
     */
    ACT_MP_ATTACK_STAND_SECONDARY = 601,
    /**
     * 多人游戏蹲伏副武器攻击动作
     */
    ACT_MP_ATTACK_CROUCH_SECONDARY = 602,
    /**
     * 多人游戏游泳副武器攻击动作
     */
    ACT_MP_ATTACK_SWIM_SECONDARY = 603,
    /**
     * 多人游戏空中移动副武器攻击动作
     */
    ACT_MP_ATTACK_AIRWALK_SECONDARY = 604,
    /**
     * 多人游戏站立换弹副武器动作
     */
    ACT_MP_RELOAD_STAND_SECONDARY = 605,
    /**
     * 多人游戏站立换弹循环副武器动作
     */
    ACT_MP_RELOAD_STAND_SECONDARY_LOOP = 606,
    /**
     * 多人游戏站立换弹结束副武器动作
     */
    ACT_MP_RELOAD_STAND_SECONDARY_END = 607,
    /**
     * 多人游戏蹲伏换弹副武器动作
     */
    ACT_MP_RELOAD_CROUCH_SECONDARY = 608,
    /**
     * 多人游戏蹲伏换弹循环副武器动作
     */
    ACT_MP_RELOAD_CROUCH_SECONDARY_LOOP = 609,
    /**
     * 多人游戏蹲伏换弹结束副武器动作
     */
    ACT_MP_RELOAD_CROUCH_SECONDARY_END = 610,
    /**
     * 多人游戏游泳换弹副武器动作
     */
    ACT_MP_RELOAD_SWIM_SECONDARY = 611,
    /**
     * 多人游戏游泳换弹循环副武器动作
     */
    ACT_MP_RELOAD_SWIM_SECONDARY_LOOP = 612,
    /**
     * 多人游戏游泳换弹结束副武器动作
     */
    ACT_MP_RELOAD_SWIM_SECONDARY_END = 613,
    /**
     * 多人游戏空中移动换弹副武器动作
     */
    ACT_MP_RELOAD_AIRWALK_SECONDARY = 614,
    /**
     * 多人游戏空中移动换弹循环副武器动作
     */
    ACT_MP_RELOAD_AIRWALK_SECONDARY_LOOP = 615,
    /**
     * 多人游戏空中移动换弹结束副武器动作
     */
    ACT_MP_RELOAD_AIRWALK_SECONDARY_END = 616,
    /**
     * 多人游戏站立投掷手榴弹副武器动作
     */
    ACT_MP_ATTACK_STAND_GRENADE_SECONDARY = 617,
    /**
     * 多人游戏蹲伏投掷手榴弹副武器动作
     */
    ACT_MP_ATTACK_CROUCH_GRENADE_SECONDARY = 618,
    /**
     * 多人游戏游泳投掷手榴弹副武器动作
     */
    ACT_MP_ATTACK_SWIM_GRENADE_SECONDARY = 619,
    /**
     * 多人游戏空中移动投掷手榴弹副武器动作
     */
    ACT_MP_ATTACK_AIRWALK_GRENADE_SECONDARY = 620,
    /**
     * 多人游戏站立近战待机动作
     */
    ACT_MP_STAND_MELEE = 621,
    /**
     * 多人游戏蹲伏近战待机动作
     */
    ACT_MP_CROUCH_MELEE = 622,
    /**
     * 多人游戏跑步近战动作
     */
    ACT_MP_RUN_MELEE = 623,
    /**
     * 多人游戏走路近战动作
     */
    ACT_MP_WALK_MELEE = 624,
    /**
     * 多人游戏空中移动近战动作
     */
    ACT_MP_AIRWALK_MELEE = 625,
    /**
     * 多人游戏蹲伏走路近战动作
     */
    ACT_MP_CROUCHWALK_MELEE = 626,
    /**
     * 多人游戏跳跃近战动作
     */
    ACT_MP_JUMP_MELEE = 627,
    /**
     * 多人游戏开始跳跃近战动作
     */
    ACT_MP_JUMP_START_MELEE = 628,
    /**
     * 多人游戏空中漂浮近战动作
     */
    ACT_MP_JUMP_FLOAT_MELEE = 629,
    /**
     * 多人游戏着陆近战动作
     */
    ACT_MP_JUMP_LAND_MELEE = 630,
    /**
     * 多人游戏游泳近战动作
     */
    ACT_MP_SWIM_MELEE = 631,
    /**
     * 多人游戏站立近战攻击动作
     */
    ACT_MP_ATTACK_STAND_MELEE = 632,
    /**
     * 多人游戏站立副近战攻击动作
     */
    ACT_MP_ATTACK_STAND_MELEE_SECONDARY = 633,
    /**
     * 多人游戏蹲伏近战攻击动作
     */
    ACT_MP_ATTACK_CROUCH_MELEE = 634,
    /**
     * 多人游戏蹲伏副近战攻击动作
     */
    ACT_MP_ATTACK_CROUCH_MELEE_SECONDARY = 635,
    /**
     * 多人游戏游泳近战攻击动作
     */
    ACT_MP_ATTACK_SWIM_MELEE = 636,
    /**
     * 多人游戏空中移动近战攻击动作
     */
    ACT_MP_ATTACK_AIRWALK_MELEE = 637,
    /**
     * 多人游戏站立投掷手榴弹近战动作
     */
    ACT_MP_ATTACK_STAND_GRENADE_MELEE = 638,
    /**
     * 多人游戏蹲伏投掷手榴弹近战动作
     */
    ACT_MP_ATTACK_CROUCH_GRENADE_MELEE = 639,
    /**
     * 多人游戏游泳投掷手榴弹近战动作
     */
    ACT_MP_ATTACK_SWIM_GRENADE_MELEE = 640,
    /**
     * 多人游戏空中移动投掷手榴弹近战动作
     */
    ACT_MP_ATTACK_AIRWALK_GRENADE_MELEE = 641,
    /**
     * 多人游戏站立物品1待机动作
     */
    ACT_MP_STAND_ITEM1 = 642,
    /**
     * 多人游戏蹲伏物品1待机动作
     */
    ACT_MP_CROUCH_ITEM1 = 643,
    /**
     * 多人游戏跑步物品1动作
     */
    ACT_MP_RUN_ITEM1 = 644,
    /**
     * 多人游戏走路物品1动作
     */
    ACT_MP_WALK_ITEM1 = 645,
    /**
     * 多人游戏空中移动物品1动作
     */
    ACT_MP_AIRWALK_ITEM1 = 646,
    /**
     * 多人游戏蹲伏走路物品1动作
     */
    ACT_MP_CROUCHWALK_ITEM1 = 647,
    /**
     * 多人游戏跳跃物品1动作
     */
    ACT_MP_JUMP_ITEM1 = 648,
    /**
     * 多人游戏开始跳跃物品1动作
     */
    ACT_MP_JUMP_START_ITEM1 = 649,
    /**
     * 多人游戏空中漂浮物品1动作
     */
    ACT_MP_JUMP_FLOAT_ITEM1 = 650,
    /**
     * 多人游戏着陆物品1动作
     */
    ACT_MP_JUMP_LAND_ITEM1 = 651,
    /**
     * 多人游戏游泳物品1动作
     */
    ACT_MP_SWIM_ITEM1 = 652,
    /**
     * 多人游戏站立物品1攻击动作
     */
    ACT_MP_ATTACK_STAND_ITEM1 = 653,
    /**
     * 多人游戏站立副物品1攻击动作
     */
    ACT_MP_ATTACK_STAND_ITEM1_SECONDARY = 654,
    /**
     * 多人游戏蹲伏物品1攻击动作
     */
    ACT_MP_ATTACK_CROUCH_ITEM1 = 655,
    /**
     * 多人游戏蹲伏副物品1攻击动作
     */
    ACT_MP_ATTACK_CROUCH_ITEM1_SECONDARY = 656,
    /**
     * 多人游戏游泳物品1攻击动作
     */
    ACT_MP_ATTACK_SWIM_ITEM1 = 657,
    /**
     * 多人游戏空中移动物品1攻击动作
     */
    ACT_MP_ATTACK_AIRWALK_ITEM1 = 658,
    /**
     * 多人游戏站立物品2待机动作
     */
    ACT_MP_STAND_ITEM2 = 659,
    /**
     * 多人游戏蹲伏物品2待机动作
     */
    ACT_MP_CROUCH_ITEM2 = 660,
    /**
     * 多人游戏跑步物品2动作
     */
    ACT_MP_RUN_ITEM2 = 661,
    /**
     * 多人游戏走路物品2动作
     */
    ACT_MP_WALK_ITEM2 = 662,
    /**
     * 多人游戏空中移动物品2动作
     */
    ACT_MP_AIRWALK_ITEM2 = 663,
    /**
     * 多人游戏蹲伏走路物品2动作
     */
    ACT_MP_CROUCHWALK_ITEM2 = 664,
    /**
     * 多人游戏跳跃物品2动作
     */
    ACT_MP_JUMP_ITEM2 = 665,
    /**
     * 多人游戏开始跳跃物品2动作
     */
    ACT_MP_JUMP_START_ITEM2 = 666,
    /**
     * 多人游戏空中漂浮物品2动作
     */
    ACT_MP_JUMP_FLOAT_ITEM2 = 667,
    /**
     * 多人游戏着陆物品2动作
     */
    ACT_MP_JUMP_LAND_ITEM2 = 668,
    /**
     * 多人游戏游泳物品2动作
     */
    ACT_MP_SWIM_ITEM2 = 669,
    /**
     * 多人游戏站立物品2攻击动作
     */
    ACT_MP_ATTACK_STAND_ITEM2 = 670,
    /**
     * 多人游戏站立副物品2攻击动作
     */
    ACT_MP_ATTACK_STAND_ITEM2_SECONDARY = 671,
    /**
     * 多人游戏蹲伏物品2攻击动作
     */
    ACT_MP_ATTACK_CROUCH_ITEM2 = 672,
    /**
     * 多人游戏蹲伏副物品2攻击动作
     */
    ACT_MP_ATTACK_CROUCH_ITEM2_SECONDARY = 673,
    /**
     * 多人游戏游泳物品2攻击动作
     */
    ACT_MP_ATTACK_SWIM_ITEM2 = 674,
    /**
     * 多人游戏空中移动物品2攻击动作
     */
    ACT_MP_ATTACK_AIRWALK_ITEM2 = 675,
    /**
     * 多人游戏惊吓动作
     */
    ACT_MP_GESTURE_FLINCH = 676,
    /**
     * 多人游戏主武器惊吓动作
     */
    ACT_MP_GESTURE_FLINCH_PRIMARY = 677,
    /**
     * 多人游戏副武器惊吓动作
     */
    ACT_MP_GESTURE_FLINCH_SECONDARY = 678,
    /**
     * 多人游戏近战武器惊吓动作
     */
    ACT_MP_GESTURE_FLINCH_MELEE = 679,
    /**
     * 多人游戏物品1惊吓动作
     */
    ACT_MP_GESTURE_FLINCH_ITEM1 = 680,
    /**
     * 多人游戏物品2惊吓动作
     */
    ACT_MP_GESTURE_FLINCH_ITEM2 = 681,
    /**
     * 多人游戏头部惊吓动作
     */
    ACT_MP_GESTURE_FLINCH_HEAD = 682,
    /**
     * 多人游戏胸部惊吓动作
     */
    ACT_MP_GESTURE_FLINCH_CHEST = 683,
    /**
     * 多人游戏腹部惊吓动作
     */
    ACT_MP_GESTURE_FLINCH_STOMACH = 684,
    /**
     * 多人游戏左臂惊吓动作
     */
    ACT_MP_GESTURE_FLINCH_LEFTARM = 685,
    /**
     * 多人游戏右臂惊吓动作
     */
    ACT_MP_GESTURE_FLINCH_RIGHTARM = 686,
    /**
     * 多人游戏左腿惊吓动作
     */
    ACT_MP_GESTURE_FLINCH_LEFTLEG = 687,
    /**
     * 多人游戏右腿惊吓动作
     */
    ACT_MP_GESTURE_FLINCH_RIGHTLEG = 688,
    /**
     * 多人游戏拉出手榴弹1动作
     */
    ACT_MP_GRENADE1_DRAW = 689,
    /**
     * 多人游戏手榴弹1待机动作
     */
    ACT_MP_GRENADE1_IDLE = 690,
    /**
     * 多人游戏手榴弹1攻击动作
     */
    ACT_MP_GRENADE1_ATTACK = 691,
    /**
     * 多人游戏拉出手榴弹2动作
     */
    ACT_MP_GRENADE2_DRAW = 692,
    /**
     * 多人游戏手榴弹2待机动作
     */
    ACT_MP_GRENADE2_IDLE = 693,
    /**
     * 多人游戏手榴弹2攻击动作
     */
    ACT_MP_GRENADE2_ATTACK = 694,
    /**
     * 多人游戏拉出主手榴弹1动作
     */
    ACT_MP_PRIMARY_GRENADE1_DRAW = 695,
    /**
     * 多人游戏主手榴弹1待机动作
     */
    ACT_MP_PRIMARY_GRENADE1_IDLE = 696,
    /**
     * 多人游戏主手榴弹1攻击动作
     */
    ACT_MP_PRIMARY_GRENADE1_ATTACK = 697,
    /**
     * 多人游戏拉出主手榴弹2动作
     */
    ACT_MP_PRIMARY_GRENADE2_DRAW = 698,
    /**
     * 多人游戏主手榴弹2待机动作
     */
    ACT_MP_PRIMARY_GRENADE2_IDLE = 699,
    /**
     * 多人游戏主手榴弹2攻击动作
     */
    ACT_MP_PRIMARY_GRENADE2_ATTACK = 700,
    /**
     * 多人游戏拉出副手榴弹1动作
     */
    ACT_MP_SECONDARY_GRENADE1_DRAW = 701,
    /**
     * 多人游戏副手榴弹1待机动作
     */
    ACT_MP_SECONDARY_GRENADE1_IDLE = 702,
    /**
     * 多人游戏副手榴弹1攻击动作
     */
    ACT_MP_SECONDARY_GRENADE1_ATTACK = 703,
    /**
     * 多人游戏拉出副手榴弹2动作
     */
    ACT_MP_SECONDARY_GRENADE2_DRAW = 704,
    /**
     * 多人游戏副手榴弹2待机动作
     */
    ACT_MP_SECONDARY_GRENADE2_IDLE = 705,
    /**
     * 多人游戏副手榴弹2攻击动作
     */
    ACT_MP_SECONDARY_GRENADE2_ATTACK = 706,
    /**
     * 多人游戏拉出近战手榴弹1动作
     */
    ACT_MP_MELEE_GRENADE1_DRAW = 707,
    /**
     * 多人游戏近战手榴弹1待机动作
     */
    ACT_MP_MELEE_GRENADE1_IDLE = 708,
    /**
     * 多人游戏近战手榴弹1攻击动作
     */
    ACT_MP_MELEE_GRENADE1_ATTACK = 709,
    /**
     * 多人游戏拉出近战手榴弹2动作
     */
    ACT_MP_MELEE_GRENADE2_DRAW = 710,
    /**
     * 多人游戏近战手榴弹2待机动作
     */
    ACT_MP_MELEE_GRENADE2_IDLE = 711,
    /**
     * 多人游戏近战手榴弹2攻击动作
     */
    ACT_MP_MELEE_GRENADE2_ATTACK = 712,
    /**
     * 多人游戏拉出物品1手榴弹1动作
     */
    ACT_MP_ITEM1_GRENADE1_DRAW = 713,
    /**
     * 多人游戏物品1手榴弹1待机动作
     */
    ACT_MP_ITEM1_GRENADE1_IDLE = 714,
    /**
     * 多人游戏物品1手榴弹1攻击动作
     */
    ACT_MP_ITEM1_GRENADE1_ATTACK = 715,
    /**
     * 多人游戏拉出物品1手榴弹2动作
     */
    ACT_MP_ITEM1_GRENADE2_DRAW = 716,
    /**
     * 多人游戏物品1手榴弹2待机动作
     */
    ACT_MP_ITEM1_GRENADE2_IDLE = 717,
    /**
     * 多人游戏物品1手榴弹2攻击动作
     */
    ACT_MP_ITEM1_GRENADE2_ATTACK = 718,
    /**
     * 多人游戏拉出物品2手榴弹1动作
     */
    ACT_MP_ITEM2_GRENADE1_DRAW = 719,
    /**
     * 多人游戏物品2手榴弹1待机动作
     */
    ACT_MP_ITEM2_GRENADE1_IDLE = 720,
    /**
     * 多人游戏物品2手榴弹1攻击动作
     */
    ACT_MP_ITEM2_GRENADE1_ATTACK = 721,
    /**
     * 多人游戏拉出物品2手榴弹2动作
     */
    ACT_MP_ITEM2_GRENADE2_DRAW = 722,
    /**
     * 多人游戏物品2手榴弹2待机动作
     */
    ACT_MP_ITEM2_GRENADE2_IDLE = 723,
    /**
     * 多人游戏物品2手榴弹2攻击动作
     */
    ACT_MP_ITEM2_GRENADE2_ATTACK = 724,
    /**
     * 多人游戏站立建筑待机动作
     */
    ACT_MP_STAND_BUILDING = 725,
    /**
     * 多人游戏蹲伏建筑待机动作
     */
    ACT_MP_CROUCH_BUILDING = 726,
    /**
     * 多人游戏跑步建筑动作
     */
    ACT_MP_RUN_BUILDING = 727,
    /**
     * 多人游戏走路建筑动作
     */
    ACT_MP_WALK_BUILDING = 728,
    /**
     * 多人游戏空中移动建筑动作
     */
    ACT_MP_AIRWALK_BUILDING = 729,
    /**
     * 多人游戏蹲伏走路建筑动作
     */
    ACT_MP_CROUCHWALK_BUILDING = 730,
    /**
     * 多人游戏跳跃建筑动作
     */
    ACT_MP_JUMP_BUILDING = 731,
    /**
     * 多人游戏开始跳跃建筑动作
     */
    ACT_MP_JUMP_START_BUILDING = 732,
    /**
     * 多人游戏空中漂浮建筑动作
     */
    ACT_MP_JUMP_FLOAT_BUILDING = 733,
    /**
     * 多人游戏着陆建筑动作
     */
    ACT_MP_JUMP_LAND_BUILDING = 734,
    /**
     * 多人游戏游泳建筑动作
     */
    ACT_MP_SWIM_BUILDING = 735,
    /**
     * 多人游戏站立建筑攻击动作
     */
    ACT_MP_ATTACK_STAND_BUILDING = 736,
    /**
     * 多人游戏蹲伏建筑攻击动作
     */
    ACT_MP_ATTACK_CROUCH_BUILDING = 737,
    /**
     * 多人游戏游泳建筑攻击动作
     */
    ACT_MP_ATTACK_SWIM_BUILDING = 738,
    /**
     * 多人游戏空中移动建筑攻击动作
     */
    ACT_MP_ATTACK_AIRWALK_BUILDING = 739,
    /**
     * 多人游戏站立手榴弹建筑攻击动作
     */
    ACT_MP_ATTACK_STAND_GRENADE_BUILDING = 740,
    /**
     * 多人游戏蹲伏手榴弹建筑攻击动作
     */
    ACT_MP_ATTACK_CROUCH_GRENADE_BUILDING = 741,
    /**
     * 多人游戏游泳手榴弹建筑攻击动作
     */
    ACT_MP_ATTACK_SWIM_GRENADE_BUILDING = 742,
    /**
     * 多人游戏空中移动手榴弹建筑攻击动作
     */
    ACT_MP_ATTACK_AIRWALK_GRENADE_BUILDING = 743,
    /**
     * 多人游戏站立PDA待机动作
     */
    ACT_MP_STAND_PDA = 744,
    /**
     * 多人游戏蹲伏PDA待机动作
     */
    ACT_MP_CROUCH_PDA = 745,
    /**
     * 多人游戏跑步PDA动作
     */
    ACT_MP_RUN_PDA = 746,
    /**
     * 多人游戏走路PDA动作
     */
    ACT_MP_WALK_PDA = 747,
    /**
     * 多人游戏空中移动PDA动作
     */
    ACT_MP_AIRWALK_PDA = 748,
    /**
     * 多人游戏蹲伏走路PDA动作
     */
    ACT_MP_CROUCHWALK_PDA = 749,
    /**
     * 多人游戏跳跃PDA动作
     */
    ACT_MP_JUMP_PDA = 750,
    /**
     * 多人游戏开始跳跃PDA动作
     */
    ACT_MP_JUMP_START_PDA = 751,
    /**
     * 多人游戏空中漂浮PDA动作
     */
    ACT_MP_JUMP_FLOAT_PDA = 752,
    /**
     * 多人游戏着陆PDA动作
     */
    ACT_MP_JUMP_LAND_PDA = 753,
    /**
     * 多人游戏游泳PDA动作
     */
    ACT_MP_SWIM_PDA = 754,
    /**
     * 多人游戏站立PDA攻击动作
     */
    ACT_MP_ATTACK_STAND_PDA = 755,
    /**
     * 多人游戏游泳PDA攻击动作
     */
    ACT_MP_ATTACK_SWIM_PDA = 756,
    /**
     * 多人游戏语音指令“手到嘴”动作
     */
    ACT_MP_GESTURE_VC_HANDMOUTH = 757,
    /**
     * 多人游戏语音指令“指点”动作
     */
    ACT_MP_GESTURE_VC_FINGERPOINT = 758,
    /**
     * 多人游戏语音指令“握拳挥舞”动作
     */
    ACT_MP_GESTURE_VC_FISTPUMP = 759,
    /**
     * 多人游戏语音指令“竖大拇指”动作
     */
    ACT_MP_GESTURE_VC_THUMBSUP = 760,
    /**
     * 多人游戏语音指令“点头同意”动作
     */
    ACT_MP_GESTURE_VC_NODYES = 761,
    /**
     * 多人游戏语音指令“摇头否定”动作
     */
    ACT_MP_GESTURE_VC_NODNO = 762,
    /**
     * 多人游戏主武器“手到嘴”动作
     */
    ACT_MP_GESTURE_VC_HANDMOUTH_PRIMARY = 763,
    /**
     * 多人游戏主武器“指点”动作
     */
    ACT_MP_GESTURE_VC_FINGERPOINT_PRIMARY = 764,
    /**
     * 多人游戏主武器“握拳挥舞”动作
     */
    ACT_MP_GESTURE_VC_FISTPUMP_PRIMARY = 765,
    /**
     * 多人游戏主武器“竖大拇指”动作
     */
    ACT_MP_GESTURE_VC_THUMBSUP_PRIMARY = 766,
    /**
     * 多人游戏主武器“点头同意”动作
     */
    ACT_MP_GESTURE_VC_NODYES_PRIMARY = 767,
    /**
     * 多人游戏主武器“摇头否定”动作
     */
    ACT_MP_GESTURE_VC_NODNO_PRIMARY = 768,
    /**
     * 多人游戏副武器“手到嘴”动作
     */
    ACT_MP_GESTURE_VC_HANDMOUTH_SECONDARY = 769,
    /**
     * 多人游戏副武器“指点”动作
     */
    ACT_MP_GESTURE_VC_FINGERPOINT_SECONDARY = 770,
    /**
     * 多人游戏副武器“握拳挥舞”动作
     */
    ACT_MP_GESTURE_VC_FISTPUMP_SECONDARY = 771,
    /**
     * 多人游戏副武器“竖大拇指”动作
     */
    ACT_MP_GESTURE_VC_THUMBSUP_SECONDARY = 772,
    /**
     * 多人游戏副武器“点头同意”动作
     */
    ACT_MP_GESTURE_VC_NODYES_SECONDARY = 773,
    /**
     * 多人游戏副武器“摇头否定”动作
     */
    ACT_MP_GESTURE_VC_NODNO_SECONDARY = 774,
    /**
     * 多人游戏近战武器“手到嘴”动作
     */
    ACT_MP_GESTURE_VC_HANDMOUTH_MELEE = 775,
    /**
     * 多人游戏近战武器“指点”动作
     */
    ACT_MP_GESTURE_VC_FINGERPOINT_MELEE = 776,
    /**
     * 多人游戏近战武器“握拳挥舞”动作
     */
    ACT_MP_GESTURE_VC_FISTPUMP_MELEE = 777,
    /**
     * 多人游戏近战武器“竖大拇指”动作
     */
    ACT_MP_GESTURE_VC_THUMBSUP_MELEE = 778,
    /**
     * 多人游戏近战武器“点头同意”动作
     */
    ACT_MP_GESTURE_VC_NODYES_MELEE = 779,
    /**
     * 多人游戏近战武器“摇头否定”动作
     */
    ACT_MP_GESTURE_VC_NODNO_MELEE = 780,
    /**
     * 多人语音指令手势：手放嘴边（物品1）
     */
    ACT_MP_GESTURE_VC_HANDMOUTH_ITEM1 = 781,
    /**
     * 多人语音指令手势：指点（物品1）
     */
    ACT_MP_GESTURE_VC_FINGERPOINT_ITEM1 = 782,
    /**
     * 多人语音指令手势：握拳庆祝（物品1）
     */
    ACT_MP_GESTURE_VC_FISTPUMP_ITEM1 = 783,
    /**
     * 多人语音指令手势：竖起大拇指（物品1）
     */
    ACT_MP_GESTURE_VC_THUMBSUP_ITEM1 = 784,
    /**
     * 多人语音指令手势：点头表示同意（物品1）
     */
    ACT_MP_GESTURE_VC_NODYES_ITEM1 = 785,
    /**
     * 多人语音指令手势：摇头表示否定（物品1）
     */
    ACT_MP_GESTURE_VC_NODNO_ITEM1 = 786,
    /**
     * 多人语音指令手势：手放嘴边（物品2）
     */
    ACT_MP_GESTURE_VC_HANDMOUTH_ITEM2 = 787,
    /**
     * 多人语音指令手势：指点（物品2）
     */
    ACT_MP_GESTURE_VC_FINGERPOINT_ITEM2 = 788,
    /**
     * 多人语音指令手势：握拳庆祝（物品2）
     */
    ACT_MP_GESTURE_VC_FISTPUMP_ITEM2 = 789,
    /**
     * 多人语音指令手势：竖起大拇指（物品2）
     */
    ACT_MP_GESTURE_VC_THUMBSUP_ITEM2 = 790,
    /**
     * 多人语音指令手势：点头表示同意（物品2）
     */
    ACT_MP_GESTURE_VC_NODYES_ITEM2 = 791,
    /**
     * 多人语音指令手势：摇头表示否定（物品2）
     */
    ACT_MP_GESTURE_VC_NODNO_ITEM2 = 792,
    /**
     * 多人语音指令手势：手放嘴边（建筑物）
     */
    ACT_MP_GESTURE_VC_HANDMOUTH_BUILDING = 793,
    /**
     * 多人语音指令手势：指点（建筑物）
     */
    ACT_MP_GESTURE_VC_FINGERPOINT_BUILDING = 794,
    /**
     * 多人语音指令手势：握拳庆祝（建筑物）
     */
    ACT_MP_GESTURE_VC_FISTPUMP_BUILDING = 795,
    /**
     * 多人语音指令手势：竖起大拇指（建筑物）
     */
    ACT_MP_GESTURE_VC_THUMBSUP_BUILDING = 796,
    /**
     * 多人语音指令手势：点头表示同意（建筑物）
     */
    ACT_MP_GESTURE_VC_NODYES_BUILDING = 797,
    /**
     * 多人语音指令手势：摇头表示否定（建筑物）
     */
    ACT_MP_GESTURE_VC_NODNO_BUILDING = 798,
    /**
     * 多人语音指令手势：手放嘴边（PDA设备）
     */
    ACT_MP_GESTURE_VC_HANDMOUTH_PDA = 799,
    /**
     * 多人语音指令手势：指点（PDA设备）
     */
    ACT_MP_GESTURE_VC_FINGERPOINT_PDA = 800,
    /**
     * 多人语音指令手势：握拳庆祝（PDA设备）
     */
    ACT_MP_GESTURE_VC_FISTPUMP_PDA = 801,
    /**
     * 多人语音指令手势：竖起大拇指（PDA设备）
     */
    ACT_MP_GESTURE_VC_THUMBSUP_PDA = 802,
    /**
     * 多人语音指令手势：点头表示同意（PDA设备）
     */
    ACT_MP_GESTURE_VC_NODYES_PDA = 803,
    /**
     * 多人语音指令手势：摇头表示否定（PDA设备）
     */
    ACT_MP_GESTURE_VC_NODNO_PDA = 804,
    /**
     * 第一人称模型不可用状态
     */
    ACT_VM_UNUSABLE = 805,
    /**
     * 第一人称模型从不可用切换到可用
     */
    ACT_VM_UNUSABLE_TO_USABLE = 806,
    /**
     * 第一人称模型从可用切换到不可用
     */
    ACT_VM_USABLE_TO_UNUSABLE = 807,
    /**
     * 主武器第一人称模型拔出动作
     */
    ACT_PRIMARY_VM_DRAW = 808,
    /**
     * 主武器第一人称模型收起动作
     */
    ACT_PRIMARY_VM_HOLSTER = 809,
    /**
     * 主武器第一人称模型待机动作
     */
    ACT_PRIMARY_VM_IDLE = 810,
    /**
     * 主武器第一人称模型后拉动作
     */
    ACT_PRIMARY_VM_PULLBACK = 811,
    /**
     * 主武器第一人称模型主攻击动作
     */
    ACT_PRIMARY_VM_PRIMARYATTACK = 812,
    /**
     * 主武器第一人称模型副攻击动作
     */
    ACT_PRIMARY_VM_SECONDARYATTACK = 813,
    /**
     * 主武器第一人称模型装弹动作
     */
    ACT_PRIMARY_VM_RELOAD = 814,
    /**
     * 主武器第一人称模型空弹射击动作
     */
    ACT_PRIMARY_VM_DRYFIRE = 815,
    /**
     * 主武器第一人称模型从待机切换到放下
     */
    ACT_PRIMARY_VM_IDLE_TO_LOWERED = 816,
    /**
     * 主武器第一人称模型放下待机
     */
    ACT_PRIMARY_VM_IDLE_LOWERED = 817,
    /**
     * 主武器第一人称模型从放下切换到待机
     */
    ACT_PRIMARY_VM_LOWERED_TO_IDLE = 818,
    /**
     * 副武器第一人称模型拔出动作
     */
    ACT_SECONDARY_VM_DRAW = 819,
    /**
     * 副武器第一人称模型收起动作
     */
    ACT_SECONDARY_VM_HOLSTER = 820,
    /**
     * 副武器第一人称模型待机动作
     */
    ACT_SECONDARY_VM_IDLE = 821,
    /**
     * 副武器第一人称模型后拉动作
     */
    ACT_SECONDARY_VM_PULLBACK = 822,
    /**
     * 副武器第一人称模型主攻击动作
     */
    ACT_SECONDARY_VM_PRIMARYATTACK = 823,
    /**
     * 副武器第一人称模型副攻击动作
     */
    ACT_SECONDARY_VM_SECONDARYATTACK = 824,
    /**
     * 副武器第一人称模型装弹动作
     */
    ACT_SECONDARY_VM_RELOAD = 825,
    /**
     * 副武器第一人称模型空弹射击动作
     */
    ACT_SECONDARY_VM_DRYFIRE = 826,
    /**
     * 副武器第一人称模型从待机切换到放下
     */
    ACT_SECONDARY_VM_IDLE_TO_LOWERED = 827,
    /**
     * 副武器第一人称模型放下待机
     */
    ACT_SECONDARY_VM_IDLE_LOWERED = 828,
    /**
     * 副武器第一人称模型从放下切换到待机
     */
    ACT_SECONDARY_VM_LOWERED_TO_IDLE = 829,
    /**
     * 近战武器第一人称模型拔出动作
     */
    ACT_MELEE_VM_DRAW = 830,
    /**
     * 近战武器第一人称模型收起动作
     */
    ACT_MELEE_VM_HOLSTER = 831,
    /**
     * 近战武器第一人称模型待机动作
     */
    ACT_MELEE_VM_IDLE = 832,
    /**
     * 近战武器第一人称模型后拉动作
     */
    ACT_MELEE_VM_PULLBACK = 833,
    /**
     * 近战武器第一人称模型主攻击动作
     */
    ACT_MELEE_VM_PRIMARYATTACK = 834,
    /**
     * 近战武器第一人称模型副攻击动作
     */
    ACT_MELEE_VM_SECONDARYATTACK = 835,
    /**
     * 近战武器装弹动作（罕见）
     */
    ACT_MELEE_VM_RELOAD = 836,
    /**
     * 近战武器空弹射击动作
     */
    ACT_MELEE_VM_DRYFIRE = 837,
    /**
     * 近战武器待机切换到放下
     */
    ACT_MELEE_VM_IDLE_TO_LOWERED = 838,
    /**
     * 近战武器放下待机
     */
    ACT_MELEE_VM_IDLE_LOWERED = 839,
    /**
     * 近战武器从放下切换到待机
     */
    ACT_MELEE_VM_LOWERED_TO_IDLE = 840,
    /**
     * PDA设备第一人称模型拔出动作
     */
    ACT_PDA_VM_DRAW = 841,
    /**
     * PDA设备第一人称模型收起动作
     */
    ACT_PDA_VM_HOLSTER = 842,
    /**
     * PDA设备第一人称模型待机动作
     */
    ACT_PDA_VM_IDLE = 843,
    /**
     * PDA设备第一人称模型后拉动作
     */
    ACT_PDA_VM_PULLBACK = 844,
    /**
     * PDA设备主攻击动作
     */
    ACT_PDA_VM_PRIMARYATTACK = 845,
    /**
     * PDA设备副攻击动作
     */
    ACT_PDA_VM_SECONDARYATTACK = 846,
    /**
     * PDA设备装弹动作
     */
    ACT_PDA_VM_RELOAD = 847,
    /**
     * PDA设备空弹射击动作
     */
    ACT_PDA_VM_DRYFIRE = 848,
    /**
     * PDA待机切换到放下
     */
    ACT_PDA_VM_IDLE_TO_LOWERED = 849,
    /**
     * PDA放下待机
     */
    ACT_PDA_VM_IDLE_LOWERED = 850,
    /**
     * PDA从放下切换到待机
     */
    ACT_PDA_VM_LOWERED_TO_IDLE = 851,
    /**
     * 物品1第一人称模型拔出动作
     */
    ACT_ITEM1_VM_DRAW = 852,
    /**
     * 物品1第一人称模型收起动作
     */
    ACT_ITEM1_VM_HOLSTER = 853,
    /**
     * 物品1第一人称模型待机动作
     */
    ACT_ITEM1_VM_IDLE = 854,
    /**
     * 物品1第一人称模型后拉动作
     */
    ACT_ITEM1_VM_PULLBACK = 855,
    /**
     * 物品1主攻击动作
     */
    ACT_ITEM1_VM_PRIMARYATTACK = 856,
    /**
     * 物品1副攻击动作
     */
    ACT_ITEM1_VM_SECONDARYATTACK = 857,
    /**
     * 物品1装弹动作
     */
    ACT_ITEM1_VM_RELOAD = 858,
    /**
     * 物品1空弹射击动作
     */
    ACT_ITEM1_VM_DRYFIRE = 859,
    /**
     * 物品1待机切换到放下
     */
    ACT_ITEM1_VM_IDLE_TO_LOWERED = 860,
    /**
     * 物品1放下待机
     */
    ACT_ITEM1_VM_IDLE_LOWERED = 861,
    /**
     * 物品1从放下切换到待机
     */
    ACT_ITEM1_VM_LOWERED_TO_IDLE = 862,
    /**
     * 物品2第一人称模型拔出动作
     */
    ACT_ITEM2_VM_DRAW = 863,
    /**
     * 物品2第一人称模型收起动作
     */
    ACT_ITEM2_VM_HOLSTER = 864,
    /**
     * 物品2第一人称模型待机动作
     */
    ACT_ITEM2_VM_IDLE = 865,
    /**
     * 物品2第一人称模型后拉动作
     */
    ACT_ITEM2_VM_PULLBACK = 866,
    /**
     * 物品2主攻击动作
     */
    ACT_ITEM2_VM_PRIMARYATTACK = 867,
    /**
     * 物品2副攻击动作
     */
    ACT_ITEM2_VM_SECONDARYATTACK = 868,
    /**
     * 物品2装弹动作
     */
    ACT_ITEM2_VM_RELOAD = 869,
    /**
     * 物品2空弹射击动作
     */
    ACT_ITEM2_VM_DRYFIRE = 870,
    /**
     * 物品2待机切换到放下
     */
    ACT_ITEM2_VM_IDLE_TO_LOWERED = 871,
    /**
     * 物品2放下待机
     */
    ACT_ITEM2_VM_IDLE_LOWERED = 872,
    /**
     * 物品2从放下切换到待机
     */
    ACT_ITEM2_VM_LOWERED_TO_IDLE = 873,
    /**
     * 装弹成功
     */
    ACT_RELOAD_SUCCEED = 874,
    /**
     * 装弹失败
     */
    ACT_RELOAD_FAIL = 875,
    /**
     * 走路时瞄准自动枪
     */
    ACT_WALK_AIM_AUTOGUN = 876,
    /**
     * 跑步时瞄准自动枪
     */
    ACT_RUN_AIM_AUTOGUN = 877,
    /**
     * 持自动枪待机
     */
    ACT_IDLE_AUTOGUN = 878,
    /**
     * 瞄准自动枪待机
     */
    ACT_IDLE_AIM_AUTOGUN = 879,
    /**
     * 自动枪装弹
     */
    ACT_RELOAD_AUTOGUN = 880,
    /**
     * 蹲伏持自动枪待机
     */
    ACT_CROUCH_IDLE_AUTOGUN = 881,
    /**
     * 自动枪远程攻击动作
     */
    ACT_RANGE_ATTACK_AUTOGUN = 882,
    /**
     * 自动枪跳跃动作
     */
    ACT_JUMP_AUTOGUN = 883,
    /**
     * 手枪瞄准时的待机动作
     */
    ACT_IDLE_AIM_PISTOL = 884,
    /**
     * 双武器瞄准时的行走动作
     */
    ACT_WALK_AIM_DUAL = 885,
    /**
     * 双武器瞄准时的奔跑动作
     */
    ACT_RUN_AIM_DUAL = 886,
    /**
     * 双武器待机动作
     */
    ACT_IDLE_DUAL = 887,
    /**
     * 双武器瞄准待机动作
     */
    ACT_IDLE_AIM_DUAL = 888,
    /**
     * 双武器换弹动作
     */
    ACT_RELOAD_DUAL = 889,
    /**
     * 双武器蹲伏待机动作
     */
    ACT_CROUCH_IDLE_DUAL = 890,
    /**
     * 双武器远程攻击动作
     */
    ACT_RANGE_ATTACK_DUAL = 891,
    /**
     * 双武器跳跃动作
     */
    ACT_JUMP_DUAL = 892,
    /**
     * 霰弹枪瞄准待机动作
     */
    ACT_IDLE_AIM_SHOTGUN = 893,
    /**
     * 霰弹枪蹲伏待机动作
     */
    ACT_CROUCH_IDLE_SHOTGUN = 894,
    /**
     * 步枪瞄准待机动作
     */
    ACT_IDLE_AIM_RIFLE = 895,
    /**
     * 步枪蹲伏待机动作
     */
    ACT_CROUCH_IDLE_RIFLE = 896,
    /**
     * 步枪远程攻击动作
     */
    ACT_RANGE_ATTACK_RIFLE = 897,
    /**
     * 睡眠动作
     */
    ACT_SLEEP = 898,
    /**
     * 醒来动作
     */
    ACT_WAKE = 899,
    /**
     * 向左快速甩头动作
     */
    ACT_FLICK_LEFT = 900,
    /**
     * 向左中间快速甩头动作
     */
    ACT_FLICK_LEFT_MIDDLE = 901,
    /**
     * 向右中间快速甩头动作
     */
    ACT_FLICK_RIGHT_MIDDLE = 902,
    /**
     * 向右快速甩头动作
     */
    ACT_FLICK_RIGHT = 903,
    /**
     * 旋转动作
     */
    ACT_SPINAROUND = 904,
    /**
     * 准备射击动作
     */
    ACT_PREP_TO_FIRE = 905,
    /**
     * 射击动作
     */
    ACT_FIRE = 906,
    /**
     * 射击后恢复动作
     */
    ACT_FIRE_RECOVER = 907,
    /**
     * 喷射动作
     */
    ACT_SPRAY = 908,
    /**
     * 准备爆炸动作
     */
    ACT_PREP_EXPLODE = 909,
    /**
     * 爆炸动作
     */
    ACT_EXPLODE = 910,
    /**
     * 脚本自定义动作0
     */
    ACT_SCRIPT_CUSTOM_0 = 911,
    /**
     * 脚本自定义动作1
     */
    ACT_SCRIPT_CUSTOM_1 = 912,
    /**
     * 脚本自定义动作2
     */
    ACT_SCRIPT_CUSTOM_2 = 913,
    /**
     * 脚本自定义动作3
     */
    ACT_SCRIPT_CUSTOM_3 = 914,
    /**
     * 脚本自定义动作4
     */
    ACT_SCRIPT_CUSTOM_4 = 915,
    /**
     * 脚本自定义动作5
     */
    ACT_SCRIPT_CUSTOM_5 = 916,
    /**
     * 脚本自定义动作6
     */
    ACT_SCRIPT_CUSTOM_6 = 917,
    /**
     * 脚本自定义动作7
     */
    ACT_SCRIPT_CUSTOM_7 = 918,
    /**
     * 脚本自定义动作8
     */
    ACT_SCRIPT_CUSTOM_8 = 919,
    /**
     * 脚本自定义动作9
     */
    ACT_SCRIPT_CUSTOM_9 = 920,
    /**
     * 脚本自定义动作10
     */
    ACT_SCRIPT_CUSTOM_10 = 921,
    /**
     * 脚本自定义动作11
     */
    ACT_SCRIPT_CUSTOM_11 = 922,
    /**
     * 脚本自定义动作12
     */
    ACT_SCRIPT_CUSTOM_12 = 923,
    /**
     * 脚本自定义动作13
     */
    ACT_SCRIPT_CUSTOM_13 = 924,
    /**
     * 脚本自定义动作14
     */
    ACT_SCRIPT_CUSTOM_14 = 925,
    /**
     * 脚本自定义动作15
     */
    ACT_SCRIPT_CUSTOM_15 = 926,
    /**
     * 脚本自定义动作16
     */
    ACT_SCRIPT_CUSTOM_16 = 927,
    /**
     * 脚本自定义动作17
     */
    ACT_SCRIPT_CUSTOM_17 = 928,
    /**
     * 脚本自定义动作18
     */
    ACT_SCRIPT_CUSTOM_18 = 929,
    /**
     * 脚本自定义动作19
     */
    ACT_SCRIPT_CUSTOM_19 = 930,
    /**
     * 脚本自定义动作20
     */
    ACT_SCRIPT_CUSTOM_20 = 931,
    /**
     * 脚本自定义动作21
     */
    ACT_SCRIPT_CUSTOM_21 = 932,
    /**
     * 脚本自定义动作22
     */
    ACT_SCRIPT_CUSTOM_22 = 933,
    /**
     * 脚本自定义动作23
     */
    ACT_SCRIPT_CUSTOM_23 = 934,
    /**
     * 脚本自定义动作24
     */
    ACT_SCRIPT_CUSTOM_24 = 935,
    /**
     * 脚本自定义动作25
     */
    ACT_SCRIPT_CUSTOM_25 = 936,
    /**
     * 脚本自定义动作26
     */
    ACT_SCRIPT_CUSTOM_26 = 937,
    /**
     * 脚本自定义动作27
     */
    ACT_SCRIPT_CUSTOM_27 = 938,
    /**
     * 脚本自定义动作28
     */
    ACT_SCRIPT_CUSTOM_28 = 939,
    /**
     * 脚本自定义动作29
     */
    ACT_SCRIPT_CUSTOM_29 = 940,
    /**
     * 脚本自定义动作30
     */
    ACT_SCRIPT_CUSTOM_30 = 941,
    /**
     * 脚本自定义动作31
     */
    ACT_SCRIPT_CUSTOM_31 = 942,
    /**
     * VR手枪最后一发动作
     */
    ACT_VR_PISTOL_LAST_SHOT = 943,
    /**
     * VR手枪滑动释放动作
     */
    ACT_VR_PISTOL_SLIDE_RELEASE = 944,
    /**
     * VR手枪弹夹拔出装弹动作
     */
    ACT_VR_PISTOL_CLIP_OUT_CHAMBERED = 945,
    /**
     * VR手枪弹夹滑回动作
     */
    ACT_VR_PISTOL_CLIP_OUT_SLIDE_BACK = 946,
    /**
     * VR手枪弹夹装入动作
     */
    ACT_VR_PISTOL_CLIP_IN_CHAMBERED = 947,
    /**
     * VR手枪弹夹滑入动作
     */
    ACT_VR_PISTOL_CLIP_IN_SLIDE_BACK = 948,
    /**
     * VR手枪滑动后待机动作
     */
    ACT_VR_PISTOL_IDLE_SLIDE_BACK = 949,
    /**
     * VR手枪滑动后待机弹夹准备动作
     */
    ACT_VR_PISTOL_IDLE_SLIDE_BACK_CLIP_READY = 950,
    /**
     * 布娃娃状态前面恢复动作
     */
    ACT_RAGDOLL_RECOVERY_FRONT = 951,
    /**
     * 布娃娃状态后面恢复动作
     */
    ACT_RAGDOLL_RECOVERY_BACK = 952,
    /**
     * 布娃娃状态左侧恢复动作
     */
    ACT_RAGDOLL_RECOVERY_LEFT = 953,
    /**
     * 布娃娃状态右侧恢复动作
     */
    ACT_RAGDOLL_RECOVERY_RIGHT = 954,
    /**
     * 重力手套抓取动作
     */
    ACT_GRABBITYGLOVES_GRAB = 955,
    /**
     * 重力手套释放动作
     */
    ACT_GRABBITYGLOVES_RELEASE = 956,
    /**
     * 重力手套抓取待机动作
     */
    ACT_GRABBITYGLOVES_GRAB_IDLE = 957,
    /**
     * 重力手套激活动作
     */
    ACT_GRABBITYGLOVES_ACTIVE = 958,
    /**
     * 重力手套激活待机动作
     */
    ACT_GRABBITYGLOVES_ACTIVE_IDLE = 959,
    /**
     * 重力手套停用动作
     */
    ACT_GRABBITYGLOVES_DEACTIVATE = 960,
    /**
     * 重力手套拉动作
     */
    ACT_GRABBITYGLOVES_PULL = 961,
    /**
     * 头蟹烟雾弹动作
     */
    ACT_HEADCRAB_SMOKE_BOMB = 962,
    /**
     * 头蟹吐口水动作
     */
    ACT_HEADCRAB_SPIT = 963,
    /**
     * 僵尸绊倒动作
     */
    ACT_ZOMBIE_TRIP = 964,
    /**
     * 僵尸扑击动作
     */
    ACT_ZOMBIE_LUNGE = 965,
    /**
     * 中立单位参考姿势
     */
    ACT_NEUTRAL_REF_POSE = 966,
    /**
     * 蚁狮向前疾走动作
     */
    ACT_ANTLION_SCUTTLE_FORWARD = 967,
    /**
     * 蚁狮向后疾走动作
     */
    ACT_ANTLION_SCUTTLE_BACK = 968,
    /**
     * 蚁狮向左疾走动作
     */
    ACT_ANTLION_SCUTTLE_LEFT = 969,
    /**
     * 蚁狮向右疾走动作
     */
    ACT_ANTLION_SCUTTLE_RIGHT = 970,
    /**
     * VR手枪空弹夹滑入动作
     */
    ACT_VR_PISTOL_EMPTY_CLIP_IN_SLIDE_BACK = 971,
    /**
     * VR霰弹枪待机动作
     */
    ACT_VR_SHOTGUN_IDLE = 972,
    /**
     * VR霰弹枪开仓动作
     */
    ACT_VR_SHOTGUN_OPEN_CHAMBER = 973,
    /**
     * VR霰弹枪换弹阶段1动作
     */
    ACT_VR_SHOTGUN_RELOAD_1 = 974,
    /**
     * VR霰弹枪换弹阶段2动作
     */
    ACT_VR_SHOTGUN_RELOAD_2 = 975,
    /**
     * VR霰弹枪换弹阶段3动作
     */
    ACT_VR_SHOTGUN_RELOAD_3 = 976,
    /**
     * VR霰弹枪关仓动作
     */
    ACT_VR_SHOTGUN_CLOSE_CHAMBER = 977,
    /**
     * VR霰弹枪扣动扳机动作
     */
    ACT_VR_SHOTGUN_TRIGGER_SQUEEZE = 978,
    /**
     * VR霰弹枪射击动作
     */
    ACT_VR_SHOTGUN_SHOOT = 979,
    /**
     * VR霰弹枪滑动后退动作
     */
    ACT_VR_SHOTGUN_SLIDE_BACK = 980,
    /**
     * VR霰弹枪滑动前进动作
     */
    ACT_VR_SHOTGUN_SLIDE_FORWARD = 981,
    /**
     * VR手枪长弹夹装填动作
     */
    ACT_VR_PISTOL_LONG_CLIP_IN_CHAMBERED = 982,
    /**
     * VR手枪长弹夹滑入动作
     */
    ACT_VR_PISTOL_LONG_CLIP_IN_SLIDE_BACK = 983,
    /**
     * VR手枪爆发模式切换动作
     */
    ACT_VR_PISTOL_BURST_TOGGLE = 984,
    /**
     * VR手枪低踢动作
     */
    ACT_VR_PISTOL_LOW_KICK = 985,
    /**
     * VR手枪爆发射击动作
     */
    ACT_VR_PISTOL_BURST_ATTACK = 986,
    /**
     * VR霰弹枪榴弹旋转动作
     */
    ACT_VR_SHOTGUN_GRENADE_TWIST = 987,
    /**
     * 站立死亡动作
     */
    ACT_DIE_STAND = 988,
    /**
     * 站立爆头死亡动作
     */
    ACT_DIE_STAND_HEADSHOT = 989,
    /**
     * 蹲伏死亡动作
     */
    ACT_DIE_CROUCH = 990,
    /**
     * 蹲伏爆头死亡动作
     */
    ACT_DIE_CROUCH_HEADSHOT = 991,
    /**
     * CSGO无效动作
     */
    ACT_CSGO_NULL = 992,
    /**
     * CSGO拆弹动作
     */
    ACT_CSGO_DEFUSE = 993,
    /**
     * CSGO使用拆弹工具拆弹动作
     */
    ACT_CSGO_DEFUSE_WITH_KIT = 994,
    /**
     * CSGO闪光弹反应动作
     */
    ACT_CSGO_FLASHBANG_REACTION = 995,
    /**
     * CSGO主武器射击动作
     */
    ACT_CSGO_FIRE_PRIMARY = 996,
    /**
     * CSGO主武器射击动作1
     */
    ACT_CSGO_FIRE_PRIMARY_OPT_1 = 997,
    /**
     * CSGO主武器射击动作2
     */
    ACT_CSGO_FIRE_PRIMARY_OPT_2 = 998,
    /**
     * CSGO副武器射击动作
     */
    ACT_CSGO_FIRE_SECONDARY = 999,
    /**
     * CSGO次级射击动画选项1
     */
    ACT_CSGO_FIRE_SECONDARY_OPT_1 = 1000,
    /**
     * CSGO次级射击动画选项2
     */
    ACT_CSGO_FIRE_SECONDARY_OPT_2 = 1001,
    /**
     * CSGO装填动作
     */
    ACT_CSGO_RELOAD = 1002,
    /**
     * CSGO装填开始动作
     */
    ACT_CSGO_RELOAD_START = 1003,
    /**
     * CSGO装填循环动作
     */
    ACT_CSGO_RELOAD_LOOP = 1004,
    /**
     * CSGO装填结束动作
     */
    ACT_CSGO_RELOAD_END = 1005,
    /**
     * CSGO操作动作
     */
    ACT_CSGO_OPERATE = 1006,
    /**
     * CSGO部署动作
     */
    ACT_CSGO_DEPLOY = 1007,
    /**
     * CSGO接住动作
     */
    ACT_CSGO_CATCH = 1008,
    /**
     * CSGO消音器拆卸动作
     */
    ACT_CSGO_SILENCER_DETACH = 1009,
    /**
     * CSGO消音器安装动作
     */
    ACT_CSGO_SILENCER_ATTACH = 1010,
    /**
     * CSGO抽搐动作动作
     */
    ACT_CSGO_TWITCH = 1011,
    /**
     * CSGO抽搐（购买区域）动作
     */
    ACT_CSGO_TWITCH_BUYZONE = 1012,
    /**
     * CSGO安放炸弹动作
     */
    ACT_CSGO_PLANT_BOMB = 1013,
    /**
     * CSGO空闲转身平衡调整动作
     */
    ACT_CSGO_IDLE_TURN_BALANCEADJUST = 1014,
    /**
     * CSGO停止移动后的空闲调整动作
     */
    ACT_CSGO_IDLE_ADJUST_STOPPEDMOVING = 1015,
    /**
     * CSGO存活循环动作
     */
    ACT_CSGO_ALIVE_LOOP = 1016,
    /**
     * CSGO震动/闪避动作
     */
    ACT_CSGO_FLINCH = 1017,
    /**
     * CSGO头部震动动作
     */
    ACT_CSGO_FLINCH_HEAD = 1018,
    /**
     * CSGO燃烧瓶震动动作
     */
    ACT_CSGO_FLINCH_MOLOTOV = 1019,
    /**
     * CSGO跳跃动作
     */
    ACT_CSGO_JUMP = 1020,
    /**
     * CSGO下落动作
     */
    ACT_CSGO_FALL = 1021,
    /**
     * CSGO爬梯动作
     */
    ACT_CSGO_CLIMB_LADDER = 1022,
    /**
     * CSGO轻落地动作
     */
    ACT_CSGO_LAND_LIGHT = 1023,
    /**
     * CSGO重落地动作
     */
    ACT_CSGO_LAND_HEAVY = 1024,
    /**
     * CSGO梯顶下梯动作
     */
    ACT_CSGO_EXIT_LADDER_TOP = 1025,
    /**
     * CSGO梯底下梯动作
     */
    ACT_CSGO_EXIT_LADDER_BOTTOM = 1026,
    /**
     * CSGO降落伞动作
     */
    ACT_CSGO_PARACHUTE = 1027,
    /**
     * CSGO嘲讽动作动作
     */
    ACT_CSGO_TAUNT = 1028,
    /**
     * DOTA空闲动作
     */
    ACT_DOTA_IDLE = 1500,
    /**
     * DOTA稀有空闲动作
     */
    ACT_DOTA_IDLE_RARE = 1501,
    /**
     * DOTA跑步动作
     */
    ACT_DOTA_RUN = 1502,
    /**
     * DOTA攻击动作
     */
    ACT_DOTA_ATTACK = 1503,
    /**
     * DOTA次级攻击动作
     */
    ACT_DOTA_ATTACK2 = 1504,
    /**
     * DOTA攻击事件动作
     */
    ACT_DOTA_ATTACK_EVENT = 1505,
    /**
     * DOTA死亡动作
     */
    ACT_DOTA_DIE = 1506,
    /**
     * DOTA震动动作
     */
    ACT_DOTA_FLINCH = 1507,
    /**
     * DOTA挥舞动作
     */
    ACT_DOTA_FLAIL = 1508,
    /**
     * DOTA受控动作
     */
    ACT_DOTA_DISABLED = 1509,
    /**
     * DOTA施法1动作
     */
    ACT_DOTA_CAST_ABILITY_1 = 1510,
    /**
     * DOTA施法2动作
     */
    ACT_DOTA_CAST_ABILITY_2 = 1511,
    /**
     * DOTA施法3动作
     */
    ACT_DOTA_CAST_ABILITY_3 = 1512,
    /**
     * DOTA施法4动作
     */
    ACT_DOTA_CAST_ABILITY_4 = 1513,
    /**
     * DOTA施法5动作
     */
    ACT_DOTA_CAST_ABILITY_5 = 1514,
    /**
     * DOTA施法6动作
     */
    ACT_DOTA_CAST_ABILITY_6 = 1515,
    /**
     * DOTA覆盖施法1动作
     */
    ACT_DOTA_OVERRIDE_ABILITY_1 = 1516,
    /**
     * DOTA覆盖施法2动作
     */
    ACT_DOTA_OVERRIDE_ABILITY_2 = 1517,
    /**
     * DOTA覆盖施法3动作
     */
    ACT_DOTA_OVERRIDE_ABILITY_3 = 1518,
    /**
     * DOTA覆盖施法4动作
     */
    ACT_DOTA_OVERRIDE_ABILITY_4 = 1519,
    /**
     * DOTA持续施法1动作
     */
    ACT_DOTA_CHANNEL_ABILITY_1 = 1520,
    /**
     * DOTA持续施法2动作
     */
    ACT_DOTA_CHANNEL_ABILITY_2 = 1521,
    /**
     * DOTA持续施法3动作
     */
    ACT_DOTA_CHANNEL_ABILITY_3 = 1522,
    /**
     * DOTA持续施法4动作
     */
    ACT_DOTA_CHANNEL_ABILITY_4 = 1523,
    /**
     * DOTA持续施法5动作
     */
    ACT_DOTA_CHANNEL_ABILITY_5 = 1524,
    /**
     * DOTA持续施法6动作
     */
    ACT_DOTA_CHANNEL_ABILITY_6 = 1525,
    /**
     * DOTA结束持续施法1动作
     */
    ACT_DOTA_CHANNEL_END_ABILITY_1 = 1526,
    /**
     * DOTA结束持续施法2动作
     */
    ACT_DOTA_CHANNEL_END_ABILITY_2 = 1527,
    /**
     * DOTA结束持续施法3动作
     */
    ACT_DOTA_CHANNEL_END_ABILITY_3 = 1528,
    /**
     * DOTA结束持续施法4动作
     */
    ACT_DOTA_CHANNEL_END_ABILITY_4 = 1529,
    /**
     * DOTA结束持续施法5动作
     */
    ACT_DOTA_CHANNEL_END_ABILITY_5 = 1530,
    /**
     * DOTA结束持续施法6动作
     */
    ACT_DOTA_CHANNEL_END_ABILITY_6 = 1531,
    /**
     * DOTA常驻层动作
     */
    ACT_DOTA_CONSTANT_LAYER = 1532,
    /**
     * DOTA前哨占领动作
     */
    ACT_DOTA_CAPTURE = 1533,
    /**
     * DOTA复活动作
     */
    ACT_DOTA_SPAWN = 1534,
    /**
     * DOTA击杀嘲讽动作
     */
    ACT_DOTA_KILLTAUNT = 1535,
    /**
     * DOTA嘲讽动作
     */
    ACT_DOTA_TAUNT = 1536,
    /**
     * 血魔焦渴动作
     */
    ACT_DOTA_THIRST = 1537,
    /**
     * 龙骑士火焰气息施法动作
     */
    ACT_DOTA_CAST_DRAGONBREATH = 1538,
    /**
     * 撼地者回音击动作
     */
    ACT_DOTA_ECHO_SLAM = 1539,
    /**
     * DOTA施法1结束动作
     */
    ACT_DOTA_CAST_ABILITY_1_END = 1540,
    /**
     * DOTA施法2结束动作
     */
    ACT_DOTA_CAST_ABILITY_2_END = 1541,
    /**
     * DOTA施法3结束动作
     */
    ACT_DOTA_CAST_ABILITY_3_END = 1542,
    /**
     * DOTA施法4结束动作
     */
    ACT_DOTA_CAST_ABILITY_4_END = 1543,
    /**
     * 米拉娜跃击结束动作
     */
    ACT_MIRANA_LEAP_END = 1544,
    /**
     * 波浪形态开始动作
     */
    ACT_WAVEFORM_START = 1545,
    /**
     * 波浪形态结束动作
     */
    ACT_WAVEFORM_END = 1546,
    /**
     * DOTA施法旋转动作
     */
    ACT_DOTA_CAST_ABILITY_ROT = 1547,
    /**
     * DOTA特殊死亡动作
     */
    ACT_DOTA_DIE_SPECIAL = 1548,
    /**
     * 发条技师弹幕冲击动作
     */
    ACT_DOTA_RATTLETRAP_BATTERYASSAULT = 1549,
    /**
     * 发条技师能量齿轮动作
     */
    ACT_DOTA_RATTLETRAP_POWERCOGS = 1550,
    /**
     * 发条技师发射钩爪开始动作
     */
    ACT_DOTA_RATTLETRAP_HOOKSHOT_START = 1551,
    /**
     * 发条技师发射钩爪循环动作
     */
    ACT_DOTA_RATTLETRAP_HOOKSHOT_LOOP = 1552,
    /**
     * 发条技师发射钩爪结束动作
     */
    ACT_DOTA_RATTLETRAP_HOOKSHOT_END = 1553,
    /**
     * 风暴之灵超负荷奔跑动作
     */
    ACT_STORM_SPIRIT_OVERLOAD_RUN_OVERRIDE = 1554,
    /**
     * 修补匠再装填动作1
     */
    ACT_DOTA_TINKER_REARM1 = 1555,
    /**
     * 修补匠再装填动作2
     */
    ACT_DOTA_TINKER_REARM2 = 1556,
    /**
     * 修补匠再装填动作3
     */
    ACT_DOTA_TINKER_REARM3 = 1557,
    /**
     * 小小雪崩动作
     */
    ACT_TINY_AVALANCHE = 1558,
    /**
     * 小小投掷动作
     */
    ACT_TINY_TOSS = 1559,
    /**
     * 小小长大动作
     */
    ACT_TINY_GROWL = 1560,
    /**
     * 编制者虫群附着动作
     */
    ACT_DOTA_WEAVERBUG_ATTACH = 1561,
    /**
     * 兽王野性飞斧结束动作
     */
    ACT_DOTA_CAST_WILD_AXES_END = 1562,
    /**
     * 哈斯卡牺牲施法开始动作
     */
    ACT_DOTA_CAST_LIFE_BREAK_START = 1563,
    /**
     * 哈斯卡牺牲施法结束动作
     */
    ACT_DOTA_CAST_LIFE_BREAK_END = 1564,
    /**
     * 暗夜魔王夜晚变身动作
     */
    ACT_DOTA_NIGHTSTALKER_TRANSITION = 1565,
    /**
     * 噬魂鬼狂暴动作
     */
    ACT_DOTA_LIFESTEALER_RAGE = 1566,
    /**
     * 噬魂鬼撕裂伤口动作
     */
    ACT_DOTA_LIFESTEALER_OPEN_WOUNDS = 1567,
    /**
     * 沙王钻地动作
     */
    ACT_DOTA_SAND_KING_BURROW_IN = 1568,
    /**
     * 沙王钻出动作
     */
    ACT_DOTA_SAND_KING_BURROW_OUT = 1569,
    /**
     * 撼地者强化图腾攻击动作
     */
    ACT_DOTA_EARTHSHAKER_TOTEM_ATTACK = 1570,
    /**
     * DOTA轮子图层动作
     */
    ACT_DOTA_WHEEL_LAYER = 1571,
    /**
     * 炼金术士化学狂暴开始动作
     */
    ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_START = 1572,
    /**
     * 炼金术士不稳定化合物动作
     */
    ACT_DOTA_ALCHEMIST_CONCOCTION = 1573,
    /**
     * 杰奇洛液态火开始动作
     */
    ACT_DOTA_JAKIRO_LIQUIDFIRE_START = 1574,
    /**
     * 杰奇洛液态火循环动作
     */
    ACT_DOTA_JAKIRO_LIQUIDFIRE_LOOP = 1575,
    /**
     * 噬魂鬼感染动作
     */
    ACT_DOTA_LIFESTEALER_INFEST = 1576,
    /**
     * 噬魂鬼感染结束动作
     */
    ACT_DOTA_LIFESTEALER_INFEST_END = 1577,
    /**
     * 蝙蝠骑士燃烧枷锁持续牵引动作
     */
    ACT_DOTA_LASSO_LOOP = 1578,
    /**
     * 炼金术士不稳定化合物投掷
     */
    ACT_DOTA_ALCHEMIST_CONCOCTION_THROW = 1579,
    /**
     * 炼金术士化学狂暴结束动作
     */
    ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_END = 1580,
    /**
     * 祈求者急速冷却施法动作
     */
    ACT_DOTA_CAST_COLD_SNAP = 1581,
    /**
     * 祈求者幽影漫步施法动作
     */
    ACT_DOTA_CAST_GHOST_WALK = 1582,
    /**
     * 祈求者强袭飓风施法动作
     */
    ACT_DOTA_CAST_TORNADO = 1583,
    /**
     * 祈求者电磁脉冲施法动作
     */
    ACT_DOTA_CAST_EMP = 1584,
    /**
     * 祈求者灵动迅捷施法动作
     */
    ACT_DOTA_CAST_ALACRITY = 1585,
    /**
     * 祈求者混沌陨石施法动作
     */
    ACT_DOTA_CAST_CHAOS_METEOR = 1586,
    /**
     * 祈求者阳炎冲击施法动作
     */
    ACT_DOTA_CAST_SUN_STRIKE = 1587,
    /**
     * 祈求者熔炉精灵施法动作
     */
    ACT_DOTA_CAST_FORGE_SPIRIT = 1588,
    /**
     * 祈求者寒冰之墙施法动作
     */
    ACT_DOTA_CAST_ICE_WALL = 1589,
    /**
     * 祈求者超震声波施法动作
     */
    ACT_DOTA_CAST_DEAFENING_BLAST = 1590,
    /**
     * DOTA胜利动作
     */
    ACT_DOTA_VICTORY = 1591,
    /**
     * DOTA失败动作
     */
    ACT_DOTA_DEFEAT = 1592,
    /**
     * 裂魂人暗影冲刺动作
     */
    ACT_DOTA_SPIRIT_BREAKER_CHARGE_POSE = 1593,
    /**
     * 裂魂人暗影冲刺撞击结束动作
     */
    ACT_DOTA_SPIRIT_BREAKER_CHARGE_END = 1594,
    /**
     * DOTA开始传送动作
     */
    ACT_DOTA_TELEPORT = 1595,
    /**
     * DOTA传送完成动作
     */
    ACT_DOTA_TELEPORT_END = 1596,
    /**
     * 圣堂刺客折光施法动作
     */
    ACT_DOTA_CAST_REFRACTION = 1597,
    /**
     * DOTA施法7动作
     */
    ACT_DOTA_CAST_ABILITY_7 = 1598,
    /**
     * 娜迦海妖取消海妖之歌施法动作
     */
    ACT_DOTA_CANCEL_SIREN_SONG = 1599,
    /**
     * DOTA持续施法7动作
     */
    ACT_DOTA_CHANNEL_ABILITY_7 = 1600,
    /**
     * DOTA出装界面动作
     */
    ACT_DOTA_LOADOUT = 1601,
    /**
     * 原力法杖结束动作
     */
    ACT_DOTA_FORCESTAFF_END = 1602,
    /**
     * 米波忽悠结束动作
     */
    ACT_DOTA_POOF_END = 1603,
    /**
     * 斯拉克突袭动作
     */
    ACT_DOTA_SLARK_POUNCE = 1604,
    /**
     * 马格纳斯巨角冲撞开始动作
     */
    ACT_DOTA_MAGNUS_SKEWER_START = 1605,
    /**
     * 马格纳斯巨角冲撞结束动作
     */
    ACT_DOTA_MAGNUS_SKEWER_END = 1606,
    /**
     * 美杜莎石化凝视施法动作
     */
    ACT_DOTA_MEDUSA_STONE_GAZE = 1607,
    /**
     * DOTA开始放松动作
     */
    ACT_DOTA_RELAX_START = 1608,
    /**
     * DOTA放松状态循环动作
     */
    ACT_DOTA_RELAX_LOOP = 1609,
    /**
     * DOTA结束放松动作
     */
    ACT_DOTA_RELAX_END = 1610,
    /**
     * 半人马战行者奔袭冲撞动作
     */
    ACT_DOTA_CENTAUR_STAMPEDE = 1611,
    /**
     * DOTA开始肚子痛动作
     */
    ACT_DOTA_BELLYACHE_START = 1612,
    /**
     * DOTA肚子痛循环动作
     */
    ACT_DOTA_BELLYACHE_LOOP = 1613,
    /**
     * DOTA结束肚子痛动作
     */
    ACT_DOTA_BELLYACHE_END = 1614,
    /**
     * DOTA英雄跳落至地面
     */
    ACT_DOTA_ROQUELAIRE_LAND = 1615,
    /**
     * DOTA落地后的站立状态
     */
    ACT_DOTA_ROQUELAIRE_LAND_IDLE = 1616,
    /**
     * 小贪魔施法动作
     */
    ACT_DOTA_GREEVIL_CAST = 1617,
    /**
     * 小贪魔技能替换动作
     */
    ACT_DOTA_GREEVIL_OVERRIDE_ABILITY = 1618,
    /**
     * 小贪魔勾爪开始动作
     */
    ACT_DOTA_GREEVIL_HOOK_START = 1619,
    /**
     * 小贪魔勾爪结束动作
     */
    ACT_DOTA_GREEVIL_HOOK_END = 1620,
    /**
     * 小贪魔闪烁动作
     */
    ACT_DOTA_GREEVIL_BLINK_BONE = 1621,
    /**
     * DOTA睡眠状态下的待机动作
     */
    ACT_DOTA_IDLE_SLEEPING = 1622,
    /**
     * DOTA英雄登场动作
     */
    ACT_DOTA_INTRO = 1623,
    /**
     * DOTA指向动作
     */
    ACT_DOTA_GESTURE_POINT = 1624,
    /**
     * DOTA强调动作
     */
    ACT_DOTA_GESTURE_ACCENT = 1625,
    /**
     * DOTA从睡眠状态中醒来动作
     */
    ACT_DOTA_SLEEPING_END = 1626,
    /**
     * DOTA埋伏动作
     */
    ACT_DOTA_AMBUSH = 1627,
    /**
     * DOTA观察物品动作
     */
    ACT_DOTA_ITEM_LOOK = 1628,
    /**
     * DOTA惊吓反应动作
     */
    ACT_DOTA_STARTLE = 1629,
    /**
     * DOTA挫败感动作
     */
    ACT_DOTA_FRUSTRATION = 1630,
    /**
     * DOTA对传送的反应动作
     */
    ACT_DOTA_TELEPORT_REACT = 1631,
    /**
     * DOTA到达后反应动作
     */
    ACT_DOTA_TELEPORT_END_REACT = 1632,
    /**
     * DOTA耸肩动作
     */
    ACT_DOTA_SHRUG = 1633,
    /**
     * DOTA结束放松循环动作
     */
    ACT_DOTA_RELAX_LOOP_END = 1634,
    /**
     * DOTA展示物品动作
     */
    ACT_DOTA_PRESENT_ITEM = 1635,
    /**
     * DOTA不耐烦的待机动作
     */
    ACT_DOTA_IDLE_IMPATIENT = 1636,
    /**
     * DOTA打磨武器动作
     */
    ACT_DOTA_SHARPEN_WEAPON = 1637,
    /**
     * DOTA结束打磨动作
     */
    ACT_DOTA_SHARPEN_WEAPON_OUT = 1638,
    /**
     * DOTA睡觉待机结束动作
     */
    ACT_DOTA_IDLE_SLEEPING_END = 1639,
    /**
     * DOTA摧毁桥梁动作
     */
    ACT_DOTA_BRIDGE_DESTROY = 1640,
    /**
     * 狙击手嘲讽动作
     */
    ACT_DOTA_TAUNT_SNIPER = 1641,
    /**
     * 被狙击手击杀死亡动作
     */
    ACT_DOTA_DEATH_BY_SNIPER = 1642,
    /**
     * DOTA环视动作
     */
    ACT_DOTA_LOOK_AROUND = 1643,
    /**
     * DOTA被困小兵愤怒动作
     */
    ACT_DOTA_CAGED_CREEP_RAGE = 1644,
    /**
     * DOTA愤怒结束动作
     */
    ACT_DOTA_CAGED_CREEP_RAGE_OUT = 1645,
    /**
     * DOTA被困小兵猛击动作
     */
    ACT_DOTA_CAGED_CREEP_SMASH = 1646,
    /**
     * DOTA猛击结束动作
     */
    ACT_DOTA_CAGED_CREEP_SMASH_OUT = 1647,
    /**
     * DOTA用剑敲地的不耐烦动作
     */
    ACT_DOTA_IDLE_IMPATIENT_SWORD_TAP = 1648,
    /**
     * DOTA登场动画循环动作
     */
    ACT_DOTA_INTRO_LOOP = 1649,
    /**
     * DOTA桥上威胁动作
     */
    ACT_DOTA_BRIDGE_THREAT = 1650,
    /**
     * 达贡之神力动作
     */
    ACT_DOTA_DAGON = 1651,
    /**
     * 大地之灵巨石翻滚开始动作
     */
    ACT_DOTA_CAST_ABILITY_2_ES_ROLL_START = 1652,
    /**
     * 大地之灵巨石翻滚滚动中动作
     */
    ACT_DOTA_CAST_ABILITY_2_ES_ROLL = 1653,
    /**
     * 大地之灵巨石翻滚滚动结束动作
     */
    ACT_DOTA_CAST_ABILITY_2_ES_ROLL_END = 1654,
    /**
     * 年兽钉住开始动作
     */
    ACT_DOTA_NIAN_PIN_START = 1655,
    /**
     * 年兽钉住循环动作
     */
    ACT_DOTA_NIAN_PIN_LOOP = 1656,
    /**
     * 年兽钉住结束动作
     */
    ACT_DOTA_NIAN_PIN_END = 1657,
    /**
     * DOTA跳跃并眩晕动作
     */
    ACT_DOTA_LEAP_STUN = 1658,
    /**
     * DOTA跃击后的横扫动作
     */
    ACT_DOTA_LEAP_SWIPE = 1659,
    /**
     * 年兽登场跳跃动作
     */
    ACT_DOTA_NIAN_INTRO_LEAP = 1660,
    /**
     * DOTA驱逐敌方的动作
     */
    ACT_DOTA_AREA_DENY = 1661,
    /**
     * 年兽钉住过渡到眩晕动作
     */
    ACT_DOTA_NIAN_PIN_TO_STUN = 1662,
    /**
     * DOTA暗影烈焰1号动作
     */
    ACT_DOTA_RAZE_1 = 1663,
    /**
     * DOTA暗影烈焰2号动作
     */
    ACT_DOTA_RAZE_2 = 1664,
    /**
     * DOTA暗影烈焰3号动作
     */
    ACT_DOTA_RAZE_3 = 1665,
    /**
     * 不朽尸王腐朽动作
     */
    ACT_DOTA_UNDYING_DECAY = 1666,
    /**
     * 不朽尸王噬魂动作
     */
    ACT_DOTA_UNDYING_SOUL_RIP = 1667,
    /**
     * 不朽尸王墓碑动作
     */
    ACT_DOTA_UNDYING_TOMBSTONE = 1668,
    /**
     * 巨魔战将旋风飞斧（远程）动作
     */
    ACT_DOTA_WHIRLING_AXES_RANGED = 1669,
    /**
     * 戴泽薄葬动作
     */
    ACT_DOTA_SHALLOW_GRAVE = 1670,
    /**
     * 远古冰魄寒霜之足动作
     */
    ACT_DOTA_COLD_FEET = 1671,
    /**
     * 远古冰魄冰封漩涡动作
     */
    ACT_DOTA_ICE_VORTEX = 1672,
    /**
     * 远古冰魄极寒之触动作
     */
    ACT_DOTA_CHILLING_TOUCH = 1673,
    /**
     * 祸乱之源虚弱动作
     */
    ACT_DOTA_ENFEEBLE = 1674,
    /**
     * 术士致命连接动作
     */
    ACT_DOTA_FATAL_BONDS = 1675,
    /**
     * 谜团午夜凋零动作
     */
    ACT_DOTA_MIDNIGHT_PULSE = 1676,
    /**
     * 上古巨神灵体游魂动作
     */
    ACT_DOTA_ANCESTRAL_SPIRIT = 1677,
    /**
     * 干扰者风雷之击动作
     */
    ACT_DOTA_THUNDER_STRIKE = 1678,
    /**
     * 干扰者动能力场动作
     */
    ACT_DOTA_KINETIC_FIELD = 1679,
    /**
     * 干扰者静态风暴动作
     */
    ACT_DOTA_STATIC_STORM = 1680,
    /**
     * DOTA简短嘲讽动作
     */
    ACT_DOTA_MINI_TAUNT = 1681,
    /**
     * 寒冬飞龙严寒烧灼结束动作
     */
    ACT_DOTA_ARCTIC_BURN_END = 1682,
    /**
     * DOTA稀有出装界面动作
     */
    ACT_DOTA_LOADOUT_RARE = 1683,
    /**
     * DOTA游泳动作
     */
    ACT_DOTA_SWIM = 1684,
    /**
     * DOTA逃跑动作
     */
    ACT_DOTA_FLEE = 1685,
    /**
     * DOTA小跑动作
     */
    ACT_DOTA_TROT = 1686,
    /**
     * DOTA摇晃动作
     */
    ACT_DOTA_SHAKE = 1687,
    /**
     * DOTA游泳状态待机动作
     */
    ACT_DOTA_SWIM_IDLE = 1688,
    /**
     * DOTA等待状态下待机动作
     */
    ACT_DOTA_WAIT_IDLE = 1689,
    /**
     * DOTA打招呼动作
     */
    ACT_DOTA_GREET = 1690,
    /**
     * DOTA协作传送的开始动作
     */
    ACT_DOTA_TELEPORT_COOP_START = 1691,
    /**
     * DOTA协作传送时的等待动作
     */
    ACT_DOTA_TELEPORT_COOP_WAIT = 1692,
    /**
     * DOTA协作传送的结束动作
     */
    ACT_DOTA_TELEPORT_COOP_END = 1693,
    /**
     * DOTA协作传送后的退出动作
     */
    ACT_DOTA_TELEPORT_COOP_EXIT = 1694,
    /**
     * DOTA宠物与商店老板互动动作
     */
    ACT_DOTA_SHOPKEEPER_PET_INTERACT = 1695,
    /**
     * DOTA拾取物品动作
     */
    ACT_DOTA_ITEM_PICKUP = 1696,
    /**
     * DOTA丢弃物品动作
     */
    ACT_DOTA_ITEM_DROP = 1697,
    /**
     * DOTA捕捉宠物动作
     */
    ACT_DOTA_CAPTURE_PET = 1698,
    /**
     * DOTA宠物放置侦查守卫动作
     */
    ACT_DOTA_PET_WARD_OBSERVER = 1699,
    /**
     * DOTA宠物放置岗哨守卫动作
     */
    ACT_DOTA_PET_WARD_SENTRY = 1700,
    /**
     * DOTA宠物升级动作
     */
    ACT_DOTA_PET_LEVEL = 1701,
    /**
     * 司夜刺客钻地结束动作
     */
    ACT_DOTA_CAST_BURROW_END = 1702,
    /**
     * 噬魂鬼吸收动作
     */
    ACT_DOTA_LIFESTEALER_ASSIMILATE = 1703,
    /**
     * 噬魂喷吐动作
     */
    ACT_DOTA_LIFESTEALER_EJECT = 1704,
    /**
     * DOTA攻击重击动作
     */
    ACT_DOTA_ATTACK_EVENT_BASH = 1705,
    /**
     * DOTA捕获稀有事件
     */
    ACT_DOTA_CAPTURE_RARE = 1706,
    /**
     * 天穹守望者磁场动作
     */
    ACT_DOTA_AW_MAGNETIC_FIELD = 1707,
    /**
     * 昆卡幽灵船施法动作
     */
    ACT_DOTA_CAST_GHOST_SHIP = 1708,
    /**
     * DOTA播放特效动画动作
     */
    ACT_DOTA_FXANIM = 1709,
    /**
     * DOTA胜利开始动作
     */
    ACT_DOTA_VICTORY_START = 1710,
    /**
     * DOTA失败开始动作
     */
    ACT_DOTA_DEFEAT_START = 1711,
    /**
     * 死亡先知吸魂巫术动作
     */
    ACT_DOTA_DP_SPIRIT_SIPHON = 1712,
    /**
     * DOTA技巧或挑衅结束动作
     */
    ACT_DOTA_TRICKS_END = 1713,
    /**
     * 大地之灵残岩召唤动作
     */
    ACT_DOTA_ES_STONE_CALLER = 1714,
    /**
     * 齐天大圣棒击大地动作
     */
    ACT_DOTA_MK_STRIKE = 1715,
    /**
     * DOTA对战展示动作
     */
    ACT_DOTA_VERSUS = 1716,
    /**
     * DOTA捕获事件卡片动作
     */
    ACT_DOTA_CAPTURE_CARD = 1717,
    /**
     * 齐天大圣丛林之舞飞跃中动作
     */
    ACT_DOTA_MK_SPRING_SOAR = 1718,
    /**
     * 齐天大圣丛林之舞跳跃结束动作
     */
    ACT_DOTA_MK_SPRING_END = 1719,
    /**
     * 齐天大圣从树上跃下动作
     */
    ACT_DOTA_MK_TREE_SOAR = 1720,
    /**
     * 齐天大圣跳下落地动作
     */
    ACT_DOTA_MK_TREE_END = 1721,
    /**
     * 齐天大圣猴子猴孙动作
     */
    ACT_DOTA_MK_FUR_ARMY = 1722,
    /**
     * 齐天大圣丛林之舞施法动作
     */
    ACT_DOTA_MK_SPRING_CAST = 1723,
    /**
     * 瘟疫法师幽魂护罩动作
     */
    ACT_DOTA_NECRO_GHOST_SHROUD = 1724,
    /**
     * DOTA至宝覆盖动作
     */
    ACT_DOTA_OVERRIDE_ARCANA = 1725,
    /**
     * DOTA滑行开始动作
     */
    ACT_DOTA_SLIDE = 1726,
    /**
     * DOTA持续滑行动作
     */
    ACT_DOTA_SLIDE_LOOP = 1727,
    /**
     * DOTA通用持续施法动作1
     */
    ACT_DOTA_GENERIC_CHANNEL_1 = 1728,
    /**
     * 天涯墨客缚魂动作
     */
    ACT_DOTA_GS_SOUL_CHAIN = 1729,
    /**
     * 天涯墨客戾影动作
     */
    ACT_DOTA_GS_INK_CREATURE = 1730,
    /**
     * DOTA状态过渡动作
     */
    ACT_DOTA_TRANSITION = 1731,
    /**
     * 闪烁匕首动作
     */
    ACT_DOTA_BLINK_DAGGER = 1732,
    /**
     * 闪烁匕首结束动作
     */
    ACT_DOTA_BLINK_DAGGER_END = 1733,
    /**
     * 自定义防御塔攻击动作
     */
    ACT_DOTA_CUSTOM_TOWER_ATTACK = 1734,
    /**
     * 自定义防御塔待机动作
     */
    ACT_DOTA_CUSTOM_TOWER_IDLE = 1735,
    /**
     * 自定义防御塔死亡动作
     */
    ACT_DOTA_CUSTOM_TOWER_DIE = 1736,
    /**
     * 祈求者急速冷却元素球动作
     */
    ACT_DOTA_CAST_COLD_SNAP_ORB = 1737,
    /**
     * 祈求者幽灵漫步元素球动作
     */
    ACT_DOTA_CAST_GHOST_WALK_ORB = 1738,
    /**
     * 祈求者强袭飓风元素球动作
     */
    ACT_DOTA_CAST_TORNADO_ORB = 1739,
    /**
     * 祈求者电磁脉冲元素球动作
     */
    ACT_DOTA_CAST_EMP_ORB = 1740,
    /**
     * 祈求者灵动迅捷元素球动作
     */
    ACT_DOTA_CAST_ALACRITY_ORB = 1741,
    /**
     * 祈求者混沌陨石元素球动作
     */
    ACT_DOTA_CAST_CHAOS_METEOR_ORB = 1742,
    /**
     * 祈求者阳炎冲击元素球动作
     */
    ACT_DOTA_CAST_SUN_STRIKE_ORB = 1743,
    /**
     * 祈求者熔炉精灵元素球动作
     */
    ACT_DOTA_CAST_FORGE_SPIRIT_ORB = 1744,
    /**
     * 祈求者寒冰之墙元素球动作
     */
    ACT_DOTA_CAST_ICE_WALL_ORB = 1745,
    /**
     * 祈求者超震声波元素球动作
     */
    ACT_DOTA_CAST_DEAFENING_BLAST_ORB = 1746,
    /**
     * DOTA提示通知动作
     */
    ACT_DOTA_NOTICE = 1747,
    /**
     * DOTA友方施法2动作
     */
    ACT_DOTA_CAST_ABILITY_2_ALLY = 1748,
    /**
     * DOTA左侧移动切换动作
     */
    ACT_DOTA_SHUFFLE_L = 1749,
    /**
     * DOTA右侧移动切换动作
     */
    ACT_DOTA_SHUFFLE_R = 1750,
    /**
     * DOTA替换默认出场装备展示动作
     */
    ACT_DOTA_OVERRIDE_LOADOUT = 1751,
    /**
     * DOTA特殊挑衅动作
     */
    ACT_DOTA_TAUNT_SPECIAL = 1752,
    /**
     * DOTA传送开始动作
     */
    ACT_DOTA_TELEPORT_START = 1753,
    /**
     * DOTA通用持续施法动作开始
     */
    ACT_DOTA_GENERIC_CHANNEL_1_START = 1754,
    /**
     * 自定义防御塔罕见待机动作
     */
    ACT_DOTA_CUSTOM_TOWER_IDLE_RARE = 1755,
    /**
     * 自定义防御塔挑衅动作
     */
    ACT_DOTA_CUSTOM_TOWER_TAUNT = 1756,
    /**
     * 自定义防御塔击掌动作
     */
    ACT_DOTA_CUSTOM_TOWER_HIGH_FIVE = 1757,
    /**
     * DOTA特殊攻击动作
     */
    ACT_DOTA_ATTACK_SPECIAL = 1758,
    /**
     * DOTA过渡至站立状态动作
     */
    ACT_DOTA_TRANSITION_IDLE = 1759,
    /**
     * 琼英碧灵越界动作
     */
    ACT_DOTA_PIERCE_THE_VEIL = 1760,
    /**
     * DOTA罕见奔跑动作
     */
    ACT_DOTA_RUN_RARE = 1761,
    /**
     * 冥界亚龙极恶俯冲动作
     */
    ACT_DOTA_VIPER_DIVE = 1762,
    /**
     * 冥界亚龙极恶俯冲结束动作
     */
    ACT_DOTA_VIPER_DIVE_END = 1763,
    /**
     * 齐天大圣棒击大地结束动作
     */
    ACT_DOTA_MK_STRIKE_END = 1764,
    /**
     * DOTA影遁技能动画
     */
    ACT_DOTA_SHADOW_VAULT = 1765,
    /**
     * 凯猛禽之舞开始动作
     */
    ACT_DOTA_KEZ_KATANA_ULT_START = 1766,
    /**
     * 凯制敌爪钩A动作
     */
    ACT_DOTA_KEZ_KATANA_ULT_CHAIN_A = 1767,
    /**
     * 凯制敌爪钩B动作
     */
    ACT_DOTA_KEZ_KATANA_ULT_CHAIN_B = 1768,
    /**
     * 凯猛禽之舞结束动作
     */
    ACT_DOTA_KEZ_KATANA_ULT_END = 1769,
    /**
     * 凯影舞长刀刺穿动作
     */
    ACT_DOTA_KEZ_KATANA_IMPALE = 1770,
    /**
     * 凯影舞长刀刺穿快速动作
     */
    ACT_DOTA_KEZ_KATANA_IMPALE_FAST = 1771,
    /**
     * 百戏大王独轮车动作
     */
    ACT_DOTA_UNICYCLE = 1772,
    /**
     * 百戏大王独轮车结束动作
     */
    ACT_DOTA_UNICYCLE_END = 1773,
    /**
     * 朗戈终极技能成功动作
     */
    ACT_DOTA_LARGO_ULT_STRUM_SUCCESS = 1774,
    /**
     * 朗戈终极技能失败动作
     */
    ACT_DOTA_LARGO_ULT_STRUM_FAIL = 1775,
    /**
     * DOTA MVP界面动作
     */
    ACT_DOTA_MVP_SCREEN = 1776,
    /**
     * 朗戈终极技能切换开启动作
     */
    ACT_DOTA_LARGO_ULT_TOGGLE_ON = 1777,
    /**
     * 朗戈终极技能切换关闭动作
     */
    ACT_DOTA_LARGO_ULT_TOGGLE_OFF = 1778,
    /**
     * DOTA雕像奔跑动作
     */
    ACT_DOTA_RUN_STATUE = 1779,
    /**
     * DOTA雕像施法动作1
     */
    ACT_DOTA_CAST1_STATUE = 1780,
    /**
     * DOTA雕像施法动作2
     */
    ACT_DOTA_CAST2_STATUE = 1781,
    /**
     * DOTA雕像眩晕动作
     */
    ACT_DOTA_STUN_STATUE = 1782,
    /**
     * DOTA雕像挣扎动作
     */
    ACT_DOTA_FLAIL_STATUE = 1783,
    /**
     * DOTA雕像生成动作
     */
    ACT_DOTA_SPAWN_STATUE = 1784,
    /**
     * DOTA雕像传送结束动作
     */
    ACT_DOTA_TELEPORT_END_STATUE = 1785,
    /**
     * DOTA雕像攻击动作
     */
    ACT_DOTA_ATTACK_STATUE = 1786,
    /**
     * DOTA雕像受强制位移动作
     */
    ACT_DOTA_FORCESTAFF_STATUE = 1787,
    /**
     * DOTA雕像传送动作
     */
    ACT_DOTA_TELEPORT_STATUE = 1788,
    /**
     * DOTA雕像胜利动作
     */
    ACT_DOTA_VICTORY_STATUE = 1789,
    /**
     * DOTA雕像挑衅动作
     */
    ACT_DOTA_TAUNT_STATUE = 1790,
    /**
     * DOTA雕像待机动作
     */
    ACT_DOTA_IDLE_STATUE = 1791,
    /**
     * DOTA禁用状态结束动作
     */
    ACT_DOTA_DISABLED_END = 1792,
    /**
     * DOTA妖术休息动作
     */
    ACT_DOTA_VOODOO_REST = 1793,
    /**
     * DOTA龙卷风动作
     */
    ACT_DOTA_CYCLONE = 1794,
    /**
     * DOTA穿刺类技能动作
     */
    ACT_DOTA_IMPALE = 1795,
    /**
     * 昆卡洪流动作
     */
    ACT_DOTA_TORRENT = 1796,
    /**
     * DOTA近卫战锤小兵攻击动作
     */
    ACT_DOTA_RADIANT_CREEP_HAMMER = 1798,
    /**
     * DOTA进入放松姿态动作
     */
    ACT_DOTA_RELAX_IN = 1799,
    /**
     * DOTA退出放松姿态动作
     */
    ACT_DOTA_RELAX_OUT = 1800,
    /**
     * DOTA束缚边缘类技能施法动作
     */
    ACT_DOTA_CAST_FENCE = 1801,
    /**
     * DOTA单位生成动作
     */
    ACT_DOTA_SPWN = 1802,
    /**
     * DOTA雕像施法动作3
     */
    ACT_DOTA_CAST3_STATUE = 1803,
    /**
     * DOTA雕像施法动作4
     */
    ACT_DOTA_CAST4_STATUE = 1804,
    /**
     * DOTA雕像施法动作5
     */
    ACT_DOTA_CAST5_STATUE = 1805,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type LuaModifierMotionType = LuaModifierType;

/**
 * @compileMembersOnly
 */
declare enum LuaModifierType {
    /**
     * 非运动修饰器（默认）
     */ LUA_MODIFIER_MOTION_NONE = 0,
    /**
     * 水平运动修饰器（例：原力法杖）
     */
    LUA_MODIFIER_MOTION_HORIZONTAL = 1,
    /**
     * 垂直运动修饰器（例：裂地尖刺）
     */
    LUA_MODIFIER_MOTION_VERTICAL = 2,
    /**
     * 双向运动修饰器（例：隔空取物）
     */
    LUA_MODIFIER_MOTION_BOTH = 3,
    /**
     * 无效占位（默认）
     */
    LUA_MODIFIER_INVALID = 4,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type ModifierFunction = modifierfunction;

/**
 * @compileMembersOnly
 */
declare enum modifierfunction {
    /**
     * 定值额外攻击力/目标额外攻击力（例：支配死灵/盛宴）
     * @function GetModifierPreAttack_BonusDamage
     * @both
     */ MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE = 0,
    /**
     * 目标触发额外攻击力（例：摔跤行家）
     * @function GetModifierPreAttack_BonusDamage_Target
     * @both
     */
    MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_TARGET = 1,
    /**
     * 触发额外攻击力（例：射手天赋）
     * @function GetModifierPreAttack_BonusDamage_Proc
     * @lua不可用
     */
    MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_PROC = 2,
    /**
     * 后致命一击伤害（例：影刃）
     * @function GetModifierPreAttack_BonusDamagePostCrit
     * @both
     */
    MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_POST_CRIT = 3,
    /**
     * 定值基础攻击力（例：长大）
     * @function GetModifierBaseAttack_BonusDamage
     * @both
     */
    MODIFIER_PROPERTY_BASEATTACK_BONUSDAMAGE = 4,
    /**
     * 物理攻击特效（例：怒意狂击）
     * @function GetModifierProcAttack_BonusDamage_Physical
     * @both
     */
    MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PHYSICAL = 5,
    /**
     * 物理魔法转化攻击特效（例：超自然）
     * @function GetModifierProcAttack_ConvertPhysicalToMagical
     * @lua不可用
     */
    MODIFIER_PROPERTY_PROCATTACK_CONVERT_PHYSICAL_TO_MAGICAL = 6,
    /**
     * 魔法攻击特效（例：金箍棒）
     * @function GetModifierProcAttack_BonusDamage_Magical
     * @both
     */
    MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_MAGICAL = 7,
    /**
     * 纯粹攻击特效（例：魔晶血怒）
     * @function GetModifierProcAttack_BonusDamage_Pure
     * @both
     */
    MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PURE = 8,
    /**
     * 目标魔法攻击特效（例：丝质重器）
     * @function GetModifierProcAttack_BonusDamage_Magical_Target
     * @lua不可用
     */
    MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_MAGICAL_TARGET = 9,
    /**
     * 魔法反馈攻击特效（例：法力损毁）
     * @function GetModifierProcAttack_Feedback
     * @both
     */
    MODIFIER_PROPERTY_PROCATTACK_FEEDBACK = 10,
    /**
     * 总攻击设定（例：虚张声势）
     * @function GetModifierOverrideAttackDamage
     * @both
     */
    MODIFIER_PROPERTY_OVERRIDE_ATTACK_DAMAGE = 11,
    /**
     * 攻击前监听记录攻击行为（例：射手天赋）
     * @function GetModifierPreAttack
     * @both
     */
    MODIFIER_PROPERTY_PRE_ATTACK = 12,
    /**
     * 隐身透明度（例：暗影步）
     * @function GetModifierInvisibilityLevel
     * @both
     */
    MODIFIER_PROPERTY_INVISIBILITY_LEVEL = 13,
    /**
     * 攻击不打破隐身（例：暗影之舞）
     * @function GetModifierInvisibilityAttackBehaviorException
     * @both
     */
    MODIFIER_PROPERTY_INVISIBILITY_ATTACK_BEHAVIOR_EXCEPTION = 14,
    /**
     * 永久隐身（例：刀光谍影）
     * @function GetModifierPersistentInvisibility
     * @both
     */
    MODIFIER_PROPERTY_PERSISTENT_INVISIBILITY = 15,
    /**
     * 定值额外移速（例：血肉傀儡）
     * @function GetModifierMoveSpeedBonus_Constant
     * @both
     */
    MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT = 16,
    /**
     * 基础移速覆盖（例：妖术）
     * @function GetModifierMoveSpeedOverride
     * @both
     */
    MODIFIER_PROPERTY_MOVESPEED_BASE_OVERRIDE = 17,
    /**
     * 标准移速下限设定（未知）
     * @function GetModifierMoveSpeed_MinOverride
     * @both
     */
    MODIFIER_PROPERTY_MOVESPEED_MIN_OVERRIDE = 18,
    /**
     * 标准移速上限设定（例：举步生风）
     * @function GetModifierMoveSpeed_MaxOverride
     * @both
     */
    MODIFIER_PROPERTY_MOVESPEED_MAX_OVERRIDE = 19,
    /**
     * 百分比额外移速（例：黄泉颤抖）
     * @function GetModifierMoveSpeedBonus_Percentage
     * @both
     */
    MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE = 20,
    /**
     * 特殊百分比额外移速（例：夜叉）
     * @function GetModifierMoveSpeedBonus_Percentage_Unique
     * @both
     */
    MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE_UNIQUE = 21,
    /**
     * 特殊定值额外移速（例：速度之靴）
     * @function GetModifierMoveSpeedBonus_Special_Boots
     * @both
     */
    MODIFIER_PROPERTY_MOVESPEED_BONUS_UNIQUE = 22,
    /**
     * 特殊定值额外移速2（未知）
     * @function GetModifierMoveSpeedBonus_Special_Boots_2
     * @both
     */
    MODIFIER_PROPERTY_MOVESPEED_BONUS_UNIQUE_2 = 23,
    /**
     * 唯一特殊定值额外移速（例：幽冥长袍）
     * @function GetModifierMoveSpeedBonus_Constant_Unique
     * @both
     */
    MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT_UNIQUE = 24,
    /**
     * 唯一特殊定值额外移速2（例：风灵之纹）
     * @function GetModifierMoveSpeedBonus_Constant_Unique_2
     * @both
     */
    MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT_UNIQUE_2 = 25,
    /**
     * 移速设定（例：时间结界）
     * @function GetModifierMoveSpeed_Absolute
     * @both
     */
    MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE = 26,
    /**
     * 绝对移速下限设定（例：奔腾）
     * @function GetModifierMoveSpeed_AbsoluteMin
     * @both
     */
    MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE_MIN = 27,
    /**
     * 绝对移速上限设定（例：重如铁锚）
     * @function GetModifierMoveSpeed_AbsoluteMax
     * @both
     */
    MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE_MAX = 28,
    /**
     * 突破标准移速上限（例：焦渴）
     * @function GetModifierIgnoreMovespeedLimit
     * @both
     */
    MODIFIER_PROPERTY_IGNORE_MOVESPEED_LIMIT = 29,
    /**
     * 绝对移速上限（例：蜥蜴绝吻）
     * @function GetModifierMoveSpeed_Limit
     * @both
     */
    MODIFIER_PROPERTY_MOVESPEED_LIMIT = 30,
    /**
     * 攻击速度设定（例：稳如磐石）
     * @function GetModifierAttackSpeedBaseOverride
     * @both
     */
    MODIFIER_PROPERTY_ATTACKSPEED_BASE_OVERRIDE = 31,
    /**
     * 固定攻击间隔（例：怒拳破）
     * @function GetModifierFixedAttackRate
     * @both
     */
    MODIFIER_PROPERTY_FIXED_ATTACK_RATE = 32,
    /**
     * 定值攻击速度（例：超强力量）
     * @function GetModifierAttackSpeedBonus_Constant
     * @both
     */
    MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT = 33,
    /**
     * 突破攻速限制（例：战斗专注）
     * @function GetModifierAttackSpeed_Limit
     * @both
     */
    MODIFIER_PROPERTY_IGNORE_ATTACKSPEED_LIMIT = 34,
    /**
     * 定值冷却时间降低（例：神圣劝化）
     * @function GetModifierCooldownReduction_Constant
     * @both
     */
    MODIFIER_PROPERTY_COOLDOWN_REDUCTION_CONSTANT = 35,
    /**
     * 定值魔法消耗降低（例：神圣劝化）
     * @function GetModifierManacostReduction_Constant
     * @both
     */
    MODIFIER_PROPERTY_MANACOST_REDUCTION_CONSTANT = 36,
    /**
     * 定值生命消耗降低（例：德尊血式）
     * @function GetModifierHealthcostReduction_Constant
     * @lua不可用
     */
    MODIFIER_PROPERTY_HEALTHCOST_REDUCTION_CONSTANT = 37,
    /**
     * 基础攻击间隔设定（例：化学狂暴）
     * @function GetModifierBaseAttackTimeConstant
     * @both
     */
    MODIFIER_PROPERTY_BASE_ATTACK_TIME_CONSTANT = 38,
    /**
     * 定值基础攻击间隔调整（例：神杖虚妄之诺）
     * @function GetModifierBaseAttackTimeConstant_Adjust
     * @lua不可用
     */
    MODIFIER_PROPERTY_BASE_ATTACK_TIME_CONSTANT_ADJUST = 39,
    /**
     * 百分比基础攻击间隔（例：中立附魔粗暴）
     * @function GetModifierBaseAttackTimePercentage
     * @lua不可用
     */
    MODIFIER_PROPERTY_BASE_ATTACK_TIME_PERCENTAGE = 40,
    /**
     * 基础攻击前摇设定（例：严寒烧灼）
     * @function GetModifierAttackPointConstant
     * @both
     */
    MODIFIER_PROPERTY_ATTACK_POINT_CONSTANT = 41,
    /**
     * 额外攻击百分比调整（例：灵幻兵械）
     * @function GetModifierBonusDamageOutgoing_Percentage
     * @lua不可用
     */
    MODIFIER_PROPERTY_BONUSDAMAGEOUTGOING_PERCENTAGE = 42,
    /**
     * 百分比总攻击力（例：虚弱）
     * @function GetModifierDamageOutgoing_Percentage
     * @both
     */
    MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE = 43,
    /**
     * 幻象攻击伤害调整（例：幻象默认）
     * @function GetModifierDamageOutgoing_Percentage_Illusion
     * @both
     */
    MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE_ILLUSION = 44,
    /**
     * 幻象特殊攻击伤害调整（例：幻象对建筑肉山）
     * @function GetModifierDamageOutgoing_Percentage_Illusion_Amplify
     * @lua不可用
     */
    MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE_ILLUSION_AMPLIFY = 45,
    /**
     * 施加方通用伤害调整（例：决斗达人）
     * @function GetModifierTotalDamageOutgoing_Percentage
     * @both
     */
    MODIFIER_PROPERTY_TOTALDAMAGEOUTGOING_PERCENTAGE = 46,
    /**
     * 技能增强（例：血怒）
     * @function GetModifierSpellAmplify_Percentage
     * @both
     */
    MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE = 47,
    /**
     * 特殊技能增强（例：慧光）
     * @function GetModifierSpellAmplify_PercentageUnique
     * @both
     */
    MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE_UNIQUE = 48,
    /**
     * 目标技能增强（未知）
     * @function GetModifierSpellAmplify_PercentageTarget
     * @lua不可用
     */
    MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE_TARGET = 49,
    /**
     * 施加方治疗调整（例：圣洁吊坠）
     * @function GetModifierHealAmplify_PercentageSource
     * @both
     */
    MODIFIER_PROPERTY_HEAL_AMPLIFY_PERCENTAGE_SOURCE = 50,
    /**
     * 承受方治疗调整（例：薄葬）
     * @function GetModifierHealAmplify_PercentageTarget
     * @both
     */
    MODIFIER_PROPERTY_HEAL_AMPLIFY_PERCENTAGE_TARGET = 51,
    /**
     * 生命恢复调整（例：淬毒武器）
     * @function GetModifierHPRegenAmplify_Percentage
     * @both
     */
    MODIFIER_PROPERTY_HP_REGEN_AMPLIFY_PERCENTAGE = 52,
    /**
     * 攻击吸血调整（例：散华）
     * @function GetModifierLifestealRegenAmplify_Percentage
     * @both
     */
    MODIFIER_PROPERTY_LIFESTEAL_AMPLIFY_PERCENTAGE = 53,
    /**
     * 技能吸血调整（例：霜冷光环）
     * @function GetModifierSpellLifestealRegenAmplify_Percentage
     * @both
     */
    MODIFIER_PROPERTY_SPELL_LIFESTEAL_AMPLIFY_PERCENTAGE = 54,
    /**
     * 特殊技能吸血调整（例：慧光）
     * @function GetModifierSpellLifestealRegenAmplify_Percentage_Unique
     * @both
     */
    MODIFIER_PROPERTY_SPELL_LIFESTEAL_AMPLIFY_PERCENTAGE_UNIQUE = 55,
    /**
     * 魔法恢复调整（例：幽魂护罩）
     * @function GetModifierMPRegenAmplify_Percentage
     * @both
     */
    MODIFIER_PROPERTY_MP_REGEN_AMPLIFY_PERCENTAGE = 56,
    /**
     * 特殊魔法恢复调整（例：慧光）
     * @function GetModifierMPRegenAmplify_Percentage_Unique
     * @both
     */
    MODIFIER_PROPERTY_MP_REGEN_AMPLIFY_PERCENTAGE_UNIQUE = 57,
    /**
     * 魔法消耗增强（例：分则能成）
     * @function GetModifierManaDrainAmplify_Percentage
     * @lua不可用
     */
    MODIFIER_PROPERTY_MANA_DRAIN_AMPLIFY_PERCENTAGE = 58,
    /**
     * 魔法获取调整（例：幽魂护罩）
     * @function GetModifierMPRestoreAmplify_Percentage
     * @both
     */
    MODIFIER_PROPERTY_MP_RESTORE_AMPLIFY_PERCENTAGE = 59,
    /**
     * 百分比基础额外攻击力（例：复仇光环）
     * @function GetModifierBaseDamageOutgoing_Percentage
     * @both
     */
    MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE = 60,
    /**
     * 特殊百分比基础额外攻击力（未知）
     * @function GetModifierBaseDamageOutgoing_PercentageUnique
     * @both
     */
    MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE_UNIQUE = 61,
    /**
     * 承受方通用伤害调整（例：激怒）
     * @function GetModifierIncomingDamage_Percentage
     * @both
     */
    MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE = 62,
    /**
     * 承受方特殊物理伤害调整（例：石化凝视）
     * @function GetModifierIncomingPhysicalDamage_Percentage
     * @both
     */
    MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_PERCENTAGE = 63,
    /**
     * 物理伤害护盾（例：共鸣脉冲）
     * @function GetModifierIncomingPhysicalDamageConstant
     * @both
     */
    MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_CONSTANT = 64,
    /**
     * 魔法伤害护盾（例：烈火罩）
     * @function GetModifierIncomingSpellDamageConstant
     * @both
     */
    MODIFIER_PROPERTY_INCOMING_SPELL_DAMAGE_CONSTANT = 65,
    /**
     * 闪避（例：魅影无形）
     * @function GetModifierEvasion_Constant
     * @both
     */
    MODIFIER_PROPERTY_EVASION_CONSTANT = 66,
    /**
     * 负值闪避（未知）
     * @function GetModifierNegativeEvasion_Constant
     * @both
     */
    MODIFIER_PROPERTY_NEGATIVE_EVASION_CONSTANT = 67,
    /**
     * 特殊状态抗性（例：散夜对剑）
     * @function GetModifierStatusResistance
     * @both
     */
    MODIFIER_PROPERTY_STATUS_RESISTANCE = 68,
    /**
     * 状态抗性（例：威吓）
     * @function GetModifierStatusResistanceStacking
     * @both
     */
    MODIFIER_PROPERTY_STATUS_RESISTANCE_STACKING = 69,
    /**
     * 负面状态增强（例：技能窃取）
     * @function GetModifierStatusResistanceCaster
     * @both
     */
    MODIFIER_PROPERTY_STATUS_RESISTANCE_CASTER = 70,
    /**
     * 首端伤害无效化（例：回光返照）
     * @function GetModifierAvoidDamage
     * @both
     */
    MODIFIER_PROPERTY_AVOID_DAMAGE = 71,
    /**
     * 技能吸收（未知）
     * @function GetModifierAvoidSpell
     * @both
     */
    MODIFIER_PROPERTY_AVOID_SPELL = 72,
    /**
     * 致盲（例：旋风飞斧）
     * @function GetModifierMiss_Percentage
     * @both
     */
    MODIFIER_PROPERTY_MISS_PERCENTAGE = 73,
    /**
     * 百分比基础护甲（例：自然秩序）
     * @function GetModifierPhysicalArmorBase_Percentage
     * @both
     */
    MODIFIER_PROPERTY_PHYSICAL_ARMOR_BASE_PERCENTAGE = 74,
    /**
     * 百分比总护甲调整（例：变态上颚）
     * @function GetModifierPhysicalArmorTotal_Percentage
     * @lua不可用
     */
    MODIFIER_PROPERTY_PHYSICAL_ARMOR_TOTAL_PERCENTAGE = 75,
    /**
     * 定值额外护甲（例：战吼）
     * @function GetModifierPhysicalArmorBonus
     * @both
     */
    MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS = 76,
    /**
     * 特殊定值额外护甲（例：天鹰之戒）
     * @function GetModifierPhysicalArmorBonusUnique
     * @both
     */
    MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_UNIQUE = 77,
    /**
     * 特殊主动定值额外护甲（例：玄冥盾牌）
     * @function GetModifierPhysicalArmorBonusUniqueActive
     * @both
     */
    MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_UNIQUE_ACTIVE = 78,
    /**
     * 后结算定值护甲（例：灵魂链接）
     * @function GetModifierPhysicalArmorBonusPost
     * @lua不可用
     */
    MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_POST = 79,
    /**
     * 最低护甲设定（例：刚强巨盾）
     * @function GetModifierMinPhysicalArmor
     * @lua不可用
     */
    MODIFIER_PROPERTY_MIN_PHYSICAL_ARMOR = 80,
    /**
     * 忽略物理护甲（例：一剑穿心）
     * @function GetModifierIgnorePhysicalArmor
     * @both
     */
    MODIFIER_PROPERTY_IGNORE_PHYSICAL_ARMOR = 81,
    /**
     * 基础魔法抗性降低（例：自然秩序）
     * @function GetModifierMagicalResistanceBaseReduction
     * @lua不可用
     */
    MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BASE_REDUCTION = 82,
    /**
     * 线性魔法抗性（未知）
     * @function GetModifierMagicalResistanceDirectModification
     * @both
     */
    MODIFIER_PROPERTY_MAGICAL_RESISTANCE_DIRECT_MODIFICATION = 83,
    /**
     * 额外魔法抗性（例：法术反制）
     * @function GetModifierMagicalResistanceBonus
     * @both
     */
    MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS = 84,
    /**
     * 幻象魔法抗性（例：暗绘）
     * @function GetModifierMagicalResistanceBonusIllusions
     * @lua不可用
     */
    MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS_ILLUSIONS = 85,
    /**
     * 特殊魔法抗性（例：永世法衣）
     * @function GetModifierMagicalResistanceBonusUnique
     * @lua不可用
     */
    MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS_UNIQUE = 86,
    /**
     * 虚无魔法抗性（例：衰老）
     * @function GetModifierMagicalResistanceDecrepifyUnique
     * @both
     */
    MODIFIER_PROPERTY_MAGICAL_RESISTANCE_DECREPIFY_UNIQUE = 87,
    /**
     * 基础魔法恢复无效化（未知）
     * @function GetModifierBaseRegen
     * @both
     */
    MODIFIER_PROPERTY_BASE_MANA_REGEN = 88,
    /**
     * 定值魔法恢复（例：奥术光环）
     * @function GetModifierConstantManaRegen
     * @both
     */
    MODIFIER_PROPERTY_MANA_REGEN_CONSTANT = 89,
    /**
     * 特殊定值魔法恢复（例：天鹰之戒）
     * @function GetModifierConstantManaRegenUnique
     * @both
     */
    MODIFIER_PROPERTY_MANA_REGEN_CONSTANT_UNIQUE = 90,
    /**
     * 百分比最大魔法恢复（例：泉水回春）
     * @function GetModifierTotalPercentageManaRegen
     * @both
     */
    MODIFIER_PROPERTY_MANA_REGEN_TOTAL_PERCENTAGE = 91,
    /**
     * 定值生命恢复（例：活性护甲）
     * @function GetModifierConstantHealthRegen
     * @both
     */
    MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT = 92,
    /**
     * 百分比最大生命恢复（例：泉水回春）
     * @function GetModifierHealthRegenPercentage
     * @both
     */
    MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE = 93,
    /**
     * 特殊百分比生命恢复（例：恐鳌之心）
     * @function GetModifierHealthRegenPercentageUnique
     * @both
     */
    MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE_UNIQUE = 94,
    /**
     * 定值最大生命值（例：活力之球）
     * @function GetModifierHealthBonus
     * @both
     */
    MODIFIER_PROPERTY_HEALTH_BONUS = 95,
    /**
     * 定值最大魔法值（例：能量之球）
     * @function GetModifierManaBonus
     * @both
     */
    MODIFIER_PROPERTY_MANA_BONUS = 96,
    /**
     * 特殊定值额外力量（例：腐朽）
     * @function GetModifierExtraStrengthBonus
     * @both
     */
    MODIFIER_PROPERTY_EXTRA_STRENGTH_BONUS = 97,
    /**
     * 特殊定值最大生命值（例：感染）
     * @function GetModifierExtraHealthBonus
     * @both
     */
    MODIFIER_PROPERTY_EXTRA_HEALTH_BONUS = 98,
    /**
     * 特殊定值最大魔法值（例：灵魂之戒）
     * @function GetModifierExtraManaBonus
     * @both
     */
    MODIFIER_PROPERTY_EXTRA_MANA_BONUS = 99,
    /**
     * 百分比额外最大魔法值（未知）
     * @function GetModifierExtraManaBonusPercentage
     * @lua不可用
     */
    MODIFIER_PROPERTY_EXTRA_MANA_BONUS_PERCENTAGE = 100,
    /**
     * 百分比最大生命值（例：磐石光环）
     * @function GetModifierExtraHealthPercentage
     * @both
     */
    MODIFIER_PROPERTY_EXTRA_HEALTH_PERCENTAGE = 101,
    /**
     * 百分比最大魔法值（例：空灵挂件）
     * @function GetModifierExtraManaPercentage
     * @both
     */
    MODIFIER_PROPERTY_EXTRA_MANA_PERCENTAGE = 102,
    /**
     * 定值额外力量（例：食人魔之斧）
     * @function GetModifierBonusStats_Strength
     * @both
     */
    MODIFIER_PROPERTY_STATS_STRENGTH_BONUS = 103,
    /**
     * 定值额外敏捷（例：欢欣之刃）
     * @function GetModifierBonusStats_Agility
     * @both
     */
    MODIFIER_PROPERTY_STATS_AGILITY_BONUS = 104,
    /**
     * 定值额外智力（例：魔力法杖）
     * @function GetModifierBonusStats_Intellect
     * @both
     */
    MODIFIER_PROPERTY_STATS_INTELLECT_BONUS = 105,
    /**
     * 百分比总力量（例：血肉傀儡）
     * @function GetModifierBonusStats_Strength_Percentage
     * @lua不可用
     */
    MODIFIER_PROPERTY_STATS_STRENGTH_BONUS_PERCENTAGE = 106,
    /**
     * 百分比总敏捷（例：射手天赋）
     * @function GetModifierBonusStats_Agility_Percentage
     * @lua不可用
     */
    MODIFIER_PROPERTY_STATS_AGILITY_BONUS_PERCENTAGE = 107,
    /**
     * 百分比总智力（例：通灵头带）
     * @function GetModifierBonusStats_Intellect_Percentage
     * @lua不可用
     */
    MODIFIER_PROPERTY_STATS_INTELLECT_BONUS_PERCENTAGE = 108,
    /**
     * 智力无效化（例：傻福）
     * @function GetModifierIntellectNone
     * @lua不可用
     */
    MODIFIER_PROPERTY_STATS_INTELLECT_NONE = 109,
    /**
     * 特殊定值施法距离（例：以太透镜）
     * @function GetModifierCastRangeBonus
     * @both
     */
    MODIFIER_PROPERTY_CAST_RANGE_BONUS = 110,
    /**
     * 百分比施法距离（例：折跃耀光）
     * @function GetModifierCastRangeBonusPercentage
     * @lua不可用
     */
    MODIFIER_PROPERTY_CAST_RANGE_BONUS_PERCENTAGE = 111,
    /**
     * 目标额外施法距离（未知）
     * @function GetModifierCastRangeBonusTarget
     * @both
     */
    MODIFIER_PROPERTY_CAST_RANGE_BONUS_TARGET = 112,
    /**
     * 定值施法距离（例：奥术至尊）
     * @function GetModifierCastRangeBonusStacking
     * @both
     */
    MODIFIER_PROPERTY_CAST_RANGE_BONUS_STACKING = 113,
    /**
     * 固有攻击距离设定（例：变形）
     * @function GetModifierAttackRangeOverride
     * @both
     */
    MODIFIER_PROPERTY_ATTACK_RANGE_BASE_OVERRIDE = 114,
    /**
     * 定值攻击距离（例：瞄准）
     * @function GetModifierAttackRangeBonus
     * @both
     */
    MODIFIER_PROPERTY_ATTACK_RANGE_BONUS = 115,
    /**
     * 特殊定值攻击距离（例：魔龙枪）
     * @function GetModifierAttackRangeBonusUnique
     * @both
     */
    MODIFIER_PROPERTY_ATTACK_RANGE_BONUS_UNIQUE = 116,
    /**
     * 百分比攻击距离（例：折跃耀光）
     * @function GetModifierAttackRangeBonusPercentage
     * @both
     */
    MODIFIER_PROPERTY_ATTACK_RANGE_BONUS_PERCENTAGE = 117,
    /**
     * 绝对攻击距离设定（例：变身）
     * @function GetModifierMaxAttackRange
     * @both
     */
    MODIFIER_PROPERTY_MAX_ATTACK_RANGE = 118,
    /**
     * 定值弹道速度（例：严寒烧灼）
     * @function GetModifierProjectileSpeedBonus
     * @both
     */
    MODIFIER_PROPERTY_PROJECTILE_SPEED_BONUS = 119,
    /**
     * 百分比弹道速度（例：银闪护符）
     * @function GetModifierProjectileSpeedBonusPercentage
     * @lua不可用
     */
    MODIFIER_PROPERTY_PROJECTILE_SPEED_BONUS_PERCENTAGE = 120,
    /**
     * 弹道特效替换（例：魔化）
     * @function GetModifierProjectileName
     * @both
     */
    MODIFIER_PROPERTY_PROJECTILE_NAME = 121,
    /**
     * 重生（例：绝冥再生）
     * @function ReincarnateTime
     * @both
     */
    MODIFIER_PROPERTY_REINCARNATION = 122,
    /**
     * 关闭重生特效（未知）
     * @function ReincarnateSuppressFX
     * @both
     */
    MODIFIER_PROPERTY_REINCARNATION_SUPPRESS_FX = 123,
    /**
     * 特殊定值复活时间（例：吸血灵魂）
     * @function GetModifierConstantRespawnTime
     * @both
     */
    MODIFIER_PROPERTY_RESPAWNTIME = 124,
    /**
     * 百分比复活时间降低（例：吸血灵魂）
     * @function GetModifierPercentageRespawnTime
     * @both
     */
    MODIFIER_PROPERTY_RESPAWNTIME_PERCENTAGE = 125,
    /**
     * 定值复活时间（例：天赋复活时间）
     * @function GetModifierStackingRespawnTime
     * @both
     */
    MODIFIER_PROPERTY_RESPAWNTIME_STACKING = 126,
    /**
     * 百分比冷却缩减（例：玲珑心）
     * @function GetModifierPercentageCooldown
     * @both
     */
    MODIFIER_PROPERTY_COOLDOWN_PERCENTAGE = 127,
    /**
     * 冷却速度调整（例：时间膨胀）
     * @function GetModifierPercentageCooldownOngoing
     * @lua不可用
     */
    MODIFIER_PROPERTY_COOLDOWN_PERCENTAGE_ONGOING = 128,
    /**
     * 百分比施法动作降低（例：逆转时空）
     * @function GetModifierPercentageCasttime
     * @both
     */
    MODIFIER_PROPERTY_CASTTIME_PERCENTAGE = 129,
    /**
     * 百分比攻击动作（例：海象神拳！）
     * @function GetModifierPercentageAttackAnimTime
     * @lua不可用
     */
    MODIFIER_PROPERTY_ATTACK_ANIM_TIME_PERCENTAGE = 130,
    /**
     * 特殊百分比魔法消耗降低（例：散慧对剑）
     * @function GetModifierPercentageManacost
     * @both
     */
    MODIFIER_PROPERTY_MANACOST_PERCENTAGE = 131,
    /**
     * 百分比魔法消耗降低（例：奥术符）
     * @function GetModifierPercentageManacostStacking
     * @both
     */
    MODIFIER_PROPERTY_MANACOST_PERCENTAGE_STACKING = 132,
    /**
     * 特殊百分比生命消耗降低（未知）
     * @function GetModifierPercentageHealthcost
     * @both
     */
    MODIFIER_PROPERTY_HEALTHCOST_PERCENTAGE = 133,
    /**
     * 百分比生命消耗降低（未知）
     * @function GetModifierPercentageHealthcostStacking
     * @both
     */
    MODIFIER_PROPERTY_HEALTHCOST_PERCENTAGE_STACKING = 134,
    /**
     * 定值死亡损失金钱（未知）
     * @function GetModifierConstantDeathGoldCost
     * @both
     */
    MODIFIER_PROPERTY_DEATHGOLDCOST = 135,
    /**
     * 百分比死亡损失金钱（例：海盗帽）
     * @function GetModifierPercentageDeathGoldCost
     * @both
     */
    MODIFIER_PROPERTY_PERCENTAGE_DEATHGOLDCOST = 136,
    /**
     * 经验倍率调整（例：从众心理）
     * @function GetModifierPercentageExpRateBoost
     * @both
     */
    MODIFIER_PROPERTY_EXP_RATE_BOOST = 137,
    /**
     * 金钱倍率调整（例：占卜师牌组）
     * @function GetModifierPercentageGoldRateBoost
     * @both
     */
    MODIFIER_PROPERTY_GOLD_RATE_BOOST = 138,
    /**
     * 击杀助攻金钱提升（例：职业猎人）
     * @function GetModifierPercentageKillAssistGoldBoost
     * @both
     */
    MODIFIER_PROPERTY_KILL_ASSIST_GOLD_BOOST = 139,
    /**
     * 百分比经验金钱转化（未知）
     * @function GetModifierPercentageConvertExpToGold
     * @lua不可用
     */
    MODIFIER_PROPERTY_CONVERT_EXP_TO_GOLD_PCT = 140,
    /**
     * 致命一击（例：混沌一击）
     * @function GetModifierPreAttack_CriticalStrike
     * @both
     */
    MODIFIER_PROPERTY_PREATTACK_CRITICALSTRIKE = 141,
    /**
     * 目标致命一击（例：翔影之钗）
     * @function GetModifierPreAttack_Target_CriticalStrike
     * @both
     */
    MODIFIER_PROPERTY_PREATTACK_TARGET_CRITICALSTRIKE = 142,
    /**
     * 魔法伤害格挡（例：凝魂之露）
     * @function GetModifierMagical_ConstantBlock
     * @both
     */
    MODIFIER_PROPERTY_MAGICAL_CONSTANT_BLOCK = 143,
    /**
     * 物理伤害格挡（例：海妖外壳）
     * @function GetModifierPhysical_ConstantBlock
     * @both
     */
    MODIFIER_PROPERTY_PHYSICAL_CONSTANT_BLOCK = 144,
    /**
     * 特殊物理伤害格挡（未知）
     * @function GetModifierPhysical_ConstantBlockSpecial
     * @both
     */
    MODIFIER_PROPERTY_PHYSICAL_CONSTANT_BLOCK_SPECIAL = 145,
    /**
     * 额外物理伤害格挡（例：利维坦的渔获）
     * @function GetModifierPhysical_ConstantBlockBonus
     * @lua不可用
     */
    MODIFIER_PROPERTY_PHYSICAL_CONSTANT_BLOCK_BONUS = 146,
    /**
     * 近战物理伤害格挡概率覆盖（例：刚毅）
     * @function GetModifierInnateDamageBlockPctOverride
     * @lua不可用
     */
    MODIFIER_PROPERTY_INNATE_DAMAGE_BLOCK_PCT_OVERRIDE = 147,
    /**
     * 前端伤害格挡（例：魔法盾）
     * @function GetModifierPhysical_ConstantBlockUnavoidablePreArmor
     * @both
     */
    MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK_UNAVOIDABLE_PRE_ARMOR = 148,
    /**
     * 末端伤害格挡（例：肉盾）
     * @function GetModifierTotal_ConstantBlock
     * @both
     */
    MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK = 149,
    /**
     * 完整动画覆盖（例：太多了）
     * @function GetOverrideAnimation
     * @both
     */
    MODIFIER_PROPERTY_OVERRIDE_ANIMATION = 150,
    /**
     * 动画速率调整（例：太多了）
     * @function GetOverrideAnimationRate
     * @both
     */
    MODIFIER_PROPERTY_OVERRIDE_ANIMATION_RATE = 151,
    /**
     * 技能抵挡（例：林肯法球）
     * @function GetAbsorbSpell
     * @both
     */
    MODIFIER_PROPERTY_ABSORB_SPELL = 152,
    /**
     * 技能反弹（例：清莲宝珠）
     * @function GetReflectSpell
     * @both
     */
    MODIFIER_PROPERTY_REFLECT_SPELL = 153,
    /**
     * 禁止自动攻击（例：相位转移）
     * @function GetDisableAutoAttack
     * @both
     */
    MODIFIER_PROPERTY_DISABLE_AUTOATTACK = 154,
    /**
     * 定值白天视野（例：辰星破晓）
     * @function GetBonusDayVision
     * @both
     */
    MODIFIER_PROPERTY_BONUS_DAY_VISION = 155,
    /**
     * 百分比白天视野（例：邪道私语）
     * @function GetBonusDayVisionPercentage
     * @both
     */
    MODIFIER_PROPERTY_BONUS_DAY_VISION_PERCENTAGE = 156,
    /**
     * 定值夜晚视野（例：月之祝福）
     * @function GetBonusNightVision
     * @both
     */
    MODIFIER_PROPERTY_BONUS_NIGHT_VISION = 157,
    /**
     * 特殊定值夜晚视野（例：银月之晶）
     * @function GetBonusNightVisionUnique
     * @both
     */
    MODIFIER_PROPERTY_BONUS_NIGHT_VISION_UNIQUE = 158,
    /**
     * 百分比日夜视野（例：老版荒芜）
     * @function GetBonusVisionPercentage
     * @both
     */
    MODIFIER_PROPERTY_BONUS_VISION_PERCENTAGE = 159,
    /**
     * 绝对白天视野上限设定（例：丛林之舞）
     * @function GetFixedDayVision
     * @both
     */
    MODIFIER_PROPERTY_FIXED_DAY_VISION = 160,
    /**
     * 绝对夜晚视野上限设定（例：丛林之舞）
     * @function GetFixedNightVision
     * @both
     */
    MODIFIER_PROPERTY_FIXED_NIGHT_VISION = 161,
    /**
     * 最低生命值设定（例：薄葬）
     * @function GetMinHealth
     * @both
     */
    MODIFIER_PROPERTY_MIN_HEALTH = 162,
    /**
     * 最低魔法值设定（例：特别储备）
     * @function GetMinMana
     * @both
     */
    MODIFIER_PROPERTY_MIN_MANA = 163,
    /**
     * 物理伤害无效化（例：守护天使）
     * @function GetAbsoluteNoDamagePhysical
     * @both
     */
    MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PHYSICAL = 164,
    /**
     * 魔法伤害无效化（例：命运敕令）
     * @function GetAbsoluteNoDamageMagical
     * @both
     */
    MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_MAGICAL = 165,
    /**
     * 纯粹伤害无效化（例：防御符文）
     * @function GetAbsoluteNoDamagePure
     * @both
     */
    MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PURE = 166,
    /**
     * 幻象标识（例：幻象默认）
     * @function GetIsIllusion
     * @both
     */
    MODIFIER_PROPERTY_IS_ILLUSION = 167,
    /**
     * 幻象标签（例：幻象默认）
     * @function GetModifierIllusionLabel
     * @both
     */
    MODIFIER_PROPERTY_ILLUSION_LABEL = 168,
    /**
     * 强幻象标签（例：复仇光环）
     * @function GetModifierStrongIllusion
     * @lua不可用
     */
    MODIFIER_PROPERTY_STRONG_ILLUSION = 169,
    /**
     * 可施法幻象标签（例：复仇光环）
     * @function GetModifierSuperIllusion
     * @lua不可用
     */
    MODIFIER_PROPERTY_SUPER_ILLUSION = 170,
    /**
     * 终极技能可施法幻象标签（例：复仇光环）
     * @function GetModifierSuperIllusionWithUltimate
     * @both
     */
    MODIFIER_PROPERTY_SUPER_ILLUSION_WITH_ULTIMATE = 171,
    /**
     * 死亡可获得经验（例：复仇光环）
     * @function GetModifierXPDuringDeath
     * @lua不可用
     */
    MODIFIER_PROPERTY_XP_DURING_DEATH = 172,
    /**
     * 百分比转身速率（例：粘性燃油）
     * @function GetModifierTurnRate_Percentage
     * @both
     */
    MODIFIER_PROPERTY_TURN_RATE_PERCENTAGE = 173,
    /**
     * 转身速率覆盖（例：相位鞋）
     * @function GetModifierTurnRate_Override
     * @both
     */
    MODIFIER_PROPERTY_TURN_RATE_OVERRIDE = 174,
    /**
     * 生命冻结（例：冰晶爆轰）
     * @function GetDisableHealing
     * @both
     */
    MODIFIER_PROPERTY_DISABLE_HEALING = 175,
    /**
     * 魔法获取无效化（例：神杖闪烁）
     * @function GetDisableManaGain
     * @lua不可用
     */
    MODIFIER_PROPERTY_DISABLE_MANA_GAIN = 176,
    /**
     * 无视攻击距离（例：飓风长戟）
     * @function GetAlwaysAllowAttack
     * @both
     */
    MODIFIER_PROPERTY_ALWAYS_ALLOW_ATTACK = 177,
    /**
     * 可攻击虚无单位（例：超自然）
     * @function GetAllowEtherealAttack
     * @lua不可用
     */
    MODIFIER_PROPERTY_ALWAYS_ETHEREAL_ATTACK = 178,
    /**
     * 无视攻击免疫（例：超自然）
     * @function GetOverrideAttackMagical
     * @both
     */
    MODIFIER_PROPERTY_OVERRIDE_ATTACK_MAGICAL = 179,
    /**
     * 即时刷新统计情况（例：奥术符）
     * @function GetModifierUnitStatsNeedsRefresh
     * @both
     */
    MODIFIER_PROPERTY_UNIT_STATS_NEEDS_REFRESH = 180,
    /**
     * 百分比小兵击杀金钱（未知）
     * @both
     */
    MODIFIER_PROPERTY_BOUNTY_CREEP_MULTIPLIER = 181,
    /**
     * 百分比其他单位击杀金钱（未知）
     * @both
     */
    MODIFIER_PROPERTY_BOUNTY_OTHER_MULTIPLIER = 182,
    /**
     * 禁止升级技能（例：变形）
     * @function GetModifierUnitDisllowUpgrading
     * @lua不可用
     */
    MODIFIER_PROPERTY_UNIT_DISALLOW_UPGRADING = 183,
    /**
     * 持续躲避（例：老版扫射）
     * @function GetModifierDodgeProjectile
     * @both
     */
    MODIFIER_PROPERTY_DODGE_PROJECTILE = 184,
    /**
     * 仅触发攻击动作特效（例：Ti9战鼓）
     * @function GetTriggerCosmeticAndEndAttack
     * @lua不可用
     */
    MODIFIER_PROPERTY_TRIGGER_COSMETIC_AND_END_ATTACK = 185,
    /**
     * 百分比属性攻击力（例：内在优势）
     * @function GetPrimaryStatDamageMultiplier
     * @both
     */
    MODIFIER_PROPERTY_PRIMARY_STAT_DAMAGE_MULTIPLIER = 186,
    /**
     * 致死打击（例：重型箭袋）
     * @function GetModifierPreAttack_DeadlyBlow
     * @lua不可用
     */
    MODIFIER_PROPERTY_PREATTACK_DEADLY_BLOW = 187,
    /**
     * 固守原位仍自动攻击（未知）
     * @function GetAlwaysAutoAttackWhileHoldPosition
     * @lua不可用
     */
    MODIFIER_PROPERTY_ALWAYS_AUTOATTACK_WHILE_HOLD_POSITION = 188,
    /**
     * 百分比护甲穿透（例：地狱之裂）
     * @function GetPhysicalArmorPiercingPercentageTarget
     * @lua不可用
     */
    MODIFIER_PROPERTY_PHYSICAL_ARMOR_PIERCING_PERCENTAGE_TARGET = 189,
    /**
     * 百分比魔法抗性穿透（未知）
     * @function GetMagicalArmorPiercingPercentageTarget
     * @lua不可用
     */
    MODIFIER_PROPERTY_MAGICAL_ARMOR_PIERCING_PERCENTAGE_TARGET = 190,
    /**
     * 致命一击倍率增加（未知）
     * @function GetCriticalStrikeBonus
     * @lua不可用
     */
    MODIFIER_PROPERTY_CRITICAL_STRIKE_BONUS = 191,
    /**
     * 物理纯粹转化攻击特效（未知）
     * @function GetConvertAttackPhysicalToPure
     * @lua不可用
     */
    MODIFIER_PROPERTY_CONVERT_ATTACK_PHYSICAL_TO_PURE = 192,
    /**
     * 增益时间增强（例：安可）
     * @function GetBuffAmplification
     * @lua不可用
     */
    MODIFIER_PROPERTY_BUFF_AMPLIFICATION = 193,
    /**
     * 选定施法目标时（例：老版灵匣）
     * @function OnSpellTargetReady
     * @both
     */
    MODIFIER_EVENT_ON_SPELL_TARGET_READY = 194,
    /**
     * 记录攻击时（例：神枪在手）
     * @function OnAttackRecord
     * @both
     */
    MODIFIER_EVENT_ON_ATTACK_RECORD = 195,
    /**
     * 开始攻击抬手时（例：不可侵犯）
     * @function OnAttackStart
     * @both
     */
    MODIFIER_EVENT_ON_ATTACK_START = 196,
    /**
     * 攻击发出时（例：暗影之境）
     * @function OnAttack
     * @both
     */
    MODIFIER_EVENT_ON_ATTACK = 197,
    /**
     * 攻击命中时（例：腐蚀兵械）
     * @function OnAttackLanded
     * @both
     */
    MODIFIER_EVENT_ON_ATTACK_LANDED = 198,
    /**
     * 攻击失败时（例：液态火）
     * @function OnAttackFail
     * @both
     */
    MODIFIER_EVENT_ON_ATTACK_FAIL = 199,
    /**
     * 攻击友方时（例：噩梦）
     * @function OnAttackAllied
     * @both
     */
    MODIFIER_EVENT_ON_ATTACK_ALLIED = 200,
    /**
     * 弹道被躲避时（例：顽皮克敌）
     * @function OnProjectileDodge
     * @both
     */
    MODIFIER_EVENT_ON_PROJECTILE_DODGE = 201,
    /**
     * 下达指令时（例：相位转移）
     * @function OnOrder
     * @both
     */
    MODIFIER_EVENT_ON_ORDER = 202,
    /**
     * 收到指令时（例：能量齿轮）
     * @function OnOrderReceived
     * @lua不可用
     */
    MODIFIER_EVENT_ON_ORDER_RECEIVED = 203,
    /**
     * 单位移动时（例：隐匿）
     * @function OnUnitMoved
     * @both
     */
    MODIFIER_EVENT_ON_UNIT_MOVED = 204,
    /**
     * 开始施法时（例：不稳定化合物）
     * @function OnAbilityStart
     * @both
     */
    MODIFIER_EVENT_ON_ABILITY_START = 205,
    /**
     * 施法完成时（例：余震）
     * @function OnAbilityExecuted
     * @both
     */
    MODIFIER_EVENT_ON_ABILITY_EXECUTED = 206,
    /**
     * 完全施放时（例：奥术积累）
     * @function OnAbilityFullyCast
     * @both
     */
    MODIFIER_EVENT_ON_ABILITY_FULLY_CAST = 207,
    /**
     * 打破隐身时（例：影刃）
     * @function OnBreakInvisibility
     * @both
     */
    MODIFIER_EVENT_ON_BREAK_INVISIBILITY = 208,
    /**
     * 持续施法结束时（例：遗言）
     * @function OnAbilityEndChannel
     * @both
     */
    MODIFIER_EVENT_ON_ABILITY_END_CHANNEL = 209,
    /**
     * 升级时（未知）
     * @lua不可用
     */
    MODIFIER_EVENT_ON_PROCESS_UPGRADE = 210,
    /**
     * 刷新时（未知）
     * @lua不可用
     */
    MODIFIER_EVENT_ON_REFRESH = 211,
    /**
     * 受到伤害时（例：腐蚀皮肤）
     * @function OnTakeDamage
     * @both
     */
    MODIFIER_EVENT_ON_TAKEDAMAGE = 212,
    /**
     * 阻止死亡时（例：禽戏）
     * @function OnDamagePrevented
     * @both
     */
    MODIFIER_EVENT_ON_DEATH_PREVENTED = 213,
    /**
     * 状态改变时（例：幽魂护罩）
     * @function OnStateChanged
     * @both
     */
    MODIFIER_EVENT_ON_STATE_CHANGED = 214,
    /**
     * 触发法球效果时（未知）
     * @lua不可用
     */
    MODIFIER_EVENT_ON_ORB_EFFECT = 215,
    /**
     * 产生攻击分裂时（例：巨力挥舞）
     * @function OnProcessCleave
     * @both
     */
    MODIFIER_EVENT_ON_PROCESS_CLEAVE = 216,
    /**
     * 造成伤害时（例：幽魂之剑）
     * @function OnDamageCalculated
     * @both
     */
    MODIFIER_EVENT_ON_DAMAGE_CALCULATED = 217,
    /**
     * 造成技能伤害时（例：束手束脚）
     * @function OnMagicDamageCalculated
     * @both
     */
    MODIFIER_EVENT_ON_MAGIC_DAMAGE_CALCULATED = 218,
    /**
     * 攻击结束时（例：并列）
     * @function OnAttacked
     * @both
     */
    MODIFIER_EVENT_ON_ATTACKED = 219,
    /**
     * 单位死亡时（例：衰退光环）
     * @function OnDeath
     * @both
     */
    MODIFIER_EVENT_ON_DEATH = 220,
    /**
     * 完全死亡时（例：临别一枪）
     * @function OnDeathCompleted
     * @both
     */
    MODIFIER_EVENT_ON_DEATH_COMPLETED = 221,
    /**
     * 单位复活时（例：下地狱再上来）
     * @function OnRespawn
     * @both
     */
    MODIFIER_EVENT_ON_RESPAWN = 222,
    /**
     * 消耗魔法时（例：幽冥守卫）
     * @function OnSpentMana
     * @both
     */
    MODIFIER_EVENT_ON_SPENT_MANA = 223,
    /**
     * 消耗生命时（例：回响之笼）
     * @function OnSpentHealth
     * @both
     */
    MODIFIER_EVENT_ON_SPENT_HEALTH = 224,
    /**
     * 消耗物品充能时（例：分则能成）
     * @function OnSpentItemCharge
     * @lua不可用
     */
    MODIFIER_EVENT_ON_SPENT_ITEM_CHARGE = 225,
    /**
     * 正在传送时（例：剑刃风暴）
     * @function OnTeleporting
     * @both
     */
    MODIFIER_EVENT_ON_TELEPORTING = 226,
    /**
     * 传送结束时（例：降临）
     * @function OnTeleported
     * @both
     */
    MODIFIER_EVENT_ON_TELEPORTED = 227,
    /**
     * 设定单位位置时（例：扔出）
     * @function OnSetLocation
     * @both
     */
    MODIFIER_EVENT_ON_SET_LOCATION = 228,
    /**
     * 获取生命时（例：虚无之恩）
     * @function OnHealthGained
     * @both
     */
    MODIFIER_EVENT_ON_HEALTH_GAINED = 229,
    /**
     * 获取魔法时（例：羁绊）
     * @function OnManaGained
     * @both
     */
    MODIFIER_EVENT_ON_MANA_GAINED = 230,
    /**
     * 产生击杀归属时（例：死神镰刀）
     * @function OnTakeDamageKillCredit
     * @both
     */
    MODIFIER_EVENT_ON_TAKEDAMAGE_KILLCREDIT = 231,
    /**
     * 击杀英雄时（例：血色外衣）
     * @function OnHeroKilled
     * @both
     */
    MODIFIER_EVENT_ON_HERO_KILLED = 232,
    /**
     * 获得治疗时（例：羁绊）
     * @function OnHealReceived
     * @both
     */
    MODIFIER_EVENT_ON_HEAL_RECEIVED = 233,
    /**
     * 获取生命转移时（例：克莱拉牧杖）
     * @function OnRedirectHealthGain
     * @lua不可用
     */
    MODIFIER_EVENT_ON_REDIRECT_HEALTH_GAIN = 234,
    /**
     * 摧毁建筑时（例：毁灭之赏）
     * @function OnBuildingKilled
     * @both
     */
    MODIFIER_EVENT_ON_BUILDING_KILLED = 235,
    /**
     * 模型替换时（例：古龙形态）
     * @function OnModelChanged
     * @both
     */
    MODIFIER_EVENT_ON_MODEL_CHANGED = 236,
    /**
     * 施加modifier时（例：咤）
     * @function OnModifierAdded
     * @both
     */
    MODIFIER_EVENT_ON_MODIFIER_ADDED = 237,
    /**
     * 移除modifier时（例：神杖高射火炮）
     * @function OnModifierRemoved
     * @lua不可用
     */
    MODIFIER_EVENT_ON_MODIFIER_REMOVED = 238,
    /**
     * 选择神杖升级时（例：元素祈唤）
     * @function OnScepterUpgradeSelected
     * @lua不可用
     */
    MODIFIER_EVENT_ON_SCEPTER_UPGRADE_SELECTED = 239,
    /**
     * 选择魔晶升级时（例：元素祈唤）
     * @function OnShardUpgradeSelected
     * @lua不可用
     */
    MODIFIER_EVENT_ON_SHARD_UPGRADE_SELECTED = 240,
    /**
     * 技能数值说明（例：太多了）
     * @function OnTooltip
     * @both
     */
    MODIFIER_PROPERTY_TOOLTIP = 241,
    /**
     * 模型替换（例：真熊形态）
     * @function GetModifierModelChange
     * @both
     */
    MODIFIER_PROPERTY_MODEL_CHANGE = 242,
    /**
     * 定值模型体积（例：腐朽）
     * @function GetModifierModelScale
     * @both
     */
    MODIFIER_PROPERTY_MODEL_SCALE = 243,
    /**
     * 模型体积动画时间（例：逃生技）
     * @function GetModifierModelScaleAnimateTime
     * @both
     */
    MODIFIER_PROPERTY_MODEL_SCALE_ANIMATE_TIME = 244,
    /**
     * 模型体积缓入缓出动画（未知）
     * @function GetModifierModelScaleUseInOutEase
     * @both
     */
    MODIFIER_PROPERTY_MODEL_SCALE_USE_IN_OUT_EASE = 245,
    /**
     * 模型体积覆盖（未知）
     * @function GetModifierModelScaleConstant
     * @both
     */
    MODIFIER_PROPERTY_MODEL_SCALE_CONSTANT = 246,
    /**
     * 神杖升级（例：神杖）
     * @function GetModifierScepter
     * @both
     */
    MODIFIER_PROPERTY_IS_SCEPTER = 247,
    /**
     * 魔晶升级（例：魔晶）
     * @function GetModifierShard
     * @lua不可用
     */
    MODIFIER_PROPERTY_IS_SHARD = 248,
    /**
     * 扫描冷却降低（例：望远镜）
     * @function GetModifierRadarCooldownReduction
     * @lua不可用
     */
    MODIFIER_PROPERTY_RADAR_COOLDOWN_REDUCTION = 249,
    /**
     * 动画转变（例：太多了）
     * @function GetActivityTranslationModifiers
     * @both
     */
    MODIFIER_PROPERTY_TRANSLATE_ACTIVITY_MODIFIERS = 250,
    /**
     * 攻击声音特效（例：太多了）
     * @function GetAttackSound
     * @both
     */
    MODIFIER_PROPERTY_TRANSLATE_ATTACK_SOUND = 251,
    /**
     * 倒计时特效（例：普通召唤单位默认）
     * @function GetUnitLifetimeFraction
     * @both
     */
    MODIFIER_PROPERTY_LIFETIME_FRACTION = 252,
    /**
     * 模型视野（例：风雷之击）
     * @function GetModifierProvidesFOWVision
     * @both
     */
    MODIFIER_PROPERTY_PROVIDES_FOW_POSITION = 253,
    /**
     * 施放技能消耗生命值（未知）
     * @function GetModifierSpellsRequireHP
     * @both
     */
    MODIFIER_PROPERTY_SPELLS_REQUIRE_HP = 254,
    /**
     * 通过生命值施放技能（例：血魔法）
     * @function GetModifierConvertManaCostToHealthCost
     * @both
     */
    MODIFIER_PROPERTY_CONVERT_MANA_COST_TO_HEALTH_COST = 255,
    /**
     * 强制小地图显示（例：球状闪电）
     * @function GetForceDrawOnMinimap
     * @both
     */
    MODIFIER_PROPERTY_FORCE_DRAW_MINIMAP = 256,
    /**
     * 朝向锁定（例：护身甲盾）
     * @function GetModifierDisableTurning
     * @both
     */
    MODIFIER_PROPERTY_DISABLE_TURNING = 257,
    /**
     * 忽略施法角度（例：喷气背包）
     * @function GetModifierIgnoreCastAngle
     * @both
     */
    MODIFIER_PROPERTY_IGNORE_CAST_ANGLE = 258,
    /**
     * 改变技能数值（未知）
     * @function GetModifierChangeAbilityValue
     * @both
     */
    MODIFIER_PROPERTY_CHANGE_ABILITY_VALUE = 259,
    /**
     * 覆盖技能数值（例：太多了）
     * @function GetModifierOverrideAbilitySpecial
     * @both
     */
    MODIFIER_PROPERTY_OVERRIDE_ABILITY_SPECIAL = 260,
    /**
     * 特殊覆盖技能数值（例：太多了）
     * @function GetModifierOverrideAbilitySpecialValue
     * @both
     */
    MODIFIER_PROPERTY_OVERRIDE_ABILITY_SPECIAL_VALUE = 261,
    /**
     * 技能排布隐藏（例：感染）
     * @function GetModifierAbilityLayout
     * @both
     */
    MODIFIER_PROPERTY_ABILITY_LAYOUT = 262,
    /**
     * 被支配时（例：感染）
     * @function OnDominated
     * @both
     */
    MODIFIER_EVENT_ON_DOMINATED = 263,
    /**
     * 击杀时（例：雷神之锤）
     * @function OnKill
     * @both
     */
    MODIFIER_EVENT_ON_KILL = 264,
    /**
     * 助攻时（例：利维坦的渔获）
     * @function OnAssist
     * @both
     */
    MODIFIER_EVENT_ON_ASSIST = 265,
    /**
     * 风暴双雄克隆体标签（例：风暴双雄）
     * @function GetModifierTempestDouble
     * @both
     */
    MODIFIER_PROPERTY_TEMPEST_DOUBLE = 266,
    /**
     * 模型替换时粒子特效（例：暗夜猎影）
     * @function PreserveParticlesOnModelChanged
     * @both
     */
    MODIFIER_PROPERTY_PRESERVE_PARTICLES_ON_MODEL_CHANGE = 267,
    /**
     * 攻击完成时（例：强化图腾）
     * @function OnAttackFinished
     * @both
     */
    MODIFIER_EVENT_ON_ATTACK_FINISHED = 268,
    /**
     * 忽略冷却（未知）
     * @function GetModifierIgnoreCooldown
     * @lua不可用
     */
    MODIFIER_PROPERTY_IGNORE_COOLDOWN = 269,
    /**
     * 可攻击树木（未知）
     * @function GetModifierCanAttackTrees
     * @both
     */
    MODIFIER_PROPERTY_CAN_ATTACK_TREES = 270,
    /**
     * 设置飞行高度（例：丛林之舞）
     * @function GetVisualZDelta
     * @both
     */
    MODIFIER_PROPERTY_VISUAL_Z_DELTA = 271,
    /**
     * 起飞速度覆盖（例：冰川）
     * @function GetVisualZSpeedBaseOverride
     * @both
     */
    MODIFIER_PROPERTY_VISUAL_Z_SPEED_BASE_OVERRIDE = 272,
    /**
     * 幻象承受伤害调整（例：幻象默认）
     * @lua不可用
     */
    MODIFIER_PROPERTY_INCOMING_DAMAGE_ILLUSION = 273,
    /**
     * 不使攻击目标暴露（未知）
     * @function GetModifierNoVisionOfAttacker
     * @both
     */
    MODIFIER_PROPERTY_DONT_GIVE_VISION_OF_ATTACKER = 274,
    /**
     * 状态栏即时更新说明（例：太多了）
     * @function OnTooltip2
     * @both
     */
    MODIFIER_PROPERTY_TOOLTIP2 = 275,
    /**
     * 攻击记录销毁时（例：奥术天球）
     * @function OnAttackRecordDestroy
     * @both
     */
    MODIFIER_EVENT_ON_ATTACK_RECORD_DESTROY = 276,
    /**
     * 弹道被摧毁时（例：热血竞技场）
     * @function OnProjectileObstructionHit
     * @both
     */
    MODIFIER_EVENT_ON_PROJECTILE_OBSTRUCTION_HIT = 277,
    /**
     * 跳过传送（未知）
     * @function GetSuppressTeleport
     * @both
     */
    MODIFIER_PROPERTY_SUPPRESS_TELEPORT = 278,
    /**
     * 攻击取消时（例：神枪在手）
     * @function OnAttackCancelled
     * @both
     */
    MODIFIER_EVENT_ON_ATTACK_CANCELLED = 279,
    /**
     * 不触发攻击分裂（例：神之谴戒）
     * @function GetSuppressCleave
     * @lua不可用
     */
    MODIFIER_PROPERTY_SUPPRESS_CLEAVE = 280,
    /**
     * 机器人额外分数（未知）
     * @function BotAttackScoreBonus
     * @lua不可用
     */
    MODIFIER_PROPERTY_BOT_ATTACK_SCORE_BONUS = 281,
    /**
     * 百分比减攻速调整（未知）
     * @function GetModifierAttackSpeedReductionPercentage
     * @both
     */
    MODIFIER_PROPERTY_ATTACKSPEED_REDUCTION_PERCENTAGE = 282,
    /**
     * 百分比减移速调整（未知）
     * @function GetModifierMoveSpeedReductionPercentage
     * @both
     */
    MODIFIER_PROPERTY_MOVESPEED_REDUCTION_PERCENTAGE = 283,
    /**
     * 可在移动时攻击（例：集中火力）
     * @lua不可用
     */
    MODIFIER_PROPERTY_ATTACK_WHILE_MOVING_TARGET = 284,
    /**
     * 百分比攻击速度（例：长大）
     * @function GetModifierAttackSpeedPercentage
     * @both
     */
    MODIFIER_PROPERTY_ATTACKSPEED_PERCENTAGE = 285,
    /**
     * 尝试躲避弹道时（例：猎手旋镖）
     * @function OnAttemptProjectileDodge
     * @both
     */
    MODIFIER_EVENT_ON_ATTEMPT_PROJECTILE_DODGE = 286,
    /**
     * 特殊百分比冷却缩减（例：突变模式冷却调整）
     * @function GetModifierPercentageCooldownStacking
     * @both
     */
    MODIFIER_PROPERTY_COOLDOWN_PERCENTAGE_STACKING = 287,
    /**
     * 技能共享目标（例：位面空洞）
     * @function GetModifierSpellRedirectTarget
     * @lua不可用
     */
    MODIFIER_PROPERTY_SPELL_REDIRECT_TARGET = 288,
    /**
     * 定值转身速率（例：织网）
     * @function GetModifierTurnRateConstant
     * @lua不可用
     */
    MODIFIER_PROPERTY_TURN_RATE_CONSTANT = 289,
    /**
     * 中立物品栏可使用普通物品（例：囤积狂鼠）
     * @function GetModifierIsPackRat
     * @lua不可用
     */
    MODIFIER_PROPERTY_PACK_RAT = 290,
    /**
     * 施加方百分比物理伤害（例：怨灵之契）
     * @function GetModifierPhysicalDamageOutgoing_Percentage
     * @lua不可用
     */
    MODIFIER_PROPERTY_PHYSICALDAMAGEOUTGOING_PERCENTAGE = 291,
    /**
     * 击退抗性（例：坚固核心）
     * @function GetModifierKnockbackAmplification_Percentage
     * @lua不可用
     */
    MODIFIER_PROPERTY_KNOCKBACK_AMPLIFICATION_PERCENTAGE = 292,
    /**
     * 特殊生命条（例：攻击次数型单位）
     * @function GetModifierHealthBarPips
     * @both
     */
    MODIFIER_PROPERTY_HEALTHBAR_PIPS = 293,
    /**
     * 全类型伤害护盾（例：无光之盾）
     * @function GetModifierIncomingDamageConstant
     * @both
     */
    MODIFIER_PROPERTY_INCOMING_DAMAGE_CONSTANT = 294,
    /**
     * 施法成功时（例：绝刃）
     * @function OnSpellAppliedSuccessfully
     * @both
     */
    MODIFIER_EVENT_SPELL_APPLIED_SUCCESSFULLY = 295,
    /**
     * 尾端伤害无效化（例：虚妄之诺）
     * @function GetModifierAvoidDamageAfterReductions
     * @both
     */
    MODIFIER_PROPERTY_AVOID_DAMAGE_AFTER_REDUCTIONS = 296,
    /**
     * 致使攻击失败（例：林渊旅人）
     * @function GetModifierPropetyFailAttack
     * @lua不可用
     */
    MODIFIER_PROPERTY_FAIL_ATTACK = 297,
    /**
     * 前结算伤害调整（未知）
     * @function GetModifierPrereduceIncomingDamage_Mult
     * @lua不可用
     */
    MODIFIER_PROPERTY_PREREDUCE_INCOMING_DAMAGE_MULT = 298,
    /**
     * 跳过死亡特效（未知）
     * @function GetModifierSuppressFullscreenDeathFX
     * @both
     */
    MODIFIER_PROPERTY_SUPPRESS_FULLSCREEN_DEATH_FX = 299,
    /**
     * 后结算伤害护盾（未知）
     * @function MODIFIER_PROPERTY_INCOMING_DAMAGE_CONSTANT_POST
     * @lua不可用
     */
    MODIFIER_PROPERTY_INCOMING_DAMAGE_CONSTANT_POST = 300,
    /**
     * 特殊百分比总攻击调整（例：窒碍短匕）
     * @function GetModifierDamageOutgoing_PercentageMultiplicative
     * @lua不可用
     */
    MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE_MULTIPLICATIVE = 301,
    /**
     * 被动金钱倍率（例：贤者石）
     * @function GetModifierTickGold_Multiplier
     * @lua不可用
     */
    MODIFIER_PROPERTY_TICK_GOLD_MULTIPLIER = 302,
    /**
     * 特殊减速抗性（例：散华）
     * @function GEtModifierSlowResistance_Unique
     * @lua不可用
     */
    MODIFIER_PROPERTY_SLOW_RESISTANCE_UNIQUE = 303,
    /**
     * 减速抗性（例：神之力量）
     * @function GetModifierSlowResistance_Stacking
     * @both
     */
    MODIFIER_PROPERTY_SLOW_RESISTANCE_STACKING = 304,
    /**
     * 减速抗性影响攻速（例：不可逾越）
     * @function GetModifierSlowResistanceAppliesToAttacks
     * @lua不可用
     */
    MODIFIER_PROPERTY_SLOW_RESISTANCE_APPLIES_TO_ATTACKS = 305,
    /**
     * 百分比作用范围加成（例：凶）
     * @function GetModifierAoEBonusPercentage
     * @lua不可用
     */
    MODIFIER_PROPERTY_AOE_BONUS_PERCENTAGE = 306,
    /**
     * 区域百分比弹道速度（例：逆转时空）
     * @function GetModifierProjectileSpeed
     * @lua不可用
     */
    MODIFIER_PROPERTY_PROJECTILE_SPEED = 307,
    /**
     * 区域百分比目标弹道速度（未知）
     * @function GetModifierProjectileSpeedTarget
     * @lua不可用
     */
    MODIFIER_PROPERTY_PROJECTILE_SPEED_TARGET = 308,
    /**
     * 变为力量（例：潮落）
     * @function GetModifierBecomeStrength
     * @lua不可用
     */
    MODIFIER_PROPERTY_BECOME_STRENGTH = 309,
    /**
     * 变为敏捷（例：潮涨）
     * @function GetModifierBecomeAgility
     * @lua不可用
     */
    MODIFIER_PROPERTY_BECOME_AGILITY = 310,
    /**
     * 变为智力（未知）
     * @function GetModifierBecomeIntelligence
     * @lua不可用
     */
    MODIFIER_PROPERTY_BECOME_INTELLIGENCE = 311,
    /**
     * 变为全才（例：老版冥界亚龙天赋）
     * @function GetModifierBecomeUniversal
     * @lua不可用
     */
    MODIFIER_PROPERTY_BECOME_UNIVERSAL = 312,
    /**
     * 强制触发魔棒时（例：幽冥守卫）
     * @function OnForceProcMagicStick
     * @lua不可用
     */
    MODIFIER_EVENT_ON_FORCE_PROC_MAGIC_STICK = 313,
    /**
     * 生命移除时（例：回响之笼）
     * @function OnDamageHPLoss
     * @both
     */
    MODIFIER_EVENT_ON_DAMAGE_HPLOSS = 314,
    /**
     * 智慧神龛共享（例：古龙学者）
     * @function GetModifierShareXPRune
     * @both
     */
    MODIFIER_PROPERTY_SHARE_XPRUNE = 315,
    /**
     * 智慧神龛冷却时间覆盖（未知）
     * @function GetModifierXPFountainCountdownTimeOverride
     * @both
     */
    MODIFIER_PROPERTY_XP_FOUNTAIN_COUNTDOWN_TIME_OVERRIDE = 316,
    /**
     * 死亡无回城卷轴（例：先天基恩载具）
     * @function GetModifierNoFreeTPScrollOnDeath
     * @both
     */
    MODIFIER_PROPERTY_NO_FREE_TP_SCROLL_ON_DEATH = 317,
    /**
     * 额外中立物品选项（例：三只手）
     * @function GetModifierHasBonusNeutralItemChoice
     * @lua不可用
     */
    MODIFIER_PROPERTY_HAS_BONUS_NEUTRAL_ITEM_CHOICE = 318,
    /**
     * 额外中立物品附魔（例：基本法则锻造）
     * @function HasBonusNeutralItemPassive
     * @lua不可用
     */
    MODIFIER_PROPERTY_HAS_BONUS_NEUTRAL_ITEM_PASSIVE = 319,
    /**
     * 中立附魔累加（例：斯布恩的藏品）
     * @function GetModifierPreserveNeutralItemPassives
     * @lua不可用
     */
    MODIFIER_PROPERTY_PRESERVE_NEUTRAL_ITEM_PASSIVES = 320,
    /**
     * 最大生命值设定（例：坚毅之件）
     * @function GetModifierForceMaxHealth
     * @lua不可用
     */
    MODIFIER_PROPERTY_FORCE_MAX_HEALTH = 321,
    /**
     * 最大魔法值设定（例：血魔法）
     * @function GetModifierForceMaxMana
     * @lua不可用
     */
    MODIFIER_PROPERTY_FORCE_MAX_MANA = 322,
    /**
     * 特殊定值作用范围加成（例：缚灵索）
     * @function GetModifierAoEBonusConstant
     * @lua不可用
     */
    MODIFIER_PROPERTY_AOE_BONUS_CONSTANT = 323,
    /**
     * 定值作用范围加成（例：亵渎之力）
     * @function GetModifierAoEBonusConstantStacking
     * @both
     */
    MODIFIER_PROPERTY_AOE_BONUS_CONSTANT_STACKING = 324,
    /**
     * 在首端伤害格挡前时（例：永世法衣）
     * @function OnTakeDamagePostUnavoidableBlock
     * @lua不可用
     */
    MODIFIER_EVENT_ON_TAKEDAMAGE_POST_UNAVOIDABLE_BLOCK = 325,
    /**
     * 锁闭伤害技能时（例：闪烁匕首）
     * @function OnMuteDamageAbilities
     * @lua不可用
     */
    MODIFIER_EVENT_ON_MUTE_DAMAGE_ABILITIES = 326,
    /**
     * 不触发致命一击（例：老版英灵胸针）
     * @function GetSuppressCrit
     * @lua不可用
     */
    MODIFIER_PROPERTY_SUPPRESS_CRIT = 327,
    /**
     * 提供技能点数（例：曲线学习）
     * @function GetModifierAbilityPoints
     * @lua不可用
     */
    MODIFIER_PROPERTY_ABILITY_POINTS = 328,
    /**
     * 百分比买活惩罚（例：恶魔的交易）
     * @function GetModifierBuybackPenaltyPercent
     * @lua不可用
     */
    MODIFIER_PROPERTY_BUYBACK_PENALTY_PERCENT = 329,
    /**
     * 百分比出售价格增加（例：恶魔的交易）
     * @function GetModifierItemSellbackCost
     * @both
     */
    MODIFIER_PROPERTY_ITEM_SELLBACK_COST = 330,
    /**
     * 可拆分任意物品（例：拆东补西）
     * @function GetModifierDisassembleAnything
     * @both
     */
    MODIFIER_PROPERTY_DISASSEMBLE_ANYTHING = 331,
    /**
     * 固定魔法恢复（例：死亡充能）
     * @function GetModifierFixedManaRegen
     * @both
     */
    MODIFIER_PROPERTY_FIXED_MANA_REGEN = 332,
    /**
     * 上下坡落空概率加成（例：制高点）
     * @function GetModifierBonusUphillMissChance
     * @both
     */
    MODIFIER_PROPERTY_BONUS_UPHILL_MISS_CHANCE = 333,
    /**
     * 反补生命百分比调整（例：盛宴）
     * @function GetModifierCreepDenyPercent
     * @both
     */
    MODIFIER_PROPERTY_CREEP_DENY_PERCENT = 334,
    /**
     * 绝对攻速上限设定（未知）
     * @function GetModifierAttackSpeedAbsoluteMax
     * @both
     */
    MODIFIER_PROPERTY_ATTACKSPEED_ABSOLUTE_MAX = 335,
    /**
     * 更改视野阵营（例：热血运动）
     * @function GetModifierFoWTeam
     * @both
     */
    MODIFIER_PROPERTY_FOW_TEAM = 336,
    /**
     * 开始死亡时（例：驱邪护符）
     * @function OnHeroBeginDying
     * @both
     */
    MODIFIER_EVENT_ON_HERO_BEGIN_DYING = 337,
    /**
     * 疗伤莲花效果增强（例：赛莉蒙妮的信徒）
     * @function GetModifierBonusLotusHeal
     * @both
     */
    MODIFIER_PROPERTY_BONUS_LOTUS_HEAL = 338,
    /**
     * 百分比力量生命恢复增强（例：内在优势）
     * @function GetModifierBaseHpRegenPerStrBonusPercentage
     * @both
     */
    MODIFIER_PROPERTY_BASE_HP_REGEN_PER_STR_BONUS_PERCENTAGE = 339,
    /**
     * 百分比敏捷护甲增强（例：内在优势）
     * @function GetModifierBaseArmorPerAgiBonusPercentage
     * @both
     */
    MODIFIER_PROPERTY_BASE_ARMOR_PER_AGI_BONUS_PERCENTAGE = 340,
    /**
     * 百分比敏捷攻速增强（例：内在优势）
     * @function GetModifierBaseAttackSpeedPerAgiBonusPercentage
     * @both
     */
    MODIFIER_PROPERTY_BASE_ATTACKSPEED_PER_AGI_BONUS_PERCENTAGE = 341,
    /**
     * 百分比智力魔法恢复增强（例：内在优势）
     * @function GetModifierBaseManaRegenPerIntBonusPercentage
     * @both
     */
    MODIFIER_PROPERTY_BASE_MP_REGEN_PER_INT_BONUS_PERCENTAGE = 342,
    /**
     * 百分比智力魔法抗性增强（例：内在优势）
     * @function GetModifierBaseMagicResistPerIntBonusPercentage
     * @both
     */
    MODIFIER_PROPERTY_BASE_MRES_PER_INT_BONUS_PERCENTAGE = 343,
    /**
     * 进入白天时（例：辰星破晓）
     * @function OnDayStarted
     * @both
     */
    MODIFIER_EVENT_ON_DAY_STARTED = 344,
    /**
     * 进入夜晚时（例：固有增益）
     * @function OnNightStarted
     * @both
     */
    MODIFIER_EVENT_ON_NIGHT_STARTED = 345,
    /**
     * 额外幻象产生概率（例：混沌之军）
     * @function GetModifierCreateBonusIllusionChance
     * @both
     */
    MODIFIER_PROPERTY_CREATE_BONUS_ILLUSION_CHANCE = 346,
    /**
     * 额外幻象产生数量（例：混沌之军）
     * @function GetModifierCreateBonusIllusionCount
     * @both
     */
    MODIFIER_PROPERTY_CREATE_BONUS_ILLUSION_COUNT = 347,
    /**
     * 伪随机概率调整（例：天佑勇者）
     * @function GetModofierPropertyPseudoRandomBonus
     * @both
     */
    MODIFIER_PROPERTY_PSEUDORANDOM_BONUS = 348,
    /**
     * 攻击弹道交互高度增加（例：冰川）
     * @function GetModifierAttackHeightBonus
     * @both
     */
    MODIFIER_PROPERTY_ATTACK_HEIGHT_BONUS = 349,
    /**
     * 无视攻击间隔（未知）
     * @function GetSkipAttackRegulator
     * @both
     */
    MODIFIER_PROPERTY_SKIP_ATTACK_REGULATOR = 350,
    /**
     * 目标闪避（例：老版烟幕）
     * @function GetModifierMiss_Percentage_Target
     * @both
     */
    MODIFIER_PROPERTY_MISS_PERCENTAGE_TARGET = 351,
    /**
     * 额外掉落中立物品（例：丛林赠品）
     * @function GetModifierAdditionalNutralItemDrops
     * @both
     */
    MODIFIER_PROPERTY_ADDITIONAL_NEUTRAL_ITEM_DROPS = 352,
    /**
     * 额外百分比终结连杀金钱（例：职业猎人）
     * @function GetModifierKillStreakBonusGoldPercentage
     * @both
     */
    MODIFIER_PROPERTY_KILL_STREAK_BONUS_GOLD_PERCENTAGE = 353,
    /**
     * 生命恢复系数（例：无畏）
     * @function GetModifierHPRegenMultiplierPreAmplification
     * @both
     */
    MODIFIER_PROPERTY_HP_REGEN_MULTIPLIER_PRE_AMPLIFICATION = 354,
    /**
     * 命石覆盖（例：变形）
     * @function GetModifierHeroFacetOverride
     * @both
     */
    MODIFIER_PROPERTY_HEROFACET_OVERRIDE = 355,
    /**
     * 摧毁树木时（例：暴露疗法）
     * @function OnTreeCutDown
     * @both
     */
    MODIFIER_EVENT_ON_TREE_CUT_DOWN = 356,
    /**
     * 攻击分裂命中时（例：死亡之拳）
     * @function OnCleaveAttackLanded
     * @both
     */
    MODIFIER_EVENT_ON_CLEAVE_ATTACK_LANDED = 357,
    /**
     * 最低属性等级（例：虚空行者）
     * @function MinAttributeLevel
     * @both
     */
    MODIFIER_PROPERTY_MIN_ATTRIBUTE_LEVEL = 358,
    /**
     * 中立物品复制（例：英熊好礼）
     * @function GetTierTokenReroll
     * @lua不可用
     */
    MODIFIER_PROPERTY_TIER_TOKEN_REROLL = 359,
    /**
     * 视野角度限制（例：红光满面）
     * @function GetVisionDegreeRestriction
     * @both
     */
    MODIFIER_PROPERTY_VISION_DEGREES_RESTRICTION = 360,
    /**
     * 叠加末端伤害格挡（例：幽灵船）
     * @function GetModifierTotal_ConstantBlockStacking
     * @both
     */
    MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK_STACKING = 361,
    /**
     * 物品栏限制（例：熊亦求精）
     * @function GetModifierInventorySlotRestricted
     * @both
     */
    MODIFIER_PROPERTY_INVENTORY_SLOT_RESTRICTED = 362,
    /**
     * 同步中立物品时（例：英熊好礼）
     * @function OnTierTokenRerolled
     * @lua不可用
     */
    MODIFIER_EVENT_ON_TIER_TOKEN_REROLLED = 363,
    /**
     * 技能共享（例：缚魂）
     * @function GetRedirectSpell
     * @both
     */
    MODIFIER_PROPERTY_REDIRECT_SPELL = 364,
    /**
     * 活跃基础攻击力（例：灵幻兵械）
     * @function GetBaseAttackPostBonus
     * @both
     */
    MODIFIER_PROPERTY_BASEATTACK_POSTBONUS = 365,
    /**
     * 视野所属阵营改变时（例：真实视域）
     * @function OnFoWTeamChanged
     * @both
     */
    MODIFIER_EVENT_ON_FOW_TEAM_CHANGED = 366,
    /**
     * 攻击不触发特效（未知）
     * @function GetSuppressAttackProcs
     * @both
     */
    MODIFIER_PROPERTY_SUPPRESS_ATTACK_PROCS = 367,
    /**
     * 切换开关技能时（例：熊亦求精）
     * @function OnAbilityToggled
     * @both
     */
    MODIFIER_EVENT_ON_ABILITY_TOGGLED = 368,
    /**
     * 被攻击不触发特效（例：翔影之钗）
     * @function GetModifierAvoidAttackProcs
     * @both
     */
    MODIFIER_PROPERTY_AVOID_ATTACK_PROCS = 369,
    /**
     * 神符产生时（例：磁场）
     * @function OnRuneSpawn
     * @both
     */
    MODIFIER_EVENT_ON_RUNE_SPAWN = 370,
    /**
     * 攻击吸血（例：撒旦之邪力）
     * @function GetModifierProperty_PhysicalLifesteal
     * @both
     */
    MODIFIER_PROPERTY_PHYSICAL_LIFESTEAL = 371,
    /**
     * 技能吸血（例：血精石）
     * @function GetModifierProperty_MagicalLifesteal
     * @both
     */
    MODIFIER_PROPERTY_MAGICAL_LIFESTEAL = 372,
    /**
     * 造成纯粹伤害时（例：束手束脚）
     * @function OnPureDamageCalculated
     * @both
     */
    MODIFIER_EVENT_ON_PURE_DAMAGE_CALCULATED = 373,
    /**
     * 提前打造中立物品（例：基本法则锻造）
     * @function GetModifierNeutralTrinketOptions
     * @lua不可用
     */
    MODIFIER_EVENT_NEUTRAL_TRINKET_OPTIONS = 374,
    /**
     * 选择中立附魔时（未知）
     * @function GetModifierNeutralEnhancementOptions
     * @lua不可用
     */
    MODIFIER_EVENT_NEUTRAL_ENHANCEMENT_OPTIONS = 375,
    /**
     * 定值标准移速上限（例：奔流湍急）
     * @function GetModifierMoveSpeedMax_BonusConstant
     * @both
     */
    MODIFIER_PROPERTY_MOVESPEED_MAX_BONUS_CONSTANT = 376,
    /**
     * 后移速调整定值移速（例：奔流湍急）
     * @function GetModifierMoveSpeedPostMultiplierBonus_Constant
     * @both
     */
    MODIFIER_PROPERTY_MOVESPEED_POST_MULTIPLIER_BONUS_CONSTANT = 377,
    /**
     * 禁止产生幻象（未知）
     * @function GetModifierPropertyForbidIllusions
     * @both
     */
    MODIFIER_PROPERTY_FORBID_ILLUSIONS = 378,
    /**
     * 魔法消耗覆盖（未知）
     * @function GetModifierPropertyManacostOverride
     * @both
     */
    MODIFIER_PROPERTY_MANACOST_OVERRIDE = 379,
    /**
     * 生命回复调整（例：斯嘉蒂之眼）
     * @function GetModifierPropertyRestorationAmplification
     * @both
     */
    MODIFIER_PROPERTY_RESTORATION_AMPLIFICATION = 380,
    /**
     * 特殊生命回复调整（例：散华）
     * @function GetModifierPropertyRestorationAmplificationUnique
     * @both
     */
    MODIFIER_PROPERTY_RESTORATION_AMPLIFICATION_UNIQUE = 381,
    /**
     * 特殊施加方治疗调整（例：慧光）
     * @function GetModifierPropertyHealingAmplificationUnique
     * @both
     */
    MODIFIER_PROPERTY_HEAL_AMPLIFY_PERCENTAGE_SOURCE_UNIQUE = 382,
    /**
     * 获取生命转移（例：克莱拉牧杖）
     * @function GetModifierPropertyRedirectHealthGain
     * @both
     */
    MODIFIER_PROPERTY_REDIRECT_HEALTH_GAIN = 383,
    /**
     * 免受致命一击攻击（未知）
     * @function GetSuppressIncomingCrit
     * @both
     */
    MODIFIER_PROPERTY_SUPPRESS_INCOMING_CRIT = 384,
    /**
     * 中立物品升级（例：休眠珍品）
     * @function GetModifierPropertyUpgradeNeutralArtifacts
     * @both
     */
    MODIFIER_PROPERTY_UPGRADE_NEUTRAL_ARTIFACTS = 385,
    /**
     * 忽略无效攻击移动指令（例：决斗）
     * @function GetModifierPropertySuppressInvalidMoveAttackOrders
     * @both
     */
    MODIFIER_PROPERTY_SUPPRESS_INVALID_MOVE_ATTACK_ORDERS = 386,
    /**
     * 消耗品加速（例：源泉）
     * @function GetModifierPropertyConsumableUseSpeed
     * @both
     */
    MODIFIER_PROPERTY_CONSUMABLE_USE_SPEED = 387,
    /**
     * 首次学习等级调整（例：曲线学习）
     * @function GetRequiredLevel
     * @both
     */
    MODIFIER_PROPERTY_REQUIRED_LEVEL = 388,
    /**
     * 刷新modifier时（例：安可）
     * @function OnModifierRefreshed
     * @both
     */
    MODIFIER_EVENT_ON_MODIFIER_REFRESHED = 389,
    /**
     * 交换技能时（例：两栖狂想曲）
     * @function OnAbilitySwapped
     * @both
     */
    MODIFIER_EVENT_ON_ABILITY_SWAPPED = 390,
    /**
     * 小兵击杀金钱覆盖（例：加重骰子）
     * @function GetModifierOverrideCreepBounty
     * @both
     */
    MODIFIER_PROPERTY_OVERRIDE_CREEP_BOUNTY = 391,
    /**
     * 基础攻击力覆盖（例：加重骰子）
     * @function GetModifierOverrideBaseDamage
     * @both
     */
    MODIFIER_PROPERTY_OVERRIDE_BASE_DAMAGE = 392,
    /**
     * 无法被取对象（例：热血竞技场）
     * @function GetModifierOverrideUntargetableFrom
     * @both
     */
    MODIFIER_PROPERTY_UNTARGETABLE_FROM = 393,
    /**
     * 无法指定对象（例：热血竞技场）
     * @function GetModifierOverrideUntargetableTo
     * @both
     */
    MODIFIER_PROPERTY_UNTARGETABLE_TO = 394,
    /**
     * 可触发物品幻象（例：复仇光环）
     * @function GetModifierSuperIllusionWithItems
     * @both
     */
    MODIFIER_PROPERTY_SUPER_ILLUSION_WITH_ITEMS = 395,
    /**
     * 驱散时（例：恶性瘟疫）
     * @function OnPurged
     * @both
     */
    MODIFIER_EVENT_ON_PURGE = 396,
    /**
     * 幻象生成时（例：混沌之军）
     * @function OnIllusionCreated
     * @both
     */
    MODIFIER_EVENT_ON_ILLUSION_CREATED = 397,
    /**
     * 英雄等级体积（未知）
     * @function GetModifierHeroLevelScale
     * @both
     */
    MODIFIER_PROPERTY_HEROLEVELSCALE = 398,
    MODIFIER_FUNCTION_LAST = 399,
    MODIFIER_FUNCTION_INVALID = 65535,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type ModifierPriority = modifierpriority;

/**
 * @compileMembersOnly
 */
declare enum modifierpriority {
    /**
     * 低优先级（例：地磁之握）
     */ MODIFIER_PRIORITY_LOW = 0,
    /**
     * 中优先级（默认）
     */
    MODIFIER_PRIORITY_NORMAL = 1,
    /**
     * 高优先级（例：燃烧枷锁）
     */
    MODIFIER_PRIORITY_HIGH = 2,
    /**
     * 极高优先级（例：海象飞踢）
     */
    MODIFIER_PRIORITY_ULTRA = 3,
    /**
     * 最高优先级（例：捶）
     */
    MODIFIER_PRIORITY_SUPER_ULTRA = 4,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type ModifierRemove = modifierremove;

/**
 * @compileMembersOnly
 */
declare enum modifierremove {
    /**
     * 移除双方状态（例：气运之末）
     */ DOTA_BUFF_REMOVE_ALL = 0,
    /**
     * 移除敌方状态（例：魅惑）
     */
    DOTA_BUFF_REMOVE_ENEMY = 1,
    /**
     * 移除友方状态（例：狂暴药剂）
     */
    DOTA_BUFF_REMOVE_ALLY = 2,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type ModifierState = modifierstate;

/**
 * @compileMembersOnly
 */
declare enum modifierstate {
    /**
     * 缠绕（例：冰封禁制）
     */ MODIFIER_STATE_ROOTED = 0,
    /**
     * 缴械（例：超震声波）
     */
    MODIFIER_STATE_DISARMED = 1,
    /**
     * 攻击免疫（例：幽魂权杖）
     */
    MODIFIER_STATE_ATTACK_IMMUNE = 2,
    /**
     * 沉默（例：全领域静默）
     */
    MODIFIER_STATE_SILENCED = 3,
    /**
     * 锁闭（例：神杖静态风暴）
     */
    MODIFIER_STATE_MUTED = 4,
    /**
     * 眩晕（例：魔法箭）
     */
    MODIFIER_STATE_STUNNED = 5,
    /**
     * 妖术（例：邪恶镰刀）
     */
    MODIFIER_STATE_HEXED = 6,
    /**
     * 隐身（例：暗影步）
     */
    MODIFIER_STATE_INVISIBLE = 7,
    /**
     * 无敌（例：海妖之歌）
     */
    MODIFIER_STATE_INVULNERABLE = 8,
    /**
     * 技能免疫（例：技能免疫）
     */
    MODIFIER_STATE_MAGIC_IMMUNE = 9,
    /**
     * 共享视野（例：静电连接）
     */
    MODIFIER_STATE_PROVIDES_VISION = 10,
    /**
     * 睡眠（例：噩梦）
     */
    MODIFIER_STATE_NIGHTMARED = 11,
    /**
     * 禁用物理伤害格挡（未知）
     */
    MODIFIER_STATE_BLOCK_DISABLED = 12,
    /**
     * 禁用闪避（未知）
     */
    MODIFIER_STATE_EVADE_DISABLED = 13,
    /**
     * 无法选中（例：无影拳）
     */
    MODIFIER_STATE_UNSELECTABLE = 14,
    /**
     * 无法指定敌方目标（未知）
     */
    MODIFIER_STATE_CANNOT_TARGET_ENEMIES = 15,
    /**
     * 无法指定建筑目标（例：越界）
     */
    MODIFIER_STATE_CANNOT_TARGET_BUILDINGS = 16,
    /**
     * 克敌机先（例：复仇）
     */
    MODIFIER_STATE_CANNOT_MISS = 17,
    /**
     * 可被反补（例：瘴气）
     */
    MODIFIER_STATE_SPECIALLY_DENIABLE = 18,
    /**
     * 动作冻结（例：急速冷却）
     */
    MODIFIER_STATE_FROZEN = 19,
    /**
     * 无法行动（例：巫毒变身术）
     */
    MODIFIER_STATE_COMMAND_RESTRICTED = 20,
    /**
     * 隐藏小地图图标（例：虫群）
     */
    MODIFIER_STATE_NOT_ON_MINIMAP = 21,
    /**
     * 低攻击优先级（例：七十二变）
     */
    MODIFIER_STATE_LOW_ATTACK_PRIORITY = 22,
    /**
     * 隐藏单位生命条（例：信使护盾）
     */
    MODIFIER_STATE_NO_HEALTH_BAR = 23,
    /**
     * 对敌隐藏单位生命条（例：魅影无形）
     */
    MODIFIER_STATE_NO_HEALTH_BAR_FOR_ENEMIES = 24,
    /**
     * 对其他玩家隐藏生命条（例：虚无投影）
     */
    MODIFIER_STATE_NO_HEALTH_BAR_FOR_OTHER_PLAYERS = 25,
    /**
     * 飞行（例：黑暗飞升）
     */
    MODIFIER_STATE_FLYING = 26,
    /**
     * 相位状态（例：守卫冲刺）
     */
    MODIFIER_STATE_NO_UNIT_COLLISION = 27,
    /**
     * 无法作为跟随目标（例：幻影之拥）
     */
    MODIFIER_STATE_NO_TEAM_MOVE_TO = 28,
    /**
     * 选择组忽略置入（例：幻影之拥）
     */
    MODIFIER_STATE_NO_TEAM_SELECT = 29,
    /**
     * 破坏（例：蝮蛇突袭）
     */
    MODIFIER_STATE_PASSIVES_DISABLED = 30,
    /**
     * 被支配标记（例：支配头盔）
     */
    MODIFIER_STATE_DOMINATED = 31,
    /**
     * 失去视野（例：诱敌奇术）
     */
    MODIFIER_STATE_BLIND = 32,
    /**
     * 隐藏（例：崩裂禁锢）
     */
    MODIFIER_STATE_OUT_OF_GAME = 33,
    /**
     * 虚拟友方（例：感染）
     */
    MODIFIER_STATE_FAKE_ALLY = 34,
    /**
     * 无视地形状态（例：幽鬼之刃）
     */
    MODIFIER_STATE_FLYING_FOR_PATHING_PURPOSES_ONLY = 35,
    /**
     * 真实视域免疫（例：暗影之舞）
     */
    MODIFIER_STATE_TRUESIGHT_IMMUNE = 36,
    /**
     * 不取对象（例：便车）
     */
    MODIFIER_STATE_UNTARGETABLE = 37,
    /**
     * 友方不取对象（例：魔晶烟幕）
     */
    MODIFIER_STATE_UNTARGETABLE_ALLIED = 38,
    /**
     * 敌方不取对象（例：暗影之境）
     */
    MODIFIER_STATE_UNTARGETABLE_ENEMY = 39,
    /**
     * 自身不取对象（未知）
     */
    MODIFIER_STATE_UNTARGETABLE_SELF = 40,
    /**
     * 无法执行移动攻击（例：掘地）
     */
    MODIFIER_STATE_IGNORING_MOVE_AND_ATTACK_ORDERS = 41,
    /**
     * 树木穿行（例：自然蔽护）
     */
    MODIFIER_STATE_ALLOW_PATHING_THROUGH_TREES = 42,
    /**
     * 对敌隐藏小地图图标（例：魅影无形）
     */
    MODIFIER_STATE_NOT_ON_MINIMAP_FOR_ENEMIES = 43,
    /**
     * 无视减速（例：弹无虚发）
     */
    MODIFIER_STATE_UNSLOWABLE = 44,
    /**
     * 束缚（例：突袭）
     */
    MODIFIER_STATE_TETHERED = 45,
    /**
     * 无法执行停止命令（例：星破天惊）
     */
    MODIFIER_STATE_IGNORING_STOP_ORDERS = 46,
    /**
     * 恐惧（例：恐吓）
     */
    MODIFIER_STATE_FEARED = 47,
    /**
     * 嘲讽（例：狂战士的怒吼）
     */
    MODIFIER_STATE_TAUNTED = 48,
    /**
     * 强制位移免疫（例：捶）
     */
    MODIFIER_STATE_CANNOT_BE_MOTION_CONTROLLED = 49,
    /**
     * 飞行视野（例：喷气背包）
     */
    MODIFIER_STATE_FORCED_FLYING_VISION = 50,
    /**
     * 可攻击友方（未知）
     */
    MODIFIER_STATE_ATTACK_ALLIES = 51,
    /**
     * 仅无视地形（未知）
     */
    MODIFIER_STATE_ALLOW_PATHING_THROUGH_CLIFFS = 52,
    /**
     * 无视能量齿轮（例：能量齿轮）
     */
    MODIFIER_STATE_ALLOW_PATHING_THROUGH_POWER_COGS = 53,
    /**
     * 无法被反补（未知）
     */
    MODIFIER_STATE_SPECIALLY_UNDENIABLE = 54,
    /**
     * 无视特殊地形（例：机器人挑战）
     */
    MODIFIER_STATE_ALLOW_PATHING_THROUGH_OBSTRUCTIONS = 55,
    /**
     * 减益免疫（例：剑刃风暴）
     */
    MODIFIER_STATE_DEBUFF_IMMUNE = 56,
    /**
     * 穿越守护者之门（例：守护者之门）
     */
    MODIFIER_STATE_ALLOW_PATHING_THROUGH_BASE_BLOCKER = 57,
    /**
     * 无法执行移动命令（例：诱敌奇术）
     */
    MODIFIER_STATE_IGNORING_MOVE_ORDERS = 58,
    /**
     * 远程近战结算（例：灵魂打击）
     */
    MODIFIER_STATE_ATTACKS_ARE_MELEE = 59,
    /**
     * 完全启动背包（例：老版斯布恩的藏品）
     */
    MODIFIER_STATE_CAN_USE_BACKPACK_ITEMS = 60,
    /**
     * 持续施法期间施法（例：湮灭专家）
     */
    MODIFIER_STATE_CASTS_IGNORE_CHANNELING = 61,
    /**
     * 攻击不曝露（例：吉利服）
     */
    MODIFIER_STATE_ATTACKS_DONT_REVEAL = 62,
    /**
     * 无野怪仇恨（例：丛林之舞）
     */
    MODIFIER_STATE_NEUTRALS_DONT_ATTACK = 63,
    /**
     * 终止占位（默认）
     */
    MODIFIER_STATE_LAST = 64,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type ParticleAttachment = ParticleAttachment_t;

/**
 * @compileMembersOnly
 */
declare enum ParticleAttachment_t {
    /**
     * 无效占位
     */ PATTACH_INVALID = -1,
    /**
     * 附着在实体原点
     */
    PATTACH_ABSORIGIN = 0,
    /**
     * 跟随实体原点附着
     */
    PATTACH_ABSORIGIN_FOLLOW = 1,
    /**
     * 附着在自定义坐标
     */
    PATTACH_CUSTOMORIGIN = 2,
    /**
     * 跟随自定义坐标附着
     */
    PATTACH_CUSTOMORIGIN_FOLLOW = 3,
    /**
     * 附着在实体的特定模型点
     */
    PATTACH_POINT = 4,
    /**
     * 跟随实体的特定模型点
     */
    PATTACH_POINT_FOLLOW = 5,
    /**
     * 附着并跟随眼睛位置
     */
    PATTACH_EYES_FOLLOW = 6,
    /**
     * 跟随头顶附着
     */
    PATTACH_OVERHEAD_FOLLOW = 7,
    /**
     * 附着在世界坐标原点
     */
    PATTACH_WORLDORIGIN = 8,
    /**
     * 跟随根骨骼附着
     */
    PATTACH_ROOTBONE_FOLLOW = 9,
    /**
     * 跟随渲染坐标原点附着
     */
    PATTACH_RENDERORIGIN_FOLLOW = 10,
    /**
     * 附着在主视角摄像机
     */
    PATTACH_MAIN_VIEW = 11,
    /**
     * 附着在水面波纹
     */
    PATTACH_WATERWAKE = 12,
    /**
     * 跟随实体中心点附着
     */
    PATTACH_CENTER_FOLLOW = 13,
    /**
     * 附着在自定义游戏状态点
     */
    PATTACH_CUSTOM_GAME_STATE_1 = 14,
    /**
     * 附着在生命条
     */
    PATTACH_HEALTHBAR = 15,
    /**
     * 上限占位
     */
    MAX_PATTACH_TYPES = 16,
}

/**
 * @compileMembersOnly
 */
declare enum PseudoRandom {
    /**
     * 空白占位
     */ DOTA_PSEUDO_RANDOM_NONE = 0,
    /**
     * 马格纳斯魔晶
     */
    DOTA_PSEUDO_RANDOM_MAGNUS_SHARD = 1,
    /**
     * 恩赐解脱
     */
    DOTA_PSEUDO_RANDOM_PHANTOMASSASSIN_CRIT = 2,
    /**
     * 窒碍短匕次级单位
     */
    DOTA_PSEUDO_RANDOM_PHANTOMASSASSIN_DAGGER = 3,
    /**
     * 并列
     */
    DOTA_PSEUDO_RANDOM_PHANTOMLANCER_JUXTAPOSE = 4,
    /**
     * 崎岖外表
     */
    DOTA_PSEUDO_RANDOM_TINY_CRAGGY = 5,
    /**
     * 碎裂冲击
     */
    DOTA_PSEUDO_RANDOM_COLD_REBUKE = 6,
    /**
     * 致命一击（头狼）
     */
    DOTA_PSEUDO_RANDOM_WOLF_CRIT = 7,
    /**
     * 反击螺旋
     */
    DOTA_PSEUDO_RANDOM_AXE_HELIX = 8,
    /**
     * 反击螺旋（攻击）
     */
    DOTA_PSEUDO_RANDOM_AXE_HELIX_ATTACK = 9,
    /**
     * 勇气之霎
     */
    DOTA_PSEUDO_RANDOM_LEGION_MOMENT = 10,
    /**
     * 深海重击
     */
    DOTA_PSEUDO_RANDOM_SLARDAR_BASH = 11,
    /**
     * 精华变迁
     */
    DOTA_PSEUDO_RANDOM_OD_ESSENCE = 12,
    /**
     * 射手天赋
     */
    DOTA_PSEUDO_RANDOM_DROW_MARKSMANSHIP = 13,
    /**
     * 火焰爆轰
     */
    DOTA_PSEUDO_RANDOM_OGRE_MAGI_FIREBLAST = 14,
    /**
     * 多重施法
     */
    DOTA_PSEUDO_RANDOM_OGRE_ITEM_MULTICAST = 15,
    /**
     * 巨力重击
     */
    DOTA_PSEUDO_RANDOM_SPIRITBREAKER_GREATERBASH = 16,
    /**
     * 缠绕（熊灵/德鲁伊）
     */
    DOTA_PSEUDO_RANDOM_LONE_DRUID_ENTANGLE = 17,
    /**
     * 时间锁定
     */
    DOTA_PSEUDO_RANDOM_FACELESS_BASH = 18,
    /**
     * 时间漫游躲避技能
     */
    DOTA_PSEUDO_RANDOM_FACELESS_EVADE_SPELL = 19,
    /**
     * 时间漫游躲避攻击
     */
    DOTA_PSEUDO_RANDOM_FACELESS_EVADE_ATTACK = 20,
    /**
     * 回到过去
     */
    DOTA_PSEUDO_RANDOM_FACELESS_VOID_BACKTRACK = 21,
    /**
     * 醉拳
     */
    DOTA_PSEUDO_RANDOM_BREWMASTER_CRIT = 22,
    /**
     * 醉酒云雾
     */
    DOTA_PSEUDO_RANDOM_BREWMASTER_CINDER_BREW = 23,
    /**
     * 爆头
     */
    DOTA_PSEUDO_RANDOM_SNIPER_HEADSHOT = 24,
    /**
     * 阿托斯之棍
     */
    DOTA_PSEUDO_RANDOM_ATOS = 25,
    /**
     * 剑舞
     */
    DOTA_PSEUDO_RANDOM_JUGG_CRIT = 26,
    /**
     * 善咒
     */
    DOTA_PSEUDO_RANDOM_DAZZLE_SCEPTER = 27,
    /**
     * 混沌一击
     */
    DOTA_PSEUDO_RANDOM_CHAOS_CRIT = 28,
    /**
     * 致命一击（变身）
     */
    DOTA_PSEUDO_RANDOM_LYCAN_CRIT = 29,
    /**
     * 海象神拳！
     */
    DOTA_PSEUDO_RANDOM_TUSK_CRIT = 30,
    /**
     * 极寒领域
     */
    DOTA_PSEUDO_RANDOM_CM_FREEZING_FIELD = 31,
    /**
     * 通用重击
     */
    DOTA_PSEUDO_RANDOM_GENERIC_BASHER = 32,
    /**
     * 本命一击
     */
    DOTA_PSEUDO_RANDOM_SKELETONKING_CRIT = 33,
    /**
     * 殊死一搏
     */
    DOTA_PSEUDO_RANDOM_SKELETONKING_CRIT_MORTAL = 34,
    /**
     * 代达罗斯之殇
     */
    DOTA_PSEUDO_RANDOM_ITEM_GREATERCRIT = 35,
    /**
     * 水晶剑
     */
    DOTA_PSEUDO_RANDOM_ITEM_LESSERCRIT = 36,
    /**
     * 碎颅锤
     */
    DOTA_PSEUDO_RANDOM_ITEM_BASHER = 37,
    /**
     * 炎阳纹章
     */
    DOTA_PSEUDO_RANDOM_ITEM_SOLAR_CREST = 38,
    /**
     * 标枪
     */
    DOTA_PSEUDO_RANDOM_ITEM_JAVELIN_ACCURACY = 39,
    /**
     * 三元重戟
     */
    DOTA_PSEUDO_RANDOM_ITEM_TRIDENT = 40,
    /**
     * 深渊之刃
     */
    DOTA_PSEUDO_RANDOM_ITEM_ABYSSAL = 41,
    /**
     * 深渊之刃物理伤害格挡
     */
    DOTA_PSEUDO_RANDOM_ITEM_ABYSSAL_BLOCK = 42,
    /**
     * 圆盾
     */
    DOTA_PSEUDO_RANDOM_ITEM_STOUT = 43,
    /**
     * 先锋盾
     */
    DOTA_PSEUDO_RANDOM_ITEM_VANGUARD = 44,
    /**
     * 赤红甲
     */
    DOTA_PSEUDO_RANDOM_ITEM_CRIMSON_GUARD = 45,
    /**
     * 穷鬼盾
     */
    DOTA_PSEUDO_RANDOM_ITEM_PMS = 46,
    /**
     * 天堂之戟（残废）
     */
    DOTA_PSEUDO_RANDOM_ITEM_HALBRED_MAIM = 47,
    /**
     * 散夜对剑（残废）
     */
    DOTA_PSEUDO_RANDOM_ITEM_SANGEYASHA_MAIM = 48,
    /**
     * 散慧对剑（残废）
     */
    DOTA_PSEUDO_RANDOM_ITEM_SANGEKAYA_MAIM = 49,
    /**
     * 散华（残废）
     */
    DOTA_PSEUDO_RANDOM_ITEM_SANGE_MAIM = 50,
    /**
     * 蝴蝶
     */
    DOTA_PSEUDO_RANDOM_ITEM_BUTTERFLY = 51,
    /**
     * 漩涡
     */
    DOTA_PSEUDO_RANDOM_ITEM_MAELSTROM = 52,
    /**
     * 雷神之锤（连环闪电）
     */
    DOTA_PSEUDO_RANDOM_ITEM_MJOLLNIR = 53,
    /**
     * 雷神之锤（静电冲击）
     */
    DOTA_PSEUDO_RANDOM_ITEM_MJOLLNIR_STATIC = 54,
    /**
     * 金箍棒
     */
    DOTA_PSEUDO_RANDOM_ITEM_MKB = 55,
    /**
     * 白银之锋
     */
    DOTA_PSEUDO_RANDOM_ITEM_SILVER_EDGE = 56,
    /**
     * 长刀
     */
    DOTA_PSEUDO_RANDOM_ITEM_NAGINATA = 57,
    /**
     * 狂战士之怒
     */
    DOTA_PSEUDO_RANDOM_TROLL_BASH = 58,
    /**
     * 烟幕
     */
    DOTA_PSEUDO_RANDOM_RIKI_SMOKE_SCREEN = 59,
    /**
     * 混沌一击（二重）
     */
    DOTA_PSEUDO_RANDOM_CHAOS_DOUBLE_CRIT = 60,
    /**
     * 混沌一击（三重）
     */
    DOTA_PSEUDO_RANDOM_CHAOS_TRIPLE_CRIT = 61,
    /**
     * 通用闪避
     */
    DOTA_PSEUDO_RANDOM_GENERIC_EVASION = 62,
    /**
     * 攻击上坡落空
     */
    DOTA_PSEUDO_RANDOM_GENERIC_HEIGHT_MISS = 63,
    /**
     * 通用致盲
     */
    DOTA_PSEUDO_RANDOM_GENERIC_MISS = 64,
    /**
     * 一剑穿心
     */
    DOTA_PSEUDO_RANDOM_ARMADILLO_HEARTPIERCER = 65,
    /**
     * 护身甲盾
     */
    DOTA_PSEUDO_RANDOM_MARS_SHIELD = 66,
    /**
     * 混沌称霸
     */
    DOTA_PSEUDO_RANDOM_CHAOS_KNIGHT_INNATE_REFUND = 67,
    /**
     * 掉落1级中立物品
     */
    DOTA_PSEUDO_RANDOM_NEUTRAL_DROP_TIER1 = 68,
    /**
     * 掉落2级中立物品
     */
    DOTA_PSEUDO_RANDOM_NEUTRAL_DROP_TIER2 = 69,
    /**
     * 掉落3级中立物品
     */
    DOTA_PSEUDO_RANDOM_NEUTRAL_DROP_TIER3 = 70,
    /**
     * 掉落4级中立物品
     */
    DOTA_PSEUDO_RANDOM_NEUTRAL_DROP_TIER4 = 71,
    /**
     * 掉落5级中立物品
     */
    DOTA_PSEUDO_RANDOM_NEUTRAL_DROP_TIER5 = 72,
    /**
     * 护身甲盾（吸引弹道）
     */
    DOTA_PSEUDO_RANDOM_MARS_BULWARK = 73,
    /**
     * 双枪在手
     */
    DOTA_PSEUDO_RANDOM_MUERTA_GUNSLINGER = 74,
    /**
     * 魔晶热血战魂
     */
    DOTA_PSEUDO_RANDOM_TROLL_FERVOR_SHARD = 75,
    /**
     * 铅弹射偏
     */
    DOTA_PSEUDO_RANDOM_SNAPFIRE_GLANCING = 76,
    /**
     * 幸运一击
     */
    DOTA_PSEUDO_RANDOM_PANGOLIER_PARRY = 77,
    /**
     * 林渊旅人
     */
    DOTA_PSEUDO_RANDOM_HOODWINK_REDIRECT = 78,
    /**
     * 翔影之钗
     */
    DOTA_PSEUDO_RANDOM_KEZ_SAI = 79,
    /**
     * 神杖混沌之军
     */
    DOTA_PSEUDO_RANDOM_CHAOS_KNIGHT_HAVOC = 80,
    /**
     * 蛙力千钧
     */
    DOTA_PSEUDO_RANDOM_LARGO_FROGSTOMP = 81,
    /**
     * 激流
     */
    DOTA_PSEUDO_RANDOM_NAGA_RIPTIDE = 82,
    /**
     * 通用自定义伪随机分布
     */
    DOTA_PSEUDO_RANDOM_CUSTOM_GENERIC = 83,
    /**
     * 自定义游戏伪随机分布1
     */
    DOTA_PSEUDO_RANDOM_CUSTOM_GAME_1 = 84,
    /**
     * 自定义游戏伪随机分布2
     */
    DOTA_PSEUDO_RANDOM_CUSTOM_GAME_2 = 85,
    /**
     * 自定义游戏伪随机分布3
     */
    DOTA_PSEUDO_RANDOM_CUSTOM_GAME_3 = 86,
    /**
     * 自定义游戏伪随机分布4
     */
    DOTA_PSEUDO_RANDOM_CUSTOM_GAME_4 = 87,
    /**
     * 自定义游戏伪随机分布5
     */
    DOTA_PSEUDO_RANDOM_CUSTOM_GAME_5 = 88,
    /**
     * 自定义游戏伪随机分布6
     */
    DOTA_PSEUDO_RANDOM_CUSTOM_GAME_6 = 89,
    /**
     * 自定义游戏伪随机分布7
     */
    DOTA_PSEUDO_RANDOM_CUSTOM_GAME_7 = 90,
    /**
     * 自定义游戏伪随机分布8
     */
    DOTA_PSEUDO_RANDOM_CUSTOM_GAME_8 = 91,
    /**
     * 自定义游戏伪随机分布9
     */
    DOTA_PSEUDO_RANDOM_CUSTOM_GAME_9 = 92,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type QuestTextReplaceValue = quest_text_replace_values_t;

/**
 * @compileMembersOnly
 */
declare enum quest_text_replace_values_t {
    /**
     * 当前完成任务文本数值
     */ QUEST_TEXT_REPLACE_VALUE_CURRENT_VALUE = 0,
    /**
     * 任务文本目标数值
     */
    QUEST_TEXT_REPLACE_VALUE_TARGET_VALUE = 1,
    /**
     * 任务文本回合数值
     */
    QUEST_TEXT_REPLACE_VALUE_ROUND = 2,
    /**
     * 任务文本奖励数值
     */
    QUEST_TEXT_REPLACE_VALUE_REWARD = 3,
    /**
     * 计数占位
     */
    QUEST_NUM_TEXT_REPLACE_VALUES = 4,
}

/**
 * @compileMembersOnly
 */
declare enum ShowGenericPopupType {
    /**
     * 添加弹窗背景色调
     */ DOTA_SHOWGENERICPOPUP_TINT_SCREEN = 1,
    /**
     * 禁止其他对话框
     */
    DOTA_SHOWGENERICPOPUP_SHOW_NO_OTHER_DIALOGS = 2,
}

/**
 * @compileMembersOnly
 *
 * https://developer.valvesoftware.com/wiki/Animation_Events#Server_events
 */
declare enum SourceEngineAnimationEvent {
    /**
     * 空白动画事件
     */ AE_EMPTY = 0,
    /**
     * 客户端播放声音
     */
    AE_CL_PLAYSOUND = 1,
    /**
     * 客户端在附着点播放声音
     */
    AE_CL_PLAYSOUND_ATTACHMENT = 2,
    /**
     * 客户端在世界坐标播放声音
     */
    AE_CL_PLAYSOUND_POSITION = 3,
    /**
     * 服务器播放声音
     */
    AE_SV_PLAYSOUND = 4,
    /**
     * 停止播放的声音
     */
    AE_CL_STOPSOUND = 5,
    /**
     * 播放循环音效
     */
    AE_CL_PLAYSOUND_LOOPING = 6,
    /**
     * 客户端创建粒子特效
     */
    AE_CL_CREATE_PARTICLE_EFFECT = 7,
    /**
     * 客户端停止粒子特效
     */
    AE_CL_STOP_PARTICLE_EFFECT = 8,
    /**
     * 客户端根据配置创建粒子
     */
    AE_CL_CREATE_PARTICLE_EFFECT_CFG = 9,
    /**
     * 服务器根据配置创建粒子
     */
    AE_SV_CREATE_PARTICLE_EFFECT_CFG = 10,
    /**
     * 服务器停止粒子特效
     */
    AE_SV_STOP_PARTICLE_EFFECT = 11,
    /**
     * 触发脚步声
     */
    AE_FOOTSTEP = 12,
    /**
     * 停止布娃娃系统物理控制
     */
    AE_CL_STOP_RAGDOLL_CONTROL = 13,
    /**
     * 启用模型的身体区域
     */
    AE_CL_ENABLE_BODYGROUP = 14,
    /**
     * 禁用模型的身体区域
     */
    AE_CL_DISABLE_BODYGROUP = 15,
    /**
     * 设置身体区域为指定值
     */
    AE_BODYGROUP_SET_VALUE = 16,
    /**
     * 执行武器攻击动作
     */
    AE_WEAPON_PERFORM_ATTACK = 17,
    /**
     * 触发实体输入
     */
    AE_FIRE_INPUT = 18,
    /**
     * 设置布料模拟属性
     */
    AE_CL_CLOTH_ATTR = 19,
    /**
     * 设置布料与地面偏移
     */
    AE_CL_CLOTH_GROUND_OFFSET = 20,
    /**
     * 增强布料刚性
     */
    AE_CL_CLOTH_STIFFEN = 21,
    /**
     * 创建布料特效
     */
    AE_CL_CLOTH_EFFECT = 22,
    /**
     * 创建动画作用范围内的道具
     */
    AE_CL_CREATE_ANIM_SCOPE_PROP = 23,
    /**
     * 逆向运动学锁定
     */
    AE_SV_IKLOCK = 24,
    /**
     * 激活动画图谱
     */
    AE_PULSE_GRAPH = 25,
    /**
     * 禁用移动平台
     */
    AE_DISABLE_PLATFORM = 26,
    /**
     * 平台启用玩家朝向同步
     */
    AE_ENABLE_PLATFORM_PLAYER_FOLLOWS_YAW = 27,
    /**
     * 平台忽略玩家朝向同步
     */
    AE_ENABLE_PLATFORM_PLAYER_IGNORES_YAW = 28,
    /**
     * 摧毁可破坏部件
     */
    AE_DESTRUCTIBLE_PART_DESTROY = 29,
    /**
     * 屏蔽后续带指定标签的动画事件
     */
    AE_CL_SUPPRESS_EVENTS_WITH_TAG = 30,
    /**
     * 隐藏粒子特效
     */
    AE_CL_HIDE_PARTICLE_EFFECT = 31,
    /**
     * 显示粒子特效
     */
    AE_CL_SHOW_PARTICLE_EFFECT = 32,
    /**
     * 添加粒子控制点
     */
    AE_CL_ADD_PARTICLE_EFFECT_CP = 33,
    /**
     * 触发语音事件
     */
    AE_CL_SPEECH = 34,
    /**
     * 发送Panorama UI事件
     */
    AE_CL_PANORAMA_EVENT = 35,
    /**
     * 播放状态特效
     */
    AE_CL_DOTA_PLAY_STATUS_EFFECT = 36,
    /**
     * 停止状态特效
     */
    AE_CL_DOTA_STOP_STATUS_EFFECT = 37,
    /**
     * 创建非玩家角色粒子特效
     */
    AE_CL_DOTA_NPC_CREATE_PARTICLE_EFFECT = 38,
    /**
     * 创建拉比克至宝魔导师密钥粒子特效
     */
    AE_CL_DOTA_RUBICK_ARCANA_CREATE_PARTICLE_EFFECT = 39,
    /**
     * 宠物捡起物品
     */
    AE_DOTA_PET_ITEM_PICKUP = 40,
    /**
     * 宠物丢下物品
     */
    AE_DOTA_PET_ITEM_DROP = 41,
    /**
     * 屏蔽常驻动画层
     */
    AE_DOTA_SUPPRESS_CONSTANT_LAYER = 42,
    /**
     * 播放特殊攻击音效
     */
    AE_DOTA_PLAY_SOUND_ATTACK_SPECIAL = 43,
    /**
     * 创建克林克兹的攻击特效
     */
    AE_DOTA_CREATE_CLINKZ_ATTACK = 44,
    /**
     * 播放背刺音效
     */
    AE_DOTA_PLAY_SOUND_ATTACK_BACKSTAB = 45,
    /**
     * 播放幻影刺客死亡特效
     */
    AE_DOTA_DIE_PHANTOM_DEATH_PARTICLES = 46,
    /**
     * 切换攻击连招
     */
    AE_DOTA_SWITCH_ATTACK_COMBO = 47,
    /**
     * 不渲染实体
     */
    AE_EF_NODRAW = 48,
    /**
     * 启用实体渲染
     */
    AE_EF_DRAW = 49,
    /**
     * 播放普通攻击音效
     */
    AE_DOTA_PLAY_SOUND_ATTACK = 50,
    /**
     * 创建客户端弹壳粒子效果
     */
    AE_CL_CREATE_PARTICLE_BRASS = 51,
}

/**
 * @compileMembersOnly
 *
 * https://developer.valvesoftware.com/wiki/Damage_types
 */
declare enum SourceEngineDamageTypes {
    /**
     * 通用伤害
     */ DMG_GENERIC = 0,
    /**
     * 碾压伤害
     */
    DMG_CRUSH = 1,
    /**
     * 子弹伤害
     */
    DMG_BULLET = 2,
    /**
     * 砍击伤害
     */
    DMG_SLASH = 4,
    /**
     * 灼烧伤害
     */
    DMG_BURN = 8,
    /**
     * 载具伤害
     */
    DMG_VEHICLE = 16,
    /**
     * 跌落伤害
     */
    DMG_FALL = 32,
    /**
     * 爆炸伤害
     */
    DMG_BLAST = 64,
    /**
     * 钝器伤害
     */
    DMG_CLUB = 128,
    /**
     * 电击伤害
     */
    DMG_SHOCK = 256,
    /**
     * 音波伤害
     */
    DMG_SONIC = 512,
    /**
     * 能量射线伤害
     */
    DMG_ENERGYBEAM = 1024,
    /**
     * 伤害不产生物理击飞
     */
    DMG_PREVENT_PHYSICS_FORCE = 2048,
    /**
     * 伤害不会碎尸
     */
    DMG_NEVERGIB = 4096,
    /**
     * 伤害总是碎尸
     */
    DMG_ALWAYSGIB = 8192,
    /**
     * 溺水伤害
     */
    DMG_DROWN = 16384,
    /**
     * 麻痹伤害
     */
    DMG_PARALYZE = 32768,
    /**
     * 神经毒气伤害
     */
    DMG_NERVEGAS = 65536,
    /**
     * 中毒伤害
     */
    DMG_POISON = 131072,
    /**
     * 辐射伤害
     */
    DMG_RADIATION = 262144,
}

/**
 * @compileMembersOnly
 *
 * https://developer.valvesoftware.com/wiki/Weapon_script#SoundData
 */
declare enum SourceEngineSoundData {
    /**
     * 空白占位
     */ EMPTY = 0,
    /**
     * 单次射击音效
     */
    SINGLE_SHOT = 2,
    /**
     * 双重射击音效
     */
    DOUBLE_SHOT = 3,
    /**
     * 近战攻击未命中音效
     */
    MELEE_MISS = 4,
    /**
     * 近战攻击命中单位音效
     */
    MELEE_HIT = 5,
    /**
     * 近战命中地形音效
     */
    MELEE_HIT_WORLD = 6,
    /**
     * 特殊音效1
     */
    SPECIAL1 = 9,
    /**
     * 特殊音效2
     */
    SPECIAL2 = 10,
    /**
     * 特殊音效3
     */
    SPECIAL3 = 11,
}

/**
 * @deprecated Normalized enum name. Defined only for library compatibility.
 */
type SubquestTextReplaceValue = subquest_text_replace_values_t;

/**
 * @compileMembersOnly
 */
declare enum subquest_text_replace_values_t {
    /**
     * 当前完成次级任务文本数值
     */ SUBQUEST_TEXT_REPLACE_VALUE_CURRENT_VALUE = 0,
    /**
     * 次级任务文本目标数值
     */
    SUBQUEST_TEXT_REPLACE_VALUE_TARGET_VALUE = 1,
    /**
     * 计数占位
     */
    SUBQUEST_NUM_TEXT_REPLACE_VALUES = 2,
}

/**
 * @compileMembersOnly
 */
declare enum UnitFilterResult {
    /**
     * 筛选成功
     */ UF_SUCCESS = 0,
    /**
     * 因友军筛选失败
     */
    UF_FAIL_FRIENDLY = 1,
    /**
     * 因敌人筛选失败
     */
    UF_FAIL_ENEMY = 2,
    /**
     * 因英雄筛选失败
     */
    UF_FAIL_HERO = 3,
    /**
     * 因英雄级单位筛选失败
     */
    UF_FAIL_CONSIDERED_HERO = 4,
    /**
     * 因小兵筛选失败
     */
    UF_FAIL_CREEP = 5,
    /**
     * 因建筑筛选失败
     */
    UF_FAIL_BUILDING = 6,
    /**
     * 因信使筛选失败
     */
    UF_FAIL_COURIER = 7,
    /**
     * 因其他类型单位筛选失败
     */
    UF_FAIL_OTHER = 8,
    /**
     * 因远古单位筛选失败
     */
    UF_FAIL_ANCIENT = 9,
    /**
     * 因幻象筛选失败
     */
    UF_FAIL_ILLUSION = 10,
    /**
     * 因召唤单位筛选失败
     */
    UF_FAIL_SUMMONED = 11,
    /**
     * 因被支配单位筛选失败
     */
    UF_FAIL_DOMINATED = 12,
    /**
     * 因近战单位筛选失败
     */
    UF_FAIL_MELEE = 13,
    /**
     * 因远程单位筛选失败
     */
    UF_FAIL_RANGED = 14,
    /**
     * 因单位已死亡筛选失败
     */
    UF_FAIL_DEAD = 15,
    /**
     * 因技能免疫友方筛选失败
     */
    UF_FAIL_MAGIC_IMMUNE_ALLY = 16,
    /**
     * 因技能免疫敌方筛选失败
     */
    UF_FAIL_MAGIC_IMMUNE_ENEMY = 17,
    /**
     * 因无敌单位筛选失败
     */
    UF_FAIL_INVULNERABLE = 18,
    /**
     * 因在战争迷雾中筛选失败
     */
    UF_FAIL_IN_FOW = 19,
    /**
     * 因隐身单位筛选失败
     */
    UF_FAIL_INVISIBLE = 20,
    /**
     * 因不可被玩家控制筛选失败
     */
    UF_FAIL_NOT_PLAYER_CONTROLLED = 21,
    /**
     * 因攻击免疫筛选失败
     */
    UF_FAIL_ATTACK_IMMUNE = 22,
    /**
     * 因自定义失败筛选失败
     */
    UF_FAIL_CUSTOM = 23,
    /**
     * 因位置无效筛选失败
     */
    UF_FAIL_INVALID_LOCATION = 24,
    /**
     * 因禁用帮助筛选失败
     */
    UF_FAIL_DISABLE_HELP = 25,
    /**
     * 因隐藏单位筛选失败
     */
    UF_FAIL_OUT_OF_WORLD = 26,
    /**
     * 因睡眠筛选失败
     */
    UF_FAIL_NIGHTMARED = 27,
    /**
     * 因被地形阻挡筛选失败
     */
    UF_FAIL_OBSTRUCTED = 28,
}
