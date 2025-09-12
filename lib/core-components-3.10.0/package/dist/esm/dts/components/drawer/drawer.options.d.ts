/**
 * Drawer placement values.
 *
 * @public
 */
export declare const DrawerPlacementEnum: {
    readonly right: "right";
    readonly bottom: "bottom";
};
/**
 * Type for drawer placement values.
 *
 * @public
 */
export type DrawerPlacement = (typeof DrawerPlacementEnum)[keyof typeof DrawerPlacementEnum];
