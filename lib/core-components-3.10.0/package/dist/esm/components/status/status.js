import { __decorate } from 'tslib';
import { FASTElement, attr, observable } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * A class for Status
 */
class Status extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Whether the item is focusable.
         *
         * @public
         */
        this.focusable = true;
        /**
         * The label for the paused icon to communicate status.
         *
         * @a11y
         * @public
         */
        this.pausedAriaLabel = 'Paused';
        /**
         * 	The label for the info icon to communicate status.
         *
         * @a11y
         * @public
         */
        this.infoAriaLabel = 'Info';
        /**
         * The label for the success icon to communicate status.
         *
         * @a11y
         * @public
         */
        this.successAriaLabel = 'Success';
        /**
         * The label for the error icon to communicate status.
         *
         * @a11y
         * @public
         */
        this.errorAriaLabel = 'Error';
        /**
         * The label for the warning icon to communicate status.
         *
         * @a11y
         * @public
         */
        this.warningAriaLabel = 'Warning';
    }
}
__decorate([
    attr({ attribute: 'message' })
], Status.prototype, "message", void 0);
__decorate([
    attr
], Status.prototype, "status", void 0);
__decorate([
    attr({ attribute: 'aria-labelledby' })
], Status.prototype, "ariaLabelledBy", void 0);
__decorate([
    attr({ mode: 'boolean', attribute: 'focusable' })
], Status.prototype, "focusable", void 0);
__decorate([
    attr({ attribute: 'aria-role' })
], Status.prototype, "ariaRole", void 0);
__decorate([
    attr({ attribute: 'paused-aria-label' }),
    observable
], Status.prototype, "pausedAriaLabel", void 0);
__decorate([
    attr({ attribute: 'info-aria-label' }),
    observable
], Status.prototype, "infoAriaLabel", void 0);
__decorate([
    attr({ attribute: 'success-aria-label' }),
    observable
], Status.prototype, "successAriaLabel", void 0);
__decorate([
    attr({ attribute: 'error-aria-label' }),
    observable
], Status.prototype, "errorAriaLabel", void 0);
__decorate([
    attr({ attribute: 'warning-aria-label' }),
    observable
], Status.prototype, "warningAriaLabel", void 0);

export { Status };
