export declare const LogoAppearanceEnum: {
    readonly FULL_COLOR: "full-color";
    readonly COLOR_REVERSED_2: "2-color-reversed";
    readonly COLOR_REVERSED_1: "1-color-reversed";
    readonly COLOR_BLACK_1: "1-color-black";
    readonly COLOR_ORANGE_1: "1-color-orange";
};
export type LogoAppearance = (typeof LogoAppearanceEnum)[keyof typeof LogoAppearanceEnum];
