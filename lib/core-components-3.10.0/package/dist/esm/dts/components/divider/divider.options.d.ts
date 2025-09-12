/**
 * Divider roles
 * separator: The divider semantically separates content
 * presentation: The divider has no semantic value and is for visual presentation only.
 *
 * @public
 */
export declare const DividerRoleEnum: {
    readonly separator: "separator";
    readonly presentation: "presentation";
};
/**
 * The types for Divider roles
 * @public
 */
export type DividerRole = (typeof DividerRoleEnum)[keyof typeof DividerRoleEnum];
