import { __decorate } from 'tslib';
import { Updates, attr, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import { isHTMLElement, keyEscape, keySpace, keyEnter, keyHome, keyEnd, keyArrowUp, keyArrowDown } from '@microsoft/fast-web-utilities';
import { getComponentName } from '@saffron/config';
import { Logger } from '../../services/logger.js';
import '../../utils/index.js';
import { DialogBase } from '../dialog/dialogBase.js';
import { MenuItem } from '../menu/menu-item/menu-item.js';
import { MenuItemRoleEnum } from '../menu/menu-item/menu-item.options.js';
import { SideNavStateEnum } from './side-nav.options.js';
import { setAttributeOnChild } from '../../utils/dom-helpers.js';
import { ComponentDensityEnum } from '../../utils/global-enums.js';

/**
 * A class for Sidebar navigation
 */
class SideNav extends DialogBase {
    itemsChanged(_oldValue, _newValue) {
        if (this.$fastController.isConnected && this.menuItems !== undefined) {
            this.setItems();
        }
        if (this.items.length > 0) {
            setAttributeOnChild(this, getComponentName('saf-menu-item'), 'side-nav-item', '');
        }
    }
    constructor() {
        super();
        /**
         * Density attribute
         * It's set to not be used in the side-nav because there are no designs for it to apply to side-nav
         * @public
         * @internal
         */
        this.density = ComponentDensityEnum.standard;
        /**
         * Tracks most recently active index;
         * initializes to 0 and changes on click
         */
        this.activeIndex = 0;
        /**
         * Whether the side nav is expanded or collapsed.
         *
         * @public
         */
        this.state = SideNavStateEnum.closed;
        /**
         * The `icon-name` for the expand button when side nav is open.
         * @public
         */
        this.openIconName = 'arrow-right-from-line';
        /**
         * The `icon-name` for the expand button when side nav is closed.
         * @public
         */
        this.closeIconName = 'arrow-left-from-line';
        /**
         * Defines a string value that labels the current element.
         * @public
         */
        this.ariaLabel = 'Side navigation';
        /**
         * Reflects the value of aria-expanded
         * @public
         */
        this.ariaExpanded = 'true';
        this.menuFocusIndex = -1;
        /**
         * Prevent focusing the trigger element when in fullscreen and navigating
         * @internal
         */
        this.isNavigating = false;
        this.adaptiveBreakpoint = 767;
        // Add this property to the SideNav class
        this._resizeTimeout = null;
        /**
         * Determines if the sidenav is adaptive
         * @public
         */
        this.fullscreen = false;
        /**
         * Check if the item is a menu item
         */
        this.isMenuItemElement = (el) => {
            return (el instanceof MenuItem ||
                (isHTMLElement(el) && el.getAttribute('role') in SideNav.menuFocusableElementRoles));
        };
        /**
         * Check if the item is focusable
         */
        this.focusableElement = (el) => {
            return this.isMenuItemElement(el);
        };
        this.resizeObserver = new ResizeObserver(this.handleResize.bind(this));
    }
    handleResize(_entries) {
        // Debounce setup to limit resize handler execution
        const debounceTime = 200; // ms
        if (!this._resizeTimeout) {
            this._resizeTimeout = setTimeout(() => {
                if (this.triggerId) {
                    const triggerElement = document.getElementById(this.triggerId);
                    const productHeader = triggerElement
                        ? triggerElement.closest(getComponentName('saf-product-header'))
                        : null;
                    if (productHeader) {
                        const productHeaderWidth = productHeader.offsetWidth;
                        if (productHeaderWidth <= this.adaptiveBreakpoint) {
                            // Close side-nav when swapping to fullscreen mode
                            this.close();
                            this.fullscreen = true;
                        }
                        else {
                            this.fullscreen = false;
                        }
                    }
                }
                this._resizeTimeout = null;
            }, debounceTime);
        }
        // Show/Hide icons when swapped from fullscreen to non-fullscreen
        this.toggleMenuItemText();
        this.showHideTooltip();
        this.showHideIcon();
    }
    /**
     * The method to open/expand the side-nav
     * @public
     */
    open() {
        // @note - if opening in fullscreen, add an 'opening' class to trigger the opening transition to allow the animation/transition to complete
        // as it uses display none to hide the sidenav from assistive technologies, can't transition from display none
        // A timeout is used to then remove the 'opening' class after the transition duration and then close the sidenav
        if (this.fullscreen)
            this.classList.add('opening');
        this.fullscreen
            ? setTimeout(() => {
                this.state = SideNavStateEnum.open;
                this.classList.remove('opening');
            }, 200)
            : (this.state = SideNavStateEnum.open);
        this.state = SideNavStateEnum.open;
        // Reset isNavigation when re-opening side-nav
        this.isNavigating = false;
        this.ariaExpanded = 'true';
        this.toggleMenuItemText();
        this.showHideTooltip();
        this.showHideIcon();
        this.$emit('open', null, { bubbles: false });
        const trigger = document.getElementById(this.triggerId);
        if (trigger) {
            trigger.setAttribute('aria-expanded', 'true');
        }
    }
    /**
     * The method to close/collapse the side-nav
     * @public
     */
    close() {
        this.state = SideNavStateEnum.closed;
        this.ariaExpanded = 'false';
        this.toggleMenuItemText();
        this.showHideTooltip();
        this.showHideIcon();
        this.$emit('close', null, { bubbles: false });
        const trigger = document.getElementById(this.triggerId);
        if (trigger) {
            trigger.setAttribute('aria-expanded', 'false');
        }
    }
    /**
     * Finds all empty slot child elements with span.content selector as parent
     * when sidenav is open, applies hidden attribute to text node
     * When sidenav is closed, removes hidden attribute from text node
     * @public
     * @internal
     */
    toggleMenuItemText() {
        this.querySelectorAll(getComponentName('saf-menu-item')).forEach((element) => {
            var _a, _b, _c, _d, _e, _f;
            const menuItemTextSlot = (_b = (_a = element === null || element === void 0 ? void 0 : element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('span.content')) === null || _b === void 0 ? void 0 : _b.querySelector('slot');
            // Get slots text - menu item text
            const menuItemText = (_f = (_e = (_d = (_c = element === null || element === void 0 ? void 0 : element.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('span.content')) === null || _d === void 0 ? void 0 : _d.querySelector('slot')) === null || _e === void 0 ? void 0 : _e.assignedNodes()) === null || _f === void 0 ? void 0 : _f[0].textContent;
            switch (this.state) {
                case 'closed':
                    menuItemTextSlot === null || menuItemTextSlot === void 0 ? void 0 : menuItemTextSlot.setAttribute('hidden', 'true');
                    element.setAttribute('aria-label', menuItemText);
                    break;
                case 'open':
                default:
                    element.removeAttribute('aria-label');
                    setTimeout(() => {
                        menuItemTextSlot === null || menuItemTextSlot === void 0 ? void 0 : menuItemTextSlot.removeAttribute('hidden');
                    }, this.getAnimationDurationMs());
                    break;
            }
        });
    }
    showHideTooltip() {
        this.querySelectorAll(getComponentName('saf-tooltip')).forEach((element) => {
            if (this.state === SideNavStateEnum.open) {
                element.setAttribute('hidden', 'true');
            }
            else if (this.state === SideNavStateEnum.closed) {
                element.removeAttribute('hidden');
            }
        });
    }
    showHideIcon() {
        this.querySelectorAll(`${getComponentName('saf-icon')}[slot="end"]`).forEach((element) => {
            if (this.state === SideNavStateEnum.closed) {
                element.setAttribute('hidden', 'true');
            }
            else if (this.state === SideNavStateEnum.open) {
                setTimeout(() => {
                    element.removeAttribute('hidden');
                }, this.getAnimationDurationMs());
            }
        });
    }
    getAnimationDurationMs() {
        const animationDuration = getComputedStyle(this).getPropertyValue('--saf-sideNav-container-transitionDuration');
        const numericValue = parseFloat(animationDuration);
        if (!isNaN(numericValue)) {
            if (animationDuration.includes('ms')) {
                return numericValue;
            }
            else {
                return numericValue * 1000;
            }
        }
        return 0;
    }
    /**
     * @public
     * @remarks Identifies which menu item was clicked,
     */
    handleClick(e) {
        if (e.defaultPrevented) {
            Logger.warn('Event dispatch was prevented');
        }
        const targetedElement = e.target;
        const shouldOpenInNewTab = e.ctrlKey ||
            e.metaKey ||
            e.button === 1 ||
            (targetedElement.hasLinkOrRouterLink && targetedElement.target === '_blank');
        if (!shouldOpenInNewTab) {
            this.updateSelectedItem(targetedElement);
        }
        if (!(e.target instanceof MenuItem) || !this.isMenuItemElement(e.target)) {
            return false;
        }
        return true;
    }
    /**
     * @public
     * @param element - event.target of keydown or click event
     * Updates the selected item index and toggles selected icon styles
     */
    updateSelectedItem(element) {
        this.isNavigating = true;
        this.items.forEach((el, index) => {
            var _a;
            const anchor = (_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('a');
            if (el === element) {
                this.activeIndex = index;
                this.toggleIconSelected(element, true);
                anchor === null || anchor === void 0 ? void 0 : anchor.setAttribute('aria-current', 'page');
                if (this.fullscreen) {
                    this.close();
                }
            }
            else {
                this.toggleIconSelected(el, false);
                anchor === null || anchor === void 0 ? void 0 : anchor.removeAttribute('aria-current');
            }
        });
        // reset isNavigating after a short delay to allow any navigation to complete
        const callback = () => {
            this.isNavigating = false;
        };
        callback.bind(this);
        Updates.enqueue(callback);
    }
    /**
     * Toggles side-nav menu-item icons between outline and filled
     * when selected.
     * @public
     * @internal
     * @param element - the icon element
     * @param selected - whether or not the current element is selected
     */
    toggleIconSelected(element, selected) {
        const iconElement = element === null || element === void 0 ? void 0 : element.querySelector(getComponentName('saf-icon'));
        if ((iconElement === null || iconElement === void 0 ? void 0 : iconElement.getAttribute('appearance')) !== 'brands') {
            if (selected) {
                iconElement === null || iconElement === void 0 ? void 0 : iconElement.setAttribute('appearance', 'solid');
            }
            else {
                iconElement === null || iconElement === void 0 ? void 0 : iconElement.setAttribute('appearance', 'light');
            }
        }
    }
    setItems() {
        const children = Array.from(this.children);
        const newItems = children.filter((child) => !child.hasAttribute('hidden'));
        this.menuItems = newItems;
        const menuItems = this.menuItems.filter(this.isMenuItemElement);
        if (menuItems.length) {
            this.menuFocusIndex = 0;
        }
        menuItems.forEach((item, index) => {
            item.setAttribute('tabindex', index === 0 ? '0' : '-1');
        });
    }
    /**
     * @internal
     */
    handleMenuKeyDown(e) {
        if (this.menuItems === undefined) {
            return false;
        }
        if (!this.isMenuItemElement(e.target) ||
            e.target.parentElement !== this) {
            return true;
        }
        const menuItem = e.target;
        const shouldOpenInNewTab = e.ctrlKey ||
            e.metaKey ||
            (menuItem.hasLinkOrRouterLink && menuItem.target === '_blank');
        switch (e.key) {
            case keyArrowDown:
                // Go forward one index
                this.setMenuFocus(this.menuFocusIndex + 1, 1);
                return false;
            case keyArrowUp:
                // Go back one index
                this.setMenuFocus(this.menuFocusIndex - 1, -1);
                return false;
            case keyEnd:
                // Set focus on last item
                this.setMenuFocus(this.menuItems.length - 1, -1);
                return false;
            case keyHome:
                // Set focus on first item
                this.setMenuFocus(0, 1);
                return false;
            case keyEnter:
            case keySpace:
                if (!shouldOpenInNewTab) {
                    this.updateSelectedItem(e.target);
                }
                return false;
            case keyEscape:
                this.close();
                return false;
            default:
                // If we are not handling the event, do not prevent default
                return true;
        }
    }
    setMenuFocus(focusIndex, adjustment) {
        if (this.menuItems === undefined) {
            return;
        }
        while (focusIndex >= 0 && focusIndex < this.menuItems.length) {
            const child = this.menuItems[focusIndex];
            if (this.focusableElement(child)) {
                // Change the previous index to -1
                if (this.menuFocusIndex > -1 && this.menuItems.length >= this.menuFocusIndex - 1) {
                    this.menuItems[this.menuFocusIndex].setAttribute('tabindex', '-1');
                }
                // Update the focus index
                this.menuFocusIndex = focusIndex;
                // Update the tabindex of next focusable element
                child.setAttribute('tabindex', '0');
                // Focus the element
                child.focus();
                break;
            }
            focusIndex += adjustment;
        }
    }
    // Define the close button element
    get closeButtonElement() {
        var _a;
        return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.header-action');
    }
    // Define the title element
    get titleElement() {
        var _a;
        return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.header-title');
    }
    // Define how to get the hidden state
    get isHidden() {
        return this.state === SideNavStateEnum.closed;
    }
    // Define how to set the hidden state
    set isHidden(value) {
        this.state = value ? SideNavStateEnum.closed : SideNavStateEnum.open;
    }
    // Define the specific hidden state attribute
    get hideStateAttribute() {
        return 'state';
    }
    // Define if modal
    get isModal() {
        return this.fullscreen;
    }
    // Define if component supports the cancel event
    get hasCancelEvent() {
        return false;
    }
    // Define the component's 'open' event name
    get openEventName() {
        return 'open';
    }
    // Define the component's 'close' event name
    get hideEventName() {
        return 'close';
    }
    // Define the default value for noFocusTrap
    get noFocusTrap() {
        // if fullscreen, force focus trapping
        return this.fullscreen ? false : true;
    }
    // Define if the component should prevent focus on trigger element when closing
    get preventTriggerFocus() {
        return this.isNavigating;
    }
    // runs in DialogBase connectedCallback
    initialize() {
        this.toggleMenuItemText();
        this.showHideTooltip();
        this.showHideIcon();
        this.resizeObserver.observe(document.body);
        Updates.enqueue(() => {
            this.setItems();
        });
        const trigger = document.getElementById(this.triggerId);
        if (trigger) {
            trigger.addEventListener('click', () => this.open());
            trigger.setAttribute('aria-expanded', this.state === SideNavStateEnum.open ? 'true' : 'false');
            trigger.setAttribute('aria-controls', this.id);
            trigger.setAttribute('aria-haspopup', 'dialog');
        }
    }
    // runs in DialogBase disconnectedCallback
    destroy() {
        this.resizeObserver.unobserve(document.body);
    }
    // Alias open and close for backward compatibility with DialogBase's show/hide methods
    show() {
        this.open();
    }
    hide() {
        this.close();
    }
}
SideNav.menuFocusableElementRoles = MenuItemRoleEnum;
__decorate([
    attr
], SideNav.prototype, "density", void 0);
__decorate([
    observable
], SideNav.prototype, "activeIndex", void 0);
__decorate([
    observable
], SideNav.prototype, "items", void 0);
__decorate([
    observable
], SideNav.prototype, "titleNodes", void 0);
__decorate([
    attr,
    observable
], SideNav.prototype, "state", void 0);
__decorate([
    attr({ attribute: 'open-icon-name' })
], SideNav.prototype, "openIconName", void 0);
__decorate([
    attr({ attribute: 'close-icon-name' })
], SideNav.prototype, "closeIconName", void 0);
__decorate([
    attr({ attribute: 'aria-label' })
], SideNav.prototype, "ariaLabel", void 0);
__decorate([
    attr({ attribute: 'close-aria-label' })
], SideNav.prototype, "closeAriaLabel", void 0);
__decorate([
    attr({ attribute: 'open-aria-label' })
], SideNav.prototype, "openAriaLabel", void 0);
__decorate([
    observable
], SideNav.prototype, "ariaExpanded", void 0);
__decorate([
    observable
], SideNav.prototype, "shouldShowFullscreen", void 0);
__decorate([
    observable
], SideNav.prototype, "fullscreen", void 0);

export { SideNav };
