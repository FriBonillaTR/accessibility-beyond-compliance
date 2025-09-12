import { __decorate } from 'tslib';
import { attr, observable, nullableNumberConverter } from '../../@microsoft/fast-element/dist/esm/index.js';
import { DrawerPlacementEnum } from './drawer.options.js';
import { DialogBase } from '../dialog/dialogBase.js';

class Drawer extends DialogBase {
    constructor() {
        super(...arguments);
        /**
         * Determines whether header appears in the drawer.
         *
         * @public
         */
        this.isHeader = true;
        /**
         * Determines whether footer appears in the drawer.
         *
         * @public
         */
        this.isFooter = false;
        /**
         * Configures the {@link https://www.w3.org/TR/wai-aria-1.1/#aria-level | aria-level} of the heading element.
         *
         * @public
         */
        this.ariaTitleLevel = 2;
        /**
         * Configures the {@link https://www.w3.org/TR/wai-aria-1.1/#aria-level | aria-level} of the heading element.
         *
         * @public
         */
        this.ariaSubtitleLevel = 3;
        /**
         * Indicates the element is modal. When modal, user mouse interaction will be limited to the contents of the element by a modal overlay.  Clicks on the overlay will cause the drawer to emit a "dismiss" event.
         *
         * @public
         */
        this.modal = true;
        /**
         * The hidden state of the element.
         *
         * @public
         */
        this.hidden = true;
        /**
         * Determines the drawer placement.
         *
         * @public
         */
        this.placement = DrawerPlacementEnum.right;
        this.handleKeyDown = (event) => {
            if (event.key === 'Escape' && this.depth === 0) {
                event.stopPropagation();
                this.dismiss();
            }
        };
        /**
         * Indicates whether or not the drawer should trap focus.
         */
        this.noFocusTrap = false;
        this.noFocusTrapChanged = () => {
            if (this.$fastController.isConnected) {
                this.updateTrapFocus();
            }
        };
    }
    ariaLabelledbyIds() {
        if (!this.drawerTitle)
            return;
        let ids = ``;
        ids += `drawer-title-${this.id}`;
        return ids;
    }
    get closeButtonElement() {
        var _a;
        return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.close');
    }
    get titleElement() {
        var _a;
        return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.drawer-title');
    }
    // Define how to get the hidden state
    get isHidden() {
        return this.hidden;
    }
    // Define how to set the hidden state
    set isHidden(value) {
        this.hidden = value;
    }
    // Define the specific hidden state attribute
    get hideStateAttribute() {
        return 'hidden';
    }
    // Define if modal
    get isModal() {
        return this.modal;
    }
    // Define if component supports the cancel event
    get hasCancelEvent() {
        return true;
    }
    // Define the component's 'open' event name
    get openEventName() {
        return 'show';
    }
    // Define the component's 'close' event name
    get hideEventName() {
        return 'hide';
    }
    // Define if the component should prevent focus on trigger element when closing
    get preventTriggerFocus() {
        return false;
    }
    show() {
        this.hidden = false;
    }
    hide() {
        this.hidden = true;
    }
    dismiss() {
        if (this.depth === 0) {
            this.hide();
            this.dispatchEvent(new CustomEvent('dismiss', { bubbles: true }));
            this.dispatchEvent(new CustomEvent('cancel', { bubbles: true }));
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('keydown', this.handleKeyDown);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('keydown', this.handleKeyDown);
    }
}
__decorate([
    attr({ attribute: 'close-aria-label' }),
    observable
], Drawer.prototype, "closeAriaLabel", void 0);
__decorate([
    attr({ attribute: 'is-header', mode: 'boolean' })
], Drawer.prototype, "isHeader", void 0);
__decorate([
    attr({ attribute: 'is-footer', mode: 'boolean' })
], Drawer.prototype, "isFooter", void 0);
__decorate([
    attr({ attribute: 'drawer-title' })
], Drawer.prototype, "drawerTitle", void 0);
__decorate([
    attr({
        attribute: 'aria-title-level',
        mode: 'fromView',
        converter: nullableNumberConverter,
    })
], Drawer.prototype, "ariaTitleLevel", void 0);
__decorate([
    attr({ attribute: 'drawer-subtitle' })
], Drawer.prototype, "drawerSubtitle", void 0);
__decorate([
    attr({
        attribute: 'aria-subtitle-level',
        mode: 'fromView',
        converter: nullableNumberConverter,
    })
], Drawer.prototype, "ariaSubtitleLevel", void 0);
__decorate([
    attr({ mode: 'boolean' }),
    observable
], Drawer.prototype, "modal", void 0);
__decorate([
    attr({ mode: 'boolean' }),
    observable
], Drawer.prototype, "hidden", void 0);
__decorate([
    attr({ attribute: 'placement' })
], Drawer.prototype, "placement", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-label' })
], Drawer.prototype, "a11yAriaLabel", void 0);
__decorate([
    attr({ attribute: 'no-focus-trap', mode: 'boolean' })
], Drawer.prototype, "noFocusTrap", void 0);

export { Drawer };
