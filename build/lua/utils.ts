import api from '@moddota/dota-data/files/vscripts/api';
import * as dom from 'dts-dom';
import _ from 'lodash';
import path from 'path';
import prettier from 'prettier';
import fs from 'fs';
import { get_modifier_comment, resolve_comment, wrapDescription } from '../common/utils';
import { applyApiOverride, overrides } from './overrides';

const wrapJsDoc = (start: string, description: string) =>
  `${start} ${wrapDescription(description, start.length + 1).trimStart()}`;

interface OverrideSpec {
  callback?: 'required' | 'optional';
  generics?: { name: string; extend?: string }[];
  args?: Record<string, unknown>;
  return?: string;
  description?: string;
}

let config_overrides: Record<string, OverrideSpec> | undefined;
function get_config_overrides(): Record<string, OverrideSpec> {
  if (config_overrides) return config_overrides;
  const config_path = path.resolve(__dirname, '../../config/api_overrides.json');
  if (!fs.existsSync(config_path)) {
    config_overrides = {};
    return config_overrides;
  }

  config_overrides = JSON.parse(fs.readFileSync(config_path, 'utf8')) as Record<
    string,
    OverrideSpec
  >;
  return config_overrides;
}

export function withDescription<T extends dom.DeclarationBase>(declaration: T, desc?: string) {
  if (desc != null) declaration.jsDocComment = wrapDescription(desc);
  return declaration;
}

const typeMap: Record<string, string> = {
  bool: 'boolean',
  byte: 'number',
  short: 'number',
  int: 'number',
  uint: 'number',
  long: 'number',
  float: 'number',
  double: 'number',
  ehandle: 'number',
  handle: 'object',
  table: 'object',
  variant: 'any',
  nil: 'undefined',
  Quaternion: 'never',
  Vector2D: 'never',
};

export function getType(types: api.Type[], includeUndefined: boolean, thisType?: string): dom.Type {
  const domTypes = types.flatMap<dom.Type>((type) => {
    if (type === 'nil' && !includeUndefined) return [];
    if (typeof type === 'string') return dom.create.namedTypeReference(typeMap[type] || type);

    switch (type.kind) {
      case 'literal':
        return dom.type.numberLiteral(type.value);

      case 'table': {
        const recordType: dom.NamedTypeReference = {
          kind: 'name',
          name: 'Record',
          typeArguments: [getType(type.key, true), getType(type.value, true)],
        };

        return _.isEqual(type.key, ['string']) || _.isEqual(type.key, ['int'])
          ? recordType
          : { kind: 'name', name: 'Partial', typeArguments: [recordType] };
      }

      case 'array':
        return dom.create.array(getType(type.types, true, thisType));

      case 'function':
        return getFunction(dom.create.functionType, '', type);
    }
  });

  // Deduplicate in case of unions mapped to the same value
  const uniqueTypes = _.uniqWith(domTypes, _.isEqual);
  return uniqueTypes.length === 1 ? uniqueTypes[0] : dom.create.union(uniqueTypes);
}

const typePredicates: Record<string, string> = {
  IsValidEntity: 'entity is CBaseEntity',
  IsMangoTree: 'entity is CBaseAnimatingActivity',
  TraceCollideable: 'query is TraceCollideableOutputs',
  TraceHull: 'query is TraceHullOutputs',
  TraceLine: 'query is TraceLineOutputs',
  'CBaseEntity.IsBaseNPC': 'this is CDOTA_BaseNPC',
  'CBaseEntity.IsPlayer': 'this is CDOTAPlayerController',
  'CDOTA_BaseNPC.IsBarracks': 'this is CDOTA_BaseNPC_Building',
  'CDOTA_BaseNPC.IsBuilding': 'this is CDOTA_BaseNPC_Building',
  'CDOTA_BaseNPC.IsClone': 'this is CDOTA_BaseNPC_Hero',
  'CDOTA_BaseNPC.IsCourier': 'this is CDOTA_Unit_Courier',
  'CDOTA_BaseNPC.IsCreature': 'this is CDOTA_BaseNPC_Creature',
  'CDOTA_BaseNPC.IsFort': 'this is CDOTA_BaseNPC_Building',
  'CDOTA_BaseNPC.IsHero': 'this is CDOTA_BaseNPC_Hero',
  'CDOTA_BaseNPC.IsRealHero': 'this is CDOTA_BaseNPC_Hero',
  'CDOTA_BaseNPC.IsShrine': 'this is CDOTA_BaseNPC_Building',
  'CDOTA_BaseNPC.IsTempestDouble': 'this is CDOTA_BaseNPC_Hero',
  'CDOTA_BaseNPC.IsTower': 'this is CDOTA_BaseNPC_Building',
  'CDOTA_PlayerResource.IsValidPlayer': 'playerId is PlayerID',
  'CDOTA_PlayerResource.IsValidPlayerID': 'playerId is PlayerID',
  'CDOTA_PlayerResource.IsValidTeamPlayer': 'playerId is PlayerID',
  'CDOTA_PlayerResource.IsValidTeamPlayerID': 'playerId is PlayerID',
  'CBaseEntity.IsPlayerController': 'this is CDOTAPlayerController',
  'CBaseEntity.IsPlayerPawn': 'this is CBasePlayerPawn',
  'CDOTA_Item.IsItem': 'this is CDOTA_Item',
  'CDOTABaseAbility.IsItem': 'this is CDOTA_Item',
  'ProjectileManager.IsValidProjectile': 'value is ProjectileID',
};

function getReturnType(identifier: string, types: api.Type[]): dom.Type {
  if (typePredicates[identifier]) {
    return dom.create.namedTypeReference(typePredicates[identifier]);
  }

  const domType = _.isEqual(types, ['nil']) ? dom.type.void : getType(types, true);

  if (identifier.includes('.On') && typeof domType === 'object' && domType.kind === 'union') {
    domType.members = domType.members.map((x) =>
      typeof x === 'object' && x.kind === 'name' && x.name === 'undefined' ? 'void' : x,
    );
  }

  return domType;
}

const parameterNamesMap: Record<string, string> = {
  default: 'defaultValue',
  function: 'func',
};

const functionsWithOptionalParameters = [
  'DeepPrintTable',
  'PrecacheUnitByNameAsync',
  'PrecacheUnitByNameSync',
  'Vector',
];
const getFunctionParameters = (identifier: string, parameters: api.FunctionParameter[]) =>
  parameters.map(({ name, types }) => {
    const isOptional =
      types.includes('nil') && functionsWithOptionalParameters.includes(identifier);

    return dom.create.parameter(
      // TODO: Make dom.ParameterFlags.Optional work on CallSignature nodes
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      (parameterNamesMap[name] ?? name) + (isOptional ? '?' : ''),
      getType(types, !isOptional, 'void'),
    );
  });

export interface CallableDeclaration extends dom.DeclarationBase {
  parameters: dom.Parameter[];
  returnType: dom.Type;
  typeParameters: dom.TypeParameter[];
}

const compatibilityOverloads = new Set([
  'CDOTA_BaseNPC.Kill',
  'CDOTA_PlayerResource.GetTeam',
  'CLogicRelay.Trigger',
]);

export function getFunction<T extends CallableDeclaration>(
  createType: (parameters: dom.Parameter[], returnType: dom.Type) => T,
  identifier: string,
  func: api.FunctionType | api.FunctionDeclaration,
  defaultAvailability: api.Availability = 'server',
  isAbstract = false,
): T[] {
  const comments: string[] = [];

  func.args
    .filter((x) => x.description != null)
    .forEach((x) =>
      comments.push(
        wrapJsDoc(
          `@param ${x.name}`,
          resolve_comment(identifier, `param:${x.name}`, x.description)!,
        ),
      ),
    );

  if (isAbstract) comments.push('@abstract');
  if ('deprecated' in func) {
    comments.push(
      wrapJsDoc('@deprecated', resolve_comment(identifier, 'deprecated', func.deprecated)!),
    );
  }

  const modifier_comment = get_modifier_comment(identifier);

  if (
    modifier_comment === undefined &&
    'available' in func &&
    func.available !== defaultAvailability
  ) {
    comments.push(`@${func.available}`);
  }

  const description_text = resolve_comment(
    identifier,
    'description',
    'description' in func ? func.description : undefined,
  );

  if (description_text) {
    if (comments.length > 0) comments.unshift('');
    comments.unshift(description_text);
  }

  const returnType = getReturnType(identifier, func.returns);
  const fn = createType(getFunctionParameters(identifier, func.args), returnType);
  fn.jsDocComment = comments.join('\n');

  const override = overrides[identifier];
  const file_override = get_config_overrides()[identifier] as any;
  const merged_override = file_override ?? override;
  const declarations: T[] =
    merged_override !== undefined ? applyApiOverride(fn, merged_override) : [fn];

  if (modifier_comment !== undefined) {
    for (const declaration of declarations) {
      const description = (declaration.jsDocComment || '')
        .replace(/^@(?:both|server|client|lua不可用)(?:[ \t].*)?(?:\r?\n|$)/gm, '')
        .trim();
      declaration.jsDocComment = [description, modifier_comment].filter(Boolean).join('\n');
    }
  }

  if (compatibilityOverloads.has(identifier)) {
    const compatibilityFn = createType([], dom.create.namedTypeReference('never'));
    compatibilityFn.jsDocComment =
      '@deprecated Added for compatibility with CBaseEntity. Invalid at the runtime.';
    declarations.push(compatibilityFn);
  }

  return declarations;
}

const prettierConfig: prettier.Options = {
  parser: 'typescript',
  ...prettier.resolveConfig.sync(
    path.resolve(__dirname, '../../packages/dota-lua-types/types/_.generated.d.ts'),
    { editorconfig: true },
  ),
};

export function emit(declarations: (dom.TopLevelDeclaration | string)[]) {
  const content = declarations
    .map((x) => dom.emit(x as any))
    .join('')
    .replace(/\r\n/g, '\n')
    .replace(/(?<=\s*)\/\*\*\n\s*\* @(\w+?)\n\s*\*\//g, '/** @$1 */');

  return prettier.format(
    `/** @noSelfInFile */
// @validateApiUsageDefault server

${content}`,
    prettierConfig,
  );
}
