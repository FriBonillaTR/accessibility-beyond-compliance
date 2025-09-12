/**
 * An object representing the available sizes for the Avatar component.
 *
 * @remarks
 * This object is a constant that contains the available size options for the Avatar component.
 *
 * @public
 */
export declare const AvatarSizeEnum: {
    readonly xlarge: "xlarge";
    readonly large: "large";
    readonly medium: "medium";
    readonly small: "small";
};
/**
 * A union type representing the available size values for the Avatar component.
 *
 * @public
 */
export type AvatarSize = (typeof AvatarSizeEnum)[keyof typeof AvatarSizeEnum];
/**
 * An object representing the available appearances for the Avatar component.
 *
 * @remarks
 * This object is a constant that contains the available appearance options for the Avatar component.
 *
 * @public
 */
export declare const AvatarAppearanceEnum: {
    readonly icon: "icon";
    readonly iconLight: "icon-light";
    readonly image: "image";
    readonly imageLight: "image-light";
    readonly blue: "blue";
    readonly blueLight: "blue-light";
    readonly gray: "gray";
    readonly grayLight: "gray-light";
    readonly green: "green";
    readonly greenLight: "green-light";
    readonly neutral: "neutral";
    readonly neutralLight: "neutral-light";
    /** @deprecated */
    readonly purple: "purple";
    /** @deprecated */
    readonly purpleLight: "purple-light";
    readonly red: "red";
    readonly redLight: "red-light";
    readonly hue2: "hue-2";
    readonly hue2Light: "hue-2-light";
};
/**
 * A union type representing the available appearance values for the Avatar component.
 *
 * @public
 */
export type AvatarAppearance = (typeof AvatarAppearanceEnum)[keyof typeof AvatarAppearanceEnum];
