/**
 * Enumerates possible labels positions
 *
 * @public
 */
export declare const SelectLabelPositionEnum: {
    /**
     * The labels are positioned above the element
     */
    readonly top: "top";
    /**
     * The labels are positioned to the right of the element
     */
    readonly right: "right";
    /**
     * The labels are positioned to the left of the element
     */
    readonly left: "left";
};
/**
 * The possible labels positions
 *
 * @public
 */
export type SelectLabelPosition = (typeof SelectLabelPositionEnum)[keyof typeof SelectLabelPositionEnum];
