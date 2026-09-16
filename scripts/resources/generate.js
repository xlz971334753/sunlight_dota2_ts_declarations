const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const { loadKeyValues, get, requireBlock, walk } = require('./keyvalues');

const SHOP_GROUPS = new Set([
  'consumables',
  'attributes',
  'weapons_armor',
  'misc',
  'basics',
  'support',
  'magics',
  'defense',
  'weapons',
  'artifacts',
]);

function localization(npcDirectory) {
  const tokens = new Map();
  for (const filename of ['dota_schinese.txt', 'abilities_schinese.txt']) {
    const fullPath = path.join(npcDirectory, 'localization', filename);
    const lang = requireBlock(loadKeyValues(fullPath), 'lang', fullPath);
    for (const [key, value] of requireBlock(lang, 'Tokens', fullPath)) {
      if (typeof value === 'string') tokens.set(key.toLowerCase().replace(/:n$/, ''), value);
    }
  }
  return tokens;
}

function buildRows(npcDirectory) {
  const heroesFile = path.join(npcDirectory, 'npc_heroes.txt');
  const heroes = requireBlock(loadKeyValues(heroesFile, npcDirectory), 'DOTAHeroes', heroesFile);
  const abilities = new Map();
  const facets = new Map();
  const validAbility = (name) =>
    typeof name === 'string' &&
    name &&
    !name.includes('generic_hidden') &&
    !name.includes('special_bonus');
  for (const [hero, data] of heroes) {
    if (!hero.startsWith('npc_dota_hero_') || hero === 'npc_dota_hero_base' || !Array.isArray(data))
      continue;
    walk(data, (key, value) => {
      if (/^Ability\d+$/.test(key) && validAbility(value) && !abilities.has(value))
        abilities.set(value, hero);
    });
    const facetData = get(data, 'Facets');
    if (Array.isArray(facetData))
      walk(facetData, (key, value) => {
        if (key === 'AbilityName' && validAbility(value) && !facets.has(value))
          facets.set(value, hero);
      });
  }
  const shopsFile = path.join(npcDirectory, 'shops.txt');
  const shops = requireBlock(loadKeyValues(shopsFile), 'dota_shops', shopsFile);
  const shopItems = new Set();
  for (const [group, entries] of shops) {
    if (SHOP_GROUPS.has(group) && Array.isArray(entries))
      walk(entries, (key, value) => {
        if (key === 'item' && typeof value === 'string' && value.startsWith('item_'))
          shopItems.add(value);
      });
  }
  const neutralFile = path.join(npcDirectory, 'neutral_items.txt');
  const neutrals = requireBlock(loadKeyValues(neutralFile), 'neutral_items', neutralFile);
  const neutralItems = new Set();
  walk(neutrals, (key) => {
    if (key.startsWith('item_')) neutralItems.add(key);
  });

  const tokens = localization(npcDirectory);
  const rows = [];
  for (const [token, translation] of tokens) {
    const prefix = 'dota_tooltip_ability_';
    if (!token.startsWith(prefix)) continue;
    const name = token.slice(prefix.length);
    const hero = facets.get(name) || abilities.get(name);
    if (hero) {
      const heroName = tokens.get(hero);
      if (!heroName) throw new Error(`英雄缺少中文名称：${hero}`);
      rows.push([hero, heroName, name, translation + (facets.has(name) ? ' (命石技能)' : '')]);
    } else if (shopItems.has(name)) {
      rows.push([name, '商店装备', name, translation]);
    } else if (neutralItems.has(name)) {
      rows.push([
        name,
        name.startsWith('item_enhancement') ? '中立装备附魔' : '中立生物装备',
        name,
        translation,
      ]);
    }
  }
  const missing = [
    ...new Set([...abilities.keys(), ...facets.keys(), ...shopItems, ...neutralItems]),
  ].filter((name) => !tokens.has(`dota_tooltip_ability_${name}`));
  if (!abilities.size || !shopItems.size || !neutralItems.size || !rows.length) {
    throw new Error('资源解析结果为空，拒绝覆盖现有结果。');
  }
  return { rows, missing };
}

function enumText(name, title, entries) {
  const lines = [...entries].map(([key, [value, description]]) => {
    const member = /^[a-zA-Z_$][\w$]*$/.test(key) ? key : JSON.stringify(key);
    const comment = description.replace(/\*\//g, '* /').replace(/[\r\n]+/g, ' ');
    return `/** ${comment} */\n${member} = ${JSON.stringify(value)},`;
  });
  return `/** ${title} */\ndeclare const enum ${name} {\n${lines.join('\n')}\n}\n`;
}

function renderDeclarations(rows) {
  const groups = Object.fromEntries(
    ['DotaAbility', 'DotaHero', 'DotaItem', 'NeutralItem', 'NeutralEnhancement'].map((key) => [
      key,
      new Map(),
    ]),
  );
  for (const [owner, category, name, title] of rows) {
    if (owner.startsWith('npc_dota_hero_')) {
      groups.DotaAbility.set(name, [name, title]);
      groups.DotaHero.set(owner.replace(/^npc_dota_hero_/, ''), [owner, category]);
    } else {
      const group = {
        商店装备: 'DotaItem',
        中立生物装备: 'NeutralItem',
        中立装备附魔: 'NeutralEnhancement',
      }[category];
      if (!group) throw new Error(`未知物品类型：${category}`);
      groups[group].set(name.replace(/^item_/, ''), [name, title]);
    }
  }
  if (
    !groups.DotaAbility.size ||
    !groups.DotaHero.size ||
    !groups.DotaItem.size ||
    !groups.NeutralItem.size
  ) {
    throw new Error('名称声明缺少必要分类，拒绝覆盖现有结果。');
  }
  let text =
    '/** 类型-英雄名的标准格式 */\ndeclare type HeroNameFormat = `npc_dota_hero${string}`;\n' +
    '/** 类型-物品名的标准格式 */\ndeclare type ItemNameFormat = `item_${string}`;\n' +
    '/** 类型-modifier名的标准格式 */\ndeclare type ModifierNameFormat = `modifier_${string}`;\n\n' +
    '/** 类型-技能名 */\ndeclare type AbilityName = DotaAbility | CustomAbility;\n' +
    '/** 类型-道具名 */\ndeclare type ItemName = ItemNameFormat & (DotaItem | CustomItem | NeutralItem);\n' +
    '/** 类型-英雄名 */\ndeclare type HeroName = HeroNameFormat & (DotaHero | CustomHero);\n' +
    '//自定义的道具、技能和英雄在这里定义。英雄名需要符合规范\n';
  for (const [name, title] of [
    ['CustomAbility', '自定义的技能'],
    ['CustomHero', '自定义的英雄'],
    ['CustomItem', '自定义的道具'],
  ]) {
    text += enumText(name, title, new Map());
  }
  for (const [name, title] of [
    ['DotaAbility', 'Dota原生技能'],
    ['DotaHero', 'Dota原生英雄'],
    ['DotaItem', 'Dota原生道具'],
    ['NeutralItem', 'Dota中立道具'],
    ['NeutralEnhancement', 'Dota中立道具附魔'],
  ])
    text += enumText(name, title, groups[name]);
  return {
    text,
    counts: Object.fromEntries(Object.entries(groups).map(([key, value]) => [key, value.size])),
  };
}

function csvField(value) {
  return /[,"\r\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
}

async function generate(outputDirectory, projectRoot) {
  const { rows, missing } = buildRows(path.join(outputDirectory, 'npc'));
  const { text, counts } = renderDeclarations(rows);
  const filename = path.join(outputDirectory, '_NameDeclarations.d.ts');
  const options = await prettier.resolveConfig(
    path.join(projectRoot, 'output/_NameDeclarations.d.ts'),
  );
  fs.writeFileSync(filename, await prettier.format(text, { ...options, parser: 'typescript' }));
  fs.writeFileSync(
    path.join(outputDirectory, 'dota2_ability_map.txt'),
    rows.map((row) => row.map(csvField).join(',')).join('\n') + '\n',
  );
  return { ...counts, rows: rows.length, missingLocalization: missing };
}

module.exports = { buildRows, renderDeclarations, csvField, generate };
