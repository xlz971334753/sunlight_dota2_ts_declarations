# Types changelog

- Added: 2
- Removed: 0
- Changed: 0
- Unchanged: 4937

## Added
- `interface:CDOTA_Modifier_Lua#method:AddCustomTransmitterData`
- `interface:CDOTA_Modifier_Lua#method:HandleCustomTransmitterData`


## 2026-08-06 14:53:37

- Added: 0
- Removed: 0
- Changed: 1
- Unchanged: 4938

## Changed
- `interface:CDOTA_Modifier_Lua#method:GetRedirectSpell`
  - before: `GetRedirectSpell(): void`
  - after:  `GetRedirectSpell(event: ModifierAbilityEvent): 0 | 1`

## 2026-08-06 15:00:14

- Added: 0
- Removed: 0
- Changed: 1
- Unchanged: 4938

## Changed
- `interface:CDOTA_Modifier_Lua#method:GetRedirectSpell`
  - before: `GetRedirectSpell(event: ModifierAbilityEvent): 0 | 1`
  - after:  `GetRedirectSpell(event?: ModifierAbilityEvent): 0 | 1`


## 2026-09-30 14:30:30

- Added: 0
- Removed: 0
- Changed: 4
- Unchanged: 4935

## Changed
- `interface:CDOTA_Modifier_Lua#method:GetRedirectSpell`
  - before: `GetRedirectSpell(event?: ModifierAbilityEvent): 0 | 1`
  - after:  `GetRedirectSpell(event: ModifierAbilityEvent): 0 | 1`
- `interface:CEntities#method:FindAllByClassnameWithin`
  - before: `FindAllByClassnameWithin(arg1: string, location: Vector, arg3: number): object`
  - after:  `FindAllByClassnameWithin(arg1: string, location: Vector, arg3: number): CBaseEntity[]`
- `interface:CEntities#method:FindAllByNameWithin`
  - before: `FindAllByNameWithin(arg1: string, location: Vector, arg3: number): object`
  - after:  `FindAllByNameWithin(arg1: string, location: Vector, arg3: number): CBaseEntity[]`
- `interface:CEntities#method:FindAllInSphere`
  - before: `FindAllInSphere(location: Vector, arg2: number): object`
  - after:  `FindAllInSphere(location: Vector, arg2: number): CBaseEntity[]`

## 2026-09-30 15:47:44

- Added: 0
- Removed: 0
- Changed: 6
- Unchanged: 4933

## Changed
- `global:function:CreateModifierThinker`
  - before: `CreateModifierThinker(caster: CDOTA_BaseNPC | undefined, ability: CDOTABaseAbility | undefined, modifierName: string, paramTable: object | undefined, origin: Vector, teamNumber: DOTATeam_t, phantomBlocker: boolean): CDOTA_BaseNPC`
  - after:  `CreateModifierThinker<TModifier extends CDOTA_Modifier_Lua>(caster: CDOTA_BaseNPC | undefined, ability: CDOTABaseAbility | undefined, modifierName: string, paramTable: ModifierTable<TModifier> | undefined, origin: Vector, teamNumber: DOTATeam_t, phantomBlocker: boolean): CDOTA_BaseNPC`
- `interface:CDOTA_Ability_DataDriven#method:ApplyDataDrivenModifier`
  - before: `ApplyDataDrivenModifier(caster: CDOTA_BaseNPC, target: CDOTA_BaseNPC, modifierName: string, modifierTable: object | undefined): CDOTA_Buff`
  - after:  `ApplyDataDrivenModifier<TModifier extends CDOTA_Modifier_Lua>(caster: CDOTA_BaseNPC, target: CDOTA_BaseNPC, modifierName: string, modifierTable: ModifierTable<TModifier> | undefined): CDOTA_Buff`
- `interface:CDOTA_Ability_DataDriven#method:ApplyDataDrivenThinker`
  - before: `ApplyDataDrivenThinker(caster: CDOTA_BaseNPC, location: Vector, modifierName: string, modifierTable: object | undefined): CDOTA_Buff`
  - after:  `ApplyDataDrivenThinker<TModifier extends CDOTA_Modifier_Lua>(caster: CDOTA_BaseNPC, location: Vector, modifierName: string, modifierTable: ModifierTable<TModifier> | undefined): CDOTA_Buff`
- `interface:CDOTA_BaseNPC#method:AddNewModifier`
  - before: `AddNewModifier(caster: CDOTA_BaseNPC | undefined, ability: CDOTABaseAbility | undefined, modifierName: string, modifierTable: object | undefined): CDOTA_Buff`
  - after:  `AddNewModifier<TModifier extends CDOTA_Modifier_Lua>(caster: CDOTA_BaseNPC | undefined, ability: CDOTABaseAbility | undefined, modifierName: string, modifierTable: ModifierTable<TModifier> | undefined): CDOTA_Buff`
- `interface:CDOTA_Item_DataDriven#method:ApplyDataDrivenModifier`
  - before: `ApplyDataDrivenModifier(caster: CDOTA_BaseNPC, target: CDOTA_BaseNPC, modifierName: string, modifierTable: object | undefined): void`
  - after:  `ApplyDataDrivenModifier<TModifier extends CDOTA_Modifier_Lua>(caster: CDOTA_BaseNPC, target: CDOTA_BaseNPC, modifierName: string, modifierTable: ModifierTable<TModifier> | undefined): void`
- `interface:CDOTA_Item_DataDriven#method:ApplyDataDrivenThinker`
  - before: `ApplyDataDrivenThinker(caster: CDOTA_BaseNPC, location: Vector, modifierName: string, modifierTable: object | undefined): CDOTA_Buff`
  - after:  `ApplyDataDrivenThinker<TModifier extends CDOTA_Modifier_Lua>(caster: CDOTA_BaseNPC, location: Vector, modifierName: string, modifierTable: ModifierTable<TModifier> | undefined): CDOTA_Buff`