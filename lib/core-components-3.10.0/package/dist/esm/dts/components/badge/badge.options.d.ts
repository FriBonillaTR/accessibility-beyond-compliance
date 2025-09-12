/**
 * Badge appearance values
 *
 * @public
 */
export declare const BadgeAppearanceEnum: {
    readonly error: "error";
    readonly errorLight: "error-light";
    readonly info: "info";
    readonly infoLight: "info-light";
    readonly success: "success";
    readonly successLight: "success-light";
    readonly warning: "warning";
    readonly warningLight: "warning-light";
    readonly neutral: "neutral";
    readonly neutralLight: "neutral-light";
};
/**
 * Types for badge appearance values
 *
 * @public
 */
export type BadgeAppearance = (typeof BadgeAppearanceEnum)[keyof typeof BadgeAppearanceEnum];
