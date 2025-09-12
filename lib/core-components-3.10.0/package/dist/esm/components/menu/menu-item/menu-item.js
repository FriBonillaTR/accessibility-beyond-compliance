import { __awaiter, __decorate } from 'tslib';
import { autoUpdate, computePosition, size, flip } from '@floating-ui/dom';
import { FASTElement, Updates, attr, observable } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { uniqueId, keyEscape, keyArrowLeft, keyArrowRight, keySpace, keyEnter } from '@microsoft/fast-web-utilities';
import { getComponentName } from '@saffron/config';
import { applyMixins } from '../../../utils/apply-mixins.js';
import '../../../utils/index.js';
import { StartEnd } from '../../../utils/start-end-template.js';
import { MenuItemRoleEnum } from './menu-item.options.js';
import { ComponentDensityEnum } from '../../../utils/global-enums.js';

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
class MenuItem extends FASTElement {
    constructor() {
        super(...arguments);
        this.id = uniqueId('menu-item-');
        /**
         * The role of the element.
         *
         * @public
         * @remarks
         * HTML Attribute: role
         */
        this.role = MenuItemRoleEnum.menuitem;
        /**
         * The checked value of the element.
         *
         * @public
         * @remarks
         * HTML Attribute: checked
         */
        this.checked = false;
        this.focusSubmenuOnLoad = false;
        /**
         * @internal
         */
        this.handleMenuItemKeyDown = (e) => {
            if (e.defaultPrevented) {
                return false;
            }
            if (e.key === keyEscape && this.expanded)
                e.stopPropagation();
            switch (e.key) {
                case keyEnter:
                case keySpace:
                    if (!this.disabled) {
                        // W3C defines that the default action on a keydown event
                        // and the key is ENTER it must trigger an on click event
                        // This is only necessary for this component since it renders a div
                        // If it rendered a button, the browser would handle this automatically
                        this.dispatchEvent(new MouseEvent('click', {
                            button: 0,
                            cancelable: e.cancelable,
                            ctrlKey: e.ctrlKey,
                            metaKey: e.metaKey,
                        }));
                    }
                    // Prevent default space key behavior which scrolls page
                    if (e.key === keySpace)
                        return false;
                    return true;
                case keyArrowRight:
                    //open/focus on submenu
                    this.expanded && this.submenu ? this.submenu.focus() : this.expandAndFocus();
                    return false;
                case keyEscape:
                    // close submenu
                    if (this.expanded) {
                        this.closeSubMenu();
                        return false;
                    }
                    break;
                case keyArrowLeft:
                    //close submenu
                    if (this.expanded) {
                        this.closeSubMenu();
                        return false;
                    }
            }
            return true;
        };
        /**
         * A function that is called when the menu item is clicked when `router-link` is `true`
         */
        this.navigate = (_path) => { };
        this.handleAnchorClick = (e) => {
            const shouldOpenInNewTab = e.ctrlKey || e.metaKey || e.button === 1 || this.target === '_blank';
            if (this.routerLink && !shouldOpenInNewTab) {
                this.navigate(this.url);
                return false;
            }
            return true;
        };
        /**
         * @internal
         * Note: overrides original MenuItem handleMenuItemClick method
         * which by default prevented all click events from returning true
         */
        this.handleMenuItemClick = (e) => {
            if (this.disabled) {
                return false;
            }
            const originatedFromAnchor = e.composedPath().includes(this.anchorElement);
            const shouldOpenInNewTab = e.ctrlKey ||
                e.metaKey ||
                e.button === 1 ||
                (this.hasLinkOrRouterLink && this.target === '_blank');
            if (!originatedFromAnchor) {
                this.forwardEventToAnchor(e);
            }
            if (!shouldOpenInNewTab)
                this.setSelectedItem(this);
            if (!this.hasSubmenu)
                this.invoke();
            return true;
        };
        /**
         * @internal
         */
        this.submenuLoaded = () => {
            if (!this.focusSubmenuOnLoad) {
                return;
            }
            this.focusSubmenuOnLoad = false;
            if (this.submenu) {
                this.submenu.focus();
                this.setAttribute('tabindex', '-1');
            }
        };
        /**
         * @internal
         */
        this.handleMouseOver = (_e) => {
            if (this.disabled || !this.hasSubmenu || this.expanded) {
                return false;
            }
            this.expanded = true;
            return false;
        };
        /**
         * @internal
         */
        this.handleMouseOut = (_e) => {
            if (!this.expanded || this.contains(document.activeElement)) {
                return false;
            }
            this.expanded = false;
            return false;
        };
        /**
         * @internal
         */
        this.closeSubMenu = () => {
            // close submenu
            this.expanded = false;
            this.focus();
        };
        /**
         * @internal
         */
        this.expandAndFocus = () => {
            if (!this.hasSubmenu) {
                return;
            }
            this.focusSubmenuOnLoad = true;
            this.expanded = true;
        };
        /**
         * @internal
         */
        this.invoke = () => {
            if (this.disabled) {
                return;
            }
            switch (this.role) {
                case MenuItemRoleEnum.menuitemcheckbox:
                    this.checked = !this.checked;
                    break;
                case MenuItemRoleEnum.menuitem:
                    if (this.hasSubmenu) {
                        this.expandAndFocus();
                        break;
                    }
                    this.$emit('change');
                    break;
                case MenuItemRoleEnum.menuitemradio:
                    if (!this.checked) {
                        this.checked = true;
                    }
                    break;
            }
        };
        /**
         * Whether the menu-item is a link. Typically used in side nav.
         * When `true`, the menu-item will render an anchor tag. Provide a `url` that the anchor tag should link to.
         *
         * @see url
         * @public
         */
        this.hasLink = false;
        /**
         * Indicates whether the menu-item is used as a router link.
         * When `true`, the menu-item will render an anchor tag but when invoked, it will invoke the `navigate` method.
         * You need to provide a `url` and `navigate()` method for the router link to work.
         *
         * @see navigate
         * @see url
         * @public
         */
        this.routerLink = false;
        /**
         * Used to change the spacing in and around the component.
         *
         * @public
         */
        this.density = ComponentDensityEnum.inherit;
        /**
         * @internal
         * Note: loops through menu items in menu and adds selected class to event target element
         * @param targetElement - event target from triggering menu item
         */
        this.setSelectedItem = (targetElement) => {
            if (this.hasSubmenu)
                return;
            const menuItems = targetElement.parentElement;
            menuItems === null || menuItems === void 0 ? void 0 : menuItems.querySelectorAll(getComponentName('saf-menu-item')).forEach((element) => {
                if (element === targetElement) {
                    element.classList.add('selected');
                }
                else {
                    element.classList.remove('selected');
                }
            });
        };
    }
    /**
     * When a submenu is closed we need to remove all side effects, that means we need to remove
     * the added `selected` class from the DOM.
     *
     * @protected
     */
    expandedChanged(prev, next) {
        if (this.$fastController.isConnected) {
            if (next && this.submenu) {
                this.updateSubmenu();
            }
            this.$emit('expanded-change', this, { bubbles: false });
        }
        Updates.enqueue(() => {
            if (this.$fastController.isConnected && this.submenu && this.expanded === false) {
                this.submenu
                    .querySelectorAll(`:scope > ${getComponentName('saf-menu-item')}.selected`)
                    .forEach((element) => {
                    element.classList.remove('selected');
                });
            }
        });
    }
    checkedChanged(_oldValue, _newValue) {
        if (this.$fastController.isConnected) {
            this.$emit('change');
        }
    }
    /**
     * @internal
     */
    get hasSubmenu() {
        return !!this.submenu;
    }
    /**
     * Sets the submenu and updates its position.
     *
     * @internal
     */
    slottedSubmenuChanged(prev, next) {
        if (next.length) {
            this.submenu = next[0];
            this.updateSubmenu();
        }
    }
    /**
     * @internal
     */
    disconnectedCallback() {
        var _a;
        (_a = this.cleanup) === null || _a === void 0 ? void 0 : _a.call(this);
        super.disconnectedCallback();
    }
    connectedCallback() {
        super.connectedCallback();
        Updates.enqueue(() => {
            if (this.$fastController.isConnected) {
                if (!this.target)
                    this.target = this.routerLink ? '_self' : '_blank';
            }
        });
    }
    /**
     * Calculate and apply submenu positioning.
     *
     * @public
     */
    updateSubmenu() {
        var _a;
        (_a = this.cleanup) === null || _a === void 0 ? void 0 : _a.call(this);
        if (!this.submenu || !this.expanded) {
            return;
        }
        Updates.enqueue(() => {
            this.cleanup = autoUpdate(this, this.submenuContainer, () => __awaiter(this, void 0, void 0, function* () {
                const fallbackPlacements = ['left-start', 'right-start'];
                const { x, y } = yield computePosition(this, this.submenuContainer, {
                    middleware: [
                        size({
                            apply: ({ availableWidth, rects }) => {
                                if (availableWidth < rects.floating.width) {
                                    fallbackPlacements.push('bottom-end', 'top-end');
                                }
                            },
                        }),
                        flip({ fallbackPlacements }),
                    ],
                    placement: 'right-start',
                    strategy: 'fixed',
                });
                Object.assign(this.submenuContainer.style, {
                    left: `${x}px`,
                    position: 'fixed',
                    top: `${y}px`,
                });
                this.submenuLoaded();
            }));
        });
    }
    get hasLinkOrRouterLink() {
        return this.hasLink || this.routerLink;
    }
    // Exists only to prevent becoming cursor scroll if there is middle click and link
    handleMenuItemMouseDown(e) {
        const isMiddleClick = e.button === 1;
        if (isMiddleClick && this.hasLinkOrRouterLink) {
            e.preventDefault();
        }
    }
    handleMenuItemMouseup(e) {
        const isMiddleClick = e.button === 1;
        if (this.disabled || !isMiddleClick) {
            return;
        }
        if (!isMiddleClick)
            this.setSelectedItem(this);
        const originatedFromAnchor = e.composedPath().includes(this.anchorElement);
        if (originatedFromAnchor) {
            return true;
        }
        else {
            this.forwardEventToAnchor(e);
        }
    }
    handleMenuItemChange(e) {
        // Prevents the change event being fired twice when using radio menu items
        if (this.role === MenuItemRoleEnum.menuitemradio) {
            const radioItem = e.target;
            if (!radioItem.checked) {
                e.stopImmediatePropagation();
            }
        }
    }
    forwardEventToAnchor(event) {
        var _a;
        if (!this.hasLinkOrRouterLink || !this.url) {
            return;
        }
        // prevent infinite loop when clicking on the anchor element
        if (event.composedPath().includes(this.anchorElement))
            return;
        (_a = this.anchorElement) === null || _a === void 0 ? void 0 : _a.dispatchEvent(new MouseEvent('click', {
            button: event instanceof MouseEvent ? event.button : 0,
            cancelable: event.cancelable,
            ctrlKey: event.ctrlKey,
            metaKey: event.metaKey,
        }));
    }
}
__decorate([
    attr
], MenuItem.prototype, "id", void 0);
__decorate([
    attr({ mode: 'boolean' })
], MenuItem.prototype, "disabled", void 0);
__decorate([
    attr({ mode: 'boolean' })
], MenuItem.prototype, "expanded", void 0);
__decorate([
    attr
], MenuItem.prototype, "role", void 0);
__decorate([
    attr({ mode: 'boolean' })
], MenuItem.prototype, "checked", void 0);
__decorate([
    attr({ mode: 'boolean' })
], MenuItem.prototype, "hidden", void 0);
__decorate([
    observable
], MenuItem.prototype, "slottedSubmenu", void 0);
__decorate([
    observable
], MenuItem.prototype, "submenu", void 0);
__decorate([
    observable
], MenuItem.prototype, "navigate", void 0);
__decorate([
    attr({ attribute: 'url' })
], MenuItem.prototype, "url", void 0);
__decorate([
    attr({ attribute: 'has-link', mode: 'boolean' })
], MenuItem.prototype, "hasLink", void 0);
__decorate([
    attr({ attribute: 'router-link', mode: 'boolean' })
], MenuItem.prototype, "routerLink", void 0);
__decorate([
    attr({ attribute: 'link-target' })
], MenuItem.prototype, "target", void 0);
__decorate([
    attr
], MenuItem.prototype, "density", void 0);
applyMixins(MenuItem, StartEnd);

export { MenuItem };
