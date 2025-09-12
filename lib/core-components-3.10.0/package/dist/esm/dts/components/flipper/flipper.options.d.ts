/**
 * Flipper appearance values.
 *
 * @public
 */
export declare const FlipperDirectionEnum: {
    readonly next: "next";
    readonly previous: "previous";
};
export type FlipperDirection = (typeof FlipperDirectionEnum)[keyof typeof FlipperDirectionEnum];
