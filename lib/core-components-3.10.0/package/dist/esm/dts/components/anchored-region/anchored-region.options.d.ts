/**
 * Values to define the base behavior of an anchored region on a particular axis
 * @public
 */
export declare const AnchoredRegionAxisPositioningModeEnum: {
    readonly uncontrolled: "uncontrolled";
    readonly locktodefault: "locktodefault";
    readonly dynamic: "dynamic";
};
/**
 * Type to define the base behavior of an anchored region on a particular axis
 * @public
 */
export type AnchoredRegionAxisPositioningMode = (typeof AnchoredRegionAxisPositioningModeEnum)[keyof typeof AnchoredRegionAxisPositioningModeEnum];
/**
 * Values to define the scaling behavior of an anchored region on a particular axis
 * @public
 */
export declare const AnchoredRegionAxisScalingModeEnum: {
    readonly anchor: "anchor";
    readonly content: "content";
    readonly fill: "fill";
};
/**
 * Type to define the scaling behavior of an anchored region on a particular axis
 *
 * @public
 */
export type AnchoredRegionAxisScalingMode = (typeof AnchoredRegionAxisScalingModeEnum)[keyof typeof AnchoredRegionAxisScalingModeEnum];
/**
 * Values for the horizontal positioning options for an anchored region
 * @public
 */
export declare const AnchoredRegionHorizontalPositionEnum: {
    readonly start: "start";
    readonly end: "end";
    readonly left: "left";
    readonly right: "right";
    readonly center: "center";
    readonly unset: "unset";
};
/**
 * Type for the horizontal positioning options for an anchored region
 *
 * @public
 */
export type AnchoredRegionHorizontalPosition = (typeof AnchoredRegionHorizontalPositionEnum)[keyof typeof AnchoredRegionHorizontalPositionEnum];
/**
 * Values for the vertical positioning options for an anchored region
 * @public
 */
export declare const AnchoredRegionVerticalPositionEnum: {
    readonly top: "top";
    readonly bottom: "bottom";
    readonly center: "center";
    readonly unset: "unset";
};
/**
 * Type for the vertical positioning options for an anchored region
 *
 * @public
 */
export type AnchoredRegionVerticalPosition = (typeof AnchoredRegionVerticalPositionEnum)[keyof typeof AnchoredRegionVerticalPositionEnum];
/**
 * Defines if the component updates its position automatically. Calling update() always provokes an update.
 * anchor - the component only updates its position when the anchor resizes (default)
 * auto - the component updates its position when:
 * - update() is called
 * - the anchor resizes
 * - the window resizes
 * - the viewport resizes
 * - any scroll event in the document
 *
 * @public
 */
export declare const AnchoredRegionAutoUpdateModeEnum: {
    readonly anchor: "anchor";
    readonly auto: "auto";
};
/**
 * Type for the auto update mode values
 * @public
 */
export type AnchoredRegionAutoUpdateMode = (typeof AnchoredRegionAutoUpdateModeEnum)[keyof typeof AnchoredRegionAutoUpdateModeEnum];
/**
 * Values to describe the possible positions of the region relative to its anchor.
 * Depending on the axis start = left/top, end = right/bottom
 * @public
 */
export declare const AnchoredRegionPositionLabelEnum: {
    readonly start: "start";
    readonly insetStart: "insetStart";
    readonly insetEnd: "insetEnd";
    readonly end: "end";
    readonly center: "center";
};
/**
 * Describes the possible positions of the region relative
 * to its anchor. Depending on the axis start = left/top, end = right/bottom
 *
 * @public
 */
export type AnchoredRegionPositionLabel = (typeof AnchoredRegionPositionLabelEnum)[keyof typeof AnchoredRegionPositionLabelEnum];
/**
 * Values to define the base behavior of an anchored region on a particular axis
 * @public
 */
export declare const AxisPositioningModeEnum: {
    readonly uncontrolled: "uncontrolled";
    readonly locktodefault: "locktodefault";
    readonly dynamic: "dynamic";
};
/**
 * Type to define the base behavior of an anchored region on a particular axis
 * @public
 */
export type AxisPositioningMode = (typeof AxisPositioningModeEnum)[keyof typeof AxisPositioningModeEnum];
/**
 * Values to define the scaling behavior of an anchored region on a particular axis
 * @public
 */
export declare const AxisScalingModeEnum: {
    readonly anchor: "anchor";
    readonly content: "content";
    readonly fill: "fill";
};
/**
 * Type to define the scaling behavior of an anchored region on a particular axis
 *
 * @public
 */
export type AxisScalingMode = (typeof AxisScalingModeEnum)[keyof typeof AxisScalingModeEnum];
/**
 * Values for the horizontal positioning options for an anchored region
 * @public
 */
export declare const HorizontalPositionEnum: {
    readonly start: "start";
    readonly end: "end";
    readonly left: "left";
    readonly right: "right";
    readonly center: "center";
    readonly unset: "unset";
};
/**
 * Type for the horizontal positioning options for an anchored region
 *
 * @public
 */
export type HorizontalPosition = (typeof HorizontalPositionEnum)[keyof typeof HorizontalPositionEnum];
/**
 * Values for the vertical positioning options for an anchored region
 * @public
 */
export declare const VerticalPositionEnum: {
    readonly top: "top";
    readonly bottom: "bottom";
    readonly center: "center";
    readonly unset: "unset";
};
/**
 * Type for the vertical positioning options for an anchored region
 *
 * @public
 */
export type VerticalPosition = (typeof VerticalPositionEnum)[keyof typeof VerticalPositionEnum];
/**
 * Defines if the component updates its position automatically. Calling update() always provokes an update.
 * anchor - the component only updates its position when the anchor resizes (default)
 * auto - the component updates its position when:
 * - update() is called
 * - the anchor resizes
 * - the window resizes
 * - the viewport resizes
 * - any scroll event in the document
 *
 * @public
 */
export declare const AutoUpdateModeEnum: {
    readonly anchor: "anchor";
    readonly auto: "auto";
};
/**
 * Type for the auto update mode values
 * @public
 */
export type AutoUpdateMode = (typeof AutoUpdateModeEnum)[keyof typeof AutoUpdateModeEnum];
