export declare const ActionCardActionModeEnum: {
    /**
     * Render as a button
     */
    readonly button: "button";
    /**
     * Render as an anchor
     */
    readonly a: "a";
};
export type ActionCardActionMode = (typeof ActionCardActionModeEnum)[keyof typeof ActionCardActionModeEnum];
