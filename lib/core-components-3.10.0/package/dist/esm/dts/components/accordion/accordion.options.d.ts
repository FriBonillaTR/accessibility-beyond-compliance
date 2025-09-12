/**
 * Expand mode for {@link Accordion}
 * `single` designates only a single {@link @saffron/core-components#(AccordionItem:class)} can be open a time.
 * `multi` designates multiple {@link @saffron/core-components#(AccordionItem:class)} can be open simultaneously.
 *
 * @public
 */
export declare const AccordionExpandModeEnum: {
    readonly single: "single";
    readonly multi: "multi";
};
/**
 * Type for the {@link Accordion} Expand Mode
 * @public
 */
export type AccordionExpandMode = (typeof AccordionExpandModeEnum)[keyof typeof AccordionExpandModeEnum];
