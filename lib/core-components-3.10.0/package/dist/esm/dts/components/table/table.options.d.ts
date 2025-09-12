export declare const HeaderBackgroundEnum: {
    readonly subtle: "subtle";
    readonly default: "default";
    readonly strong: "strong";
};
export type HeaderBackground = (typeof HeaderBackgroundEnum)[keyof typeof HeaderBackgroundEnum];
