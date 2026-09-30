/** @noSelfInFile */
// @validateApiUsageDefault server

/** @both */
declare const CBaseAnimatingActivity: DotaConstructor<CBaseAnimatingActivity>;

declare interface CBaseAnimatingActivity extends CBaseModelEntity {
    /**
     * Returns the duration in seconds of the active sequence.
     */
    ActiveSequenceDuration(): number;
    /**
     * Get the cycle of the animation.
     */
    GetCycle(): number;
    /**
     * Returns the name of the active sequence.
     */
    GetSequence(): string;
    /**
     * Ask whether the main sequence is done playing.
     */
    IsSequenceFinished(): boolean;
    /**
     * Sets the active sequence by name, resetting the current cycle.
     */
    ResetSequence(sequenceName: string): void;
    /**
     * Returns the duration in seconds of the given sequence name.
     */
    SequenceDuration(sequenceName: string): number;
    /**
     * Set the cycle of the animation.
     */
    SetCycle(cycle: number): void;
    /**
     * Set the specified pose parameter to the specified value.
     */
    SetPoseParameter(name: string, value: number): number;
    /**
     * Sets the active sequence by name, keeping the current cycle.
     */
    SetSequence(sequenceName: string): void;
    /**
     * Stop the current animation by setting playback rate to 0.0.
     */
    StopAnimation(): void;
    __kind__: 'instance';
}

declare const CBaseAnimatingOverlay: DotaConstructor<CBaseAnimatingOverlay>;

/** @client */
declare const C_BaseAnimatingOverlay: typeof CBaseAnimatingOverlay;

declare interface CBaseAnimatingOverlay extends CBaseAnimatingActivity {
    __kind__: 'instance';
}

/** @both */
declare const CBaseAnimGraph: DotaConstructor<CBaseAnimGraph>;

declare interface CBaseAnimGraph extends CBaseModelEntity {
    __kind__: 'instance';
}

declare const CBaseCombatCharacter: DotaConstructor<CBaseCombatCharacter>;

/** @client */
declare const C_BaseCombatCharacter: typeof CBaseCombatCharacter;

declare interface CBaseCombatCharacter extends CBaseAnimatingOverlay {
    __kind__: 'instance';
}

declare const CBaseEntity: DotaConstructor<CBaseEntity>;

/** @client */
declare const C_BaseEntity: typeof CBaseEntity;

declare interface CBaseEntity extends CEntityInstance {
    /**
     * Adds the render effect flag.
     */
    AddEffects(flags: EntityEffects): void;
    /**
     * Apply a Velocity Impulse.
     */
    ApplyAbsVelocityImpulse(vecImpulse: Vector): void;
    /**
     * Apply an Ang Velocity Impulse.
     */
    ApplyLocalAngularVelocityImpulse(angImpulse: Vector): void;
    /**
     * Get float value for an entity attribute.
     */
    Attribute_GetFloatValue(name: string, defaultValue: number): number;
    /**
     * Get int value for an entity attribute.
     */
    Attribute_GetIntValue(name: string, defaultValue: number): number;
    /**
     * Set float value for an entity attribute.
     */
    Attribute_SetFloatValue(name: string, value: number): void;
    /**
     * Set int value for an entity attribute.
     */
    Attribute_SetIntValue(name: string, value: number): void;
    /**
     * Delete an entity attribute.
     */
    DeleteAttribute(name: string): void;
    /**
     * Plays a sound from this entity.
     */
    EmitSound(soundname: string): void;
    /**
     * Plays/modifies a sound from this entity. changes sound if nPitch and/or flVol or flSoundTime is > 0.
     */
    EmitSoundParams(soundName: string, pitch: number, volume: number, delay: number): void;
    /**
     * Get the qangles that this entity is looking at.
     */
    EyeAngles(): QAngle;
    /**
     * Get vector to eye position - absolute coords.
     */
    EyePosition(): Vector;
    FirstMoveChild(): CBaseEntity;
    FollowEntity(entity: CBaseEntity, boneMerge: boolean): void;
    /**
     * HEntity to follow, string BoneOrAttachName.
     */
    FollowEntityMerge(ent: object, boneOrAttachName: string): void;
    /**
     * Returns a table containing the criteria that would be used for response queries on this entity. This is the same as the table that is passed to response rule script function callbacks.
     */
    GatherCriteria(result: object): void;
    /**
     * 实体绝对坐标
     *
     * @both
     */
    GetAbsOrigin(): Vector;
    GetAbsScale(): number;
    GetAngles(): QAngle;
    /**
     * Get entity pitch, yaw, roll as a vector.
     */
    GetAnglesAsVector(): Vector;
    /**
     * Get the local angular velocity - returns a vector of pitch,yaw,roll.
     */
    GetAngularVelocity(): Vector;
    /**
     * Get Base? velocity.
     */
    GetBaseVelocity(): Vector;
    /**
     * Get a vector containing max bounds, centered on object.
     */
    GetBoundingMaxs(): Vector;
    /**
     * Get a vector containing min bounds, centered on object.
     */
    GetBoundingMins(): Vector;
    /**
     * Get a table containing the 'Mins' & 'Maxs' vector bounds, centered on object.
     */
    GetBounds(): EntityBounds;
    /**
     * Get vector to center of object - absolute coords.
     */
    GetCenter(): Vector;
    /**
     * Get the entities parented to this entity.
     */
    GetChildren(): CBaseEntity[];
    /**
     * Looks up a context and returns it if available. May return string, float, or null (if the context isn't found).
     */
    GetContext(name: string): string | number | undefined;
    /**
     * Get the forward vector of the entity.
     */
    GetForwardVector(): Vector;
    /**
     * Get the health of this entity.
     *
     * @both
     */
    GetHealth(): number;
    /**
     * Get the left vector of the entity.
     */
    GetLeftVector(): Vector;
    /**
     * Get entity local pitch, yaw, roll as a QAngle.
     */
    GetLocalAngles(): QAngle;
    /**
     * Maybe local angvel.
     */
    GetLocalAngularVelocity(): QAngle;
    /**
     * Get entity local origin as a Vector.
     */
    GetLocalOrigin(): Vector;
    GetLocalScale(): number;
    /**
     * Get Entity relative velocity.
     */
    GetLocalVelocity(): Vector;
    /**
     * Get the mass of an entity. (returns 0 if it doesn't have a physics object).
     */
    GetMass(): number;
    /**
     * Get the maximum health of this entity.
     *
     * @both
     */
    GetMaxHealth(): number;
    /**
     * 模型名称
     */
    GetModelName(): string;
    /**
     * If in hierarchy, retrieves the entity's parent.
     */
    GetMoveParent(): CBaseEntity;
    GetOrigin(): Vector;
    /**
     * 拥有者
     */
    GetOwner(): CBaseEntity;
    /**
     * Get the owner entity, if there is one.
     */
    GetOwnerEntity(): CBaseEntity;
    /**
     * Get the right vector of the entity. WARNING: This produces a left-handed coordinate system. Use GetLeftVector instead (which is aligned with the y axis of the entity).
     */
    GetRightVector(): Vector;
    /**
     * If in hierarchy, walks up the hierarchy to find the root parent.
     */
    GetRootMoveParent(): CBaseEntity;
    /**
     * Returns float duration of the sound. Takes soundname and optional actormodelname.
     */
    GetSoundDuration(soundname: string, actormodel: string): number;
    /**
     * Returns the spawn group handle of this entity.
     */
    GetSpawnGroupHandle(): SpawnGroupHandle;
    /**
     * 所属阵营
     */
    GetTeam(): DOTATeam_t;
    /**
     * Get the team number of this entity.
     *
     * @both
     */
    GetTeamNumber(): DOTATeam_t;
    /**
     * Get the up vector of the entity.
     */
    GetUpVector(): Vector;
    GetVelocity(): Vector;
    /**
     * See if an entity has a particular attribute.
     */
    HasAttribute(name: string): boolean;
    /**
     * 存活
     */
    IsAlive(): boolean;
    /**
     * Is this entity an CDOTA_BaseNPC?
     *
     * @both
     */
    IsBaseNPC(): this is CDOTA_BaseNPC;
    /**
     * Is this entity a Dota NPC?
     */
    IsDOTANPC(): boolean;
    /** @both */
    IsInstance<T extends CBaseEntity>(classOrClassName: DotaConstructor<T>): this is T;
    /**
     * Is this entity an CAI_BaseNPC?
     */
    IsNPC(): boolean;
    /**
     * Back compat: Is this entity a player pawn *or* controller?
     */
    IsPlayer(): this is CDOTAPlayerController;
    /**
     * Is this entity a player controller?
     */
    IsPlayerController(): this is CDOTAPlayerController;
    /**
     * Is this entity a player pawn?
     */
    IsPlayerPawn(): this is CBasePlayerPawn;
    /**
     * 击杀
     */
    Kill(): void;
    NextMovePeer(): CBaseEntity;
    /**
     * Precache a sound for later playing.
     */
    PrecacheScriptSound(soundname: string): void;
    /**
     * Removes the render effect flag.
     */
    RemoveEffects(flags: EntityEffects): void;
    /**
     * Set entity pitch, yaw, roll by component.
     */
    SetAbsAngles(pitch: number, yaw: number, roll: number): void;
    SetAbsOrigin(origin: Vector): void;
    SetAbsScale(scale: number): void;
    /**
     * Set entity pitch, yaw, roll by component.
     */
    SetAngles(pitch: number, yaw: number, roll: number): void;
    /**
     * Set the local angular velocity.
     */
    SetAngularVelocity(pitchVel: number, yawVel: number, rollVel: number): void;
    /**
     * Set the position of the constraint.
     */
    SetConstraint(pos: Vector): void;
    /**
     * Store any key/value pair in this entity's dialog contexts. Value must be a string. Will last for duration (set 0 to mean 'forever').
     */
    SetContext(name: string, value: string, duration: number): void;
    /**
     * Store any key/value pair in this entity's dialog contexts. Value must be a number (int or float). Will last for duration (set 0 to mean 'forever').
     */
    SetContextNum(name: string, value: number, duration: number): void;
    /**
     * Set a think function on this entity.
     *
     * @both
     */
    SetContextThink(
        contextName: string,
        thinkFunc: ((this: this) => number | undefined) | undefined,
        interval: number,
    ): void;
    /**
     * 设定实体名称
     */
    SetEntityName(name: string): void;
    /**
     * Set the orientation of the entity to have this forward vector.
     */
    SetForwardVector(v: Vector): void;
    /**
     * Set PLAYER friction, ignored for objects.
     */
    SetFriction(friction: number): void;
    /**
     * Set PLAYER gravity, ignored for objects.
     */
    SetGravity(gravity: number): void;
    /**
     * Set the health of this entity.
     */
    SetHealth(health: number): void;
    /**
     * Set entity local pitch, yaw, roll by component.
     */
    SetLocalAngles(pitch: number, yaw: number, roll: number): void;
    /**
     * Set entity local origin from a Vector.
     */
    SetLocalOrigin(origin: Vector): void;
    SetLocalScale(scale: number): void;
    /**
     * Set the mass of an entity. (does nothing if it doesn't have a physics object).
     */
    SetMass(mass: number): void;
    /**
     * 设置最大生命值
     */
    SetMaxHealth(amt: number): void;
    SetOrigin(v: Vector): void;
    /**
     * Sets this entity's owner. This entity will be returned by GetOwner() and GetOwnerEntity(). GetPlayerOwner() and GetPlayerOwnerID() will be automatically inferred from this entity.
     */
    SetOwner(owner: CBaseEntity): void;
    /**
     * Set the parent for this entity.
     */
    SetParent(parent: CBaseEntity, attachmentname: string): void;
    SetTeam(teamNum: DOTATeam_t): void;
    /**
     * Set a think function on this entity. Uses `CBaseEntity:SetContextThink` internally.
     * Note: optional parameters can be given in any order.
     *
     * @param functionName If `context` is provided, think function would perform a
     *                     dynamic lookup on `context` table. Otherwise searches for
     *                     that function name in caller scope.
     * @param contextName Defaults to `functionName` if it's a string.
     * @param initialDelay Defaults to 0 (next game frame).
     * @both
     */
    SetThink(
        functionName: ((entity: CBaseEntity) => number | undefined) | string,
        context: object | undefined,
        contextName: string | undefined,
        initialDelay: number | undefined,
    ): void;
    SetVelocity(vecVelocity: Vector): void;
    /**
     * Stops a named sound playing from this entity.
     */
    StopSound(soundname: string): void;
    /**
     * Stops thinker created with `CBaseEntity.SetThink`.
     * Alias for `CBaseEntity:SetContextThink(contextName, nil, 0)`.
     *
     * @both
     */
    StopThink(contextName: string): void;
    /**
     * Apply damage to this entity. Use CreateDamageInfo() to create a damageinfo object.
     */
    TakeDamage(damageInfo: CTakeDamageInfo): number;
    /**
     * Returns the input Vector transformed from entity to world space.
     */
    TransformPointEntityToWorld(point: Vector): Vector;
    /**
     * Returns the input Vector transformed from world to entity space.
     */
    TransformPointWorldToEntity(point: Vector): Vector;
    /**
     * Fires off this entity's OnTrigger responses.
     */
    Trigger(): void;
    /**
     * Validates the private script scope and creates it if one doesn't exist.
     */
    ValidatePrivateScriptScope(): void;
    __kind__: 'instance';
}

declare const CBaseModelEntity: DotaConstructor<CBaseModelEntity>;

/** @client */
declare const C_BaseModelEntity: typeof CBaseModelEntity;

declare interface CBaseModelEntity extends CBaseEntity {
    /**
     * Get the attachment id's angles as a p,y,r vector.
     */
    GetAttachmentAngles(attachment: number): Vector;
    /**
     * Get the attachment id's forward vector.
     */
    GetAttachmentForward(attachment: number): Vector;
    /**
     * Get the attachment id's origin vector.
     */
    GetAttachmentOrigin(attachment: number): Vector;
    /**
     * Get the material group hash of this entity.
     */
    GetMaterialGroupHash(): number;
    /**
     * Get the mesh group mask of this entity.
     */
    GetMaterialGroupMask(): Uint64;
    /**
     * 模型体积
     */
    GetModelScale(): number;
    /**
     * Get the alpha modulation of this entity.
     *
     * @both
     */
    GetRenderAlpha(): number;
    /**
     * Get the render color of the entity.
     */
    GetRenderColor(): Vector;
    /**
     * Get the named attachment id.
     */
    ScriptLookupAttachment(attachmentName: string): number;
    /**
     * Sets a bodygroup.
     */
    SetBodygroup(bodyGroup: number, choice: number): void;
    /**
     * Sets a bodygroup by name.
     */
    SetBodygroupByName(name: string, value: number): void;
    /**
     * Set the material group of this entity.
     */
    SetMaterialGroup(materialGroup: string): void;
    /**
     * Set the material group hash of this entity.
     */
    SetMaterialGroupHash(hash: number): void;
    /**
     * Set the mesh group mask of this entity.
     */
    SetMaterialGroupMask(meshGroupMask: Uint64): void;
    /**
     * 设置单位模型
     */
    SetModel(modelName: string): void;
    /**
     * 设置模型体积
     */
    SetModelScale(scale: number): void;
    /**
     * Set the alpha modulation of this entity.
     */
    SetRenderAlpha(alpha: number): void;
    /**
     * Sets the render color of the entity.
     */
    SetRenderColor(r: number, g: number, b: number): void;
    /**
     * Sets the render mode of the entity.
     */
    SetRenderMode(mode: number): void;
    /**
     * Set a single mesh group for this entity.
     */
    SetSingleMeshGroup(meshGroupName: string): void;
    SetSize(mins: Vector, maxs: Vector): void;
    SetSkin(skin: number): void;
    __kind__: 'instance';
}

declare const CBasePlayerController: DotaConstructor<CBasePlayerController>;

declare interface CBasePlayerController extends CBaseEntity {
    /**
     * Returns the pawn for this controller.
     */
    GetPawn(): object;
    __kind__: 'instance';
}

declare const CBasePlayerPawn: DotaConstructor<CBasePlayerPawn>;

declare interface CBasePlayerPawn extends CBaseCombatCharacter {
    /**
     * Returns the controller for this pawn.
     */
    GetController(): object;
    /**
     * Returns an array of all the equipped weapons.
     */
    GetEquippedWeapons(): object;
    /**
     * Gets the number of weapons currently equipped.
     */
    GetWeaponCount(): number;
    /**
     * Returns true if the player is in noclip mode.
     */
    IsNoclipping(): boolean;
    __kind__: 'instance';
}

declare const CBaseTrigger: DotaConstructor<CBaseTrigger>;

declare interface CBaseTrigger extends CBaseEntity {
    /**
     * Disable's the trigger.
     */
    Disable(): void;
    /**
     * Enable the trigger.
     */
    Enable(): void;
    /**
     * Checks whether the passed entity is touching the trigger.
     */
    IsTouching(ent: CBaseEntity): boolean;
    __kind__: 'instance';
}

/** @both */
declare const CBodyComponent: DotaConstructor<CBodyComponent>;

declare interface CBodyComponent {
    /**
     * Apply an impulse at a worldspace position to the physics.
     *
     * @both
     */
    AddImpulseAtPosition(arg1: Vector, arg2: Vector): void;
    /**
     * Add linear and angular velocity to the physics object.
     *
     * @both
     */
    AddVelocity(arg1: Vector, arg2: Vector): void;
    /**
     * Detach from its parent.
     *
     * @both
     */
    DetachFromParent(): void;
    /**
     * Is attached to parent.
     *
     * @both
     */
    IsAttachedToParent(): boolean;
    /** @both */
    SetAngularVelocity(arg1: Vector): void;
    /** @both */
    SetMaterialGroup(arg1: string): void;
    /** @both */
    SetVelocity(arg1: Vector): void;
    __kind__: 'instance';
}

/**
 * The type used for validation of custom events.
 *
 * This type may be augmented via interface merging.
 */
interface CustomGameEventDeclarations {}

declare namespace CCustomGameEventManager {
    type InferEventType<T extends string | object, TUntyped> = T extends string
        ? T extends keyof CustomGameEventDeclarations
            ? CustomGameEventDeclarations[T]
            : TUntyped
        : T;
}

declare const CustomGameEventManager: CCustomGameEventManager;

declare const CCustomGameEventManager: DotaConstructor<CCustomGameEventManager>;

declare interface CCustomGameEventManager {
    /**
     * Register a callback to be called when a particular custom event arrives. Returns a listener ID that can be used to unregister later.
     */
    RegisterListener<T extends string | object>(
        eventName: (T extends string ? T : string) | keyof CustomGameEventDeclarations,
        listener: (
            userId: EntityIndex,
            event: NetworkedData<CCustomGameEventManager.InferEventType<T, object> & { PlayerID: PlayerID }>,
        ) => void,
    ): CustomGameEventListenerID;
    Send_ServerToAllClients<T extends string | object>(
        eventName: (T extends string ? T : string) | keyof CustomGameEventDeclarations,
        eventData: CCustomGameEventManager.InferEventType<T, never>,
    ): void;
    Send_ServerToPlayer<T extends string | object>(
        player: CDOTAPlayerController,
        eventName: (T extends string ? T : string) | keyof CustomGameEventDeclarations,
        eventData: CCustomGameEventManager.InferEventType<T, never>,
    ): void;
    Send_ServerToTeam<T extends string | object>(
        team: DOTATeam_t,
        eventName: (T extends string ? T : string) | keyof CustomGameEventDeclarations,
        eventData: CCustomGameEventManager.InferEventType<T, never>,
    ): void;
    /**
     * Unregister a specific listener.
     */
    UnregisterListener(listenerId: CustomGameEventListenerID): void;
    __kind__: 'instance';
}

/**
 * The type used for validation of custom net tables.
 *
 * This type may be augmented via interface merging.
 */
interface CustomNetTableDeclarations {}

declare const CustomNetTables: CCustomNetTableManager;

/** @both */
declare const CCustomNetTableManager: DotaConstructor<CCustomNetTableManager>;

declare interface CCustomNetTableManager {
    /** @both */
    GetTableValue<
        TName extends keyof CustomNetTableDeclarations,
        T extends CustomNetTableDeclarations[TName],
        K extends keyof T,
    >(
        tableName: TName,
        keyName: K,
    ): NetworkedData<T[K]>;
    SetTableValue<
        TName extends keyof CustomNetTableDeclarations,
        T extends CustomNetTableDeclarations[TName],
        K extends keyof T,
    >(
        tableName: TName,
        keyName: K,
        value: T[K],
    ): boolean;
    __kind__: 'instance';
}

declare const debugoverlay: CDebugOverlayScriptHelper;

/** @both */
declare const CDebugOverlayScriptHelper: DotaConstructor<CDebugOverlayScriptHelper>;

declare interface CDebugOverlayScriptHelper {
    /**
     * Draws an axis. Specify origin + orientation in world space.
     *
     * @both
     */
    Axis(arg1: Vector, arg2: Vector, arg3: number, arg4: boolean, arg5: number): void;
    /**
     * Draws a world-space axis-aligned box. Specify bounds in world space.
     *
     * @both
     */
    Box(
        arg1: Vector,
        arg2: Vector,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: boolean,
        arg8: number,
    ): void;
    /**
     * Draws an oriented box at the origin. Specify bounds in local space.
     *
     * @both
     */
    BoxAngles(
        arg1: Vector,
        arg2: Vector,
        arg3: Vector,
        arg4: Vector,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: number,
        arg9: boolean,
        arg10: number,
    ): void;
    /**
     * Draws a capsule. Specify base in world space.
     *
     * @both
     */
    Capsule(
        arg1: Vector,
        arg2: Vector,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: number,
        arg9: boolean,
        arg10: number,
    ): void;
    /**
     * Draws a circle. Specify center in world space.
     *
     * @both
     */
    Circle(
        arg1: Vector,
        arg2: Vector,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: boolean,
        arg9: number,
    ): void;
    /**
     * Draws a circle oriented to the screen. Specify center in world space.
     *
     * @both
     */
    CircleScreenOriented(
        arg1: Vector,
        arg2: number,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: boolean,
        arg8: number,
    ): void;
    /**
     * Draws a wireframe cone. Specify endpoint and direction in world space.
     *
     * @both
     */
    Cone(
        arg1: Vector,
        arg2: Vector,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: number,
        arg9: boolean,
        arg10: number,
    ): void;
    /**
     * Draws a screen-aligned cross. Specify origin in world space.
     *
     * @both
     */
    Cross(
        arg1: Vector,
        arg2: number,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: boolean,
        arg8: number,
    ): void;
    /**
     * Draws a world-aligned cross. Specify origin in world space.
     *
     * @both
     */
    Cross3D(
        arg1: Vector,
        arg2: number,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: boolean,
        arg8: number,
    ): void;
    /**
     * Draws an oriented cross. Specify origin in world space.
     *
     * @both
     */
    Cross3DOriented(
        arg1: Vector,
        arg2: Vector,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: boolean,
        arg9: number,
    ): void;
    /**
     * Draws a dashed line. Specify endpoints in world space.
     *
     * @both
     */
    DrawTickMarkedLine(
        arg1: Vector,
        arg2: Vector,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: number,
        arg9: boolean,
        arg10: number,
    ): void;
    /**
     * Draws the attachments of the entity.
     *
     * @both
     */
    EntityAttachments(arg1: number, arg2: number, arg3: number): void;
    /**
     * Draws the axis of the entity origin.
     *
     * @both
     */
    EntityAxis(arg1: number, arg2: number, arg3: boolean, arg4: number): void;
    /**
     * Draws bounds of an entity.
     *
     * @both
     */
    EntityBounds(
        arg1: number,
        arg2: number,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: boolean,
        arg7: number,
    ): void;
    /**
     * Draws the skeleton of the entity.
     *
     * @both
     */
    EntitySkeleton(arg1: number, arg2: number): void;
    /**
     * Draws text on an entity.
     *
     * @both
     */
    EntityText(
        arg1: number,
        arg2: number,
        arg3: string,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: number,
    ): void;
    /**
     * Draws a screen-space filled 2D rectangle. Coordinates are in pixels.
     *
     * @both
     */
    FilledRect2D(arg1: never, arg2: never, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
    /**
     * Draws a horizontal arrow. Specify endpoints in world space.
     *
     * @both
     */
    HorzArrow(
        arg1: Vector,
        arg2: Vector,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: boolean,
        arg9: number,
    ): void;
    /**
     * Draws a line between two points.
     *
     * @both
     */
    Line(
        arg1: Vector,
        arg2: Vector,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: boolean,
        arg8: number,
    ): void;
    /**
     * Draws a line between two points in screenspace.
     *
     * @both
     */
    Line2D(arg1: never, arg2: never, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
    /**
     * Pops the identifier used to group overlays. Overlays marked with this identifier can be deleted in a big batch.
     *
     * @both
     */
    PopDebugOverlayScope(): void;
    /**
     * Pushes an identifier used to group overlays. Deletes all existing overlays using this overlay id.
     *
     * @both
     */
    PushAndClearDebugOverlayScope(arg1: string): void;
    /**
     * Pushes an identifier used to group overlays. Overlays marked with this identifier can be deleted in a big batch.
     *
     * @both
     */
    PushDebugOverlayScope(arg1: string): void;
    /**
     * Removes all overlays marked with a specific identifier, regardless of their lifetime.
     *
     * @both
     */
    RemoveAllInScope(arg1: string): void;
    /**
     * Draws a solid cone. Specify endpoint and direction in world space.
     *
     * @both
     */
    SolidCone(
        arg1: Vector,
        arg2: Vector,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: number,
        arg9: boolean,
        arg10: number,
    ): void;
    /**
     * Draws a wireframe sphere. Specify center in world space.
     *
     * @both
     */
    Sphere(
        arg1: Vector,
        arg2: number,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: boolean,
        arg8: number,
    ): void;
    /**
     * Draws a swept box. Specify endpoints in world space and the bounds in local space.
     *
     * @both
     */
    SweptBox(
        arg1: Vector,
        arg2: Vector,
        arg3: Vector,
        arg4: Vector,
        arg5: Vector,
        arg6: number,
        arg7: number,
        arg8: number,
        arg9: number,
        arg10: number,
    ): void;
    /**
     * Draws 2D text. Specify origin in world space.
     *
     * @both
     */
    Text(
        arg1: Vector,
        arg2: number,
        arg3: string,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: number,
        arg9: number,
    ): void;
    /**
     * Draws a screen-space texture. Coordinates are in pixels.
     *
     * @both
     */
    Texture(
        arg1: string,
        arg2: never,
        arg3: never,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: never,
        arg9: never,
        arg10: number,
    ): void;
    /**
     * Draws a filled triangle. Specify vertices in world space.
     *
     * @both
     */
    Triangle(
        arg1: Vector,
        arg2: Vector,
        arg3: Vector,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: boolean,
        arg9: number,
    ): void;
    /**
     * Draws 3D text. Specify origin + orientation in world space.
     *
     * @both
     */
    VectorText3D(
        arg1: Vector,
        arg2: Vector,
        arg3: string,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: boolean,
        arg9: number,
    ): void;
    /**
     * Draws a vertical arrow. Specify endpoints in world space.
     *
     * @both
     */
    VertArrow(
        arg1: Vector,
        arg2: Vector,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: boolean,
        arg9: number,
    ): void;
    /**
     * Draws a arrow associated with a specific yaw. Specify endpoints in world space.
     *
     * @both
     */
    YawArrow(
        arg1: Vector,
        arg2: number,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: number,
        arg9: boolean,
        arg10: number,
    ): void;
    __kind__: 'instance';
}

declare const CDOTA_Ability_Aghanim_Spear: DotaConstructor<CDOTA_Ability_Aghanim_Spear>;

declare interface CDOTA_Ability_Aghanim_Spear extends CDOTABaseAbility {
    /**
     * Launch Spear to a target position from a source position.
     */
    LaunchSpear(target: Vector, start: Vector): void;
    __kind__: 'instance';
}

declare const CDOTA_Ability_Animation_Attack: DotaConstructor<CDOTA_Ability_Animation_Attack>;

declare interface CDOTA_Ability_Animation_Attack extends CDOTABaseAbility {
    /**
     * Override playbackrate.
     */
    SetPlaybackRate(rate: number): void;
    __kind__: 'instance';
}

declare const CDOTA_Ability_Animation_TailSpin: DotaConstructor<CDOTA_Ability_Animation_TailSpin>;

declare interface CDOTA_Ability_Animation_TailSpin extends CDOTABaseAbility {
    /**
     * Override playbackrate.
     */
    SetPlaybackRate(rate: number): void;
    __kind__: 'instance';
}

declare const CDOTA_Ability_DataDriven: DotaConstructor<CDOTA_Ability_DataDriven>;

declare interface CDOTA_Ability_DataDriven extends CDOTABaseAbility {
    /**
     * Applies a data driven modifier to the target.
     */
    ApplyDataDrivenModifier<TModifier extends CDOTA_Modifier_Lua = CDOTA_Modifier_Lua>(
        caster: CDOTA_BaseNPC,
        target: CDOTA_BaseNPC,
        modifierName: string,
        modifierTable: ModifierTable<TModifier> | undefined,
    ): CDOTA_Buff;
    /**
     * Applies a data driven thinker at the location.
     */
    ApplyDataDrivenThinker<TModifier extends CDOTA_Modifier_Lua = CDOTA_Modifier_Lua>(
        caster: CDOTA_BaseNPC,
        location: Vector,
        modifierName: string,
        modifierTable: ModifierTable<TModifier> | undefined,
    ): CDOTA_Buff;
    __kind__: 'instance';
}

declare const CDOTA_Ability_Lua: DotaConstructor<CDOTA_Ability_Lua>;

/** @client */
declare const C_DOTA_Ability_Lua: typeof CDOTA_Ability_Lua;

declare interface CDOTA_Ability_Lua extends CDOTABaseAbility {
    /**
     * Determine whether an issued command with no target is valid.
     *
     * @both
     */
    CastFilterResult(): UnitFilterResult;
    /**
     * Determine whether an issued command on a location is valid.
     *
     * @both
     */
    CastFilterResultLocation(location: Vector): UnitFilterResult;
    /**
     * Determine whether an issued command on a target is valid.
     *
     * @both
     */
    CastFilterResultTarget(target: CDOTA_BaseNPC): UnitFilterResult;
    /**
     * 充能时间
     *
     * @both
     */
    GetAbilityChargeRestoreTime(level: number): number;
    /**
     * 技能图标
     *
     * @client
     */
    GetAbilityTextureName(): string;
    /**
     * 作用范围
     *
     * @both
     */
    GetAOERadius(): number;
    /**
     * 主技能
     */
    GetAssociatedPrimaryAbilities(): string;
    /**
     * 附属技能
     */
    GetAssociatedSecondaryAbilities(): string;
    /**
     * Return cast behavior type of this ability.
     *
     * @both
     */
    GetBehavior(): DOTA_ABILITY_BEHAVIOR | Uint64;
    /**
     * 施法动作名
     */
    GetCastAnimation(): GameActivity_t;
    /**
     * Return cast point of this ability.
     *
     * @both
     */
    GetCastPoint(): number;
    /**
     * Return cast range of this ability.
     *
     * @both
     */
    GetCastRange(location: Vector, target: CDOTA_BaseNPC | undefined): number;
    /** @both */
    GetCastRangeBonus(target: object, pseudoCastRange: number): number;
    /**
     * Return channel animation of this ability.
     */
    GetChannelAnimation(): GameActivity_t;
    /**
     * Return health cost per second of channeling at the given level (-1 is current).
     *
     * @both
     */
    GetChannelledHealthCostPerSecond(level: number): number;
    /**
     * Return mana cost at the given level per second while channeling (-1 is current).
     *
     * @both
     */
    GetChannelledManaCostPerSecond(level: number): number;
    /**
     * 持续施法开始时间
     *
     * @both
     */
    GetChannelStartTime(): number;
    /**
     * 持续施法时间
     *
     * @both
     */
    GetChannelTime(): number;
    /**
     * 语音类型
     */
    GetConceptRecipientType(): number;
    /**
     * Return cooldown of this ability.
     *
     * @both
     */
    GetCooldown(level: number): number;
    /**
     * Return the error string of a failed command with no target.
     *
     * @both
     */
    GetCustomCastError(): string;
    /**
     * Return the error string of a failed command on a location.
     *
     * @both
     */
    GetCustomCastErrorLocation(location: Vector): string;
    /**
     * Return the error string of a failed command on a target.
     *
     * @both
     */
    GetCustomCastErrorTarget(target: CDOTA_BaseNPC): string;
    /**
     * (DOTA_INVALID_ORDERS nReason) Return the error string of a failed order.
     *
     * @both
     */
    GetCustomHudErrorMessage(reason: number): string;
    /**
     * 当前施法距离
     *
     * @both
     */
    GetEffectiveCastRange(location: Vector, target: object): number;
    /**
     * Return gold cost at the given level (-1 is current).
     *
     * @both
     */
    GetGoldCost(level: number): number;
    /**
     * Return health cost at the given level (-1 is current).
     *
     * @both
     */
    GetHealthCost(level: number): number;
    /**
     * 固有modifier
     */
    GetIntrinsicModifierName(): string;
    /**
     * Return mana cost at the given level (-1 is current).
     *
     * @both
     */
    GetManaCost(level: number): number;
    /**
     * Return the animation rate of the cast animation.
     */
    GetPlaybackRateOverride(): number;
    /**
     * Is this ability an Attribute Bonus.
     *
     * @both
     */
    IsAttributeBonus(): boolean;
    /**
     * Is this a cosmetic only ability?
     */
    IsCosmetic(entity: object): boolean;
    /**
     * Returns true if this ability can be used when not on the action panel.
     *
     * @both
     */
    IsHiddenAbilityCastable(): boolean;
    /**
     * 被窃取后隐藏
     */
    IsHiddenWhenStolen(): boolean;
    /**
     * 可刷新技能
     */
    IsRefreshable(): boolean;
    /**
     * 可被窃取技能
     */
    IsStealable(): boolean;
    /**
     * Cast time did not complete successfully.
     */
    OnAbilityPhaseInterrupted(): void;
    /**
     * Cast time begins (return true for successful cast).
     */
    OnAbilityPhaseStart(): boolean;
    /**
     * The ability was pinged.
     */
    OnAbilityPinged(playerId: PlayerID, ctrlHeld: boolean): void;
    OnAbilityUpgrade(upgradeAbility: object): void;
    /**
     * Channel finished.
     */
    OnChannelFinish(interrupted: boolean): void;
    /**
     * Channeling is taking place.
     */
    OnChannelThink(interval: number): void;
    /**
     * Caster (hero only) gained a level, skilled an ability, or received a new stat bonus.
     */
    OnHeroCalculateStatBonus(): void;
    /**
     * A hero has died in the vicinity (ie Urn), takes table of params.
     */
    OnHeroDiedNearby(unit: CDOTA_BaseNPC, attacker: CDOTA_BaseNPC, event: object): void;
    /**
     * Caster gained a level.
     */
    OnHeroLevelUp(): void;
    /**
     * Caster inventory changed.
     */
    OnInventoryContentsChanged(): void;
    /**
     * Caster equipped item.
     */
    OnItemEquipped(item: CDOTA_Item): void;
    /**
     * Caster died.
     */
    OnOwnerDied(): void;
    /**
     * Caster respawned or spawned for the first time.
     */
    OnOwnerSpawned(): void;
    /**
     * Projectile has collided with a given target or reached its destination. If 'true` is returned, projectile would be destroyed.
     */
    OnProjectileHit(target: CDOTA_BaseNPC | undefined, location: Vector): boolean | void;
    /**
     * Projectile has collided with a given target or reached its destination. If 'true` is returned, projectile would be destroyed.
     */
    OnProjectileHit_ExtraData(target: CDOTA_BaseNPC | undefined, location: Vector, extraData: object): boolean | void;
    /**
     * Projectile has collided with a given target or reached its destination. If 'true` is returned, projectile would be destroyed.
     */
    OnProjectileHitHandle(
        target: CDOTA_BaseNPC | undefined,
        location: Vector,
        projectileHandle: ProjectileID,
    ): boolean | void;
    /**
     * Projectile is actively moving.
     */
    OnProjectileThink(location: Vector): void;
    /**
     * Projectile is actively moving.
     */
    OnProjectileThink_ExtraData(location: Vector, extraData: object): void;
    /**
     * Projectile is actively moving.
     */
    OnProjectileThinkHandle(projectileHandle: ProjectileID): void;
    /**
     * Cast time finished, spell effects begin.
     */
    OnSpellStart(): void;
    /**
     * Special behavior when stolen by Spell Steal.
     */
    OnStolen(sourceAbility: CDOTABaseAbility): void;
    /**
     * Ability is toggled on/off.
     */
    OnToggle(): void;
    /**
     * Special behavior when lost by Spell Steal.
     */
    OnUnStolen(): void;
    /**
     * Ability gained a level.
     */
    OnUpgrade(): void;
    OtherAbilitiesAlwaysInterruptChanneling(): boolean;
    /**
     * Return if an ability and its modifiers should pierce debuff immunity.
     *
     * @both
     */
    PiercesDebuffImmunity(): boolean;
    /**
     * 是否触发魔棒充能
     */
    ProcsMagicStick(): boolean;
    /**
     * 施法需转身
     */
    RequiresFacing(): boolean;
    /**
     * 死亡重置开关状态
     */
    ResetToggleOnRespawn(): boolean;
    /**
     * Return the type of speech used.
     */
    SpeakTrigger(): number;
    /**
     * Called first when ability entity is created.
     *
     * @abstract
     * @both
     */
    Init?(): void;
    /** @abstract */
    Precache?(context: CScriptPrecacheContext): void;
    /**
     * Called when ability entity is created, after Init.
     *
     * @abstract
     * @both
     */
    Spawn?(): void;
    __kind__: 'instance';
}

declare const CDOTA_Ability_Nian_Dive: DotaConstructor<CDOTA_Ability_Nian_Dive>;

declare interface CDOTA_Ability_Nian_Dive extends CDOTABaseAbility {
    /**
     * Override playbackrate.
     */
    SetPlaybackRate(rate: number): void;
    __kind__: 'instance';
}

declare const CDOTA_Ability_Nian_Leap: DotaConstructor<CDOTA_Ability_Nian_Leap>;

declare interface CDOTA_Ability_Nian_Leap extends CDOTABaseAbility {
    /**
     * Override playbackrate.
     */
    SetPlaybackRate(rate: number): void;
    __kind__: 'instance';
}

declare const CDOTA_Ability_Nian_Roar: DotaConstructor<CDOTA_Ability_Nian_Roar>;

declare interface CDOTA_Ability_Nian_Roar extends CDOTABaseAbility {
    /**
     * Number of times Nian has used the roar.
     */
    GetCastCount(): number;
    __kind__: 'instance';
}

declare const CDOTA_BaseNPC: DotaConstructor<CDOTA_BaseNPC>;

/** @client */
declare const C_DOTA_BaseNPC: typeof CDOTA_BaseNPC;

declare interface CDOTA_BaseNPC extends CBaseAnimatingOverlay {
    /**
     * Add an ability to this unit by name.
     */
    AddAbility(abilityName: string): CDOTABaseAbility;
    /**
     * Add an activity modifier that affects future StartGesture calls.
     *
     * @param name The name of the activity modifier to add, e.g. 'haste'.
     */
    AddActivityModifier(name: string): void;
    /**
     * Add an item to this unit's inventory.
     */
    AddItem(item: CDOTA_Item): CDOTA_Item;
    /**
     * Add an item to this unit's inventory.
     */
    AddItemByName(itemName: string): CDOTA_Item;
    /**
     * Add a modifier to this unit.
     */
    AddNewModifier<TModifier extends CDOTA_Modifier_Lua = CDOTA_Modifier_Lua>(
        caster: CDOTA_BaseNPC | undefined,
        ability: CDOTABaseAbility | undefined,
        modifierName: string,
        modifierTable: ModifierTable<TModifier> | undefined,
    ): CDOTA_Buff;
    /**
     * 添加不可见标记
     */
    AddNoDraw(): void;
    /**
     * Add a speech bubble(1-4 live at a time) to this NPC.
     */
    AddSpeechBubble(bubble: number, speech: string, duration: number, unOffsetX: number, unOffsetY: number): void;
    AlertNearbyUnits(attacker: CDOTA_BaseNPC, ability: CDOTABaseAbility): void;
    AngerNearbyUnits(): void;
    AttackNoEarlierThan(time: number, timeDisparityTolerance: number): void;
    /**
     * 攻击准备就绪
     */
    AttackReady(): boolean;
    BoundingRadius2D(): number;
    CalculateGenericBonuses(): void;
    /**
     * 在对方视野内
     */
    CanBeSeenByAnyOpposingTeam(): boolean;
    /**
     * Check FoW to see if an entity is visible.
     */
    CanEntityBeSeenByMyTeam(entity: CDOTA_BaseNPC): boolean;
    /**
     * 可出售物品
     */
    CanSellItems(): boolean;
    /**
     * Cast an ability immediately.
     */
    CastAbilityImmediately(ability: CDOTABaseAbility, playerIndex: number): void;
    /**
     * Cast an ability with no target.
     */
    CastAbilityNoTarget(ability: CDOTABaseAbility, playerIndex: number): void;
    /**
     * Cast an ability on a position.
     */
    CastAbilityOnPosition(position: Vector, ability: CDOTABaseAbility, playerIndex: number): void;
    /**
     * Cast an ability on a target entity.
     */
    CastAbilityOnTarget(target: CDOTA_BaseNPC, ability: CDOTABaseAbility, playerIndex: number): void;
    /**
     * Toggle an ability.
     */
    CastAbilityToggle(ability: CDOTABaseAbility, playerIndex: number): void;
    /**
     * 更换阵营
     */
    ChangeTeam(teamNum: number): void;
    /**
     * Clear Activity modifiers.
     */
    ClearActivityModifiers(): void;
    /**
     * Consume the item, deleting it from the inventory and granting the hero the specified bonuses.
     */
    ConsumeItem(item: object): void;
    DestroyAllSpeechBubbles(): void;
    /**
     * Disassemble the passed item in this unit's inventory.
     */
    DisassembleItem(item: CDOTA_Item): void;
    /**
     * Drop an item at a given point.
     */
    DropItemAtPosition(dest: Vector, item: CDOTA_Item): void;
    /**
     * Immediately drop a carried item at a given position.
     */
    DropItemAtPositionImmediate(item: CDOTA_Item, position: Vector): void;
    /**
     * Drops the selected item out of this unit's stash.
     */
    EjectItemFromStash(item: CDOTA_Item): void;
    /**
     * This unit will be set to face the target point.
     */
    FaceTowards(target: Vector): void;
    /**
     * Fade and remove the given gesture activity.
     */
    FadeGesture(activity: GameActivity_t): void;
    /**
     * Retrieve an ability by name from the unit.
     *
     * @both
     */
    FindAbilityByName(abilityName: string): CDOTABaseAbility | undefined;
    /**
     * Returns a table of all of the modifiers on the NPC.
     */
    FindAllModifiers(): CDOTA_Buff[];
    /**
     * Returns a table of all of the modifiers on the NPC with the passed name (modifierName).
     */
    FindAllModifiersByName(modifierName: string): CDOTA_Buff[];
    /**
     * Get handle to first item in inventory, else nil.
     */
    FindItemInInventory(itemName: string): CDOTA_Item | undefined;
    /**
     * Return a handle to the modifier of the given name if found, else nil (string Name ).
     */
    FindModifierByName(modifierName: string): CDOTA_Buff | undefined;
    /**
     * Return a handle to the modifier of the given name from the passed caster if found, else nil.
     */
    FindModifierByNameAndCaster(modifierName: string, caster: CDOTA_BaseNPC): CDOTA_Buff | undefined;
    /**
     * Kill this unit immediately.
     */
    ForceKill(reincarnate: boolean): void;
    /**
     * Play an activity once, and then go back to idle.
     */
    ForcePlayActivityOnce(activity: GameActivity_t): void;
    /**
     * Retrieve an ability by index from the unit.
     */
    GetAbilityByIndex(index: number): CDOTABaseAbility | undefined;
    /** @both */
    GetAbilityCount(): number;
    /**
     * 攻击警戒距离
     */
    GetAcquisitionRange(): number;
    /**
     * Combat involving this creature will have this weight added to the music calcuations.
     */
    GetAdditionalBattleMusicWeight(): number;
    /**
     * Returns this unit's aggro target.
     */
    GetAggroTarget(): CDOTA_BaseNPC | undefined;
    GetAttackAnimationPoint(): number;
    /**
     * 攻击类型
     */
    GetAttackCapability(): DOTAUnitAttackCapability_t;
    /**
     * Returns a random integer between the minimum and maximum base damage of the unit.
     */
    GetAttackDamage(): number;
    /**
     * 攻击缓冲距离
     */
    GetAttackRangeBuffer(): number;
    /**
     * 攻击速度
     *
     * @both
     */
    GetAttackSpeed(ignoreTempAttackSpeed: boolean): number;
    /**
     * 每秒攻击次数
     *
     * @both
     */
    GetAttacksPerSecond(ignoreTempAttackSpeed: boolean): number;
    /**
     * 当前攻击目标
     */
    GetAttackTarget(): CDOTA_BaseNPC | undefined;
    /**
     * Returns the average value of the minimum and maximum damage values.
     */
    GetAverageTrueAttackDamage(target: CDOTA_BaseNPC | undefined): number;
    /**
     * 基础攻击距离
     */
    GetBaseAttackRange(): number;
    /**
     * 基础攻击间隔
     *
     * @both
     */
    GetBaseAttackTime(): number;
    /**
     * Get the maximum attack damage of this unit.
     */
    GetBaseDamageMax(): number;
    /**
     * Get the minimum attack damage of this unit.
     */
    GetBaseDamageMin(): number;
    /**
     * Returns the vision range before modifiers.
     */
    GetBaseDayTimeVisionRange(): number;
    /**
     * 生命条高度
     */
    GetBaseHealthBarOffset(): number;
    /**
     * 基础生命恢复
     */
    GetBaseHealthRegen(): number;
    /**
     * Returns base magical armor value.
     *
     * @both
     */
    GetBaseMagicalResistanceValue(): number;
    /**
     * Gets the base max health value.
     */
    GetBaseMaxHealth(): number;
    /**
     * 固有移动速度
     *
     * @both
     */
    GetBaseMoveSpeed(): number;
    /**
     * Returns the vision range after modifiers.
     */
    GetBaseNightTimeVisionRange(): number;
    /**
     * 额外魔法恢复
     */
    GetBonusManaRegen(): number;
    GetCastPoint(attack: boolean): number;
    /**
     * 施法距离加成
     *
     * @both
     */
    GetCastRangeBonus(): number;
    /**
     * 克隆体本体
     */
    GetCloneSource(): CDOTA_BaseNPC | undefined;
    /**
     * Returns the size of the collision padding around the hull.
     *
     * @both
     */
    GetCollisionPadding(): number;
    /**
     * 冷却时间倍率
     *
     * @both
     */
    GetCooldownReduction(): number;
    GetCreationTime(): number;
    /**
     * Get the ability this unit is currently casting.
     */
    GetCurrentActiveAbility(): CDOTABaseAbility | undefined;
    /**
     * Gets the current vision range.
     *
     * @both
     */
    GetCurrentVisionRange(): number;
    GetCursorCastTarget(): CDOTA_BaseNPC | undefined;
    GetCursorPosition(): Vector;
    GetCursorTargetingNothing(): boolean;
    /**
     * Get the maximum attack damage of this unit.
     *
     * @both
     */
    GetDamageMax(): number;
    /**
     * Get the minimum attack damage of this unit.
     *
     * @both
     */
    GetDamageMin(): number;
    /**
     * 白天视野
     *
     * @both
     */
    GetDayTimeVisionRange(): number;
    /**
     * 死亡经验给与
     */
    GetDeathXP(): number;
    /**
     * 面板攻击速度
     */
    GetDisplayAttackSpeed(): number;
    /**
     * 闪避
     */
    GetEvasion(): number;
    GetForceAttackTarget(): CDOTA_BaseNPC | undefined;
    /**
     * 死亡金钱给与
     */
    GetGoldBounty(): number;
    /** @both */
    GetHasteFactor(): number;
    /**
     * Returns integer amount of health missing from max.
     */
    GetHealthDeficit(): number;
    /**
     * Get the current health percent of the unit.
     *
     * @both
     */
    GetHealthPercent(): number;
    /**
     * 总生命恢复
     */
    GetHealthRegen(): number;
    /**
     * 边界体积
     *
     * @both
     */
    GetHullRadius(): number;
    /**
     * 移动速度
     *
     * @both
     */
    GetIdealSpeed(): number;
    /**
     * Returns speed after all modifiers, but excluding those that reduce speed.
     *
     * @both
     */
    GetIdealSpeedNoSlows(): number;
    /**
     * 额外攻击速度
     *
     * @both
     */
    GetIncreasedAttackSpeed(ignoreTempAttackSpeed: boolean): number;
    /**
     * Returns the initial waypoint goal for this NPC.
     */
    GetInitialGoalEntity(): CBaseEntity | undefined;
    /**
     * Get waypoint position for this NPC.
     */
    GetInitialGoalPosition(): Vector;
    /**
     * Returns nth item in inventory slot (index is zero based).
     */
    GetItemInSlot(slot: number): CDOTA_Item | undefined;
    GetLastAttackTime(): number;
    /**
     * Get the last time this NPC took damage.
     */
    GetLastDamageTime(): number;
    /**
     * Get the last game time that this unit switched to/from idle state.
     */
    GetLastIdleChangeTime(): number;
    /**
     * 单位等级
     *
     * @both
     */
    GetLevel(): number;
    /**
     * Returns the player ID of the controlling player.
     */
    GetMainControllingPlayer(): number;
    /**
     * Get the mana on this unit.
     *
     * @both
     */
    GetMana(): number;
    /**
     * Get the percent of mana remaining.
     */
    GetManaPercent(): number;
    /**
     * 总魔法恢复
     *
     * @both
     */
    GetManaRegen(): number;
    /**
     * Get the maximum gold bounty for this unit.
     */
    GetMaximumGoldBounty(): number;
    /**
     * Get the maximum mana of this unit.
     *
     * @both
     */
    GetMaxMana(): number;
    /**
     * Get the minimum gold bounty for this unit.
     */
    GetMinimumGoldBounty(): number;
    /**
     * 原始模型大小
     *
     * @both
     */
    GetModelRadius(): number;
    /**
     * How many modifiers does this unit have?
     */
    GetModifierCount(): number;
    /**
     * Get a modifier name by index.
     */
    GetModifierNameByIndex(index: number): string;
    /**
     * Gets the stack count of a given modifier.
     *
     * @both
     */
    GetModifierStackCount(modifierName: string, caster: CDOTA_BaseNPC): number;
    /** @both */
    GetMoveSpeedModifier(baseSpeed: number, returnUnslowed: boolean): number;
    /**
     * Set whether this NPC is required to reach each goal entity, rather than being allowed to unkink their path.
     */
    GetMustReachEachGoalEntity(): boolean;
    /**
     * Get the name of this camp's neutral spawner.
     */
    GetNeutralSpawnerName(): string;
    /**
     * If set to true, we will never attempt to move this unit to clear space, even when it unphases.
     */
    GetNeverMoveToClearSpace(): boolean;
    /**
     * 夜间视野
     *
     * @both
     */
    GetNightTimeVisionRange(): number;
    /**
     * 敌对阵营
     *
     * @both
     */
    GetOpposingTeamNumber(): DOTATeam_t;
    /**
     * 碰撞体积
     *
     * @both
     */
    GetPaddedCollisionRadius(): number;
    /**
     * 基础护甲
     *
     * @both
     */
    GetPhysicalArmorBaseValue(): number;
    /**
     * 总护甲
     *
     * @both
     */
    GetPhysicalArmorValue(ignoreBase: boolean): number;
    /**
     * Returns the player that owns this unit.
     */
    GetPlayerOwner(): CDOTAPlayerController;
    /**
     * Get the owner player ID for this unit.
     *
     * @both
     */
    GetPlayerOwnerID(): PlayerID;
    /**
     * 弹道速度
     */
    GetProjectileSpeed(): number;
    /**
     * 弹道特效名称
     */
    GetRangedProjectileName(): string;
    GetRangeToUnit(npc: CDOTA_BaseNPC): number;
    GetRemainingPathLength(): number;
    /**
     * 当前攻击间隔
     *
     * @both
     */
    GetSecondsPerAttack(ignoreTempAttackSpeed: boolean): number;
    /**
     * 技能增强
     */
    GetSpellAmplification(baseOnly: boolean): number;
    /**
     * 状态抗性
     */
    GetStatusResistance(): number;
    /**
     * Get how much gold has been spent on ability upgrades.
     *
     * @both
     */
    GetTotalPurchasedUpgradeGoldCost(): number;
    /** @both */
    GetUnitLabel(): string;
    /**
     * Get the localization token for this unit's name.
     *
     * @client
     */
    GetUnitLocToken(): string;
    /**
     * 单位名称
     *
     * @both
     */
    GetUnitName(): string;
    /**
     * Give mana to this unit, this can be used for mana gained by abilities or item usage.
     */
    GiveMana(mana: number): void;
    /**
     * See whether this unit has an ability by name.
     */
    HasAbility(abilityName: string): boolean;
    HasAnyActiveAbilities(): boolean;
    /** @both */
    HasAttackCapability(): boolean;
    /**
     * 具有空中视野
     *
     * @both
     */
    HasFlyingVision(): boolean;
    /** @both */
    HasFlyMovementCapability(): boolean;
    /** @both */
    HasGroundMovementCapability(): boolean;
    /**
     * 拥有物品栏
     */
    HasInventory(): boolean;
    /**
     * See whether this unit has an item by name.
     *
     * @both
     */
    HasItemInInventory(itemName: string): boolean;
    /**
     * Sees if this unit has a given modifier.
     *
     * @both
     */
    HasModifier(scriptName: string): boolean;
    /** @both */
    HasMovementCapability(): boolean;
    /** @both */
    HasScepter(): boolean;
    /**
     * Heal this unit.
     */
    Heal(amount: number, inflictor: CDOTABaseAbility | undefined): void;
    /**
     * Heal this unit (with more parameters).
     */
    HealWithParams(
        amount: number,
        inflictor: object,
        lifesteal: boolean,
        amplify: boolean,
        source: object,
        spellLifesteal: boolean,
    ): void;
    /**
     * Hold position.
     */
    Hold(): void;
    Interrupt(): void;
    InterruptChannel(): void;
    InterruptMotionControllers(findClearSpace: boolean): void;
    /**
     * 存活
     */
    IsAlive(): boolean;
    /**
     * 远古单位
     *
     * @both
     */
    IsAncient(): boolean;
    /**
     * 攻击免疫
     *
     * @both
     */
    IsAttackImmune(): boolean;
    /**
     * 正在攻击
     */
    IsAttacking(): boolean;
    IsAttackingEntity(entity: CDOTA_BaseNPC): boolean;
    /**
     * Is this unit a Barracks?
     *
     * @both
     */
    IsBarracks(): this is CDOTA_BaseNPC_Building;
    /**
     * 失去视野
     *
     * @both
     */
    IsBlind(): boolean;
    /**
     * 无物理伤害格挡
     */
    IsBlockDisabled(): boolean;
    /**
     * Is this unit a boss?
     *
     * @both
     */
    IsBoss(): boolean;
    /**
     * Is this unit a Boss Creature? (used by custom games).
     */
    IsBossCreature(): boolean;
    /**
     * 建筑
     *
     * @both
     */
    IsBuilding(): this is CDOTA_BaseNPC_Building;
    /**
     * 持续施法中
     */
    IsChanneling(): boolean;
    /**
     * 分则能成克隆体
     */
    IsClone(): this is CDOTA_BaseNPC_Hero;
    /**
     * 无法行动
     *
     * @both
     */
    IsCommandRestricted(): boolean;
    /**
     * Is this unit a considered a hero for targeting purposes?
     *
     * @both
     */
    IsConsideredHero(): boolean;
    /**
     * 可控制
     *
     * @both
     */
    IsControllableByAnyPlayer(): boolean;
    /**
     * Is this unit a courier?
     *
     * @both
     */
    IsCourier(): this is CDOTA_Unit_Courier;
    /**
     * Is this a Creature type NPC?
     *
     * @both
     */
    IsCreature(): this is CDOTA_BaseNPC_Creature;
    /**
     * 普通单位
     *
     * @both
     */
    IsCreep(): boolean;
    /**
     * 英雄级单位
     *
     * @both
     */
    IsCreepHero(): boolean;
    /**
     * 水平位移中
     */
    IsCurrentlyHorizontalMotionControlled(): boolean;
    /**
     * 滞空位移中
     */
    IsCurrentlyVerticalMotionControlled(): boolean;
    /**
     * 减益免疫
     *
     * @both
     */
    IsDebuffImmune(): boolean;
    /**
     * 缴械
     *
     * @both
     */
    IsDisarmed(): boolean;
    /**
     * 被支配标记
     *
     * @both
     */
    IsDominated(): boolean;
    /**
     * 禁用闪避
     *
     * @both
     */
    IsEvadeDisabled(): boolean;
    /**
     * 恐惧
     *
     * @both
     */
    IsFeared(): boolean;
    /**
     * Is this unit an Ancient?
     *
     * @both
     */
    IsFort(): this is CDOTA_BaseNPC_Building;
    /**
     * 动作冻结
     *
     * @both
     */
    IsFrozen(): boolean;
    /**
     * Is this a hero or hero illusion?
     *
     * @both
     */
    IsHero(): this is CDOTA_BaseNPC_Hero;
    /**
     * Is this a Hero Ward?
     */
    IsHeroWard(): boolean;
    /**
     * 妖术
     *
     * @both
     */
    IsHexed(): boolean;
    /**
     * 空闲状态
     */
    IsIdle(): boolean;
    /**
     * 幻象
     *
     * @both
     */
    IsIllusion(): boolean;
    /**
     * Ask whether this unit is in range of the specified shop.
     */
    IsInRangeOfShop(shopType: DOTA_SHOP_TYPE, physical: boolean): boolean;
    /**
     * Does this unit have an inventory.
     *
     * @client
     */
    IsInventoryEnabled(): boolean;
    /**
     * 隐身
     *
     * @both
     */
    IsInvisible(): boolean;
    /**
     * 无敌
     *
     * @both
     */
    IsInvulnerable(): boolean;
    /**
     * 低攻击优先级
     *
     * @both
     */
    IsLowAttackPriority(): boolean;
    /**
     * 技能免疫
     *
     * @both
     */
    IsMagicImmune(): boolean;
    /**
     * 移动受损状态
     */
    IsMovementImpaired(): boolean;
    /**
     * 正在移动
     *
     * @both
     */
    IsMoving(): boolean;
    /**
     * 锁闭
     *
     * @both
     */
    IsMuted(): boolean;
    /**
     * 中立生物
     *
     * @both
     */
    IsNeutralUnitType(): boolean;
    /**
     * 睡眠
     *
     * @both
     */
    IsNightmared(): boolean;
    IsOpposingTeam(team: DOTATeam_t): boolean;
    /**
     * Is this unit a ward-type unit?
     *
     * @both
     */
    IsOther(): boolean;
    /**
     * 隐藏
     *
     * @both
     */
    IsOutOfGame(): boolean;
    /**
     * Is this unit owned by any non-bot player?
     *
     * @both
     */
    IsOwnedByAnyPlayer(): boolean;
    /**
     * Is this a phantom unit?
     *
     * @both
     */
    IsPhantom(): boolean;
    IsPhantomBlocker(): boolean;
    /**
     * 相位状态
     */
    IsPhased(): boolean;
    IsPositionInRange(position: Vector, range: number): boolean;
    /**
     * Is this unit a ranged attacker?
     *
     * @both
     */
    IsRangedAttacker(): boolean;
    /**
     * Is this a real hero?
     *
     * @both
     */
    IsRealHero(): this is CDOTA_BaseNPC_Hero;
    /**
     * 重生中
     */
    IsReincarnating(): boolean;
    /**
     * 缠绕
     *
     * @both
     */
    IsRooted(): boolean;
    /**
     * Is this a shrine?
     */
    IsShrine(): this is CDOTA_BaseNPC_Building;
    /**
     * 沉默
     *
     * @both
     */
    IsSilenced(): boolean;
    /**
     * 可被反补
     *
     * @both
     */
    IsSpeciallyDeniable(): boolean;
    /**
     * 无法被反补
     *
     * @both
     */
    IsSpeciallyUndeniable(): boolean;
    /**
     * 强幻象
     *
     * @both
     */
    IsStrongIllusion(): boolean;
    /**
     * 眩晕
     *
     * @both
     */
    IsStunned(): boolean;
    /**
     * 召唤单位
     *
     * @both
     */
    IsSummoned(): boolean;
    /**
     * 嘲讽
     *
     * @both
     */
    IsTaunted(): boolean;
    /**
     * 风暴双雄克隆体
     */
    IsTempestDouble(): this is CDOTA_BaseNPC_Hero;
    /**
     * Is this a tower?
     *
     * @both
     */
    IsTower(): this is CDOTA_BaseNPC_Building;
    /**
     * 克敌机先
     */
    IsUnableToMiss(): boolean;
    /**
     * 无法选中
     *
     * @both
     */
    IsUnselectable(): boolean;
    /** @client */
    IsUntargetable(): boolean;
    /** @both */
    IsUntargetableFrom(targettingSource: object): boolean;
    /**
     * 守卫
     */
    IsWard(): boolean;
    /**
     * Is this entity an Undying Zombie?
     */
    IsZombie(): boolean;
    /**
     * 击杀
     */
    Kill(ability: CDOTABaseAbility | undefined, attacker: CDOTA_BaseNPC | undefined): void;
    /**
     * @deprecated Added for compatibility with CBaseEntity. Invalid at the runtime.
     */
    Kill(): never;
    MakeIllusion(): void;
    MakePhantomBlocker(): void;
    MakeVisibleDueToAttack(team: DOTATeam_t, radius: number): void;
    MakeVisibleToTeam(team: DOTATeam_t, duration: number): void;
    ManageModelChanges(): void;
    /**
     * Sets the health to a specific value, with optional flags or inflictors.
     */
    ModifyHealth(
        desiredHealthValue: number,
        ability: CDOTABaseAbility | undefined,
        lethal: boolean,
        additionalFlags: number,
    ): void;
    /**
     * Move to follow a unit.
     */
    MoveToNPC(npc: CDOTA_BaseNPC): void;
    /**
     * Give an item to another unit.
     */
    MoveToNPCToGiveItem(npc: CDOTA_BaseNPC, item: CDOTA_Item): void;
    /**
     * Issue a Move-To command.
     */
    MoveToPosition(dest: Vector): void;
    /**
     * Issue an Attack-Move-To command.
     */
    MoveToPositionAggressive(dest: Vector): void;
    /**
     * Move to a target to attack.
     */
    MoveToTargetToAttack(target: CDOTA_BaseNPC): void;
    /**
     * 隐藏单位生命条
     *
     * @both
     */
    NoHealthBar(): boolean;
    /**
     * 非跟随目标
     *
     * @both
     */
    NoTeamMoveTo(): boolean;
    /**
     * 选择组忽略置入
     *
     * @both
     */
    NoTeamSelect(): boolean;
    NotifyWearablesOfModelChange(originalModel: boolean): void;
    /**
     * 隐藏小地图图标
     *
     * @both
     */
    NotOnMinimap(): boolean;
    /**
     * 对敌无小地图标
     *
     * @both
     */
    NotOnMinimapForEnemies(): boolean;
    /**
     * 无碰撞体积
     *
     * @both
     */
    NoUnitCollision(): boolean;
    /**
     * Tells the underlying AI to move in the given direction, skipping Dota orders.
     */
    OnCommandMoveToDirection(pos: Vector): void;
    /** @both */
    PassivesDisabled(): boolean;
    /**
     * Issue a Patrol-To command.
     */
    PatrolToPosition(dest: Vector): void;
    /**
     * Performs an attack on a target.
     */
    PerformAttack(
        target: CDOTA_BaseNPC,
        useCastAttackOrb: boolean,
        processProcs: boolean,
        skipCooldown: boolean,
        ignoreInvis: boolean,
        useProjectile: boolean,
        fakeAttack: boolean,
        neverMiss: boolean,
    ): void;
    /**
     * Pick up a dropped item.
     */
    PickupDroppedItem(item: CDOTA_Item): void;
    /**
     * Pick up a rune.
     */
    PickupRune(item: CDOTA_Item): void;
    /**
     * Play a VCD on the NPC.
     */
    PlayVCD(vcd: string): void;
    /**
     * 共享视野
     *
     * @both
     */
    ProvidesVision(): boolean;
    Purge(
        removePositiveBuffs: boolean,
        removeDebuffs: boolean,
        frameOnly: boolean,
        removeStuns: boolean,
        removeExceptions: boolean,
    ): void;
    /**
     * Queue a response system concept with the TLK_DOTA_CUSTOM concept, after a delay.
     */
    QueueConcept<TCallbackInfo>(
        delay: number,
        criteriaTable: object,
        completionCallbackFn: (didActuallySpeak: boolean, callbackInfo: TCallbackInfo) => void,
        context: undefined,
        callbackInfo: TCallbackInfo,
    ): void;
    QueueConcept<TCallbackInfo, TContext extends {}>(
        delay: number,
        criteriaTable: object,
        completionCallbackFn: (this: TContext, didActuallySpeak: boolean, callbackInfo: TCallbackInfo) => void,
        context: TContext,
        callbackInfo: TCallbackInfo,
    ): void;
    /**
     * Queue a response system concept with the TLK_DOTA_CUSTOM concept, after a delay, for the same team this speaker is on.
     */
    QueueTeamConcept<TCallbackInfo>(
        delay: number,
        criteriaTable: object,
        completionCallbackFn: (didActuallySpeak: boolean, callbackInfo: TCallbackInfo) => void,
        context: undefined,
        callbackInfo: TCallbackInfo,
    ): void;
    QueueTeamConcept<TCallbackInfo, TContext extends {}>(
        delay: number,
        criteriaTable: object,
        completionCallbackFn: (this: TContext, didActuallySpeak: boolean, callbackInfo: TCallbackInfo) => void,
        context: TContext,
        callbackInfo: TCallbackInfo,
    ): void;
    /**
     * Queue a response system concept with the TLK_DOTA_CUSTOM concept, after a delay, for the same team this speaker is on. Is not played for spectators.
     */
    QueueTeamConceptNoSpectators<TCallbackInfo>(
        delay: number,
        criteriaTable: object,
        completionCallbackFn: (didActuallySpeak: boolean, callbackInfo: TCallbackInfo) => void,
        context: undefined,
        callbackInfo: TCallbackInfo,
    ): void;
    QueueTeamConceptNoSpectators<TCallbackInfo, TContext extends {}>(
        delay: number,
        criteriaTable: object,
        completionCallbackFn: (this: TContext, didActuallySpeak: boolean, callbackInfo: TCallbackInfo) => void,
        context: TContext,
        callbackInfo: TCallbackInfo,
    ): void;
    /**
     * Remove an ability from this unit by name.
     */
    RemoveAbility(abilityName: string): void;
    /**
     * Remove the passed ability from this unit.
     */
    RemoveAbilityByHandle(ability: CDOTABaseAbility): void;
    RemoveAbilityFromIndexByName(abilityName: string): void;
    /**
     * @param targets 0=all, 1=enemy, 2=ally
     */
    RemoveAllModifiers(targets: 0 | 1 | 2, now: boolean, permanent: boolean, death: boolean): void;
    /**
     * Removes all copies of a modifier.
     */
    RemoveAllModifiersOfName(scriptName: string): void;
    /**
     * Remove the given gesture activity.
     */
    RemoveGesture(activity: GameActivity_t): void;
    RemoveHorizontalMotionController(buff: CDOTA_Buff): void;
    /**
     * Removes the passed item from this unit's inventory and deletes it.
     */
    RemoveItem(item: CDOTA_Item): void;
    /**
     * Removes a modifier.
     */
    RemoveModifierByName(scriptName: string): void;
    /**
     * Removes a modifier that was cast by the given caster.
     */
    RemoveModifierByNameAndCaster(scriptName: string, caster: CDOTA_BaseNPC): void;
    /**
     * 移除不可见标记
     */
    RemoveNoDraw(): void;
    RemoveVerticalMotionController(buff: CDOTA_Buff): void;
    /**
     * 复活单位
     */
    RespawnUnit(): void;
    /**
     * Gets this unit's attack range after all modifiers.
     *
     * @both
     */
    Script_GetAttackRange(): number;
    /**
     * Returns current magical armor value.
     *
     * @both
     */
    Script_GetMagicalArmorValue(inflictor: object): number;
    /** @both */
    Script_IsDeniable(): boolean;
    /**
     * Remove mana from this unit, this can be used for involuntary mana loss, not for mana that is spent.
     */
    Script_ReduceMana(mana: number, ability: object): number;
    /**
     * Sells the passed item in this unit's inventory.
     */
    SellItem(item: CDOTA_Item): void;
    /**
     * Set the ability by index.
     */
    SetAbilityByIndex(ability: CDOTABaseAbility, index: number): void;
    /**
     * 设置攻击警戒距离
     */
    SetAcquisitionRange(range: number): void;
    /**
     * Combat involving this creature will have this weight added to the music calcuations.
     */
    SetAdditionalBattleMusicWeight(weight: number): void;
    /**
     * Set this unit's aggro target to a specified unit.
     */
    SetAggroTarget(aggroTarget: CDOTA_BaseNPC): void;
    SetAttackCapability(attackCapabilities: DOTAUnitAttackCapability_t): void;
    SetAttacking(attackTarget: CDOTA_BaseNPC | undefined): void;
    /**
     * 设置基础攻击间隔
     */
    SetBaseAttackTime(baseAttackTime: number): void;
    /**
     * Sets the maximum base damage.
     */
    SetBaseDamageMax(max: number): void;
    /**
     * Sets the minimum base damage.
     */
    SetBaseDamageMin(min: number): void;
    /**
     * 设置固有生命恢复
     */
    SetBaseHealthRegen(healthRegen: number): void;
    /**
     * Sets base magical armor value.
     */
    SetBaseMagicalResistanceValue(magicalResistanceValue: number): void;
    /**
     * 设置固有魔法恢复
     */
    SetBaseManaRegen(manaRegen: number): void;
    /**
     * Set a new base max health value.
     */
    SetBaseMaxHealth(baseMaxHealth: number): void;
    SetBaseMoveSpeed(moveSpeed: number): void;
    /**
     * 禁止/允许出售物品
     */
    SetCanSellItems(canSell: boolean): void;
    /**
     * Set this unit controllable by all players.
     */
    SetControllableByAllPlayers(controllableByAllPlayers: boolean): void;
    /**
     * Set this unit controllable by the player with the passed ID.
     */
    SetControllableByPlayer(playerId: PlayerID, skipAdjustingPosition: boolean): void;
    SetCursorCastTarget(entity: CDOTA_BaseNPC | undefined): void;
    SetCursorPosition(location: Vector): void;
    SetCursorTargetingNothing(targetingNothing: boolean): void;
    SetCustomHealthLabel(label: string, r: number, g: number, b: number): void;
    /**
     * Set the base vision range.
     */
    SetDayTimeVisionRange(range: number): void;
    /**
     * 设置击杀经验
     */
    SetDeathXP(xpBounty: number): void;
    /**
     * 设置跟随距离
     */
    SetFollowRange(followRange: number): void;
    SetForceAttackTarget(npc: CDOTA_BaseNPC | undefined): void;
    SetForceAttackTargetAlly(npc: CDOTA_BaseNPC | undefined): void;
    /**
     * 封禁/解封物品栏
     */
    SetHasInventory(hasInventory: boolean): void;
    SetHealthBarOffsetOverride(offset: number): void;
    /**
     * 设置边界体积
     */
    SetHullRadius(hullRadius: number): void;
    SetIdleAcquire(idleAcquire: boolean): void;
    /**
     * Sets the initial waypoint goal for this NPC.
     */
    SetInitialGoalEntity(goal: CBaseEntity | undefined): void;
    /**
     * Set waypoint position for this NPC.
     */
    SetInitialGoalPosition(position: Vector): void;
    /**
     * Set the mana on this unit.
     */
    SetMana(mana: number): void;
    /**
     * Set the maximum gold bounty for this unit.
     */
    SetMaximumGoldBounty(goldBountyMax: number): void;
    /**
     * 设置最大魔法值
     */
    SetMaxMana(maxMana: number): void;
    /**
     * Set the minimum gold bounty for this unit.
     */
    SetMinimumGoldBounty(goldBountyMin: number): void;
    /**
     * Sets the stack count of a given modifier.
     */
    SetModifierStackCount(scriptName: string, caster: CDOTA_BaseNPC, stackCount: number): void;
    SetMoveCapability(moveCapabilities: DOTAUnitMoveCapability_t): void;
    /**
     * Set whether this NPC is required to reach each goal entity, rather than being allowed to unkink their path.
     */
    SetMustReachEachGoalEntity(must: boolean): void;
    /**
     * If set to true, we will never attempt to move this unit to clear space, even when it unphases.
     */
    SetNeverMoveToClearSpace(neverMoveToClearSpace: boolean): void;
    /**
     * Returns the vision range after modifiers.
     */
    SetNightTimeVisionRange(range: number): void;
    /**
     * Set the unit's origin.
     */
    SetOrigin(location: Vector): void;
    /**
     * Sets the original model of this entity, which it will tend to fall back to anytime its state changes.
     */
    SetOriginalModel(modelName: string): void;
    /**
     * Sets base physical armor value.
     */
    SetPhysicalArmorBaseValue(physicalArmorValue: number): void;
    SetRangedProjectileName(projectileName: string): void;
    /**
     * Sets the client side map reveal radius for this unit.
     */
    SetRevealRadius(revealRadius: number): void;
    SetShouldComputeRemainingPathLength(compute: boolean): void;
    SetShouldDoFlyHeightVisual(shouldVisuallyFly: boolean): void;
    SetStolenScepter(stolenScepter: boolean): void;
    /**
     * 开启/关闭单位复活
     */
    SetUnitCanRespawn(canRespawn: boolean): void;
    /**
     * 设定单位名称
     */
    SetUnitName(name: string): void;
    ShouldIdleAcquire(): boolean;
    /**
     * Speak a response system concept with the TLK_DOTA_CUSTOM concept.
     */
    SpeakConcept(criteriaTable: object): void;
    /**
     * Spend mana from this unit, this can be used for spending mana from abilities or item usage.
     */
    SpendMana(manaSpent: number, ability: CDOTABaseAbility): void;
    /**
     * Add the given gesture activity.
     */
    StartGesture(activity: GameActivity_t): void;
    /**
     * Add the given gesture activity faded according to its sequence settings.
     */
    StartGestureFadeWithSequenceSettings(activity: GameActivity_t): void;
    /**
     * Add the given gesture activity faded according to to the parameters.
     */
    StartGestureWithFade(activity: GameActivity_t, fadeIn: number, fadeOut: number): void;
    /**
     * Add the given gesture activity faded according to to the parameters and with a playback rate override.
     */
    StartGestureWithFadeAndPlaybackRate(activity: number, fadeIn: number, fadeOut: number, rate: number): void;
    /**
     * Add the given gesture activity with a playback rate override.
     */
    StartGestureWithPlaybackRate(activity: GameActivity_t, rate: number): void;
    /**
     * Stop the current order.
     */
    Stop(): void;
    StopFacing(): void;
    /**
     * Swaps the slots of the two passed abilities and sets them enabled/disabled.
     */
    SwapAbilities(abilityName1: string, abilityName2: string, enable1: boolean, enable2: boolean): void;
    /**
     * Swap the contents of two item slots (slot1, slot2).
     */
    SwapItems(slot1: number, slot2: number): void;
    /**
     * Removed the passed item from this unit's inventory. Returns the passed item.
     */
    TakeItem(item: CDOTA_Item): CDOTA_Item;
    TimeUntilNextAttack(): number;
    TriggerModifierDodge(ability: object, buff: object): boolean;
    TriggerSpellAbsorb(ability: CDOTABaseAbility): boolean;
    /**
     * Trigger the Lotus Orb-like effect.(hAbility).
     */
    TriggerSpellReflect(ability: CDOTABaseAbility): void;
    /**
     * Makes the first ability unhidden, and puts it where second ability currently is. Will do nothing if the first ability is already unhidden and in a valid slot.
     */
    UnHideAbilityToSlot(abilityName: string, replacedAbilityName: string): void;
    /**
     * 可复活
     *
     * @both
     */
    UnitCanRespawn(): boolean;
    WasKilledPassively(): boolean;
    __kind__: 'instance';
}

declare const CDOTA_BaseNPC_Building: DotaConstructor<CDOTA_BaseNPC_Building>;

declare interface CDOTA_BaseNPC_Building extends CDOTA_BaseNPC {
    /**
     * Get the invulnerability count for a building.
     */
    GetInvulnCount(): number;
    /**
     * Set the invulnerability counter of this building.
     */
    SetInvulnCount(invulnCount: number): void;
    __kind__: 'instance';
}

declare const CDOTA_BaseNPC_Creature: DotaConstructor<CDOTA_BaseNPC_Creature>;

declare interface CDOTA_BaseNPC_Creature extends CDOTA_BaseNPC {
    /**
     * Add the specified item drop to this creature.
     */
    AddItemDrop(dropData: object): void;
    /**
     * Level the creature up by the specified number of levels.
     */
    CreatureLevelUp(levels: number): void;
    /**
     * Set creature's current disable resistance.
     */
    GetDisableResistance(): number;
    /**
     * Set creature's current disable resistance from ultimates.
     */
    GetUltimateDisableResistance(): number;
    /**
     * Is this unit a champion?
     */
    IsChampion(): boolean;
    /**
     * 重生中
     */
    IsReincarnating(): boolean;
    /**
     * Remove all item drops from this creature.
     */
    RemoveAllItemDrops(): void;
    /**
     * Does this creature aggro on the owner of the attacking unit when taking damage?
     */
    SetAggroOnOwnerOnDamage(aggro: boolean): void;
    /**
     * Set the armor gained per level on this creature.
     */
    SetArmorGain(armorGain: number): void;
    /**
     * Set the attack time gained per level on this creature.
     */
    SetAttackTimeGain(attackTimeGain: number): void;
    /**
     * Set the bounty gold gained per level on this creature.
     */
    SetBountyGain(bountyGain: number): void;
    /**
     * Flag this unit as a champion creature.
     */
    SetChampion(isChampion: boolean): void;
    /**
     * Set the damage gained per level on this creature.
     */
    SetDamageGain(damageGain: number): void;
    /**
     * Set creature's current disable resistance.
     */
    SetDisableResistance(disableResistance: number): void;
    /**
     * Set the disable resistance gained per level on this creature.
     */
    SetDisableResistanceGain(disableResistanceGain: number): void;
    /**
     * Switches visible econ item group.
     */
    SetEconItemGroup(group: number): void;
    /**
     * Set the hit points gained per level on this creature.
     */
    SetHPGain(hpGain: number): void;
    /**
     * Set the hit points regen gained per level on this creature.
     */
    SetHPRegenGain(hpRegenGain: number): void;
    /**
     * Set the magic resistance gained per level on this creature.
     */
    SetMagicResistanceGain(magicResistanceGain: number): void;
    /**
     * Set the mana points gained per level on this creature.
     */
    SetManaGain(manaGain: number): void;
    /**
     * Set the mana points regen gained per level on this creature.
     */
    SetManaRegenGain(manaRegenGain: number): void;
    /**
     * Set the move speed gained per level on this creature.
     */
    SetMoveSpeedGain(moveSpeedGain: number): void;
    /**
     * Set whether creatures require reaching their end path before becoming idle.
     */
    SetRequiresReachingEndPath(requiresReachingEndPath: boolean): void;
    /**
     * Set creature's current disable resistance from ultimates.
     */
    SetUltimateDisableResistance(ultDisableResistance: number): void;
    /**
     * Set the XP gained per level on this creature.
     */
    SetXPGain(xpGain: number): void;
    __kind__: 'instance';
}

declare const CDOTA_BaseNPC_Hero: DotaConstructor<CDOTA_BaseNPC_Hero>;

/** @client */
declare const C_DOTA_BaseNPC_Hero: typeof CDOTA_BaseNPC_Hero;

declare interface CDOTA_BaseNPC_Hero extends CDOTA_BaseNPC {
    AddExperience(
        xp: number,
        reason: EDOTA_ModifyXP_Reason,
        applyBotDifficultyScaling: boolean,
        incrementTotal: boolean,
        cloneCount: number,
    ): boolean;
    /**
     * Spend the gold and buyback with this hero.
     */
    Buyback(): void;
    /**
     * Recalculate all stats after the hero gains stats.
     */
    CalculateStatBonus(force: boolean): void;
    /**
     * Returns boolean value result of buyback gold limit time less than game time.
     */
    CanEarnGold(): boolean;
    /**
     * Value is stored in PlayerResource.
     */
    ClearLastHitMultikill(): void;
    /**
     * Value is stored in PlayerResource.
     */
    ClearLastHitStreak(): void;
    /**
     * Value is stored in PlayerResource.
     */
    ClearStreak(): void;
    /**
     * Gets the current unspent ability points.
     */
    GetAbilityPoints(): number;
    GetAdditionalOwnedUnits(): CDOTA_BaseNPC[];
    /**
     * 总敏捷
     *
     * @both
     */
    GetAgility(): number;
    /**
     * 敏捷成长
     */
    GetAgilityGain(): number;
    /**
     * Value is stored in PlayerResource.
     */
    GetAssists(): number;
    GetAttacker(index: number): number;
    /**
     * 基础敏捷
     */
    GetBaseAgility(): number;
    /**
     * Hero damage is also affected by attributes.
     */
    GetBaseDamageMax(): number;
    /**
     * Hero damage is also affected by attributes.
     */
    GetBaseDamageMin(): number;
    /**
     * 基础智力
     */
    GetBaseIntellect(): number;
    /**
     * 基础魔法恢复
     */
    GetBaseManaRegen(): number;
    /**
     * 基础力量
     */
    GetBaseStrength(): number;
    /**
     * 属性攻击力
     */
    GetBonusDamageFromPrimaryStat(): number;
    /**
     * Return float value for the amount of time left on cooldown for this hero's buyback.
     */
    GetBuybackCooldownTime(): number;
    /**
     * Return integer value for the gold cost of a buyback.
     */
    GetBuybackCost(): number;
    /**
     * Returns the amount of time gold gain is limited after buying back.
     */
    GetBuybackGoldLimitTime(): number;
    /**
     * Returns the amount of XP.
     */
    GetCurrentXP(): number;
    GetDeathGoldCost(): number;
    /**
     * Value is stored in PlayerResource.
     */
    GetDeaths(): number;
    /**
     * Value is stored in PlayerResource.
     */
    GetDenies(): number;
    /**
     * 当前金钱
     */
    GetGold(): number;
    /**
     * 死亡金钱给与
     */
    GetGoldBounty(): number;
    /**
     * 命石ID
     *
     * @both
     */
    GetHeroFacetID(): number;
    /**
     * 英雄ID
     */
    GetHeroID(): number;
    /**
     * 额外攻击速度
     */
    GetIncreasedAttackSpeed(ignoreTempAttackSpeed: boolean): number;
    /**
     * 总智力
     *
     * @both
     */
    GetIntellect(skipNoConsume: boolean): number;
    /**
     * 智力成长
     */
    GetIntellectGain(): number;
    /**
     * Value is stored in PlayerResource.
     */
    GetKills(): number;
    /**
     * Value is stored in PlayerResource.
     */
    GetLastHits(): number;
    GetMostRecentDamageTime(): number;
    GetMultipleKillCount(): number;
    GetNumAttackers(): number;
    GetNumItemsInInventory(): number;
    GetNumItemsInStash(): number;
    /**
     * 基础护甲
     */
    GetPhysicalArmorBaseValue(): number;
    /**
     * 玩家ID
     */
    GetPlayerID(): PlayerID;
    /**
     * 英雄类型
     */
    GetPrimaryAttribute(): Attributes;
    GetPrimaryStatValue(): number;
    /**
     * If hero is under Replicate effect, returns original hero entity.
     */
    GetReplicatingOtherHero(): CDOTA_BaseNPC_Hero | undefined;
    /**
     * 禁用复活
     */
    GetRespawnsDisabled(): boolean;
    /**
     * 复活所需时间
     */
    GetRespawnTime(): number;
    /**
     * Value is stored in PlayerResource.
     */
    GetStreak(): number;
    /**
     * 总力量
     *
     * @both
     */
    GetStrength(): number;
    /**
     * 力量成长
     */
    GetStrengthGain(): number;
    /**
     * 复活剩余时间
     */
    GetTimeUntilRespawn(): number;
    /**
     * Get wearable entity in slot (slot).
     */
    GetTogglableWearable(slotType: DOTASlotType_t): CBaseAnimatingActivity | undefined;
    HasAnyAvailableInventorySpace(): boolean;
    /**
     * 具有空中视野
     */
    HasFlyingVision(): boolean;
    HasOwnerAbandoned(): boolean;
    HasRoomForItem(itemName: string, includeStashCombines: boolean, allowSelling: boolean): number;
    /**
     * Levels up the hero, true or false to play effects.
     */
    HeroLevelUp(playEffects: boolean): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementAssists(killerId: PlayerID): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementDeaths(killerId: PlayerID): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementDenies(): void;
    /**
     * Passed ID is for the victim, killer ID is ID of the current hero.  Value is stored in PlayerResource.
     */
    IncrementKills(victimId: PlayerID): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementLastHitMultikill(): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementLastHits(): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementLastHitStreak(): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementNearbyCreepDeaths(): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementStreak(): void;
    IsBuybackDisabledByDevilsBargain(): boolean;
    /**
     * 重生中
     */
    IsReincarnating(): boolean;
    /**
     * 储藏处可用
     */
    IsStashEnabled(): boolean;
    KilledHero(hero: CDOTA_BaseNPC_Hero, inflictor: CDOTABaseAbility | undefined): void;
    /**
     * Adds passed value to base attribute value, then calls CalculateStatBonus.
     */
    ModifyAgility(newAgility: number): void;
    /**
     * Gives this hero some gold.
     */
    ModifyGold(goldChange: number, reliable: boolean, reason: EDOTA_ModifyGold_Reason): number;
    /**
     * Gives this hero some gold, using the gold filter if extra filtering is on.
     */
    ModifyGoldFiltered(goldChange: number, reliable: boolean, reason: EDOTA_ModifyGold_Reason): number;
    /**
     * Adds passed value to base attribute value, then calls CalculateStatBonus.
     */
    ModifyIntellect(newIntellect: number): void;
    /**
     * Adds passed value to base attribute value, then calls CalculateStatBonus.
     */
    ModifyStrength(newStrength: number): void;
    PerformTaunt(): void;
    RecordLastHit(): void;
    /**
     * Respawn this hero.
     */
    RespawnHero(buyBack: boolean, respawnPenalty: boolean): void;
    /**
     * Sets the current unspent ability points.
     */
    SetAbilityPoints(points: number): void;
    SetBaseAgility(agility: number): void;
    SetBaseIntellect(intellect: number): void;
    SetBaseStrength(strength: number): void;
    SetBotDifficulty(difficulty: number): void;
    /**
     * Sets the buyback cooldown time.
     */
    SetBuybackCooldownTime(time: number): void;
    SetBuyBackDisabledByDevilsBargain(buybackDisabled: boolean): void;
    /**
     * Set the amount of time gold gain is limited after buying back.
     */
    SetBuybackGoldLimitTime(time: number): void;
    /**
     * Sets a custom experience value for this hero.  Note, GameRules boolean must be set for this to work!
     */
    SetCustomDeathXP(value: number): void;
    /**
     * 设置金钱
     */
    SetGold(gold: number, reliable: boolean): void;
    SetPlayerID(playerId: PlayerID): void;
    /**
     * Set this hero's primary attribute value.
     */
    SetPrimaryAttribute(primaryAttribute: Attributes): void;
    SetRespawnPosition(origin: Vector): void;
    /**
     * Prevent this hero from respawning.
     */
    SetRespawnsDisabled(disableRespawns: boolean): void;
    SetStashEnabled(enabled: boolean): void;
    SetTimeUntilRespawn(time: number): void;
    /**
     * 飞行视觉效果
     */
    ShouldDoFlyHeightVisual(): boolean;
    SpendGold(cost: number, reason: EDOTA_ModifyGold_Reason): void;
    /**
     * This upgrades the passed ability if it exists and the hero has enough ability points.
     */
    UpgradeAbility(ability: CDOTABaseAbility): void;
    /**
     * 可重生
     */
    WillReincarnate(): boolean;
    __kind__: 'instance';
}

declare const CDOTA_BaseNPC_LotusPool: DotaConstructor<CDOTA_BaseNPC_LotusPool>;

declare interface CDOTA_BaseNPC_LotusPool extends CDOTA_BaseNPC_Building {
    __kind__: 'instance';
}

declare const CDOTA_BaseNPC_NeutralItemStash: DotaConstructor<CDOTA_BaseNPC_NeutralItemStash>;

declare interface CDOTA_BaseNPC_NeutralItemStash extends CDOTA_BaseNPC_Building {
    __kind__: 'instance';
}

declare const CDOTA_BaseNPC_Shop: DotaConstructor<CDOTA_BaseNPC_Shop>;

declare interface CDOTA_BaseNPC_Shop extends CDOTA_BaseNPC_Building {
    /**
     * Get the DOTA_SHOP_TYPE.
     */
    GetShopType(): DOTA_SHOP_TYPE;
    /**
     * Set the DOTA_SHOP_TYPE.
     */
    SetShopType(shopType: DOTA_SHOP_TYPE): void;
    __kind__: 'instance';
}

declare const CDOTA_BaseNPC_Trap_Ward: DotaConstructor<CDOTA_BaseNPC_Trap_Ward>;

declare interface CDOTA_BaseNPC_Trap_Ward extends CDOTA_BaseNPC_Creature {
    /**
     * Get the trap target for this entity.
     */
    GetTrapTarget(): Vector;
    /**
     * Set the animation sequence for this entity.
     */
    SetAnimation(animation: string): void;
    __kind__: 'instance';
}

declare const CDOTA_BaseNPC_Watch_Tower: DotaConstructor<CDOTA_BaseNPC_Watch_Tower>;

declare interface CDOTA_BaseNPC_Watch_Tower extends CDOTA_BaseNPC_Building {
    /**
     * The name of the ability used when triggering interaction on the outpost.
     */
    GetInteractAbilityName(): string;
    /**
     * The name of the ability used when triggering interaction on the outpost.
     */
    SetInteractAbilityName(interactAbilityName: string): void;
    __kind__: 'instance';
}

/** @both */
declare const CDOTA_Buff: DotaConstructor<CDOTA_Buff>;

declare interface CDOTA_Buff {
    /** @both */
    AddParticle(
        index: number,
        destroyImmediately: boolean,
        statusEffect: boolean,
        priority: number,
        heroEffect: boolean,
        overheadEffect: boolean,
    ): void;
    /** @both */
    CheckStateToTable(table: object): void;
    /**
     * Decrease this modifier's stack count by 1.
     *
     * @both
     */
    DecrementStackCount(): void;
    /**
     * Run all associated destroy functions, then remove the modifier.
     *
     * @both
     */
    Destroy(): void;
    /**
     * 结束时移除
     *
     * @both
     */
    DestroyOnExpire(): boolean;
    /**
     * Run all associated refresh functions on this modifier as if it was re-applied.
     *
     * @both
     */
    ForceRefresh(): void;
    /**
     * 来源技能
     *
     * @both
     */
    GetAbility(): CDOTABaseAbility | undefined;
    /**
     * 光环粘滞时间
     *
     * @both
     */
    GetAuraDuration(): number;
    /**
     * 光环拥有者
     *
     * @both
     */
    GetAuraOwner(): CDOTA_BaseNPC | undefined;
    /**
     * 施加来源
     *
     * @both
     */
    GetCaster(): CDOTA_BaseNPC | undefined;
    /**
     * Modifier类名
     *
     * @both
     */
    GetClass(): string;
    /**
     * 首次创建时间
     *
     * @both
     */
    GetCreationTime(): number;
    /**
     * 结束时间
     *
     * @both
     */
    GetDieTime(): number;
    /**
     * 持续时间
     *
     * @both
     */
    GetDuration(): number;
    /** @both */
    GetElapsedTime(): number;
    /**
     * 上次施加时间
     *
     * @both
     */
    GetLastAppliedTime(): number;
    /** @both */
    GetName(): string;
    /**
     * 作用单位
     *
     * @both
     */
    GetParent(): CDOTA_BaseNPC;
    /** @both */
    GetRemainingTime(): number;
    /**
     * Modifier ID
     *
     * @both
     */
    GetSerialNumber(): number;
    /** @both */
    GetStackCount(): number;
    /** @both */
    HasFunction(func: modifierfunction): boolean;
    /**
     * Increase this modifier's stack count by 1.
     *
     * @both
     */
    IncrementStackCount(): void;
    /** @both */
    IsDebuff(): boolean;
    /** @both */
    IsHexDebuff(): boolean;
    /**
     * Has underlying C++ entity object been deleted?
     *
     * @both
     */
    IsNull(): boolean;
    /** @both */
    IsStunDebuff(): boolean;
    SendBuffRefreshToClients(): void;
    /** @both */
    SetDuration(duration: number, informClient: boolean): void;
    /** @both */
    SetOverheadEffectOffset(offset: number): boolean;
    /** @both */
    SetStackCount(count: number): void;
    /**
     * Start this modifier's think function (OnIntervalThink) with the given interval (float).  To stop, call with -1.
     *
     * @both
     */
    StartIntervalThink(interval: number): void;
    __kind__: 'instance';
}

declare const CustomUI: CDOTA_CustomUIManager;

declare const CDOTA_CustomUIManager: DotaConstructor<CDOTA_CustomUIManager>;

declare interface CDOTA_CustomUIManager {
    /**
     * Create a new custom UI HUD element for the specified player(s).
     */
    DynamicHud_Create(playerId: PlayerID, elementId: string, layoutFileName: string, dialogVariables: object): void;
    /**
     * Destroy a custom hud element.
     */
    DynamicHud_Destroy(playerId: PlayerID, elementId: string): void;
    /**
     * Add or modify dialog variables for an existing custom hud element.
     */
    DynamicHud_SetDialogVariables(playerId: PlayerID, elementId: string, dialogVariables: object): void;
    /**
     * Toggle the visibility of an existing custom hud element.
     */
    DynamicHud_SetVisible(playerId: PlayerID, elementId: string, visible: boolean): void;
    __kind__: 'instance';
}

declare const CDOTA_Item: DotaConstructor<CDOTA_Item>;

/** @client */
declare const C_DOTA_Item: typeof CDOTA_Item;

declare interface CDOTA_Item extends CDOTABaseAbility {
    /**
     * 可在主物品栏外使用
     */
    CanBeUsedOutOfInventory(): boolean;
    /** @client */
    CanOnlyPlayerHeroPickup(): boolean;
    /**
     * Get the container for this item.
     */
    GetContainer(): CDOTA_Item_Physical | undefined;
    /**
     * 物品价格
     */
    GetCost(): number;
    /**
     * Get the number of charges this item currently has.
     *
     * @both
     */
    GetCurrentCharges(): number;
    /**
     * Get the initial number of charges this item has.
     *
     * @both
     */
    GetInitialCharges(): number;
    /**
     * 物品槽位
     *
     * @both
     */
    GetItemSlot(): -1 | DOTAScriptInventorySlot_t;
    /**
     * Gets whether item is unequipped or ready.
     */
    GetItemState(): number;
    /**
     * 物品携带者
     */
    GetParent(): object;
    /**
     * 物品购买者
     */
    GetPurchaser(): CDOTA_BaseNPC | undefined;
    /**
     * 获取时间
     */
    GetPurchaseTime(): number;
    /**
     * 次级能量点数
     *
     * @both
     */
    GetSecondaryCharges(): number;
    /** @both */
    GetShareability(): EShareAbility;
    /**
     * 无效能量点数
     */
    GetValuelessCharges(): number;
    IsActiveNeutral(): boolean;
    /**
     * 特殊使用提示物品
     *
     * @both
     */
    IsAlertableItem(): boolean;
    /**
     * 拾起物品时自动施放
     *
     * @both
     */
    IsCastOnPickup(): boolean;
    /**
     * 可用于合成物品
     */
    IsCombinable(): boolean;
    /**
     * 物品已锁定合成
     */
    IsCombineLocked(): boolean;
    /** @both */
    IsDisassemblable(): boolean;
    /**
     * 物品可置于地面
     *
     * @both
     */
    IsDroppable(): boolean;
    /**
     * 处于背包中
     *
     * @both
     */
    IsInBackpack(): boolean;
    /** @both */
    IsItem(): this is CDOTA_Item;
    /**
     * 物品可被摧毁
     *
     * @both
     */
    IsKillable(): boolean;
    /**
     * 物品已禁用
     *
     * @both
     */
    IsMuted(): boolean;
    /**
     * Is this a permanent item?
     *
     * @both
     */
    IsPermanent(): boolean;
    /**
     * 物品可购买
     *
     * @both
     */
    IsPurchasable(): boolean;
    /** @both */
    IsRecipe(): boolean;
    /**
     * 已合成物品
     *
     * @both
     */
    IsRecipeGenerated(): boolean;
    /** @both */
    IsSellable(): boolean;
    /**
     * 物品可堆叠
     *
     * @both
     */
    IsStackable(): boolean;
    LaunchLoot(
        autoUse: boolean,
        height: number,
        duration: number,
        endPoint: Vector,
        teleportOwner: CDOTA_BaseNPC_Hero | undefined,
    ): void;
    LaunchLootInitialHeight(
        autoUse: boolean,
        initialHeight: number,
        launchHeight: number,
        duration: number,
        endPoint: Vector,
    ): void;
    LaunchLootRequiredHeight(
        autoUse: boolean,
        requiredHeight: number,
        height: number,
        duration: number,
        endPoint: Vector,
    ): void;
    /**
     * Modifies the number of valueless charges on this item.
     */
    ModifyNumValuelessCharges(charges: number): void;
    OnEquip(): void;
    OnUnequip(): void;
    /**
     * 含点数物品
     *
     * @both
     */
    RequiresCharges(): boolean;
    SetCanBeUsedOutOfInventory(value: boolean): void;
    SetCastOnPickup(castOnPickUp: boolean): void;
    SetCombineLocked(combineLocked: boolean): void;
    /**
     * Set the number of charges on this item.
     */
    SetCurrentCharges(charges: number): void;
    SetDroppable(droppable: boolean): void;
    /**
     * Sets whether item is unequipped or ready.
     */
    SetItemState(state: number): void;
    SetOnlyPlayerHeroPickup(onlyPlayerHero: boolean): void;
    /**
     * Set the purchaser of record for this item.
     */
    SetPurchaser(purchaser: CDOTA_BaseNPC | undefined): void;
    /**
     * Set the purchase time of this item.
     */
    SetPurchaseTime(time: number): void;
    /**
     * Set the number of secondary charges on this item.
     */
    SetSecondaryCharges(charges: number): void;
    SetSellable(sellable: boolean): void;
    SetShareability(shareability: EShareAbility): void;
    SetStacksWithOtherOwners(stacksWithOtherOwners: boolean): void;
    SpendCharge(delayRemove: number): void;
    /**
     * 可与其他玩家物品堆叠
     */
    StacksWithOtherOwners(): boolean;
    /**
     * Think this item.
     */
    Think(): void;
    __kind__: 'instance';
}

declare const CDOTA_Item_BagOfGold: DotaConstructor<CDOTA_Item_BagOfGold>;

declare interface CDOTA_Item_BagOfGold extends CDOTA_Item {
    /**
     * Set the life time of this item.
     */
    SetLifeTime(time: number): void;
    __kind__: 'instance';
}

declare const CDOTA_Item_DataDriven: DotaConstructor<CDOTA_Item_DataDriven>;

declare interface CDOTA_Item_DataDriven extends CDOTA_Item {
    /**
     * Applies a data driven modifier to the target.
     */
    ApplyDataDrivenModifier<TModifier extends CDOTA_Modifier_Lua = CDOTA_Modifier_Lua>(
        caster: CDOTA_BaseNPC,
        target: CDOTA_BaseNPC,
        modifierName: string,
        modifierTable: ModifierTable<TModifier> | undefined,
    ): void;
    /**
     * Applies a data driven thinker at the location.
     */
    ApplyDataDrivenThinker<TModifier extends CDOTA_Modifier_Lua = CDOTA_Modifier_Lua>(
        caster: CDOTA_BaseNPC,
        location: Vector,
        modifierName: string,
        modifierTable: ModifierTable<TModifier> | undefined,
    ): CDOTA_Buff;
    __kind__: 'instance';
}

declare const CDOTA_Item_EmptyBottle: DotaConstructor<CDOTA_Item_EmptyBottle>;

/** @client */
declare const C_DOTA_Item_EmptyBottle: typeof CDOTA_Item_EmptyBottle;

declare interface CDOTA_Item_EmptyBottle extends CDOTA_Item {
    /**
     * Clear the stored rune.
     */
    ClearStoredRune(): void;
    /**
     * Place a rune in the bottle.
     */
    OnRune(runeType: number): boolean;
    /**
     * Set the stored rune.
     */
    SetStoredRune(runeType: number): void;
    __kind__: 'instance';
}

declare const CDOTA_Item_Lua: DotaConstructor<CDOTA_Item_Lua>;

/** @client */
declare const C_DOTA_Item_Lua: typeof CDOTA_Item_Lua;

declare interface CDOTA_Item_Lua extends CDOTA_Item {
    /**
     * Returns true if this item can be picked up by the target unit.
     *
     * @param unit Unit trying to pick up the item.
     */
    CanUnitPickUp(unit: CDOTA_BaseNPC): boolean;
    /**
     * Determine whether an issued command with no target is valid.
     *
     * @both
     */
    CastFilterResult(): UnitFilterResult;
    /**
     * Determine whether an issued command on a location is valid.
     *
     * @both
     */
    CastFilterResultLocation(location: Vector): UnitFilterResult;
    /**
     * Determine whether an issued command on a target is valid.
     *
     * @both
     */
    CastFilterResultTarget(target: CDOTA_BaseNPC): UnitFilterResult;
    /**
     * 物品图标
     *
     * @client
     */
    GetAbilityTextureName(): string;
    /**
     * 作用范围
     *
     * @client
     */
    GetAOERadius(): number;
    /**
     * 主技能
     */
    GetAssociatedPrimaryAbilities(): string;
    /**
     * 附属技能
     */
    GetAssociatedSecondaryAbilities(): string;
    /**
     * Return cast behavior type of this ability.
     *
     * @both
     */
    GetBehavior(): DOTA_ABILITY_BEHAVIOR | Uint64;
    /**
     * Return cast range of this ability.
     *
     * @both
     */
    GetCastRange(location: Vector, target: CDOTA_BaseNPC | undefined): number;
    /**
     * Return health cost per second of channeling at the given level (-1 is current).
     *
     * @both
     */
    GetChannelledHealthCostPerSecond(level: number): number;
    /**
     * Return mana cost at the given level per second while channeling (-1 is current).
     *
     * @both
     */
    GetChannelledManaCostPerSecond(level: number): number;
    /**
     * 持续施法开始时间
     *
     * @both
     */
    GetChannelStartTime(): number;
    /**
     * 持续施法时间
     *
     * @both
     */
    GetChannelTime(): number;
    /**
     * 语音类型
     */
    GetConceptRecipientType(): number;
    /**
     * Return cooldown of this ability.
     *
     * @both
     */
    GetCooldown(level: number): number;
    /**
     * Return the error string of a failed command with no target.
     *
     * @both
     */
    GetCustomCastError(): string;
    /**
     * Return the error string of a failed command on a location.
     *
     * @both
     */
    GetCustomCastErrorLocation(location: Vector): string;
    /**
     * Return the error string of a failed command on a target.
     *
     * @both
     */
    GetCustomCastErrorTarget(target: CDOTA_BaseNPC): string;
    /**
     * (DOTA_INVALID_ORDERS nReason) Return the error string of a failed order.
     *
     * @both
     */
    GetCustomHudErrorMessage(reason: number): string;
    /**
     * 当前施法距离
     *
     * @both
     */
    GetEffectiveCastRange(location: Vector, target: object): number;
    /**
     * Return gold cost at the given level (-1 is current).
     *
     * @both
     */
    GetGoldCost(level: number): number;
    /**
     * Return health cost at the given level (-1 is current).
     *
     * @both
     */
    GetHealthCost(level: number): number;
    /**
     * 固有modifier
     */
    GetIntrinsicModifierName(): string;
    /**
     * Return mana cost at the given level (-1 is current).
     *
     * @both
     */
    GetManaCost(level: number): number;
    /**
     * Return the animation rate of the cast animation.
     */
    GetPlaybackRateOverride(): number;
    /**
     * Returns true if this ability can be used when not on the action panel.
     */
    IsHiddenAbilityCastable(): boolean;
    /**
     * 被窃取后隐藏
     */
    IsHiddenWhenStolen(): boolean;
    /**
     * Returns whether this item is muted or not.
     *
     * @both
     */
    IsMuted(): boolean;
    /**
     * 可刷新技能
     */
    IsRefreshable(): boolean;
    /**
     * 可被窃取技能
     */
    IsStealable(): boolean;
    /**
     * Cast time did not complete successfully.
     */
    OnAbilityPhaseInterrupted(): void;
    /**
     * Cast time begins (return true for successful cast).
     */
    OnAbilityPhaseStart(): boolean;
    /**
     * Channel finished.
     */
    OnChannelFinish(interrupted: boolean): void;
    /**
     * Channeling is taking place.
     */
    OnChannelThink(interval: number): void;
    /**
     * Runs when item's charge count changes. bSpent is true when the charge count change is coming from SpendCharge.
     */
    OnChargeCountChanged(spent: boolean): void;
    /**
     * Caster (hero only) gained a level, skilled an ability, or received a new stat bonus.
     */
    OnHeroCalculateStatBonus(): void;
    /**
     * A hero has died in the vicinity (ie Urn), takes table of params.
     */
    OnHeroDiedNearby(unit: CDOTA_BaseNPC, attacker: CDOTA_BaseNPC, event: object): void;
    /**
     * Caster gained a level.
     */
    OnHeroLevelUp(): void;
    /**
     * Caster inventory changed.
     */
    OnInventoryContentsChanged(): void;
    /**
     * Caster equipped item.
     */
    OnItemEquipped(item: CDOTA_Item): void;
    /**
     * Caster died.
     */
    OnOwnerDied(): void;
    /**
     * Caster respawned or spawned for the first time.
     */
    OnOwnerSpawned(): void;
    /**
     * Projectile has collided with a given target or reached its destination. If 'true` is returned, projectile would be destroyed.
     */
    OnProjectileHit(target: CDOTA_BaseNPC | undefined, location: Vector): boolean | void;
    /**
     * Projectile is actively moving.
     */
    OnProjectileThink(location: Vector): void;
    /**
     * Cast time finished, spell effects begin.
     */
    OnSpellStart(): void;
    /**
     * Special behavior when stolen by Spell Steal.
     */
    OnStolen(sourceAbility: CDOTABaseAbility): void;
    /**
     * Ability is toggled on/off.
     */
    OnToggle(): void;
    /**
     * Special behavior when lost by Spell Steal.
     */
    OnUnStolen(): void;
    /**
     * Ability gained a level.
     */
    OnUpgrade(): void;
    /**
     * 是否触发魔棒充能
     */
    ProcsMagicStick(): boolean;
    /**
     * Return the type of speech used.
     */
    SpeakTrigger(): number;
    /** @abstract */
    Precache?(context: CScriptPrecacheContext): void;
    /**
     * Called when ability entity is created, after Init.
     *
     * @abstract
     * @both
     */
    Spawn?(): void;
    __kind__: 'instance';
}

declare const CDOTA_Item_Physical: DotaConstructor<CDOTA_Item_Physical>;

declare interface CDOTA_Item_Physical extends CBaseAnimatingActivity {
    /**
     * Returned the contained item.
     */
    GetContainedItem(): CDOTA_Item;
    /**
     * Returns the game time when this item was created in the world.
     */
    GetCreationTime(): number;
    /**
     * Is this drop flagged as a loot drop?
     */
    IsLoot(): boolean;
    /**
     * Set the contained item.
     */
    SetContainedItem(item: CDOTA_Item): void;
    /**
     * Set if this drop is flagged as a loot drop.
     */
    SetIsLoot(isLoot: boolean): void;
    __kind__: 'instance';
}

declare const CDOTA_ItemSpawner: DotaConstructor<CDOTA_ItemSpawner>;

declare interface CDOTA_ItemSpawner extends CBaseEntity {
    /**
     * Returns the item name.
     */
    GetItemName(): string;
    __kind__: 'instance';
}

declare const CDOTA_MapTree: DotaConstructor<CDOTA_MapTree>;

declare interface CDOTA_MapTree extends CBaseEntity {
    /**
     * Cuts down this tree.
     */
    CutDown(teamNumberKnownTo: number): void;
    /**
     * Cuts down this tree.
     */
    CutDownRegrowAfter(regrowAfter: number, teamNumberKnownTo: number): void;
    /**
     * Grows back the tree if it was cut down.
     */
    GrowBack(): void;
    /**
     * Returns true if the tree is standing, false if it has been cut down.
     */
    IsStanding(): boolean;
    __kind__: 'instance';
}

/** @both */
declare const CDOTA_Modifier_Lua: DotaConstructor<CDOTA_Modifier_Lua>;

declare interface CDOTA_Modifier_Lua extends CDOTA_Buff {
    /**
     * 幻象可继承
     *
     * @both
     */
    AllowIllusionDuplicate(): boolean;
    /**
     * 可被自动攻击
     *
     * @both
     */
    CanParentBeAutoAttacked(): boolean;
    /**
     * 结束时移除
     *
     * @both
     */
    DestroyOnExpire(): boolean;
    /**
     * Return the types of attributes applied to this modifier.
     *
     * @both
     */
    GetAttributes(): DOTAModifierAttribute_t;
    /**
     * 光环粘滞时间
     *
     * @both
     */
    GetAuraDuration(): number;
    /**
     * Return true/false if this entity should receive the aura under specific conditions.
     *
     * @both
     */
    GetAuraEntityReject(entity: CDOTA_BaseNPC): boolean;
    /**
     * 光环范围
     *
     * @both
     */
    GetAuraRadius(): number;
    /**
     * Return the unit flags this aura respects when placing buffs.
     *
     * @both
     */
    GetAuraSearchFlags(): DOTA_UNIT_TARGET_FLAGS;
    /**
     * Return the teams this aura applies its buff to.
     *
     * @both
     */
    GetAuraSearchTeam(): DOTA_UNIT_TARGET_TEAM;
    /**
     * Return the unit classifications this aura applies its buff to.
     *
     * @both
     */
    GetAuraSearchType(): DOTA_UNIT_TARGET_TYPE;
    /**
     * A Modifier that listens to MODIFIER_PROPERTY_PREATTACK_CRITICALSTRIKE has to have a GetCritDamage implementation so we can know when to evaluate it. Value should be in 'times the original value format' e.g: 1.5 not 150.
     *
     * @both
     */
    GetCritDamage(): number;
    /**
     * Return the attach type of the particle system from GetEffectName.
     *
     * @both
     */
    GetEffectAttachType(): ParticleAttachment_t;
    /**
     * 粒子特效
     *
     * @both
     */
    GetEffectName(): string;
    /**
     * 英雄粒子特效
     *
     * @both
     */
    GetHeroEffectName(): string;
    /**
     * 光环施加的 modifier 名称
     *
     * @both
     */
    GetModifierAura(): string;
    /**
     * Return the priority order this modifier will be applied over others.
     *
     * @both
     */
    GetPriority(): modifierpriority;
    /**
     * 状态粒子特效
     *
     * @both
     */
    GetStatusEffectName(): string;
    /**
     * 状态图标
     *
     * @both
     */
    GetTexture(): string;
    /**
     * Relationship of this hero effect with those from other buffs (higher is more likely to be shown).
     *
     * @both
     */
    HeroEffectPriority(): modifierpriority;
    /**
     * 光环状态
     *
     * @both
     */
    IsAura(): boolean;
    /**
     * 死亡光环仍生效
     *
     * @both
     */
    IsAuraActiveOnDeath(): boolean;
    /**
     * True/false if this modifier should be displayed as a debuff.
     *
     * @both
     */
    IsDebuff(): boolean;
    /**
     * 是否隐藏状态图标
     *
     * @both
     */
    IsHidden(): boolean;
    /**
     * 永久状态
     *
     * @both
     */
    IsPermanent(): boolean;
    /**
     * 可被弱驱散
     *
     * @both
     */
    IsPurgable(): boolean;
    /**
     * 特殊仅强驱散
     *
     * @both
     */
    IsPurgeException(): boolean;
    /**
     * True/false if this modifier is considered a stun for purge reasons.
     *
     * @both
     */
    IsStunDebuff(): boolean;
    /**
     * Runs when the modifier is created.
     *
     * @both
     */
    OnCreated(params: object): void;
    /**
     * Runs when the modifier is destroyed (after unit loses modifier).
     *
     * @both
     */
    OnDestroy(): void;
    /**
     * Runs when the think interval occurs.
     *
     * @both
     */
    OnIntervalThink(): void;
    /**
     * Runs when the modifier is refreshed.
     *
     * @both
     */
    OnRefresh(params: object): void;
    /**
     * Runs when the modifier is destroyed (before unit loses modifier).
     *
     * @both
     */
    OnRemoved(death: boolean): void;
    /**
     * Runs when stack count changes (param is old count).
     *
     * @both
     */
    OnStackCountChanged(stackCount: number): void;
    /**
     * Returns true or false on if the effects of this modifier should pierce debuff immunity. By default uses the setting from the ability.
     *
     * @both
     */
    PiercesDebuffImmunity(): boolean;
    /**
     * 死亡驱散
     *
     * @both
     */
    RemoveOnDeath(): boolean;
    /** @both */
    SetHasCustomTransmitterData(hasCustomData: boolean): void;
    /**
     * 特效头顶偏移
     *
     * @both
     */
    ShouldUseOverheadOffset(): boolean;
    /**
     * Relationship of this status effect with those from other buffs (higher is more likely to be shown).
     *
     * @both
     */
    StatusEffectPriority(): modifierpriority;
    /**
     * 机器人额外分数（未知）
     *
     * @abstract
     * @lua不可用
     */
    BotAttackScoreBonus?(): void;
    /**
     * Return a map of enabled/disabled states.
     *
     * @abstract
     * @both
     */
    CheckState?(): Partial<Record<modifierstate, boolean>>;
    /**
     * Return a list of modifier functions this modifier implements.
     *
     * @abstract
     * @both
     */
    DeclareFunctions?(): modifierfunction[];
    /**
     * 魔法伤害无效化（例：命运敕令）
     *
     * @abstract
     * @both
     */
    GetAbsoluteNoDamageMagical?(event: ModifierAttackEvent): 0 | 1;
    /**
     * 物理伤害无效化（例：守护天使）
     *
     * @abstract
     * @both
     */
    GetAbsoluteNoDamagePhysical?(event: ModifierAttackEvent): 0 | 1;
    /**
     * 纯粹伤害无效化（例：防御符文）
     *
     * @abstract
     * @both
     */
    GetAbsoluteNoDamagePure?(event: ModifierAttackEvent): 0 | 1;
    /**
     * 技能抵挡（例：林肯法球）
     *
     * @abstract
     * @both
     */
    GetAbsorbSpell?(event: ModifierAbilityEvent): 0 | 1;
    /**
     * 动画转变（例：太多了）
     *
     * @abstract
     * @both
     */
    GetActivityTranslationModifiers?(): string;
    /**
     * 可攻击虚无单位（例：超自然）
     *
     * @abstract
     * @lua不可用
     */
    GetAllowEtherealAttack?(): void;
    /**
     * 无视攻击距离（例：飓风长戟）
     *
     * @abstract
     * @both
     */
    GetAlwaysAllowAttack?(): 0 | 1;
    /**
     * 固守原位仍自动攻击（未知）
     *
     * @abstract
     * @lua不可用
     */
    GetAlwaysAutoAttackWhileHoldPosition?(): void;
    /**
     * 攻击声音特效（例：太多了）
     *
     * @abstract
     * @both
     */
    GetAttackSound?(): string;
    /**
     * 活跃基础攻击力（例：灵幻兵械）
     *
     * @abstract
     * @both
     */
    GetBaseAttackPostBonus?(): void;
    /**
     * 定值白天视野（例：辰星破晓）
     *
     * @abstract
     * @both
     */
    GetBonusDayVision?(): number;
    /**
     * 百分比白天视野（例：邪道私语）
     *
     * @abstract
     * @both
     */
    GetBonusDayVisionPercentage?(): void;
    /**
     * 定值夜晚视野（例：月之祝福）
     *
     * @abstract
     * @both
     */
    GetBonusNightVision?(): number;
    /**
     * 特殊定值夜晚视野（例：银月之晶）
     *
     * @abstract
     * @both
     */
    GetBonusNightVisionUnique?(): number;
    /**
     * 百分比日夜视野（例：老版荒芜）
     *
     * @abstract
     * @both
     */
    GetBonusVisionPercentage?(): number;
    /**
     * 增益时间增强（例：安可）
     *
     * @abstract
     * @lua不可用
     */
    GetBuffAmplification?(): void;
    /**
     * 物理纯粹转化攻击特效（未知）
     *
     * @abstract
     * @lua不可用
     */
    GetConvertAttackPhysicalToPure?(): void;
    /**
     * 致命一击倍率增加（未知）
     *
     * @abstract
     * @lua不可用
     */
    GetCriticalStrikeBonus?(): void;
    /**
     * 禁止自动攻击（例：相位转移）
     *
     * @abstract
     * @both
     */
    GetDisableAutoAttack?(): 0 | 1;
    /**
     * 生命冻结（例：冰晶爆轰）
     *
     * @abstract
     * @both
     */
    GetDisableHealing?(): 0 | 1;
    /**
     * 魔法获取无效化（例：神杖闪烁）
     *
     * @abstract
     * @lua不可用
     */
    GetDisableManaGain?(): void;
    /**
     * 绝对白天视野上限设定（例：丛林之舞）
     *
     * @abstract
     * @both
     */
    GetFixedDayVision?(): number;
    /**
     * 绝对夜晚视野上限设定（例：丛林之舞）
     *
     * @abstract
     * @both
     */
    GetFixedNightVision?(): number;
    /**
     * 强制小地图显示（例：球状闪电）
     *
     * @abstract
     * @both
     */
    GetForceDrawOnMinimap?(): 0 | 1;
    /**
     * 幻象标识（例：幻象默认）
     *
     * @abstract
     * @both
     */
    GetIsIllusion?(): 0 | 1;
    /**
     * 百分比魔法抗性穿透（未知）
     *
     * @abstract
     * @lua不可用
     */
    GetMagicalArmorPiercingPercentageTarget?(): void;
    /**
     * 最低生命值设定（例：薄葬）
     *
     * @abstract
     * @both
     */
    GetMinHealth?(): number;
    /**
     * 最低魔法值设定（例：特别储备）
     *
     * @abstract
     * @both
     */
    GetMinMana?(): void;
    /**
     * 技能排布隐藏（例：感染）
     *
     * @abstract
     * @both
     */
    GetModifierAbilityLayout?(): number;
    /**
     * 提供技能点数（例：曲线学习）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierAbilityPoints?(): void;
    /**
     * 额外掉落中立物品（例：丛林赠品）
     *
     * @abstract
     * @both
     */
    GetModifierAdditionalNutralItemDrops?(): void;
    /**
     * 特殊定值作用范围加成（例：缚灵索）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierAoEBonusConstant?(): void;
    /**
     * 定值作用范围加成（例：亵渎之力）
     *
     * @abstract
     * @both
     */
    GetModifierAoEBonusConstantStacking?(): void;
    /**
     * 百分比作用范围加成（例：凶）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierAoEBonusPercentage?(): number;
    /**
     * 攻击弹道交互高度增加（例：冰川）
     *
     * @abstract
     * @both
     */
    GetModifierAttackHeightBonus?(): void;
    /**
     * 基础攻击前摇设定（例：严寒烧灼）
     *
     * @abstract
     * @both
     */
    GetModifierAttackPointConstant?(): number;
    /**
     * 定值攻击距离（例：瞄准）
     *
     * @abstract
     * @both
     */
    GetModifierAttackRangeBonus?(): number;
    /**
     * 百分比攻击距离（例：折跃耀光）
     *
     * @abstract
     * @both
     */
    GetModifierAttackRangeBonusPercentage?(): number;
    /**
     * 特殊定值攻击距离（例：魔龙枪）
     *
     * @abstract
     * @both
     */
    GetModifierAttackRangeBonusUnique?(): number;
    /**
     * 固有攻击距离设定（例：变形）
     *
     * @abstract
     * @both
     */
    GetModifierAttackRangeOverride?(): number;
    /**
     * 突破攻速限制（例：战斗专注）
     *
     * @abstract
     * @both
     */
    GetModifierAttackSpeed_Limit?(): void;
    /**
     * 绝对攻速上限设定（未知）
     *
     * @abstract
     * @both
     */
    GetModifierAttackSpeedAbsoluteMax?(): void;
    /**
     * 攻击速度设定（例：稳如磐石）
     *
     * @abstract
     * @both
     */
    GetModifierAttackSpeedBaseOverride?(): number;
    /**
     * 定值攻击速度（例：超强力量）
     *
     * @abstract
     * @both
     */
    GetModifierAttackSpeedBonus_Constant?(): number;
    /**
     * 百分比攻击速度（例：长大）
     *
     * @abstract
     * @both
     */
    GetModifierAttackSpeedPercentage?(): number;
    /**
     * 百分比减攻速调整（未知）
     *
     * @abstract
     * @both
     */
    GetModifierAttackSpeedReductionPercentage?(): number;
    /**
     * 被攻击不触发特效（例：翔影之钗）
     *
     * @abstract
     * @both
     */
    GetModifierAvoidAttackProcs?(): void;
    /**
     * 首端伤害无效化（例：回光返照）
     *
     * @abstract
     * @both
     */
    GetModifierAvoidDamage?(event: ModifierAttackEvent): number;
    /**
     * 尾端伤害无效化（例：虚妄之诺）
     *
     * @abstract
     * @both
     */
    GetModifierAvoidDamageAfterReductions?(event: ModifierAttackEvent): number;
    /**
     * 技能吸收（未知）
     *
     * @abstract
     * @both
     */
    GetModifierAvoidSpell?(event: ModifierAttackEvent): 0 | 1;
    /**
     * 百分比敏捷护甲增强（例：内在优势）
     *
     * @abstract
     * @both
     */
    GetModifierBaseArmorPerAgiBonusPercentage?(): void;
    /**
     * 定值基础攻击力（例：长大）
     *
     * @abstract
     * @both
     */
    GetModifierBaseAttack_BonusDamage?(): number;
    /**
     * 百分比敏捷攻速增强（例：内在优势）
     *
     * @abstract
     * @both
     */
    GetModifierBaseAttackSpeedPerAgiBonusPercentage?(): void;
    /**
     * 基础攻击间隔设定（例：化学狂暴）
     *
     * @abstract
     * @both
     */
    GetModifierBaseAttackTimeConstant?(): number;
    /**
     * 定值基础攻击间隔调整（例：神杖虚妄之诺）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierBaseAttackTimeConstant_Adjust?(): number;
    /**
     * 百分比基础攻击间隔（例：中立附魔粗暴）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierBaseAttackTimePercentage?(): number;
    /**
     * 百分比基础额外攻击力（例：复仇光环）
     *
     * @abstract
     * @both
     */
    GetModifierBaseDamageOutgoing_Percentage?(event: ModifierAttackEvent): number;
    /**
     * 特殊百分比基础额外攻击力（未知）
     *
     * @abstract
     * @both
     */
    GetModifierBaseDamageOutgoing_PercentageUnique?(event: ModifierAttackEvent): number;
    /**
     * 百分比力量生命恢复增强（例：内在优势）
     *
     * @abstract
     * @both
     */
    GetModifierBaseHpRegenPerStrBonusPercentage?(): void;
    /**
     * 百分比智力魔法抗性增强（例：内在优势）
     *
     * @abstract
     * @both
     */
    GetModifierBaseMagicResistPerIntBonusPercentage?(): void;
    /**
     * 百分比智力魔法恢复增强（例：内在优势）
     *
     * @abstract
     * @both
     */
    GetModifierBaseManaRegenPerIntBonusPercentage?(): void;
    /**
     * 基础魔法恢复无效化（未知）
     *
     * @abstract
     * @both
     */
    GetModifierBaseRegen?(): number;
    /**
     * 变为敏捷（例：潮涨）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierBecomeAgility?(): void;
    /**
     * 变为智力（未知）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierBecomeIntelligence?(): void;
    /**
     * 变为力量（例：潮落）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierBecomeStrength?(): void;
    /**
     * 变为全才（例：老版冥界亚龙天赋）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierBecomeUniversal?(): 0 | 1;
    /**
     * 额外攻击百分比调整（例：灵幻兵械）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierBonusDamageOutgoing_Percentage?(): void;
    /**
     * 疗伤莲花效果增强（例：赛莉蒙妮的信徒）
     *
     * @abstract
     * @both
     */
    GetModifierBonusLotusHeal?(): void;
    /**
     * 定值额外敏捷（例：欢欣之刃）
     *
     * @abstract
     * @both
     */
    GetModifierBonusStats_Agility?(): number;
    /**
     * 百分比总敏捷（例：射手天赋）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierBonusStats_Agility_Percentage?(): number;
    /**
     * 定值额外智力（例：魔力法杖）
     *
     * @abstract
     * @both
     */
    GetModifierBonusStats_Intellect?(): number;
    /**
     * 百分比总智力（例：通灵头带）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierBonusStats_Intellect_Percentage?(): number;
    /**
     * 定值额外力量（例：食人魔之斧）
     *
     * @abstract
     * @both
     */
    GetModifierBonusStats_Strength?(): number;
    /**
     * 百分比总力量（例：血肉傀儡）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierBonusStats_Strength_Percentage?(): number;
    /**
     * 上下坡落空概率加成（例：制高点）
     *
     * @abstract
     * @both
     */
    GetModifierBonusUphillMissChance?(): void;
    /**
     * 百分比买活惩罚（例：恶魔的交易）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierBuybackPenaltyPercent?(): void;
    /**
     * 可攻击树木（未知）
     *
     * @abstract
     * @both
     */
    GetModifierCanAttackTrees?(): 0 | 1;
    /**
     * 特殊定值施法距离（例：以太透镜）
     *
     * @abstract
     * @both
     */
    GetModifierCastRangeBonus?(event: ModifierAbilityEvent): number;
    /**
     * 百分比施法距离（例：折跃耀光）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierCastRangeBonusPercentage?(event: ModifierAbilityEvent): number;
    /**
     * 定值施法距离（例：奥术至尊）
     *
     * @abstract
     * @both
     */
    GetModifierCastRangeBonusStacking?(event: ModifierAbilityEvent): number;
    /**
     * 目标额外施法距离（未知）
     *
     * @abstract
     * @both
     */
    GetModifierCastRangeBonusTarget?(event: ModifierAbilityEvent): number;
    /**
     * 改变技能数值（未知）
     *
     * @abstract
     * @both
     */
    GetModifierChangeAbilityValue?(): void;
    /**
     * 定值死亡损失金钱（未知）
     *
     * @abstract
     * @both
     */
    GetModifierConstantDeathGoldCost?(): number;
    /**
     * 定值生命恢复（例：活性护甲）
     *
     * @abstract
     * @both
     */
    GetModifierConstantHealthRegen?(): number;
    /**
     * 定值魔法恢复（例：奥术光环）
     *
     * @abstract
     * @both
     */
    GetModifierConstantManaRegen?(): number;
    /**
     * 特殊定值魔法恢复（例：天鹰之戒）
     *
     * @abstract
     * @both
     */
    GetModifierConstantManaRegenUnique?(): number;
    /**
     * 特殊定值复活时间（例：吸血灵魂）
     *
     * @abstract
     * @both
     */
    GetModifierConstantRespawnTime?(): number;
    /**
     * 通过生命值施放技能（例：血魔法）
     *
     * @abstract
     * @both
     */
    GetModifierConvertManaCostToHealthCost?(): void;
    /**
     * 定值冷却时间降低（例：神圣劝化）
     *
     * @abstract
     * @both
     */
    GetModifierCooldownReduction_Constant?(event: ModifierAbilityEvent): number;
    /**
     * 额外幻象产生概率（例：混沌之军）
     *
     * @abstract
     * @both
     */
    GetModifierCreateBonusIllusionChance?(): void;
    /**
     * 额外幻象产生数量（例：混沌之军）
     *
     * @abstract
     * @both
     */
    GetModifierCreateBonusIllusionCount?(): void;
    /**
     * 反补生命百分比调整（例：盛宴）
     *
     * @abstract
     * @both
     */
    GetModifierCreepDenyPercent?(): void;
    /**
     * 百分比总攻击力（例：虚弱）
     *
     * @abstract
     * @both
     */
    GetModifierDamageOutgoing_Percentage?(event: ModifierAttackEvent): number;
    /**
     * 幻象攻击伤害调整（例：幻象默认）
     *
     * @abstract
     * @both
     */
    GetModifierDamageOutgoing_Percentage_Illusion?(event: ModifierAttackEvent): number;
    /**
     * 幻象特殊攻击伤害调整（例：幻象对建筑肉山）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierDamageOutgoing_Percentage_Illusion_Amplify?(): void;
    /**
     * 特殊百分比总攻击调整（例：窒碍短匕）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierDamageOutgoing_PercentageMultiplicative?(): void;
    /**
     * 朝向锁定（例：护身甲盾）
     *
     * @abstract
     * @both
     */
    GetModifierDisableTurning?(): 0 | 1;
    /**
     * 可拆分任意物品（例：拆东补西）
     *
     * @abstract
     * @both
     */
    GetModifierDisassembleAnything?(): void;
    /**
     * 持续躲避（例：老版扫射）
     *
     * @abstract
     * @both
     */
    GetModifierDodgeProjectile?(): 0 | 1;
    /**
     * 闪避（例：魅影无形）
     *
     * @abstract
     * @both
     */
    GetModifierEvasion_Constant?(event: ModifierAttackEvent): number;
    /**
     * 特殊定值最大生命值（例：感染）
     *
     * @abstract
     * @both
     */
    GetModifierExtraHealthBonus?(): number;
    /**
     * 百分比最大生命值（例：磐石光环）
     *
     * @abstract
     * @both
     */
    GetModifierExtraHealthPercentage?(): number;
    /**
     * 特殊定值最大魔法值（例：灵魂之戒）
     *
     * @abstract
     * @both
     */
    GetModifierExtraManaBonus?(): number;
    /**
     * 百分比额外最大魔法值（未知）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierExtraManaBonusPercentage?(): void;
    /**
     * 百分比最大魔法值（例：空灵挂件）
     *
     * @abstract
     * @both
     */
    GetModifierExtraManaPercentage?(): void;
    /**
     * 特殊定值额外力量（例：腐朽）
     *
     * @abstract
     * @both
     */
    GetModifierExtraStrengthBonus?(): number;
    /**
     * 固定攻击间隔（例：怒拳破）
     *
     * @abstract
     * @both
     */
    GetModifierFixedAttackRate?(): number;
    /**
     * 固定魔法恢复（例：死亡充能）
     *
     * @abstract
     * @both
     */
    GetModifierFixedManaRegen?(): void;
    /**
     * 最大生命值设定（例：坚毅之件）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierForceMaxHealth?(): void;
    /**
     * 最大魔法值设定（例：血魔法）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierForceMaxMana?(): void;
    /**
     * 更改视野阵营（例：热血运动）
     *
     * @abstract
     * @both
     */
    GetModifierFoWTeam?(): void;
    /**
     * 额外中立物品选项（例：三只手）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierHasBonusNeutralItemChoice?(): void;
    /**
     * 施加方治疗调整（例：圣洁吊坠）
     *
     * @abstract
     * @both
     */
    GetModifierHealAmplify_PercentageSource?(): void;
    /**
     * 承受方治疗调整（例：薄葬）
     *
     * @abstract
     * @both
     */
    GetModifierHealAmplify_PercentageTarget?(): void;
    /**
     * 特殊生命条（例：攻击次数型单位）
     *
     * @abstract
     * @both
     */
    GetModifierHealthBarPips?(event: ModifierAttackEvent): number;
    /**
     * 定值最大生命值（例：活力之球）
     *
     * @abstract
     * @both
     */
    GetModifierHealthBonus?(): number;
    /**
     * 定值生命消耗降低（例：德尊血式）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierHealthcostReduction_Constant?(): void;
    /**
     * 百分比最大生命恢复（例：泉水回春）
     *
     * @abstract
     * @both
     */
    GetModifierHealthRegenPercentage?(): number;
    /**
     * 特殊百分比生命恢复（例：恐鳌之心）
     *
     * @abstract
     * @both
     */
    GetModifierHealthRegenPercentageUnique?(): number;
    /**
     * 命石覆盖（例：变形）
     *
     * @abstract
     * @both
     */
    GetModifierHeroFacetOverride?(): void;
    /**
     * 英雄等级体积（未知）
     *
     * @abstract
     * @both
     */
    GetModifierHeroLevelScale?(): void;
    /**
     * 生命恢复调整（例：淬毒武器）
     *
     * @abstract
     * @both
     */
    GetModifierHPRegenAmplify_Percentage?(): number;
    /**
     * 生命恢复系数（例：无畏）
     *
     * @abstract
     * @both
     */
    GetModifierHPRegenMultiplierPreAmplification?(): void;
    /**
     * 忽略施法角度（例：喷气背包）
     *
     * @abstract
     * @both
     */
    GetModifierIgnoreCastAngle?(): 0 | 1;
    /**
     * 忽略冷却（未知）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierIgnoreCooldown?(): 0 | 1;
    /**
     * 突破标准移速上限（例：焦渴）
     *
     * @abstract
     * @both
     */
    GetModifierIgnoreMovespeedLimit?(): 0 | 1;
    /**
     * 忽略物理护甲（例：一剑穿心）
     *
     * @abstract
     * @both
     */
    GetModifierIgnorePhysicalArmor?(event: ModifierAttackEvent): number;
    /**
     * 幻象标签（例：幻象默认）
     *
     * @abstract
     * @both
     */
    GetModifierIllusionLabel?(): 0 | 1;
    /**
     * 承受方通用伤害调整（例：激怒）
     *
     * @abstract
     * @both
     */
    GetModifierIncomingDamage_Percentage?(event: ModifierAttackEvent): number;
    /**
     * 全类型伤害护盾（例：无光之盾）
     *
     * @abstract
     * @both
     */
    GetModifierIncomingDamageConstant?(event: ModifierAttackEvent): number;
    /**
     * 承受方特殊物理伤害调整（例：石化凝视）
     *
     * @abstract
     * @both
     */
    GetModifierIncomingPhysicalDamage_Percentage?(event: ModifierAttackEvent): number;
    /**
     * 物理伤害护盾（例：共鸣脉冲）
     *
     * @abstract
     * @both
     */
    GetModifierIncomingPhysicalDamageConstant?(event: ModifierAttackEvent): number;
    /**
     * 魔法伤害护盾（例：烈火罩）
     *
     * @abstract
     * @both
     */
    GetModifierIncomingSpellDamageConstant?(event: ModifierAttackEvent): number;
    /**
     * 近战物理伤害格挡概率覆盖（例：刚毅）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierInnateDamageBlockPctOverride?(): void;
    /**
     * 智力无效化（例：傻福）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierIntellectNone?(): void;
    /**
     * 物品栏限制（例：熊亦求精）
     *
     * @abstract
     * @both
     */
    GetModifierInventorySlotRestricted?(): void;
    /**
     * 攻击不打破隐身（例：暗影之舞）
     *
     * @abstract
     * @both
     */
    GetModifierInvisibilityAttackBehaviorException?(): void;
    /**
     * 隐身透明度（例：暗影步）
     *
     * @abstract
     * @both
     */
    GetModifierInvisibilityLevel?(): number;
    /**
     * 中立物品栏可使用普通物品（例：囤积狂鼠）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierIsPackRat?(): void;
    /**
     * 百分比出售价格增加（例：恶魔的交易）
     *
     * @abstract
     * @both
     */
    GetModifierItemSellbackCost?(): void;
    /**
     * 额外百分比终结连杀金钱（例：职业猎人）
     *
     * @abstract
     * @both
     */
    GetModifierKillStreakBonusGoldPercentage?(): void;
    /**
     * 击退抗性（例：坚固核心）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierKnockbackAmplification_Percentage?(): void;
    /**
     * 攻击吸血调整（例：散华）
     *
     * @abstract
     * @both
     */
    GetModifierLifestealRegenAmplify_Percentage?(): void;
    /**
     * 魔法伤害格挡（例：凝魂之露）
     *
     * @abstract
     * @both
     */
    GetModifierMagical_ConstantBlock?(event: ModifierAttackEvent): number;
    /**
     * 基础魔法抗性降低（例：自然秩序）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierMagicalResistanceBaseReduction?(): void;
    /**
     * 额外魔法抗性（例：法术反制）
     *
     * @abstract
     * @both
     */
    GetModifierMagicalResistanceBonus?(event: ModifierAttackEvent): number;
    /**
     * 幻象魔法抗性（例：暗绘）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierMagicalResistanceBonusIllusions?(): void;
    /**
     * 特殊魔法抗性（例：永世法衣）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierMagicalResistanceBonusUnique?(): void;
    /**
     * 虚无魔法抗性（例：衰老）
     *
     * @abstract
     * @both
     */
    GetModifierMagicalResistanceDecrepifyUnique?(event: ModifierAttackEvent): number;
    /**
     * 线性魔法抗性（未知）
     *
     * @abstract
     * @both
     */
    GetModifierMagicalResistanceDirectModification?(event: ModifierAttackEvent): number;
    /**
     * 定值最大魔法值（例：能量之球）
     *
     * @abstract
     * @both
     */
    GetModifierManaBonus?(): number;
    /**
     * 定值魔法消耗降低（例：神圣劝化）
     *
     * @abstract
     * @both
     */
    GetModifierManacostReduction_Constant?(event: ModifierAbilityEvent): number;
    /**
     * 魔法消耗增强（例：分则能成）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierManaDrainAmplify_Percentage?(): void;
    /**
     * 绝对攻击距离设定（例：变身）
     *
     * @abstract
     * @both
     */
    GetModifierMaxAttackRange?(): number;
    /**
     * 最低护甲设定（例：刚强巨盾）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierMinPhysicalArmor?(): void;
    /**
     * 致盲（例：旋风飞斧）
     *
     * @abstract
     * @both
     */
    GetModifierMiss_Percentage?(): number;
    /**
     * 目标闪避（例：老版烟幕）
     *
     * @abstract
     * @both
     */
    GetModifierMiss_Percentage_Target?(): void;
    /**
     * 模型替换（例：真熊形态）
     *
     * @abstract
     * @both
     */
    GetModifierModelChange?(): string;
    /**
     * 定值模型体积（例：腐朽）
     *
     * @abstract
     * @both
     */
    GetModifierModelScale?(): number;
    /**
     * 模型体积动画时间（例：逃生技）
     *
     * @abstract
     * @both
     */
    GetModifierModelScaleAnimateTime?(): void;
    /**
     * 模型体积覆盖（未知）
     *
     * @abstract
     * @both
     */
    GetModifierModelScaleConstant?(): void;
    /**
     * 模型体积缓入缓出动画（未知）
     *
     * @abstract
     * @both
     */
    GetModifierModelScaleUseInOutEase?(): void;
    /**
     * 移速设定（例：时间结界）
     *
     * @abstract
     * @both
     */
    GetModifierMoveSpeed_Absolute?(): number;
    /**
     * 绝对移速上限设定（例：重如铁锚）
     *
     * @abstract
     * @both
     */
    GetModifierMoveSpeed_AbsoluteMax?(): void;
    /**
     * 绝对移速下限设定（例：奔腾）
     *
     * @abstract
     * @both
     */
    GetModifierMoveSpeed_AbsoluteMin?(): number;
    /**
     * 绝对移速上限（例：蜥蜴绝吻）
     *
     * @abstract
     * @both
     */
    GetModifierMoveSpeed_Limit?(): number;
    /**
     * 标准移速上限设定（例：举步生风）
     *
     * @abstract
     * @both
     */
    GetModifierMoveSpeed_MaxOverride?(): void;
    /**
     * 标准移速下限设定（未知）
     *
     * @abstract
     * @both
     */
    GetModifierMoveSpeed_MinOverride?(): void;
    /**
     * 定值额外移速（例：血肉傀儡）
     *
     * @abstract
     * @both
     */
    GetModifierMoveSpeedBonus_Constant?(): number;
    /**
     * 唯一特殊定值额外移速（例：幽冥长袍）
     *
     * @abstract
     * @both
     */
    GetModifierMoveSpeedBonus_Constant_Unique?(): void;
    /**
     * 唯一特殊定值额外移速2（例：风灵之纹）
     *
     * @abstract
     * @both
     */
    GetModifierMoveSpeedBonus_Constant_Unique_2?(): number;
    /**
     * 百分比额外移速（例：黄泉颤抖）
     *
     * @abstract
     * @both
     */
    GetModifierMoveSpeedBonus_Percentage?(): number;
    /**
     * 特殊百分比额外移速（例：夜叉）
     *
     * @abstract
     * @both
     */
    GetModifierMoveSpeedBonus_Percentage_Unique?(): number;
    /**
     * 特殊定值额外移速（例：速度之靴）
     *
     * @abstract
     * @both
     */
    GetModifierMoveSpeedBonus_Special_Boots?(): number;
    /**
     * 特殊定值额外移速2（未知）
     *
     * @abstract
     * @both
     */
    GetModifierMoveSpeedBonus_Special_Boots_2?(): number;
    /**
     * 定值标准移速上限（例：奔流湍急）
     *
     * @abstract
     * @both
     */
    GetModifierMoveSpeedMax_BonusConstant?(): void;
    /**
     * 基础移速覆盖（例：妖术）
     *
     * @abstract
     * @both
     */
    GetModifierMoveSpeedOverride?(): number;
    /**
     * 后移速调整定值移速（例：奔流湍急）
     *
     * @abstract
     * @both
     */
    GetModifierMoveSpeedPostMultiplierBonus_Constant?(): void;
    /**
     * 百分比减移速调整（未知）
     *
     * @abstract
     * @both
     */
    GetModifierMoveSpeedReductionPercentage?(): void;
    /**
     * 魔法恢复调整（例：幽魂护罩）
     *
     * @abstract
     * @both
     */
    GetModifierMPRegenAmplify_Percentage?(): number;
    /**
     * 特殊魔法恢复调整（例：慧光）
     *
     * @abstract
     * @both
     */
    GetModifierMPRegenAmplify_Percentage_Unique?(): void;
    /**
     * 魔法获取调整（例：幽魂护罩）
     *
     * @abstract
     * @both
     */
    GetModifierMPRestoreAmplify_Percentage?(): number;
    /**
     * 负值闪避（未知）
     *
     * @abstract
     * @both
     */
    GetModifierNegativeEvasion_Constant?(): number;
    /**
     * 选择中立附魔时（未知）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierNeutralEnhancementOptions?(): void;
    /**
     * 提前打造中立物品（例：基本法则锻造）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierNeutralTrinketOptions?(): void;
    /**
     * 死亡无回城卷轴（例：先天基恩载具）
     *
     * @abstract
     * @both
     */
    GetModifierNoFreeTPScrollOnDeath?(): void;
    /**
     * 不使攻击目标暴露（未知）
     *
     * @abstract
     * @both
     */
    GetModifierNoVisionOfAttacker?(): void;
    /**
     * 覆盖技能数值（例：太多了）
     *
     * @abstract
     * @both
     */
    GetModifierOverrideAbilitySpecial?(event: ModifierOverrideAbilitySpecialEvent): 0 | 1;
    /**
     * 特殊覆盖技能数值（例：太多了）
     *
     * @abstract
     * @both
     */
    GetModifierOverrideAbilitySpecialValue?(event: ModifierOverrideAbilitySpecialEvent): number;
    /**
     * 总攻击设定（例：虚张声势）
     *
     * @abstract
     * @both
     */
    GetModifierOverrideAttackDamage?(): number;
    /**
     * 基础攻击力覆盖（例：加重骰子）
     *
     * @abstract
     * @both
     */
    GetModifierOverrideBaseDamage?(): void;
    /**
     * 小兵击杀金钱覆盖（例：加重骰子）
     *
     * @abstract
     * @both
     */
    GetModifierOverrideCreepBounty?(): void;
    /**
     * 无法被取对象（例：热血竞技场）
     *
     * @abstract
     * @both
     */
    GetModifierOverrideUntargetableFrom?(): void;
    /**
     * 无法指定对象（例：热血竞技场）
     *
     * @abstract
     * @both
     */
    GetModifierOverrideUntargetableTo?(): void;
    /**
     * 百分比攻击动作（例：海象神拳！）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierPercentageAttackAnimTime?(): number;
    /**
     * 百分比施法动作降低（例：逆转时空）
     *
     * @abstract
     * @both
     */
    GetModifierPercentageCasttime?(event: ModifierAbilityEvent): number;
    /**
     * 百分比经验金钱转化（未知）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierPercentageConvertExpToGold?(): void;
    /**
     * 百分比冷却缩减（例：玲珑心）
     *
     * @abstract
     * @both
     */
    GetModifierPercentageCooldown?(event: ModifierAbilityEvent): number;
    /**
     * 冷却速度调整（例：时间膨胀）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierPercentageCooldownOngoing?(event: ModifierAbilityEvent): number;
    /**
     * 特殊百分比冷却缩减（例：突变模式冷却调整）
     *
     * @abstract
     * @both
     */
    GetModifierPercentageCooldownStacking?(event: ModifierAbilityEvent): number;
    /**
     * 百分比死亡损失金钱（例：海盗帽）
     *
     * @abstract
     * @both
     */
    GetModifierPercentageDeathGoldCost?(): void;
    /**
     * 经验倍率调整（例：从众心理）
     *
     * @abstract
     * @both
     */
    GetModifierPercentageExpRateBoost?(): number;
    /**
     * 金钱倍率调整（例：占卜师牌组）
     *
     * @abstract
     * @both
     */
    GetModifierPercentageGoldRateBoost?(): void;
    /**
     * 特殊百分比生命消耗降低（未知）
     *
     * @abstract
     * @both
     */
    GetModifierPercentageHealthcost?(event: ModifierAbilityEvent): number;
    /**
     * 百分比生命消耗降低（未知）
     *
     * @abstract
     * @both
     */
    GetModifierPercentageHealthcostStacking?(event: ModifierAbilityEvent): number;
    /**
     * 击杀助攻金钱提升（例：职业猎人）
     *
     * @abstract
     * @both
     */
    GetModifierPercentageKillAssistGoldBoost?(): void;
    /**
     * 特殊百分比魔法消耗降低（例：散慧对剑）
     *
     * @abstract
     * @both
     */
    GetModifierPercentageManacost?(event: ModifierAbilityEvent): number;
    /**
     * 百分比魔法消耗降低（例：奥术符）
     *
     * @abstract
     * @both
     */
    GetModifierPercentageManacostStacking?(): number;
    /**
     * 百分比复活时间降低（例：吸血灵魂）
     *
     * @abstract
     * @both
     */
    GetModifierPercentageRespawnTime?(): number;
    /**
     * 永久隐身（例：刀光谍影）
     *
     * @abstract
     * @both
     */
    GetModifierPersistentInvisibility?(): number;
    /**
     * 物理伤害格挡（例：海妖外壳）
     *
     * @abstract
     * @both
     */
    GetModifierPhysical_ConstantBlock?(event: ModifierAttackEvent): number;
    /**
     * 额外物理伤害格挡（例：利维坦的渔获）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierPhysical_ConstantBlockBonus?(): void;
    /**
     * 特殊物理伤害格挡（未知）
     *
     * @abstract
     * @both
     */
    GetModifierPhysical_ConstantBlockSpecial?(): number;
    /**
     * 前端伤害格挡（例：魔法盾）
     *
     * @abstract
     * @both
     */
    GetModifierPhysical_ConstantBlockUnavoidablePreArmor?(event: ModifierAttackEvent): number;
    /**
     * 百分比基础护甲（例：自然秩序）
     *
     * @abstract
     * @both
     */
    GetModifierPhysicalArmorBase_Percentage?(): number;
    /**
     * 定值额外护甲（例：战吼）
     *
     * @abstract
     * @both
     */
    GetModifierPhysicalArmorBonus?(event: ModifierAttackEvent): number;
    /**
     * 后结算定值护甲（例：灵魂链接）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierPhysicalArmorBonusPost?(): void;
    /**
     * 特殊定值额外护甲（例：天鹰之戒）
     *
     * @abstract
     * @both
     */
    GetModifierPhysicalArmorBonusUnique?(event: ModifierAttackEvent): number;
    /**
     * 特殊主动定值额外护甲（例：玄冥盾牌）
     *
     * @abstract
     * @both
     */
    GetModifierPhysicalArmorBonusUniqueActive?(event: ModifierAttackEvent): number;
    /**
     * 百分比总护甲调整（例：变态上颚）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierPhysicalArmorTotal_Percentage?(): void;
    /**
     * 施加方百分比物理伤害（例：怨灵之契）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierPhysicalDamageOutgoing_Percentage?(): void;
    /**
     * 攻击前监听记录攻击行为（例：射手天赋）
     *
     * @abstract
     * @both
     */
    GetModifierPreAttack?(event: ModifierAttackEvent): number;
    /**
     * 定值额外攻击力/目标额外攻击力（例：支配死灵/盛宴）
     *
     * @abstract
     * @both
     */
    GetModifierPreAttack_BonusDamage?(): number;
    /**
     * 触发额外攻击力（例：射手天赋）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierPreAttack_BonusDamage_Proc?(): number;
    /**
     * 目标触发额外攻击力（例：摔跤行家）
     *
     * @abstract
     * @both
     */
    GetModifierPreAttack_BonusDamage_Target?(): void;
    /**
     * 后致命一击伤害（例：影刃）
     *
     * @abstract
     * @both
     */
    GetModifierPreAttack_BonusDamagePostCrit?(event: ModifierAttackEvent): number;
    /**
     * 致命一击（例：混沌一击）
     *
     * @abstract
     * @both
     */
    GetModifierPreAttack_CriticalStrike?(event: ModifierAttackEvent): number;
    /**
     * 致死打击（例：重型箭袋）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierPreAttack_DeadlyBlow?(): void;
    /**
     * 目标致命一击（例：翔影之钗）
     *
     * @abstract
     * @both
     */
    GetModifierPreAttack_Target_CriticalStrike?(): number;
    /**
     * 前结算伤害调整（未知）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierPrereduceIncomingDamage_Mult?(): void;
    /**
     * 中立附魔累加（例：斯布恩的藏品）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierPreserveNeutralItemPassives?(): void;
    /**
     * 魔法攻击特效（例：金箍棒）
     *
     * @abstract
     * @both
     */
    GetModifierProcAttack_BonusDamage_Magical?(event: ModifierAttackEvent): number;
    /**
     * 目标魔法攻击特效（例：丝质重器）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierProcAttack_BonusDamage_Magical_Target?(): void;
    /**
     * 物理攻击特效（例：怒意狂击）
     *
     * @abstract
     * @both
     */
    GetModifierProcAttack_BonusDamage_Physical?(event: ModifierAttackEvent): number;
    /**
     * 纯粹攻击特效（例：魔晶血怒）
     *
     * @abstract
     * @both
     */
    GetModifierProcAttack_BonusDamage_Pure?(event: ModifierAttackEvent): number;
    /**
     * 物理魔法转化攻击特效（例：超自然）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierProcAttack_ConvertPhysicalToMagical?(): void;
    /**
     * 魔法反馈攻击特效（例：法力损毁）
     *
     * @abstract
     * @both
     */
    GetModifierProcAttack_Feedback?(event: ModifierAttackEvent): number;
    /**
     * 弹道特效替换（例：魔化）
     *
     * @abstract
     * @both
     */
    GetModifierProjectileName?(): string;
    /**
     * 区域百分比弹道速度（例：逆转时空）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierProjectileSpeed?(): number;
    /**
     * 定值弹道速度（例：严寒烧灼）
     *
     * @abstract
     * @both
     */
    GetModifierProjectileSpeedBonus?(): number;
    /**
     * 百分比弹道速度（例：银闪护符）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierProjectileSpeedBonusPercentage?(): number;
    /**
     * 区域百分比目标弹道速度（未知）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierProjectileSpeedTarget?(): void;
    /**
     * 技能吸血（例：血精石）
     *
     * @abstract
     * @both
     */
    GetModifierProperty_MagicalLifesteal?(): void;
    /**
     * 攻击吸血（例：撒旦之邪力）
     *
     * @abstract
     * @both
     */
    GetModifierProperty_PhysicalLifesteal?(): void;
    /**
     * 消耗品加速（例：源泉）
     *
     * @abstract
     * @both
     */
    GetModifierPropertyConsumableUseSpeed?(): void;
    /**
     * 禁止产生幻象（未知）
     *
     * @abstract
     * @both
     */
    GetModifierPropertyForbidIllusions?(): void;
    /**
     * 特殊施加方治疗调整（例：慧光）
     *
     * @abstract
     * @both
     */
    GetModifierPropertyHealingAmplificationUnique?(): void;
    /**
     * 魔法消耗覆盖（未知）
     *
     * @abstract
     * @both
     */
    GetModifierPropertyManacostOverride?(): void;
    /**
     * 获取生命转移（例：克莱拉牧杖）
     *
     * @abstract
     * @both
     */
    GetModifierPropertyRedirectHealthGain?(): void;
    /**
     * 生命回复调整（百分比）。效果等同于冰眼。
     *
     * @abstract
     * @both
     */
    GetModifierPropertyRestorationAmplification?(): number;
    /**
     * 特殊生命回复调整（例：散华）
     *
     * @abstract
     * @both
     */
    GetModifierPropertyRestorationAmplificationUnique?(): void;
    /**
     * 忽略无效攻击移动指令（例：决斗）
     *
     * @abstract
     * @both
     */
    GetModifierPropertySuppressInvalidMoveAttackOrders?(): void;
    /**
     * 中立物品升级（例：休眠珍品）
     *
     * @abstract
     * @both
     */
    GetModifierPropertyUpgradeNeutralArtifacts?(): void;
    /**
     * 致使攻击失败（例：林渊旅人）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierPropetyFailAttack?(): void;
    /**
     * 模型视野（例：风雷之击）
     *
     * @abstract
     * @both
     */
    GetModifierProvidesFOWVision?(): 0 | 1;
    /**
     * 扫描冷却降低（例：望远镜）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierRadarCooldownReduction?(): number;
    /**
     * 神杖升级（例：神杖）
     *
     * @abstract
     * @both
     */
    GetModifierScepter?(): 0 | 1;
    /**
     * 魔晶升级（例：魔晶）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierShard?(): 0 | 1;
    /**
     * 智慧神龛共享（例：古龙学者）
     *
     * @abstract
     * @both
     */
    GetModifierShareXPRune?(): void;
    /**
     * 减速抗性（例：神之力量）
     *
     * @abstract
     * @both
     */
    GetModifierSlowResistance_Stacking?(): void;
    /**
     * 特殊减速抗性（例：散华）
     *
     * @abstract
     * @lua不可用
     */
    GEtModifierSlowResistance_Unique?(): void;
    /**
     * 减速抗性影响攻速（例：不可逾越）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierSlowResistanceAppliesToAttacks?(): void;
    /**
     * 技能增强（例：血怒）
     *
     * @abstract
     * @both
     */
    GetModifierSpellAmplify_Percentage?(event: ModifierAttackEvent): number;
    /**
     * 目标技能增强（未知）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierSpellAmplify_PercentageTarget?(): void;
    /**
     * 特殊技能增强（例：慧光）
     *
     * @abstract
     * @both
     */
    GetModifierSpellAmplify_PercentageUnique?(): number;
    /**
     * 技能吸血调整（例：霜冷光环）
     *
     * @abstract
     * @both
     */
    GetModifierSpellLifestealRegenAmplify_Percentage?(): void;
    /**
     * 特殊技能吸血调整（例：慧光）
     *
     * @abstract
     * @both
     */
    GetModifierSpellLifestealRegenAmplify_Percentage_Unique?(): void;
    /**
     * 技能共享目标（例：位面空洞）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierSpellRedirectTarget?(): void;
    /**
     * 施放技能消耗生命值（未知）
     *
     * @abstract
     * @both
     */
    GetModifierSpellsRequireHP?(): number;
    /**
     * 定值复活时间（例：天赋复活时间）
     *
     * @abstract
     * @both
     */
    GetModifierStackingRespawnTime?(): number;
    /**
     * 特殊状态抗性（例：散夜对剑）
     *
     * @abstract
     * @both
     */
    GetModifierStatusResistance?(): number;
    /**
     * 负面状态增强（例：技能窃取）
     *
     * @abstract
     * @both
     */
    GetModifierStatusResistanceCaster?(event: ModifierUnitEvent): number;
    /**
     * 状态抗性（例：威吓）
     *
     * @abstract
     * @both
     */
    GetModifierStatusResistanceStacking?(): number;
    /**
     * 强幻象标签（例：复仇光环）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierStrongIllusion?(): void;
    /**
     * 可施法幻象标签（例：复仇光环）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierSuperIllusion?(): 0 | 1;
    /**
     * 可触发物品幻象（例：复仇光环）
     *
     * @abstract
     * @both
     */
    GetModifierSuperIllusionWithItems?(): void;
    /**
     * 终极技能可施法幻象标签（例：复仇光环）
     *
     * @abstract
     * @both
     */
    GetModifierSuperIllusionWithUltimate?(): 0 | 1;
    /**
     * 跳过死亡特效（未知）
     *
     * @abstract
     * @both
     */
    GetModifierSuppressFullscreenDeathFX?(): void;
    /**
     * 风暴双雄克隆体标签（例：风暴双雄）
     *
     * @abstract
     * @both
     */
    GetModifierTempestDouble?(): 0 | 1;
    /**
     * 被动金钱倍率（例：贤者石）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierTickGold_Multiplier?(): void;
    /**
     * 末端伤害格挡（例：肉盾）
     *
     * @abstract
     * @both
     */
    GetModifierTotal_ConstantBlock?(event: ModifierAttackEvent): number;
    /**
     * 叠加末端伤害格挡（例：幽灵船）
     *
     * @abstract
     * @both
     */
    GetModifierTotal_ConstantBlockStacking?(): void;
    /**
     * 施加方通用伤害调整（例：决斗达人）
     *
     * @abstract
     * @both
     */
    GetModifierTotalDamageOutgoing_Percentage?(event: ModifierAttackEvent): number;
    /**
     * 百分比最大魔法恢复（例：泉水回春）
     *
     * @abstract
     * @both
     */
    GetModifierTotalPercentageManaRegen?(): number;
    /**
     * 转身速率覆盖（例：相位鞋）
     *
     * @abstract
     * @both
     */
    GetModifierTurnRate_Override?(): number;
    /**
     * 百分比转身速率（例：粘性燃油）
     *
     * @abstract
     * @both
     */
    GetModifierTurnRate_Percentage?(): number;
    /**
     * 定值转身速率（例：织网）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierTurnRateConstant?(): number;
    /**
     * 禁止升级技能（例：变形）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierUnitDisllowUpgrading?(): 0 | 1;
    /**
     * 即时刷新统计情况（例：奥术符）
     *
     * @abstract
     * @both
     */
    GetModifierUnitStatsNeedsRefresh?(): 0 | 1;
    /**
     * 死亡可获得经验（例：复仇光环）
     *
     * @abstract
     * @lua不可用
     */
    GetModifierXPDuringDeath?(): void;
    /**
     * 智慧神龛冷却时间覆盖（未知）
     *
     * @abstract
     * @both
     */
    GetModifierXPFountainCountdownTimeOverride?(): void;
    /**
     * 伪随机概率调整（例：天佑勇者）
     *
     * @abstract
     * @both
     */
    GetModofierPropertyPseudoRandomBonus?(): void;
    /**
     * 完整动画覆盖（例：太多了）
     *
     * @abstract
     * @both
     */
    GetOverrideAnimation?(): GameActivity_t;
    /**
     * 动画速率调整（例：太多了）
     *
     * @abstract
     * @both
     */
    GetOverrideAnimationRate?(): number;
    /**
     * 无视攻击免疫（例：超自然）
     *
     * @abstract
     * @both
     */
    GetOverrideAttackMagical?(): 0 | 1;
    /**
     * 百分比护甲穿透（例：地狱之裂）
     *
     * @abstract
     * @lua不可用
     */
    GetPhysicalArmorPiercingPercentageTarget?(): void;
    /**
     * 百分比属性攻击力（例：内在优势）
     *
     * @abstract
     * @both
     */
    GetPrimaryStatDamageMultiplier?(): number;
    /**
     * Spell redirection intercept (MODIFIER_PROPERTY_REDIRECT_SPELL). Called when a
     * unit-targeted spell hits the parent. event.ability is populated;
     * unit/target/attacker are often nil. Return 1 to block the original hit (like
     * absorb); return 0 to ignore. Returning a unit handle or entindex does NOT
     * change the spell target — Lua cannot set the native redirect destination
     * (Planar Pocket / Soulbind do that in C++). Custom games that need retargeting
     * should return 1 then re-cast via ForceCast / SetCursorCastTarget +
     * OnSpellStart. Prefer declaring event as optional (event?) at call sites if
     * needed for assignability against older void stubs.
     * @both
     */
    GetRedirectSpell?(event: ModifierAbilityEvent): 0 | 1;
    /**
     * 技能反弹（例：清莲宝珠）
     *
     * @abstract
     * @both
     */
    GetReflectSpell?(event: ModifierAbilityEvent): 0 | 1;
    /**
     * 首次学习等级调整（例：曲线学习）
     *
     * @abstract
     * @both
     */
    GetRequiredLevel?(): void;
    /**
     * 无视攻击间隔（未知）
     *
     * @abstract
     * @both
     */
    GetSkipAttackRegulator?(): void;
    /**
     * 攻击不触发特效（未知）
     *
     * @abstract
     * @both
     */
    GetSuppressAttackProcs?(): void;
    /**
     * 不触发攻击分裂（例：神之谴戒）
     *
     * @abstract
     * @lua不可用
     */
    GetSuppressCleave?(event: ModifierAttackEvent): 0 | 1;
    /**
     * 不触发致命一击（例：老版英灵胸针）
     *
     * @abstract
     * @lua不可用
     */
    GetSuppressCrit?(): void;
    /**
     * 免受致命一击攻击（未知）
     *
     * @abstract
     * @both
     */
    GetSuppressIncomingCrit?(): void;
    /**
     * 跳过传送（未知）
     *
     * @abstract
     * @both
     */
    GetSuppressTeleport?(): 0 | 1;
    /**
     * 中立物品复制（例：英熊好礼）
     *
     * @abstract
     * @lua不可用
     */
    GetTierTokenReroll?(): void;
    /**
     * 仅触发攻击动作特效（例：Ti9战鼓）
     *
     * @abstract
     * @lua不可用
     */
    GetTriggerCosmeticAndEndAttack?(): void;
    /**
     * 倒计时特效（例：普通召唤单位默认）
     *
     * @abstract
     * @both
     */
    GetUnitLifetimeFraction?(): number;
    /**
     * 视野角度限制（例：红光满面）
     *
     * @abstract
     * @both
     */
    GetVisionDegreeRestriction?(): void;
    /**
     * 设置飞行高度（例：丛林之舞）
     *
     * @abstract
     * @both
     */
    GetVisualZDelta?(): number;
    /**
     * 起飞速度覆盖（例：冰川）
     *
     * @abstract
     * @both
     */
    GetVisualZSpeedBaseOverride?(): void;
    /**
     * 额外中立物品附魔（例：基本法则锻造）
     *
     * @abstract
     * @lua不可用
     */
    HasBonusNeutralItemPassive?(): void;
    /**
     * 最低属性等级（例：虚空行者）
     *
     * @abstract
     * @both
     */
    MinAttributeLevel?(): void;
    /**
     * 后结算伤害护盾（未知）
     *
     * @abstract
     * @lua不可用
     */
    MODIFIER_PROPERTY_INCOMING_DAMAGE_CONSTANT_POST?(): void;
    /**
     * 持续施法结束时（例：遗言）
     *
     * @abstract
     * @both
     */
    OnAbilityEndChannel?(event: ModifierAbilityEvent): void;
    /**
     * 施法完成时（例：余震）
     *
     * @abstract
     * @both
     */
    OnAbilityExecuted?(event: ModifierAbilityEvent): void;
    /**
     * 完全施放时（例：奥术积累）
     *
     * @abstract
     * @both
     */
    OnAbilityFullyCast?(event: ModifierAbilityEvent): void;
    /**
     * 开始施法时（例：不稳定化合物）
     *
     * @abstract
     * @both
     */
    OnAbilityStart?(event: ModifierAbilityEvent): void;
    /**
     * 交换技能时（例：两栖狂想曲）
     *
     * @abstract
     * @both
     */
    OnAbilitySwapped?(event: ModifierAbilityEvent): void;
    /**
     * 切换开关技能时（例：熊亦求精）
     *
     * @abstract
     * @both
     */
    OnAbilityToggled?(event: ModifierAbilityEvent): void;
    /**
     * 助攻时（例：利维坦的渔获）
     *
     * @abstract
     * @both
     */
    OnAssist?(event: ModifierUnitEvent): void;
    /**
     * 攻击发出时（例：暗影之境）
     *
     * @abstract
     * @both
     */
    OnAttack?(event: ModifierAttackEvent): void;
    /**
     * 攻击友方时（例：噩梦）
     *
     * @abstract
     * @both
     */
    OnAttackAllied?(event: ModifierAttackEvent): void;
    /**
     * 攻击取消时（例：神枪在手）
     *
     * @abstract
     * @both
     */
    OnAttackCancelled?(event: ModifierAttackEvent): void;
    /**
     * 攻击结束时（例：并列）
     *
     * @abstract
     * @both
     */
    OnAttacked?(event: ModifierAttackEvent): void;
    /**
     * 攻击失败时（例：液态火）
     *
     * @abstract
     * @both
     */
    OnAttackFail?(event: ModifierAttackEvent): void;
    /**
     * 攻击完成时（例：强化图腾）
     *
     * @abstract
     * @both
     */
    OnAttackFinished?(event: ModifierAttackEvent): void;
    /**
     * 攻击命中时（例：腐蚀兵械）
     *
     * @abstract
     * @both
     */
    OnAttackLanded?(event: ModifierAttackEvent): void;
    /**
     * 记录攻击时（例：神枪在手）
     *
     * @abstract
     * @both
     */
    OnAttackRecord?(event: ModifierAttackEvent): void;
    /**
     * 攻击记录销毁时（例：奥术天球）
     *
     * @abstract
     * @both
     */
    OnAttackRecordDestroy?(event: ModifierAttackEvent): void;
    /**
     * 开始攻击抬手时（例：不可侵犯）
     *
     * @abstract
     * @both
     */
    OnAttackStart?(event: ModifierAttackEvent): void;
    /**
     * 尝试躲避弹道时（例：猎手旋镖）
     *
     * @abstract
     * @both
     */
    OnAttemptProjectileDodge?(): void;
    /**
     * 打破隐身时（例：影刃）
     *
     * @abstract
     * @both
     */
    OnBreakInvisibility?(): void;
    /**
     * 摧毁建筑时（例：毁灭之赏）
     *
     * @abstract
     * @both
     */
    OnBuildingKilled?(event: ModifierInstanceEvent): void;
    /**
     * 攻击分裂命中时（例：死亡之拳）
     *
     * @abstract
     * @both
     */
    OnCleaveAttackLanded?(): void;
    /**
     * 造成伤害时（例：幽魂之剑）
     *
     * @abstract
     * @both
     */
    OnDamageCalculated?(event: ModifierAttackEvent): void;
    /**
     * 生命移除时（例：回响之笼）
     *
     * @abstract
     * @both
     */
    OnDamageHPLoss?(event: ModifierAttackEvent): void;
    /**
     * 阻止死亡时（例：禽戏）
     *
     * @abstract
     * @both
     */
    OnDamagePrevented?(event: ModifierAttackEvent): void;
    /**
     * 进入白天时（例：辰星破晓）
     *
     * @abstract
     * @both
     */
    OnDayStarted?(): void;
    /**
     * 单位死亡时（例：衰退光环）
     *
     * @abstract
     * @both
     */
    OnDeath?(event: ModifierInstanceEvent): void;
    /**
     * 完全死亡时（例：临别一枪）
     *
     * @abstract
     * @both
     */
    OnDeathCompleted?(event: ModifierInstanceEvent): void;
    /**
     * 被支配时（例：感染）
     *
     * @abstract
     * @both
     */
    OnDominated?(event: ModifierUnitEvent): void;
    /**
     * 强制触发魔棒时（例：幽冥守卫）
     *
     * @abstract
     * @lua不可用
     */
    OnForceProcMagicStick?(): void;
    /**
     * 视野所属阵营改变时（例：真实视域）
     *
     * @abstract
     * @both
     */
    OnFoWTeamChanged?(): void;
    /**
     * 获得治疗时（例：羁绊）
     *
     * @abstract
     * @both
     */
    OnHealReceived?(event: ModifierHealEvent): void;
    /**
     * 获取生命时（例：虚无之恩）
     *
     * @abstract
     * @both
     */
    OnHealthGained?(event: ModifierHealEvent): void;
    /**
     * 开始死亡时（例：驱邪护符）
     *
     * @abstract
     * @both
     */
    OnHeroBeginDying?(event: ModifierAttackEvent): void;
    /**
     * 击杀英雄时（例：血色外衣）
     *
     * @abstract
     * @both
     */
    OnHeroKilled?(event: ModifierAttackEvent): void;
    /**
     * 幻象生成时（例：混沌之军）
     *
     * @abstract
     * @both
     */
    OnIllusionCreated?(event: ModifierUnitEvent): void;
    /**
     * 击杀时（例：雷神之锤）
     *
     * @abstract
     * @both
     */
    OnKill?(event: ModifierUnitEvent): void;
    /**
     * 造成技能伤害时（例：束手束脚）
     *
     * @abstract
     * @both
     */
    OnMagicDamageCalculated?(event: ModifierAttackEvent): void;
    /**
     * 获取魔法时（例：羁绊）
     *
     * @abstract
     * @both
     */
    OnManaGained?(event: ModifierUnitEvent): void;
    /**
     * 模型替换时（例：古龙形态）
     *
     * @abstract
     * @both
     */
    OnModelChanged?(event: ModifierUnitEvent): void;
    /**
     * 施加modifier时（例：咤）
     *
     * @abstract
     * @both
     */
    OnModifierAdded?(event: ModifierAddedEvent): void;
    /**
     * 刷新modifier时（例：安可）
     *
     * @abstract
     * @both
     */
    OnModifierRefreshed?(event: ModifierAddedEvent): void;
    /**
     * 移除modifier时（例：神杖高射火炮）
     *
     * @abstract
     * @lua不可用
     */
    OnModifierRemoved?(event: ModifierAddedEvent): void;
    /**
     * 锁闭伤害技能时（例：闪烁匕首）
     *
     * @abstract
     * @lua不可用
     */
    OnMuteDamageAbilities?(): void;
    /**
     * 进入夜晚时（例：固有增益）
     *
     * @abstract
     * @both
     */
    OnNightStarted?(): void;
    /**
     * 下达指令时（例：相位转移）
     *
     * @abstract
     * @both
     */
    OnOrder?(event: ModifierUnitEvent): void;
    /**
     * 收到指令时（例：能量齿轮）
     *
     * @abstract
     * @lua不可用
     */
    OnOrderReceived?(): void;
    /**
     * 产生攻击分裂时（例：巨力挥舞）
     *
     * @abstract
     * @both
     */
    OnProcessCleave?(): void;
    /**
     * 弹道被躲避时（例：顽皮克敌）
     *
     * @abstract
     * @both
     */
    OnProjectileDodge?(event: ModifierAttackEvent): void;
    /**
     * 弹道被摧毁时（例：热血竞技场）
     *
     * @abstract
     * @both
     */
    OnProjectileObstructionHit?(): void;
    /**
     * 造成纯粹伤害时（例：束手束脚）
     *
     * @abstract
     * @both
     */
    OnPureDamageCalculated?(): void;
    /**
     * 驱散时（例：恶性瘟疫）
     *
     * @abstract
     * @both
     */
    OnPurged?(event: ModifierUnitEvent): void;
    /**
     * 获取生命转移时（例：克莱拉牧杖）
     *
     * @abstract
     * @lua不可用
     */
    OnRedirectHealthGain?(): void;
    /**
     * 单位复活时（例：下地狱再上来）
     *
     * @abstract
     * @both
     */
    OnRespawn?(event: ModifierUnitEvent): void;
    /**
     * 神符产生时（例：磁场）
     *
     * @abstract
     * @both
     */
    OnRuneSpawn?(event: ModifierUnitEvent): void;
    /**
     * 选择神杖升级时（例：元素祈唤）
     *
     * @abstract
     * @lua不可用
     */
    OnScepterUpgradeSelected?(): void;
    /**
     * 设定单位位置时（例：扔出）
     *
     * @abstract
     * @both
     */
    OnSetLocation?(event: ModifierUnitEvent): void;
    /**
     * 选择魔晶升级时（例：元素祈唤）
     *
     * @abstract
     * @lua不可用
     */
    OnShardUpgradeSelected?(): void;
    /**
     * 施法成功时（例：绝刃）
     *
     * @abstract
     * @both
     */
    OnSpellAppliedSuccessfully?(event: ModifierAbilityEvent): void;
    /**
     * 选定施法目标时（例：老版灵匣）
     *
     * @abstract
     * @both
     */
    OnSpellTargetReady?(): void;
    /**
     * 消耗生命时（例：回响之笼）
     *
     * @abstract
     * @both
     */
    OnSpentHealth?(event: ModifierAbilityEvent): void;
    /**
     * 消耗物品充能时（例：分则能成）
     *
     * @abstract
     * @lua不可用
     */
    OnSpentItemCharge?(): void;
    /**
     * 消耗魔法时（例：幽冥守卫）
     *
     * @abstract
     * @both
     */
    OnSpentMana?(event: ModifierAbilityEvent): void;
    /**
     * 状态改变时（例：幽魂护罩）
     *
     * @abstract
     * @both
     */
    OnStateChanged?(event: ModifierUnitEvent): void;
    /**
     * 受到伤害时（例：腐蚀皮肤）
     *
     * @abstract
     * @both
     */
    OnTakeDamage?(event: ModifierInstanceEvent): void;
    /**
     * 产生击杀归属时（例：死神镰刀）
     *
     * @abstract
     * @both
     */
    OnTakeDamageKillCredit?(event: ModifierAttackEvent): void;
    /**
     * 在首端伤害格挡前时（例：永世法衣）
     *
     * @abstract
     * @lua不可用
     */
    OnTakeDamagePostUnavoidableBlock?(): void;
    /**
     * 传送结束时（例：降临）
     *
     * @abstract
     * @both
     */
    OnTeleported?(event: ModifierUnitEvent): void;
    /**
     * 正在传送时（例：剑刃风暴）
     *
     * @abstract
     * @both
     */
    OnTeleporting?(event: ModifierUnitEvent): void;
    /**
     * 同步中立物品时（例：英熊好礼）
     *
     * @abstract
     * @lua不可用
     */
    OnTierTokenRerolled?(): void;
    /**
     * 技能数值说明（例：太多了）
     *
     * @abstract
     * @both
     */
    OnTooltip?(): number;
    /**
     * 状态栏即时更新说明（例：太多了）
     *
     * @abstract
     * @both
     */
    OnTooltip2?(): number;
    /**
     * 摧毁树木时（例：暴露疗法）
     *
     * @abstract
     * @both
     */
    OnTreeCutDown?(event: ModifierUnitEvent): void;
    /**
     * 单位移动时（例：隐匿）
     *
     * @abstract
     * @both
     */
    OnUnitMoved?(event: ModifierUnitEvent): void;
    /**
     * 模型替换时粒子特效（例：暗夜猎影）
     *
     * @abstract
     * @both
     */
    PreserveParticlesOnModelChanged?(): 0 | 1;
    /**
     * 关闭重生特效（未知）
     *
     * @abstract
     * @both
     */
    ReincarnateSuppressFX?(): void;
    /**
     * 重生（例：绝冥再生）
     *
     * @abstract
     * @both
     */
    ReincarnateTime?(): number;
    __kind__: 'instance';
    /**
     * 前后端通讯，接受自定义数据 对应方法`AddCustomTransmitterData`
     * @client
     */
    HandleCustomTransmitterData(data: NetworkedData<AnyTable>): void;
    /**
     * 前后端通讯，传输自定义数据 对应方法`HandleCustomTransmitterData`
     * @server
     */
    AddCustomTransmitterData(): AnyTable;
}

/** @both */
declare const CDOTA_Modifier_Lua_Horizontal_Motion: DotaConstructor<CDOTA_Modifier_Lua_Horizontal_Motion>;

declare interface CDOTA_Modifier_Lua_Horizontal_Motion extends CDOTA_Modifier_Lua {
    /**
     * Starts the horizontal motion controller effects for this buff.  Returns true if successful.
     */
    ApplyHorizontalMotionController(): boolean;
    /**
     * Get the priority.
     */
    GetPriority(): modifierpriority;
    /**
     * Called when the motion gets interrupted.
     */
    OnHorizontalMotionInterrupted(): void;
    /**
     * Set the priority.
     */
    SetPriority(motionPriority: modifierpriority): void;
    /**
     * Perform any motion from the given interval on the NPC.
     */
    UpdateHorizontalMotion(me: CDOTA_BaseNPC, dt: number): void;
    __kind__: 'instance';
}

/** @both */
declare const CDOTA_Modifier_Lua_Motion_Both: DotaConstructor<CDOTA_Modifier_Lua_Motion_Both>;

declare interface CDOTA_Modifier_Lua_Motion_Both extends CDOTA_Modifier_Lua {
    /**
     * Starts the horizontal motion controller effects for this buff.  Returns true if successful.
     */
    ApplyHorizontalMotionController(): boolean;
    /**
     * Starts the vertical motion controller effects for this buff.  Returns true if successful.
     */
    ApplyVerticalMotionController(): boolean;
    /**
     * Get the priority.
     */
    GetPriority(): modifierpriority;
    /**
     * Called when the motion gets interrupted.
     */
    OnHorizontalMotionInterrupted(): void;
    /**
     * Called when the motion gets interrupted.
     */
    OnVerticalMotionInterrupted(): void;
    /**
     * Set the priority.
     */
    SetPriority(motionPriority: modifierpriority): void;
    /**
     * Perform any motion from the given interval on the NPC.
     */
    UpdateHorizontalMotion(me: CDOTA_BaseNPC, dt: number): void;
    /**
     * Perform any motion from the given interval on the NPC.
     */
    UpdateVerticalMotion(me: CDOTA_BaseNPC, dt: number): void;
    __kind__: 'instance';
}

/** @both */
declare const CDOTA_Modifier_Lua_Vertical_Motion: DotaConstructor<CDOTA_Modifier_Lua_Vertical_Motion>;

declare interface CDOTA_Modifier_Lua_Vertical_Motion extends CDOTA_Modifier_Lua {
    /**
     * Starts the vertical motion controller effects for this buff.  Returns true if successful.
     */
    ApplyVerticalMotionController(): boolean;
    /**
     * Get the priority.
     */
    GetMotionPriority(): modifierpriority;
    /**
     * Called when the motion gets interrupted.
     */
    OnVerticalMotionInterrupted(): void;
    /**
     * Set the priority.
     */
    SetMotionPriority(motionPriority: modifierpriority): void;
    /**
     * Perform any motion from the given interval on the NPC.
     */
    UpdateVerticalMotion(me: CDOTA_BaseNPC, dt: number): void;
    __kind__: 'instance';
}

declare const CDOTA_NeutralSpawner: DotaConstructor<CDOTA_NeutralSpawner>;

declare interface CDOTA_NeutralSpawner extends CPointEntity {
    CreatePendingUnits(): void;
    SelectSpawnType(): void;
    SpawnNextBatch(ignoreBlockers: boolean): void;
    __kind__: 'instance';
}

declare const PlayerResource: CDOTA_PlayerResource;

declare const CDOTA_PlayerResource: DotaConstructor<CDOTA_PlayerResource>;

declare interface CDOTA_PlayerResource extends CBaseEntity {
    AddAegisPickup(playerId: PlayerID): void;
    AddCandyEvent(playerId: PlayerID, reason: number): void;
    AddClaimedFarm(playerId: PlayerID, farmValue: number, earnedValue: boolean): void;
    AddGoldSpentOnSupport(playerId: PlayerID, cost: number): void;
    AddNeutralItemToStash(playerId: PlayerID, teamNumber: DOTATeam_t, item: CDOTA_Item): void;
    AddRunePickup(playerId: PlayerID, runes: number): void;
    AreUnitsSharedWithPlayerID(unitOwnerPlayerId: PlayerID, otherPlayerId: PlayerID): boolean;
    CanRepick(playerId: PlayerID): boolean;
    ClearKillsMatrix(playerId: PlayerID): void;
    ClearLastHitMultikill(playerId: PlayerID): void;
    ClearLastHitStreak(playerId: PlayerID): void;
    ClearPlayer(playerId: PlayerID): void;
    ClearRawPlayerDamageMatrix(playerId: PlayerID): void;
    ClearStreak(playerId: PlayerID): void;
    GetAegisPickups(playerId: PlayerID): number;
    GetAssists(playerId: PlayerID): number;
    GetBroadcasterChannel(playerId: PlayerID): number;
    GetBroadcasterChannelSlot(playerId: PlayerID): number;
    GetClaimedDenies(playerId: PlayerID): number;
    GetClaimedFarm(playerId: PlayerID, onlyEarned: boolean): number;
    GetClaimedMisses(playerId: PlayerID): number;
    GetConnectionState(playerId: PlayerID): DOTAConnectionState_t;
    GetCreepDamageTaken(playerId: PlayerID, total: boolean): number;
    GetCustomBuybackCooldown(playerId: PlayerID): number;
    GetCustomBuybackCost(playerId: PlayerID): number;
    /**
     * Get the current custom team assignment for this player.
     */
    GetCustomTeamAssignment(playerId: PlayerID): number;
    GetDamageDoneToHero(playerId: PlayerID, victimId: PlayerID): number;
    GetDeaths(playerId: PlayerID): number;
    GetDenies(playerId: PlayerID): number;
    /**
     * (nPlayerID).
     */
    GetEventGameUpgrades(playerId: PlayerID): object;
    GetEventPointsForPlayerID(playerId: PlayerID): number;
    GetEventPremiumPoints(playerId: PlayerID): number;
    GetEventRanks(playerId: PlayerID): unknown;
    /**
     * 当前金钱
     */
    GetGold(playerId: PlayerID): number;
    GetGoldLostToDeath(playerId: PlayerID): number;
    GetGoldPerMin(playerId: PlayerID): number;
    GetGoldSpentOnBuybacks(playerId: PlayerID): number;
    GetGoldSpentOnConsumables(playerId: PlayerID): number;
    GetGoldSpentOnItems(playerId: PlayerID): number;
    GetGoldSpentOnSupport(playerId: PlayerID): number;
    GetHealing(playerId: PlayerID): number;
    GetHeroDamageTaken(playerId: PlayerID, total: boolean): number;
    GetKills(playerId: PlayerID): number;
    GetKillsDoneToHero(playerId: PlayerID, victimId: PlayerID): number;
    /**
     * (nPlayerID).
     */
    GetLabyrinthEventGameHeroUnlocks(playerId: PlayerID): object;
    GetLastHitMultikill(playerId: PlayerID): number;
    GetLastHits(playerId: PlayerID): number;
    GetLastHitStreak(playerId: PlayerID): number;
    GetLevel(playerId: PlayerID): number;
    GetLiveSpectatorTeam(playerId: PlayerID): DOTATeam_t | -1;
    GetMisses(playerId: PlayerID): number;
    GetNearbyCreepDeaths(playerId: PlayerID): number;
    GetNetworkedEventActionClaimCount(playerId: PlayerID, eventId: number, unActionId: number): number;
    GetNetworkedEventActionClaimCountByName(playerId: PlayerID, eventId: number, actionName: string): number;
    GetNetWorth(playerId: PlayerID): number;
    GetNthCourierForTeam(courierIndex: number, teamNumber: DOTATeam_t): CDOTA_Unit_Courier | undefined;
    GetNthPlayerIDOnTeam(teamNumber: DOTATeam_t, nthPlayer: number): PlayerID;
    /**
     * Players on a valid team (radiant, dire, or custom*) who haven't abandoned the game.
     */
    GetNumConnectedHumanPlayers(): number;
    GetNumConsumablesPurchased(playerId: PlayerID): number;
    GetNumCouriersForTeam(teamNumber: DOTATeam_t): number;
    GetNumItemsPurchased(playerId: PlayerID): number;
    GetPartyID(playerId: PlayerID): Uint64;
    /**
     * Returns player entity for a player with specified id. Player entity represents a single connection, so a different entity might be returned. When player is disconnected nil would be returned.
     */
    GetPlayer(playerId: PlayerID): CDOTAPlayerController | undefined;
    /**
     * Includes spectators and players not assigned to a team.
     */
    GetPlayerCount(): number;
    GetPlayerCountForTeam(team: DOTATeam_t): number;
    GetPlayerLoadedCompletely(playerId: PlayerID): boolean;
    GetPlayerName(playerId: PlayerID): string;
    GetPreferredCourierForPlayer(playerId: PlayerID): object;
    GetRawPlayerDamage(playerId: PlayerID): number;
    GetReliableGold(playerId: PlayerID): number;
    GetRespawnSeconds(playerId: PlayerID): number;
    GetRoshanKills(playerId: PlayerID): number;
    GetRunePickups(playerId: PlayerID): number;
    GetSelectedHeroEntity(playerId: PlayerID): CDOTA_BaseNPC_Hero | undefined;
    GetSelectedHeroID(playerId: PlayerID): number;
    GetSelectedHeroName(playerId: PlayerID): string;
    GetSteamAccountID(playerId: PlayerID): number;
    /**
     * Get the 64 bit steam ID for a given player.
     */
    GetSteamID(playerId: PlayerID): Uint64;
    GetStreak(playerId: PlayerID): number;
    GetStuns(playerId: PlayerID): number;
    /**
     * 所属阵营
     */
    GetTeam(playerId: PlayerID): DOTATeam_t;
    /**
     * @deprecated Added for compatibility with CBaseEntity. Invalid at the runtime.
     */
    GetTeam(): never;
    GetTeamKills(team: DOTATeam_t): number;
    /**
     * (Deprecated: use GetNumConnectedHumanPlayers) Players on a valid team (radiant, dire, or custom*) who haven't abandoned the game.
     */
    GetTeamPlayerCount(): number;
    GetTimeOfLastConsumablePurchase(playerId: PlayerID): number;
    GetTimeOfLastDeath(playerId: PlayerID): number;
    GetTimeOfLastItemPurchase(playerId: PlayerID): number;
    GetTotalEarnedGold(playerId: PlayerID): number;
    GetTotalEarnedXP(playerId: PlayerID): number;
    GetTotalGoldSpent(playerId: PlayerID): number;
    GetTowerDamageTaken(playerId: PlayerID, total: boolean): number;
    GetTowerKills(playerId: PlayerID): number;
    GetUnitShareMaskForPlayer(playerId: PlayerID, otherPlayerId: PlayerID): number;
    GetUnreliableGold(playerId: PlayerID): number;
    GetXPPerMin(playerId: PlayerID): number;
    /**
     * Does this player have a custom game ticket for this game?
     */
    HasCustomGameTicketForPlayerID(playerId: PlayerID): boolean;
    HasRandomed(playerId: PlayerID): boolean;
    HasSelectedHero(playerId: PlayerID): boolean;
    HasSetNetworkedEventActionClaimCount(): boolean;
    HaveAllPlayersJoined(): boolean;
    IncrementAssists(playerId: PlayerID, victimId: PlayerID): void;
    IncrementClaimedDenies(playerId: PlayerID, value: number): void;
    IncrementClaimedMisses(playerId: PlayerID, value: number): void;
    IncrementDeaths(playerId: PlayerID, killerId: PlayerID): void;
    IncrementDenies(playerId: PlayerID, value: number): void;
    IncrementKills(playerId: PlayerID, victimId: PlayerID): void;
    IncrementLastHitMultikill(playerId: PlayerID, count: number): void;
    IncrementLastHits(playerId: PlayerID, count: number): void;
    IncrementLastHitStreak(playerId: PlayerID, count: number): void;
    IncrementMisses(playerId: PlayerID, value: number): void;
    IncrementNearbyCreepDeaths(playerId: PlayerID, creeps: number): void;
    IncrementStreak(playerId: PlayerID, count: number): void;
    IncrementTotalEarnedXP(playerId: PlayerID, xp: number, reason: EDOTA_ModifyXP_Reason): void;
    IsBroadcaster(playerId: PlayerID): boolean;
    IsDisableHelpSetForPlayerID(playerId: PlayerID, otherPlayerId: PlayerID): boolean;
    IsFakeClient(playerId: PlayerID): boolean;
    IsHeroSelected(heroname: string, ignoreUnrevealedPick: boolean): boolean;
    IsHeroSharedWithPlayerID(unitOwnerPlayerId: PlayerID, otherPlayerId: PlayerID): boolean;
    IsValidPlayer(playerId: number): playerId is PlayerID;
    IsValidPlayerID(playerId: number): playerId is PlayerID;
    IsValidTeamPlayer(playerId: number): playerId is PlayerID;
    IsValidTeamPlayerID(playerId: number): playerId is PlayerID;
    ModifyGold(playerId: PlayerID, goldChange: number, reliable: boolean, reason: EDOTA_ModifyGold_Reason): number;
    NumPlayers(): number;
    NumTeamPlayers(): number;
    /**
     * Increment or decrement consumable charges (nPlayerID, item_definition_index, nChargeIncrementOrDecrement).
     */
    RecordConsumableAbilityChargeChange(
        playerId: PlayerID,
        itemDefinitionIndex: number,
        chargeIncrementOrDecrement: number,
    ): void;
    RecordEventActionGrant(
        playerId: PlayerID,
        event: number,
        unActionId: number,
        unAudit: number,
        unQuantity: number,
        unAuditData: number,
    ): void;
    RecordEventActionGrantForPrimaryEvent(
        playerId: PlayerID,
        actionName: string,
        unAudit: number,
        unQuantity: number,
        unAuditData: number,
    ): void;
    /**
     * Replaces the player's hero with a new one of the specified class, gold and XP.
     */
    ReplaceHeroWith(playerId: PlayerID, heroClass: string, gold: number, xp: number): CDOTA_BaseNPC_Hero;
    /**
     * Replaces the player's hero with a new one of the specified class, gold and XP, without transferring items/abilities if same hero.
     */
    ReplaceHeroWithNoTransfer(playerId: PlayerID, heroClass: string, gold: number, xp: number): object;
    ResetBuybackCostTime(playerId: PlayerID): void;
    ResetTotalEarnedGold(playerId: PlayerID): void;
    SetBuybackCooldownTime(playerId: PlayerID, buybackCooldown: number): void;
    SetBuybackGoldLimitTime(playerId: PlayerID, buybackCooldown: number): void;
    /**
     * Force the given player's camera to follow the given entity.
     */
    SetCameraTarget(playerId: PlayerID, target: CBaseEntity | undefined): void;
    SetCanRepick(playerId: PlayerID, canRepick: boolean): void;
    /**
     * Set the buyback cooldown for this player.
     */
    SetCustomBuybackCooldown(playerId: PlayerID, cooldownTime: number): void;
    /**
     * Set the buyback cost for this player.
     */
    SetCustomBuybackCost(playerId: PlayerID, goldCost: number): void;
    SetCustomIntParam(playerId: PlayerID, param: number): void;
    /**
     * Set custom color for player.
     */
    SetCustomPlayerColor(playerId: PlayerID, r: number, g: number, b: number): void;
    /**
     * Set custom team assignment for this player.
     */
    SetCustomTeamAssignment(playerId: PlayerID, teamAssignment: DOTATeam_t): void;
    /**
     * 设置金钱
     */
    SetGold(playerId: PlayerID, gold: number, reliable: boolean): void;
    SetHasRandomed(playerId: PlayerID): void;
    SetLastBuybackTime(playerId: PlayerID, lastBuybackTime: number): void;
    /**
     * Set the forced selection entity for a player.
     */
    SetOverrideSelectionEntity(playerId: PlayerID, entity: CDOTA_BaseNPC): void;
    SetUnitShareMaskForPlayer(playerId: PlayerID, otherPlayerId: PlayerID, flag: number, state: boolean): void;
    SpendGold(playerId: PlayerID, cost: number, reason: EDOTA_ModifyGold_Reason): void;
    UpdateTeamSlot(playerId: PlayerID, teamNumber: DOTATeam_t, desiredSlot: number): void;
    WhoSelectedHero(heroFilename: string, ignoreUnrevealedPick: boolean): PlayerID;
    __kind__: 'instance';
}

declare const CDOTA_ShopTrigger: DotaConstructor<CDOTA_ShopTrigger>;

declare interface CDOTA_ShopTrigger extends CBaseTrigger {
    /**
     * Get the DOTA_SHOP_TYPE.
     */
    GetShopType(): DOTA_SHOP_TYPE;
    /**
     * Set the DOTA_SHOP_TYPE.
     */
    SetShopType(shopType: DOTA_SHOP_TYPE): void;
    __kind__: 'instance';
}

declare const CDOTA_SimpleObstruction: DotaConstructor<CDOTA_SimpleObstruction>;

declare interface CDOTA_SimpleObstruction extends CBaseEntity {
    /**
     * Returns whether the obstruction is currently active.
     */
    IsEnabled(): boolean;
    /**
     * Enable or disable the obstruction.
     */
    SetEnabled(enabled: boolean, force: boolean): void;
    __kind__: 'instance';
}

declare const CDOTA_Unit_Courier: DotaConstructor<CDOTA_Unit_Courier>;

declare interface CDOTA_Unit_Courier extends CDOTA_BaseNPC {
    /**
     * Respawn the courier.
     */
    RespawnCourier(): void;
    /**
     * Upgrade the courier ( int param ) times.
     */
    UpgradeCourier(level: number): void;
    __kind__: 'instance';
}

declare const CDOTA_Unit_CustomGameAnnouncer: DotaConstructor<CDOTA_Unit_CustomGameAnnouncer>;

declare interface CDOTA_Unit_CustomGameAnnouncer extends CDOTA_BaseNPC {
    /**
     * Determines whether response criteria is matched on server or client.
     */
    SetServerAuthoritative(isServerAuthoritative: boolean): void;
    __kind__: 'instance';
}

declare const CDOTA_Unit_CustomGameAnnouncerAghanim: DotaConstructor<CDOTA_Unit_CustomGameAnnouncerAghanim>;

declare interface CDOTA_Unit_CustomGameAnnouncerAghanim extends CDOTA_BaseNPC {
    /**
     * Set the animation sequence for this entity.
     */
    SetAnimation(animation: string): void;
    /**
     * Determines whether response criteria is matched on server or client.
     */
    SetServerAuthoritative(isServerAuthoritative: boolean): void;
    __kind__: 'instance';
}

declare const CDOTA_Unit_Nian: DotaConstructor<CDOTA_Unit_Nian>;

declare interface CDOTA_Unit_Nian extends CDOTA_BaseNPC_Creature {
    /**
     * Is the Nian horn?
     */
    GetHorn(): object;
    /**
     * Is the Nian's tail broken?
     */
    GetTail(): object;
    /**
     * Is the Nian's horn broken?
     */
    IsHornAlive(): boolean;
    /**
     * Is the Nian's tail broken?
     */
    IsTailAlive(): boolean;
    __kind__: 'instance';
}

declare const CDOTA_Unit_Scout: DotaConstructor<CDOTA_Unit_Scout>;

declare interface CDOTA_Unit_Scout extends CDOTA_BaseNPC {
    __kind__: 'instance';
}

declare const CDOTABaseAbility: DotaConstructor<CDOTABaseAbility>;

/** @client */
declare const C_DOTABaseAbility: typeof CDOTABaseAbility;

declare interface CDOTABaseAbility extends CBaseEntity {
    CanAbilityBeUpgraded(): boolean;
    CastAbility(): boolean;
    ContinueCasting(): boolean;
    CreateVisibilityNode(location: Vector, radius: number, duration: number): void;
    DecrementModifierRefCount(): void;
    EnableAbilityChargesOnTalentUpgrade(ability: object, talentName: string): void;
    EndChannel(interrupted: boolean): void;
    /**
     * Clear the cooldown remaining on this ability.
     */
    EndCooldown(): void;
    ForceSetFrozenCooldown(value: number): void;
    /**
     * 充能时间
     */
    GetAbilityChargeRestoreTime(level: number): number;
    /**
     * 伤害
     */
    GetAbilityDamage(): number;
    /**
     * 伤害类型
     */
    GetAbilityDamageType(): DAMAGE_TYPES;
    /**
     * 技能槽位
     */
    GetAbilityIndex(): number;
    /**
     * Gets the key values definition for this ability.
     */
    GetAbilityKeyValues(): object;
    /**
     * Returns the name of this ability.
     *
     * @both
     */
    GetAbilityName(): string;
    GetAbilityTargetFlags(): DOTA_UNIT_TARGET_FLAGS;
    GetAbilityTargetTeam(): DOTA_UNIT_TARGET_TEAM;
    GetAbilityTargetType(): DOTA_UNIT_TARGET_TYPE;
    /**
     * 技能类型
     */
    GetAbilityType(): number;
    /**
     * 多样施法状态
     */
    GetAltCastState(): boolean;
    /**
     * 施法动作忽略模型体积
     */
    GetAnimationIgnoresModelScale(): boolean;
    /**
     * 作用范围
     */
    GetAOERadius(): number;
    /**
     * 主技能
     */
    GetAssociatedPrimaryAbilities(): string;
    /**
     * 附属技能
     */
    GetAssociatedSecondaryAbilities(): string;
    /**
     * 自动施法状态
     */
    GetAutoCastState(): boolean;
    GetBackswingTime(): number;
    /**
     * Always returns Uint64 at runtime, DOTA_ABILITY_BEHAVIOR is referenced only for
     * compatibility.
     */
    GetBehavior(): DOTA_ABILITY_BEHAVIOR | Uint64;
    /**
     * Get ability behavior flags as an int for compatability.
     *
     * @both
     */
    GetBehaviorInt(): DOTA_ABILITY_BEHAVIOR;
    /**
     * Get the owner of this ability.
     *
     * @both
     */
    GetCaster(): CDOTA_BaseNPC;
    GetCastPoint(): number;
    /**
     * 施法动作系数
     *
     * @both
     */
    GetCastPointModifier(): number;
    /**
     * Gets the cast range of the ability.
     */
    GetCastRange(location: Vector | undefined, target: CDOTA_BaseNPC | undefined): number;
    GetChannelledHealthCostPerSecond(level: number): number;
    GetChannelledManaCostPerSecond(level: number): number;
    /**
     * 持续施法开始时间
     */
    GetChannelStartTime(): number;
    /**
     * 持续施法时间
     */
    GetChannelTime(): number;
    GetCloneSource(): CDOTA_BaseNPC | undefined;
    /**
     * 语音类型
     */
    GetConceptRecipientType(): number;
    /**
     * Get the cooldown duration for this ability at a given level, not the amount of cooldown actually left.
     */
    GetCooldown(level: number): number;
    GetCooldownTime(): number;
    GetCooldownTimeRemaining(): number;
    /**
     * 当前能量点数
     *
     * @both
     */
    GetCurrentAbilityCharges(): number;
    GetCursorPosition(): Vector;
    GetCursorTarget(): CDOTA_BaseNPC | undefined;
    GetCursorTargetingNothing(): boolean;
    GetDuration(): number;
    /**
     * 当前施法距离
     */
    GetEffectiveCastRange(location: Vector, target: object): number;
    /**
     * 当前总冷却时间
     */
    GetEffectiveCooldown(level: number): number;
    /**
     * 当前生命消耗
     */
    GetEffectiveHealthCost(level: number): number;
    /**
     * 当前魔法消耗
     */
    GetEffectiveManaCost(level: number): number;
    GetGoldCost(level: number): number;
    GetGoldCostForUpgrade(level: number): number;
    GetHealthCost(level: number): number;
    /**
     * 技能升级所需等级
     */
    GetHeroLevelRequiredToUpgrade(): number;
    /**
     * 初始能量点数
     */
    GetInitialAbilityCharges(level: number): number;
    /**
     * 固有modifier
     */
    GetIntrinsicModifierName(): string;
    /**
     * 技能等级
     *
     * @both
     */
    GetLevel(): number;
    /**
     * Gets a value from this ability's special value block for passed level.
     *
     * @both
     */
    GetLevelSpecialValueFor(name: string, level: number): number;
    /**
     * Gets a value from this ability's special value block for passed level, ignoring MODIFIER_PROPERTY_OVERRIDE_ABILITY_SPECIAL.
     *
     * @both
     */
    GetLevelSpecialValueNoOverride(name: string, level: number): number;
    GetManaCost(level: number): number;
    /**
     * 最大能量点数
     */
    GetMaxAbilityCharges(level: number): number;
    /**
     * 技能最大等级
     */
    GetMaxLevel(): number;
    /**
     * 支援分基础比例
     */
    GetModifierValue(): number;
    /**
     * 支援分额外加成
     */
    GetModifierValueBonus(): number;
    GetPlaybackRateOverride(): number;
    /**
     * 共享冷却归类
     */
    GetSharedCooldownName(): string;
    /**
     * Gets a value from this ability's special value block for its current level.
     *
     * @both
     */
    GetSpecialValueFor(name: string): number;
    /**
     * 窃取施法动作名
     */
    GetStolenActivityModifier(): string;
    /**
     * 开关状态
     *
     * @both
     */
    GetToggleState(): boolean;
    GetUpgradeRecommended(): boolean;
    HeroXPChange(xp: number): boolean;
    IncrementModifierRefCount(): void;
    /**
     * 技能已激活
     */
    IsActivated(): boolean;
    IsAttributeBonus(): boolean;
    /**
     * Returns whether the ability is currently channeling.
     */
    IsChanneling(): boolean;
    /**
     * 冷却就绪
     */
    IsCooldownReady(): boolean;
    IsCosmetic(entity: CBaseEntity): boolean;
    /**
     * 技能施放就绪
     */
    IsFullyCastable(): boolean;
    /**
     * 隐藏技能
     */
    IsHidden(): boolean;
    /**
     * 隐藏附属技能
     */
    IsHiddenAsSecondaryAbility(): boolean;
    /**
     * 被窃取后隐藏
     */
    IsHiddenWhenStolen(): boolean;
    /**
     * 施法前摇中
     */
    IsInAbilityPhase(): boolean;
    /**
     * Whether or not this ability is an item.
     *
     * @both
     */
    IsItem(): this is CDOTA_Item;
    IsOwnersGoldEnough(issuerPlayerId: PlayerID): boolean;
    IsOwnersGoldEnoughForUpgrade(): boolean;
    /**
     * 魔法值就绪
     */
    IsOwnersManaEnough(): boolean;
    /**
     * 被动技能
     */
    IsPassive(): boolean;
    /**
     * 可刷新技能
     */
    IsRefreshable(): boolean;
    /**
     * 可与队友共享
     */
    IsSharedWithTeammates(): boolean;
    /**
     * 可被窃取技能
     */
    IsStealable(): boolean;
    /**
     * 已被窃取技能
     */
    IsStolen(): boolean;
    /**
     * 开关技能
     */
    IsToggle(): boolean;
    /**
     * 技能已学习
     */
    IsTrained(): boolean;
    /**
     * Mark the ability button for this ability as needing a refresh.
     */
    MarkAbilityButtonDirty(): void;
    NumModifiersUsingAbility(): number;
    OnAbilityPhaseInterrupted(): void;
    OnAbilityPhaseStart(): boolean;
    OnAbilityPinged(playerId: PlayerID, ctrlHeld: boolean): void;
    OnChannelFinish(interrupted: boolean): void;
    OnChannelThink(interval: number): void;
    OnHeroCalculateStatBonus(): void;
    OnHeroLevelUp(): void;
    OnOwnerDied(): void;
    OnOwnerSpawned(): void;
    OnSpellStart(): void;
    OnToggle(): void;
    OnUpgrade(): void;
    PayGoldCost(): void;
    PayGoldCostForUpgrade(): void;
    PayHealthCost(): void;
    PayManaCost(): void;
    /**
     * 被窃取后施法动作不变
     */
    PlaysDefaultAnimWhenStolen(): boolean;
    /**
     * 是否触发魔棒充能
     */
    ProcsMagicStick(): boolean;
    /**
     * 含有引用参考modifier
     */
    RefCountsModifiers(): boolean;
    RefreshCharges(): void;
    RefreshIntrinsicModifier(): void;
    RefundHealthCost(): void;
    RefundManaCost(): void;
    /**
     * 施法需转身
     */
    RequiresFacing(): boolean;
    /**
     * 死亡重置开关状态
     */
    ResetToggleOnRespawn(): boolean;
    SetAbilityIndex(index: number): void;
    SetActivated(activated: boolean): void;
    /**
     * Set Alt Cast State to a specific value (true for on, false for off).
     */
    SetAltCastState(altCastEnabled: boolean): void;
    SetChanneling(channeling: boolean): void;
    SetCurrentAbilityCharges(charges: number): void;
    SetFrozenCooldown(frozenCooldown: boolean): void;
    SetHidden(hidden: boolean): void;
    SetInAbilityPhase(inAbilityPhase: boolean): void;
    /**
     * Sets the level of this ability.
     */
    SetLevel(level: number): void;
    SetOverrideCastPoint(castPoint: number): void;
    SetRefCountsModifiers(refCounts: boolean): void;
    SetStealable(stealable: boolean): void;
    SetStolen(stolen: boolean): void;
    SetUpgradeRecommended(upgradeRecommended: boolean): void;
    /**
     * This is what the Alt Cast State of the ability was when it was initially cast. Updated during Execute Orders.
     */
    ShouldAltCast(): boolean;
    ShouldUseResources(): boolean;
    SpeakAbilityConcept(concept: number): void;
    SpeakTrigger(): unknown;
    StartCooldown(cooldown: number): void;
    ToggleAbility(): void;
    /**
     * Toggle the Alt Cast State of an Ability.
     */
    ToggleAltCast(): void;
    ToggleAutoCast(): void;
    UpgradeAbility(supressSpeech: boolean): void;
    UseResources(mana: boolean, useHealth: boolean, gold: boolean, cooldown: boolean): void;
    __kind__: 'instance';
}

declare const CDOTABaseGameMode: DotaConstructor<CDOTABaseGameMode>;

declare interface CDOTABaseGameMode extends CBaseEntity {
    /**
     * Const char* pszAbilityName.
     */
    AddAbilityUpgradeToWhitelist(abilityName: string): void;
    /**
     * Add an item to purchase at a custom shop.
     */
    AddItemToCustomShop(itemName: string, shopName: string, category: string): void;
    /**
     * Begin tracking a sequence of events using the real time combat analyzer.
     */
    AddRealTimeCombatAnalyzerQuery(
        queryTable: object,
        player: CDOTAPlayerController,
        queryName: string,
    ): CombatAnalyzerQueryID;
    /**
     * Allocates an entity which can be used by custom games to control FoW occlusion volumes.
     */
    AllocateFowBlockerRegion(
        minX: number,
        minY: number,
        maxX: number,
        maxY: number,
        gridSize: number,
    ): CFoWBlockerRegion;
    /**
     * Get if weather effects are disabled on the client.
     */
    AreWeatherEffectsDisabled(): boolean;
    /**
     * Clear the script filter that controls bounty rune pickup behavior.
     */
    ClearBountyRunePickupFilter(): void;
    /**
     * Clear the script filter that controls how a unit takes damage.
     */
    ClearDamageFilter(): void;
    /**
     * Clear the script filter that controls when a unit picks up an item.
     */
    ClearExecuteOrderFilter(): void;
    /**
     * Clear the script filter that controls how a unit heals.
     */
    ClearHealingFilter(): void;
    /**
     * Clear the script filter that controls the item added to inventory filter.
     */
    ClearItemAddedToInventoryFilter(): void;
    /**
     * Clear the script filter that controls the modifier filter.
     */
    ClearModifierGainedFilter(): void;
    /**
     * Clear the script filter that controls how hero experience is modified.
     */
    ClearModifyExperienceFilter(): void;
    /**
     * Clear the script filter that controls how hero gold is modified.
     */
    ClearModifyGoldFilter(): void;
    /**
     * Clear the script filter that controls what rune spawns.
     */
    ClearRuneSpawnFilter(): void;
    /**
     * Clear the script filter that controls when tracking projectiles are launched.
     */
    ClearTrackingProjectileFilter(): void;
    /**
     * Disable npc_dota_creature clumping behavior by default.
     */
    DisableClumpingBehaviorByDefault(disabled: boolean): void;
    /**
     * Use to disable hud flip for this mod.
     */
    DisableHudFlip(disable: boolean): void;
    /**
     * Bool bEnabled.
     */
    EnableAbilityUpgradeWhitelist(enabled: boolean): void;
    /**
     * Show the player hero's inventory in the HUD, regardless of what unit is selected.
     */
    GetAlwaysShowPlayerInventory(): boolean;
    /**
     * Get whether player names are always shown, regardless of client setting.
     */
    GetAlwaysShowPlayerNames(): boolean;
    /**
     * Are in-game announcers disabled?
     */
    GetAnnouncerDisabled(): boolean;
    /**
     * Is the announcer announcing the mode / saying Choose Your Hero on start of custom games disabled?
     */
    GetAnnouncerGameModeAnnounceDisabled(): boolean;
    /**
     * Set a different camera distance; dota default is 1134.
     */
    GetCameraDistanceOverride(): number;
    /**
     * Get current derived stat value constant.
     */
    GetCustomAttributeDerivedStatValue(derivedStatType: AttributeDerivedStats): number;
    /**
     * Get the current rate cooldown ticks down for items in the backpack.
     */
    GetCustomBackpackCooldownPercent(): number;
    /**
     * Get the current custom backpack swap cooldown.
     */
    GetCustomBackpackSwapCooldown(): number;
    /**
     * Turns on capability to define custom buyback cooldowns.
     */
    GetCustomBuybackCooldownEnabled(): boolean;
    /**
     * Turns on capability to define custom buyback costs.
     */
    GetCustomBuybackCostEnabled(): boolean;
    /**
     * Get the topbar score display value for dire.
     */
    GetCustomDireScore(): number;
    /**
     * Get the current custom glyph cooldown.
     */
    GetCustomGlyphCooldown(): number;
    /**
     * Allows definition of the max level heroes can achieve (default is 25).
     */
    GetCustomHeroMaxLevel(): number;
    /**
     * Get the topbar score display value for radiant.
     */
    GetCustomRadiantScore(): number;
    /**
     * Get the current custom scan cooldown.
     */
    GetCustomScanCooldown(): number;
    /**
     * Get the rate at which the day/night cycle advances (1.0 = default).
     */
    GetDaynightCycleAdvanceRate(): number;
    /**
     * Get the Game Seed passed from the GC.
     */
    GetEventGameSeed(): number;
    /**
     * Get the Event Window Start Time passed from the GC.
     */
    GetEventWindowStartTime(): number;
    /**
     * Gets the fixed respawn time.
     */
    GetFixedRespawnTime(): number;
    /**
     * Turn the fog of war on or off.
     */
    GetFogOfWarDisabled(): boolean;
    /**
     * Turn the sound when gold is acquired off/on.
     */
    GetGoldSoundDisabled(): boolean;
    /**
     * Returns the HUD element visibility.
     */
    GetHUDVisible(element: number): boolean;
    /**
     * Get the maximum attack speed for units.
     */
    GetMaximumAttackSpeed(): number;
    /**
     * Get the minimum attack speed for units.
     */
    GetMinimumAttackSpeed(): number;
    /**
     * Turn the panel for showing recommended items at the shop off/on.
     */
    GetRecommendedItemsDisabled(): boolean;
    /**
     * Returns the scale applied to non-fixed respawn times.
     */
    GetRespawnTimeScale(): number;
    /**
     * Turn purchasing items to the stash off/on. If purchasing to the stash is off the player must be at a shop to purchase items.
     */
    GetStashPurchasingDisabled(): boolean;
    /**
     * Hide the sticky item in the quickbuy.
     */
    GetStickyItemDisabled(): boolean;
    /**
     * Override the values of the team values on the top game bar.
     */
    GetTopBarTeamValuesOverride(): boolean;
    /**
     * Turning on/off the team values on the top game bar.
     */
    GetTopBarTeamValuesVisible(): boolean;
    /**
     * Gets whether tower backdoor protection is enabled or not.
     */
    GetTowerBackdoorProtectionEnabled(): boolean;
    /**
     * Are custom-defined XP values for hero level ups in use?
     */
    GetUseCustomHeroLevels(): boolean;
    /**
     * Gets the time from game start during which water runes spawn.
     */
    GetWaterRuneLastSpawnTime(): number;
    /**
     * Const char* pszAbilityName.
     */
    IsAbilityUpgradeWhitelisted(abilityName: string): boolean;
    /**
     * Enables or disables buyback completely.
     */
    IsBuybackEnabled(): boolean;
    /**
     * Is the day/night cycle disabled?
     */
    IsDaynightCycleDisabled(): boolean;
    /**
     * Set function and context for real time combat analyzer query failed.
     */
    ListenForQueryFailed<TContext extends {}>(
        func: (this: TContext, result: CombatAnalyzerQueryResult) => void,
        context: TContext,
    ): void;
    /**
     * Set function and context for real time combat analyzer query progress changed.
     */
    ListenForQueryProgressChanged<TContext extends {}>(
        func: (this: TContext, result: CombatAnalyzerQueryResult) => void,
        context: TContext,
    ): void;
    /**
     * Set function and context for real time combat analyzer query succeeded.
     */
    ListenForQuerySucceeded<TContext extends {}>(
        func: (this: TContext, result: CombatAnalyzerQueryResult) => void,
        context: TContext,
    ): void;
    /**
     * Const char* pszAbilityName.
     */
    RemoveAbilityUpgradeFromWhitelist(abilityName: string): void;
    /**
     * Remove an item to purchase at a custom shop.
     */
    RemoveItemFromCustomShop(itemName: string, shopName: string): void;
    /**
     * Stop tracking a combat analyzer query.
     */
    RemoveRealTimeCombatAnalyzerQuery(queryId: CombatAnalyzerQueryID): void;
    /**
     * Set a filter function to control the tuning values that abilities use. (Modify the table and Return true to use new values, return false to use the old values).
     */
    SetAbilityTuningValueFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: AbilityTuningValueFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * If set to true, neutral items will be dropped on killing neutral monsters.  Otherwise nothing will be dropped.
     */
    SetAllowNeutralItemDrops(enabled: boolean): void;
    /**
     * Show the player hero's inventory in the HUD, regardless of what unit is selected.
     */
    SetAlwaysShowPlayerInventory(alwaysShow: boolean): void;
    /**
     * Set whether player names are always shown, regardless of client setting.
     */
    SetAlwaysShowPlayerNames(enabled: boolean): void;
    /**
     * Mutes the in-game announcer.
     */
    SetAnnouncerDisabled(disabled: boolean): void;
    /**
     * Disables the announcer announcing the mode / saying Choose Your Hero on start of custom games.
     */
    SetAnnouncerGameModeAnnounceDisabled(disabled: boolean): void;
    /**
     * Set if the bots should try their best to push with a human player.
     */
    SetBotsAlwaysPushWithHuman(alwaysPush: boolean): void;
    /**
     * Set if bots should enable their late game behavior.
     */
    SetBotsInLateGame(lateGame: boolean): void;
    /**
     * Set the max tier of tower that bots want to push. (-1 to disable).
     */
    SetBotsMaxPushTier(maxTier: number): void;
    /**
     * Enables/Disables bots in custom games. Note: this will only work with default heroes in the dota map.
     */
    SetBotThinkingEnabled(enabled: boolean): void;
    /**
     * Set a filter function to control the behavior when a bounty rune is picked up. (Modify the table and Return true to use new values, return false to cancel the event).
     */
    SetBountyRunePickupFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: BountyRunePickupFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * Set bounty rune spawn rate.
     */
    SetBountyRuneSpawnInterval(interval: number): void;
    /**
     * Enables or disables buyback completely.
     */
    SetBuybackEnabled(enabled: boolean): void;
    /**
     * Set a different camera distance; dota default is 1134.
     */
    SetCameraDistanceOverride(cameraDistanceOverride: number): void;
    /**
     * Set a different camera smooth count; dota default is 8.
     */
    SetCameraSmoothCountOverride(smoothCount: number): void;
    /**
     * Sets the camera Z range.
     */
    SetCameraZRange(minZ: number, maxZ: number): void;
    /**
     * Bool bAllow.
     */
    SetCanSellAnywhere(allow: boolean): void;
    /**
     * Modify derived stat value constants.
     */
    SetCustomAttributeDerivedStatValue(statType: AttributeDerivedStats, newValue: number): void;
    /**
     * Set the rate cooldown ticks down for items in the backpack.
     */
    SetCustomBackpackCooldownPercent(percent: number): void;
    /**
     * Set a custom cooldown for swapping items into the backpack.
     */
    SetCustomBackpackSwapCooldown(cooldown: number): void;
    /**
     * Turns on capability to define custom buyback cooldowns.
     */
    SetCustomBuybackCooldownEnabled(enabled: boolean): void;
    /**
     * Turns on capability to define custom buyback costs.
     */
    SetCustomBuybackCostEnabled(enabled: boolean): void;
    /**
     * Sets the topbar score display value for dire.
     */
    SetCustomDireScore(score: number): void;
    /**
     * Force all players to use the specified hero and disable the normal hero selection process. Must be used before hero selection.
     */
    SetCustomGameForceHero(heroName: string): void;
    /**
     * Set a custom cooldown for team Glyph ability.
     */
    SetCustomGlyphCooldown(cooldown: number): void;
    /**
     * Allows definition of the max level heroes can achieve (default is 25).
     */
    SetCustomHeroMaxLevel(maxLevel: number): void;
    /**
     * Sets the topbar score display value for radiant.
     */
    SetCustomRadiantScore(score: number): void;
    /**
     * Set a custom cooldown for team Scan ability.
     */
    SetCustomScanCooldown(cooldown: number): void;
    /**
     * Set a custom max charges for team Scan ability.
     */
    SetCustomScanMaxCharges(maxCharges: number): void;
    /**
     * Set the effect used as a custom weather effect, when units are on non-default terrain, in this mode.
     */
    SetCustomTerrainWeatherEffect(effectName: string): void;
    /**
     * Allows definition of a table of hero XP values.
     * Requires `SetUseCustomHeroLevels` to be enabled.
     */
    SetCustomXPRequiredToReachNextLevel(table: Record<number, number>): void;
    /**
     * Set a filter function to control the behavior when a unit takes damage. (Modify the table and Return true to use new values, return false to cancel the event).
     */
    SetDamageFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: DamageFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * Sets the rate at which the day/night cycle advances (1.0 = default).
     */
    SetDaynightCycleAdvanceRate(rate: number): void;
    /**
     * Enable or disable the day/night cycle.
     */
    SetDaynightCycleDisabled(disable: boolean): void;
    /**
     * Specify whether the full screen death overlay effect plays when the selected hero dies.
     */
    SetDeathOverlayDisabled(disabled: boolean): void;
    /**
     * Disables chat tips on death.
     */
    SetDeathTipsDisabled(disabled: boolean): void;
    /**
     * Sets the default sticky item in the quickbuy.
     */
    SetDefaultStickyItem(item: string): void;
    /**
     * Set drafting hero banning time.
     */
    SetDraftingBanningTimeOverride(value: number): void;
    /**
     * Set drafting hero pick time.
     */
    SetDraftingHeroPickSelectTimeOverride(value: number): void;
    /**
     * Set a filter function to control the behavior when a unit picks up an item. (Modify the table and Return true to use new values, return false to cancel the event).
     */
    SetExecuteOrderFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: ExecuteOrderFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * Set a fixed delay for all players to respawn after.
     */
    SetFixedRespawnTime(fixedRespawnTime: number): void;
    /**
     * Turn the fog of war on or off.
     */
    SetFogOfWarDisabled(disabled: boolean): void;
    /**
     * Caps the number of players spawned when the game is reset. Used in tutorials where players are spawned in the script.
     */
    SetForcedHeroCapOnReset(cap: number): void;
    /**
     * Specify a HUD skin that is forced on for this game mode.
     */
    SetForcedHUDSkin(value: string): void;
    /**
     * Prevent users from using the right click deny setting.
     */
    SetForceRightClickAttackDisabled(disabled: boolean): void;
    /**
     * Set the constant rate that the fountain will regen mana. (-1 for default).
     */
    SetFountainConstantManaRegen(constantManaRegen: number): void;
    /**
     * Set the percentage rate that the fountain will regen health. (-1 for default).
     */
    SetFountainPercentageHealthRegen(percentageHealthRegen: number): void;
    /**
     * Set the percentage rate that the fountain will regen mana. (-1 for default).
     */
    SetFountainPercentageManaRegen(percentageManaRegen: number): void;
    /**
     * If set to true, enable 7.23 free courier mode.
     */
    SetFreeCourierModeEnabled(enabled: boolean): void;
    /**
     * Allows clicks on friendly buildings to be handled normally.
     */
    SetFriendlyBuildingMoveToEnabled(enabled: boolean): void;
    /**
     * Bool bGive.
     */
    SetGiveFreeTPOnDeath(give: boolean): void;
    /**
     * Turn the sound when gold is acquired off/on.
     */
    SetGoldSoundDisabled(disabled: boolean): void;
    /**
     * Set a filter function to control the behavior when a unit heals. (Modify the table and Return true to use new values, return false to cancel the event).
     */
    SetHealingFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: HealingFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * Specify whether the default combat events will show in the HUD.
     */
    SetHudCombatEventsDisabled(disabled: boolean): void;
    /**
     * Set the HUD element visibility.
     */
    SetHUDVisible(hudElement: DOTAHUDVisibility_t, visible: boolean): void;
    /**
     * Set the amount blocked innately by melee heroes.
     */
    SetInnateMeleeDamageBlockAmount(amount: number): void;
    /**
     * Set the percent chance a melee hero will innately block damage.
     */
    SetInnateMeleeDamageBlockPercent(percent: number): void;
    /**
     * Set the amount innately blocked by melee heroes gained per level.
     */
    SetInnateMeleeDamageBlockPerLevelAmount(perLevelAmount: number): void;
    /**
     * Set a filter function to control what happens to items that are added to an inventory, return false to cancel the event.
     */
    SetItemAddedToInventoryFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: ItemAddedToInventoryFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * Set whether tombstones can be channeled to be removed by enemy heroes.
     */
    SetKillableTombstones(enabled: boolean): void;
    /**
     * Mutes the in-game killing spree announcer.
     */
    SetKillingSpreeAnnouncerDisabled(disabled: boolean): void;
    /**
     * Use to disable gold loss on death.
     */
    SetLoseGoldOnDeath(enabled: boolean): void;
    SetLuaGameMode(script: object): void;
    /**
     * Set the maximum attack speed for units.
     */
    SetMaximumAttackSpeed(maxSpeed: number): void;
    /**
     * Set the minimum attack speed for units.
     */
    SetMinimumAttackSpeed(minSpeed: number): void;
    /**
     * Set a filter function to control modifiers that are gained, return false to destroy modifier.
     */
    SetModifierGainedFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: ModifierGainedFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * Set a filter function to control the behavior when a hero's experience is modified. (Modify the table and Return true to use new values, return false to cancel the event).
     */
    SetModifyExperienceFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: ModifyExperienceFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * Set a filter function to control the behavior when a hero's gold is modified. (Modify the table and Return true to use new values, return false to cancel the event).
     */
    SetModifyGoldFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: ModifyGoldFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * When enabled, undiscovered items in the neutral item stash are hidden.
     */
    SetNeutralItemHideUndiscoveredEnabled(enable: boolean): void;
    /**
     * Allow items to be sent to the neutral stash.
     */
    SetNeutralStashEnabled(enable: boolean): void;
    /**
     * When enabled, the all neutral items tab cannot be viewed.
     */
    SetNeutralStashTeamViewOnlyEnabled(enable: boolean): void;
    /**
     * Set an override for the default selection entity, instead of each player's hero.
     */
    SetOverrideSelectionEntity(overrideEntity: CDOTA_BaseNPC | undefined): void;
    /**
     * Set pausing enabled/disabled.
     */
    SetPauseEnabled(enabled: boolean): void;
    /**
     * Bool bFilter.
     */
    SetPlayerHeroAvailabilityFiltered(filter: boolean): void;
    /**
     * Set power rune spawn rate.
     */
    SetPowerRuneSpawnInterval(interval: number): void;
    /**
     * Disables bonus items for randoming a hero.
     */
    SetRandomHeroBonusItemGrantDisabled(disabled: boolean): void;
    /**
     * Turn the panel for showing recommended items at the shop off/on.
     */
    SetRecommendedItemsDisabled(disabled: boolean): void;
    /**
     * Make it so illusions are immediately removed upon death, rather than sticking around for a few seconds.
     */
    SetRemoveIllusionsOnDeath(remove: boolean): void;
    /**
     * Sets the scale applied to non-fixed respawn times. 1 = default DOTA respawn calculations.
     */
    SetRespawnTimeScale(value: number): void;
    /**
     * Set if a given type of rune is enabled.
     */
    SetRuneEnabled(rune: DOTA_RUNES, enabled: boolean): void;
    /**
     * Set a filter function to control what rune spawns. (Modify the table and Return true to use new values, return false to cancel the event).
     */
    SetRuneSpawnFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: RuneSpawnFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * Enable/disable gold penalty for late picking.
     */
    SetSelectionGoldPenaltyEnabled(enabled: boolean): void;
    /**
     * Allow items to be sent to the stash.
     */
    SetSendToStashEnabled(enable: boolean): void;
    /**
     * Turn purchasing items to the stash off/on. If purchasing to the stash is off the player must be at a shop to purchase items.
     */
    SetStashPurchasingDisabled(disabled: boolean): void;
    /**
     * Hide the sticky item in the quickbuy.
     */
    SetStickyItemDisabled(disabled: boolean): void;
    /**
     * Set the team values on the top game bar.
     */
    SetTopBarTeamValue(team: DOTATeam_t, value: number): void;
    /**
     * Override the values of the team values on the top game bar.
     */
    SetTopBarTeamValuesOverride(override: boolean): void;
    /**
     * Turning on/off the team values on the top game bar.
     */
    SetTopBarTeamValuesVisible(visible: boolean): void;
    /**
     * Enables/Disables tower backdoor protection.
     */
    SetTowerBackdoorProtectionEnabled(enabled: boolean): void;
    /**
     * Sets the item which goes in the TP scroll slot.
     */
    SetTPScrollSlotItemOverride(itemName: string): void;
    /**
     * Set a filter function to control when tracking projectiles are launched. (Modify the table and Return true to use new values, return false to cancel the event).
     */
    SetTrackingProjectileFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: TrackingProjectileFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * Enable or disable unseen fog of war. When enabled parts of the map the player has never seen will be completely hidden by fog of war.
     */
    SetUnseenFogOfWarEnabled(enabled: boolean): void;
    /**
     * Turn on custom-defined XP values for hero level ups.  The table should be defined before switching this on.
     */
    SetUseCustomHeroLevels(enabled: boolean): void;
    /**
     * If set to true, use current rune spawn rules.  Either setting respects custom spawn intervals.
     */
    SetUseDefaultDOTARuneSpawnLogic(enabled: boolean): void;
    /**
     * Enables or disables turbo couriers.
     */
    SetUseTurboCouriers(enabled: boolean): void;
    /**
     * Sets the time from game start during which water runes spawn.
     */
    SetWaterRuneLastSpawnTime(value: number): void;
    /**
     * Set if weather effects are disabled.
     */
    SetWeatherEffectsDisabled(disable: boolean): void;
    /**
     * Set xp rune spawn rate.
     */
    SetXPRuneSpawnInterval(interval: number): void;
    ShouldGiveFreeTPOnDeath(): boolean;
    __kind__: 'instance';
}

declare const DOTAGameManager: CDOTAGameManager;

/** @both */
declare const CDOTAGameManager: DotaConstructor<CDOTAGameManager>;

declare interface CDOTAGameManager {
    /**
     * Get the hero unit.
     *
     * @both
     */
    GetHeroDataByName_Script(heroName: string): object;
    /**
     * Get the hero ID given the hero name.
     *
     * @both
     */
    GetHeroIDByName(heroName: string): number;
    /**
     * Get the localization token for the given hero ID.
     *
     * @both
     */
    GetHeroLocTokenByID(arg1: number): string;
    /**
     * Get the hero name given a hero ID.
     *
     * @both
     */
    GetHeroNameByID(heroId: number): string;
    /**
     * Get the hero name given a unit name.
     *
     * @both
     */
    GetHeroNameForUnitName(unitName: string): string;
    /**
     * Get the hero unit name given the hero ID.
     *
     * @both
     */
    GetHeroUnitNameByID(heroId: number): string;
    __kind__: 'instance';
}

declare const GameRules: CDOTAGameRules;

/** @both */
declare const CDOTAGameRules: DotaConstructor<CDOTAGameRules>;

declare interface CDOTAGameRules {
    /**
     * Spawn a bot player of the passed hero name, player name, and team.
     *
     * @param entityScript Path to a script file executed in the context of spawned
     *                     hero entity.
     */
    AddBotPlayerWithEntityScript(
        heroName: string,
        playerName: string,
        team: DOTATeam_t,
        entityScript: string,
        arg5: boolean,
    ): CDOTA_BaseNPC_Hero | undefined;
    /**
     * Event-only.
     */
    AddEventMetadataLeaderboardEntry(
        nameSuffix: string,
        stars: number,
        maxStars: number,
        extraData1: number,
        extraData2: number,
        extraData3: number,
        extraData4: number,
        extraData5: number,
        extraData6: number,
    ): boolean;
    /**
     * Event-only.
     */
    AddEventMetadataLeaderboardEntryRawScore(
        nameSuffix: string,
        score: number,
        extraData1: number,
        extraData2: number,
        extraData3: number,
        extraData4: number,
        extraData5: number,
        extraData6: number,
    ): boolean;
    /**
     * Add the hero ID to the hero blacklist if it is not already present.
     */
    AddHeroIDToBlacklist(arg1: number): void;
    /**
     * Add the hero ID to the hero whitelist if it is not already present.
     */
    AddHeroIDToWhitelist(arg1: number): void;
    /**
     * Add the hero to the hero blacklist if it is not already present.
     */
    AddHeroToBlacklist(arg1: string): void;
    /**
     * Adds hero of given ID to available heroes of player of given ID.
     */
    AddHeroToPlayerAvailability(arg1: number, arg2: number): void;
    /**
     * Add the hero to the hero whitelist if it is not already present.
     */
    AddHeroToWhitelist(arg1: string): void;
    /**
     * Add an item to the whitelist.
     */
    AddItemToWhiteList(itemName: string): void;
    /**
     * Add a point on the minimap.
     */
    AddMinimapDebugPoint(
        arg1: number,
        arg2: Vector,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
    ): void;
    /**
     * Add a point on the minimap for a specific team.
     */
    AddMinimapDebugPointForTeam(
        arg1: number,
        arg2: Vector,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: number,
    ): void;
    /**
     * Begin night stalker night.
     */
    BeginNightstalkerNight(duration: number): void;
    /**
     * Begin temporary night.
     */
    BeginTemporaryNight(duration: number, arg2: number): void;
    /**
     * Fills all the teams with bots if cheat mode is enabled.
     */
    BotPopulate(): void;
    /**
     * Clears the hero blacklist.
     */
    ClearHeroBlacklist(): void;
    /**
     * Clears the hero whitelist.
     */
    ClearHeroWhitelist(): void;
    /**
     * Clears available heroes of player of given ID.
     */
    ClearPlayerHeroAvailability(arg1: number): void;
    /**
     * Clears the current river paint.
     */
    ClearRiverPaint(): void;
    /**
     * Kills the ancient, etc.
     */
    Defeated(): void;
    /**
     * True when we have waited some time after end of the game and not received signout.
     */
    DidMatchSignoutTimeOut(): boolean;
    /**
     * Enabled (true) or disable (false) auto launch for custom game setup.
     */
    EnableCustomGameSetupAutoLaunch(enabled: boolean): void;
    /**
     * Sends a minimap ping to all players on the team.
     */
    ExecuteTeamPing(
        team: DOTATeam_t,
        xCoord: number,
        yCoord: number,
        entity: CBaseEntity | undefined,
        type: 0 | 1 | 2 | 3 | 4 | 5 | 6,
    ): void;
    /**
     * Indicate that the custom game setup phase is complete, and advance to the game.
     */
    FinishCustomGameSetup(): void;
    /**
     * Spawn the next wave of creeps.
     */
    ForceCreepSpawn(): void;
    /**
     * Transition game state to DOTA_GAMERULES_STATE_GAME_IN_PROGRESS.
     */
    ForceGameStart(): void;
    /**
     * Get the announcer for a team.
     */
    GetAnnouncer(team: DOTATeam_t): CDOTA_BaseNPC | undefined;
    /**
     * Returns the hero unit names banned in this game, if any.
     *
     * @both
     */
    GetBannedHeroes(): string[];
    /**
     * Returns the hero unit IDs banned in this game, if any.
     *
     * @both
     */
    GetBannedHeroIDs(): object;
    /**
     * Returns the difficulty level of the custom game mode.
     *
     * @both
     */
    GetCustomGameDifficulty(): number;
    /**
     * Get whether a team is selectable during game setup.
     */
    GetCustomGameTeamMaxPlayers(team: DOTATeam_t): number;
    /**
     * Returns difficulty level of the custom game mode.
     *
     * @both
     */
    GetDifficulty(): number;
    /**
     * Returns the actual DOTA in-game clock time.
     *
     * @both
     */
    GetDOTATime(includePreGame: boolean, includeNegativeTime: boolean): number;
    /**
     * Gets the Xth dropped item.
     */
    GetDroppedItem(index: number): CDOTA_Item_Physical | undefined;
    /**
     * Returns the number of seconds elapsed since the last frame was renderered. This time doesn't count up when the game is paused.
     *
     * @both
     */
    GetGameFrameTime(): number;
    /**
     * Get the game mode entity.
     */
    GetGameModeEntity(): CDOTABaseGameMode;
    /**
     * Get a string value from the game session config (map options).
     */
    GetGameSessionConfigValue(arg1: string, arg2: string): string;
    /**
     * Returns the number of seconds elapsed since map start. This time doesn't count up when the game is paused.
     *
     * @both
     */
    GetGameTime(): number;
    /**
     * Get the time it takes to add a new item to stock.
     *
     * @both
     */
    GetIetmStockDuration(arg1: number, arg2: string, arg3: number): number;
    /**
     * Get the stock count of the item.
     *
     * @param playerId Used only for items with "PlayerSpecificCooldown"
     * @both
     */
    GetItemStockCount(team: DOTATeam_t, itemName: string, playerId: PlayerID): number;
    /**
     * Get the time an item will be added to stock.
     *
     * @param playerId Used only for items with "PlayerSpecificCooldown"
     * @both
     */
    GetItemStockTime(team: DOTATeam_t, itemName: string, playerId: PlayerID): number;
    /**
     * Have we received the post match signout message that includes reward information.
     */
    GetMatchSignoutComplete(): boolean;
    /**
     * Gets the extra offset to initial neutral creep spawn delay.
     *
     * @both
     */
    GetNeutralInitialSpawnOffset(): number;
    /**
     * Gets next bounty rune spawn time.
     */
    GetNextBountyRuneSpawnTime(): number;
    /**
     * Gets next rune spawn time.
     */
    GetNextRuneSpawnTime(): number;
    /**
     * For New Bloom, get total damage taken by the Nian / Year Beast.
     */
    GetNianTotalDamageTaken(): number;
    /**
     * Gets the player's custom game account record, as it looked at the start of this session.
     *
     * @deprecated Unreleased.
     */
    GetPlayerCustomGameAccountRecord(playerId: PlayerID): object;
    /**
     * Get time remaining between state changes.
     */
    GetStateTransitionTime(): number;
    /**
     * Get the time of day.
     */
    GetTimeOfDay(): number;
    /**
     * Get Weather Wind Direction Vector.
     *
     * @both
     */
    GetWeatherWindDirection(): Vector;
    /**
     * Increase an item's stock count, clamped to item max.
     *
     * @param count Negative values decrease stock count.
     * @param playerId Values other than -1 work only for items with
     *                 "PlayerSpecificCooldown" property.
     */
    IncreaseItemStock(team: DOTATeam_t, itemName: string, count: number, playerId: PlayerID): void;
    /**
     * Are cheats enabled on the server.
     *
     * @both
     */
    IsCheatMode(): boolean;
    /**
     * Is it day time?
     */
    IsDaytime(): boolean;
    /** @both */
    IsDev(): boolean;
    /**
     * Returns whether the game is paused.
     */
    IsGamePaused(): boolean;
    /**
     * Is the hero not blacklisted, and is it either whitelisted or the whitelist is empty?
     *
     * @both
     */
    IsHeroEnabledViaLists(arg1: string): boolean;
    /**
     * Returns whether hero respawn is enabled.
     */
    IsHeroRespawnEnabled(): boolean;
    /**
     * Are we in the ban phase of hero pick?
     */
    IsInBanPhase(): boolean;
    /**
     * Query an item in the whitelist.
     */
    IsItemInWhiteList(itemName: string): boolean;
    /**
     * Is it night stalker night-time?
     */
    IsNightstalkerNight(): boolean;
    /**
     * Returns whether Dota Plus ability suggestions are enabled or disabled.
     */
    IsSuggestAbilitiesEnabled(): boolean;
    /**
     * Returns whether Dota Plus item suggestions are enabled or disabled.
     */
    IsSuggestItemsEnabled(): boolean;
    /**
     * Is it temporarily night-time?
     */
    IsTemporaryNight(): boolean;
    /**
     * Lock (true) or unlock (false) team assignemnt. If team assignment is locked players cannot change teams.
     */
    LockCustomGameSetupTeamAssignment(locked: boolean): void;
    /**
     * Makes the specified team lose.
     */
    MakeTeamLose(team: DOTATeam_t): void;
    /**
     * Like ModifyGold, but will use the gold filter if SetFilterMoreGold has been set true.
     */
    ModifyGoldFiltered(
        playerId: PlayerID,
        goldChange: number,
        reliable: boolean,
        reason: EDOTA_ModifyGold_Reason,
    ): number;
    /**
     * Returns the number of items currently dropped on the ground.
     */
    NumDroppedItems(): number;
    /**
     * Whether a player has custom game host privileges (shuffle teams, etc.).
     */
    PlayerHasCustomGameHostPrivileges(player: CDOTAPlayerController): boolean;
    /**
     * Updates custom hero, unit and ability KeyValues in memory with the latest values from disk.
     */
    Playtesting_UpdateAddOnKeyValues(): void;
    /**
     * Prepare Dota lane style spawners with a given interval.
     */
    PrepareSpawners(arg1: number): void;
    /**
     * Removes a fake client.
     */
    RemoveFakeClient(playerId: PlayerID): void;
    /**
     * Remove the hero from the hero blacklist if present.
     */
    RemoveHeroFromBlacklist(arg1: string): void;
    /**
     * Remove the hero from the hero whitelist if present.
     */
    RemoveHeroFromWhitelist(arg1: string): void;
    /**
     * Remove the hero ID from the hero blacklist if present.
     */
    RemoveHeroIDFromBlacklist(arg1: number): void;
    /**
     * Remove the hero ID from the hero whitelist if present.
     */
    RemoveHeroIDFromWhitelist(arg1: number): void;
    /**
     * Remove an item from the whitelist.
     */
    RemoveItemFromWhiteList(itemName: string): void;
    /**
     * Restart after killing the ancient, etc.
     */
    ResetDefeated(): void;
    /**
     * Restart gametime from 0.
     */
    ResetGameTime(): void;
    /**
     * Resets the player of a given ID.
     */
    ResetPlayer(arg1: number): void;
    /**
     * Restart at custom game setup.
     */
    ResetToCustomGameSetup(): void;
    /**
     * Restart the game at hero selection.
     */
    ResetToHeroSelection(): void;
    /**
     * Get the MatchID for this game.
     */
    Script_GetMatchID(): Uint64;
    /**
     * Sends a message on behalf of a player.
     */
    SendCustomMessage(arg1: string, arg2: number, arg3: number): void;
    /**
     * Sends a message on behalf of a player to the specified team.
     */
    SendCustomMessageToTeam(arg1: string, arg2: number, arg3: number, arg4: number): void;
    /**
     * Allow Outposts granting XP.
     */
    SetAllowOutpostBonuses(arg1: boolean): void;
    /**
     * Scale the creep icons on the minimap.
     */
    SetCreepMinimapIconScale(scale: number): void;
    /**
     * Sets whether the regular Dota creeps spawn.
     */
    SetCreepSpawningEnabled(arg1: boolean): void;
    /**
     * Sets a callback to handle saving custom game account records (callback is passed a Player ID and should return a flat simple table).
     *
     * @deprecated Unreleased.
     */
    SetCustomGameAccountRecordSaveFunction(arg1: object, arg2: object): void;
    /**
     * Sets a flag to enable/disable the default music handling code for custom games.
     */
    SetCustomGameAllowBattleMusic(allow: boolean): void;
    /**
     * Sets a flag to enable/disable the default music handling code for custom games.
     */
    SetCustomGameAllowHeroPickMusic(allow: boolean): void;
    /**
     * Sets a flag to enable/disable the default music handling code for custom games.
     */
    SetCustomGameAllowMusicAtGameStart(allow: boolean): void;
    /**
     * Sets a flag to enable/disable the casting secondary abilities from units other than the player's own hero.
     */
    SetCustomGameAllowSecondaryAbilitiesOnOtherUnits(arg1: boolean): void;
    /**
     * Set number of hero bans each team gets.
     */
    SetCustomGameBansPerTeam(arg1: number): void;
    /**
     * Set the difficulty level of the custom game mode.
     */
    SetCustomGameDifficulty(difficulty: number): void;
    /**
     * Sets the game end delay.
     */
    SetCustomGameEndDelay(delay: number): void;
    /**
     * Set the amount of time to wait for auto launch.
     */
    SetCustomGameSetupAutoLaunchDelay(delay: number): void;
    /**
     * Set the amount of remaining time, in seconds, for custom game setup. 0 = finish immediately, -1 = wait forever.
     */
    SetCustomGameSetupRemainingTime(remainingTime: number): void;
    /**
     * Setup (pre-gameplay) phase timeout. 0 = instant, -1 = forever (until FinishCustomGameSetup is called).
     */
    SetCustomGameSetupTimeout(timeout: number): void;
    /**
     * Set whether a team is selectable during game setup.
     */
    SetCustomGameTeamMaxPlayers(team: DOTATeam_t, maxPlayers: number): void;
    /**
     * Sets the victory message.
     */
    SetCustomVictoryMessage(message: string): void;
    /**
     * Sets the victory message duration.
     */
    SetCustomVictoryMessageDuration(duration: number): void;
    /**
     * Allow alternate hero grids to be used (DOTA+, etc).  True by default.
     */
    SetEnableAlternateHeroGrids(arg1: boolean): void;
    /**
     * Event-only.
     */
    SetEventMetadataCustomTable(metadataTable: object): boolean;
    /**
     * Event-only.
     */
    SetEventSignoutCustomTable(metadataTable: object): boolean;
    /**
     * Sets whether to filter more gold events than normal.
     */
    SetFilterMoreGold(arg1: boolean): void;
    /**
     * Sets whether First Blood has been triggered.
     */
    SetFirstBloodActive(active: boolean): void;
    /**
     * Makes the specified team win.
     */
    SetGameWinner(team: DOTATeam_t): void;
    /**
     * Set Glyph cooldown for team.
     */
    SetGlyphCooldown(team: DOTATeam_t, cooldown: number): void;
    /**
     * Set the auto gold increase per timed interval.
     */
    SetGoldPerTick(amount: number): void;
    /**
     * Set the time interval between auto gold increases.
     */
    SetGoldTickTime(time: number): void;
    /**
     * Scale the hero minimap icons on the minimap.
     */
    SetHeroMinimapIconScale(scale: number): void;
    /**
     * Control if the normal DOTA hero respawn rules apply.
     */
    SetHeroRespawnEnabled(enabled: boolean): void;
    /**
     * Sets the amount of time players have to pick their hero.
     */
    SetHeroSelectionTime(selectionTime: number): void;
    /**
     * Sets amount of penalty time before randoming a hero.
     */
    SetHeroSelectPenaltyTime(arg1: number): void;
    /**
     * Should blacklisted heroes be hidden, or just dimmed, in hero picking?
     */
    SetHideBlacklistedHeroes(arg1: boolean): void;
    /**
     * Sets whether the multikill, streak, and first-blood banners appear at the top of the screen.
     */
    SetHideKillMessageHeaders(hideHeaders: boolean): void;
    /**
     * Set whether custom and event games should ignore Lobby teams when assigning players to teams. Defaults to true.
     */
    SetIgnoreLobbyTeamsInCustomGame(arg1: boolean): void;
    /**
     * Set the stock count of the item.
     *
     * @param playerId Used only for items with "PlayerSpecificCooldown"
     */
    SetItemStockCount(count: number, team: DOTATeam_t, itemName: string, playerId: PlayerID): void;
    /**
     * Sets the extra offset to initial neutral creep spawn delay.
     */
    SetNeutralInitialSpawnOffset(arg1: number): void;
    /**
     * Sets next bounty rune spawn time.
     */
    SetNextBountyRuneSpawnTime(arg1: number): void;
    /**
     * Sets next rune spawn time.
     */
    SetNextRuneSpawnTime(arg1: number): void;
    /**
     * Show this unit's health on the overlay health bar.
     */
    SetOverlayHealthBarUnit(unit: CDOTA_BaseNPC, style: number): void;
    /**
     * Set columns to show in post game.
     */
    SetPostGameColumns(arg1: object): boolean;
    /**
     * Configure post game to be single or double column layout.
     */
    SetPostGameLayout(arg1: number): void;
    /**
     * Set score value for each team. First element is for DOTA_TEAM_GOODGUYS.
     */
    SetPostGameTeamScores(arg1: object): boolean;
    /**
     * Sets the amount of time players have between the game ending and the server disconnecting them.
     */
    SetPostGameTime(time: number): void;
    /**
     * Sets the amount of time players have between picking their hero and game start.
     */
    SetPreGameTime(time: number): void;
    /**
     * Paints the river for a duration.
     */
    SetRiverPaint(arg1: number, arg2: number): void;
    /**
     * Scale the rune icons on the minimap.
     */
    SetRuneMinimapIconScale(minimapRuneIconScale: number): void;
    /**
     * Sets the amount of time between rune spawns.
     */
    SetRuneSpawnTime(time: number): void;
    /**
     * Mark this game as safe to leave.
     */
    SetSafeToLeave(safeToLeave: boolean): void;
    /**
     * When true, players can repeatedly pick the same hero.
     */
    SetSameHeroSelectionEnabled(enabled: boolean): void;
    /**
     * Sets the amount of time players have between the strategy phase and entering the pre-game phase.
     */
    SetShowcaseTime(time: number): void;
    /**
     * Set whether to speak a Spawn concept instead of a Respawn concept on respawn.
     */
    SetSpeechUseSpawnInsteadOfRespawnConcept(arg1: boolean): void;
    /**
     * Set the starting gold amount.
     */
    SetStartingGold(amount: number): void;
    /**
     * Sets the amount of time players have between the hero selection and entering the showcase phase.
     */
    SetStrategyTime(time: number): void;
    /**
     * Sets Dota Plus ability suggestions enabled or disabled.
     */
    SetSuggestAbilitiesEnabled(arg1: boolean): void;
    /**
     * Sets Dota Plus ability item enabled or disabled.
     */
    SetSuggestItemsEnabled(arg1: boolean): void;
    /**
     * Set the time of day.
     */
    SetTimeOfDay(time: number): void;
    /**
     * Sets the tree regrow time in seconds.
     */
    SetTreeRegrowTime(time: number): void;
    /**
     * Heroes will use the basic NPC functionality for determining their bounty, rather than DOTA specific formulas.
     */
    SetUseBaseGoldBountyOnHeroes(useBaseGoldBounties: boolean): void;
    /**
     * Allows heroes in the map to give a specific amount of XP (this value must be set).
     */
    SetUseCustomHeroXPValues(useCustomXPValues: boolean): void;
    /**
     * When true, all items are available at as long as any shop is in range.
     */
    SetUseUniversalShopMode(useUniversalShopMode: boolean): void;
    /**
     * Set Weather Wind Direction Vector.
     */
    SetWeatherWindDirection(arg1: Vector): void;
    /**
     * Item whitelist functionality enable/disable.
     */
    SetWhiteListEnabled(whiteListEnabled: boolean): void;
    /**
     * Are blacklisted heroes hidden, or just dimmed, in hero picking?
     *
     * @both
     */
    ShouldHideBlacklistedHeroes(): boolean;
    /**
     * Spawn and release the next creep wave from Dota lane style spawners.
     */
    SpawnAndReleaseCreeps(): void;
    /**
     * Spawn and release the next set of neutral camps.
     */
    SpawnNeutralCreeps(): void;
    /**
     * Get the current Gamerules state.
     *
     * @both
     */
    State_Get(): DOTA_GameState;
    __kind__: 'instance';
}

declare const CDOTAPlayerController: DotaConstructor<CDOTAPlayerController>;

/** @client */
declare const C_DOTAPlayerController: typeof CDOTAPlayerController;

declare interface CDOTAPlayerController extends CBaseAnimatingActivity {
    /**
     * Attempt to spawn the appropriate couriers for this mode.
     */
    CheckForCourierSpawning(hero: CDOTA_BaseNPC_Hero): object;
    /** @client */
    GetActiveAbility(): object;
    /**
     * Get the player's hero.
     */
    GetAssignedHero(): CDOTA_BaseNPC_Hero;
    /** @client */
    GetClickBehaviors(): unknown;
    /**
     * 玩家ID
     */
    GetPlayerID(): PlayerID;
    /** @client */
    GetQueryUnit(): object;
    /**
     * Randoms this player's hero.
     */
    MakeRandomHeroSelection(): void;
    /**
     * Sets this player's hero .
     */
    SetAssignedHeroEntity(hero: object): void;
    /**
     * Set the kill cam unit for this hero.
     */
    SetKillCamUnit(entity: CDOTA_BaseNPC): void;
    /**
     * Set the music status for this player, note this will only really apply if dota_music_battle_enable is off.
     */
    SetMusicStatus(musicStatus: number, intensity: number): void;
    /**
     * Sets this player's hero selection.
     */
    SetSelectedHero(heroName: string): void;
    /** @client */
    ShouldDisplayInWorldUIElements(): boolean;
    /**
     * Spawn a courier for this player at the given position.
     */
    SpawnCourierAtPosition(location: Vector): CDOTA_Unit_Courier;
    __kind__: 'instance';
}

declare const CDotaQuest: DotaConstructor<CDotaQuest>;

declare interface CDotaQuest extends CBaseEntity {
    /**
     * Add a subquest to this quest.
     */
    AddSubquest(subquest: object): void;
    /**
     * Mark this quest complete.
     */
    CompleteQuest(): void;
    /**
     * Finds a subquest from this quest by index.
     */
    GetSubquest(index: number): object;
    /**
     * Finds a subquest from this quest by name.
     */
    GetSubquestByName(name: string): object;
    /**
     * Remove a subquest from this quest.
     */
    RemoveSubquest(subquest: object): void;
    /**
     * Set the text replace string for this quest.
     */
    SetTextReplaceString(string: string): void;
    /**
     * Set a quest value.
     */
    SetTextReplaceValue(valueSlot: number, value: number): void;
    __kind__: 'instance';
}

declare const CDotaSubquestBase: DotaConstructor<CDotaSubquestBase>;

declare interface CDotaSubquestBase extends CBaseEntity {
    /**
     * Mark this subquest complete.
     */
    CompleteSubquest(): void;
    /**
     * Set the text replace string for this subquest.
     */
    SetTextReplaceString(string: string): void;
    /**
     * Set a subquest value.
     */
    SetTextReplaceValue(valueSlot: number, value: number): void;
    __kind__: 'instance';
}

declare const Tutorial: CDOTATutorial;

declare const CDOTATutorial: DotaConstructor<CDOTATutorial>;

declare interface CDOTATutorial {
    /**
     * Add a computer controlled bot.
     */
    AddBot(heroName: string, arg2: string, arg3: string, arg4: boolean): boolean;
    /**
     * Add a quest to the quest log.
     */
    AddQuest(arg1: string, arg2: number, arg3: string, arg4: string): void;
    /**
     * Add an item to the shop whitelist.
     */
    AddShopWhitelistItem(itemName: string): void;
    /**
     * Complete a quest,.
     */
    CompleteQuest(arg1: string): void;
    /**
     * Add a task to move to a specific location.
     */
    CreateLocationTask(arg1: Vector): void;
    /**
     * Alert the player when a creep becomes agro to their hero.
     */
    EnableCreepAggroViz(arg1: boolean): void;
    /**
     * Enable the tip to alert players how to find their hero.
     */
    EnablePlayerOffscreenTip(arg1: boolean): void;
    /**
     * Alert the player when a tower becomes agro to their hero.
     */
    EnableTowerAggroViz(arg1: boolean): void;
    /**
     * End the tutorial.
     */
    FinishTutorial(): void;
    /**
     * Force the start of the game.
     */
    ForceGameStart(): void;
    /**
     * Is this item currently in the white list.
     */
    IsItemInWhiteList(itemName: string): boolean;
    /**
     * Moves the camera to a position.
     */
    MoveCameraToLocation(arg1: Vector): void;
    /**
     * Remove an item from the shop whitelist.
     */
    RemoveShopWhitelistItem(itemName: string): void;
    /**
     * Select a hero for the local player.
     */
    SelectHero(heroName: string): void;
    /**
     * Select the team for the local player.
     */
    SelectPlayerTeam(arg1: string): void;
    /**
     * Set the current item guide.
     */
    SetItemGuide(arg1: string): void;
    /**
     * Set gold amount for the tutorial player.
     *
     * @param setNotModify When true sets gold amount, otherwise modifies it
     */
    SetOrModifyPlayerGold(goldAmount: number, setNotModify: boolean): void;
    /**
     * Set players quick buy item.
     */
    SetQuickBuy(itemName: string): void;
    /**
     * Set the shop open or closed.
     */
    SetShopOpen(open: boolean): void;
    /**
     * Set a tutorial convar.
     */
    SetTutorialConvar(arg1: string, arg2: string): void;
    /**
     * Set the UI to use a reduced version to focus attention to specific elements.
     */
    SetTutorialUI(arg1: number): void;
    /**
     * Set if we should whitelist shop items.
     */
    SetWhiteListEnabled(whiteListEnabled: boolean): void;
    /**
     * Initialize Tutorial Mode.
     */
    StartTutorialMode(): void;
    /**
     * Upgrade a specific ability for the local hero.
     */
    UpgradePlayerAbility(abilityName: string): void;
    __kind__: 'instance';
}

declare const CDotaTutorialNPCBlocker: DotaConstructor<CDotaTutorialNPCBlocker>;

declare interface CDotaTutorialNPCBlocker extends CBaseAnimatingOverlay {
    SetEnabled(enabled: boolean): void;
    SetOtherBlocker(blocker: object): void;
    __kind__: 'instance';
}

declare const VoteSystem: CDOTAVoteSystem;

declare const CDOTAVoteSystem: DotaConstructor<CDOTAVoteSystem>;

declare interface CDOTAVoteSystem {
    /**
     * Starts a vote, based upon a table of parameters.
     */
    StartVote(arg1: object): void;
    __kind__: 'instance';
}

declare const Entities: CEntities;

/** @both */
declare const CEntities: DotaConstructor<CEntities>;

declare interface CEntities {
    /**
     * Creates an entity by classname.
     */
    CreateByClassname(className: string): CBaseEntity;
    /**
     * Finds all entities by class name. Returns an array containing all the found entities.
     */
    FindAllByClassname(className: string): CBaseEntity[];
    /**
     * Find entities by class name within a radius.
     */
    FindAllByClassnameWithin(arg1: string, location: Vector, arg3: number): CBaseEntity[];
    /**
     * Find entities by model name.
     */
    FindAllByModel(modelName: string): CBaseEntity[];
    /**
     * Find all entities by name. Returns an array containing all the found entities in it.
     */
    FindAllByName(name: string): CBaseEntity[];
    /**
     * Find entities by name within a radius.
     */
    FindAllByNameWithin(arg1: string, location: Vector, arg3: number): CBaseEntity[];
    /**
     * Find entities by targetname.
     */
    FindAllByTarget(target: string): CBaseEntity[];
    /**
     * Find entities within a radius.
     */
    FindAllInSphere(location: Vector, arg2: number): CBaseEntity[];
    /**
     * Find entities by class name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search.
     */
    FindByClassname(previous: CBaseEntity | undefined, className: string): CBaseEntity | undefined;
    /**
     * Find entities by class name nearest to a point.
     */
    FindByClassnameNearest(arg1: string, location: Vector, arg3: number): object;
    /**
     * Find entities by class name within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search.
     */
    FindByClassnameWithin(arg1: object, arg2: string, location: Vector, arg4: number): object;
    /**
     * Find entities by model name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search.
     */
    FindByModel(previous: CBaseEntity | undefined, modelName: string): CBaseEntity | undefined;
    /**
     * Find entities by model name within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search.
     */
    FindByModelWithin(arg1: object, arg2: string, location: Vector, arg4: number): object;
    /**
     * Find entities by name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search.
     */
    FindByName(previous: CBaseEntity | undefined, name: string): CBaseEntity | undefined;
    /**
     * Find entities by name nearest to a point.
     */
    FindByNameNearest(arg1: string, location: Vector, arg3: number): object;
    /**
     * Find entities by name within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search.
     */
    FindByNameWithin(arg1: object, arg2: string, location: Vector, arg4: number): object;
    /**
     * Find entities by targetname. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search.
     */
    FindByTarget(previous: CBaseEntity | undefined, target: string): CBaseEntity | undefined;
    /**
     * Find entities within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search.
     */
    FindInSphere(arg1: object, location: Vector, arg3: number): object;
    /**
     * Begin an iteration over the list of entities.
     *
     * @both
     */
    First(): CBaseEntity;
    /**
     * Get the local player controller (backcompat).
     *
     * @both
     */
    GetLocalPlayer(): CDOTAPlayerController;
    /**
     * Get the local player controller.
     *
     * @both
     */
    GetLocalPlayerController(): object;
    /**
     * Get the local player pawn.
     *
     * @both
     */
    GetLocalPlayerPawn(): object;
    /**
     * Continue an iteration over the list of entities, providing reference to a previously found entity.
     *
     * @both
     */
    Next(previous: CBaseEntity | undefined): CBaseEntity | undefined;
    __kind__: 'instance';
}

/** @both */
declare const CEntityInstance: DotaConstructor<CEntityInstance>;

declare interface CEntityInstance {
    /**
     * Adds an I/O connection that will call the named function on this entity when the specified output fires.
     *
     * @both
     */
    ConnectOutput(arg1: string, arg2: string): void;
    /** @both */
    Destroy(): void;
    /**
     * Removes a connected script function from an I/O event on this entity.
     *
     * @both
     */
    DisconnectOutput(arg1: string, arg2: string): void;
    /**
     * Removes a connected script function from an I/O event on the passed entity.
     *
     * @both
     */
    DisconnectRedirectedOutput(arg1: string, arg2: string, arg3: object): void;
    /** @both */
    entindex(): EntityIndex;
    /**
     * Fire an entity output.
     *
     * @both
     */
    FireOutput(arg1: string, arg2: object, arg3: object, arg4: object, arg5: number): void;
    /**
     * 类别名称
     *
     * @both
     */
    GetClassname(): string;
    /**
     * Get the entity name w/help if not defined (i.e. classname/etc).
     *
     * @both
     */
    GetDebugName(): string;
    /**
     * Get the entity as an EHANDLE.
     *
     * @both
     */
    GetEntityHandle(): number;
    /** @both */
    GetEntityIndex(): EntityIndex;
    /**
     * Get Integer Attribute.
     *
     * @both
     */
    GetIntAttr(arg1: string): number;
    /**
     * 实体名称
     *
     * @both
     */
    GetName(): string;
    /**
     * Retrieve, creating if necessary, the private per-instance script-side data associated with an entity.
     *
     * @both
     */
    GetOrCreatePrivateScriptScope(): object;
    /**
     * Retrieve, creating if necessary, the public script-side data associated with an entity.
     *
     * @both
     */
    GetOrCreatePublicScriptScope(): object;
    /**
     * Retrieve the private per-instance script-side data associated with an entity.
     *
     * @both
     */
    GetPrivateScriptScope(): object;
    /**
     * Retrieve the public script-side data associated with an entity.
     *
     * @both
     */
    GetPublicScriptScope(): object;
    /**
     * Has underlying C++ entity object been deleted?
     *
     * @both
     */
    IsNull(): boolean;
    /**
     * Adds an I/O connection that will call the named function on the passed entity when the specified output fires.
     *
     * @both
     */
    RedirectOutput(arg1: string, arg2: string, arg3: object): void;
    /**
     * Delete this entity.
     *
     * @both
     */
    RemoveSelf(): void;
    /**
     * Set Integer Attribute.
     *
     * @both
     */
    SetIntAttr(arg1: string, arg2: number): void;
    __kind__: 'instance';
}

declare const NativeFunctions: CEntityScriptFramework;

/** @both */
declare const CEntityScriptFramework: DotaConstructor<CEntityScriptFramework>;

declare interface CEntityScriptFramework {
    __kind__: 'instance';
}

declare const CEnvEntityMaker: DotaConstructor<CEnvEntityMaker>;

declare interface CEnvEntityMaker extends CBaseEntity {
    /**
     * Create an entity at the location of the maker.
     */
    SpawnEntity(): void;
    /**
     * Create an entity at the location of a specified entity instance.
     */
    SpawnEntityAtEntityOrigin(entity: object): void;
    /**
     * Create an entity at a specified location and orientaton, orientation is Euler angle in degrees.
     */
    SpawnEntityAtLocation(vecAlternateOrigin: Vector, vecAlternateAngles: Vector): void;
    /**
     * Create an entity at the location of a named entity.
     */
    SpawnEntityAtNamedEntityOrigin(name: string): void;
    __kind__: 'instance';
}

declare const CFoWBlockerRegion: DotaConstructor<CFoWBlockerRegion>;

declare interface CFoWBlockerRegion extends CBaseEntity {
    /**
     * Sets or clears a blocker rectangle.
     */
    AddRectangularBlocker(mins: Vector, maxs: Vector, clearRegion: boolean): void;
    /**
     * Sets or clears a blocker rectangle outline.
     */
    AddRectangularOutlineBlocker(mins: Vector, maxs: Vector, clearRegion: boolean): void;
    __kind__: 'instance';
}

declare const CInfoData: DotaConstructor<CInfoData>;

declare interface CInfoData extends CBaseEntity {
    /**
     * Query color data for this key.
     */
    QueryColor(tok: string, defaultValue: Vector): Vector;
    /**
     * Query float data for this key.
     */
    QueryFloat(tok: string, defaultValue: number): number;
    /**
     * Query int data for this key.
     */
    QueryInt(tok: string, defaultValue: number): number;
    /**
     * Query number data for this key.
     */
    QueryNumber(tok: string, defaultValue: number): number;
    /**
     * Query string data for this key.
     */
    QueryString(tok: string, defaultValue: string): string;
    /**
     * Query vector data for this key.
     */
    QueryVector(tok: string, defaultValue: Vector): Vector;
    __kind__: 'instance';
}

declare const CInfoPlayerStartDota: DotaConstructor<CInfoPlayerStartDota>;

declare interface CInfoPlayerStartDota extends CPointEntity {
    /**
     * Returns whether the object is currently active.
     */
    IsEnabled(): boolean;
    /**
     * Enable or disable the obstruction.
     */
    SetEnabled(enabled: boolean): void;
    __kind__: 'instance';
}

/** @both */
declare const CInfoWorldLayer: DotaConstructor<CInfoWorldLayer>;

declare interface CInfoWorldLayer extends CBaseEntity {
    /**
     * Hides this layer.
     *
     * @both
     */
    HideWorldLayer(): void;
    /**
     * Shows this layer.
     *
     * @both
     */
    ShowWorldLayer(): void;
    __kind__: 'instance';
}

/** @both */
declare const CLogicRelay: DotaConstructor<CLogicRelay>;

declare interface CLogicRelay extends CBaseEntity {
    /**
     * Triggers the logic_relay.
     *
     * @both
     */
    Trigger(activator: CBaseEntity | undefined, caller: CBaseEntity | undefined): void;
    /**
     * @deprecated Added for compatibility with CBaseEntity. Invalid at the runtime.
     */
    Trigger(): never;
    __kind__: 'instance';
}

declare const CLogicScript: DotaConstructor<CLogicScript>;

declare interface CLogicScript extends CBaseEntity {
    __kind__: 'instance';
}

declare const CMarkupVolumeTagged: DotaConstructor<CMarkupVolumeTagged>;

declare interface CMarkupVolumeTagged extends CBaseEntity {
    /**
     * Does this volume have the given tag.
     */
    HasTag(tagName: unknown): boolean;
    __kind__: 'instance';
}

/** @both */
declare const CNativeOutputs: DotaConstructor<CNativeOutputs>;

declare interface CNativeOutputs {
    /**
     * Add an output.
     *
     * @both
     */
    AddOutput(arg1: string, arg2: string): void;
    /**
     * Initialize with number of outputs.
     *
     * @both
     */
    Init(arg1: number): void;
    __kind__: 'instance';
}

/** @both */
declare const Convars: Convars;

declare interface Convars {
    /**
     * Returns the convar as a boolean flag.
     *
     * @both
     */
    GetBool(name: string): boolean | undefined;
    /**
     * Returns the player who issued this console command.
     *
     * @both
     */
    GetCommandClient(): CDOTAPlayerController;
    /**
     * Returns the DOTA player who issued this console command.
     *
     * @both
     */
    GetDOTACommandClient(): CDOTAPlayerController;
    /**
     * Returns the convar as a float. May return null if no such convar.
     *
     * @both
     */
    GetFloat(name: string): number | undefined;
    /**
     * Returns the convar as an int. May return null if no such convar.
     *
     * @both
     */
    GetInt(name: string): number | undefined;
    /**
     * Returns the convar as a string. May return null if no such convar.
     *
     * @both
     */
    GetStr(name: string): string | undefined;
    /**
     * Register a console command.
     *
     * @both
     */
    RegisterCommand(
        name: string,
        callback: (name: string, ...args: string[]) => void,
        helpString: string,
        flags: ConVarFlags,
    ): void;
    /**
     * Register a new console variable.
     *
     * @both
     */
    RegisterConvar(name: string, defaultValue: string, helpString: string, flags: ConVarFlags): void;
    /**
     * Sets the value of the convar to the bool.
     *
     * @both
     */
    SetBool(name: string, value: boolean): void;
    /**
     * Sets the value of the convar to the float.
     *
     * @both
     */
    SetFloat(name: string, value: number): void;
    /**
     * Sets the value of the convar to the int.
     *
     * @both
     */
    SetInt(name: string, value: number): void;
    /**
     * Sets the value of the convar to the string.
     *
     * @both
     */
    SetStr(name: string, value: string): void;
    __kind__: 'instance';
}

declare const CParticleSystem: DotaConstructor<CParticleSystem>;

declare interface CParticleSystem extends CBaseModelEntity {
    __kind__: 'instance';
}

declare const CPhysicsProp: DotaConstructor<CPhysicsProp>;

declare interface CPhysicsProp extends CBaseAnimatingActivity {
    /**
     * Disable motion for the prop.
     */
    DisableMotion(): void;
    /**
     * Enable motion for the prop.
     */
    EnableMotion(): void;
    __kind__: 'instance';
}

declare const CPointClientUIWorldPanel: DotaConstructor<CPointClientUIWorldPanel>;

declare interface CPointClientUIWorldPanel extends CBaseModelEntity {
    /**
     * Tells the panel to accept user input.
     */
    AcceptUserInput(): void;
    /**
     * Adds CSS class(es) to the panel.
     */
    AddCSSClasses(classes: string): void;
    /**
     * Tells the panel to ignore user input.
     */
    IgnoreUserInput(): void;
    /**
     * Returns whether this entity is grabbable.
     */
    IsGrabbable(): boolean;
    /**
     * Remove CSS class(es) from the panel.
     */
    RemoveCSSClasses(classes: string): void;
    __kind__: 'instance';
}

declare const CPointEntity: DotaConstructor<CPointEntity>;

/** @client */
declare const C_PointEntity: typeof CPointEntity;

declare interface CPointEntity extends CBaseEntity {
    __kind__: 'instance';
}

/** @both */
declare const CPointTemplate: DotaConstructor<CPointTemplate>;

declare interface CPointTemplate extends CBaseEntity {
    /**
     * Deletes any spawn groups that this point_template has spawned. Note: The point_template will not be deleted by this.
     *
     * @both
     */
    DeleteCreatedSpawnGroups(): void;
    /**
     * Spawns all of the entities the point_template is pointing at.
     *
     * @both
     */
    ForceSpawn(): void;
    /**
     * Get the list of the most recent spawned entities.
     *
     * @both
     */
    GetSpawnedEntities(): object;
    /**
     * Set a callback for when the template spawns entities. The spawned entities will be passed in as an array.
     *
     * @both
     */
    SetSpawnCallback(callbackFunc: object, callbackScope: object): void;
    __kind__: 'instance';
}

declare const CPointWorldText: DotaConstructor<CPointWorldText>;

/** @client */
declare const C_PointWorldText: typeof CPointWorldText;

declare interface CPointWorldText extends CBaseModelEntity {
    /**
     * Set the message on this entity.
     *
     * @both
     */
    SetMessage(message: string): void;
    __kind__: 'instance';
}

declare const CSceneEntity: DotaConstructor<CSceneEntity>;

declare interface CSceneEntity extends CBaseEntity {
    /**
     * Adds a team (by index) to the broadcast list.
     */
    AddBroadcastTeamTarget(arg1: number): void;
    /**
     * Cancel scene playback.
     */
    Cancel(): void;
    /**
     * Returns length of this scene in seconds.
     */
    EstimateLength(): number;
    /**
     * Given an entity reference, such as !target, get actual entity from scene object.
     */
    FindNamedEntity(arg1: string): object;
    /**
     * If this scene is currently paused.
     */
    IsPaused(): boolean;
    /**
     * If this scene is currently playing.
     */
    IsPlayingBack(): boolean;
    /**
     * Removes a team (by index) from the broadcast list.
     */
    RemoveBroadcastTeamTarget(arg1: number): void;
    /**
     * Start scene playback, takes activatorEntity as param.
     */
    Start(arg1: object): void;
    __kind__: 'instance';
}

declare const HeroList: CScriptHeroList;

declare const CScriptHeroList: DotaConstructor<CScriptHeroList>;

declare interface CScriptHeroList {
    /**
     * Returns all the heroes in the world.
     */
    GetAllHeroes(): CDOTA_BaseNPC_Hero[];
    /**
     * Get the Nth hero in the Hero List.
     */
    GetHero(nth: number): CDOTA_BaseNPC_Hero | undefined;
    /**
     * Returns the number of heroes in the world.
     */
    GetHeroCount(): number;
    __kind__: 'instance';
}

/** @both */
declare const CScriptHTTPRequest: DotaConstructor<CScriptHTTPRequest>;

/**
 * Note: Actual `CScriptHTTPRequest` global exists only after CreateHTTPRequest is
 * called.
 */
declare interface CScriptHTTPRequest {
    /**
     * Send a HTTP request.
     *
     * @both
     */
    Send(callback: (response: CScriptHTTPResponse) => void): boolean;
    /**
     * Set the total timeout on the request.
     *
     * @both
     */
    SetHTTPRequestAbsoluteTimeoutMS(milliseconds: number): boolean;
    /**
     * Set a POST or GET parameter on the request.
     *
     * @both
     */
    SetHTTPRequestGetOrPostParameter(name: string, value: string): boolean;
    /**
     * Set a header value on the request.
     *
     * @both
     */
    SetHTTPRequestHeaderValue(name: string, value: string): boolean;
    /**
     * Set the network timeout on the request - this timer is reset when any data is received.
     *
     * @both
     */
    SetHTTPRequestNetworkActivityTimeout(seconds: number): boolean;
    /**
     * Set the literal body of a post - invalid after setting a post parameter.
     *
     * @both
     */
    SetHTTPRequestRawPostBody(contentType: string, body: string): boolean;
    __kind__: 'instance';
}

/** @both */
declare const CScriptKeyValues: DotaConstructor<CScriptKeyValues>;

declare interface CScriptKeyValues {
    /**
     * Reads a spawn key.
     *
     * @both
     */
    GetValue(arg1: string): object;
    __kind__: 'instance';
}

declare const ParticleManager: CScriptParticleManager;

/** @both */
declare const CScriptParticleManager: DotaConstructor<CScriptParticleManager>;

declare interface CScriptParticleManager {
    /**
     * Creates a new particle effect.
     *
     * @both
     */
    CreateParticle(
        particleName: string,
        particleAttach: ParticleAttachment_t,
        owner: CBaseEntity | undefined,
    ): ParticleID;
    /**
     * Creates a new particle effect that only plays for the specified player.
     *
     * @both
     */
    CreateParticleForPlayer(
        particleName: string,
        particleAttach: ParticleAttachment_t,
        owner: CBaseEntity | undefined,
        player: CDOTAPlayerController,
    ): ParticleID;
    /**
     * Creates a new particle effect that only plays for the specified team.
     *
     * @both
     */
    CreateParticleForTeam(
        particleName: string,
        particleAttach: ParticleAttachment_t,
        owner: CBaseEntity | undefined,
        team: DOTATeam_t,
    ): ParticleID;
    /**
     * Destroy a particle, if bDestroyImmediately destroy it without playing end caps.
     *
     * @both
     */
    DestroyParticle(particle: ParticleID, immediate: boolean): void;
    /** @both */
    GetParticleReplacement(particleName: string, hero: CDOTA_BaseNPC_Hero | undefined): string;
    /**
     * Frees the specified particle index.
     *
     * @both
     */
    ReleaseParticleIndex(particle: ParticleID): void;
    /** @both */
    SetParticleAlwaysSimulate(particle: ParticleID): void;
    /**
     * Set the control point data for a control on a particle effect.
     *
     * @both
     */
    SetParticleControl(particle: ParticleID, controlPoint: number, value: Vector): void;
    /** @both */
    SetParticleControlEnt(
        particle: ParticleID,
        controlPoint: number,
        unit: CBaseEntity,
        particleAttach: ParticleAttachment_t,
        attachment: string,
        offset: Vector,
        lockOrientation: boolean,
    ): void;
    /** @both */
    SetParticleControlFallback(particle: ParticleID, controlPoint: number, vecPosition: Vector): void;
    /**
     * [OBSOLETE - Use SetParticleControlTransformForward] (int nFXIndex, int nPoint, vForward).
     *
     * @both
     */
    SetParticleControlForward(particle: ParticleID, controlPoint: number, arg3: Vector): void;
    /**
     * [OBSOLETE - Use SetParticleControlTransform] (int nFXIndex, int nPoint, vForward, vRight, vUp) - Set the orientation for a control on a particle effect (NOTE: This is left handed -- bad!!).
     *
     * @both
     */
    SetParticleControlOrientation(
        particle: ParticleID,
        controlPoint: number,
        arg3: Vector,
        arg4: Vector,
        arg5: Vector,
    ): void;
    /**
     * [OBSOLETE - Use SetParticleControlTransform] (int nFXIndex, int nPoint, Vector vecForward, Vector vecLeft, Vector vecUp) - Set the orientation for a control on a particle effect.
     *
     * @both
     */
    SetParticleControlOrientationFLU(
        particle: ParticleID,
        controlPoint: number,
        arg3: Vector,
        arg4: Vector,
        arg5: Vector,
    ): void;
    /** @both */
    SetParticleControlTransform(fxIndex: number, point: number, origin: Vector, qAngles: QAngle): void;
    /** @both */
    SetParticleControlTransformForward(fxIndex: number, point: number, origin: Vector, forward: Vector): void;
    /** @both */
    SetParticleFoWProperties(particle: ParticleID, controlPoint: number, controlPoint2: number, radius: number): void;
    /** @both */
    SetParticleShouldCheckFoW(particle: ParticleID, checkFoW: boolean): boolean;
    __kind__: 'instance';
}

/** @both */
declare const CScriptPrecacheContext: DotaConstructor<CScriptPrecacheContext>;

declare interface CScriptPrecacheContext {
    /**
     * Precaches a specific resource.
     *
     * @both
     */
    AddResource(resource: string): void;
    /**
     * Reads a spawn key.
     *
     * @both
     */
    GetValue(key: string): object;
    __kind__: 'instance';
}

/** @both */
declare const CScriptUniformRandomStream: DotaConstructor<CScriptUniformRandomStream>;

declare interface CScriptUniformRandomStream {
    /** @both */
    RandomFloat(minVal: number, maxVal: number): number;
    /** @both */
    RandomFloatExp(minVal: number, maxVal: number, exponent: number): number;
    /** @both */
    RandomInt(minVal: number, maxVal: number): number;
    /** @both */
    RollPercentage(percentage: number): boolean;
    __kind__: 'instance';
}

declare const CTakeDamageInfo: DotaConstructor<CTakeDamageInfo>;

declare interface CTakeDamageInfo {
    AddDamage(addAmount: number): void;
    AddDamageType(damageType: number): void;
    GetAmmoType(): number;
    GetAttacker(): object;
    GetDamage(): number;
    GetDamageCustom(): number;
    GetDamageForce(): Vector;
    GetDamagePosition(): Vector;
    GetDamageType(): DAMAGE_TYPES;
    GetInflictor(): object;
    GetOriginalDamage(): number;
    GetReportedPosition(): Vector;
    GetTotalledDamage(): number;
    HasDamageType(damageType: number): boolean;
    ScaleDamage(scaleAmount: number): void;
    SetAmmoType(ammoType: number): void;
    SetAttacker(attacker: object): void;
    SetDamage(damage: number): void;
    SetDamageCustom(damageCustom: number): void;
    SetDamageForce(damageForce: Vector): void;
    SetDamagePosition(damagePosition: Vector): void;
    SetDamageType(damageType: number): void;
    SetOriginalDamage(originalDamage: number): void;
    SetReportedPosition(reportedPosition: Vector): void;
    __kind__: 'instance';
}

/** @both */
declare const GlobalSys: GlobalSys;

declare interface GlobalSys {
    /**
     * Returns true if the command line param was used, otherwise false.
     *
     * @both
     */
    CommandLineCheck(name: string): object;
    /**
     * Returns the command line param as a float.
     *
     * @both
     */
    CommandLineFloat(arg1: string, arg2: number): object;
    /**
     * Returns the command line param as an int.
     *
     * @both
     */
    CommandLineInt(arg1: string, arg2: number): object;
    /**
     * Returns the command line param as a string.
     *
     * @both
     */
    CommandLineStr(arg1: string, arg2: string): object;
    __kind__: 'instance';
}

declare const GridNav: GridNav;

declare interface GridNav {
    /**
     * Determine if it is possible to reach the specified end point from the specified start point. bool.
     */
    CanFindPath(start: Vector, end: Vector): boolean;
    /**
     * Destroy all trees in the area(vPosition, flRadius, bFullCollision.
     */
    DestroyTreesAroundPoint(arg1: Vector, arg2: number, arg3: boolean): void;
    /**
     * Find a path between the two points an return the length of the path. If there is not a path between the points the returned value will be -1.
     */
    FindPathLength(start: Vector, end: Vector): number;
    /**
     * Returns a table full of tree HSCRIPTS.
     */
    GetAllTreesAroundPoint(position: Vector, radius: number, fullCollision: boolean): CDOTA_MapTree[];
    /**
     * Get the X position of the center of a given X index.
     */
    GridPosToWorldCenterX(arg1: number): number;
    /**
     * Get the Y position of the center of a given Y index.
     */
    GridPosToWorldCenterY(arg1: number): number;
    /**
     * Checks whether the given position is blocked.
     */
    IsBlocked(arg1: Vector): boolean;
    /**
     * Checks whether there are any trees overlapping the given point.
     */
    IsNearbyTree(position: Vector, radius: number, checkFullTreeRadius: boolean): boolean;
    /**
     * Checks whether the given position is traversable.
     */
    IsTraversable(arg1: Vector): boolean;
    /**
     * Causes all trees in the map to regrow.
     */
    RegrowAllTrees(): void;
    /**
     * Get the X index of a given world X position.
     */
    WorldToGridPosX(arg1: number): number;
    /**
     * Get the Y index of a given world Y position.
     */
    WorldToGridPosY(arg1: number): number;
    __kind__: 'instance';
}

declare const ProjectileManager: ProjectileManager;

declare interface ProjectileManager {
    /**
     * Update speed.
     */
    ChangeTrackingProjectileSpeed(ability: CDOTABaseAbility, speed: number): void;
    /**
     * Creates a linear projectile and returns the projectile ID.
     */
    CreateLinearProjectile(options: CreateLinearProjectileOptions): ProjectileID;
    /**
     * Creates a tracking projectile.
     */
    CreateTrackingProjectile(options: CreateTrackingProjectileOptions): ProjectileID;
    /**
     * Destroys the linear projectile matching the argument ID.
     */
    DestroyLinearProjectile(projectile: ProjectileID): void;
    /**
     * Destroy a tracking projectile early.
     */
    DestroyTrackingProjectile(projectile: ProjectileID): void;
    /**
     * Returns current location of projectile.
     */
    GetLinearProjectileLocation(projectile: ProjectileID): Vector;
    /**
     * Returns current radius of projectile.
     */
    GetLinearProjectileRadius(projectile: ProjectileID): number;
    /**
     * Returns a vector representing the current velocity of the projectile.
     */
    GetLinearProjectileVelocity(projectile: ProjectileID): Vector;
    /**
     * Returns current location of projectile.
     */
    GetTrackingProjectileLocation(projectile: ProjectileID): Vector;
    /**
     * Is this a valid projectile?
     */
    IsValidProjectile(value: number): value is ProjectileID;
    /**
     * Makes the specified unit dodge projectiles.
     */
    ProjectileDodge(unit: CDOTA_BaseNPC): void;
    /**
     * Update velocity.
     */
    UpdateLinearProjectileDirection(projectile: ProjectileID, direction: Vector, speed: number): void;
    __kind__: 'instance';
}

/** @both */
declare const QAngle: DotaConstructor<QAngle> &
    ((x: number | undefined, y: number | undefined, z: number | undefined) => QAngle);

/**
 * QAngle class.
 */
declare type QAngle = __NumberLike & {
    /**
     * Pitch angle
     */
    x: number;
    /**
     * Yaw angle
     */
    y: number;
    /**
     * Roll angle
     */
    z: number;
    /**
     * Overloaded +. Adds angles together.
     *
     * @both
     */
    __add(b: QAngle): QAngle;
    /**
     * Overloaded ==. Tests for Equality.
     *
     * @both
     */
    __eq(b: QAngle): boolean;
    /**
     * Overloaded .. Converts the QAngles to strings.
     *
     * @both
     */
    __tostring(): string;
    /**
     * Returns the forward vector.
     *
     * @both
     */
    Forward(): Vector;
    /**
     * Returns the left vector.
     *
     * @both
     */
    Left(): Vector;
    /**
     * Returns the up vector.
     *
     * @both
     */
    Up(): Vector;
    __kind__: 'instance';
};

declare const SteamInfo: SteamInfo;

declare interface SteamInfo {
    /**
     * Is the script connected to the public Steam universe.
     */
    IsPublicUniverse(): boolean;
    __kind__: 'instance';
}

declare const Uint64: DotaConstructor<Uint64>;

/**
 * Integer with binary operations.
 */
declare interface Uint64 {
    __eq(b: Uint64): boolean;
    /**
     * Overloaded .. Converts Uint64s to strings.
     */
    __tostring(): string;
    /**
     * Performs bitwise AND between two integers.
     */
    BitwiseAnd(operand: Uint64): Uint64;
    /**
     * Performs bitwise OR between two integers.
     */
    BitwiseOr(operand: Uint64): Uint64;
    /**
     * Performs bitwise XOR between two integers.
     */
    BitwiseXor(operand: Uint64): Uint64;
    /**
     * Performs bitwise NOT.
     */
    BitwiseNot(): Uint64;
    /**
     * Sets the specified bit.
     */
    SetBit(bitvalue: number): void;
    /**
     * Clears the specified bit.
     */
    ClearBit(bitvalue: number): number;
    /**
     * Checks if bit is set.
     */
    IsBitSet(bitvalue: number): number | undefined;
    /**
     * Toggles the specified bit.
     */
    ToggleBit(bitvalue: number): number;
    /**
     * Returns a hexadecimal string representation of the integer.
     */
    ToHexString(): string;
    __kind__: 'instance';
}

/** @both */
declare const Vector: DotaConstructor<Vector> & ((x?: number, y?: number, z?: number) => Vector);

/**
 * 3D Vector class.
 */
declare type Vector = __NumberLike & {
    /**
     * X-axis
     */
    x: number;
    /**
     * Y-axis
     */
    y: number;
    /**
     * Z-axis
     */
    z: number;
    /**
     * Overloaded +. Adds vectors together.
     *
     * @both
     */
    __add(b: Vector): Vector;
    /**
     * Overloaded /. Divides vectors.
     *
     * @both
     */
    __div(b: Vector): Vector;
    /**
     * Overloaded ==. Tests for Equality.
     *
     * @both
     */
    __eq(b: Vector): boolean;
    /**
     * Overloaded # returns the length of the vector.
     *
     * @both
     */
    __len(): number;
    /**
     * Overloaded * returns the vectors multiplied together. Can also be used to multiply with scalars.
     *
     * @both
     */
    __mul(b: Vector | number): Vector;
    /**
     * Overloaded -. Subtracts vectors.
     *
     * @both
     */
    __sub(b: Vector): Vector;
    /**
     * Overloaded .. Converts vectors to strings.
     *
     * @both
     */
    __tostring(): string;
    /**
     * Overloaded - operator. Reverses the vector.
     *
     * @both
     */
    __unm(): Vector;
    /**
     * Cross product of two vectors.
     *
     * @both
     */
    Cross(b: Vector): Vector;
    /**
     * Dot product of two vectors.
     *
     * @both
     */
    Dot(b: Vector): number;
    /**
     * Length of the Vector.
     *
     * @both
     */
    Length(): number;
    /**
     * Length of the Vector in the XY plane.
     *
     * @both
     */
    Length2D(): number;
    /**
     * Returns the vector normalized.
     *
     * @both
     */
    Normalized(): Vector;
    /**
     * Linearly interpolates between two vectors.
     * This is most commonly used to find a point some fraction of the way along a line between two endpoints.
     * Same as `this + (b - this) * t`.
     *
     * @param t Interpolant
     * @both
     */
    Lerp(b: Vector, t: number): Vector;
    __kind__: 'instance';
};

/**
 * Add temporary vision for a given team.
 */
declare function AddFOWViewer(
    teamId: DOTATeam_t,
    location: Vector,
    radius: number,
    duration: number,
    obstructedVision: boolean,
): ViewerID;

/**
 * Returns the number of degrees difference between two yaw angles.
 *
 * @both
 */
declare function AngleDiff(arg1: number, arg2: number): number;

/**
 * Generate a vector given a QAngles.
 *
 * @both
 */
declare function AnglesToVector(arg1: QAngle): Vector;

/**
 * @deprecated AppendToLogFile is deprecated. Print to the console for logging
 *             instead.
 * @both
 */
declare function AppendToLogFile(arg1: string, arg2: string): void;

/**
 * 造成伤害
 */
declare function ApplyDamage(options: ApplyDamageOptions): number;

/**
 * Constructs a quaternion representing a rotation by angle around the specified vector axis.
 *
 * @both
 */
declare function AxisAngleToQuaternion(arg1: Vector, arg2: number): never;

/**
 * Compute the closest point on the OBB of an entity.
 *
 * @both
 */
declare function CalcClosestPointOnEntityOBB(arg1: object, arg2: Vector): Vector;

/**
 * Compute the distance between two entity OBB. A negative return value indicates an input error. A return value of zero indicates that the OBBs are overlapping.
 *
 * @both
 */
declare function CalcDistanceBetweenEntityOBB(arg1: object, arg2: object): number;

/** @both */
declare function CalcDistanceToLineSegment2D(arg1: Vector, arg2: Vector, arg3: Vector): number;

/**
 * Create all I/O events for a particular entity.
 *
 * @both
 */
declare function CancelEntityIOEvents(arg1: number): void;

/**
 * Centers each players' camera on a unit.
 */
declare function CenterCameraOnUnit(playerId: PlayerID, unit: CBaseEntity | undefined): void;

declare function ClearTeamCustomHealthbarColor(team: DOTATeam_t): void;

/**
 * Allocate a damageinfo object, used as an argument to TakeDamage(). Call DestroyDamageInfo( hInfo ) to free the object.
 */
declare function CreateDamageInfo(
    arg1: object,
    arg2: object,
    arg3: Vector,
    arg4: Vector,
    arg5: number,
    arg6: number,
): CTakeDamageInfo;

/**
 * Pass table - Inputs: entity, effect.
 *
 * @both
 */
declare function CreateEffect(arg1: object): boolean;

/**
 * Creates a DOTA hero by its dota_npc_units.txt name and sets it as the given player's controlled hero.
 */
declare function CreateHeroForPlayer(heroName: string, player: CDOTAPlayerController): CDOTA_BaseNPC_Hero;

/**
 * Create an HTTP request.
 *
 * @both
 */
declare function CreateHTTPRequest(method: string, url: string): CScriptHTTPRequest;

/**
 * Create an HTTP request.
 *
 * @both
 */
declare function CreateHTTPRequestScriptVM(method: string, url: string): CScriptHTTPRequest;

/**
 * Create illusions of the passed hero that belong to passed unit using passed modifier data.
 */
declare function CreateIllusions(
    owner: CBaseEntity,
    heroToCopy: CDOTA_BaseNPC_Hero,
    modifierKeys: CreateIllusionsModifierKeys,
    numIllusions: number,
    padding: number,
    scramblePosition: boolean,
    findClearSpace: boolean,
): CDOTA_BaseNPC_Hero[];

/**
 * Create a DOTA item.
 */
declare function CreateItem(
    itemName: string,
    owner: CDOTAPlayerController | undefined,
    purchaser: CDOTA_BaseNPC_Hero | undefined,
): CDOTA_Item | undefined;

/**
 * Create a physical item at a given location, can start in air (but doesn't clear a space).
 */
declare function CreateItemOnPositionForLaunch(location: Vector, item: CDOTA_Item | undefined): CDOTA_Item_Physical;

/**
 * Create a physical item at a given location.
 */
declare function CreateItemOnPositionSync(location: Vector, item: CDOTA_Item | undefined): CDOTA_Item_Physical;

/**
 * Create a modifier not associated with an NPC.
 */
declare function CreateModifierThinker<TModifier extends CDOTA_Modifier_Lua = CDOTA_Modifier_Lua>(
    caster: CDOTA_BaseNPC | undefined,
    ability: CDOTABaseAbility | undefined,
    modifierName: string,
    paramTable: ModifierTable<TModifier> | undefined,
    origin: Vector,
    teamNumber: DOTATeam_t,
    phantomBlocker: boolean,
): CDOTA_BaseNPC;

/**
 * Create a rune of the specified type.
 */
declare function CreateRune(location: Vector, runeType: DOTA_RUNES): CBaseAnimatingActivity;

/**
 * Create a scene entity to play the specified scene.
 */
declare function CreateSceneEntity(arg1: string): CBaseAnimatingActivity;

/**
 * Create a temporary tree, uses a default tree model.
 */
declare function CreateTempTree(location: Vector, duration: number): CBaseAnimatingActivity;

/**
 * Create a temporary tree, specifying the tree model name.
 */
declare function CreateTempTreeWithModel(location: Vector, duration: number, modelName: string): CBaseAnimatingActivity;

/**
 * Creates and returns an AABB trigger.
 */
declare function CreateTrigger(arg1: Vector, arg2: Vector, arg3: Vector): CBaseTrigger;

/**
 * Creates and returns an AABB trigger thats bigger than the radius provided.
 */
declare function CreateTriggerRadiusApproximate(vecOrigin: Vector, radius: number): CBaseTrigger;

/**
 * Creates a separate random number stream.
 *
 * @both
 */
declare function CreateUniformRandomStream(seed: number): CScriptUniformRandomStream;

/**
 * Creates a unit by its dota_npc_units.txt name.
 * The spawned unit will not be controllable by default. You can use unit.SetControllableByPlayer() to change this.
 * Warning: mass synchronous unit spawning may be slow. Prefer CreateUnitByNameAsync unless synchronous access is required.
 *
 * @param entityOwner This entity will be returned by GetOwner() and
 *                    GetOwnerEntity(). GetPlayerOwner() and GetPlayerOwnerID()
 *                    will be automatically inferred from this entity. Can be
 *                    changed after spawn using SetOwner(entity). When spawning
 *                    heroes, passing CDOTAPlayerController makes hero use owned
 *                    wearables.
 */
declare function CreateUnitByName(
    unitName: string,
    location: Vector,
    findClearSpace: boolean,
    npcOwner: CBaseEntity | undefined,
    entityOwner: CBaseEntity | undefined,
    team: DOTATeam_t,
): CDOTA_BaseNPC;

/**
 * Creates a unit by its dota_npc_units.txt name.
 * The spawned unit will not be controllable by default. You can use unit.SetControllableByPlayer() to change this.
 *
 * @param entityOwner This entity will be returned by GetOwner() and
 *                    GetOwnerEntity(). GetPlayerOwner() and GetPlayerOwnerID()
 *                    will be automatically inferred from this entity. Can be
 *                    changed after spawn using SetOwner(entity). When spawning
 *                    heroes, passing CDOTAPlayerController makes hero use owned
 *                    wearables.
 */
declare function CreateUnitByNameAsync(
    unitName: string,
    location: Vector,
    findClearSpace: boolean,
    npcOwner: CBaseEntity | undefined,
    entityOwner: CBaseEntity | undefined,
    team: DOTATeam_t,
    callback: (unit: CDOTA_BaseNPC) => void,
): SpawnGroupHandle;

/**
 * Creates a DOTA unit by its dota_npc_units.txt name from a table of entity key values and a position to spawn at.
 */
declare function CreateUnitFromTable(options: CreateUnitFromTableOptions, location: Vector): CDOTA_BaseNPC;

/**
 * Cross product between two vectors.
 *
 * @both
 */
declare function CrossVectors(arg1: Vector, arg2: Vector): Vector;

/**
 * Gets the value of the given cvar, as a float.
 *
 * @both
 */
declare function cvar_getf(arg1: string): number;

/**
 * Sets the value of the given cvar, as a float.
 *
 * @both
 */
declare function cvar_setf(arg1: string, arg2: number): boolean;

/**
 * Breaks in the debugger.
 *
 * @both
 */
declare function DebugBreak(): void;

/**
 * Changes the team of the hero.
 */
declare function DebugChangeTeam(arg1: object): void;

/**
 * Creates a unit with a specified hero variant, controllable by the specified player.
 */
declare function DebugCreateHeroWithVariant(
    arg1: object,
    arg2: string,
    arg3: number,
    arg4: number,
    arg5: boolean,
    arg6: object,
): number;

/**
 * Creates a test unit controllable by the specified player.
 */
declare function DebugCreateUnit(
    playerOwner: CDOTAPlayerController,
    unitName: string,
    team: DOTATeam_t,
    arg4: boolean,
    callback: (unit: CDOTA_BaseNPC) => void,
): number;

/**
 * Draw a debug overlay box.
 *
 * @both
 */
declare function DebugDrawBox(
    arg1: Vector,
    arg2: Vector,
    arg3: Vector,
    arg4: number,
    arg5: number,
    arg6: number,
    arg7: number,
    arg8: number,
): void;

/**
 * Draw a debug forward box.
 *
 * @both
 */
declare function DebugDrawBoxDirection(
    cent: Vector,
    min: Vector,
    max: Vector,
    forward: Vector,
    rgb: Vector,
    a: number,
    duration: number,
): void;

/**
 * Draw a debug circle.
 *
 * @both
 */
declare function DebugDrawCircle(
    center: Vector,
    rgb: Vector,
    a: number,
    rad: number,
    ztest: boolean,
    duration: number,
): void;

/**
 * Try to clear all the debug overlay info.
 *
 * @both
 */
declare function DebugDrawClear(): void;

/**
 * Draw a debug overlay line.
 *
 * @both
 */
declare function DebugDrawLine(
    origin: Vector,
    target: Vector,
    r: number,
    g: number,
    b: number,
    ztest: boolean,
    duration: number,
): void;

/**
 * Draw a debug line using color vec.
 *
 * @both
 */
declare function DebugDrawLine_vCol(arg1: Vector, arg2: Vector, arg3: Vector, arg4: boolean, arg5: number): void;

/**
 * Draw text with a line offset.
 *
 * @both
 */
declare function DebugDrawScreenTextLine(
    x: number,
    y: number,
    lineOffset: number,
    text: string,
    r: number,
    g: number,
    b: number,
    a: number,
    duration: number,
): void;

/**
 * Draw a debug sphere.
 *
 * @both
 */
declare function DebugDrawSphere(
    center: Vector,
    rgb: Vector,
    a: number,
    rad: number,
    ztest: boolean,
    duration: number,
): void;

/**
 * Draw text in 3d.
 *
 * @both
 */
declare function DebugDrawText(origin: Vector, text: string, viewCheck: boolean, duration: number): void;

/**
 * Draw pretty debug text.
 *
 * @both
 */
declare function DebugScreenTextPretty(
    x: number,
    y: number,
    lineOffset: number,
    text: string,
    r: number,
    g: number,
    b: number,
    a: number,
    duration: number,
    font: string,
    size: number,
    bold: boolean,
): void;

/**
 * Print out a table (and subtables) to the console.
 *
 * @both
 */
declare function DeepPrintTable(table?: Record<any, any>): void;

/**
 * Free a damageinfo object that was created with CreateDamageInfo().
 */
declare function DestroyDamageInfo(damageInfo: CTakeDamageInfo): void;

/**
 * Kick a specific player from the game.
 */
declare function DisconnectClient(arg1: number, arg2: boolean): void;

declare function DoCleaveAttack(
    attacker: CDOTA_BaseNPC,
    target: CDOTA_BaseNPC,
    ability: CDOTABaseAbility | undefined,
    damage: number,
    startRadius: number,
    endRadius: number,
    distance: number,
    effectName: string,
): number;

/**
 * Generate and entity i/o event.
 */
declare function DoEntFire(arg1: string, arg2: string, arg3: string, arg4: number, arg5: object, arg6: object): void;

/**
 * Generate and entity i/o event.
 */
declare function DoEntFireByInstanceHandle(
    arg1: object,
    arg2: string,
    arg3: string,
    arg4: number,
    arg5: object,
    arg6: object,
): void;

/**
 * Execute a script (internal).
 *
 * @both
 */
declare function DoIncludeScript(arg1: string, arg2: object): boolean;

/**
 * Asserts the passed in value. Prints out a message and brings up the assert dialog.
 *
 * @both
 */
declare function DoScriptAssert(arg1: boolean, arg2: string): void;

/**
 * Spawn a .vmap at the target location.
 *
 * @param mapName A map name without extension, relative to "maps" directory.
 * @param location The value of x and y must be multiple the grid size 64.
 *
 *                 To avoid GridNav conflicts, tiles on these coordinates on the
 *                 base map must be empty.
 * @param deferCompletion If true, to finish map loading you need to call
 *                        ManuallyTriggerSpawnGroupCompletion(spawnGroupHandle).
 * @param onReadyToSpawn Called only when deferCompletion is true.
 */
declare function DOTA_SpawnMapAtPosition(
    mapName: string,
    location: Vector,
    deferCompletion: boolean,
    onReadyToSpawn: (spawnGroupHandle: SpawnGroupHandle) => void,
    onSpawnComplete: (spawnGroupHandle: SpawnGroupHandle) => void,
    context: undefined,
): SpawnGroupHandle;

declare function DOTA_SpawnMapAtPosition<TContext extends {}>(
    mapName: string,
    location: Vector,
    deferCompletion: boolean,
    onReadyToSpawn: (this: TContext, spawnGroupHandle: SpawnGroupHandle) => void,
    onSpawnComplete: (this: TContext, spawnGroupHandle: SpawnGroupHandle) => void,
    context: TContext,
): SpawnGroupHandle;

declare function DotProduct(arg1: Vector, arg2: Vector): number;

/**
 * Generate a string guaranteed to be unique across the life of the script VM, with an optional root string. Useful for adding data to tables when not sure what keys are already in use in that table.
 *
 * @both
 */
declare function DoUniqueString(seed: string): string;

/**
 * Drop a neutral item for the team of the hero at the given tier.
 *
 * @param itemName Can be any item name, it does not have to be neutral.
 * @param tier Zero-based tier number.
 */
declare function DropNeutralItemAtPositionForHero(
    itemName: string,
    location: Vector,
    unit: CDOTA_BaseNPC,
    tier: number,
    arg5: boolean,
): CDOTA_Item_Physical;

/**
 * Drop a neutral item for the team of the hero at the given tier.
 */
declare function DropNeutralItemAtPositionForHeroWithOffset(
    arg1: string,
    arg2: Vector,
    arg3: object,
    arg4: number,
    arg5: boolean,
    arg6: Vector,
): object;

/**
 * A function to re-lookup a function by name every time.
 *
 * @both
 */
declare function Dynamic_Wrap<
    T extends object,
    K extends {
        [P in keyof T]: ((...args: any[]) => any) extends T[P] // At least one of union's values is a function
            ? [T[P]] extends [((this: infer TThis, ...args: any[]) => any) | null | undefined] // Box type to make it not distributive
                ? {} extends TThis // Has no specified this
                    ? P
                    : TThis extends T // Has this specified as T
                    ? P
                    : never
                : never
            : never;
    }[keyof T],
>(context: T, name: K): T[K];

/**
 * Emit an announcer sound for all players.
 */
declare function EmitAnnouncerSound(soundName: string): void;

/**
 * Emit an announcer sound for a player.
 */
declare function EmitAnnouncerSoundForPlayer(soundName: string, playerId: PlayerID): void;

/**
 * Emit an announcer sound for a team.
 */
declare function EmitAnnouncerSoundForTeam(soundName: string, team: DOTATeam_t): void;

/**
 * Emit an announcer sound for a team at a specific location.
 */
declare function EmitAnnouncerSoundForTeamOnLocation(soundName: string, team: DOTATeam_t, location: Vector): void;

/**
 * Play named sound for all players.
 */
declare function EmitGlobalSound(soundName: string): void;

/**
 * Play named sound on Entity.
 *
 * @both
 */
declare function EmitSoundOn(soundName: string, entity: CBaseEntity): void;

/**
 * Play named sound only on the client for the passed in player.
 *
 * @both
 */
declare function EmitSoundOnClient(soundName: string, arg2: object): void;

/**
 * Emit a sound on an entity for only a specific player.
 */
declare function EmitSoundOnEntityForPlayer(arg1: string, arg2: object, arg3: number): void;

/**
 * Emit a sound on a location from a unit, only for players allied with that unit.
 */
declare function EmitSoundOnLocationForAllies(location: Vector, soundName: string, caster: CBaseEntity): void;

/**
 * Emit a sound on a location for only a specific player.
 */
declare function EmitSoundOnLocationForPlayer(arg1: string, arg2: Vector, arg3: number): void;

/**
 * Emit a sound on a location from a unit.
 */
declare function EmitSoundOnLocationWithCaster(location: Vector, soundName: string, caster: CDOTA_BaseNPC): void;

/**
 * Turn an entity index integer to an HScript representing that entity's script instance.
 *
 * @both
 */
declare function EntIndexToHScript(entityIndex: EntityIndex): CBaseEntity | undefined;

/**
 * Issue an order from a script table.
 */
declare function ExecuteOrderFromTable(order: ExecuteOrderOptions): void;

/**
 * Smooth curve decreasing slower as it approaches zero.
 *
 * @both
 */
declare function ExponentialDecay(arg1: number, arg2: number, arg3: number): number;

/**
 * Finds a clear random position around a given target unit, using the target unit's padded collision radius.
 */
declare function FindClearRandomPositionAroundUnit(arg1: object, arg2: object, arg3: number): boolean;

/**
 * Place a unit somewhere not already occupied.
 */
declare function FindClearSpaceForUnit(unit: CDOTA_BaseNPC, location: Vector, arg3: boolean): boolean;

/**
 * Find a spawn point for the given team.
 */
declare function FindSpawnEntityForTeam(team: DOTATeam_t): CBaseEntity | undefined;

/**
 * Find units that intersect the given line with the given flags.
 */
declare function FindUnitsInLine(
    team: DOTATeam_t,
    startPos: Vector,
    endPos: Vector,
    cacheUnit: CBaseEntity | undefined,
    width: number,
    teamFilter: DOTA_UNIT_TARGET_TEAM,
    typeFilter: DOTA_UNIT_TARGET_TYPE,
    flagFilter: DOTA_UNIT_TARGET_FLAGS,
): CDOTA_BaseNPC[];

/**
 * Finds the units in a given radius with the given flags.
 */
declare function FindUnitsInRadius(
    team: DOTATeam_t,
    location: Vector,
    cacheUnit: CBaseEntity | undefined,
    radius: number,
    teamFilter: DOTA_UNIT_TARGET_TEAM,
    typeFilter: DOTA_UNIT_TARGET_TYPE,
    flagFilter: DOTA_UNIT_TARGET_FLAGS,
    order: FindOrder,
    canGrowCache: boolean,
): CDOTA_BaseNPC[];

/**
 * Fire Entity's Action Input w/no data.
 *
 * @both
 */
declare function FireEntityIOInputNameOnly(arg1: number, arg2: string): void;

/**
 * Fire Entity's Action Input with passed String - you own the memory.
 *
 * @both
 */
declare function FireEntityIOInputString(arg1: number, arg2: string, arg3: string): void;

/**
 * Fire Entity's Action Input with passed Vector - you own the memory.
 *
 * @both
 */
declare function FireEntityIOInputVec(arg1: number, arg2: string, arg3: Vector): void;

/**
 * Fire a game event.
 *
 * @both
 */
declare function FireGameEvent<TName extends keyof GameEventDeclarations>(
    eventName: TName,
    eventData: GameEventDeclarations[TName],
): void;

/**
 * Fire a game event without broadcasting to the client.
 *
 * @both
 */
declare function FireGameEventLocal<TName extends keyof GameEventDeclarations>(
    eventName: TName,
    eventData: GameEventDeclarations[TName],
): void;

/**
 * Get the time spent on the server in the last frame.
 *
 * @both
 */
declare function FrameTime(): number;

/**
 * Get ability data by ability name.
 *
 * @both
 */
declare function GetAbilityKeyValuesByName(arg1: string): object;

/**
 * Gets the ability texture name for an ability.
 *
 * @both
 */
declare function GetAbilityTextureNameForAbility(abilityName: string): string;

/**
 * Returns the currently active spawn group handle.
 *
 * @both
 */
declare function GetActiveSpawnGroupHandle(): SpawnGroupHandle;

/**
 * Returns a location for the unit that is not already occupied.
 */
declare function GetClearSpaceForUnit(arg1: object, arg2: Vector): Vector;

/**
 * @deprecated This function is unsafe. Prefer using `GetDedicatedServerKeyV2`
 *             instead.
 */
declare function GetDedicatedServerKey(version: string): string;

declare function GetDedicatedServerKeyV2(version: string): string;

declare function GetDedicatedServerKeyV3(version: string): string;

/**
 * Get the enity index for a tree id specified as the entindex_target of a DOTA_UNIT_ORDER_CAST_TARGET_TREE.
 */
declare function GetEntityIndexForTreeId(treeId: number): EntityIndex;

/**
 * Returns the engines current frame count.
 *
 * @both
 */
declare function GetFrameCount(): number;

declare function GetGroundHeight(location: Vector, unitHull: CDOTA_BaseNPC | undefined): number;

/**
 * Returns the supplied position moved to the ground. Second parameter is an NPC for measuring movement collision hull offset.
 */
declare function GetGroundPosition(location: Vector, unitHull: CDOTA_BaseNPC | undefined): Vector;

/**
 * Get the cost of an item by name.
 */
declare function GetItemCost(arg1: string): number;

declare function GetItemDefOwnedCount(arg1: number, arg2: number): number;

declare function GetItemDefQuantity(arg1: number, arg2: number): number;

/**
 * Get the local player on a listen server.
 *
 * @both
 */
declare function GetListenServerHost(): CDOTAPlayerController;

declare function GetLobbyEventGameDetails(): object;

/**
 * Get the local player ID.
 *
 * @client
 */
declare function GetLocalPlayerID(): PlayerID;

/**
 * Get the local player team.
 *
 * @client
 */
declare function GetLocalPlayerTeam(arg1: number): DOTATeam_t;

/**
 * Get the name of the map.
 *
 * @both
 */
declare function GetMapName(): string;

/**
 * Get the longest delay for all events attached to an output.
 *
 * @both
 */
declare function GetMaxOutputDelay(arg1: number, arg2: string): number;

/**
 * Get Angular Velocity for VPHYS or normal object. Returns a vector of the axis of rotation, multiplied by the degrees of rotation per second.
 *
 * @both
 */
declare function GetPhysAngularVelocity(arg1: object): Vector;

/**
 * Get Velocity for VPHYS or normal object.
 *
 * @both
 */
declare function GetPhysVelocity(arg1: object): Vector;

/**
 * Given the item tier and the team, roll for the name of a valid neutral item drop, considering previous drops and consumables.
 */
declare function GetPotentialNeutralItemDrop(tier: number, team: DOTATeam_t): string;

/**
 * Get the current real world date.
 */
declare function GetSystemDate(): string;

/**
 * Get the current real world time.
 */
declare function GetSystemTime(): string;

/**
 * Get system time in milliseconds.
 */
declare function GetSystemTimeMS(): number;

declare function GetTargetAOELocation(
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: Vector,
    arg5: number,
    arg6: number,
    arg7: number,
): Vector;

declare function GetTargetLinearLocation(
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: Vector,
    arg5: number,
    arg6: number,
    arg7: number,
): Vector;

declare function GetTeamHeroKills(team: DOTATeam_t): number;

declare function GetTeamName(team: DOTATeam_t): string;

/**
 * Given and entity index of a tree, get the tree id for use for use with with unit orders.
 */
declare function GetTreeIdForEntityIndex(entityIndex: EntityIndex): number;

/**
 * Get unit data by ability name.
 *
 * @both
 */
declare function GetUnitKeyValuesByName(arg1: string): object;

/**
 * Gets the world's maximum X position.
 */
declare function GetWorldMaxX(): number;

/**
 * Gets the world's maximum Y position.
 */
declare function GetWorldMaxY(): number;

/**
 * Gets the world's minimum X position.
 */
declare function GetWorldMinX(): number;

/**
 * Gets the world's minimum Y position.
 */
declare function GetWorldMinY(): number;

/**
 * Get amount of XP required to reach the next level.
 */
declare function GetXPNeededToReachNextLevel(level: number): number;

/**
 * Max out a hero's level and give them all appropriate abilities and talents.
 */
declare function HeroMaxLevel(arg1: object): void;

/**
 * @deprecated InitLogFile is deprecated. Print to the console for logging instead.
 * @both
 */
declare function InitLogFile(arg1: string, arg2: string): void;

/**
 * Returns true if this is lua running from the client.dll.
 *
 * @both
 */
declare function IsClient(): boolean;

/**
 * Returns true if this server is a dedicated server.
 *
 * @both
 */
declare function IsDedicatedServer(): boolean;

/**
 * Returns true if whatever alt is remapped to is pressed.
 *
 * @client
 */
declare function IsDotaAltPressed(): boolean;

/**
 * Returns true if whatever ctrl is remapped to is pressed.
 *
 * @client
 */
declare function IsDotaCtrlPressed(): boolean;

/**
 * Returns true if this is lua running within tools mode.
 *
 * @both
 */
declare function IsInToolsMode(): boolean;

/**
 * Ask fog of war if a location is visible to a certain team.
 */
declare function IsLocationVisible(team: DOTATeam_t, location: Vector): boolean;

/**
 * Is this entity a mango tree? (hEntity).
 */
declare function IsMangoTree(entity: CBaseEntity): entity is CBaseAnimatingActivity;

/**
 * Returns true if the entity is valid and marked for deletion.
 *
 * @both
 */
declare function IsMarkedForDeletion(entity: CBaseEntity): boolean;

/**
 * Returns true if this is lua running from the server.dll.
 *
 * @both
 */
declare function IsServer(): boolean;

/**
 * Returns true if the unit is in a valid position in the gridnav.
 */
declare function IsUnitInValidPosition(unit: CBaseEntity): boolean;

/**
 * Checks to see if the given hScript is a valid entity.
 *
 * @both
 */
declare function IsValidEntity(entity: object | undefined): entity is CBaseEntity;

/**
 * Lerp between two vectors by a float factor returning new vector.
 *
 * @both
 */
declare function LerpVectors(arg1: Vector, arg2: Vector, arg3: number): Vector;

/**
 * Set the limit on the pathfinding search space.
 */
declare function LimitPathingSearchDepth(arg1: number): void;

/**
 * Link a lua-defined modifier with the associated class.
 *
 * @both
 */
declare function LinkLuaModifier(className: string, filePath: string, luaModifierType: LuaModifierType): void;

declare interface GameEventProvidedProperties {
    game_event_listener: EventListenerID;
    game_event_name: string;
    splitscreenplayer: number;
}

/**
 * Register as a listener for a game event from script.
 *
 * @both
 */
declare function ListenToGameEvent<TName extends keyof GameEventDeclarations>(
    eventName: TName,
    listener: (event: GameEventProvidedProperties & GameEventDeclarations[TName]) => void,
    context: undefined,
): EventListenerID;

declare function ListenToGameEvent<TName extends keyof GameEventDeclarations, TContext extends {}>(
    eventName: TName,
    listener: (this: TContext, event: GameEventProvidedProperties & GameEventDeclarations[TName]) => void,
    context: TContext,
): EventListenerID;

/**
 * Creates a table from the specified keyvalues text file.
 *
 * @both
 */
declare function LoadKeyValues(filePath: string): object;

/**
 * Creates a table from the specified keyvalues string.
 *
 * @both
 */
declare function LoadKeyValuesFromString(kvString: string): object;

/**
 * Get the current local time.
 *
 * @both
 */
declare function LocalTime(): LocalTime;

/**
 * Checks to see if the given hScript is a valid entity.
 *
 * @both
 */
declare function MakeStringToken(arg1: string): number;

/**
 * Triggers the creation of entities in a manually-completed spawn group.
 *
 * @both
 */
declare function ManuallyTriggerSpawnGroupCompletion(handle: SpawnGroupHandle): void;

/**
 * Start a minimap event.
 */
declare function MinimapEvent(
    team: DOTATeam_t,
    entity: CBaseEntity,
    xCoord: number,
    yCoord: number,
    eventType: DOTAMinimapEvent_t,
    eventDuration: number,
): void;

/**
 * Print a message.
 *
 * @both
 */
declare function Msg(message: string): void;

/**
 * Pause or unpause the game.
 */
declare function PauseGame(paused: boolean): void;

/**
 * Get the current float time from the engine.
 *
 * @both
 */
declare function Plat_FloatTime(): number;

/**
 * Get a script instance of a player by index.
 *
 * @both
 */
declare function PlayerInstanceFromIndex(entityIndex: EntityIndex): CDOTAPlayerController | undefined;

/**
 * Precache an entity from KeyValues in table.
 *
 * @both
 */
declare function PrecacheEntityFromTable(arg1: string, arg2: object, context: CScriptPrecacheContext): void;

/**
 * Precache a list of entity KeyValues tables.
 *
 * @both
 */
declare function PrecacheEntityListFromTable(arg1: object, context: CScriptPrecacheContext): void;

/**
 * Asynchronously precaches a DOTA item by its dota_npc_items.txt name, provides a callback when it's finished.
 */
declare function PrecacheItemByNameAsync(itemName: string, callback: (precacheId: number) => void): void;

/**
 * Precaches a DOTA item by its dota_npc_items.txt name.
 */
declare function PrecacheItemByNameSync(itemName: string, context: CScriptPrecacheContext): void;

/**
 * Manually precache a single model.
 */
declare function PrecacheModel(modelName: string, context: CScriptPrecacheContext): void;

/**
 * Manually precache a single resource.
 */
declare function PrecacheResource(arg1: string, arg2: string, context: CScriptPrecacheContext): void;

/**
 * Asynchronously precaches a DOTA unit by its dota_npc_units.txt name, provides a callback when it's finished.
 */
declare function PrecacheUnitByNameAsync(
    unitName: string,
    callback: (precacheId: number) => void,
    playerId?: PlayerID,
): void;

/**
 * Precaches a DOTA unit by its dota_npc_units.txt name.
 */
declare function PrecacheUnitByNameSync(unitName: string, context: CScriptPrecacheContext, playerId?: PlayerID): void;

/**
 * Precaches a DOTA unit from a table of entity key values.
 */
declare function PrecacheUnitFromTableAsync(arg1: object, callback: (precacheId: number) => void): void;

/**
 * Precaches a DOTA unit from a table of entity key values.
 */
declare function PrecacheUnitFromTableSync(arg1: object, context: CScriptPrecacheContext): void;

/**
 * Print a console message with a linked console command.
 *
 * @both
 */
declare function PrintLinkedConsoleMessage(message: string, tooltip: string): void;

/**
 * Spherical lerp of angle from->to based on time.
 *
 * @both
 */
declare function QSlerp(from_angle: QAngle, to_angle: QAngle, time: number): QAngle;

/**
 * Get a random float within a range.
 */
declare function RandomFloat(min: number, max: number): number;

/**
 * Generate a random floating point number within a range, inclusive.
 *
 * @both
 */
declare function RandomFloatWrapper(arg1: number, arg2: number): number;

/**
 * Get a random int within a range.
 *
 * @both
 */
declare function RandomInt(min: number, max: number): number;

/**
 * Get a random 2D vector of the given length.
 */
declare function RandomVector(length: number): Vector;

/**
 * Record in player resources that a new neutral item has been created, if it hasn't already been, and show a toast.
 */
declare function RecordNeutralItemEarned(arg1: object, arg2: object, arg3: number): void;

/**
 * Register a custom animation script to run when a model loads.
 */
declare function RegisterCustomAnimationScriptForModel(arg1: string, arg2: string): void;

/**
 * Create a C proxy for a script-based spawn group filter.
 *
 * @both
 */
declare function RegisterSpawnGroupFilterProxy(arg1: string): void;

/**
 * Reloads the MotD file.
 *
 * @both
 */
declare function ReloadMOTD(): void;

/**
 * Remove temporary vision for a given team.
 */
declare function RemoveFOWViewer(teamId: DOTATeam_t, viewerId: ViewerID): void;

/**
 * Remove the C proxy for a script-based spawn group filter.
 *
 * @both
 */
declare function RemoveSpawnGroupFilterProxy(arg1: string): void;

/**
 * Check and fix units that have been assigned a position inside collision radius of other NPCs.
 */
declare function ResolveNPCPositions(location: Vector, radius: number): void;

/**
 * Rolls a number from 1 to 100 and returns true if the roll is less than or equal to the number specified.
 */
declare function RollPercentage(successPercentage: number): boolean;

/**
 * @param pseudoRandomId Any number can be specified. Using
 *                       DOTA_PSEUDO_RANDOM_NONE makes it act as a pure RNG.
 */
declare function RollPseudoRandomPercentage(chance: number, pseudoRandomId: PseudoRandom, unit: CDOTA_BaseNPC): boolean;

/**
 * Rotate a QAngle by another QAngle.
 *
 * @both
 */
declare function RotateOrientation(arg1: QAngle, arg2: QAngle): QAngle;

/**
 * Rotate a Vector around a point.
 *
 * @both
 */
declare function RotatePosition(arg1: Vector, arg2: QAngle, arg3: Vector): Vector;

/**
 * Rotates a quaternion by the specified angle around the specified vector axis.
 *
 * @both
 */
declare function RotateQuaternionByAxisAngle(arg1: never, arg2: Vector, arg3: number): never;

/**
 * Find the delta between two QAngles.
 *
 * @both
 */
declare function RotationDelta(arg1: QAngle, arg2: QAngle): QAngle;

/**
 * Converts delta QAngle to an angular velocity Vector.
 *
 * @both
 */
declare function RotationDeltaAsAngularVelocity(arg1: QAngle, arg2: QAngle): Vector;

/**
 * Have Entity say string, and teamOnly or not.
 */
declare function Say(entity: CBaseEntity | undefined, message: string, teamOnly: boolean): void;

/**
 * Start a screenshake.
 *
 * @param command SHAKE_START = 0, SHAKE_STOP = 1
 * @both
 */
declare function ScreenShake(
    center: Vector,
    amplitude: number,
    frequency: number,
    duration: number,
    radius: number,
    command: 0 | 1,
    airShake: boolean,
): void;

/**
 * Get a random float within a range.
 *
 * @both
 */
declare function Script_RandomFloat(arg1: number, arg2: number): number;

/**
 * RemapValClamped.
 */
declare function Script_RemapValClamped(arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;

declare function SendOverheadEventMessage(
    sendToPlayer: CDOTAPlayerController | undefined,
    messageType: DOTA_OVERHEAD_ALERT,
    targetEntity: CDOTA_BaseNPC,
    value: number,
    sourcePlayer: CDOTAPlayerController | undefined,
): void;

/**
 * Send a string to the console as a client command.
 *
 * @both
 */
declare function SendToConsole(arg1: string): void;

/**
 * Send a string to the console as a server command.
 */
declare function SendToServerConsole(arg1: string): void;

/**
 * Sets an opvar value for all players.
 *
 * @both
 */
declare function SetOpvarFloatAll(arg1: string, arg2: string, arg3: string, arg4: number): void;

/**
 * Sets an opvar value for a single player.
 *
 * @both
 */
declare function SetOpvarFloatPlayer(arg1: string, arg2: string, arg3: string, arg4: number, arg5: object): void;

/**
 * Set Angular Velocity for VPHYS or normal object, from a vector of the axis of rotation, multiplied by the degrees of rotation per second.
 *
 * @both
 */
declare function SetPhysAngularVelocity(arg1: object, arg2: Vector): void;

/**
 * Set the current quest name.
 *
 * @both
 */
declare function SetQuestName(arg1: string): void;

/**
 * Set the current quest phase.
 *
 * @both
 */
declare function SetQuestPhase(arg1: number): void;

/**
 * Set rendering on/off for an ehandle.
 *
 * @deprecated Instantly crashes the game.
 * @both
 */
declare function SetRenderingEnabled(arg1: number, arg2: boolean): void;

declare function SetTeamCustomHealthbarColor(team: DOTATeam_t, r: number, g: number, b: number): void;

/**
 * Supports localized strings - %s1 = PlayerName, %s2 = Value, %s3 = TeamName.
 */
declare function ShowCustomHeaderMessage(message: string, playerId: PlayerID, value: number, time: number): void;

/**
 * Show a generic popup dialog for all players.
 */
declare function ShowGenericPopup(arg1: string, arg2: string, arg3: string, arg4: string, arg5: number): void;

/**
 * Show a generic popup dialog to a specific player.
 */
declare function ShowGenericPopupToPlayer(
    arg1: object,
    arg2: string,
    arg3: string,
    arg4: string,
    arg5: string,
    arg6: number,
): void;

/**
 * Print a hud message on all clients.
 */
declare function ShowMessage(arg1: string): void;

declare function SpawnDOTAShopTriggerRadiusApproximate(origin: Vector, radius: number): CDOTA_ShopTrigger;

/**
 * Spawn an effigy of the target unit.
 */
declare function SpawnEffigyOfUnitOrModel(
    arg1: string,
    arg2: number,
    arg3: Vector,
    arg4: Vector,
    arg5: number,
    arg6: number,
    arg7: number,
): object;

/**
 * Asynchronously spawns a single entity from a table.
 *
 * @both
 */
declare function SpawnEntityFromTableAsynchronous(arg1: string, arg2: object, arg3: object, arg4: object): void;

/**
 * Synchronously spawns a single entity from a table.
 *
 * @both
 */
declare function SpawnEntityFromTableSynchronous(baseclass: string, data: object): CBaseEntity;

/**
 * Hierarchically spawn an entity group from a set of spawn tables.
 *
 * @both
 */
declare function SpawnEntityGroupFromTable(arg1: object, arg2: boolean, arg3: object): boolean;

/**
 * Asynchronously spawn an entity group from a list of spawn tables. A callback will be triggered when the spawning is complete.
 *
 * @both
 */
declare function SpawnEntityListFromTableAsynchronous(arg1: object, arg2: object): number;

/**
 * Synchronously spawn an entity group from a list of spawn tables.
 *
 * @both
 */
declare function SpawnEntityListFromTableSynchronous(arg1: object): object;

/**
 * Spawn a mango tree.
 */
declare function SpawnMangoTree(
    pos: Vector,
    team: number,
    duration: number,
    mangoInterval: number,
    initialMangoes: number,
): object;

/**
 * Very basic interpolation of v0 to v1 over t on [0,1].
 *
 * @both
 */
declare function SplineQuaternions(arg1: never, arg2: never, arg3: number): never;

/**
 * Very basic interpolation of v0 to v1 over t on [0,1].
 *
 * @both
 */
declare function SplineVectors(arg1: Vector, arg2: Vector, arg3: number): Vector;

/**
 * Start a sound event.
 *
 * @both
 */
declare function StartSoundEvent(arg1: string, arg2: object): void;

/**
 * Start a sound event from position.
 *
 * @both
 */
declare function StartSoundEventFromPosition(soundName: string, position: Vector): void;

/**
 * Start a sound event from position with reliable delivery.
 *
 * @both
 */
declare function StartSoundEventFromPositionReliable(soundName: string, position: Vector): void;

/**
 * Start a sound event from position with optional delivery.
 *
 * @both
 */
declare function StartSoundEventFromPositionUnreliable(soundName: string, position: Vector): void;

/**
 * Start a sound event with reliable delivery.
 *
 * @both
 */
declare function StartSoundEventReliable(arg1: string, arg2: object): void;

/**
 * Start a sound event with optional delivery.
 *
 * @both
 */
declare function StartSoundEventUnreliable(arg1: string, arg2: object): void;

/**
 * Pass entity and effect name.
 *
 * @both
 */
declare function StopEffect(arg1: object, arg2: string): void;

/**
 * Stop named sound for all players.
 */
declare function StopGlobalSound(arg1: string): void;

/**
 * Stop listening to all game events within a specific context.
 *
 * @both
 */
declare function StopListeningToAllGameEvents(arg1: object): void;

/**
 * Stop listening to a particular game event.
 *
 * @both
 */
declare function StopListeningToGameEvent(listenerId: EventListenerID): boolean;

/**
 * Stops a sound event with optional delivery.
 *
 * @both
 */
declare function StopSoundEvent(arg1: string, arg2: object): void;

/**
 * Stop named sound on Entity.
 *
 * @both
 */
declare function StopSoundOn(arg1: string, arg2: object): void;

/**
 * Get the current server time.
 *
 * @both
 */
declare function Time(): number;

/** @both */
declare function TraceCollideable(query: TraceCollideableInputs): query is TraceCollideableOutputs;

/** @both */
declare function TraceHull(query: TraceHullInputs): query is TraceHullOutputs;

/** @both */
declare function TraceLine(query: TraceLineInputs): query is TraceLineOutputs;

/**
 * Check if a unit passes a set of filters.
 *
 * @both
 */
declare function UnitFilter(
    npc: CDOTA_BaseNPC,
    teamFilter: DOTA_UNIT_TARGET_TEAM,
    typeFilter: DOTA_UNIT_TARGET_TYPE,
    flagFilter: DOTA_UNIT_TARGET_FLAGS,
    team: DOTATeam_t,
): UnitFilterResult;

/**
 * Unload a spawn group by name.
 *
 * @both
 */
declare function UnloadSpawnGroup(arg1: string): void;

/**
 * Unload a spawn group by handle.
 *
 * @both
 */
declare function UnloadSpawnGroupByHandle(handle: SpawnGroupHandle): void;

declare function UpdateEventPoints(eventPointData: object): void;

/**
 * Turn a userid integer (typically, fields named 'userid' in game events) to an HScript representing the associated player controller's script instance.
 *
 * @both
 */
declare function UserIDToControllerHScript(arg1: number): object;

/**
 * Sends colored text to one client.
 */
declare function UTIL_MessageText(
    arg1: number,
    arg2: string,
    arg3: number,
    arg4: number,
    arg5: number,
    arg6: number,
): void;

/**
 * Sends colored text to one client. (Valid context keys: player_id, value, team_id).
 */
declare function UTIL_MessageText_WithContext(
    arg1: number,
    arg2: string,
    arg3: number,
    arg4: number,
    arg5: number,
    arg6: number,
    arg7: object,
): void;

/**
 * Sends colored text to all clients.
 */
declare function UTIL_MessageTextAll(arg1: string, arg2: number, arg3: number, arg4: number, arg5: number): void;

/**
 * Sends colored text to all clients. (Valid context keys: player_id, value, team_id).
 */
declare function UTIL_MessageTextAll_WithContext(
    arg1: string,
    arg2: number,
    arg3: number,
    arg4: number,
    arg5: number,
    arg6: object,
): void;

/**
 * Removes the specified entity.
 *
 * @both
 */
declare function UTIL_Remove(entity: CBaseEntity | undefined): void;

/**
 * Immediately removes the specified entity.
 *
 * @both
 */
declare function UTIL_RemoveImmediate(entity: CBaseEntity | undefined): void;

/**
 * Clear all message text on one client.
 */
declare function UTIL_ResetMessageText(arg1: number): void;

/**
 * Clear all message text from all clients.
 */
declare function UTIL_ResetMessageTextAll(): void;

declare function VectorAngles(arg1: Vector): QAngle;

/**
 * Get Qangles (with no roll) for a Vector.
 *
 * @both
 */
declare function VectorToAngles(arg1: Vector): QAngle;

/**
 * Print a warning.
 *
 * @both
 */
declare function Warning(message: string): void;
