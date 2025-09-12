/**
 * Anchor target values.
 *
 * @public
 */
export declare const AnchorTargetEnum: {
    readonly _self: "_self";
    readonly _blank: "_blank";
    readonly _parent: "_parent";
    readonly _top: "_top";
};
/**
 * Anchor target type.
 *
 * @public
 */
export type AnchorTarget = (typeof AnchorTargetEnum)[keyof typeof AnchorTargetEnum];
/**
 * Anchor appearance values.
 *
 * @public
 */
export declare const AnchorAppearanceEnum: {
    readonly anchor: "anchor";
    readonly ctaPrimary: "cta-primary";
    readonly ctaSecondary: "cta-secondary";
    readonly ctaTertiary: "cta-tertiary";
};
/**
 * Anchor appearance type.
 *
 * @public
 */
export type AnchorAppearance = (typeof AnchorAppearanceEnum)[keyof typeof AnchorAppearanceEnum];
