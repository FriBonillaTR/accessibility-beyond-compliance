/**
 * Card appearance values.
 *
 * @public
 */
export declare const CardAppearanceEnum: {
    readonly horizontal: "horizontal";
    readonly vertical: "vertical";
};
/**
 * Types for card appearance values
 *
 * @public
 */
export type CardAppearance = (typeof CardAppearanceEnum)[keyof typeof CardAppearanceEnum];
