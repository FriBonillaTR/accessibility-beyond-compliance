import { FASTElement } from '../../../@microsoft/fast-element/index.js';
import { ComponentDensity } from '../../../utils/index.js';
import { StartEnd } from '../../../utils/start-end-template.js';
import { AnchorTarget } from '../../anchor/anchor.options.js';
import { MenuItemRole } from './menu-item.options.js';
/**
 * A Switch Custom HTML Element.
 * Implements {@link https://www.w3.org/TR/wai-aria-1.1/#menuitem | ARIA menuitem },
 * {@link https://www.w3.org/TR/wai-aria-1.1/#menuitemcheckbox | ARIA menuitemcheckbox},
 * or {@link https://www.w3.org/TR/wai-aria-1.1/#menuitemradio | ARIA menuitemradio }.
 *
 * @slot checked-indicator - The checked indicator
 * @slot radio-indicator - The radio indicator
 * @slot start - Content which can be provided before the menu item content
 * @slot end - Content which can be provided after the menu item content
 * @slot - The default slot for menu item content
 * @slot expand-collapse-indicator - The expand/collapse indicator
 * @slot submenu - Used to nest menu's within menu items
 * @csspart input-container - The element representing the visual checked or radio indicator
 * @csspart checkbox - The element wrapping the `menuitemcheckbox` indicator
 * @csspart radio - The element wrapping the `menuitemradio` indicator
 * @csspart content - The element wrapping the menu item content
 * @csspart expand-collapse-glyph-container - The element wrapping the expand collapse element
 * @csspart expand-collapse - The expand/collapse element
 * @csspart submenu-region - The container for the submenu, used for positioning
 * @fires expanded-change - Fires a custom 'expanded-change' event when the expanded state changes
 * @fires change - Fires a custom 'change' event when a non-submenu item with
 * a role of `menuitemcheckbox`, `menuitemradio`, or `menuitem` is invoked
 *
 * @public
 */
export declare class MenuItem extends FASTElement {
    id: string;
    /**
     * The disabled state of the element.
     *
     * @public
     * @remarks
     * HTML Attribute: disabled
     */
    disabled: boolean;
    /**
     * The expanded state of the element.
     *
     * @public
     * @remarks
     * HTML Attribute: expanded
     */
    expanded: boolean;
    /**
     * When a submenu is closed we need to remove all side effects, that means we need to remove
     * the added `selected` class from the DOM.
     *
     * @protected
     */
    protected expandedChanged(prev: boolean | undefined, next: boolean): void;
    /**
     * The role of the element.
     *
     * @public
     * @remarks
     * HTML Attribute: role
     */
    role: MenuItemRole;
    /**
     * Cleanup function for the submenu positioner.
     *
     * @public
     */
    cleanup: () => void;
    /**
     * The checked value of the element.
     *
     * @public
     * @remarks
     * HTML Attribute: checked
     */
    checked: boolean;
    protected checkedChanged(_oldValue: boolean, _newValue: boolean): void;
    /**
     * `Deprecated`. Doesn't do anything. Will be removed in v4.
     *
     * @public
     * @remarks TODO: remove in v4
     */
    hidden: boolean;
    anchorElement: HTMLAnchorElement | undefined;
    private focusSubmenuOnLoad;
    connectedCallback(): void;
    /**
     * A function that is called when the menu item is clicked when `router-link` is `true`
     */
    navigate: (path: string) => void;
    handleAnchorClick: (e: MouseEvent) => boolean;
    /**
     * Calculate and apply submenu positioning.
     *
     * @public
     */
    updateSubmenu(): void;
    /**
     * The URL the hyperlink references.
     *
     * @public
     */
    url?: string;
    /**
     * Whether the menu-item is a link. Typically used in side nav.
     * When `true`, the menu-item will render an anchor tag. Provide a `url` that the anchor tag should link to.
     *
     * @see url
     * @public
     */
    hasLink: boolean;
    /**
     * Indicates whether the menu-item is used as a router link.
     * When `true`, the menu-item will render an anchor tag but when invoked, it will invoke the `navigate` method.
     * You need to provide a `url` and `navigate()` method for the router link to work.
     *
     * @see navigate
     * @see url
     * @public
     */
    routerLink: boolean;
    get hasLinkOrRouterLink(): boolean;
    /**
     * Determines where a link will open in browsing context.
     * @public
     * @defaultValue `_self` if `router-link` is `true`, `_blank` otherwise
     */
    target: AnchorTarget;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    handleMenuItemMouseDown(e: MouseEvent): void;
    handleMenuItemMouseup(e: MouseEvent): true | undefined;
    handleMenuItemChange(e: MouseEvent): void;
    private forwardEventToAnchor;
}
export interface MenuItem extends StartEnd {
}
