export declare const MessageBoxAppearanceEnum: {
    readonly AGENT: "agent";
    readonly USER: "user";
};
export type MessageBoxAppearance = (typeof MessageBoxAppearanceEnum)[keyof typeof MessageBoxAppearanceEnum];
