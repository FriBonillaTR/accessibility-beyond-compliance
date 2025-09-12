import { __decorate } from 'tslib';
import { FASTElement, attr, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import { getComponentName } from '@saffron/config';

/**
 * A class for ProductHeader
 */
class ProductHeader extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * The text of `aria-label` for the global navigation (right).
         *
         * @public
         * @a11y
         */
        this.globalAriaLabel = 'Global';
        /**
         * The text of `aria-label` for the product navigation (left).
         *
         * @public
         * @a11y
         */
        this.tasksAriaLabel = 'Product';
        this.isMenuOpen = false;
        this._showDivider = false;
        this._hasMenuItems = false;
        /**
         * Define the components that should receive the header-item attribute
         */
        this.productHeaderItems = [
            getComponentName('saf-button'),
            getComponentName('saf-search-field'),
            getComponentName('saf-anchor'),
        ];
    }
    addProductHeaderItemAttribute() {
        var _a, _b, _c;
        const globalSlot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name="global"]');
        const tasksSlot = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('slot[name="tasks"]');
        const sideNavTriggerSlot = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('slot[name="side-nav-trigger"]');
        const slots = [globalSlot, tasksSlot];
        if (sideNavTriggerSlot) {
            const slottedTrigger = sideNavTriggerSlot.assignedElements({
                flatten: false,
            });
            slottedTrigger.forEach((element) => {
                element.setAttribute('product-header-item', '');
            });
        }
        slots.forEach((slot) => {
            if (slot) {
                // Get directly slotted elements for each slot
                const slottedElements = slot.assignedElements({
                    flatten: false,
                });
                slottedElements.forEach((element) => {
                    // Find all saf-product-header-item elements
                    const headerItems = element.querySelectorAll(`:scope > ${getComponentName('saf-product-header-item')}`);
                    headerItems.forEach((headerItem) => {
                        // For each header item, find immediate children that match components list
                        this.productHeaderItems.forEach((componentName) => {
                            const components = headerItem.querySelectorAll(`:scope > ${componentName}`);
                            components.forEach((component) => {
                                component.setAttribute('product-header-item', '');
                            });
                        });
                    });
                });
            }
        });
        // Handle saf-anchor elements that are direct children of product-header
        const safAnchors = this.querySelectorAll(`:scope > ${getComponentName('saf-anchor')}`);
        safAnchors.forEach((anchor) => {
            anchor.setAttribute('product-header-item', '');
        });
    }
    connectedCallback() {
        super.connectedCallback();
        this.addProductHeaderItemAttribute();
        this.checkDivider();
        this.checkMenuItems();
        this.checkLogo();
        document.addEventListener('click', this.handleClickOutside.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('click', this.handleClickOutside.bind(this));
        this.anchoredRegion.removeEventListener('keydown', this.handleBackgroundKeyDown.bind(this));
        this.menuButton.removeEventListener('keydown', this.handleButtonKeyDown.bind(this));
        this.menuButton.removeEventListener('click', this.handleMenuButtonClick.bind(this));
    }
    checkMenuItems() {
        var _a;
        // Get the menu
        const menu = this.querySelector('[slot=menu]');
        if (menu) {
            this.prodHeaderMenuItems = Array.from((_a = this.querySelector('[slot=menu]')) === null || _a === void 0 ? void 0 : _a.children);
            this._hasMenuItems = true;
        }
    }
    checkDivider() {
        var _a, _b;
        const globalItems = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name=global]');
        const taskItems = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('slot[name=tasks');
        if (globalItems.assignedNodes().length > 0 &&
            taskItems.assignedNodes().length > 0) {
            this._showDivider = true;
        }
    }
    checkLogo() {
        var _a;
        const logoSlot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name=logo]');
        if (logoSlot) {
            const assignedNodes = logoSlot.assignedNodes({ flatten: true });
            assignedNodes.forEach((node) => {
                if (node instanceof HTMLElement) {
                    // Check the slots for saf-logo
                    const lightDomSafLogoElements = node.querySelectorAll(getComponentName('saf-logo'));
                    lightDomSafLogoElements.forEach((safLogo) => {
                        safLogo.setAttribute('product-header-logo', 'saf-logo');
                    });
                }
            });
        }
        // Additionally, check for saf-logo in the light DOM of saf-product-header
        const lightDomSafLogoElements = this.querySelectorAll(getComponentName('saf-logo'));
        lightDomSafLogoElements.forEach((safLogo) => {
            safLogo.setAttribute('product-header-logo', 'saf-logo');
        });
    }
    //Focus and click events
    handleClickOutside(event) {
        const path = event.composedPath();
        const target = path[0];
        if (target.tagName !== 'BUTTON' && this.isMenuOpen) {
            this.menuButton.focus();
            this.removeSelectedClass();
            this.closeMenu();
        }
    }
    handleButtonKeyDown(event) {
        if (event.key === 'Enter' || event.key === 'ArrowDown' || event.key === ' ') {
            this.handleMenuButtonClick();
        }
        else {
            return true;
        }
    }
    removeSelectedClass() {
        //find selected item in menu and remove selected class
        this.prodHeaderMenuItems.forEach((item) => {
            if (item.classList.contains('selected')) {
                item.classList.remove('selected');
            }
        });
    }
    handleBackgroundKeyDown(event) {
        if (event.key === 'Escape') {
            this.menuButton.focus();
            this.removeSelectedClass();
            this.closeMenu();
        }
        if (event.key === 'Tab' || event.key === 'Enter' || event.key === ' ') {
            this.removeSelectedClass();
            this.closeMenu();
            return true;
        }
    }
    handleMenuButtonClick() {
        this.isMenuOpen = !this.isMenuOpen;
        if (this.isMenuOpen) {
            //TODO: remove setTimeout if we can find a better way to handle focus - see ADO feature 134445
            setTimeout(() => {
                this.prodHeaderMenuItems[0].focus();
            }, 60);
        }
    }
    closeMenu() {
        //TODO: remove setTimeout if we can find a better way to handle focus - see ADO feature 134445
        setTimeout(() => {
            this.isMenuOpen = false;
        }, 60);
    }
}
__decorate([
    attr({ attribute: 'global-aria-label' })
], ProductHeader.prototype, "globalAriaLabel", void 0);
__decorate([
    attr({ attribute: 'tasks-aria-label' })
], ProductHeader.prototype, "tasksAriaLabel", void 0);
__decorate([
    attr({ attribute: 'is-menu-open' })
], ProductHeader.prototype, "isMenuOpen", void 0);
__decorate([
    observable
], ProductHeader.prototype, "_showDivider", void 0);
__decorate([
    attr({ attribute: 'has-menu-items' })
], ProductHeader.prototype, "_hasMenuItems", void 0);

export { ProductHeader };
