/**
 * Menu items roles.
 * @public
 */
export declare const MenuItemRoleEnum: {
    /**
     * The menu item has a "menuitem" role
     */
    readonly menuitem: "menuitem";
    /**
     * The menu item has a "menuitemcheckbox" role
     */
    readonly menuitemcheckbox: "menuitemcheckbox";
    /**
     * The menu item has a "menuitemradio" role
     */
    readonly menuitemradio: "menuitemradio";
};
/**
 * The types for menu item roles
 * @public
 */
export type MenuItemRole = (typeof MenuItemRoleEnum)[keyof typeof MenuItemRoleEnum];
