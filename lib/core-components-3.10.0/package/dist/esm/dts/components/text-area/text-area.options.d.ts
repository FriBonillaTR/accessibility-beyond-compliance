/**
 * Resize mode for a TextArea
 * @public
 */
export declare const TextAreaResizeEnum: {
    readonly none: "none";
    readonly both: "both";
    readonly horizontal: "horizontal";
    readonly vertical: "vertical";
};
/**
 * Types for the Text Area resize mode
 * @public
 */
export type TextAreaResize = (typeof TextAreaResizeEnum)[keyof typeof TextAreaResizeEnum];
