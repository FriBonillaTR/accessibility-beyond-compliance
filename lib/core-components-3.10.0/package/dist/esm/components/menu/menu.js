import { __decorate } from 'tslib';
import { FASTElement, Updates, Observable, observable, attr } from '../../@microsoft/fast-element/dist/esm/index.js';
import { isHTMLElement, uniqueId, keyHome, keyEnd, keyArrowUp, keyArrowDown } from '@microsoft/fast-web-utilities';
import '../../utils/index.js';
import { getRootActiveElement } from '../../utils/dom-helpers.js';
import { MenuItem } from './menu-item/menu-item.js';
import { MenuItemRoleEnum } from './menu-item/menu-item.options.js';
import { ComponentDensityEnum } from '../../utils/global-enums.js';

/**
 * A Menu Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#menu | ARIA menu }.
 *
 * @slot - The default slot for the menu items
 *
 * @public
 */
class Menu extends FASTElement {
    constructor() {
        super(...arguments);
        this.expandedItem = null;
        /**
         * The index of the focusable element in the items array
         * defaults to -1
         */
        this.focusIndex = -1;
        /**
         * @internal
         */
        this.isNestedMenu = () => {
            var _a;
            return ((_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.role) === 'menuitem';
        };
        /**
         * if focus is moving out of the menu, reset to a stable initial state
         * @internal
         */
        this.handleFocusOut = (e) => {
            if (!this.contains(e.relatedTarget) && this.menuItems !== undefined) {
                this.collapseExpandedItem();
                // find our first focusable element
                const focusIndex = this.menuItems.findIndex(this.isFocusableElement);
                // set the current focus index's tabindex to -1
                this.menuItems[this.focusIndex].setAttribute('tabindex', '-1');
                // set the first focusable element tabindex to 0
                this.menuItems[focusIndex].setAttribute('tabindex', '0');
                // set the focus index
                this.focusIndex = focusIndex;
            }
        };
        this.handleItemFocus = (e) => {
            const targetItem = e.target;
            if (this.menuItems !== undefined && targetItem !== this.menuItems[this.focusIndex]) {
                this.menuItems[this.focusIndex].setAttribute('tabindex', '-1');
                this.focusIndex = this.menuItems.indexOf(targetItem);
                targetItem.setAttribute('tabindex', '0');
            }
        };
        this.handleExpandedChanged = (e) => {
            if (e.defaultPrevented ||
                e.target === null ||
                this.menuItems === undefined ||
                this.menuItems.indexOf(e.target) < 0) {
                return;
            }
            e.preventDefault();
            const changedItem = e.target;
            // closing an expanded item without opening another
            if (this.expandedItem !== null &&
                changedItem === this.expandedItem &&
                changedItem.expanded === false) {
                this.expandedItem = null;
                return;
            }
            if (changedItem.expanded) {
                if (this.expandedItem !== null && this.expandedItem !== changedItem) {
                    this.expandedItem.expanded = false;
                }
                this.menuItems[this.focusIndex].setAttribute('tabindex', '-1');
                this.expandedItem = changedItem;
                this.focusIndex = this.menuItems.indexOf(changedItem);
                changedItem.setAttribute('tabindex', '0');
            }
        };
        /**
         * handle change from child element
         */
        this.changeHandler = (e) => {
            if (this.menuItems === undefined) {
                return;
            }
            const changedMenuItem = e.target;
            const changeItemIndex = this.menuItems.indexOf(changedMenuItem);
            if (changeItemIndex === -1) {
                return;
            }
            if (changedMenuItem.role === 'menuitemradio' && changedMenuItem.checked === true) {
                for (let i = changeItemIndex - 1; i >= 0; --i) {
                    const item = this.menuItems[i];
                    const role = item.getAttribute('role');
                    if (role === MenuItemRoleEnum.menuitemradio) {
                        item.checked = false;
                    }
                    if (role === 'separator') {
                        break;
                    }
                }
                const maxIndex = this.menuItems.length - 1;
                for (let i = changeItemIndex + 1; i <= maxIndex; ++i) {
                    const item = this.menuItems[i];
                    const role = item.getAttribute('role');
                    if (role === MenuItemRoleEnum.menuitemradio) {
                        item.checked = false;
                    }
                    if (role === 'separator') {
                        break;
                    }
                }
            }
        };
        /**
         * check if the item is a menu item
         */
        this.isMenuItemElement = (el) => {
            return (el instanceof MenuItem ||
                (isHTMLElement(el) && el.getAttribute('role') in Menu.focusableElementRoles));
        };
        /**
         * check if the item is focusable
         */
        this.isFocusableElement = (el) => {
            return this.isMenuItemElement(el);
        };
        /**
         * Used to change the spacing in and around the component.
         *
         * @public
         */
        this.density = ComponentDensityEnum.inherit;
        /**
         * Whether the menu is hidden or not
         *
         * @public
         */
        this.hidden = false;
    }
    itemsChanged(_oldValue, _newValue) {
        // only update children after the component is connected and
        // the setItems has run on connectedCallback
        // (menuItems is undefined until then)
        if (this.$fastController.isConnected && this.menuItems !== undefined) {
            this.setItems();
            Updates.enqueue(() => this.setAriaOwns());
        }
    }
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        Updates.enqueue(() => {
            // wait until children have had a chance to
            // connect before setting/checking their props/attributes
            this.setItems();
        });
        this.addEventListener('change', this.changeHandler);
        this.addEventListener('focusout', this.onFocusOut);
        if (!this.id) {
            this.id = uniqueId('saf-menu-');
        }
        Updates.enqueue(() => this.setAriaOwns());
    }
    /**
     * @internal
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeItemListeners();
        this.menuItems = undefined;
        this.removeEventListener('change', this.changeHandler);
        this.removeEventListener('focusout', this.onFocusOut);
    }
    /**
     * Focuses the first item in the menu.
     *
     * @public
     */
    focus() {
        this.setFocus(0, 1);
    }
    /**
     * Collapses any expanded menu items.
     *
     * @public
     */
    collapseExpandedItem() {
        if (this.expandedItem !== null) {
            this.expandedItem.expanded = false;
            this.expandedItem = null;
        }
    }
    /**
     * @internal
     */
    handleMenuKeyDown(e) {
        if (e.defaultPrevented || this.menuItems === undefined) {
            return;
        }
        // Resync focus index for keyboard navigation on mouseOver submenu expanded
        const currentFocused = getRootActiveElement(this);
        const realIndex = this.menuItems.indexOf(currentFocused);
        if (realIndex !== -1) {
            this.focusIndex = realIndex;
        }
        switch (e.key) {
            case keyArrowDown:
                // go forward one index
                this.setFocus(this.focusIndex + 1, 1);
                return;
            case keyArrowUp:
                // go back one index
                this.setFocus(this.focusIndex - 1, -1);
                return;
            case keyEnd:
                // set focus on last item
                this.setFocus(this.menuItems.length - 1, -1);
                return;
            case keyHome:
                // set focus on first item
                this.setFocus(0, 1);
                return;
            default:
                // if we are not handling the event, do not prevent default
                return true;
        }
    }
    removeItemListeners(items = this.items) {
        items.forEach((item) => {
            item.removeEventListener('focus', this.handleItemFocus);
            item.removeEventListener('expanded-changed', this.handleExpandedChanged);
            Observable.getNotifier(item).unsubscribe(this, 'hidden');
        });
    }
    setItems() {
        const children = Array.from(this.children);
        this.removeItemListeners(children);
        children.forEach((child) => Observable.getNotifier(child).subscribe(this, 'hidden'));
        const newItems = children.filter((child) => !child.hasAttribute('hidden'));
        this.menuItems = newItems;
        const menuItems = this.menuItems.filter(this.isMenuItemElement);
        // if our focus index is not -1 we have items
        if (menuItems.length) {
            this.focusIndex = 0;
        }
        menuItems.forEach((item, index) => {
            item.setAttribute('tabindex', index === 0 ? '0' : '-1');
            item.addEventListener('expanded-change', this.handleExpandedChanged);
            item.addEventListener('focus', this.handleItemFocus);
        });
    }
    handleChange(source, propertyName) {
        if (propertyName === 'hidden') {
            this.setItems();
        }
    }
    setFocus(focusIndex, adjustment) {
        if (this.menuItems === undefined) {
            return;
        }
        while (focusIndex >= 0 && focusIndex < this.menuItems.length) {
            const child = this.menuItems[focusIndex];
            if (this.isFocusableElement(child)) {
                // change the previous index to -1
                if (this.focusIndex > -1 && this.menuItems.length >= this.focusIndex - 1) {
                    this.menuItems[this.focusIndex].setAttribute('tabindex', '-1');
                }
                // update the focus index
                this.focusIndex = focusIndex;
                // update the tabindex of next focusable element
                child.setAttribute('tabindex', '0');
                // focus the element
                child.focus();
                break;
            }
            focusIndex += adjustment;
        }
    }
    /**
     * True if any child menuitems open a submenu
     *
     * @public
     * @internal
     */
    get hasSubmenus() {
        return this.submenus.length > 0;
    }
    /**
     * Valid submenus from child menu items
     *
     * @public
     * @internal
     */
    get submenus() {
        return this.menuItems === undefined
            ? []
            : this.menuItems.reduce((arr, item) => {
                if (item instanceof MenuItem && item.submenu instanceof Menu) {
                    arr.push(item.submenu);
                }
                return arr;
            }, []);
    }
    onFocusOut() {
        // Use a timeout to allow the next element to gain focus
        setTimeout(() => {
            if (!this.contains(document.activeElement)) {
                this.$emit('blur');
            }
        }, 0);
    }
    /**
     * Use aria-owns to pull nested menus into the parent menu in the a11y tree
     *
     * @internal
     */
    setAriaOwns() {
        const ids = this.submenus.reduce((arr, menu) => {
            if (menu.id) {
                arr.push(menu.id);
            }
            return arr;
        }, []);
        if (ids.length) {
            this.setAttribute('aria-owns', ids.join(' '));
        }
    }
}
Menu.focusableElementRoles = MenuItemRoleEnum;
__decorate([
    observable
], Menu.prototype, "items", void 0);
__decorate([
    attr
], Menu.prototype, "density", void 0);
__decorate([
    attr({ mode: 'boolean' })
], Menu.prototype, "hidden", void 0);

export { Menu };
