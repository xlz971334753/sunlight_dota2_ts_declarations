/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type SteamUGCQuery = SteamUgcQuery;

declare enum SteamUgcQuery {
    RANKED_BY_VOTE = 0,
    RANKED_BY_PUBLICATION_DATE = 1,
    ACCEPTED_FOR_GAME_RANKED_BY_ACCEPTANCE_DATE = 2,
    RANKED_BY_TREND = 3,
    FAVORITED_BY_FRIENDS_RANKED_BY_PUBLICATION_DATE = 4,
    CREATED_BY_FRIENDS_RANKED_BY_PUBLICATION_DATE = 5,
    RANKED_BY_NUM_TIMES_REPORTED = 6,
    CREATED_BY_FOLLOWED_USERS_RANKED_BY_PUBLICATION_DATE = 7,
    NOT_YET_RATED = 8,
    RANKED_BY_TOTAL_VOTES_ASC = 9,
    RANKED_BY_VOTES_UP = 10,
    RANKED_BY_TEXT_SEARCH = 11,
    RANKED_BY_TOTAL_UNIQUE_SUBSCRIPTIONS = 12,
    RANKED_BY_PLAYTIME_TREND = 13,
    RANKED_BY_TOTAL_PLAYTIME = 14,
    RANKED_BY_AVERAGE_PLAYTIME_TREND = 15,
    RANKED_BY_LIFETIME_AVERAGE_PLAYTIME = 16,
    RANKED_BY_PLAYTIME_SESSIONS_TREND = 17,
    RANKED_BY_LIFETIME_PLAYTIME_SESSIONS = 18,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type SteamUGCMatchingUGCType = SteamUgcMatchingUgcType;

declare enum SteamUgcMatchingUgcType {
    ITEMS = 0,
    ITEMS_MTX = 1,
    ITEMS_READY_TO_USE = 2,
    COLLECTIONS = 3,
    ARTWORK = 4,
    VIDEOS = 5,
    SCREENSHOTS = 6,
    ALL_GUIDES = 7,
    WEB_GUIDES = 8,
    INTEGRATED_GUIDES = 9,
    USABLE_IN_GAME = 10,
    CONTROLLER_BINDINGS = 11,
    GAME_MANAGED_ITEMS = 12,
    ALL = -1,
}

declare enum SteamUniverse {
    INVALID = 0,
    INTERNAL = 3,
    DEV = 4,
    BETA = 2,
    PUBLIC = 1,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_GameState = GameState;

declare enum GameState {
    /**
     * 初始化阶段
     */ INIT = 0,
    /**
     * 加载游戏阶段
     */
    WAIT_FOR_PLAYERS_TO_LOAD = 1,
    /**
     * 英雄选择阶段
     */
    HERO_SELECTION = 4,
    /**
     * 策略准备阶段
     */
    STRATEGY_TIME = 5,
    /**
     * 游戏前阶段
     */
    PRE_GAME = 8,
    /**
     * 游戏进行中
     */
    GAME_IN_PROGRESS = 10,
    /**
     * 游戏结束阶段
     */
    POST_GAME = 11,
    /**
     * 玩家断开连接
     */
    DISCONNECT = 12,
    /**
     * 队伍展示阶段
     */
    TEAM_SHOWCASE = 6,
    /**
     * 自定义游戏设置阶段
     */
    CUSTOM_GAME_SETUP = 2,
    /**
     * 等待地图加载阶段
     */
    WAIT_FOR_MAP_TO_LOAD = 7,
    /**
     * 场景设置阶段
     */
    SCENARIO_SETUP = 9,
    /**
     * 玩家选取阶段
     */
    PLAYER_DRAFT = 3,
    LAST = 0,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_GC_TEAM = GcTeam;

declare enum GcTeam {
    /**
     * 天辉
     */ GOOD_GUYS = 0,
    /**
     * 夜魇
     */
    BAD_GUYS = 1,
    /**
     * 解说员
     */
    BROADCASTER = 2,
    /**
     * 观战者
     */
    SPECTATOR = 3,
    /**
     * 玩家池队伍
     */
    PLAYER_POOL = 4,
    /**
     * 非玩家队伍
     */
    NOTEAM = 5,
    /**
     * 自定义队伍1
     */
    CUSTOM_1 = 6,
    /**
     * 自定义队伍2
     */
    CUSTOM_2 = 7,
    /**
     * 自定义队伍3
     */
    CUSTOM_3 = 8,
    /**
     * 自定义队伍4
     */
    CUSTOM_4 = 9,
    /**
     * 自定义队伍5
     */
    CUSTOM_5 = 10,
    /**
     * 自定义队伍6
     */
    CUSTOM_6 = 11,
    /**
     * 自定义队伍7
     */
    CUSTOM_7 = 12,
    /**
     * 自定义队伍8
     */
    CUSTOM_8 = 13,
    /**
     * 中立
     */
    NEUTRALS = 14,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_GameMode = GameMode;

declare enum GameMode {
    NONE = 0,
    AP = 1,
    CM = 2,
    RD = 3,
    SD = 4,
    AR = 5,
    INTRO = 6,
    HW = 7,
    REVERSE_CM = 8,
    XMAS = 9,
    TUTORIAL = 10,
    MO = 11,
    LP = 12,
    POOL_1 = 13,
    FH = 14,
    CUSTOM = 15,
    CD = 16,
    BD = 17,
    ABILITY_DRAFT = 18,
    EVENT = 19,
    ARDM = 20,
    '1_V_1_MID' = 21,
    ALL_DRAFT = 22,
    TURBO = 23,
    MUTATION = 24,
    COACHES_CHALLENGE = 25,
    BOT_CHALLENGE = 26,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAConnectionState_t = ConnectionState;

declare enum ConnectionState {
    /**
     * 未知连接状态
     */ UNKNOWN = 0,
    /**
     * 尚未连接
     */
    NOT_YET_CONNECTED = 1,
    /**
     * 已连接
     */
    CONNECTED = 2,
    /**
     * 已断开连接
     */
    DISCONNECTED = 3,
    /**
     * 已放弃游戏
     */
    ABANDONED = 4,
    /**
     * 正加载游戏
     */
    LOADING = 5,
    /**
     * 连接失败
     */
    FAILED = 6,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type dotaunitorder_t = UnitOrder;

declare enum UnitOrder {
    /**
     * 无指令
     */ NONE = 0,
    /**
     * 移动到指定位置
     */
    MOVE_TO_POSITION = 1,
    /**
     * 移动到目标单位
     */
    MOVE_TO_TARGET = 2,
    /**
     * 移动并攻击
     */
    ATTACK_MOVE = 3,
    /**
     * 攻击目标单位
     */
    ATTACK_TARGET = 4,
    /**
     * 对位置施法
     */
    CAST_POSITION = 5,
    /**
     * 对单位施法
     */
    CAST_TARGET = 6,
    /**
     * 对树施法
     */
    CAST_TARGET_TREE = 7,
    /**
     * 无目标施法
     */
    CAST_NO_TARGET = 8,
    /**
     * 开关技能施法
     */
    CAST_TOGGLE = 9,
    /**
     * 固守原位
     */
    HOLD_POSITION = 10,
    /**
     * 学习技能
     */
    TRAIN_ABILITY = 11,
    /**
     * 丢弃物品
     */
    DROP_ITEM = 12,
    /**
     * 将物品给目标单位
     */
    GIVE_ITEM = 13,
    /**
     * 拾取物品
     */
    PICKUP_ITEM = 14,
    /**
     * 拾取神符
     */
    PICKUP_RUNE = 15,
    /**
     * 购买物品
     */
    PURCHASE_ITEM = 16,
    /**
     * 出售物品
     */
    SELL_ITEM = 17,
    /**
     * 拆解物品
     */
    DISASSEMBLE_ITEM = 18,
    /**
     * 移动物品
     */
    MOVE_ITEM = 19,
    /**
     * 进行自动施法
     */
    CAST_TOGGLE_AUTO = 20,
    /**
     * 停止当前动作
     */
    STOP = 21,
    /**
     * 嘲讽
     */
    TAUNT = 22,
    /**
     * 买活
     */
    BUYBACK = 23,
    /**
     * 使用防御神符
     */
    GLYPH = 24,
    /**
     * 从储藏处卸下物品
     */
    EJECT_ITEM_FROM_STASH = 25,
    /**
     * 对神符施法
     */
    CAST_RUNE = 26,
    /**
     * 小地图进行警示
     */
    PING_ABILITY = 27,
    /**
     * 向方向移动
     */
    MOVE_TO_DIRECTION = 28,
    /**
     * 巡逻
     */
    PATROL = 29,
    /**
     * 矢量施法
     */
    VECTOR_TARGET_POSITION = 30,
    /**
     * 使用扫描
     */
    RADAR = 31,
    /**
     * 锁定合成
     */
    SET_ITEM_COMBINE_LOCK = 32,
    /**
     * 继续执行
     */
    CONTINUE = 33,
    /**
     * 取消矢量施法
     */
    VECTOR_TARGET_CANCELED = 34,
    /**
     * 河道涂色技能
     */
    CAST_RIVER_PAINT = 35,
    /**
     * 选人阶段调整物品分配
     */
    PREGAME_ADJUST_ITEM_ASSIGNMENT = 36,
    /**
     * 将物品丢在泉水
     */
    DROP_ITEM_AT_FOUNTAIN = 37,
    /**
     * 取出中立物品
     */
    TAKE_ITEM_FROM_NEUTRAL_ITEM_STASH = 38,
    /**
     * 相向移动
     */
    MOVE_RELATIVE = 39,
    /**
     * 多样施法
     */
    CAST_TOGGLE_ALT = 40,
    /**
     * 使用消耗品
     */
    CONSUME_ITEM = 41,
    /**
     * 标记待出售物品
     */
    SET_ITEM_MARK_FOR_SELL = 42,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_OVERHEAD_ALERT = OverheadAlert;

declare enum OverheadAlert {
    /**
     * 显示获得的金钱
     */ GOLD = 0,
    /**
     * 显示反补提示
     */
    DENY = 1,
    /**
     * 显示致命一击伤害
     */
    CRITICAL = 2,
    /**
     * 显示获得的经验值
     */
    XP = 3,
    /**
     * 显示技能额外伤害
     */
    BONUS_SPELL_DAMAGE = 4,
    /**
     * 攻击未命中
     */
    MISS = 5,
    /**
     * 显示伤害
     */
    DAMAGE = 6,
    /**
     * 显示闪避
     */
    EVADE = 7,
    /**
     * 显示被格挡伤害
     */
    BLOCK = 8,
    /**
     * 显示中毒额外伤害
     */
    BONUS_POISON_DAMAGE = 9,
    /**
     * 显示治疗量
     */
    HEAL = 10,
    /**
     * 显示获得的法力值
     */
    MANA_ADD = 11,
    /**
     * 显示被消耗或吸取法力值
     */
    MANA_LOSS = 12,
    /**
     * 显示被格挡魔法伤害
     */
    MAGICAL_BLOCK = 16,
    /**
     * 显示承受伤害
     */
    INCOMING_DAMAGE = 17,
    /**
     * 显示造成伤害
     */
    OUTGOING_DAMAGE = 18,
    /**
     * 显示控制抗性相关信息
     */
    DISABLE_RESIST = 19,
    /**
     * 显示单位死亡提示
     */
    DEATH = 20,
    /**
     * 显示已格挡伤害
     */
    BLOCKED = 21,
    /**
     * 显示获得物品提示
     */
    ITEM_RECEIVED = 22,
    /**
     * 显示阿哈利姆魔晶提示
     */
    SHARD = 23,
    /**
     * 显示致死打击伤害
     */
    DEADLY_BLOW = 24,
    /**
     * 显示攻击被强制落空
     */
    FORCE_MISS = 25,
    /**
     * 显示不朽之守护提示
     */
    AEGIS = 26,
    /**
     * 显示驱散提示
     */
    DISPEL = 27,
    /**
     * 显示额外纯粹伤害
     */
    BONUS_PURE_DAMAGE = 28,
}

/**
 * 计数占位
 */
declare const DOTA_HEROPICK_STATE_COUNT: 62;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_HeroPickState = HeroPickState;

declare enum HeroPickState {
    /**
     * 未选取状态
     */ NONE = 0,
    /**
     * 全阵营模式选择阶段
     */
    AP_SELECT = 1,
    /**
     * 单一征召模式选择阶段
     */
    SD_SELECT = 2,
    /**
     * 未使用引导选择状态
     */
    INTRO_SELECT_UNUSED = 3,
    /**
     * 未使用随机征召选择状态
     */
    RD_SELECT_UNUSED = 4,
    /**
     * 队长模式介绍阶段
     */
    CM_INTRO = 5,
    /**
     * 队长选择阶段
     */
    CM_CAPTAINPICK = 6,
    /**
     * 队长模式第1轮禁英雄阶段
     */
    CM_BAN1 = 7,
    /**
     * 队长模式第2轮禁英雄阶段
     */
    CM_BAN2 = 8,
    /**
     * 队长模式第3轮禁英雄阶段
     */
    CM_BAN3 = 9,
    /**
     * 队长模式第4轮禁英雄阶段
     */
    CM_BAN4 = 10,
    /**
     * 队长模式第5轮禁英雄阶段
     */
    CM_BAN5 = 11,
    /**
     * 队长模式第6轮禁英雄阶段
     */
    CM_BAN6 = 12,
    /**
     * 队长模式第7轮禁英雄阶段
     */
    CM_BAN7 = 13,
    /**
     * 队长模式第8轮禁英雄阶段
     */
    CM_BAN8 = 14,
    /**
     * 队长模式第9轮禁英雄阶段
     */
    CM_BAN9 = 15,
    /**
     * 队长模式第10轮禁英雄阶段
     */
    CM_BAN10 = 16,
    /**
     * 队长模式第11轮禁英雄阶段
     */
    CM_BAN11 = 17,
    /**
     * 队长模式第12轮禁英雄阶段
     */
    CM_BAN12 = 18,
    /**
     * 队长模式第13轮禁英雄阶段
     */
    CM_BAN13 = 19,
    /**
     * 队长模式第14轮禁英雄阶段
     */
    CM_BAN14 = 20,
    /**
     * 队长模式第1轮选人阶段
     */
    CM_SELECT1 = 21,
    /**
     * 队长模式第2轮选人阶段
     */
    CM_SELECT2 = 22,
    /**
     * 队长模式第3轮选人阶段
     */
    CM_SELECT3 = 23,
    /**
     * 队长模式第4轮选人阶段
     */
    CM_SELECT4 = 24,
    /**
     * 队长模式第5轮选人阶段
     */
    CM_SELECT5 = 25,
    /**
     * 队长模式第6轮选人阶段
     */
    CM_SELECT6 = 26,
    /**
     * 队长模式第7轮选人阶段
     */
    CM_SELECT7 = 27,
    /**
     * 队长模式第8轮选人阶段
     */
    CM_SELECT8 = 28,
    /**
     * 队长模式第9轮选人阶段
     */
    CM_SELECT9 = 29,
    /**
     * 队长模式第10轮选人阶段
     */
    CM_SELECT10 = 30,
    /**
     * 队长模式最终确定选择
     */
    CM_PICK = 31,
    /**
     * 全随机模式选择阶段
     */
    AR_SELECT = 32,
    /**
     * 变异模式选择阶段
     */
    MO_SELECT = 33,
    /**
     * 加速模式选择阶段
     */
    FH_SELECT = 34,
    /**
     * 队长征召模式介绍阶段
     */
    CD_INTRO = 35,
    /**
     * 队长征召中队长选择阶段
     */
    CD_CAPTAINPICK = 36,
    /**
     * 队长征召第1轮禁英雄
     */
    CD_BAN1 = 37,
    /**
     * 队长征召第2轮禁英雄
     */
    CD_BAN2 = 38,
    /**
     * 队长征召第3轮禁英雄
     */
    CD_BAN3 = 39,
    /**
     * 队长征召第4轮禁英雄
     */
    CD_BAN4 = 40,
    /**
     * 队长征召第5轮禁英雄
     */
    CD_BAN5 = 41,
    /**
     * 队长征召第6轮禁英雄
     */
    CD_BAN6 = 42,
    /**
     * 队长征召第1轮选人阶段
     */
    CD_SELECT1 = 43,
    /**
     * 队长征召第2轮选人阶段
     */
    CD_SELECT2 = 44,
    /**
     * 队长征召第3轮选人阶段
     */
    CD_SELECT3 = 45,
    /**
     * 队长征召第4轮选人阶段
     */
    CD_SELECT4 = 46,
    /**
     * 队长征召第5轮选人阶段
     */
    CD_SELECT5 = 47,
    /**
     * 队长征召第6轮选人阶段
     */
    CD_SELECT6 = 48,
    /**
     * 队长征召第7轮选人阶段
     */
    CD_SELECT7 = 49,
    /**
     * 队长征召第8轮选人阶段
     */
    CD_SELECT8 = 50,
    /**
     * 队长征召第9轮选人阶段
     */
    CD_SELECT9 = 51,
    /**
     * 队长征召第10轮选人阶段
     */
    CD_SELECT10 = 52,
    /**
     * 队长征召最终确定选择
     */
    CD_PICK = 53,
    /**
     * 平衡征召模式选择阶段
     */
    BD_SELECT = 54,
    /**
     * 技能征召模式选择阶段
     */
    ABILITY_DRAFT_SELECT = 55,
    /**
     * 全随机死亡模式选择阶段
     */
    ARDM_SELECT = 56,
    /**
     * 全体征召模式选择阶段
     */
    ALL_DRAFT_SELECT = 57,
    /**
     * 自定义游戏的英雄选择阶段
     */
    CUSTOMGAME_SELECT = 58,
    /**
     * 选人惩罚状态
     */
    SELECT_PENALTY = 59,
    /**
     * 自定义选人规则状态
     */
    CUSTOM_PICK_RULES = 60,
    /**
     * 特殊剧情或场景的选人阶段
     */
    SCENARIO_PICK = 61,
}

/**
 * 初始占位
 */
declare const DOTA_TEAM_FIRST: 2;

/**
 * 阵营计数占位
 */
declare const DOTA_TEAM_COUNT: 15;

/**
 * 自定义阵营下限占位
 */
declare const DOTA_TEAM_CUSTOM_MIN: 6;

/**
 * 自定义阵营上限占位
 */
declare const DOTA_TEAM_CUSTOM_MAX: 13;

/**
 * 自定义阵营计数占位
 */
declare const DOTA_TEAM_CUSTOM_COUNT: 8;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTATeam_t = DotaTeam;

declare enum DotaTeam {
    /**
     * 天辉
     */ GOODGUYS = 2,
    /**
     * 夜魇
     */
    BADGUYS = 3,
    /**
     * 中立
     */
    NEUTRALS = 4,
    /**
     * 特殊中立
     */
    NOTEAM = 5,
    /**
     * 自定义阵营1
     */
    CUSTOM_1 = 6,
    /**
     * 自定义阵营2
     */
    CUSTOM_2 = 7,
    /**
     * 自定义阵营3
     */
    CUSTOM_3 = 8,
    /**
     * 自定义阵营4
     */
    CUSTOM_4 = 9,
    /**
     * 自定义阵营5
     */
    CUSTOM_5 = 10,
    /**
     * 自定义阵营6
     */
    CUSTOM_6 = 11,
    /**
     * 自定义阵营7
     */
    CUSTOM_7 = 12,
    /**
     * 自定义阵营8
     */
    CUSTOM_8 = 13,
    /**
     * 阵营选取池
     */
    DRAFT_POOL = 14,
}

/**
 * 计数占位
 */
declare const DOTA_RUNE_COUNT: 10;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_RUNES = RuneType;

declare enum RuneType {
    /**
     * 无效占位
     */ INVALID = -1,
    /**
     * 增伤神符
     */
    DOUBLEDAMAGE = 0,
    /**
     * 极速神符
     */
    HASTE = 1,
    /**
     * 幻象神符
     */
    ILLUSION = 2,
    /**
     * 隐身神符
     */
    INVISIBILITY = 3,
    /**
     * 恢复神符
     */
    REGENERATION = 4,
    /**
     * 赏金神符
     */
    BOUNTY = 5,
    /**
     * 奥术神符
     */
    ARCANE = 6,
    /**
     * 圣水神符
     */
    WATER = 7,
    /**
     * 智慧神符
     */
    XP = 8,
    /**
     * 护盾神符
     */
    SHIELD = 9,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_UNIT_TARGET_TEAM = UnitTargetTeam;

declare enum UnitTargetTeam {
    /**
     * 空白占位
     */ NONE = 0,
    /**
     * 友方目标
     */
    FRIENDLY = 1,
    /**
     * 敌方目标
     */
    ENEMY = 2,
    /**
     * 自定义阵营目标
     */
    CUSTOM = 4,
    /**
     * 敌友双方目标
     */
    BOTH = 3,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_UNIT_TARGET_TYPE = UnitTargetType;

declare enum UnitTargetType {
    /**
     * 空白占位
     */ NONE = 0,
    /**
     * 英雄目标
     */
    HERO = 1,
    /**
     * 小兵目标
     */
    CREEP = 2,
    /**
     * 建筑目标
     */
    BUILDING = 4,
    /**
     * 信使目标
     */
    COURIER = 16,
    /**
     * 其他单位目标
     */
    OTHER = 32,
    /**
     * 树木目标
     */
    TREE = 64,
    /**
     * 自定义单位目标
     */
    CUSTOM = 128,
    /**
     * 自身目标
     */
    SELF = 256,
    /**
     * 基础单位目标
     */
    BASIC = 18,
    /**
     * 通用单位目标
     */
    ALL = 55,
    /**
     * 英雄和小兵目标
     */
    HEROES_AND_CREEPS = 19,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_UNIT_TARGET_FLAGS = UnitTargetFlags;

declare enum UnitTargetFlags {
    /**
     * 空白占位
     */ NONE = 0,
    /**
     * 仅可选定远程单位目标
     */
    RANGED_ONLY = 2,
    /**
     * 仅可选定近战单位目标
     */
    MELEE_ONLY = 4,
    /**
     * 可选定死亡目标
     */
    DEAD = 8,
    /**
     * 可选定技能免疫敌方目标
     */
    MAGIC_IMMUNE_ENEMIES = 16,
    /**
     * 无法选定技能免疫友方目标
     */
    NOT_MAGIC_IMMUNE_ALLIES = 32,
    /**
     * 可选定无敌目标
     */
    INVULNERABLE = 64,
    /**
     * 可选定战争迷雾可见目标
     */
    FOW_VISIBLE = 128,
    /**
     * 可选定非隐身目标
     */
    NO_INVIS = 256,
    /**
     * 无法选定远古单位目标
     */
    NOT_ANCIENTS = 512,
    /**
     * 可选定玩家可控单位目标
     */
    PLAYER_CONTROLLED = 1024,
    /**
     * 无法选定被支配目标
     */
    NOT_DOMINATED = 2048,
    /**
     * 无法选定召唤单位目标
     */
    NOT_SUMMONED = 4096,
    /**
     * 无法选定幻象目标
     */
    NOT_ILLUSIONS = 8192,
    /**
     * 无法选定攻击免疫单位目标
     */
    NOT_ATTACK_IMMUNE = 16384,
    /**
     * 仅可选定拥有魔法值单位目标
     */
    MANA_ONLY = 32768,
    /**
     * 检测禁用帮助选定目标
     */
    CHECK_DISABLE_HELP = 65536,
    /**
     * 无法选定英雄级单位目标
     */
    NOT_CREEP_HERO = 131072,
    /**
     * 可选定隐藏目标
     */
    OUT_OF_WORLD = 262144,
    /**
     * 无法选定睡眠目标
     */
    NOT_NIGHTMARED = 524288,
    /**
     * 优先选定敌方目标
     */
    PREFER_ENEMIES = 1048576,
    /**
     * 考虑地形选定目标
     */
    RESPECT_OBSTRUCTIONS = 2097152,
    /**
     * 可选定视野内目标
     */
    CAN_BE_SEEN = 384,
}

/**
 * 最大玩家数
 */
declare const DOTA_MAX_PLAYERS: 64;

/**
 * 最大队伍数
 */
declare const DOTA_MAX_TEAM: 24;

/**
 * 最大玩家队伍数
 */
declare const DOTA_MAX_PLAYER_TEAMS: 10;

/**
 * 队伍最大玩家数
 */
declare const DOTA_MAX_TEAM_PLAYERS: 24;

/**
 * 观战者队伍最大人数
 */
declare const DOTA_MAX_SPECTATOR_TEAM_SIZE: 40;

/**
 * 观战者最大人数
 */
declare const DOTA_MAX_SPECTATOR_LOBBY_SIZE: 15;

/**
 * 默认最大队伍数
 */
declare const DOTA_DEFAULT_MAX_TEAM: 5;

/**
 * 队伍默认最大玩家数
 */
declare const DOTA_DEFAULT_MAX_TEAM_PLAYERS: 10;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAInventoryFlags_t = InventoryFlags;

declare enum InventoryFlags {
    /**
     * 无法使用任意物品栏
     */ ALLOW_NONE = 0,
    /**
     * 仅可使用主物品栏
     */
    ALLOW_MAIN = 1,
    /**
     * 仅可使用储藏处
     */
    ALLOW_STASH = 2,
    /**
     * 可将物品置于地面
     */
    ALLOW_DROP_ON_GROUND = 4,
    /**
     * 可将物品置入泉水
     */
    ALLOW_DROP_AT_FOUNTAIN = 8,
    /**
     * 仅能将物品置于地面
     */
    LIMIT_DROP_ON_GROUND = 16,
    /**
     * 可使用物品栏
     */
    ALL_ACCESS = 3,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type EDOTA_ModifyGold_Reason = ModifyGoldReason;

declare enum ModifyGoldReason {
    /**
     * 未指定原因影响金钱
     */ UNSPECIFIED = 0,
    /**
     * 因死亡而损失的金钱
     */
    DEATH = 1,
    /**
     * 用于买活的金钱
     */
    BUYBACK = 2,
    /**
     * 购买消耗品消耗金钱
     */
    PURCHASE_CONSUMABLE = 3,
    /**
     * 购买普通物品消耗金钱
     */
    PURCHASE_ITEM = 4,
    /**
     * 因队友逃跑而分配的金钱
     */
    ABANDONED_REDISTRIBUTE = 5,
    /**
     * 出售物品获得的金钱
     */
    SELL_ITEM = 6,
    /**
     * 使用技能所消耗的金钱
     */
    ABILITY_COST = 7,
    /**
     * 使用作弊命令修改的金钱
     */
    CHEAT_COMMAND = 8,
    /**
     * 选择英雄超时的金钱惩罚
     */
    SELECTION_PENALTY = 9,
    /**
     * 每秒自然获得的金钱
     */
    GAME_TICK = 10,
    /**
     * 推塔获得的金钱
     */
    BUILDING = 11,
    /**
     * 击杀敌方英雄获得的金钱
     */
    HERO_KILL = 12,
    /**
     * 击杀兵线小兵获得的金钱
     */
    CREEP_KILL = 13,
    /**
     * 击杀野怪获得的金钱
     */
    NEUTRAL_KILL = 14,
    /**
     * 击杀肉山获得的金钱
     */
    ROSHAN_KILL = 15,
    /**
     * 击杀信使获得的金钱
     */
    COURIER_KILL = 16,
    /**
     * 拾取赏金神符获得的金钱
     */
    BOUNTY_RUNE = 17,
    /**
     * 队伍共享金钱
     */
    SHARED_GOLD = 18,
    /**
     * 由技能产生的金钱
     */
    ABILITY_GOLD = 19,
    /**
     * 摧毁敌方视野守卫获得的金钱
     */
    WARD_KILL = 20,
    /**
     * 玩家亲自击杀信使获得的额外金钱
     */
    COURIER_KILLED_BY_THIS_PLAYER = 21,
}

/**
 * 上限占位
 */
declare const DOTA_UNIT_ATTACK_CAPABILITY_BIT_COUNT: 3;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAUnitAttackCapability_t = UnitAttackCapability;

declare enum UnitAttackCapability {
    /**
     * 不可攻击
     */ NO_ATTACK = 0,
    /**
     * 近战
     */
    MELEE_ATTACK = 1,
    /**
     * 远程
     */
    RANGED_ATTACK = 2,
    /**
     * 远程朝向攻击
     */
    RANGED_ATTACK_DIRECTIONAL = 4,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAUnitMoveCapability_t = UnitMoveCapability;

declare enum UnitMoveCapability {
    /**
     * 不可移动
     */ NONE = 0,
    /**
     * 地面
     */
    GROUND = 1,
    /**
     * 飞行
     */
    FLY = 2,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type EShareAbility = ItemShareability;

declare enum ItemShareability {
    /**
     * 可完全共享
     */ FULLY_SHAREABLE = 0,
    /**
     * 可部分共享
     */
    PARTIALLY_SHAREABLE = 1,
    /**
     * 不可共享
     */
    NOT_SHAREABLE = 2,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAMusicStatus_t = MusicStatus;

declare enum MusicStatus {
    /**
     * 无音乐阶段
     */ NONE = 0,
    /**
     * 探索音乐阶段
     */
    EXPLORATION = 1,
    /**
     * 战斗音乐阶段
     */
    BATTLE = 2,
    /**
     * 游戏开始前音乐阶段
     */
    PRE_GAME_EXPLORATION = 3,
    /**
     * 死亡音乐阶段
     */
    DEAD = 4,
    /**
     * 终止占位
     */
    LAST = 5,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_ABILITY_BEHAVIOR = AbilityBehavior;

declare enum AbilityBehavior {
    /**
     * 空白占位
     */ NONE = 0,
    /**
     * 隐藏技能
     */
    HIDDEN = 1,
    /**
     * 被动
     */
    PASSIVE = 2,
    /**
     * 无目标技能
     */
    NO_TARGET = 4,
    /**
     * 单位目标技能
     */
    UNIT_TARGET = 8,
    /**
     * 点目标技能
     */
    POINT = 16,
    /**
     * 视觉指示器
     */
    AOE = 32,
    /**
     * 非学习技能
     */
    NOT_LEARNABLE = 64,
    /**
     * 持续施法
     */
    CHANNELLED = 128,
    /**
     * 活动物品技能
     */
    ITEM = 256,
    /**
     * 开关/切换
     */
    TOGGLE = 512,
    /**
     * 矢量视觉指示器
     */
    DIRECTIONAL = 1024,
    /**
     * 即时生效
     */
    IMMEDIATE = 2048,
    /**
     * 自动施法
     */
    AUTOCAST = 4096,
    /**
     * 可选单位目标
     */
    OPTIONAL_UNIT_TARGET = 8192,
    /**
     * 可选点目标
     */
    OPTIONAL_POINT = 16384,
    /**
     * 可选无目标
     */
    OPTIONAL_NO_TARGET = 32768,
    /**
     * 光环
     */
    AURA = 65536,
    /**
     * 主动攻击特效
     */
    ATTACK = 131072,
    /**
     * 施法中断移动
     */
    DONT_RESUME_MOVEMENT = 262144,
    /**
     * 被缠绕禁用
     */
    ROOT_DISABLES = 524288,
    /**
     * 无视死亡和无法行动
     */
    UNRESTRICTED = 1048576,
    /**
     * 无视控制及行动队列
     */
    IGNORE_PSEUDO_QUEUE = 2097152,
    /**
     * 无视持续施法
     */
    IGNORE_CHANNEL = 4194304,
    /**
     * 保留移动指令
     */
    DONT_CANCEL_MOVEMENT = 8388608,
    /**
     * 不警告目标
     */
    DONT_ALERT_TARGET = 16777216,
    /**
     * 施法中断攻击
     */
    DONT_RESUME_ATTACK = 33554432,
    /**
     * 无视窃取前摇
     */
    NORMAL_WHEN_STOLEN = 67108864,
    /**
     * 无施法后摇
     */
    IGNORE_BACKSWING = 134217728,
    /**
     * 神符目标技能
     */
    RUNE_TARGET = 268435456,
    /**
     * 不取消持续施法
     */
    DONT_CANCEL_CHANNEL = 536870912,
    /**
     * 矢量目标
     */
    VECTOR_TARGETING = 1073741824,
    /**
     * 备用点目标施放
     */
    LAST_RESORT_POINT = 2147483648,
    /**
     * 特殊自身施法
     */
    CAN_SELF_CAST = 4294967296,
    /**
     * 技能页面展示
     */
    SHOW_IN_GUIDES = 8589934592,
    /**
     * 效果索引解锁
     */
    UNLOCKED_BY_EFFECT_INDEX = 17179869184,
    /**
     * 忽略关联消耗
     */
    SUPPRESS_ASSOCIATED_CONSUMABLE = 34359738368,
    /**
     * 自由绘制轨迹
     */
    FREE_DRAW_TARGETING = 68719476736,
    /**
     * 无视沉默
     */
    IGNORE_SILENCE = 137438953472,
    /**
     * 过度施法距离
     */
    OVERSHOOT = 274877906944,
    /**
     * 无视锁闭
     */
    IGNORE_MUTED = 549755813888,
    /**
     * 多样施法
     */
    ALT_CASTABLE = 1099511627776,
    /**
     * 跳过快捷键
     */
    SKIP_FOR_KEYBINDS = 4398046511104,
    /**
     * 先天界面展示
     */
    INNATE_UI = 8796093022208,
    /**
     * 无法交换
     */
    UNSWAPPABLE = 17592186044416,
    /**
     * 不触发其他技能
     */
    DONT_PROC_OTHER_ABILITIES = 35184372088832,
    /**
     * 不中断隐身
     */
    IGNORE_INVISIBLE = 70368744177664,
    /**
     * 被锁闭禁用
     */
    AFFECTED_BY_MUTE = 140737488355328,
    /**
     * 虚拟物品
     */
    IS_FAKE_ITEM = 281474976710656,
    /**
     * 强制不使用先天技能界面
     */
    FORCE_NO_INNATE_UI = 562949953421312,
    /**
     * 强制键位绑定
     */
    FORCE_KEYBIND = 1125899906842624,
    /**
     * 可灌注物品
     */
    ITEM_IMBUE = 2251799813685248,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DAMAGE_TYPES = DamageTypes;

declare enum DamageTypes {
    /**
     * 无伤害
     */ NONE = 0,
    /**
     * 物理
     */
    PHYSICAL = 1,
    /**
     * 魔法
     */
    MAGICAL = 2,
    /**
     * 纯粹
     */
    PURE = 4,
    /**
     * 生命流失
     */
    HP_REMOVAL = 8,
    /**
     * 自定义技能伤害
     */
    ABILITY_DEFINED = 16,
    /**
     * 全类型
     */
    ALL = 7,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type ABILITY_TYPES = AbilityTypes;

declare enum AbilityTypes {
    /**
     * 基础技能
     */ BASIC = 0,
    /**
     * 终极技能
     */
    ULTIMATE = 1,
    /**
     * 天赋技能
     */
    ATTRIBUTES = 2,
    /**
     * 隐藏技能
     */
    HIDDEN = 3,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type SPELL_IMMUNITY_TYPES = SpellImmunityTypes;

declare enum SpellImmunityTypes {
    NONE = 0,
    ALLIES_YES = 1,
    ALLIES_NO = 2,
    ENEMIES_YES = 3,
    ENEMIES_NO = 4,
    ALLIES_YES_ENEMIES_NO = 5,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTADamageFlag_t = DamageFlag;

declare enum DamageFlag {
    /**
     * 空白占位
     */ NONE = 0,
    /**
     * 忽略魔法抗性
     */
    IGNORES_MAGIC_ARMOR = 1,
    /**
     * 忽略护甲
     */
    IGNORES_PHYSICAL_ARMOR = 2,
    /**
     * 忽略无敌
     */
    BYPASSES_INVULNERABILITY = 4,
    /**
     * 忽略物理伤害格挡
     */
    BYPASSES_PHYSICAL_BLOCK = 8,
    /**
     * 反弹
     */
    REFLECTION = 16,
    /**
     * 生命移除
     */
    HPLOSS = 32,
    /**
     * 跳过导演系统结算
     */
    NO_DIRECTOR_EVENT = 64,
    /**
     * 不致死
     */
    NON_LETHAL = 128,
    /**
     * 无视伤害调整
     */
    NO_DAMAGE_MULTIPLIERS = 512,
    /**
     * 无视技能增强
     */
    NO_SPELL_AMPLIFICATION = 1024,
    /**
     * 伤害来源隐身时无伤害提示
     */
    DONT_DISPLAY_DAMAGE_IF_SOURCE_HIDDEN = 2048,
    /**
     * 无视技能吸血
     */
    NO_SPELL_LIFESTEAL = 4096,
    /**
     * 火焰伤害
     */
    PROPERTY_FIRE = 8192,
    /**
     * 忽略基础护甲
     */
    IGNORES_BASE_PHYSICAL_ARMOR = 16384,
    /**
     * 次级攻击弹道
     */
    SECONDARY_PROJECTILE_ATTACK = 32768,
    /**
     * 强制技能增强
     */
    FORCE_SPELL_AMPLIFICATION = 65536,
    /**
     * 魔法自动攻击行为
     */
    MAGIC_AUTO_ATTACK = 131072,
    /**
     * 攻击特效
     */
    ATTACK_MODIFIER = 262144,
    /**
     * 忽略所有伤害格挡
     */
    BYPASSES_ALL_BLOCK = 524288,
    /**
     * 强制无法反弹
     */
    NO_REFLECTION = 1048576,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type EDOTA_ModifyXP_Reason = ModifyXpReason;

declare enum ModifyXpReason {
    /**
     * 未指定原因影响经验
     */ UNSPECIFIED = 0,
    /**
     * 击杀敌方英雄获得的经验
     */
    HERO_KILL = 1,
    /**
     * 击杀小兵获得的经验
     */
    CREEP_KILL = 2,
    /**
     * 击杀肉山获得的经验
     */
    ROSHAN_KILL = 3,
    /**
     * 使用知识之书获得的经验
     */
    TOME_OF_KNOWLEDGE = 4,
    /**
     * 控制前哨获得的经验
     */
    OUTPOST = 5,
    /**
     * 落后补偿机制提供的额外经验
     */
    CATCH_UP = 6,
    /**
     * 通过英雄技能获得的经验
     */
    HERO_ABILITY = 7,
    /**
     * 上限占位
     */
    MAX = 8,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type GameActivity_t = GameActivity;

declare enum GameActivity {
    /**
     * DOTA空闲动作
     */ DOTA_IDLE = 1500,
    /**
     * DOTA稀有空闲动作
     */
    DOTA_IDLE_RARE = 1501,
    /**
     * DOTA跑步动作
     */
    DOTA_RUN = 1502,
    /**
     * DOTA攻击动作
     */
    DOTA_ATTACK = 1503,
    /**
     * DOTA次级攻击动作
     */
    DOTA_ATTACK_2 = 1504,
    /**
     * DOTA攻击事件动作
     */
    DOTA_ATTACK_EVENT = 1505,
    /**
     * DOTA死亡动作
     */
    DOTA_DIE = 1506,
    /**
     * DOTA震动动作
     */
    DOTA_FLINCH = 1507,
    /**
     * DOTA挥舞动作
     */
    DOTA_FLAIL = 1508,
    /**
     * DOTA受控动作
     */
    DOTA_DISABLED = 1509,
    /**
     * DOTA施法1动作
     */
    DOTA_CAST_ABILITY_1 = 1510,
    /**
     * DOTA施法2动作
     */
    DOTA_CAST_ABILITY_2 = 1511,
    /**
     * DOTA施法3动作
     */
    DOTA_CAST_ABILITY_3 = 1512,
    /**
     * DOTA施法4动作
     */
    DOTA_CAST_ABILITY_4 = 1513,
    /**
     * DOTA施法5动作
     */
    DOTA_CAST_ABILITY_5 = 1514,
    /**
     * DOTA施法6动作
     */
    DOTA_CAST_ABILITY_6 = 1515,
    /**
     * DOTA覆盖施法1动作
     */
    DOTA_OVERRIDE_ABILITY_1 = 1516,
    /**
     * DOTA覆盖施法2动作
     */
    DOTA_OVERRIDE_ABILITY_2 = 1517,
    /**
     * DOTA覆盖施法3动作
     */
    DOTA_OVERRIDE_ABILITY_3 = 1518,
    /**
     * DOTA覆盖施法4动作
     */
    DOTA_OVERRIDE_ABILITY_4 = 1519,
    /**
     * DOTA持续施法1动作
     */
    DOTA_CHANNEL_ABILITY_1 = 1520,
    /**
     * DOTA持续施法2动作
     */
    DOTA_CHANNEL_ABILITY_2 = 1521,
    /**
     * DOTA持续施法3动作
     */
    DOTA_CHANNEL_ABILITY_3 = 1522,
    /**
     * DOTA持续施法4动作
     */
    DOTA_CHANNEL_ABILITY_4 = 1523,
    /**
     * DOTA持续施法5动作
     */
    DOTA_CHANNEL_ABILITY_5 = 1524,
    /**
     * DOTA持续施法6动作
     */
    DOTA_CHANNEL_ABILITY_6 = 1525,
    /**
     * DOTA结束持续施法1动作
     */
    DOTA_CHANNEL_END_ABILITY_1 = 1526,
    /**
     * DOTA结束持续施法2动作
     */
    DOTA_CHANNEL_END_ABILITY_2 = 1527,
    /**
     * DOTA结束持续施法3动作
     */
    DOTA_CHANNEL_END_ABILITY_3 = 1528,
    /**
     * DOTA结束持续施法4动作
     */
    DOTA_CHANNEL_END_ABILITY_4 = 1529,
    /**
     * DOTA结束持续施法5动作
     */
    DOTA_CHANNEL_END_ABILITY_5 = 1530,
    /**
     * DOTA结束持续施法6动作
     */
    DOTA_CHANNEL_END_ABILITY_6 = 1531,
    /**
     * DOTA常驻层动作
     */
    DOTA_CONSTANT_LAYER = 1532,
    /**
     * DOTA前哨占领动作
     */
    DOTA_CAPTURE = 1533,
    /**
     * DOTA复活动作
     */
    DOTA_SPAWN = 1534,
    /**
     * DOTA击杀嘲讽动作
     */
    DOTA_KILLTAUNT = 1535,
    /**
     * DOTA嘲讽动作
     */
    DOTA_TAUNT = 1536,
    /**
     * 血魔焦渴动作
     */
    DOTA_THIRST = 1537,
    /**
     * 龙骑士火焰气息施法动作
     */
    DOTA_CAST_DRAGONBREATH = 1538,
    /**
     * 撼地者回音击动作
     */
    DOTA_ECHO_SLAM = 1539,
    /**
     * DOTA施法1结束动作
     */
    DOTA_CAST_ABILITY_1_END = 1540,
    /**
     * DOTA施法2结束动作
     */
    DOTA_CAST_ABILITY_2_END = 1541,
    /**
     * DOTA施法3结束动作
     */
    DOTA_CAST_ABILITY_3_END = 1542,
    /**
     * DOTA施法4结束动作
     */
    DOTA_CAST_ABILITY_4_END = 1543,
    /**
     * 米拉娜跃击结束动作
     */
    MIRANA_LEAP_END = 1544,
    /**
     * 波浪形态开始动作
     */
    WAVEFORM_START = 1545,
    /**
     * 波浪形态结束动作
     */
    WAVEFORM_END = 1546,
    /**
     * DOTA施法旋转动作
     */
    DOTA_CAST_ABILITY_ROT = 1547,
    /**
     * DOTA特殊死亡动作
     */
    DOTA_DIE_SPECIAL = 1548,
    /**
     * 发条技师弹幕冲击动作
     */
    DOTA_RATTLETRAP_BATTERYASSAULT = 1549,
    /**
     * 发条技师能量齿轮动作
     */
    DOTA_RATTLETRAP_POWERCOGS = 1550,
    /**
     * 发条技师发射钩爪开始动作
     */
    DOTA_RATTLETRAP_HOOKSHOT_START = 1551,
    /**
     * 发条技师发射钩爪循环动作
     */
    DOTA_RATTLETRAP_HOOKSHOT_LOOP = 1552,
    /**
     * 发条技师发射钩爪结束动作
     */
    DOTA_RATTLETRAP_HOOKSHOT_END = 1553,
    /**
     * 风暴之灵超负荷奔跑动作
     */
    STORM_SPIRIT_OVERLOAD_RUN_OVERRIDE = 1554,
    /**
     * 修补匠再装填动作1
     */
    DOTA_TINKER_REARM_1 = 1555,
    /**
     * 修补匠再装填动作2
     */
    DOTA_TINKER_REARM_2 = 1556,
    /**
     * 修补匠再装填动作3
     */
    DOTA_TINKER_REARM_3 = 1557,
    /**
     * 小小雪崩动作
     */
    TINY_AVALANCHE = 1558,
    /**
     * 小小投掷动作
     */
    TINY_TOSS = 1559,
    /**
     * 小小长大动作
     */
    TINY_GROWL = 1560,
    /**
     * 编制者虫群附着动作
     */
    DOTA_WEAVERBUG_ATTACH = 1561,
    /**
     * 兽王野性飞斧结束动作
     */
    DOTA_CAST_WILD_AXES_END = 1562,
    /**
     * 哈斯卡牺牲施法开始动作
     */
    DOTA_CAST_LIFE_BREAK_START = 1563,
    /**
     * 哈斯卡牺牲施法结束动作
     */
    DOTA_CAST_LIFE_BREAK_END = 1564,
    /**
     * 暗夜魔王夜晚变身动作
     */
    DOTA_NIGHTSTALKER_TRANSITION = 1565,
    /**
     * 噬魂鬼狂暴动作
     */
    DOTA_LIFESTEALER_RAGE = 1566,
    /**
     * 噬魂鬼撕裂伤口动作
     */
    DOTA_LIFESTEALER_OPEN_WOUNDS = 1567,
    /**
     * 沙王钻地动作
     */
    DOTA_SAND_KING_BURROW_IN = 1568,
    /**
     * 沙王钻出动作
     */
    DOTA_SAND_KING_BURROW_OUT = 1569,
    /**
     * 撼地者强化图腾攻击动作
     */
    DOTA_EARTHSHAKER_TOTEM_ATTACK = 1570,
    /**
     * DOTA轮子图层动作
     */
    DOTA_WHEEL_LAYER = 1571,
    /**
     * 炼金术士化学狂暴开始动作
     */
    DOTA_ALCHEMIST_CHEMICAL_RAGE_START = 1572,
    /**
     * 炼金术士不稳定化合物动作
     */
    DOTA_ALCHEMIST_CONCOCTION = 1573,
    /**
     * 杰奇洛液态火开始动作
     */
    DOTA_JAKIRO_LIQUIDFIRE_START = 1574,
    /**
     * 杰奇洛液态火循环动作
     */
    DOTA_JAKIRO_LIQUIDFIRE_LOOP = 1575,
    /**
     * 噬魂鬼感染动作
     */
    DOTA_LIFESTEALER_INFEST = 1576,
    /**
     * 噬魂鬼感染结束动作
     */
    DOTA_LIFESTEALER_INFEST_END = 1577,
    /**
     * 蝙蝠骑士燃烧枷锁持续牵引动作
     */
    DOTA_LASSO_LOOP = 1578,
    /**
     * 炼金术士不稳定化合物投掷
     */
    DOTA_ALCHEMIST_CONCOCTION_THROW = 1579,
    /**
     * 炼金术士化学狂暴结束动作
     */
    DOTA_ALCHEMIST_CHEMICAL_RAGE_END = 1580,
    /**
     * 祈求者急速冷却施法动作
     */
    DOTA_CAST_COLD_SNAP = 1581,
    /**
     * 祈求者幽影漫步施法动作
     */
    DOTA_CAST_GHOST_WALK = 1582,
    /**
     * 祈求者强袭飓风施法动作
     */
    DOTA_CAST_TORNADO = 1583,
    /**
     * 祈求者电磁脉冲施法动作
     */
    DOTA_CAST_EMP = 1584,
    /**
     * 祈求者灵动迅捷施法动作
     */
    DOTA_CAST_ALACRITY = 1585,
    /**
     * 祈求者混沌陨石施法动作
     */
    DOTA_CAST_CHAOS_METEOR = 1586,
    /**
     * 祈求者阳炎冲击施法动作
     */
    DOTA_CAST_SUN_STRIKE = 1587,
    /**
     * 祈求者熔炉精灵施法动作
     */
    DOTA_CAST_FORGE_SPIRIT = 1588,
    /**
     * 祈求者寒冰之墙施法动作
     */
    DOTA_CAST_ICE_WALL = 1589,
    /**
     * 祈求者超震声波施法动作
     */
    DOTA_CAST_DEAFENING_BLAST = 1590,
    /**
     * DOTA胜利动作
     */
    DOTA_VICTORY = 1591,
    /**
     * DOTA失败动作
     */
    DOTA_DEFEAT = 1592,
    /**
     * 裂魂人暗影冲刺动作
     */
    DOTA_SPIRIT_BREAKER_CHARGE_POSE = 1593,
    /**
     * 裂魂人暗影冲刺撞击结束动作
     */
    DOTA_SPIRIT_BREAKER_CHARGE_END = 1594,
    /**
     * DOTA开始传送动作
     */
    DOTA_TELEPORT = 1595,
    /**
     * DOTA传送完成动作
     */
    DOTA_TELEPORT_END = 1596,
    /**
     * 圣堂刺客折光施法动作
     */
    DOTA_CAST_REFRACTION = 1597,
    /**
     * DOTA施法7动作
     */
    DOTA_CAST_ABILITY_7 = 1598,
    /**
     * 娜迦海妖取消海妖之歌施法动作
     */
    DOTA_CANCEL_SIREN_SONG = 1599,
    /**
     * DOTA持续施法7动作
     */
    DOTA_CHANNEL_ABILITY_7 = 1600,
    /**
     * DOTA出装界面动作
     */
    DOTA_LOADOUT = 1601,
    /**
     * 原力法杖结束动作
     */
    DOTA_FORCESTAFF_END = 1602,
    /**
     * 米波忽悠结束动作
     */
    DOTA_POOF_END = 1603,
    /**
     * 斯拉克突袭动作
     */
    DOTA_SLARK_POUNCE = 1604,
    /**
     * 马格纳斯巨角冲撞开始动作
     */
    DOTA_MAGNUS_SKEWER_START = 1605,
    /**
     * 马格纳斯巨角冲撞结束动作
     */
    DOTA_MAGNUS_SKEWER_END = 1606,
    /**
     * 美杜莎石化凝视施法动作
     */
    DOTA_MEDUSA_STONE_GAZE = 1607,
    /**
     * DOTA开始放松动作
     */
    DOTA_RELAX_START = 1608,
    /**
     * DOTA放松状态循环动作
     */
    DOTA_RELAX_LOOP = 1609,
    /**
     * DOTA结束放松动作
     */
    DOTA_RELAX_END = 1610,
    /**
     * 半人马战行者奔袭冲撞动作
     */
    DOTA_CENTAUR_STAMPEDE = 1611,
    /**
     * DOTA开始肚子痛动作
     */
    DOTA_BELLYACHE_START = 1612,
    /**
     * DOTA肚子痛循环动作
     */
    DOTA_BELLYACHE_LOOP = 1613,
    /**
     * DOTA结束肚子痛动作
     */
    DOTA_BELLYACHE_END = 1614,
    /**
     * DOTA英雄跳落至地面
     */
    DOTA_ROQUELAIRE_LAND = 1615,
    /**
     * DOTA落地后的站立状态
     */
    DOTA_ROQUELAIRE_LAND_IDLE = 1616,
    /**
     * 小贪魔施法动作
     */
    DOTA_GREEVIL_CAST = 1617,
    /**
     * 小贪魔技能替换动作
     */
    DOTA_GREEVIL_OVERRIDE_ABILITY = 1618,
    /**
     * 小贪魔勾爪开始动作
     */
    DOTA_GREEVIL_HOOK_START = 1619,
    /**
     * 小贪魔勾爪结束动作
     */
    DOTA_GREEVIL_HOOK_END = 1620,
    /**
     * 小贪魔闪烁动作
     */
    DOTA_GREEVIL_BLINK_BONE = 1621,
    /**
     * DOTA睡眠状态下的待机动作
     */
    DOTA_IDLE_SLEEPING = 1622,
    /**
     * DOTA英雄登场动作
     */
    DOTA_INTRO = 1623,
    /**
     * DOTA指向动作
     */
    DOTA_GESTURE_POINT = 1624,
    /**
     * DOTA强调动作
     */
    DOTA_GESTURE_ACCENT = 1625,
    /**
     * DOTA从睡眠状态中醒来动作
     */
    DOTA_SLEEPING_END = 1626,
    /**
     * DOTA埋伏动作
     */
    DOTA_AMBUSH = 1627,
    /**
     * DOTA观察物品动作
     */
    DOTA_ITEM_LOOK = 1628,
    /**
     * DOTA惊吓反应动作
     */
    DOTA_STARTLE = 1629,
    /**
     * DOTA挫败感动作
     */
    DOTA_FRUSTRATION = 1630,
    /**
     * DOTA对传送的反应动作
     */
    DOTA_TELEPORT_REACT = 1631,
    /**
     * DOTA到达后反应动作
     */
    DOTA_TELEPORT_END_REACT = 1632,
    /**
     * DOTA耸肩动作
     */
    DOTA_SHRUG = 1633,
    /**
     * DOTA结束放松循环动作
     */
    DOTA_RELAX_LOOP_END = 1634,
    /**
     * DOTA展示物品动作
     */
    DOTA_PRESENT_ITEM = 1635,
    /**
     * DOTA不耐烦的待机动作
     */
    DOTA_IDLE_IMPATIENT = 1636,
    /**
     * DOTA打磨武器动作
     */
    DOTA_SHARPEN_WEAPON = 1637,
    /**
     * DOTA结束打磨动作
     */
    DOTA_SHARPEN_WEAPON_OUT = 1638,
    /**
     * DOTA睡觉待机结束动作
     */
    DOTA_IDLE_SLEEPING_END = 1639,
    /**
     * DOTA摧毁桥梁动作
     */
    DOTA_BRIDGE_DESTROY = 1640,
    /**
     * 狙击手嘲讽动作
     */
    DOTA_TAUNT_SNIPER = 1641,
    /**
     * 被狙击手击杀死亡动作
     */
    DOTA_DEATH_BY_SNIPER = 1642,
    /**
     * DOTA环视动作
     */
    DOTA_LOOK_AROUND = 1643,
    /**
     * DOTA被困小兵愤怒动作
     */
    DOTA_CAGED_CREEP_RAGE = 1644,
    /**
     * DOTA愤怒结束动作
     */
    DOTA_CAGED_CREEP_RAGE_OUT = 1645,
    /**
     * DOTA被困小兵猛击动作
     */
    DOTA_CAGED_CREEP_SMASH = 1646,
    /**
     * DOTA猛击结束动作
     */
    DOTA_CAGED_CREEP_SMASH_OUT = 1647,
    /**
     * DOTA用剑敲地的不耐烦动作
     */
    DOTA_IDLE_IMPATIENT_SWORD_TAP = 1648,
    /**
     * DOTA登场动画循环动作
     */
    DOTA_INTRO_LOOP = 1649,
    /**
     * DOTA桥上威胁动作
     */
    DOTA_BRIDGE_THREAT = 1650,
    /**
     * 达贡之神力动作
     */
    DOTA_DAGON = 1651,
    /**
     * 大地之灵巨石翻滚开始动作
     */
    DOTA_CAST_ABILITY_2_ES_ROLL_START = 1652,
    /**
     * 大地之灵巨石翻滚滚动中动作
     */
    DOTA_CAST_ABILITY_2_ES_ROLL = 1653,
    /**
     * 大地之灵巨石翻滚滚动结束动作
     */
    DOTA_CAST_ABILITY_2_ES_ROLL_END = 1654,
    /**
     * 年兽钉住开始动作
     */
    DOTA_NIAN_PIN_START = 1655,
    /**
     * 年兽钉住循环动作
     */
    DOTA_NIAN_PIN_LOOP = 1656,
    /**
     * 年兽钉住结束动作
     */
    DOTA_NIAN_PIN_END = 1657,
    /**
     * DOTA跳跃并眩晕动作
     */
    DOTA_LEAP_STUN = 1658,
    /**
     * DOTA跃击后的横扫动作
     */
    DOTA_LEAP_SWIPE = 1659,
    /**
     * 年兽登场跳跃动作
     */
    DOTA_NIAN_INTRO_LEAP = 1660,
    /**
     * DOTA驱逐敌方的动作
     */
    DOTA_AREA_DENY = 1661,
    /**
     * 年兽钉住过渡到眩晕动作
     */
    DOTA_NIAN_PIN_TO_STUN = 1662,
    /**
     * DOTA暗影烈焰1号动作
     */
    DOTA_RAZE_1 = 1663,
    /**
     * DOTA暗影烈焰2号动作
     */
    DOTA_RAZE_2 = 1664,
    /**
     * DOTA暗影烈焰3号动作
     */
    DOTA_RAZE_3 = 1665,
    /**
     * 不朽尸王腐朽动作
     */
    DOTA_UNDYING_DECAY = 1666,
    /**
     * 不朽尸王噬魂动作
     */
    DOTA_UNDYING_SOUL_RIP = 1667,
    /**
     * 不朽尸王墓碑动作
     */
    DOTA_UNDYING_TOMBSTONE = 1668,
    /**
     * 巨魔战将旋风飞斧（远程）动作
     */
    DOTA_WHIRLING_AXES_RANGED = 1669,
    /**
     * 戴泽薄葬动作
     */
    DOTA_SHALLOW_GRAVE = 1670,
    /**
     * 远古冰魄寒霜之足动作
     */
    DOTA_COLD_FEET = 1671,
    /**
     * 远古冰魄冰封漩涡动作
     */
    DOTA_ICE_VORTEX = 1672,
    /**
     * 远古冰魄极寒之触动作
     */
    DOTA_CHILLING_TOUCH = 1673,
    /**
     * 祸乱之源虚弱动作
     */
    DOTA_ENFEEBLE = 1674,
    /**
     * 术士致命连接动作
     */
    DOTA_FATAL_BONDS = 1675,
    /**
     * 谜团午夜凋零动作
     */
    DOTA_MIDNIGHT_PULSE = 1676,
    /**
     * 上古巨神灵体游魂动作
     */
    DOTA_ANCESTRAL_SPIRIT = 1677,
    /**
     * 干扰者风雷之击动作
     */
    DOTA_THUNDER_STRIKE = 1678,
    /**
     * 干扰者动能力场动作
     */
    DOTA_KINETIC_FIELD = 1679,
    /**
     * 干扰者静态风暴动作
     */
    DOTA_STATIC_STORM = 1680,
    /**
     * DOTA简短嘲讽动作
     */
    DOTA_MINI_TAUNT = 1681,
    /**
     * 寒冬飞龙严寒烧灼结束动作
     */
    DOTA_ARCTIC_BURN_END = 1682,
    /**
     * DOTA稀有出装界面动作
     */
    DOTA_LOADOUT_RARE = 1683,
    /**
     * DOTA游泳动作
     */
    DOTA_SWIM = 1684,
    /**
     * DOTA逃跑动作
     */
    DOTA_FLEE = 1685,
    /**
     * DOTA小跑动作
     */
    DOTA_TROT = 1686,
    /**
     * DOTA摇晃动作
     */
    DOTA_SHAKE = 1687,
    /**
     * DOTA游泳状态待机动作
     */
    DOTA_SWIM_IDLE = 1688,
    /**
     * DOTA等待状态下待机动作
     */
    DOTA_WAIT_IDLE = 1689,
    /**
     * DOTA打招呼动作
     */
    DOTA_GREET = 1690,
    /**
     * DOTA协作传送的开始动作
     */
    DOTA_TELEPORT_COOP_START = 1691,
    /**
     * DOTA协作传送时的等待动作
     */
    DOTA_TELEPORT_COOP_WAIT = 1692,
    /**
     * DOTA协作传送的结束动作
     */
    DOTA_TELEPORT_COOP_END = 1693,
    /**
     * DOTA协作传送后的退出动作
     */
    DOTA_TELEPORT_COOP_EXIT = 1694,
    /**
     * DOTA宠物与商店老板互动动作
     */
    DOTA_SHOPKEEPER_PET_INTERACT = 1695,
    /**
     * DOTA拾取物品动作
     */
    DOTA_ITEM_PICKUP = 1696,
    /**
     * DOTA丢弃物品动作
     */
    DOTA_ITEM_DROP = 1697,
    /**
     * DOTA捕捉宠物动作
     */
    DOTA_CAPTURE_PET = 1698,
    /**
     * DOTA宠物放置侦查守卫动作
     */
    DOTA_PET_WARD_OBSERVER = 1699,
    /**
     * DOTA宠物放置岗哨守卫动作
     */
    DOTA_PET_WARD_SENTRY = 1700,
    /**
     * DOTA宠物升级动作
     */
    DOTA_PET_LEVEL = 1701,
    /**
     * 司夜刺客钻地结束动作
     */
    DOTA_CAST_BURROW_END = 1702,
    /**
     * 噬魂鬼吸收动作
     */
    DOTA_LIFESTEALER_ASSIMILATE = 1703,
    /**
     * 噬魂喷吐动作
     */
    DOTA_LIFESTEALER_EJECT = 1704,
    /**
     * DOTA攻击重击动作
     */
    DOTA_ATTACK_EVENT_BASH = 1705,
    /**
     * DOTA捕获稀有事件
     */
    DOTA_CAPTURE_RARE = 1706,
    /**
     * 天穹守望者磁场动作
     */
    DOTA_AW_MAGNETIC_FIELD = 1707,
    /**
     * 昆卡幽灵船施法动作
     */
    DOTA_CAST_GHOST_SHIP = 1708,
    /**
     * DOTA播放特效动画动作
     */
    DOTA_FXANIM = 1709,
    /**
     * DOTA胜利开始动作
     */
    DOTA_VICTORY_START = 1710,
    /**
     * DOTA失败开始动作
     */
    DOTA_DEFEAT_START = 1711,
    /**
     * 死亡先知吸魂巫术动作
     */
    DOTA_DP_SPIRIT_SIPHON = 1712,
    /**
     * DOTA技巧或挑衅结束动作
     */
    DOTA_TRICKS_END = 1713,
    /**
     * 大地之灵残岩召唤动作
     */
    DOTA_ES_STONE_CALLER = 1714,
    /**
     * 齐天大圣棒击大地动作
     */
    DOTA_MK_STRIKE = 1715,
    /**
     * DOTA对战展示动作
     */
    DOTA_VERSUS = 1716,
    /**
     * DOTA捕获事件卡片动作
     */
    DOTA_CAPTURE_CARD = 1717,
    /**
     * 齐天大圣丛林之舞飞跃中动作
     */
    DOTA_MK_SPRING_SOAR = 1718,
    /**
     * 齐天大圣丛林之舞跳跃结束动作
     */
    DOTA_MK_SPRING_END = 1719,
    /**
     * 齐天大圣从树上跃下动作
     */
    DOTA_MK_TREE_SOAR = 1720,
    /**
     * 齐天大圣跳下落地动作
     */
    DOTA_MK_TREE_END = 1721,
    /**
     * 齐天大圣猴子猴孙动作
     */
    DOTA_MK_FUR_ARMY = 1722,
    /**
     * 齐天大圣丛林之舞施法动作
     */
    DOTA_MK_SPRING_CAST = 1723,
    /**
     * 瘟疫法师幽魂护罩动作
     */
    DOTA_NECRO_GHOST_SHROUD = 1724,
    /**
     * DOTA至宝覆盖动作
     */
    DOTA_OVERRIDE_ARCANA = 1725,
    /**
     * DOTA滑行开始动作
     */
    DOTA_SLIDE = 1726,
    /**
     * DOTA持续滑行动作
     */
    DOTA_SLIDE_LOOP = 1727,
    /**
     * DOTA通用持续施法动作1
     */
    DOTA_GENERIC_CHANNEL_1 = 1728,
    /**
     * 天涯墨客缚魂动作
     */
    DOTA_GS_SOUL_CHAIN = 1729,
    /**
     * 天涯墨客戾影动作
     */
    DOTA_GS_INK_CREATURE = 1730,
    /**
     * DOTA状态过渡动作
     */
    DOTA_TRANSITION = 1731,
    /**
     * 闪烁匕首动作
     */
    DOTA_BLINK_DAGGER = 1732,
    /**
     * 闪烁匕首结束动作
     */
    DOTA_BLINK_DAGGER_END = 1733,
    /**
     * 自定义防御塔攻击动作
     */
    DOTA_CUSTOM_TOWER_ATTACK = 1734,
    /**
     * 自定义防御塔待机动作
     */
    DOTA_CUSTOM_TOWER_IDLE = 1735,
    /**
     * 自定义防御塔死亡动作
     */
    DOTA_CUSTOM_TOWER_DIE = 1736,
    /**
     * 祈求者急速冷却元素球动作
     */
    DOTA_CAST_COLD_SNAP_ORB = 1737,
    /**
     * 祈求者幽灵漫步元素球动作
     */
    DOTA_CAST_GHOST_WALK_ORB = 1738,
    /**
     * 祈求者强袭飓风元素球动作
     */
    DOTA_CAST_TORNADO_ORB = 1739,
    /**
     * 祈求者电磁脉冲元素球动作
     */
    DOTA_CAST_EMP_ORB = 1740,
    /**
     * 祈求者灵动迅捷元素球动作
     */
    DOTA_CAST_ALACRITY_ORB = 1741,
    /**
     * 祈求者混沌陨石元素球动作
     */
    DOTA_CAST_CHAOS_METEOR_ORB = 1742,
    /**
     * 祈求者阳炎冲击元素球动作
     */
    DOTA_CAST_SUN_STRIKE_ORB = 1743,
    /**
     * 祈求者熔炉精灵元素球动作
     */
    DOTA_CAST_FORGE_SPIRIT_ORB = 1744,
    /**
     * 祈求者寒冰之墙元素球动作
     */
    DOTA_CAST_ICE_WALL_ORB = 1745,
    /**
     * 祈求者超震声波元素球动作
     */
    DOTA_CAST_DEAFENING_BLAST_ORB = 1746,
    /**
     * DOTA提示通知动作
     */
    DOTA_NOTICE = 1747,
    /**
     * DOTA友方施法2动作
     */
    DOTA_CAST_ABILITY_2_ALLY = 1748,
    /**
     * DOTA左侧移动切换动作
     */
    DOTA_SHUFFLE_L = 1749,
    /**
     * DOTA右侧移动切换动作
     */
    DOTA_SHUFFLE_R = 1750,
    /**
     * DOTA替换默认出场装备展示动作
     */
    DOTA_OVERRIDE_LOADOUT = 1751,
    /**
     * DOTA特殊挑衅动作
     */
    DOTA_TAUNT_SPECIAL = 1752,
    /**
     * DOTA传送开始动作
     */
    DOTA_TELEPORT_START = 1753,
    /**
     * DOTA通用持续施法动作开始
     */
    DOTA_GENERIC_CHANNEL_1_START = 1754,
    /**
     * 自定义防御塔罕见待机动作
     */
    DOTA_CUSTOM_TOWER_IDLE_RARE = 1755,
    /**
     * 自定义防御塔挑衅动作
     */
    DOTA_CUSTOM_TOWER_TAUNT = 1756,
    /**
     * 自定义防御塔击掌动作
     */
    DOTA_CUSTOM_TOWER_HIGH_FIVE = 1757,
    /**
     * DOTA特殊攻击动作
     */
    DOTA_ATTACK_SPECIAL = 1758,
    /**
     * DOTA过渡至站立状态动作
     */
    DOTA_TRANSITION_IDLE = 1759,
    /**
     * 琼英碧灵越界动作
     */
    DOTA_PIERCE_THE_VEIL = 1760,
    /**
     * DOTA罕见奔跑动作
     */
    DOTA_RUN_RARE = 1761,
    /**
     * 冥界亚龙极恶俯冲动作
     */
    DOTA_VIPER_DIVE = 1762,
    /**
     * 冥界亚龙极恶俯冲结束动作
     */
    DOTA_VIPER_DIVE_END = 1763,
    /**
     * 齐天大圣棒击大地结束动作
     */
    DOTA_MK_STRIKE_END = 1764,
    /**
     * DOTA影遁技能动画
     */
    DOTA_SHADOW_VAULT = 1765,
    /**
     * 凯猛禽之舞开始动作
     */
    DOTA_KEZ_KATANA_ULT_START = 1766,
    /**
     * 凯制敌爪钩A动作
     */
    DOTA_KEZ_KATANA_ULT_CHAIN_A = 1767,
    /**
     * 凯制敌爪钩B动作
     */
    DOTA_KEZ_KATANA_ULT_CHAIN_B = 1768,
    /**
     * 凯猛禽之舞结束动作
     */
    DOTA_KEZ_KATANA_ULT_END = 1769,
    /**
     * 凯影舞长刀刺穿动作
     */
    DOTA_KEZ_KATANA_IMPALE = 1770,
    /**
     * 凯影舞长刀刺穿快速动作
     */
    DOTA_KEZ_KATANA_IMPALE_FAST = 1771,
    /**
     * 百戏大王独轮车动作
     */
    DOTA_UNICYCLE = 1772,
    /**
     * 百戏大王独轮车结束动作
     */
    DOTA_UNICYCLE_END = 1773,
    /**
     * 朗戈终极技能成功动作
     */
    DOTA_LARGO_ULT_STRUM_SUCCESS = 1774,
    /**
     * 朗戈终极技能失败动作
     */
    DOTA_LARGO_ULT_STRUM_FAIL = 1775,
    /**
     * DOTA MVP界面动作
     */
    DOTA_MVP_SCREEN = 1776,
    /**
     * 朗戈终极技能切换开启动作
     */
    DOTA_LARGO_ULT_TOGGLE_ON = 1777,
    /**
     * 朗戈终极技能切换关闭动作
     */
    DOTA_LARGO_ULT_TOGGLE_OFF = 1778,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAMinimapEvent_t = MinimapEventType;

declare enum MinimapEventType {
    /**
     * 遗迹受攻击时
     */ ANCIENT_UNDER_ATTACK = 2,
    /**
     * 基础建筑受攻击时
     */
    BASE_UNDER_ATTACK = 4,
    /**
     * 启动防御符文时
     */
    BASE_GLYPHED = 8,
    /**
     * 队友被攻击时
     */
    TEAMMATE_UNDER_ATTACK = 16,
    /**
     * 队友传送时
     */
    TEAMMATE_TELEPORTING = 32,
    /**
     * 队友死亡时
     */
    TEAMMATE_DIED = 64,
    /**
     * 教学任务激活时
     */
    TUTORIAL_TASK_ACTIVE = 128,
    /**
     * 教学任务完成时
     */
    TUTORIAL_TASK_FINISHED = 256,
    /**
     * 提示位置时
     */
    HINT_LOCATION = 512,
    /**
     * 敌方传送时
     */
    ENEMY_TELEPORTING = 1024,
    /**
     * 取消传送时
     */
    CANCEL_TELEPORTING = 2048,
    /**
     * 启动雷达时
     */
    RADAR = 4096,
    /**
     * 被雷达检测时
     */
    RADAR_TARGET = 8192,
    /**
     * 移动至目标时
     */
    MOVE_TO_TARGET = 16384,
}

/**
 * 玩家装饰项初始饰品
 */
declare const DOTA_PLAYER_LOADOUT_START: 70;

/**
 * 玩家最终装饰项饰品
 */
declare const DOTA_PLAYER_LOADOUT_END: 101;

/**
 * 计数占位
 */
declare const DOTA_LOADOUT_TYPE_COUNT: 103;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTASlotType_t = LoadoutType;

declare enum LoadoutType {
    /**
     * 无效占位
     */ TYPE_INVALID = -1,
    /**
     * 主武器饰品
     */
    TYPE_WEAPON = 0,
    /**
     * 副武器饰品
     */
    TYPE_OFFHAND_WEAPON = 1,
    /**
     * 主武器饰品2
     */
    TYPE_WEAPON_2 = 2,
    /**
     * 副武器饰品2
     */
    TYPE_OFFHAND_WEAPON_2 = 3,
    /**
     * 头部饰品
     */
    TYPE_HEAD = 4,
    /**
     * 肩部饰品
     */
    TYPE_SHOULDER = 5,
    /**
     * 手臂饰品
     */
    TYPE_ARMS = 6,
    /**
     * 护甲饰品
     */
    TYPE_ARMOR = 7,
    /**
     * 腰带饰品
     */
    TYPE_BELT = 8,
    /**
     * 颈部饰品
     */
    TYPE_NECK = 9,
    /**
     * 背部饰品
     */
    TYPE_BACK = 10,
    /**
     * 手套饰品
     */
    TYPE_GLOVES = 11,
    /**
     * 腿部饰品
     */
    TYPE_LEGS = 12,
    /**
     * 尾部饰品
     */
    TYPE_TAIL = 13,
    /**
     * 杂项饰品
     */
    TYPE_MISC = 14,
    /**
     * 饰品套装
     */
    TYPE_COSTUME = 15,
    /**
     * 英雄基础模型饰品
     */
    TYPE_HERO_BASE = 16,
    /**
     * 头身饰品
     */
    TYPE_BODY_HEAD = 17,
    /**
     * 坐骑饰品
     */
    TYPE_MOUNT = 18,
    /**
     * 召唤单位饰品
     */
    TYPE_SUMMON = 19,
    /**
     * 变身形态饰品
     */
    TYPE_SHAPESHIFT = 20,
    /**
     * 嘲讽动作饰品
     */
    TYPE_TAUNT = 21,
    /**
     * 英雄雕像饰品
     */
    TYPE_HERO_EFFIGY = 22,
    /**
     * 环境特效饰品
     */
    TYPE_AMBIENT_EFFECTS = 23,
    /**
     * 普攻特效饰品
     */
    TYPE_ABILITY_ATTACK = 24,
    /**
     * 技能1饰品
     */
    TYPE_ABILITY_1 = 25,
    /**
     * 技能2饰品
     */
    TYPE_ABILITY_2 = 26,
    /**
     * 技能3饰品
     */
    TYPE_ABILITY_3 = 27,
    /**
     * 技能4饰品
     */
    TYPE_ABILITY_4 = 28,
    /**
     * 终极技能饰品
     */
    TYPE_ABILITY_ULTIMATE = 29,
    /**
     * 技能1特效饰品
     */
    TYPE_ABILITY_EFFECTS_1 = 30,
    /**
     * 技能2特效饰品
     */
    TYPE_ABILITY_EFFECTS_2 = 31,
    /**
     * 技能3特效饰品
     */
    TYPE_ABILITY_EFFECTS_3 = 32,
    /**
     * 技能4特效饰品
     */
    TYPE_ABILITY_EFFECTS_4 = 33,
    /**
     * 技能5特效饰品
     */
    TYPE_ABILITY_EFFECTS_5 = 34,
    /**
     * 技能6特效饰品
     */
    TYPE_ABILITY_EFFECTS_6 = 35,
    /**
     * 技能7特效饰品
     */
    TYPE_ABILITY_EFFECTS_7 = 36,
    /**
     * 技能8特效饰品
     */
    TYPE_ABILITY_EFFECTS_8 = 37,
    /**
     * 技能9特效饰品
     */
    TYPE_ABILITY_EFFECTS_9 = 38,
    /**
     * 语音包饰品
     */
    TYPE_VOICE = 39,
    /**
     * 个人视角主武器饰品
     */
    TYPE_WEAPON_PERSONA_1 = 40,
    /**
     * 个人视角副武器饰品
     */
    TYPE_OFFHAND_WEAPON_PERSONA_1 = 41,
    /**
     * 个人视角主武器饰品2
     */
    TYPE_WEAPON_2_PERSONA_1 = 42,
    /**
     * 个人视角副武器饰品2
     */
    TYPE_OFFHAND_WEAPON_2_PERSONA_1 = 43,
    /**
     * 个人视角头部饰品
     */
    TYPE_HEAD_PERSONA_1 = 44,
    /**
     * 个人视角肩部饰品
     */
    TYPE_SHOULDER_PERSONA_1 = 45,
    /**
     * 个人视角手臂饰品
     */
    TYPE_ARMS_PERSONA_1 = 46,
    /**
     * 个人视角护甲饰品
     */
    TYPE_ARMOR_PERSONA_1 = 47,
    /**
     * 个人视角腰带饰品
     */
    TYPE_BELT_PERSONA_1 = 48,
    /**
     * 个人视角颈部饰品
     */
    TYPE_NECK_PERSONA_1 = 49,
    /**
     * 个人视角背部饰品
     */
    TYPE_BACK_PERSONA_1 = 50,
    /**
     * 个人视角腿部饰品
     */
    TYPE_LEGS_PERSONA_1 = 51,
    /**
     * 个人视角手套饰品
     */
    TYPE_GLOVES_PERSONA_1 = 52,
    /**
     * 个人视角尾部饰品
     */
    TYPE_TAIL_PERSONA_1 = 53,
    /**
     * 个人视角杂项饰品
     */
    TYPE_MISC_PERSONA_1 = 54,
    /**
     * 个人视角头身饰品
     */
    TYPE_BODY_HEAD_PERSONA_1 = 55,
    /**
     * 个人视角坐骑饰品
     */
    TYPE_MOUNT_PERSONA_1 = 56,
    /**
     * 个人视角召唤单位饰品
     */
    TYPE_SUMMON_PERSONA_1 = 57,
    /**
     * 个人视角变身形态饰品
     */
    TYPE_SHAPESHIFT_PERSONA_1 = 58,
    /**
     * 个人视角嘲讽动作饰品
     */
    TYPE_TAUNT_PERSONA_1 = 59,
    /**
     * 个人视角英雄雕像饰品
     */
    TYPE_HERO_EFFIGY_PERSONA_1 = 60,
    /**
     * 个人视角环境特效饰品
     */
    TYPE_AMBIENT_EFFECTS_PERSONA_1 = 61,
    /**
     * 个人视角普攻特效饰品
     */
    TYPE_ABILITY_ATTACK_PERSONA_1 = 62,
    /**
     * 个人视角1技能饰品
     */
    TYPE_ABILITY_1_PERSONA_1 = 63,
    /**
     * 个人视角2技能饰品
     */
    TYPE_ABILITY_2_PERSONA_1 = 64,
    /**
     * 个人视角3技能饰品
     */
    TYPE_ABILITY_3_PERSONA_1 = 65,
    /**
     * 个人视角4技能饰品
     */
    TYPE_ABILITY_4_PERSONA_1 = 66,
    /**
     * 个人视角终极技能饰品
     */
    TYPE_ABILITY_ULTIMATE_PERSONA_1 = 67,
    /**
     * 个人视角语音包饰品
     */
    TYPE_VOICE_PERSONA_1 = 68,
    /**
     * 个人视角初始饰品
     */
    PERSONA_1_START = 40,
    /**
     * 个人视角最终饰品
     */
    PERSONA_1_END = 68,
    /**
     * 人设选择器装饰
     */
    TYPE_PERSONA_SELECTOR = 69,
    /**
     * 信使饰品
     */
    TYPE_COURIER = 70,
    /**
     * 解说语音饰品
     */
    TYPE_ANNOUNCER = 71,
    /**
     * 连杀语音饰品
     */
    TYPE_MEGA_KILLS = 72,
    /**
     * 音乐包饰品
     */
    TYPE_MUSIC = 73,
    /**
     * 守卫饰品
     */
    TYPE_WARD = 74,
    /**
     * 界面外观饰品
     */
    TYPE_HUD_SKIN = 75,
    /**
     * 加载画面饰品
     */
    TYPE_LOADING_SCREEN = 76,
    /**
     * 地图天气饰品
     */
    TYPE_WEATHER = 77,
    /**
     * 英雄雕像饰品
     */
    TYPE_HEROIC_STATUE = 78,
    /**
     * 连杀饰品
     */
    TYPE_MULTIKILL_BANNER = 79,
    /**
     * 鼠标样式饰品
     */
    TYPE_CURSOR_PACK = 80,
    /**
     * 传送特效饰品
     */
    TYPE_TELEPORT_EFFECT = 81,
    /**
     * 闪烁特效饰品
     */
    TYPE_BLINK_EFFECT = 82,
    /**
     * 玩家纹章饰品
     */
    TYPE_EMBLEM = 83,
    /**
     * 地图地形饰品
     */
    TYPE_TERRAIN = 84,
    /**
     * 天辉小兵饰品
     */
    TYPE_RADIANT_CREEPS = 85,
    /**
     * 夜魇小兵饰品
     */
    TYPE_DIRE_CREEPS = 86,
    /**
     * 天辉防御塔饰品
     */
    TYPE_RADIANT_TOWER = 87,
    /**
     * 夜魇防御塔饰品
     */
    TYPE_DIRE_TOWER = 88,
    /**
     * 对阵画面饰品
     */
    TYPE_VERSUS_SCREEN = 89,
    /**
     * 连杀特效饰品
     */
    TYPE_STREAK_EFFECT = 90,
    /**
     * 击杀特效饰品
     */
    TYPE_KILL_EFFECT = 91,
    /**
     * 死亡特效饰品
     */
    TYPE_DEATH_EFFECT = 92,
    /**
     * 头部特效饰品
     */
    TYPE_HEAD_EFFECT = 93,
    /**
     * 地图视觉特效饰品
     */
    TYPE_MAP_EFFECT = 94,
    /**
     * 信使粒子特效饰品
     */
    TYPE_COURIER_EFFECT = 95,
    /**
     * 天辉攻城单位饰品
     */
    TYPE_RADIANT_SIEGE_CREEPS = 96,
    /**
     * 夜魇攻城单位饰品
     */
    TYPE_DIRE_SIEGE_CREEPS = 97,
    /**
     * 肉山饰品
     */
    TYPE_ROSHAN = 98,
    /**
     * 痛苦魔方饰品
     */
    TYPE_TORMENTOR = 99,
    /**
     * 遗迹饰品
     */
    TYPE_ANCIENT = 100,
    /**
     * 宠物雕像饰品
     */
    TYPE_PET_EFFIGY = 101,
    /**
     * 空白占位
     */
    TYPE_NONE = 102,
}

declare const MODIFIER_FUNCTION_LAST: 399;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type modifierfunction = ModifierFunction;

declare enum ModifierFunction {
    /**
     * 定值额外攻击力/目标额外攻击力（例：支配死灵/盛宴）
     * @function GetModifierPreAttack_BonusDamage
     * @both
     */ PREATTACK_BONUS_DAMAGE = 0,
    /**
     * 目标触发额外攻击力（例：摔跤行家）
     * @function GetModifierPreAttack_BonusDamage_Target
     * @both
     */
    PREATTACK_BONUS_DAMAGE_TARGET = 1,
    /**
     * 触发额外攻击力（例：射手天赋）
     * @function GetModifierPreAttack_BonusDamage_Proc
     * @lua不可用
     */
    PREATTACK_BONUS_DAMAGE_PROC = 2,
    /**
     * 后致命一击伤害（例：影刃）
     * @function GetModifierPreAttack_BonusDamagePostCrit
     * @both
     */
    PREATTACK_BONUS_DAMAGE_POST_CRIT = 3,
    /**
     * 定值基础攻击力（例：长大）
     * @function GetModifierBaseAttack_BonusDamage
     * @both
     */
    BASEATTACK_BONUSDAMAGE = 4,
    /**
     * 物理攻击特效（例：怒意狂击）
     * @function GetModifierProcAttack_BonusDamage_Physical
     * @both
     */
    PROCATTACK_BONUS_DAMAGE_PHYSICAL = 5,
    /**
     * 物理魔法转化攻击特效（例：超自然）
     * @function GetModifierProcAttack_ConvertPhysicalToMagical
     * @lua不可用
     */
    PROCATTACK_CONVERT_PHYSICAL_TO_MAGICAL = 6,
    /**
     * 魔法攻击特效（例：金箍棒）
     * @function GetModifierProcAttack_BonusDamage_Magical
     * @both
     */
    PROCATTACK_BONUS_DAMAGE_MAGICAL = 7,
    /**
     * 纯粹攻击特效（例：魔晶血怒）
     * @function GetModifierProcAttack_BonusDamage_Pure
     * @both
     */
    PROCATTACK_BONUS_DAMAGE_PURE = 8,
    /**
     * 目标魔法攻击特效（例：丝质重器）
     * @function GetModifierProcAttack_BonusDamage_Magical_Target
     * @lua不可用
     */
    PROCATTACK_BONUS_DAMAGE_MAGICAL_TARGET = 9,
    /**
     * 魔法反馈攻击特效（例：法力损毁）
     * @function GetModifierProcAttack_Feedback
     * @both
     */
    PROCATTACK_FEEDBACK = 10,
    /**
     * 总攻击设定（例：虚张声势）
     * @function GetModifierOverrideAttackDamage
     * @both
     */
    OVERRIDE_ATTACK_DAMAGE = 11,
    /**
     * 攻击前监听记录攻击行为（例：射手天赋）
     * @function GetModifierPreAttack
     * @both
     */
    PRE_ATTACK = 12,
    /**
     * 隐身透明度（例：暗影步）
     * @function GetModifierInvisibilityLevel
     * @both
     */
    INVISIBILITY_LEVEL = 13,
    /**
     * 攻击不打破隐身（例：暗影之舞）
     * @function GetModifierInvisibilityAttackBehaviorException
     * @both
     */
    INVISIBILITY_ATTACK_BEHAVIOR_EXCEPTION = 14,
    /**
     * 永久隐身（例：刀光谍影）
     * @function GetModifierPersistentInvisibility
     * @both
     */
    PERSISTENT_INVISIBILITY = 15,
    /**
     * 定值额外移速（例：血肉傀儡）
     * @function GetModifierMoveSpeedBonus_Constant
     * @both
     */
    MOVESPEED_BONUS_CONSTANT = 16,
    /**
     * 基础移速覆盖（例：妖术）
     * @function GetModifierMoveSpeedOverride
     * @both
     */
    MOVESPEED_BASE_OVERRIDE = 17,
    /**
     * 标准移速下限设定（未知）
     * @function GetModifierMoveSpeed_MinOverride
     * @both
     */
    MOVESPEED_MIN_OVERRIDE = 18,
    /**
     * 标准移速上限设定（例：举步生风）
     * @function GetModifierMoveSpeed_MaxOverride
     * @both
     */
    MOVESPEED_MAX_OVERRIDE = 19,
    /**
     * 百分比额外移速（例：黄泉颤抖）
     * @function GetModifierMoveSpeedBonus_Percentage
     * @both
     */
    MOVESPEED_BONUS_PERCENTAGE = 20,
    /**
     * 特殊百分比额外移速（例：夜叉）
     * @function GetModifierMoveSpeedBonus_Percentage_Unique
     * @both
     */
    MOVESPEED_BONUS_PERCENTAGE_UNIQUE = 21,
    /**
     * 特殊定值额外移速（例：速度之靴）
     * @function GetModifierMoveSpeedBonus_Special_Boots
     * @both
     */
    MOVESPEED_BONUS_UNIQUE = 22,
    /**
     * 特殊定值额外移速2（未知）
     * @function GetModifierMoveSpeedBonus_Special_Boots_2
     * @both
     */
    MOVESPEED_BONUS_UNIQUE_2 = 23,
    /**
     * 唯一特殊定值额外移速（例：幽冥长袍）
     * @function GetModifierMoveSpeedBonus_Constant_Unique
     * @both
     */
    MOVESPEED_BONUS_CONSTANT_UNIQUE = 24,
    /**
     * 唯一特殊定值额外移速2（例：风灵之纹）
     * @function GetModifierMoveSpeedBonus_Constant_Unique_2
     * @both
     */
    MOVESPEED_BONUS_CONSTANT_UNIQUE_2 = 25,
    /**
     * 移速设定（例：时间结界）
     * @function GetModifierMoveSpeed_Absolute
     * @both
     */
    MOVESPEED_ABSOLUTE = 26,
    /**
     * 绝对移速下限设定（例：奔腾）
     * @function GetModifierMoveSpeed_AbsoluteMin
     * @both
     */
    MOVESPEED_ABSOLUTE_MIN = 27,
    /**
     * 绝对移速上限设定（例：重如铁锚）
     * @function GetModifierMoveSpeed_AbsoluteMax
     * @both
     */
    MOVESPEED_ABSOLUTE_MAX = 28,
    /**
     * 突破标准移速上限（例：焦渴）
     * @function GetModifierIgnoreMovespeedLimit
     * @both
     */
    IGNORE_MOVESPEED_LIMIT = 29,
    /**
     * 绝对移速上限（例：蜥蜴绝吻）
     * @function GetModifierMoveSpeed_Limit
     * @both
     */
    MOVESPEED_LIMIT = 30,
    /**
     * 攻击速度设定（例：稳如磐石）
     * @function GetModifierAttackSpeedBaseOverride
     * @both
     */
    ATTACKSPEED_BASE_OVERRIDE = 31,
    /**
     * 固定攻击间隔（例：怒拳破）
     * @function GetModifierFixedAttackRate
     * @both
     */
    FIXED_ATTACK_RATE = 32,
    /**
     * 定值攻击速度（例：超强力量）
     * @function GetModifierAttackSpeedBonus_Constant
     * @both
     */
    ATTACKSPEED_BONUS_CONSTANT = 33,
    /**
     * 突破攻速限制（例：战斗专注）
     * @function GetModifierAttackSpeed_Limit
     * @both
     */
    IGNORE_ATTACKSPEED_LIMIT = 34,
    /**
     * 定值冷却时间降低（例：神圣劝化）
     * @function GetModifierCooldownReduction_Constant
     * @both
     */
    COOLDOWN_REDUCTION_CONSTANT = 35,
    /**
     * 定值魔法消耗降低（例：神圣劝化）
     * @function GetModifierManacostReduction_Constant
     * @both
     */
    MANACOST_REDUCTION_CONSTANT = 36,
    /**
     * 定值生命消耗降低（例：德尊血式）
     * @function GetModifierHealthcostReduction_Constant
     * @lua不可用
     */
    HEALTHCOST_REDUCTION_CONSTANT = 37,
    /**
     * 基础攻击间隔设定（例：化学狂暴）
     * @function GetModifierBaseAttackTimeConstant
     * @both
     */
    BASE_ATTACK_TIME_CONSTANT = 38,
    /**
     * 定值基础攻击间隔调整（例：神杖虚妄之诺）
     * @function GetModifierBaseAttackTimeConstant_Adjust
     * @lua不可用
     */
    BASE_ATTACK_TIME_CONSTANT_ADJUST = 39,
    /**
     * 百分比基础攻击间隔（例：中立附魔粗暴）
     * @function GetModifierBaseAttackTimePercentage
     * @lua不可用
     */
    BASE_ATTACK_TIME_PERCENTAGE = 40,
    /**
     * 基础攻击前摇设定（例：严寒烧灼）
     * @function GetModifierAttackPointConstant
     * @both
     */
    ATTACK_POINT_CONSTANT = 41,
    /**
     * 额外攻击百分比调整（例：灵幻兵械）
     * @function GetModifierBonusDamageOutgoing_Percentage
     * @lua不可用
     */
    BONUSDAMAGEOUTGOING_PERCENTAGE = 42,
    /**
     * 百分比总攻击力（例：虚弱）
     * @function GetModifierDamageOutgoing_Percentage
     * @both
     */
    DAMAGEOUTGOING_PERCENTAGE = 43,
    /**
     * 幻象攻击伤害调整（例：幻象默认）
     * @function GetModifierDamageOutgoing_Percentage_Illusion
     * @both
     */
    DAMAGEOUTGOING_PERCENTAGE_ILLUSION = 44,
    /**
     * 幻象特殊攻击伤害调整（例：幻象对建筑肉山）
     * @function GetModifierDamageOutgoing_Percentage_Illusion_Amplify
     * @lua不可用
     */
    DAMAGEOUTGOING_PERCENTAGE_ILLUSION_AMPLIFY = 45,
    /**
     * 施加方通用伤害调整（例：决斗达人）
     * @function GetModifierTotalDamageOutgoing_Percentage
     * @both
     */
    TOTALDAMAGEOUTGOING_PERCENTAGE = 46,
    /**
     * 技能增强（例：血怒）
     * @function GetModifierSpellAmplify_Percentage
     * @both
     */
    SPELL_AMPLIFY_PERCENTAGE = 47,
    /**
     * 特殊技能增强（例：慧光）
     * @function GetModifierSpellAmplify_PercentageUnique
     * @both
     */
    SPELL_AMPLIFY_PERCENTAGE_UNIQUE = 48,
    /**
     * 目标技能增强（未知）
     * @function GetModifierSpellAmplify_PercentageTarget
     * @lua不可用
     */
    SPELL_AMPLIFY_PERCENTAGE_TARGET = 49,
    /**
     * 施加方治疗调整（例：圣洁吊坠）
     * @function GetModifierHealAmplify_PercentageSource
     * @both
     */
    HEAL_AMPLIFY_PERCENTAGE_SOURCE = 50,
    /**
     * 承受方治疗调整（例：薄葬）
     * @function GetModifierHealAmplify_PercentageTarget
     * @both
     */
    HEAL_AMPLIFY_PERCENTAGE_TARGET = 51,
    /**
     * 生命恢复调整（例：淬毒武器）
     * @function GetModifierHPRegenAmplify_Percentage
     * @both
     */
    HP_REGEN_AMPLIFY_PERCENTAGE = 52,
    /**
     * 攻击吸血调整（例：散华）
     * @function GetModifierLifestealRegenAmplify_Percentage
     * @both
     */
    LIFESTEAL_AMPLIFY_PERCENTAGE = 53,
    /**
     * 技能吸血调整（例：霜冷光环）
     * @function GetModifierSpellLifestealRegenAmplify_Percentage
     * @both
     */
    SPELL_LIFESTEAL_AMPLIFY_PERCENTAGE = 54,
    /**
     * 特殊技能吸血调整（例：慧光）
     * @function GetModifierSpellLifestealRegenAmplify_Percentage_Unique
     * @both
     */
    SPELL_LIFESTEAL_AMPLIFY_PERCENTAGE_UNIQUE = 55,
    /**
     * 魔法恢复调整（例：幽魂护罩）
     * @function GetModifierMPRegenAmplify_Percentage
     * @both
     */
    MP_REGEN_AMPLIFY_PERCENTAGE = 56,
    /**
     * 特殊魔法恢复调整（例：慧光）
     * @function GetModifierMPRegenAmplify_Percentage_Unique
     * @both
     */
    MP_REGEN_AMPLIFY_PERCENTAGE_UNIQUE = 57,
    /**
     * 魔法消耗增强（例：分则能成）
     * @function GetModifierManaDrainAmplify_Percentage
     * @lua不可用
     */
    MANA_DRAIN_AMPLIFY_PERCENTAGE = 58,
    /**
     * 魔法获取调整（例：幽魂护罩）
     * @function GetModifierMPRestoreAmplify_Percentage
     * @both
     */
    MP_RESTORE_AMPLIFY_PERCENTAGE = 59,
    /**
     * 百分比基础额外攻击力（例：复仇光环）
     * @function GetModifierBaseDamageOutgoing_Percentage
     * @both
     */
    BASEDAMAGEOUTGOING_PERCENTAGE = 60,
    /**
     * 特殊百分比基础额外攻击力（未知）
     * @function GetModifierBaseDamageOutgoing_PercentageUnique
     * @both
     */
    BASEDAMAGEOUTGOING_PERCENTAGE_UNIQUE = 61,
    /**
     * 承受方通用伤害调整（例：激怒）
     * @function GetModifierIncomingDamage_Percentage
     * @both
     */
    INCOMING_DAMAGE_PERCENTAGE = 62,
    /**
     * 承受方特殊物理伤害调整（例：石化凝视）
     * @function GetModifierIncomingPhysicalDamage_Percentage
     * @both
     */
    INCOMING_PHYSICAL_DAMAGE_PERCENTAGE = 63,
    /**
     * 物理伤害护盾（例：共鸣脉冲）
     * @function GetModifierIncomingPhysicalDamageConstant
     * @both
     */
    INCOMING_PHYSICAL_DAMAGE_CONSTANT = 64,
    /**
     * 魔法伤害护盾（例：烈火罩）
     * @function GetModifierIncomingSpellDamageConstant
     * @both
     */
    INCOMING_SPELL_DAMAGE_CONSTANT = 65,
    /**
     * 闪避（例：魅影无形）
     * @function GetModifierEvasion_Constant
     * @both
     */
    EVASION_CONSTANT = 66,
    /**
     * 负值闪避（未知）
     * @function GetModifierNegativeEvasion_Constant
     * @both
     */
    NEGATIVE_EVASION_CONSTANT = 67,
    /**
     * 特殊状态抗性（例：散夜对剑）
     * @function GetModifierStatusResistance
     * @both
     */
    STATUS_RESISTANCE = 68,
    /**
     * 状态抗性（例：威吓）
     * @function GetModifierStatusResistanceStacking
     * @both
     */
    STATUS_RESISTANCE_STACKING = 69,
    /**
     * 负面状态增强（例：技能窃取）
     * @function GetModifierStatusResistanceCaster
     * @both
     */
    STATUS_RESISTANCE_CASTER = 70,
    /**
     * 首端伤害无效化（例：回光返照）
     * @function GetModifierAvoidDamage
     * @both
     */
    AVOID_DAMAGE = 71,
    /**
     * 技能吸收（未知）
     * @function GetModifierAvoidSpell
     * @both
     */
    AVOID_SPELL = 72,
    /**
     * 致盲（例：旋风飞斧）
     * @function GetModifierMiss_Percentage
     * @both
     */
    MISS_PERCENTAGE = 73,
    /**
     * 百分比基础护甲（例：自然秩序）
     * @function GetModifierPhysicalArmorBase_Percentage
     * @both
     */
    PHYSICAL_ARMOR_BASE_PERCENTAGE = 74,
    /**
     * 百分比总护甲调整（例：变态上颚）
     * @function GetModifierPhysicalArmorTotal_Percentage
     * @lua不可用
     */
    PHYSICAL_ARMOR_TOTAL_PERCENTAGE = 75,
    /**
     * 定值额外护甲（例：战吼）
     * @function GetModifierPhysicalArmorBonus
     * @both
     */
    PHYSICAL_ARMOR_BONUS = 76,
    /**
     * 特殊定值额外护甲（例：天鹰之戒）
     * @function GetModifierPhysicalArmorBonusUnique
     * @both
     */
    PHYSICAL_ARMOR_BONUS_UNIQUE = 77,
    /**
     * 特殊主动定值额外护甲（例：玄冥盾牌）
     * @function GetModifierPhysicalArmorBonusUniqueActive
     * @both
     */
    PHYSICAL_ARMOR_BONUS_UNIQUE_ACTIVE = 78,
    /**
     * 后结算定值护甲（例：灵魂链接）
     * @function GetModifierPhysicalArmorBonusPost
     * @lua不可用
     */
    PHYSICAL_ARMOR_BONUS_POST = 79,
    /**
     * 最低护甲设定（例：刚强巨盾）
     * @function GetModifierMinPhysicalArmor
     * @lua不可用
     */
    MIN_PHYSICAL_ARMOR = 80,
    /**
     * 忽略物理护甲（例：一剑穿心）
     * @function GetModifierIgnorePhysicalArmor
     * @both
     */
    IGNORE_PHYSICAL_ARMOR = 81,
    /**
     * 基础魔法抗性降低（例：自然秩序）
     * @function GetModifierMagicalResistanceBaseReduction
     * @lua不可用
     */
    MAGICAL_RESISTANCE_BASE_REDUCTION = 82,
    /**
     * 线性魔法抗性（未知）
     * @function GetModifierMagicalResistanceDirectModification
     * @both
     */
    MAGICAL_RESISTANCE_DIRECT_MODIFICATION = 83,
    /**
     * 额外魔法抗性（例：法术反制）
     * @function GetModifierMagicalResistanceBonus
     * @both
     */
    MAGICAL_RESISTANCE_BONUS = 84,
    /**
     * 幻象魔法抗性（例：暗绘）
     * @function GetModifierMagicalResistanceBonusIllusions
     * @lua不可用
     */
    MAGICAL_RESISTANCE_BONUS_ILLUSIONS = 85,
    /**
     * 特殊魔法抗性（例：永世法衣）
     * @function GetModifierMagicalResistanceBonusUnique
     * @lua不可用
     */
    MAGICAL_RESISTANCE_BONUS_UNIQUE = 86,
    /**
     * 虚无魔法抗性（例：衰老）
     * @function GetModifierMagicalResistanceDecrepifyUnique
     * @both
     */
    MAGICAL_RESISTANCE_DECREPIFY_UNIQUE = 87,
    /**
     * 基础魔法恢复无效化（未知）
     * @function GetModifierBaseRegen
     * @both
     */
    BASE_MANA_REGEN = 88,
    /**
     * 定值魔法恢复（例：奥术光环）
     * @function GetModifierConstantManaRegen
     * @both
     */
    MANA_REGEN_CONSTANT = 89,
    /**
     * 特殊定值魔法恢复（例：天鹰之戒）
     * @function GetModifierConstantManaRegenUnique
     * @both
     */
    MANA_REGEN_CONSTANT_UNIQUE = 90,
    /**
     * 百分比最大魔法恢复（例：泉水回春）
     * @function GetModifierTotalPercentageManaRegen
     * @both
     */
    MANA_REGEN_TOTAL_PERCENTAGE = 91,
    /**
     * 定值生命恢复（例：活性护甲）
     * @function GetModifierConstantHealthRegen
     * @both
     */
    HEALTH_REGEN_CONSTANT = 92,
    /**
     * 百分比最大生命恢复（例：泉水回春）
     * @function GetModifierHealthRegenPercentage
     * @both
     */
    HEALTH_REGEN_PERCENTAGE = 93,
    /**
     * 特殊百分比生命恢复（例：恐鳌之心）
     * @function GetModifierHealthRegenPercentageUnique
     * @both
     */
    HEALTH_REGEN_PERCENTAGE_UNIQUE = 94,
    /**
     * 定值最大生命值（例：活力之球）
     * @function GetModifierHealthBonus
     * @both
     */
    HEALTH_BONUS = 95,
    /**
     * 定值最大魔法值（例：能量之球）
     * @function GetModifierManaBonus
     * @both
     */
    MANA_BONUS = 96,
    /**
     * 特殊定值额外力量（例：腐朽）
     * @function GetModifierExtraStrengthBonus
     * @both
     */
    EXTRA_STRENGTH_BONUS = 97,
    /**
     * 特殊定值最大生命值（例：感染）
     * @function GetModifierExtraHealthBonus
     * @both
     */
    EXTRA_HEALTH_BONUS = 98,
    /**
     * 特殊定值最大魔法值（例：灵魂之戒）
     * @function GetModifierExtraManaBonus
     * @both
     */
    EXTRA_MANA_BONUS = 99,
    /**
     * 百分比额外最大魔法值（未知）
     * @function GetModifierExtraManaBonusPercentage
     * @lua不可用
     */
    EXTRA_MANA_BONUS_PERCENTAGE = 100,
    /**
     * 百分比最大生命值（例：磐石光环）
     * @function GetModifierExtraHealthPercentage
     * @both
     */
    EXTRA_HEALTH_PERCENTAGE = 101,
    /**
     * 百分比最大魔法值（例：空灵挂件）
     * @function GetModifierExtraManaPercentage
     * @both
     */
    EXTRA_MANA_PERCENTAGE = 102,
    /**
     * 定值额外力量（例：食人魔之斧）
     * @function GetModifierBonusStats_Strength
     * @both
     */
    STATS_STRENGTH_BONUS = 103,
    /**
     * 定值额外敏捷（例：欢欣之刃）
     * @function GetModifierBonusStats_Agility
     * @both
     */
    STATS_AGILITY_BONUS = 104,
    /**
     * 定值额外智力（例：魔力法杖）
     * @function GetModifierBonusStats_Intellect
     * @both
     */
    STATS_INTELLECT_BONUS = 105,
    /**
     * 百分比总力量（例：血肉傀儡）
     * @function GetModifierBonusStats_Strength_Percentage
     * @lua不可用
     */
    STATS_STRENGTH_BONUS_PERCENTAGE = 106,
    /**
     * 百分比总敏捷（例：射手天赋）
     * @function GetModifierBonusStats_Agility_Percentage
     * @lua不可用
     */
    STATS_AGILITY_BONUS_PERCENTAGE = 107,
    /**
     * 百分比总智力（例：通灵头带）
     * @function GetModifierBonusStats_Intellect_Percentage
     * @lua不可用
     */
    STATS_INTELLECT_BONUS_PERCENTAGE = 108,
    /**
     * 智力无效化（例：傻福）
     * @function GetModifierIntellectNone
     * @lua不可用
     */
    STATS_INTELLECT_NONE = 109,
    /**
     * 特殊定值施法距离（例：以太透镜）
     * @function GetModifierCastRangeBonus
     * @both
     */
    CAST_RANGE_BONUS = 110,
    /**
     * 百分比施法距离（例：折跃耀光）
     * @function GetModifierCastRangeBonusPercentage
     * @lua不可用
     */
    CAST_RANGE_BONUS_PERCENTAGE = 111,
    /**
     * 目标额外施法距离（未知）
     * @function GetModifierCastRangeBonusTarget
     * @both
     */
    CAST_RANGE_BONUS_TARGET = 112,
    /**
     * 定值施法距离（例：奥术至尊）
     * @function GetModifierCastRangeBonusStacking
     * @both
     */
    CAST_RANGE_BONUS_STACKING = 113,
    /**
     * 固有攻击距离设定（例：变形）
     * @function GetModifierAttackRangeOverride
     * @both
     */
    ATTACK_RANGE_BASE_OVERRIDE = 114,
    /**
     * 定值攻击距离（例：瞄准）
     * @function GetModifierAttackRangeBonus
     * @both
     */
    ATTACK_RANGE_BONUS = 115,
    /**
     * 特殊定值攻击距离（例：魔龙枪）
     * @function GetModifierAttackRangeBonusUnique
     * @both
     */
    ATTACK_RANGE_BONUS_UNIQUE = 116,
    /**
     * 百分比攻击距离（例：折跃耀光）
     * @function GetModifierAttackRangeBonusPercentage
     * @both
     */
    ATTACK_RANGE_BONUS_PERCENTAGE = 117,
    /**
     * 绝对攻击距离设定（例：变身）
     * @function GetModifierMaxAttackRange
     * @both
     */
    MAX_ATTACK_RANGE = 118,
    /**
     * 定值弹道速度（例：严寒烧灼）
     * @function GetModifierProjectileSpeedBonus
     * @both
     */
    PROJECTILE_SPEED_BONUS = 119,
    /**
     * 百分比弹道速度（例：银闪护符）
     * @function GetModifierProjectileSpeedBonusPercentage
     * @lua不可用
     */
    PROJECTILE_SPEED_BONUS_PERCENTAGE = 120,
    /**
     * 弹道特效替换（例：魔化）
     * @function GetModifierProjectileName
     * @both
     */
    PROJECTILE_NAME = 121,
    /**
     * 重生（例：绝冥再生）
     * @function ReincarnateTime
     * @both
     */
    REINCARNATION = 122,
    /**
     * 关闭重生特效（未知）
     * @function ReincarnateSuppressFX
     * @both
     */
    REINCARNATION_SUPPRESS_FX = 123,
    /**
     * 特殊定值复活时间（例：吸血灵魂）
     * @function GetModifierConstantRespawnTime
     * @both
     */
    RESPAWNTIME = 124,
    /**
     * 百分比复活时间降低（例：吸血灵魂）
     * @function GetModifierPercentageRespawnTime
     * @both
     */
    RESPAWNTIME_PERCENTAGE = 125,
    /**
     * 定值复活时间（例：天赋复活时间）
     * @function GetModifierStackingRespawnTime
     * @both
     */
    RESPAWNTIME_STACKING = 126,
    /**
     * 百分比冷却缩减（例：玲珑心）
     * @function GetModifierPercentageCooldown
     * @both
     */
    COOLDOWN_PERCENTAGE = 127,
    /**
     * 冷却速度调整（例：时间膨胀）
     * @function GetModifierPercentageCooldownOngoing
     * @lua不可用
     */
    COOLDOWN_PERCENTAGE_ONGOING = 128,
    /**
     * 百分比施法动作降低（例：逆转时空）
     * @function GetModifierPercentageCasttime
     * @both
     */
    CASTTIME_PERCENTAGE = 129,
    /**
     * 百分比攻击动作（例：海象神拳！）
     * @function GetModifierPercentageAttackAnimTime
     * @lua不可用
     */
    ATTACK_ANIM_TIME_PERCENTAGE = 130,
    /**
     * 特殊百分比魔法消耗降低（例：散慧对剑）
     * @function GetModifierPercentageManacost
     * @both
     */
    MANACOST_PERCENTAGE = 131,
    /**
     * 百分比魔法消耗降低（例：奥术符）
     * @function GetModifierPercentageManacostStacking
     * @both
     */
    MANACOST_PERCENTAGE_STACKING = 132,
    /**
     * 特殊百分比生命消耗降低（未知）
     * @function GetModifierPercentageHealthcost
     * @both
     */
    HEALTHCOST_PERCENTAGE = 133,
    /**
     * 百分比生命消耗降低（未知）
     * @function GetModifierPercentageHealthcostStacking
     * @both
     */
    HEALTHCOST_PERCENTAGE_STACKING = 134,
    /**
     * 定值死亡损失金钱（未知）
     * @function GetModifierConstantDeathGoldCost
     * @both
     */
    DEATHGOLDCOST = 135,
    /**
     * 百分比死亡损失金钱（例：海盗帽）
     * @function GetModifierPercentageDeathGoldCost
     * @both
     */
    PERCENTAGE_DEATHGOLDCOST = 136,
    /**
     * 经验倍率调整（例：从众心理）
     * @function GetModifierPercentageExpRateBoost
     * @both
     */
    EXP_RATE_BOOST = 137,
    /**
     * 金钱倍率调整（例：占卜师牌组）
     * @function GetModifierPercentageGoldRateBoost
     * @both
     */
    GOLD_RATE_BOOST = 138,
    /**
     * 击杀助攻金钱提升（例：职业猎人）
     * @function GetModifierPercentageKillAssistGoldBoost
     * @both
     */
    KILL_ASSIST_GOLD_BOOST = 139,
    /**
     * 百分比经验金钱转化（未知）
     * @function GetModifierPercentageConvertExpToGold
     * @lua不可用
     */
    CONVERT_EXP_TO_GOLD_PCT = 140,
    /**
     * 致命一击（例：混沌一击）
     * @function GetModifierPreAttack_CriticalStrike
     * @both
     */
    PREATTACK_CRITICALSTRIKE = 141,
    /**
     * 目标致命一击（例：翔影之钗）
     * @function GetModifierPreAttack_Target_CriticalStrike
     * @both
     */
    PREATTACK_TARGET_CRITICALSTRIKE = 142,
    /**
     * 魔法伤害格挡（例：凝魂之露）
     * @function GetModifierMagical_ConstantBlock
     * @both
     */
    MAGICAL_CONSTANT_BLOCK = 143,
    /**
     * 物理伤害格挡（例：海妖外壳）
     * @function GetModifierPhysical_ConstantBlock
     * @both
     */
    PHYSICAL_CONSTANT_BLOCK = 144,
    /**
     * 特殊物理伤害格挡（未知）
     * @function GetModifierPhysical_ConstantBlockSpecial
     * @both
     */
    PHYSICAL_CONSTANT_BLOCK_SPECIAL = 145,
    /**
     * 额外物理伤害格挡（例：利维坦的渔获）
     * @function GetModifierPhysical_ConstantBlockBonus
     * @lua不可用
     */
    PHYSICAL_CONSTANT_BLOCK_BONUS = 146,
    /**
     * 近战物理伤害格挡概率覆盖（例：刚毅）
     * @function GetModifierInnateDamageBlockPctOverride
     * @lua不可用
     */
    INNATE_DAMAGE_BLOCK_PCT_OVERRIDE = 147,
    /**
     * 前端伤害格挡（例：魔法盾）
     * @function GetModifierPhysical_ConstantBlockUnavoidablePreArmor
     * @both
     */
    TOTAL_CONSTANT_BLOCK_UNAVOIDABLE_PRE_ARMOR = 148,
    /**
     * 末端伤害格挡（例：肉盾）
     * @function GetModifierTotal_ConstantBlock
     * @both
     */
    TOTAL_CONSTANT_BLOCK = 149,
    /**
     * 完整动画覆盖（例：太多了）
     * @function GetOverrideAnimation
     * @both
     */
    OVERRIDE_ANIMATION = 150,
    /**
     * 动画速率调整（例：太多了）
     * @function GetOverrideAnimationRate
     * @both
     */
    OVERRIDE_ANIMATION_RATE = 151,
    /**
     * 技能抵挡（例：林肯法球）
     * @function GetAbsorbSpell
     * @both
     */
    ABSORB_SPELL = 152,
    /**
     * 技能反弹（例：清莲宝珠）
     * @function GetReflectSpell
     * @both
     */
    REFLECT_SPELL = 153,
    /**
     * 禁止自动攻击（例：相位转移）
     * @function GetDisableAutoAttack
     * @both
     */
    DISABLE_AUTOATTACK = 154,
    /**
     * 定值白天视野（例：辰星破晓）
     * @function GetBonusDayVision
     * @both
     */
    BONUS_DAY_VISION = 155,
    /**
     * 百分比白天视野（例：邪道私语）
     * @function GetBonusDayVisionPercentage
     * @both
     */
    BONUS_DAY_VISION_PERCENTAGE = 156,
    /**
     * 定值夜晚视野（例：月之祝福）
     * @function GetBonusNightVision
     * @both
     */
    BONUS_NIGHT_VISION = 157,
    /**
     * 特殊定值夜晚视野（例：银月之晶）
     * @function GetBonusNightVisionUnique
     * @both
     */
    BONUS_NIGHT_VISION_UNIQUE = 158,
    /**
     * 百分比日夜视野（例：老版荒芜）
     * @function GetBonusVisionPercentage
     * @both
     */
    BONUS_VISION_PERCENTAGE = 159,
    /**
     * 绝对白天视野上限设定（例：丛林之舞）
     * @function GetFixedDayVision
     * @both
     */
    FIXED_DAY_VISION = 160,
    /**
     * 绝对夜晚视野上限设定（例：丛林之舞）
     * @function GetFixedNightVision
     * @both
     */
    FIXED_NIGHT_VISION = 161,
    /**
     * 最低生命值设定（例：薄葬）
     * @function GetMinHealth
     * @both
     */
    MIN_HEALTH = 162,
    /**
     * 最低魔法值设定（例：特别储备）
     * @function GetMinMana
     * @both
     */
    MIN_MANA = 163,
    /**
     * 物理伤害无效化（例：守护天使）
     * @function GetAbsoluteNoDamagePhysical
     * @both
     */
    ABSOLUTE_NO_DAMAGE_PHYSICAL = 164,
    /**
     * 魔法伤害无效化（例：命运敕令）
     * @function GetAbsoluteNoDamageMagical
     * @both
     */
    ABSOLUTE_NO_DAMAGE_MAGICAL = 165,
    /**
     * 纯粹伤害无效化（例：防御符文）
     * @function GetAbsoluteNoDamagePure
     * @both
     */
    ABSOLUTE_NO_DAMAGE_PURE = 166,
    /**
     * 幻象标识（例：幻象默认）
     * @function GetIsIllusion
     * @both
     */
    IS_ILLUSION = 167,
    /**
     * 幻象标签（例：幻象默认）
     * @function GetModifierIllusionLabel
     * @both
     */
    ILLUSION_LABEL = 168,
    /**
     * 强幻象标签（例：复仇光环）
     * @function GetModifierStrongIllusion
     * @lua不可用
     */
    STRONG_ILLUSION = 169,
    /**
     * 可施法幻象标签（例：复仇光环）
     * @function GetModifierSuperIllusion
     * @lua不可用
     */
    SUPER_ILLUSION = 170,
    /**
     * 终极技能可施法幻象标签（例：复仇光环）
     * @function GetModifierSuperIllusionWithUltimate
     * @both
     */
    SUPER_ILLUSION_WITH_ULTIMATE = 171,
    /**
     * 死亡可获得经验（例：复仇光环）
     * @function GetModifierXPDuringDeath
     * @lua不可用
     */
    XP_DURING_DEATH = 172,
    /**
     * 百分比转身速率（例：粘性燃油）
     * @function GetModifierTurnRate_Percentage
     * @both
     */
    TURN_RATE_PERCENTAGE = 173,
    /**
     * 转身速率覆盖（例：相位鞋）
     * @function GetModifierTurnRate_Override
     * @both
     */
    TURN_RATE_OVERRIDE = 174,
    /**
     * 生命冻结（例：冰晶爆轰）
     * @function GetDisableHealing
     * @both
     */
    DISABLE_HEALING = 175,
    /**
     * 魔法获取无效化（例：神杖闪烁）
     * @function GetDisableManaGain
     * @lua不可用
     */
    DISABLE_MANA_GAIN = 176,
    /**
     * 无视攻击距离（例：飓风长戟）
     * @function GetAlwaysAllowAttack
     * @both
     */
    ALWAYS_ALLOW_ATTACK = 177,
    /**
     * 可攻击虚无单位（例：超自然）
     * @function GetAllowEtherealAttack
     * @lua不可用
     */
    ALWAYS_ETHEREAL_ATTACK = 178,
    /**
     * 无视攻击免疫（例：超自然）
     * @function GetOverrideAttackMagical
     * @both
     */
    OVERRIDE_ATTACK_MAGICAL = 179,
    /**
     * 即时刷新统计情况（例：奥术符）
     * @function GetModifierUnitStatsNeedsRefresh
     * @both
     */
    UNIT_STATS_NEEDS_REFRESH = 180,
    /**
     * 百分比小兵击杀金钱（未知）
     * @both
     */
    BOUNTY_CREEP_MULTIPLIER = 181,
    /**
     * 百分比其他单位击杀金钱（未知）
     * @both
     */
    BOUNTY_OTHER_MULTIPLIER = 182,
    /**
     * 禁止升级技能（例：变形）
     * @function GetModifierUnitDisllowUpgrading
     * @lua不可用
     */
    UNIT_DISALLOW_UPGRADING = 183,
    /**
     * 持续躲避（例：老版扫射）
     * @function GetModifierDodgeProjectile
     * @both
     */
    DODGE_PROJECTILE = 184,
    /**
     * 仅触发攻击动作特效（例：Ti9战鼓）
     * @function GetTriggerCosmeticAndEndAttack
     * @lua不可用
     */
    TRIGGER_COSMETIC_AND_END_ATTACK = 185,
    /**
     * 百分比属性攻击力（例：内在优势）
     * @function GetPrimaryStatDamageMultiplier
     * @both
     */
    PRIMARY_STAT_DAMAGE_MULTIPLIER = 186,
    /**
     * 致死打击（例：重型箭袋）
     * @function GetModifierPreAttack_DeadlyBlow
     * @lua不可用
     */
    PREATTACK_DEADLY_BLOW = 187,
    /**
     * 固守原位仍自动攻击（未知）
     * @function GetAlwaysAutoAttackWhileHoldPosition
     * @lua不可用
     */
    ALWAYS_AUTOATTACK_WHILE_HOLD_POSITION = 188,
    /**
     * 百分比护甲穿透（例：地狱之裂）
     * @function GetPhysicalArmorPiercingPercentageTarget
     * @lua不可用
     */
    PHYSICAL_ARMOR_PIERCING_PERCENTAGE_TARGET = 189,
    /**
     * 百分比魔法抗性穿透（未知）
     * @function GetMagicalArmorPiercingPercentageTarget
     * @lua不可用
     */
    MAGICAL_ARMOR_PIERCING_PERCENTAGE_TARGET = 190,
    /**
     * 致命一击倍率增加（未知）
     * @function GetCriticalStrikeBonus
     * @lua不可用
     */
    CRITICAL_STRIKE_BONUS = 191,
    /**
     * 物理纯粹转化攻击特效（未知）
     * @function GetConvertAttackPhysicalToPure
     * @lua不可用
     */
    CONVERT_ATTACK_PHYSICAL_TO_PURE = 192,
    /**
     * 增益时间增强（例：安可）
     * @function GetBuffAmplification
     * @lua不可用
     */
    BUFF_AMPLIFICATION = 193,
    /**
     * 选定施法目标时（例：老版灵匣）
     * @function OnSpellTargetReady
     * @both
     */
    ON_SPELL_TARGET_READY = 194,
    /**
     * 记录攻击时（例：神枪在手）
     * @function OnAttackRecord
     * @both
     */
    ON_ATTACK_RECORD = 195,
    /**
     * 开始攻击抬手时（例：不可侵犯）
     * @function OnAttackStart
     * @both
     */
    ON_ATTACK_START = 196,
    /**
     * 攻击发出时（例：暗影之境）
     * @function OnAttack
     * @both
     */
    ON_ATTACK = 197,
    /**
     * 攻击命中时（例：腐蚀兵械）
     * @function OnAttackLanded
     * @both
     */
    ON_ATTACK_LANDED = 198,
    /**
     * 攻击失败时（例：液态火）
     * @function OnAttackFail
     * @both
     */
    ON_ATTACK_FAIL = 199,
    /**
     * 攻击友方时（例：噩梦）
     * @function OnAttackAllied
     * @both
     */
    ON_ATTACK_ALLIED = 200,
    /**
     * 弹道被躲避时（例：顽皮克敌）
     * @function OnProjectileDodge
     * @both
     */
    ON_PROJECTILE_DODGE = 201,
    /**
     * 下达指令时（例：相位转移）
     * @function OnOrder
     * @both
     */
    ON_ORDER = 202,
    /**
     * 收到指令时（例：能量齿轮）
     * @function OnOrderReceived
     * @lua不可用
     */
    ON_ORDER_RECEIVED = 203,
    /**
     * 单位移动时（例：隐匿）
     * @function OnUnitMoved
     * @both
     */
    ON_UNIT_MOVED = 204,
    /**
     * 开始施法时（例：不稳定化合物）
     * @function OnAbilityStart
     * @both
     */
    ON_ABILITY_START = 205,
    /**
     * 施法完成时（例：余震）
     * @function OnAbilityExecuted
     * @both
     */
    ON_ABILITY_EXECUTED = 206,
    /**
     * 完全施放时（例：奥术积累）
     * @function OnAbilityFullyCast
     * @both
     */
    ON_ABILITY_FULLY_CAST = 207,
    /**
     * 打破隐身时（例：影刃）
     * @function OnBreakInvisibility
     * @both
     */
    ON_BREAK_INVISIBILITY = 208,
    /**
     * 持续施法结束时（例：遗言）
     * @function OnAbilityEndChannel
     * @both
     */
    ON_ABILITY_END_CHANNEL = 209,
    /**
     * 升级时（未知）
     * @lua不可用
     */
    ON_PROCESS_UPGRADE = 210,
    /**
     * 刷新时（未知）
     * @lua不可用
     */
    ON_REFRESH = 211,
    /**
     * 受到伤害时（例：腐蚀皮肤）
     * @function OnTakeDamage
     * @both
     */
    ON_TAKEDAMAGE = 212,
    /**
     * 阻止死亡时（例：禽戏）
     * @function OnDamagePrevented
     * @both
     */
    ON_DEATH_PREVENTED = 213,
    /**
     * 状态改变时（例：幽魂护罩）
     * @function OnStateChanged
     * @both
     */
    ON_STATE_CHANGED = 214,
    /**
     * 触发法球效果时（未知）
     * @lua不可用
     */
    ON_ORB_EFFECT = 215,
    /**
     * 产生攻击分裂时（例：巨力挥舞）
     * @function OnProcessCleave
     * @both
     */
    ON_PROCESS_CLEAVE = 216,
    /**
     * 造成伤害时（例：幽魂之剑）
     * @function OnDamageCalculated
     * @both
     */
    ON_DAMAGE_CALCULATED = 217,
    /**
     * 造成技能伤害时（例：束手束脚）
     * @function OnMagicDamageCalculated
     * @both
     */
    ON_MAGIC_DAMAGE_CALCULATED = 218,
    /**
     * 攻击结束时（例：并列）
     * @function OnAttacked
     * @both
     */
    ON_ATTACKED = 219,
    /**
     * 单位死亡时（例：衰退光环）
     * @function OnDeath
     * @both
     */
    ON_DEATH = 220,
    /**
     * 完全死亡时（例：临别一枪）
     * @function OnDeathCompleted
     * @both
     */
    ON_DEATH_COMPLETED = 221,
    /**
     * 单位复活时（例：下地狱再上来）
     * @function OnRespawn
     * @both
     */
    ON_RESPAWN = 222,
    /**
     * 消耗魔法时（例：幽冥守卫）
     * @function OnSpentMana
     * @both
     */
    ON_SPENT_MANA = 223,
    /**
     * 消耗生命时（例：回响之笼）
     * @function OnSpentHealth
     * @both
     */
    ON_SPENT_HEALTH = 224,
    /**
     * 消耗物品充能时（例：分则能成）
     * @function OnSpentItemCharge
     * @lua不可用
     */
    ON_SPENT_ITEM_CHARGE = 225,
    /**
     * 正在传送时（例：剑刃风暴）
     * @function OnTeleporting
     * @both
     */
    ON_TELEPORTING = 226,
    /**
     * 传送结束时（例：降临）
     * @function OnTeleported
     * @both
     */
    ON_TELEPORTED = 227,
    /**
     * 设定单位位置时（例：扔出）
     * @function OnSetLocation
     * @both
     */
    ON_SET_LOCATION = 228,
    /**
     * 获取生命时（例：虚无之恩）
     * @function OnHealthGained
     * @both
     */
    ON_HEALTH_GAINED = 229,
    /**
     * 获取魔法时（例：羁绊）
     * @function OnManaGained
     * @both
     */
    ON_MANA_GAINED = 230,
    /**
     * 产生击杀归属时（例：死神镰刀）
     * @function OnTakeDamageKillCredit
     * @both
     */
    ON_TAKEDAMAGE_KILLCREDIT = 231,
    /**
     * 击杀英雄时（例：血色外衣）
     * @function OnHeroKilled
     * @both
     */
    ON_HERO_KILLED = 232,
    /**
     * 获得治疗时（例：羁绊）
     * @function OnHealReceived
     * @both
     */
    ON_HEAL_RECEIVED = 233,
    /**
     * 获取生命转移时（例：克莱拉牧杖）
     * @function OnRedirectHealthGain
     * @lua不可用
     */
    ON_REDIRECT_HEALTH_GAIN = 234,
    /**
     * 摧毁建筑时（例：毁灭之赏）
     * @function OnBuildingKilled
     * @both
     */
    ON_BUILDING_KILLED = 235,
    /**
     * 模型替换时（例：古龙形态）
     * @function OnModelChanged
     * @both
     */
    ON_MODEL_CHANGED = 236,
    /**
     * 施加modifier时（例：咤）
     * @function OnModifierAdded
     * @both
     */
    ON_MODIFIER_ADDED = 237,
    /**
     * 移除modifier时（例：神杖高射火炮）
     * @function OnModifierRemoved
     * @lua不可用
     */
    ON_MODIFIER_REMOVED = 238,
    /**
     * 选择神杖升级时（例：元素祈唤）
     * @function OnScepterUpgradeSelected
     * @lua不可用
     */
    ON_SCEPTER_UPGRADE_SELECTED = 239,
    /**
     * 选择魔晶升级时（例：元素祈唤）
     * @function OnShardUpgradeSelected
     * @lua不可用
     */
    ON_SHARD_UPGRADE_SELECTED = 240,
    /**
     * 技能数值说明（例：太多了）
     * @function OnTooltip
     * @both
     */
    TOOLTIP = 241,
    /**
     * 模型替换（例：真熊形态）
     * @function GetModifierModelChange
     * @both
     */
    MODEL_CHANGE = 242,
    /**
     * 定值模型体积（例：腐朽）
     * @function GetModifierModelScale
     * @both
     */
    MODEL_SCALE = 243,
    /**
     * 模型体积动画时间（例：逃生技）
     * @function GetModifierModelScaleAnimateTime
     * @both
     */
    MODEL_SCALE_ANIMATE_TIME = 244,
    /**
     * 模型体积缓入缓出动画（未知）
     * @function GetModifierModelScaleUseInOutEase
     * @both
     */
    MODEL_SCALE_USE_IN_OUT_EASE = 245,
    /**
     * 模型体积覆盖（未知）
     * @function GetModifierModelScaleConstant
     * @both
     */
    MODEL_SCALE_CONSTANT = 246,
    /**
     * 神杖升级（例：神杖）
     * @function GetModifierScepter
     * @both
     */
    IS_SCEPTER = 247,
    /**
     * 魔晶升级（例：魔晶）
     * @function GetModifierShard
     * @lua不可用
     */
    IS_SHARD = 248,
    /**
     * 扫描冷却降低（例：望远镜）
     * @function GetModifierRadarCooldownReduction
     * @lua不可用
     */
    RADAR_COOLDOWN_REDUCTION = 249,
    /**
     * 动画转变（例：太多了）
     * @function GetActivityTranslationModifiers
     * @both
     */
    TRANSLATE_ACTIVITY_MODIFIERS = 250,
    /**
     * 攻击声音特效（例：太多了）
     * @function GetAttackSound
     * @both
     */
    TRANSLATE_ATTACK_SOUND = 251,
    /**
     * 倒计时特效（例：普通召唤单位默认）
     * @function GetUnitLifetimeFraction
     * @both
     */
    LIFETIME_FRACTION = 252,
    /**
     * 模型视野（例：风雷之击）
     * @function GetModifierProvidesFOWVision
     * @both
     */
    PROVIDES_FOW_POSITION = 253,
    /**
     * 施放技能消耗生命值（未知）
     * @function GetModifierSpellsRequireHP
     * @both
     */
    SPELLS_REQUIRE_HP = 254,
    /**
     * 通过生命值施放技能（例：血魔法）
     * @function GetModifierConvertManaCostToHealthCost
     * @both
     */
    CONVERT_MANA_COST_TO_HEALTH_COST = 255,
    /**
     * 强制小地图显示（例：球状闪电）
     * @function GetForceDrawOnMinimap
     * @both
     */
    FORCE_DRAW_MINIMAP = 256,
    /**
     * 朝向锁定（例：护身甲盾）
     * @function GetModifierDisableTurning
     * @both
     */
    DISABLE_TURNING = 257,
    /**
     * 忽略施法角度（例：喷气背包）
     * @function GetModifierIgnoreCastAngle
     * @both
     */
    IGNORE_CAST_ANGLE = 258,
    /**
     * 改变技能数值（未知）
     * @function GetModifierChangeAbilityValue
     * @both
     */
    CHANGE_ABILITY_VALUE = 259,
    /**
     * 覆盖技能数值（例：太多了）
     * @function GetModifierOverrideAbilitySpecial
     * @both
     */
    OVERRIDE_ABILITY_SPECIAL = 260,
    /**
     * 特殊覆盖技能数值（例：太多了）
     * @function GetModifierOverrideAbilitySpecialValue
     * @both
     */
    OVERRIDE_ABILITY_SPECIAL_VALUE = 261,
    /**
     * 技能排布隐藏（例：感染）
     * @function GetModifierAbilityLayout
     * @both
     */
    ABILITY_LAYOUT = 262,
    /**
     * 被支配时（例：感染）
     * @function OnDominated
     * @both
     */
    ON_DOMINATED = 263,
    /**
     * 击杀时（例：雷神之锤）
     * @function OnKill
     * @both
     */
    ON_KILL = 264,
    /**
     * 助攻时（例：利维坦的渔获）
     * @function OnAssist
     * @both
     */
    ON_ASSIST = 265,
    /**
     * 风暴双雄克隆体标签（例：风暴双雄）
     * @function GetModifierTempestDouble
     * @both
     */
    TEMPEST_DOUBLE = 266,
    /**
     * 模型替换时粒子特效（例：暗夜猎影）
     * @function PreserveParticlesOnModelChanged
     * @both
     */
    PRESERVE_PARTICLES_ON_MODEL_CHANGE = 267,
    /**
     * 攻击完成时（例：强化图腾）
     * @function OnAttackFinished
     * @both
     */
    ON_ATTACK_FINISHED = 268,
    /**
     * 忽略冷却（未知）
     * @function GetModifierIgnoreCooldown
     * @lua不可用
     */
    IGNORE_COOLDOWN = 269,
    /**
     * 可攻击树木（未知）
     * @function GetModifierCanAttackTrees
     * @both
     */
    CAN_ATTACK_TREES = 270,
    /**
     * 设置飞行高度（例：丛林之舞）
     * @function GetVisualZDelta
     * @both
     */
    VISUAL_Z_DELTA = 271,
    /**
     * 起飞速度覆盖（例：冰川）
     * @function GetVisualZSpeedBaseOverride
     * @both
     */
    VISUAL_Z_SPEED_BASE_OVERRIDE = 272,
    /**
     * 幻象承受伤害调整（例：幻象默认）
     * @lua不可用
     */
    INCOMING_DAMAGE_ILLUSION = 273,
    /**
     * 不使攻击目标暴露（未知）
     * @function GetModifierNoVisionOfAttacker
     * @both
     */
    DONT_GIVE_VISION_OF_ATTACKER = 274,
    /**
     * 状态栏即时更新说明（例：太多了）
     * @function OnTooltip2
     * @both
     */
    TOOLTIP2 = 275,
    /**
     * 攻击记录销毁时（例：奥术天球）
     * @function OnAttackRecordDestroy
     * @both
     */
    ON_ATTACK_RECORD_DESTROY = 276,
    /**
     * 弹道被摧毁时（例：热血竞技场）
     * @function OnProjectileObstructionHit
     * @both
     */
    ON_PROJECTILE_OBSTRUCTION_HIT = 277,
    /**
     * 跳过传送（未知）
     * @function GetSuppressTeleport
     * @both
     */
    SUPPRESS_TELEPORT = 278,
    /**
     * 攻击取消时（例：神枪在手）
     * @function OnAttackCancelled
     * @both
     */
    ON_ATTACK_CANCELLED = 279,
    /**
     * 不触发攻击分裂（例：神之谴戒）
     * @function GetSuppressCleave
     * @lua不可用
     */
    SUPPRESS_CLEAVE = 280,
    /**
     * 机器人额外分数（未知）
     * @function BotAttackScoreBonus
     * @lua不可用
     */
    BOT_ATTACK_SCORE_BONUS = 281,
    /**
     * 百分比减攻速调整（未知）
     * @function GetModifierAttackSpeedReductionPercentage
     * @both
     */
    ATTACKSPEED_REDUCTION_PERCENTAGE = 282,
    /**
     * 百分比减移速调整（未知）
     * @function GetModifierMoveSpeedReductionPercentage
     * @both
     */
    MOVESPEED_REDUCTION_PERCENTAGE = 283,
    /**
     * 可在移动时攻击（例：集中火力）
     * @lua不可用
     */
    ATTACK_WHILE_MOVING_TARGET = 284,
    /**
     * 百分比攻击速度（例：长大）
     * @function GetModifierAttackSpeedPercentage
     * @both
     */
    ATTACKSPEED_PERCENTAGE = 285,
    /**
     * 尝试躲避弹道时（例：猎手旋镖）
     * @function OnAttemptProjectileDodge
     * @both
     */
    ON_ATTEMPT_PROJECTILE_DODGE = 286,
    /**
     * 特殊百分比冷却缩减（例：突变模式冷却调整）
     * @function GetModifierPercentageCooldownStacking
     * @both
     */
    COOLDOWN_PERCENTAGE_STACKING = 287,
    /**
     * 技能共享目标（例：位面空洞）
     * @function GetModifierSpellRedirectTarget
     * @lua不可用
     */
    SPELL_REDIRECT_TARGET = 288,
    /**
     * 定值转身速率（例：织网）
     * @function GetModifierTurnRateConstant
     * @lua不可用
     */
    TURN_RATE_CONSTANT = 289,
    /**
     * 中立物品栏可使用普通物品（例：囤积狂鼠）
     * @function GetModifierIsPackRat
     * @lua不可用
     */
    PACK_RAT = 290,
    /**
     * 施加方百分比物理伤害（例：怨灵之契）
     * @function GetModifierPhysicalDamageOutgoing_Percentage
     * @lua不可用
     */
    PHYSICALDAMAGEOUTGOING_PERCENTAGE = 291,
    /**
     * 击退抗性（例：坚固核心）
     * @function GetModifierKnockbackAmplification_Percentage
     * @lua不可用
     */
    KNOCKBACK_AMPLIFICATION_PERCENTAGE = 292,
    /**
     * 特殊生命条（例：攻击次数型单位）
     * @function GetModifierHealthBarPips
     * @both
     */
    HEALTHBAR_PIPS = 293,
    /**
     * 全类型伤害护盾（例：无光之盾）
     * @function GetModifierIncomingDamageConstant
     * @both
     */
    INCOMING_DAMAGE_CONSTANT = 294,
    /**
     * 施法成功时（例：绝刃）
     * @function OnSpellAppliedSuccessfully
     * @both
     */
    SPELL_APPLIED_SUCCESSFULLY = 295,
    /**
     * 尾端伤害无效化（例：虚妄之诺）
     * @function GetModifierAvoidDamageAfterReductions
     * @both
     */
    AVOID_DAMAGE_AFTER_REDUCTIONS = 296,
    /**
     * 致使攻击失败（例：林渊旅人）
     * @function GetModifierPropetyFailAttack
     * @lua不可用
     */
    FAIL_ATTACK = 297,
    /**
     * 前结算伤害调整（未知）
     * @function GetModifierPrereduceIncomingDamage_Mult
     * @lua不可用
     */
    PREREDUCE_INCOMING_DAMAGE_MULT = 298,
    /**
     * 跳过死亡特效（未知）
     * @function GetModifierSuppressFullscreenDeathFX
     * @both
     */
    SUPPRESS_FULLSCREEN_DEATH_FX = 299,
    /**
     * 后结算伤害护盾（未知）
     * @function MODIFIER_PROPERTY_INCOMING_DAMAGE_CONSTANT_POST
     * @lua不可用
     */
    INCOMING_DAMAGE_CONSTANT_POST = 300,
    /**
     * 特殊百分比总攻击调整（例：窒碍短匕）
     * @function GetModifierDamageOutgoing_PercentageMultiplicative
     * @lua不可用
     */
    DAMAGEOUTGOING_PERCENTAGE_MULTIPLICATIVE = 301,
    /**
     * 被动金钱倍率（例：贤者石）
     * @function GetModifierTickGold_Multiplier
     * @lua不可用
     */
    TICK_GOLD_MULTIPLIER = 302,
    /**
     * 特殊减速抗性（例：散华）
     * @function GEtModifierSlowResistance_Unique
     * @lua不可用
     */
    SLOW_RESISTANCE_UNIQUE = 303,
    /**
     * 减速抗性（例：神之力量）
     * @function GetModifierSlowResistance_Stacking
     * @both
     */
    SLOW_RESISTANCE_STACKING = 304,
    /**
     * 减速抗性影响攻速（例：不可逾越）
     * @function GetModifierSlowResistanceAppliesToAttacks
     * @lua不可用
     */
    SLOW_RESISTANCE_APPLIES_TO_ATTACKS = 305,
    /**
     * 百分比作用范围加成（例：凶）
     * @function GetModifierAoEBonusPercentage
     * @lua不可用
     */
    AOE_BONUS_PERCENTAGE = 306,
    /**
     * 区域百分比弹道速度（例：逆转时空）
     * @function GetModifierProjectileSpeed
     * @lua不可用
     */
    PROJECTILE_SPEED = 307,
    /**
     * 区域百分比目标弹道速度（未知）
     * @function GetModifierProjectileSpeedTarget
     * @lua不可用
     */
    PROJECTILE_SPEED_TARGET = 308,
    /**
     * 变为力量（例：潮落）
     * @function GetModifierBecomeStrength
     * @lua不可用
     */
    BECOME_STRENGTH = 309,
    /**
     * 变为敏捷（例：潮涨）
     * @function GetModifierBecomeAgility
     * @lua不可用
     */
    BECOME_AGILITY = 310,
    /**
     * 变为智力（未知）
     * @function GetModifierBecomeIntelligence
     * @lua不可用
     */
    BECOME_INTELLIGENCE = 311,
    /**
     * 变为全才（例：老版冥界亚龙天赋）
     * @function GetModifierBecomeUniversal
     * @lua不可用
     */
    BECOME_UNIVERSAL = 312,
    /**
     * 强制触发魔棒时（例：幽冥守卫）
     * @function OnForceProcMagicStick
     * @lua不可用
     */
    ON_FORCE_PROC_MAGIC_STICK = 313,
    /**
     * 生命移除时（例：回响之笼）
     * @function OnDamageHPLoss
     * @both
     */
    ON_DAMAGE_HPLOSS = 314,
    /**
     * 智慧神龛共享（例：古龙学者）
     * @function GetModifierShareXPRune
     * @both
     */
    SHARE_XPRUNE = 315,
    /**
     * 智慧神龛冷却时间覆盖（未知）
     * @function GetModifierXPFountainCountdownTimeOverride
     * @both
     */
    XP_FOUNTAIN_COUNTDOWN_TIME_OVERRIDE = 316,
    /**
     * 死亡无回城卷轴（例：先天基恩载具）
     * @function GetModifierNoFreeTPScrollOnDeath
     * @both
     */
    NO_FREE_TP_SCROLL_ON_DEATH = 317,
    /**
     * 额外中立物品选项（例：三只手）
     * @function GetModifierHasBonusNeutralItemChoice
     * @lua不可用
     */
    HAS_BONUS_NEUTRAL_ITEM_CHOICE = 318,
    /**
     * 额外中立物品附魔（例：基本法则锻造）
     * @function HasBonusNeutralItemPassive
     * @lua不可用
     */
    HAS_BONUS_NEUTRAL_ITEM_PASSIVE = 319,
    /**
     * 中立附魔累加（例：斯布恩的藏品）
     * @function GetModifierPreserveNeutralItemPassives
     * @lua不可用
     */
    PRESERVE_NEUTRAL_ITEM_PASSIVES = 320,
    /**
     * 最大生命值设定（例：坚毅之件）
     * @function GetModifierForceMaxHealth
     * @lua不可用
     */
    FORCE_MAX_HEALTH = 321,
    /**
     * 最大魔法值设定（例：血魔法）
     * @function GetModifierForceMaxMana
     * @lua不可用
     */
    FORCE_MAX_MANA = 322,
    /**
     * 特殊定值作用范围加成（例：缚灵索）
     * @function GetModifierAoEBonusConstant
     * @lua不可用
     */
    AOE_BONUS_CONSTANT = 323,
    /**
     * 定值作用范围加成（例：亵渎之力）
     * @function GetModifierAoEBonusConstantStacking
     * @both
     */
    AOE_BONUS_CONSTANT_STACKING = 324,
    /**
     * 在首端伤害格挡前时（例：永世法衣）
     * @function OnTakeDamagePostUnavoidableBlock
     * @lua不可用
     */
    ON_TAKEDAMAGE_POST_UNAVOIDABLE_BLOCK = 325,
    /**
     * 锁闭伤害技能时（例：闪烁匕首）
     * @function OnMuteDamageAbilities
     * @lua不可用
     */
    ON_MUTE_DAMAGE_ABILITIES = 326,
    /**
     * 不触发致命一击（例：老版英灵胸针）
     * @function GetSuppressCrit
     * @lua不可用
     */
    SUPPRESS_CRIT = 327,
    /**
     * 提供技能点数（例：曲线学习）
     * @function GetModifierAbilityPoints
     * @lua不可用
     */
    ABILITY_POINTS = 328,
    /**
     * 百分比买活惩罚（例：恶魔的交易）
     * @function GetModifierBuybackPenaltyPercent
     * @lua不可用
     */
    BUYBACK_PENALTY_PERCENT = 329,
    /**
     * 百分比出售价格增加（例：恶魔的交易）
     * @function GetModifierItemSellbackCost
     * @both
     */
    ITEM_SELLBACK_COST = 330,
    /**
     * 可拆分任意物品（例：拆东补西）
     * @function GetModifierDisassembleAnything
     * @both
     */
    DISASSEMBLE_ANYTHING = 331,
    /**
     * 固定魔法恢复（例：死亡充能）
     * @function GetModifierFixedManaRegen
     * @both
     */
    FIXED_MANA_REGEN = 332,
    /**
     * 上下坡落空概率加成（例：制高点）
     * @function GetModifierBonusUphillMissChance
     * @both
     */
    BONUS_UPHILL_MISS_CHANCE = 333,
    /**
     * 反补生命百分比调整（例：盛宴）
     * @function GetModifierCreepDenyPercent
     * @both
     */
    CREEP_DENY_PERCENT = 334,
    /**
     * 绝对攻速上限设定（未知）
     * @function GetModifierAttackSpeedAbsoluteMax
     * @both
     */
    ATTACKSPEED_ABSOLUTE_MAX = 335,
    /**
     * 更改视野阵营（例：热血运动）
     * @function GetModifierFoWTeam
     * @both
     */
    FOW_TEAM = 336,
    /**
     * 开始死亡时（例：驱邪护符）
     * @function OnHeroBeginDying
     * @both
     */
    ON_HERO_BEGIN_DYING = 337,
    /**
     * 疗伤莲花效果增强（例：赛莉蒙妮的信徒）
     * @function GetModifierBonusLotusHeal
     * @both
     */
    BONUS_LOTUS_HEAL = 338,
    /**
     * 百分比力量生命恢复增强（例：内在优势）
     * @function GetModifierBaseHpRegenPerStrBonusPercentage
     * @both
     */
    BASE_HP_REGEN_PER_STR_BONUS_PERCENTAGE = 339,
    /**
     * 百分比敏捷护甲增强（例：内在优势）
     * @function GetModifierBaseArmorPerAgiBonusPercentage
     * @both
     */
    BASE_ARMOR_PER_AGI_BONUS_PERCENTAGE = 340,
    /**
     * 百分比敏捷攻速增强（例：内在优势）
     * @function GetModifierBaseAttackSpeedPerAgiBonusPercentage
     * @both
     */
    BASE_ATTACKSPEED_PER_AGI_BONUS_PERCENTAGE = 341,
    /**
     * 百分比智力魔法恢复增强（例：内在优势）
     * @function GetModifierBaseManaRegenPerIntBonusPercentage
     * @both
     */
    BASE_MP_REGEN_PER_INT_BONUS_PERCENTAGE = 342,
    /**
     * 百分比智力魔法抗性增强（例：内在优势）
     * @function GetModifierBaseMagicResistPerIntBonusPercentage
     * @both
     */
    BASE_MRES_PER_INT_BONUS_PERCENTAGE = 343,
    /**
     * 进入白天时（例：辰星破晓）
     * @function OnDayStarted
     * @both
     */
    ON_DAY_STARTED = 344,
    /**
     * 进入夜晚时（例：固有增益）
     * @function OnNightStarted
     * @both
     */
    ON_NIGHT_STARTED = 345,
    /**
     * 额外幻象产生概率（例：混沌之军）
     * @function GetModifierCreateBonusIllusionChance
     * @both
     */
    CREATE_BONUS_ILLUSION_CHANCE = 346,
    /**
     * 额外幻象产生数量（例：混沌之军）
     * @function GetModifierCreateBonusIllusionCount
     * @both
     */
    CREATE_BONUS_ILLUSION_COUNT = 347,
    /**
     * 伪随机概率调整（例：天佑勇者）
     * @function GetModofierPropertyPseudoRandomBonus
     * @both
     */
    PSEUDORANDOM_BONUS = 348,
    /**
     * 攻击弹道交互高度增加（例：冰川）
     * @function GetModifierAttackHeightBonus
     * @both
     */
    ATTACK_HEIGHT_BONUS = 349,
    /**
     * 无视攻击间隔（未知）
     * @function GetSkipAttackRegulator
     * @both
     */
    SKIP_ATTACK_REGULATOR = 350,
    /**
     * 目标闪避（例：老版烟幕）
     * @function GetModifierMiss_Percentage_Target
     * @both
     */
    MISS_PERCENTAGE_TARGET = 351,
    /**
     * 额外掉落中立物品（例：丛林赠品）
     * @function GetModifierAdditionalNutralItemDrops
     * @both
     */
    ADDITIONAL_NEUTRAL_ITEM_DROPS = 352,
    /**
     * 额外百分比终结连杀金钱（例：职业猎人）
     * @function GetModifierKillStreakBonusGoldPercentage
     * @both
     */
    KILL_STREAK_BONUS_GOLD_PERCENTAGE = 353,
    /**
     * 生命恢复系数（例：无畏）
     * @function GetModifierHPRegenMultiplierPreAmplification
     * @both
     */
    HP_REGEN_MULTIPLIER_PRE_AMPLIFICATION = 354,
    /**
     * 命石覆盖（例：变形）
     * @function GetModifierHeroFacetOverride
     * @both
     */
    HEROFACET_OVERRIDE = 355,
    /**
     * 摧毁树木时（例：暴露疗法）
     * @function OnTreeCutDown
     * @both
     */
    ON_TREE_CUT_DOWN = 356,
    /**
     * 攻击分裂命中时（例：死亡之拳）
     * @function OnCleaveAttackLanded
     * @both
     */
    ON_CLEAVE_ATTACK_LANDED = 357,
    /**
     * 最低属性等级（例：虚空行者）
     * @function MinAttributeLevel
     * @both
     */
    MIN_ATTRIBUTE_LEVEL = 358,
    /**
     * 中立物品复制（例：英熊好礼）
     * @function GetTierTokenReroll
     * @lua不可用
     */
    TIER_TOKEN_REROLL = 359,
    /**
     * 视野角度限制（例：红光满面）
     * @function GetVisionDegreeRestriction
     * @both
     */
    VISION_DEGREES_RESTRICTION = 360,
    /**
     * 叠加末端伤害格挡（例：幽灵船）
     * @function GetModifierTotal_ConstantBlockStacking
     * @both
     */
    TOTAL_CONSTANT_BLOCK_STACKING = 361,
    /**
     * 物品栏限制（例：熊亦求精）
     * @function GetModifierInventorySlotRestricted
     * @both
     */
    INVENTORY_SLOT_RESTRICTED = 362,
    /**
     * 同步中立物品时（例：英熊好礼）
     * @function OnTierTokenRerolled
     * @lua不可用
     */
    ON_TIER_TOKEN_REROLLED = 363,
    /**
     * 技能共享（例：缚魂）
     * @function GetRedirectSpell
     * @both
     */
    REDIRECT_SPELL = 364,
    /**
     * 活跃基础攻击力（例：灵幻兵械）
     * @function GetBaseAttackPostBonus
     * @both
     */
    BASEATTACK_POSTBONUS = 365,
    /**
     * 视野所属阵营改变时（例：真实视域）
     * @function OnFoWTeamChanged
     * @both
     */
    ON_FOW_TEAM_CHANGED = 366,
    /**
     * 攻击不触发特效（未知）
     * @function GetSuppressAttackProcs
     * @both
     */
    SUPPRESS_ATTACK_PROCS = 367,
    /**
     * 切换开关技能时（例：熊亦求精）
     * @function OnAbilityToggled
     * @both
     */
    ON_ABILITY_TOGGLED = 368,
    /**
     * 被攻击不触发特效（例：翔影之钗）
     * @function GetModifierAvoidAttackProcs
     * @both
     */
    AVOID_ATTACK_PROCS = 369,
    /**
     * 神符产生时（例：磁场）
     * @function OnRuneSpawn
     * @both
     */
    ON_RUNE_SPAWN = 370,
    /**
     * 攻击吸血（例：撒旦之邪力）
     * @function GetModifierProperty_PhysicalLifesteal
     * @both
     */
    PHYSICAL_LIFESTEAL = 371,
    /**
     * 技能吸血（例：血精石）
     * @function GetModifierProperty_MagicalLifesteal
     * @both
     */
    MAGICAL_LIFESTEAL = 372,
    /**
     * 造成纯粹伤害时（例：束手束脚）
     * @function OnPureDamageCalculated
     * @both
     */
    ON_PURE_DAMAGE_CALCULATED = 373,
    /**
     * 提前打造中立物品（例：基本法则锻造）
     * @function GetModifierNeutralTrinketOptions
     * @lua不可用
     */
    NEUTRAL_TRINKET_OPTIONS = 374,
    /**
     * 选择中立附魔时（未知）
     * @function GetModifierNeutralEnhancementOptions
     * @lua不可用
     */
    NEUTRAL_ENHANCEMENT_OPTIONS = 375,
    /**
     * 定值标准移速上限（例：奔流湍急）
     * @function GetModifierMoveSpeedMax_BonusConstant
     * @both
     */
    MOVESPEED_MAX_BONUS_CONSTANT = 376,
    /**
     * 后移速调整定值移速（例：奔流湍急）
     * @function GetModifierMoveSpeedPostMultiplierBonus_Constant
     * @both
     */
    MOVESPEED_POST_MULTIPLIER_BONUS_CONSTANT = 377,
    /**
     * 禁止产生幻象（未知）
     * @function GetModifierPropertyForbidIllusions
     * @both
     */
    FORBID_ILLUSIONS = 378,
    /**
     * 魔法消耗覆盖（未知）
     * @function GetModifierPropertyManacostOverride
     * @both
     */
    MANACOST_OVERRIDE = 379,
    /**
     * 生命回复调整（例：斯嘉蒂之眼）
     * @function GetModifierPropertyRestorationAmplification
     * @both
     */
    RESTORATION_AMPLIFICATION = 380,
    /**
     * 特殊生命回复调整（例：散华）
     * @function GetModifierPropertyRestorationAmplificationUnique
     * @both
     */
    RESTORATION_AMPLIFICATION_UNIQUE = 381,
    /**
     * 特殊施加方治疗调整（例：慧光）
     * @function GetModifierPropertyHealingAmplificationUnique
     * @both
     */
    HEAL_AMPLIFY_PERCENTAGE_SOURCE_UNIQUE = 382,
    /**
     * 获取生命转移（例：克莱拉牧杖）
     * @function GetModifierPropertyRedirectHealthGain
     * @both
     */
    REDIRECT_HEALTH_GAIN = 383,
    /**
     * 免受致命一击攻击（未知）
     * @function GetSuppressIncomingCrit
     * @both
     */
    SUPPRESS_INCOMING_CRIT = 384,
    /**
     * 中立物品升级（例：休眠珍品）
     * @function GetModifierPropertyUpgradeNeutralArtifacts
     * @both
     */
    UPGRADE_NEUTRAL_ARTIFACTS = 385,
    /**
     * 忽略无效攻击移动指令（例：决斗）
     * @function GetModifierPropertySuppressInvalidMoveAttackOrders
     * @both
     */
    SUPPRESS_INVALID_MOVE_ATTACK_ORDERS = 386,
    /**
     * 消耗品加速（例：源泉）
     * @function GetModifierPropertyConsumableUseSpeed
     * @both
     */
    CONSUMABLE_USE_SPEED = 387,
    /**
     * 首次学习等级调整（例：曲线学习）
     * @function GetRequiredLevel
     * @both
     */
    REQUIRED_LEVEL = 388,
    /**
     * 刷新modifier时（例：安可）
     * @function OnModifierRefreshed
     * @both
     */
    ON_MODIFIER_REFRESHED = 389,
    /**
     * 交换技能时（例：两栖狂想曲）
     * @function OnAbilitySwapped
     * @both
     */
    ON_ABILITY_SWAPPED = 390,
    /**
     * 小兵击杀金钱覆盖（例：加重骰子）
     * @function GetModifierOverrideCreepBounty
     * @both
     */
    OVERRIDE_CREEP_BOUNTY = 391,
    /**
     * 基础攻击力覆盖（例：加重骰子）
     * @function GetModifierOverrideBaseDamage
     * @both
     */
    OVERRIDE_BASE_DAMAGE = 392,
    /**
     * 无法被取对象（例：热血竞技场）
     * @function GetModifierOverrideUntargetableFrom
     * @both
     */
    UNTARGETABLE_FROM = 393,
    /**
     * 无法指定对象（例：热血竞技场）
     * @function GetModifierOverrideUntargetableTo
     * @both
     */
    UNTARGETABLE_TO = 394,
    /**
     * 可触发物品幻象（例：复仇光环）
     * @function GetModifierSuperIllusionWithItems
     * @both
     */
    SUPER_ILLUSION_WITH_ITEMS = 395,
    /**
     * 驱散时（例：恶性瘟疫）
     * @function OnPurged
     * @both
     */
    ON_PURGE = 396,
    /**
     * 幻象生成时（例：混沌之军）
     * @function OnIllusionCreated
     * @both
     */
    ON_ILLUSION_CREATED = 397,
    /**
     * 英雄等级体积（未知）
     * @function GetModifierHeroLevelScale
     * @both
     */
    HEROLEVELSCALE = 398,
    INVALID = 65535,
}

/**
 * 终止占位（默认）
 */
declare const MODIFIER_STATE_LAST: 64;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type modifierstate = ModifierState;

declare enum ModifierState {
    /**
     * 缠绕（例：冰封禁制）
     */ ROOTED = 0,
    /**
     * 缴械（例：超震声波）
     */
    DISARMED = 1,
    /**
     * 攻击免疫（例：幽魂权杖）
     */
    ATTACK_IMMUNE = 2,
    /**
     * 沉默（例：全领域静默）
     */
    SILENCED = 3,
    /**
     * 锁闭（例：神杖静态风暴）
     */
    MUTED = 4,
    /**
     * 眩晕（例：魔法箭）
     */
    STUNNED = 5,
    /**
     * 妖术（例：邪恶镰刀）
     */
    HEXED = 6,
    /**
     * 隐身（例：暗影步）
     */
    INVISIBLE = 7,
    /**
     * 无敌（例：海妖之歌）
     */
    INVULNERABLE = 8,
    /**
     * 技能免疫（例：技能免疫）
     */
    MAGIC_IMMUNE = 9,
    /**
     * 共享视野（例：静电连接）
     */
    PROVIDES_VISION = 10,
    /**
     * 睡眠（例：噩梦）
     */
    NIGHTMARED = 11,
    /**
     * 禁用物理伤害格挡（未知）
     */
    BLOCK_DISABLED = 12,
    /**
     * 禁用闪避（未知）
     */
    EVADE_DISABLED = 13,
    /**
     * 无法选中（例：无影拳）
     */
    UNSELECTABLE = 14,
    /**
     * 无法指定敌方目标（未知）
     */
    CANNOT_TARGET_ENEMIES = 15,
    /**
     * 无法指定建筑目标（例：越界）
     */
    CANNOT_TARGET_BUILDINGS = 16,
    /**
     * 克敌机先（例：复仇）
     */
    CANNOT_MISS = 17,
    /**
     * 可被反补（例：瘴气）
     */
    SPECIALLY_DENIABLE = 18,
    /**
     * 动作冻结（例：急速冷却）
     */
    FROZEN = 19,
    /**
     * 无法行动（例：巫毒变身术）
     */
    COMMAND_RESTRICTED = 20,
    /**
     * 隐藏小地图图标（例：虫群）
     */
    NOT_ON_MINIMAP = 21,
    /**
     * 低攻击优先级（例：七十二变）
     */
    LOW_ATTACK_PRIORITY = 22,
    /**
     * 隐藏单位生命条（例：信使护盾）
     */
    NO_HEALTH_BAR = 23,
    /**
     * 对敌隐藏单位生命条（例：魅影无形）
     */
    NO_HEALTH_BAR_FOR_ENEMIES = 24,
    /**
     * 对其他玩家隐藏生命条（例：虚无投影）
     */
    NO_HEALTH_BAR_FOR_OTHER_PLAYERS = 25,
    /**
     * 飞行（例：黑暗飞升）
     */
    FLYING = 26,
    /**
     * 相位状态（例：守卫冲刺）
     */
    NO_UNIT_COLLISION = 27,
    /**
     * 无法作为跟随目标（例：幻影之拥）
     */
    NO_TEAM_MOVE_TO = 28,
    /**
     * 选择组忽略置入（例：幻影之拥）
     */
    NO_TEAM_SELECT = 29,
    /**
     * 破坏（例：蝮蛇突袭）
     */
    PASSIVES_DISABLED = 30,
    /**
     * 被支配标记（例：支配头盔）
     */
    DOMINATED = 31,
    /**
     * 失去视野（例：诱敌奇术）
     */
    BLIND = 32,
    /**
     * 隐藏（例：崩裂禁锢）
     */
    OUT_OF_GAME = 33,
    /**
     * 虚拟友方（例：感染）
     */
    FAKE_ALLY = 34,
    /**
     * 无视地形状态（例：幽鬼之刃）
     */
    FLYING_FOR_PATHING_PURPOSES_ONLY = 35,
    /**
     * 真实视域免疫（例：暗影之舞）
     */
    TRUESIGHT_IMMUNE = 36,
    /**
     * 不取对象（例：便车）
     */
    UNTARGETABLE = 37,
    /**
     * 友方不取对象（例：魔晶烟幕）
     */
    UNTARGETABLE_ALLIED = 38,
    /**
     * 敌方不取对象（例：暗影之境）
     */
    UNTARGETABLE_ENEMY = 39,
    /**
     * 自身不取对象（未知）
     */
    UNTARGETABLE_SELF = 40,
    /**
     * 无法执行移动攻击（例：掘地）
     */
    IGNORING_MOVE_AND_ATTACK_ORDERS = 41,
    /**
     * 树木穿行（例：自然蔽护）
     */
    ALLOW_PATHING_THROUGH_TREES = 42,
    /**
     * 对敌隐藏小地图图标（例：魅影无形）
     */
    NOT_ON_MINIMAP_FOR_ENEMIES = 43,
    /**
     * 无视减速（例：弹无虚发）
     */
    UNSLOWABLE = 44,
    /**
     * 束缚（例：突袭）
     */
    TETHERED = 45,
    /**
     * 无法执行停止命令（例：星破天惊）
     */
    IGNORING_STOP_ORDERS = 46,
    /**
     * 恐惧（例：恐吓）
     */
    FEARED = 47,
    /**
     * 嘲讽（例：狂战士的怒吼）
     */
    TAUNTED = 48,
    /**
     * 强制位移免疫（例：捶）
     */
    CANNOT_BE_MOTION_CONTROLLED = 49,
    /**
     * 飞行视野（例：喷气背包）
     */
    FORCED_FLYING_VISION = 50,
    /**
     * 可攻击友方（未知）
     */
    ATTACK_ALLIES = 51,
    /**
     * 仅无视地形（未知）
     */
    ALLOW_PATHING_THROUGH_CLIFFS = 52,
    /**
     * 无视能量齿轮（例：能量齿轮）
     */
    ALLOW_PATHING_THROUGH_POWER_COGS = 53,
    /**
     * 无法被反补（未知）
     */
    SPECIALLY_UNDENIABLE = 54,
    /**
     * 无视特殊地形（例：机器人挑战）
     */
    ALLOW_PATHING_THROUGH_OBSTRUCTIONS = 55,
    /**
     * 减益免疫（例：剑刃风暴）
     */
    DEBUFF_IMMUNE = 56,
    /**
     * 穿越守护者之门（例：守护者之门）
     */
    ALLOW_PATHING_THROUGH_BASE_BLOCKER = 57,
    /**
     * 无法执行移动命令（例：诱敌奇术）
     */
    IGNORING_MOVE_ORDERS = 58,
    /**
     * 远程近战结算（例：灵魂打击）
     */
    ATTACKS_ARE_MELEE = 59,
    /**
     * 完全启动背包（例：老版斯布恩的藏品）
     */
    CAN_USE_BACKPACK_ITEMS = 60,
    /**
     * 持续施法期间施法（例：湮灭专家）
     */
    CASTS_IGNORE_CHANNELING = 61,
    /**
     * 攻击不曝露（例：吉利服）
     */
    ATTACKS_DONT_REVEAL = 62,
    /**
     * 无野怪仇恨（例：丛林之舞）
     */
    NEUTRALS_DONT_ATTACK = 63,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAModifierAttribute_t = ModifierAttribute;

declare enum ModifierAttribute {
    /**
     * 无特殊属性（默认）
     */ NONE = 0,
    /**
     * 永久状态（例：冰）
     */
    PERMANENT = 1,
    /**
     * 独立结算（例：沸血之矛）
     */
    MULTIPLE = 2,
    /**
     * 可对无敌单位生效（例：衰退光环）
     */
    IGNORE_INVULNERABLE = 4,
    /**
     * 光环优先级（未知）
     */
    AURA_PRIORITY = 8,
    /**
     * 忽略躲避（未知）
     */
    IGNORE_DODGE = 16,
    /**
     * 可被复制（未知）
     */
    DUPLICATED = 32,
}

declare enum Attributes {
    /**
     * 力量
     */ STRENGTH = 0,
    /**
     * 敏捷
     */
    AGILITY = 1,
    /**
     * 智力
     */
    INTELLECT = 2,
    /**
     * 全才
     */
    ALL = 3,
    /**
     * 上限占位
     */
    MAX = 4,
    /**
     * 无效占位
     */
    INVALID = -1,
}

/**
 * 上限占位
 */
declare const MAX_PATTACH_TYPES: 16;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type ParticleAttachment_t = ParticleAttachment;

declare enum ParticleAttachment {
    /**
     * 无效占位
     */ INVALID = -1,
    /**
     * 附着在实体原点
     */
    ABSORIGIN = 0,
    /**
     * 跟随实体原点附着
     */
    ABSORIGIN_FOLLOW = 1,
    /**
     * 附着在自定义坐标
     */
    CUSTOMORIGIN = 2,
    /**
     * 跟随自定义坐标附着
     */
    CUSTOMORIGIN_FOLLOW = 3,
    /**
     * 附着在实体的特定模型点
     */
    POINT = 4,
    /**
     * 跟随实体的特定模型点
     */
    POINT_FOLLOW = 5,
    /**
     * 附着并跟随眼睛位置
     */
    EYES_FOLLOW = 6,
    /**
     * 跟随头顶附着
     */
    OVERHEAD_FOLLOW = 7,
    /**
     * 附着在世界坐标原点
     */
    WORLDORIGIN = 8,
    /**
     * 跟随根骨骼附着
     */
    ROOTBONE_FOLLOW = 9,
    /**
     * 跟随渲染坐标原点附着
     */
    RENDERORIGIN_FOLLOW = 10,
    /**
     * 附着在主视角摄像机
     */
    MAIN_VIEW = 11,
    /**
     * 附着在水面波纹
     */
    WATERWAKE = 12,
    /**
     * 跟随实体中心点附着
     */
    CENTER_FOLLOW = 13,
    /**
     * 附着在自定义游戏状态点
     */
    CUSTOM_GAME_STATE_1 = 14,
    /**
     * 附着在生命条
     */
    HEALTHBAR = 15,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_MOTION_CONTROLLER_PRIORITY = MotionControllerPriority;

declare enum MotionControllerPriority {
    /**
     * 最低运动优先级
     */ LOWEST = 0,
    /**
     * 低运动优先级
     */
    LOW = 1,
    /**
     * 中运动优先级
     */
    MEDIUM = 2,
    /**
     * 高运动优先级
     */
    HIGH = 3,
    /**
     * 极高运动优先级
     */
    HIGHEST = 4,
    /**
     * 最高运动优先级
     */
    ULTRA = 5,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTASpeechType_t = SpeechType;

declare enum SpeechType {
    /**
     * 无效占位
     */ USER_INVALID = 0,
    /**
     * 仅对单一玩家
     */
    USER_SINGLE = 1,
    /**
     * 对当前阵营玩家
     */
    USER_TEAM = 2,
    /**
     * 对当前阵营附近玩家
     */
    USER_TEAM_NEARBY = 3,
    /**
     * 对所有阵营附近玩家
     */
    USER_NEARBY = 4,
    /**
     * 对所有玩家
     */
    USER_ALL = 5,
    /**
     * 对天辉玩家
     */
    GOOD_TEAM = 6,
    /**
     * 对夜魇玩家
     */
    BAD_TEAM = 7,
    /**
     * 对观战者
     */
    SPECTATOR = 8,
    /**
     * 对除观战者之外的玩家
     */
    USER_TEAM_NOSPECTATOR = 9,
    /**
     * 上限占位
     */
    RECIPIENT_TYPE_MAX = 10,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAAbilitySpeakTrigger_t = AbilitySpeakTrigger;

declare enum AbilitySpeakTrigger {
    /**
     * 前摇开始时触发语音
     */ START_ACTION_PHASE = 0,
    /**
     * 施法完成时触发语音
     */
    CAST = 1,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DotaCustomUIType_t = CustomUiType;

declare enum CustomUiType {
    HUD = 0,
    HERO_SELECTION = 1,
    PREGAME_STRATEGY = 2,
    GAME_INFO = 3,
    GAME_SETUP = 4,
    FLYOUT_SCOREBOARD = 5,
    HUD_TOP_BAR = 6,
    END_SCREEN = 7,
    COUNT = 8,
    INVALID = -1,
}

/**
 * 计数占位
 */
declare const DOTA_DEFAULT_UI_ELEMENT_COUNT: 32;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DotaDefaultUIElement_t = DefaultUiElement;

declare enum DefaultUiElement {
    /**
     * 无效占位
     */ INVALID = -1,
    /**
     * 昼夜时间条
     */
    TOP_TIMEOFDAY = 0,
    /**
     * 顶部英雄栏
     */
    TOP_HEROES = 1,
    /**
     * 顶部计分板
     */
    FLYOUT_SCOREBOARD = 2,
    /**
     * 单位面板
     */
    ACTION_PANEL = 3,
    /**
     * 小地图
     */
    ACTION_MINIMAP = 4,
    /**
     * 商店
     */
    INVENTORY_PANEL = 5,
    /**
     * 商店按钮
     */
    INVENTORY_SHOP = 6,
    /**
     * 物品栏
     */
    INVENTORY_ITEMS = 7,
    /**
     * 快速购买区域
     */
    INVENTORY_QUICKBUY = 8,
    /**
     * 信使界面
     */
    INVENTORY_COURIER = 9,
    /**
     * 物品保护
     */
    INVENTORY_PROTECT = 10,
    /**
     * 金钱
     */
    INVENTORY_GOLD = 11,
    /**
     * 推荐物品
     */
    SHOP_SUGGESTEDITEMS = 12,
    /**
     * 常用物品
     */
    SHOP_COMMONITEMS = 13,
    /**
     * 队伍名（选英雄时）
     */
    HERO_SELECTION_TEAMS = 14,
    /**
     * 游戏模式名（选英雄时）
     */
    HERO_SELECTION_GAME_NAME = 15,
    /**
     * 计时器（选英雄时）
     */
    HERO_SELECTION_CLOCK = 16,
    /**
     * 顶部信息（选英雄时）
     */
    HERO_SELECTION_HEADER = 17,
    /**
     * 左上角菜单栏
     */
    TOP_MENU_BUTTONS = 18,
    /**
     * 顶部栏背景
     */
    TOP_BAR_BACKGROUND = 19,
    /**
     * 天辉头像栏
     */
    TOP_BAR_RADIANT_TEAM = 20,
    /**
     * 夜魇头像栏
     */
    TOP_BAR_DIRE_TEAM = 21,
    /**
     * 顶部比分
     */
    TOP_BAR_SCORE = 22,
    /**
     * 结束结算
     */
    ENDGAME = 23,
    /**
     * 聊天框
     */
    ENDGAME_CHAT = 24,
    /**
     * 击杀助攻统计数据
     */
    QUICK_STATS = 25,
    /**
     * 战略布局信息
     */
    PREGAME_STRATEGYUI = 26,
    /**
     * 击杀镜头回放
     */
    KILLCAM = 27,
    /**
     * 战斗回顾
     */
    FIGHT_RECAP = 28,
    /**
     * 顶部栏总览
     */
    TOP_BAR = 29,
    /**
     * 自定义界面显示层
     */
    CUSTOMUI_BEHIND_HUD_ELEMENTS = 30,
    /**
     * 阿哈利姆迷宫指示界面
     */
    AGHANIMS_STATUS = 31,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type PlayerUltimateStateOrTime_t = PlayerUltimateStateOrTime;

declare enum PlayerUltimateStateOrTime {
    READY = 0,
    NO_MANA = -1,
    NOT_LEVELED = -2,
    HIDDEN = -3,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type PlayerOrderIssuer_t = PlayerOrderIssuer;

declare enum PlayerOrderIssuer {
    SELECTED_UNITS = 0,
    CURRENT_UNIT_ONLY = 1,
    HERO_ONLY = 2,
    PASSED_UNIT_ONLY = 3,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type OrderQueueBehavior_t = OrderQueueBehavior;

declare enum OrderQueueBehavior {
    DEFAULT = 0,
    NEVER = 1,
    ALWAYS = 2,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type CLICK_BEHAVIORS = ClickBehaviors;

declare enum ClickBehaviors {
    /**
     * 空白占位
     */ NONE = 0,
    /**
     * 移动点击行为
     */
    MOVE = 1,
    /**
     * 攻击点击行为
     */
    ATTACK = 2,
    /**
     * 施法点击行为
     */
    CAST = 3,
    /**
     * 丢弃物品点击行为
     */
    DROP_ITEM = 4,
    /**
     * 出售物品点击行为
     */
    DROP_SHOP_ITEM = 5,
    /**
     * 拖拽点击行为
     */
    DRAG = 6,
    /**
     * 学习技能点击行为
     */
    LEARN_ABILITY = 7,
    /**
     * 巡逻点击行为
     */
    PATROL = 8,
    /**
     * 矢量施法点击行为
     */
    VECTOR_CAST = 9,
    /**
     * 未使用点击行为
     */
    UNUSED = 10,
    /**
     * 雷达点击行为
     */
    RADAR = 11,
    /**
     * 终止占位
     */
    LAST = 12,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type AbilityLearnResult_t = AbilityLearnResult;

declare enum AbilityLearnResult {
    /**
     * 可升级
     */ CAN_BE_UPGRADED = 0,
    /**
     * 不可升级
     */
    CANNOT_BE_UPGRADED_NOT_UPGRADABLE = 1,
    /**
     * 已达到最大等级
     */
    CANNOT_BE_UPGRADED_AT_MAX = 2,
    /**
     * 升级需要更高等级
     */
    CANNOT_BE_UPGRADED_REQUIRES_LEVEL = 3,
    /**
     * 不可学习
     */
    NOT_LEARNABLE = 4,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAKeybindCommand_t = KeybindCommand;

declare enum KeybindCommand {
    KEYBIND_NONE = 0,
    KEYBIND_FIRST = 1,
    KEYBIND_CAMERA_UP = 1,
    KEYBIND_CAMERA_DOWN = 2,
    KEYBIND_CAMERA_LEFT = 3,
    KEYBIND_CAMERA_RIGHT = 4,
    KEYBIND_CAMERA_GRIP = 5,
    KEYBIND_CAMERA_YAW_GRIP = 6,
    KEYBIND_CAMERA_SAVED_POSITION_1 = 7,
    KEYBIND_CAMERA_SAVED_POSITION_2 = 8,
    KEYBIND_CAMERA_SAVED_POSITION_3 = 9,
    KEYBIND_CAMERA_SAVED_POSITION_4 = 10,
    KEYBIND_CAMERA_SAVED_POSITION_5 = 11,
    KEYBIND_CAMERA_SAVED_POSITION_6 = 12,
    KEYBIND_CAMERA_SAVED_POSITION_7 = 13,
    KEYBIND_CAMERA_SAVED_POSITION_8 = 14,
    KEYBIND_CAMERA_SAVED_POSITION_9 = 15,
    KEYBIND_CAMERA_SAVED_POSITION_10 = 16,
    KEYBIND_HERO_ATTACK = 17,
    KEYBIND_HERO_MOVE = 18,
    KEYBIND_HERO_MOVE_DIRECTION = 19,
    KEYBIND_PATROL = 20,
    KEYBIND_HERO_STOP = 21,
    KEYBIND_HERO_HOLD = 22,
    KEYBIND_HERO_SELECT = 23,
    KEYBIND_COURIER_SELECT = 24,
    KEYBIND_COURIER_DELIVER = 25,
    KEYBIND_COURIER_BURST = 26,
    KEYBIND_COURIER_SHIELD = 27,
    KEYBIND_PAUSE = 28,
    SELECT_ALL = 29,
    SELECT_ALL_OTHERS = 30,
    RECENT_EVENT = 31,
    KEYBIND_CHAT_TEAM = 32,
    KEYBIND_CHAT_GLOBAL = 33,
    KEYBIND_CHAT_TEAM_2 = 34,
    KEYBIND_CHAT_GLOBAL_2 = 35,
    KEYBIND_CHAT_VOICE_PARTY = 36,
    KEYBIND_CHAT_VOICE_TEAM = 37,
    KEYBIND_CHAT_WHEEL = 38,
    KEYBIND_CHAT_WHEEL_2 = 39,
    KEYBIND_CHAT_WHEEL_CARE = 40,
    KEYBIND_CHAT_WHEEL_BACK = 41,
    KEYBIND_CHAT_WHEEL_NEED_WARDS = 42,
    KEYBIND_CHAT_WHEEL_STUN = 43,
    KEYBIND_CHAT_WHEEL_HELP = 44,
    KEYBIND_CHAT_WHEEL_GET_PUSH = 45,
    KEYBIND_CHAT_WHEEL_GOOD_JOB = 46,
    KEYBIND_CHAT_WHEEL_MISSING = 47,
    KEYBIND_CHAT_WHEEL_MISSING_TOP = 48,
    KEYBIND_CHAT_WHEEL_MISSING_MIDDLE = 49,
    KEYBIND_CHAT_WHEEL_MISSING_BOTTOM = 50,
    KEYBIND_HERO_CHAT_WHEEL = 51,
    KEYBIND_SPRAY_WHEEL = 52,
    KEYBIND_ABILITY_PRIMARY_1 = 53,
    KEYBIND_ABILITY_PRIMARY_2 = 54,
    KEYBIND_ABILITY_PRIMARY_3 = 55,
    KEYBIND_ABILITY_SECONDARY_1 = 56,
    KEYBIND_ABILITY_SECONDARY_2 = 57,
    KEYBIND_ABILITY_ULTIMATE = 58,
    KEYBIND_TALENT_UPGRADE_LEFT = 59,
    KEYBIND_TALENT_UPGRADE_RIGHT = 60,
    KEYBIND_TALENT_UPGRADE_ATTRIBUTE = 61,
    KEYBIND_NEUTRAL_ITEM_SELECT_1 = 62,
    KEYBIND_NEUTRAL_ITEM_SELECT_2 = 63,
    KEYBIND_NEUTRAL_ITEM_SELECT_3 = 64,
    KEYBIND_NEUTRAL_ITEM_SELECT_4 = 65,
    KEYBIND_NEUTRAL_ITEM_SELECT_5 = 66,
    KEYBIND_ABILITY_PRIMARY_1_QUICKCAST = 67,
    KEYBIND_ABILITY_PRIMARY_2_QUICKCAST = 68,
    KEYBIND_ABILITY_PRIMARY_3_QUICKCAST = 69,
    KEYBIND_ABILITY_SECONDARY_1_QUICKCAST = 70,
    KEYBIND_ABILITY_SECONDARY_2_QUICKCAST = 71,
    KEYBIND_ABILITY_ULTIMATE_QUICKCAST = 72,
    KEYBIND_ABILITY_PRIMARY_1_EXPLICIT_AUTOCAST = 73,
    KEYBIND_ABILITY_PRIMARY_2_EXPLICIT_AUTOCAST = 74,
    KEYBIND_ABILITY_PRIMARY_3_EXPLICIT_AUTOCAST = 75,
    KEYBIND_ABILITY_SECONDARY_1_EXPLICIT_AUTOCAST = 76,
    KEYBIND_ABILITY_SECONDARY_2_EXPLICIT_AUTOCAST = 77,
    KEYBIND_ABILITY_ULTIMATE_EXPLICIT_AUTOCAST = 78,
    KEYBIND_ABILITY_PRIMARY_1_QUICKCAST_AUTOCAST = 79,
    KEYBIND_ABILITY_PRIMARY_2_QUICKCAST_AUTOCAST = 80,
    KEYBIND_ABILITY_PRIMARY_3_QUICKCAST_AUTOCAST = 81,
    KEYBIND_ABILITY_SECONDARY_1_QUICKCAST_AUTOCAST = 82,
    KEYBIND_ABILITY_SECONDARY_2_QUICKCAST_AUTOCAST = 83,
    KEYBIND_ABILITY_ULTIMATE_QUICKCAST_AUTOCAST = 84,
    KEYBIND_ABILITY_PRIMARY_1_AUTOMATIC_AUTOCAST = 85,
    KEYBIND_ABILITY_PRIMARY_2_AUTOMATIC_AUTOCAST = 86,
    KEYBIND_ABILITY_PRIMARY_3_AUTOMATIC_AUTOCAST = 87,
    KEYBIND_ABILITY_SECONDARY_1_AUTOMATIC_AUTOCAST = 88,
    KEYBIND_ABILITY_SECONDARY_2_AUTOMATIC_AUTOCAST = 89,
    KEYBIND_ABILITY_ULTIMATE_AUTOMATIC_AUTOCAST = 90,
    KEYBIND_INVENTORY_1 = 91,
    KEYBIND_INVENTORY_2 = 92,
    KEYBIND_INVENTORY_3 = 93,
    KEYBIND_INVENTORY_4 = 94,
    KEYBIND_INVENTORY_5 = 95,
    KEYBIND_INVENTORY_6 = 96,
    KEYBIND_INVENTORYTP = 97,
    KEYBIND_INVENTORYNEUTRAL = 98,
    KEYBIND_INVENTORY_1_QUICKCAST = 99,
    KEYBIND_INVENTORY_2_QUICKCAST = 100,
    KEYBIND_INVENTORY_3_QUICKCAST = 101,
    KEYBIND_INVENTORY_4_QUICKCAST = 102,
    KEYBIND_INVENTORY_5_QUICKCAST = 103,
    KEYBIND_INVENTORY_6_QUICKCAST = 104,
    KEYBIND_INVENTORYTP_QUICKCAST = 105,
    KEYBIND_INVENTORYNEUTRAL_QUICKCAST = 106,
    KEYBIND_INVENTORY_1_AUTOCAST = 107,
    KEYBIND_INVENTORY_2_AUTOCAST = 108,
    KEYBIND_INVENTORY_3_AUTOCAST = 109,
    KEYBIND_INVENTORY_4_AUTOCAST = 110,
    KEYBIND_INVENTORY_5_AUTOCAST = 111,
    KEYBIND_INVENTORY_6_AUTOCAST = 112,
    KEYBIND_INVENTORYTP_AUTOCAST = 113,
    KEYBIND_INVENTORYNEUTRAL_AUTOCAST = 114,
    KEYBIND_INVENTORY_1_QUICKAUTOCAST = 115,
    KEYBIND_INVENTORY_2_QUICKAUTOCAST = 116,
    KEYBIND_INVENTORY_3_QUICKAUTOCAST = 117,
    KEYBIND_INVENTORY_4_QUICKAUTOCAST = 118,
    KEYBIND_INVENTORY_5_QUICKAUTOCAST = 119,
    KEYBIND_INVENTORY_6_QUICKAUTOCAST = 120,
    KEYBIND_INVENTORYTP_QUICKAUTOCAST = 121,
    KEYBIND_INVENTORYNEUTRAL_QUICKAUTOCAST = 122,
    KEYBIND_CONTROL_GROUP_1 = 123,
    KEYBIND_CONTROL_GROUP_2 = 124,
    KEYBIND_CONTROL_GROUP_3 = 125,
    KEYBIND_CONTROL_GROUP_4 = 126,
    KEYBIND_CONTROL_GROUP_5 = 127,
    KEYBIND_CONTROL_GROUP_6 = 128,
    KEYBIND_CONTROL_GROUP_7 = 129,
    KEYBIND_CONTROL_GROUP_8 = 130,
    KEYBIND_CONTROL_GROUP_9 = 131,
    KEYBIND_CONTROL_GROUP_10 = 132,
    KEYBIND_CONTROL_GROUPCYCLE = 133,
    KEYBIND_SELECT_ALLY_1 = 134,
    KEYBIND_SELECT_ALLY_2 = 135,
    KEYBIND_SELECT_ALLY_3 = 136,
    KEYBIND_SELECT_ALLY_4 = 137,
    KEYBIND_SELECT_ALLY_5 = 138,
    KEYBIND_SHOP_TOGGLE = 139,
    KEYBIND_SCOREBOARD_TOGGLE = 140,
    KEYBIND_COMBATLOG_TOGGLE = 141,
    KEYBIND_SCREENSHOT = 142,
    KEYBIND_ESCAPE = 143,
    KEYBIND_CONSOLE = 144,
    KEYBIND_DEATH_SUMMARY = 145,
    KEYBIND_LEARN_ABILITIES = 146,
    KEYBIND_LEARN_STATS = 147,
    KEYBIND_ACTIVATE_GLYPH = 148,
    KEYBIND_ACTIVATE_RADAR = 149,
    KEYBIND_PURCHASE_QUICKBUY = 150,
    KEYBIND_PURCHASE_STICKY = 151,
    KEYBIND_TOGGLE_BUYBACK_PROTECTION = 152,
    KEYBIND_GRAB_STASH_ITEMS = 153,
    KEYBIND_TOGGLE_AUTOATTACK = 154,
    KEYBIND_TOGGLE_OVERLAYMAP = 155,
    KEYBIND_OVERLAYMAP_INPUTKEY = 156,
    KEYBIND_FILTER_ENEMY = 157,
    KEYBIND_FILTER_ALLY = 158,
    KEYBIND_FILTER_HERO = 159,
    KEYBIND_FILTER_NONHERO = 160,
    KEYBIND_TAUNT = 161,
    KEYBIND_SHOP_CONSUMABLES = 162,
    KEYBIND_SHOP_ATTRIBUTES = 163,
    KEYBIND_SHOP_ARMAMENTS = 164,
    KEYBIND_SHOP_ARCANE = 165,
    KEYBIND_SHOP_BASICS = 166,
    KEYBIND_SHOP_SUPPORT = 167,
    KEYBIND_SHOP_CASTER = 168,
    KEYBIND_SHOP_WEAPONS = 169,
    KEYBIND_SHOP_ARMOR = 170,
    KEYBIND_SHOP_ARTIFACTS = 171,
    KEYBIND_SHOP_SIDE_PAGE_1 = 172,
    KEYBIND_SHOP_SIDE_PAGE_2 = 173,
    KEYBIND_SHOP_SECRET = 174,
    KEYBIND_SHOP_SEARCHBOX = 175,
    KEYBIND_SHOP_SLOT_1 = 176,
    KEYBIND_SHOP_SLOT_2 = 177,
    KEYBIND_SHOP_SLOT_3 = 178,
    KEYBIND_SHOP_SLOT_4 = 179,
    KEYBIND_SHOP_SLOT_5 = 180,
    KEYBIND_SHOP_SLOT_6 = 181,
    KEYBIND_SHOP_SLOT_7 = 182,
    KEYBIND_SHOP_SLOT_8 = 183,
    KEYBIND_SHOP_SLOT_9 = 184,
    KEYBIND_SHOP_SLOT_10 = 185,
    KEYBIND_SHOP_SLOT_11 = 186,
    KEYBIND_SHOP_SLOT_12 = 187,
    KEYBIND_SHOP_SLOT_13 = 188,
    KEYBIND_SHOP_SLOT_14 = 189,
    KEYBIND_SPEC_CAMERA_UP = 190,
    KEYBIND_SPEC_CAMERA_DOWN = 191,
    KEYBIND_SPEC_CAMERA_LEFT = 192,
    KEYBIND_SPEC_CAMERA_RIGHT = 193,
    KEYBIND_SPEC_CAMERA_GRIP = 194,
    KEYBIND_SPEC_CAMERA_SAVED_POSITION_1 = 195,
    KEYBIND_SPEC_CAMERA_SAVED_POSITION_2 = 196,
    KEYBIND_SPEC_CAMERA_SAVED_POSITION_3 = 197,
    KEYBIND_SPEC_CAMERA_SAVED_POSITION_4 = 198,
    KEYBIND_SPEC_CAMERA_SAVED_POSITION_5 = 199,
    KEYBIND_SPEC_CAMERA_SAVED_POSITION_6 = 200,
    KEYBIND_SPEC_CAMERA_SAVED_POSITION_7 = 201,
    KEYBIND_SPEC_CAMERA_SAVED_POSITION_8 = 202,
    KEYBIND_SPEC_CAMERA_SAVED_POSITION_9 = 203,
    KEYBIND_SPEC_CAMERA_SAVED_POSITION_10 = 204,
    KEYBIND_SPEC_UNIT_SELECT = 205,
    KEYBIND_SPEC_HERO_SELECT = 206,
    KEYBIND_SPEC_PAUSE = 207,
    KEYBIND_SPEC_CHAT = 208,
    KEYBIND_SPEC_SCOREBOARD = 209,
    KEYBIND_SPEC_INCREASE_REPLAY_SPEED = 210,
    KEYBIND_SPEC_DECREASE_REPLAY_SPEED = 211,
    KEYBIND_SPEC_STATS_ITEM = 212,
    KEYBIND_SPEC_STATS_GOLD = 213,
    KEYBIND_SPEC_STATS_XP = 214,
    KEYBIND_SPEC_STATS_FANTASY = 215,
    KEYBIND_SPEC_STATS_WINCHANCE = 216,
    KEYBIND_SPEC_FOW_TOGGLEBOTH = 217,
    KEYBIND_SPEC_FOW_TOGGLERADIENT = 218,
    KEYBIND_SPEC_FOW_TOGGLEDIRE = 219,
    KEYBIND_SPEC_OPEN_BROADCASTER_MENU = 220,
    KEYBIND_SPEC_DROPDOWN_KDA = 221,
    KEYBIND_SPEC_DROPDOWN_LASTHITS_DENIES = 222,
    KEYBIND_SPEC_DROPDOWN_LEVEL = 223,
    KEYBIND_SPEC_DROPDOWN_XP_PER_MIN = 224,
    KEYBIND_SPEC_DROPDOWN_GOLD = 225,
    KEYBIND_SPEC_DROPDOWN_TOTALGOLD = 226,
    KEYBIND_SPEC_DROPDOWN_GOLD_PER_MIN = 227,
    KEYBIND_SPEC_DROPDOWN_BUYBACK = 228,
    KEYBIND_SPEC_DROPDOWN_NETWORTH = 229,
    KEYBIND_SPEC_DROPDOWN_FANTASY = 230,
    KEYBIND_SPEC_DROPDOWN_SORT = 231,
    KEYBIND_SPEC_DROPDOWN_CLOSE = 232,
    KEYBIND_SPEC_FOCUS_PLAYER_1 = 233,
    KEYBIND_SPEC_FOCUS_PLAYER_2 = 234,
    KEYBIND_SPEC_FOCUS_PLAYER_3 = 235,
    KEYBIND_SPEC_FOCUS_PLAYER_4 = 236,
    KEYBIND_SPEC_FOCUS_PLAYER_5 = 237,
    KEYBIND_SPEC_FOCUS_PLAYER_6 = 238,
    KEYBIND_SPEC_FOCUS_PLAYER_7 = 239,
    KEYBIND_SPEC_FOCUS_PLAYER_8 = 240,
    KEYBIND_SPEC_FOCUS_PLAYER_9 = 241,
    KEYBIND_SPEC_FOCUS_PLAYER_10 = 242,
    KEYBIND_SPEC_COACH_VIEWTOGGLE = 243,
    KEYBIND_INSPECTHEROINWORLD = 244,
    KEYBIND_CAMERA_ZOOM_IN = 245,
    KEYBIND_CAMERA_ZOOM_OUT = 246,
    KEYBIND_CONTROL_GROUPCYCLEPREV = 247,
    KEYBIND_DOTA_ALT = 248,
    KEYBIND_DOTA_ALTERNATIVE_CAST_SWITCH = 249,
    KEYBIND_COUNT = 250,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_SHOP_TYPE = ShopType;

declare enum ShopType {
    /**
     * 基地商店
     */ HOME = 0,
    /**
     * 边路商店
     */
    SIDE = 1,
    /**
     * 神秘商店
     */
    SECRET = 2,
    /**
     * 地面商店
     */
    GROUND = 3,
    /**
     * 边路商店2
     */
    SIDE_2 = 4,
    /**
     * 神秘商店2
     */
    SECRET_2 = 5,
    /**
     * 自定义商店
     */
    CUSTOM = 6,
    /**
     * 中立商店
     */
    NEUTRALS = 7,
    /**
     * 空白占位
     */
    NONE = 8,
}
