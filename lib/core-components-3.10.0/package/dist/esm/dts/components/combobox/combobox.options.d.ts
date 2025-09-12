export declare const ComboboxSearchModeEnum: {
    /**
     * Search all words across options
     */
    readonly includes: "includes";
    /**
     * Search first word across options
     */
    readonly startsWith: "startsWith";
};
/**
 * Search mode type for combobox.
 * @public
 */
export type ComboboxSearchMode = (typeof ComboboxSearchModeEnum)[keyof typeof ComboboxSearchModeEnum];
