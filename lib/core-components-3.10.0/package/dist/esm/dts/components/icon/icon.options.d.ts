export declare const IconRoleEnum: {
    readonly img: "img";
    readonly presentation: "presentation";
};
export type IconRole = (typeof IconRoleEnum)[keyof typeof IconRoleEnum];
export declare const IconColorEnum: {
    readonly fill: "fill";
    readonly outline: "outline";
};
export type IconColor = (typeof IconColorEnum)[keyof typeof IconColorEnum];
export declare const IconAppearanceEnum: {
    readonly light: "light";
    readonly solid: "solid";
    readonly brands: "brands";
};
export type IconAppearance = (typeof IconAppearanceEnum)[keyof typeof IconAppearanceEnum];
export declare const appearanceClassMap: Record<IconAppearance, string>;
