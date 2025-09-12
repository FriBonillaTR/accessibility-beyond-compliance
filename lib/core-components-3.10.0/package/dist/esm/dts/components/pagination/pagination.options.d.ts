/**
 * Enumerates possible aria-live values
 *
 * @public
 */
export declare const PaginationAriaLiveEnum: {
    readonly off: "off";
    readonly polite: "polite";
    readonly assertive: "assertive";
};
/**
 * The possible aria-live values
 *
 * @public
 */
export type PaginationAriaLive = (typeof PaginationAriaLiveEnum)[keyof typeof PaginationAriaLiveEnum];
