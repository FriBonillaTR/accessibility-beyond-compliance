export declare const ComponentDensityEnum: {
    readonly compact: "compact";
    readonly standard: "standard";
    readonly inherit: "inherit";
};
export type ComponentDensity = (typeof ComponentDensityEnum)[keyof typeof ComponentDensityEnum];
export declare const ComponentDensityWithExtraCompactEnum: {
    readonly 'extra-compact': "extra-compact";
    readonly compact: "compact";
    readonly standard: "standard";
    readonly inherit: "inherit";
};
export type ComponentDensityWithExtraCompact = (typeof ComponentDensityWithExtraCompactEnum)[keyof typeof ComponentDensityWithExtraCompactEnum];
export declare const BreakpointEnum: {
    readonly xs: "xs";
    readonly sm: "sm";
    readonly md: "md";
    readonly lg: "lg";
    readonly xl: "xl";
    readonly xxl: "xxl";
    readonly xxxl: "xxxl";
    readonly xxxxl: "xxxxl";
};
export type Breakpoint = (typeof BreakpointEnum)[keyof typeof BreakpointEnum];
