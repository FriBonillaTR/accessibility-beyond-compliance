/**
 * Enumerates possible tooltip positions
 *
 * @public
 */
export declare const TooltipPositionEnum: {
    /**
     * The tooltip is positioned above the element
     */
    readonly top: "top";
    /**
     * The tooltip is positioned above and to the right of the element
     */
    readonly topStart: "top-start";
    /**
     * The tooltip is positioned above and to the left of the element
     */
    readonly topEnd: "top-end";
    /**
     * The tooltip is positioned below the element
     */
    readonly bottom: "bottom";
    /**
     * The tooltip is positioned below and to the left of the element
     */
    readonly bottomStart: "bottom-start";
    /**
     * The tooltip is positioned below and to the right of the element
     */
    readonly bottomEnd: "bottom-end";
    /**
     * The tooltip is positioned to the right of the element
     */
    readonly right: "right";
    /**
     * The tooltip is positioned to the left of the element
     */
    readonly left: "left";
};
/**
 * The possible tooltip positions
 *
 * @public
 */
export type TooltipPosition = (typeof TooltipPositionEnum)[keyof typeof TooltipPositionEnum];
