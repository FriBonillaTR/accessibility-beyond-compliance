/**
 * Button type values.
 *
 * @public
 */
export declare const ButtonTypeEnum: {
    readonly submit: "submit";
    readonly reset: "reset";
    readonly button: "button";
};
/**
 * Type for button type values.
 *
 * @public
 */
export type ButtonType = (typeof ButtonTypeEnum)[keyof typeof ButtonTypeEnum];
/**
 * Button appearance values.
 *
 * @public
 */
export declare const ButtonAppearanceEnum: {
    readonly primary: "primary";
    readonly secondary: "secondary";
    readonly tertiary: "tertiary";
    readonly inline: "inline";
};
/**
 * Types for button appearance values.
 *
 * @public
 */
export type ButtonAppearance = (typeof ButtonAppearanceEnum)[keyof typeof ButtonAppearanceEnum];
/**
 * Button shape values.
 * rectangle is set to undefined so if shape isn't set, it defaults to rectangle, without adding the attribute to the button element
 *
 * @public
 */
export declare const ButtonShapeEnum: {
    readonly rectangle: undefined;
    readonly circle: "circle";
};
/**
 * Types for button shape values.
 *
 * @public
 */
export type ButtonShape = (typeof ButtonShapeEnum)[keyof typeof ButtonShapeEnum];
