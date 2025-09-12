import { __decorate } from 'tslib';
import { attr, observable, nullableNumberConverter } from '../../@microsoft/fast-element/dist/esm/index.js';
import { DialogBase } from './dialogBase.js';

/**
 * A class derived from the Dialog foundation component
 */
class Dialog extends DialogBase {
    constructor() {
        super(...arguments);
        /**
         * Determines whether dialog is an alert with `role="alertdialog"`.
         *
         * @public
         */
        this.isAlert = false;
        /**
         * Determines whether header appears in dialog.
         *
         * @public
         */
        this.isHeader = true;
        /**
         * Determines whether footer appears in dialog.
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
         * Configures the {@link https://www.w3.org/TR/wai-aria-1.1/#aria-level | aria-level} of the subtitle element.
         *
         * @public
         */
        this.ariaSubtitleLevel = 3;
        /**
         * Indicates the element is modal. When modal, user mouse interaction will be limited to the contents of the element by a modal overlay. Clicks on the overlay will cause the dialog to emit a "dismiss" event.
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
         * Indicates whether or not the dialog should trap focus.
         */
        this.noFocusTrap = false;
        this.noFocusTrapChanged = () => {
            if (this.$fastController.isConnected) {
                this.updateTrapFocus();
            }
        };
    }
    get closeButtonElement() {
        var _a;
        return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.close');
    }
    get titleElement() {
        var _a;
        return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.dialog-title');
    }
    get isHidden() {
        return this.hidden;
    }
    set isHidden(value) {
        this.hidden = value;
    }
    get hideStateAttribute() {
        return 'hidden';
    }
    get isModal() {
        return this.modal;
    }
    get hasCancelEvent() {
        return true;
    }
    get openEventName() {
        return 'show';
    }
    get hideEventName() {
        return 'hide';
    }
    // Define if the component should prevent focus on trigger element when closing
    get preventTriggerFocus() {
        return false;
    }
    hide() {
        this._hide();
    }
    show() {
        this._show();
    }
}
__decorate([
    attr({ attribute: 'a11y-aria-label' })
], Dialog.prototype, "a11yAriaLabel", void 0);
__decorate([
    attr({ attribute: 'close-aria-label' }),
    observable
], Dialog.prototype, "closeAriaLabel", void 0);
__decorate([
    attr({ attribute: 'is-alert', mode: 'boolean' })
], Dialog.prototype, "isAlert", void 0);
__decorate([
    attr({ attribute: 'is-header', mode: 'boolean' })
], Dialog.prototype, "isHeader", void 0);
__decorate([
    attr({ attribute: 'is-footer', mode: 'boolean' })
], Dialog.prototype, "isFooter", void 0);
__decorate([
    attr({ attribute: 'dialog-title' })
], Dialog.prototype, "dialogTitle", void 0);
__decorate([
    attr({
        attribute: 'aria-title-level',
        mode: 'fromView',
        converter: nullableNumberConverter,
    })
], Dialog.prototype, "ariaTitleLevel", void 0);
__decorate([
    attr({ attribute: 'dialog-subtitle' })
], Dialog.prototype, "dialogSubtitle", void 0);
__decorate([
    attr({
        attribute: 'aria-subtitle-level',
        mode: 'fromView',
        converter: nullableNumberConverter,
    })
], Dialog.prototype, "ariaSubtitleLevel", void 0);
__decorate([
    attr({ mode: 'boolean' }),
    observable
], Dialog.prototype, "modal", void 0);
__decorate([
    attr({ mode: 'boolean' }),
    observable
], Dialog.prototype, "hidden", void 0);
__decorate([
    attr({ attribute: 'no-focus-trap', mode: 'boolean' })
], Dialog.prototype, "noFocusTrap", void 0);

export { Dialog };
