/**
 * Sidenav state values.
 *
 * @public
 */
export declare const SideNavStateEnum: {
    readonly closed: "closed";
    readonly open: "open";
};
/**
 * Type for button type values.
 *
 * @public
 */
export type SideNavState = (typeof SideNavStateEnum)[keyof typeof SideNavStateEnum];
