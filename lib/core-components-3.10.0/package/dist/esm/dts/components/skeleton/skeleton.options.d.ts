/**
 * Skeleton appearance values.
 *
 * @public
 */
export declare const SkeletonAppearanceEnum: {
    readonly small: "small";
    readonly large: "large";
    readonly table: "table";
};
export type SkeletonAppearance = (typeof SkeletonAppearanceEnum)[keyof typeof SkeletonAppearanceEnum];
/**
 * Skeleton background values.
 *
 * @public
 */
export declare const SkeletonBackgroundEnum: {
    readonly transparent: "transparent";
    readonly card: "card";
};
export type SkeletonBackground = (typeof SkeletonBackgroundEnum)[keyof typeof SkeletonBackgroundEnum];
/**
 * A structure representing skeleton shapes
 * @public
 */
export declare const SkeletonShapeEnum: {
    readonly rect: "rect";
    readonly circle: "circle";
};
/**
 * @public
 */
export type SkeletonShape = (typeof SkeletonShapeEnum)[keyof typeof SkeletonShapeEnum];
