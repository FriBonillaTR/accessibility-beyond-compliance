/**
 * Alert Type.
 *
 * @public
 */
export declare const AlertTypeEnum: {
    readonly toast: "toast";
    readonly inline: "inline";
};
/**
 * Type for alert type values.
 *
 * @public
 */
export type AlertType = (typeof AlertTypeEnum)[keyof typeof AlertTypeEnum];
/**
 * Alert appearance values.
 *
 * @public
 */
export declare const AlertAppearanceEnum: {
    readonly informational: "informational";
    readonly success: "success";
    readonly warning: "warning";
    readonly error: "error";
    readonly neutral: "neutral";
};
/**
 * Types for alert appearance values.
 *
 * @public
 */
export type AlertAppearance = (typeof AlertAppearanceEnum)[keyof typeof AlertAppearanceEnum];
