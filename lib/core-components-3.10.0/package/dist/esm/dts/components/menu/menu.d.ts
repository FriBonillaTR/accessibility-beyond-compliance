import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { ComponentDensity } from '../../utils/index.js';
/**
 * A Menu Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#menu | ARIA menu }.
 *
 * @slot - The default slot for the menu items
 *
 * @public
 */
export declare class Menu extends FASTElement {
    protected itemsChanged(_oldValue: HTMLElement[], _newValue: HTMLElement[]): void;
    protected menuItems: Element[] | undefined;
    private expandedItem;
    /**
     * The index of the focusable element in the items array
     * defaults to -1
     */
    private focusIndex;
    private static focusableElementRoles;
    /**
     * Focuses the first item in the menu.
     *
     * @public
     */
    focus(): void;
    /**
     * Collapses any expanded menu items.
     *
     * @public
     */
    collapseExpandedItem(): void;
    private handleItemFocus;
    private handleExpandedChanged;
    private removeItemListeners;
    protected setItems(): void;
    handleChange(source: any, propertyName: string): void;
    /**
     * handle change from child element
     */
    private changeHandler;
    /**
     * check if the item is a menu item
     */
    protected isMenuItemElement: (el: Element) => el is HTMLElement;
    /**
     * check if the item is focusable
     */
    private isFocusableElement;
    private setFocus;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    /**
     * Whether the menu is hidden or not
     *
     * @public
     */
    hidden: boolean;
    onFocusOut(): void;
}
