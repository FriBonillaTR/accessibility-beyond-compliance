import { __decorate } from 'tslib';
import { Updates, observable, attr, volatile } from '../../@microsoft/fast-element/dist/esm/index.js';
import { keySpace } from '@microsoft/fast-web-utilities';
import { SafA11y } from '../../services/a11y.js';
import '../../utils/index.js';
import { FormAssociatedCheckbox } from './checkbox.form-associated.js';
import { concatLabelIds } from '../../utils/string-helpers.js';

/**
 * A Checkbox Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#checkbox | ARIA checkbox }.
 *
 * @slot checked-indicator - The checked indicator
 * @slot indeterminate-indicator - The indeterminate indicator
 * @slot - The default slot for the label
 * @csspart control - The element representing the visual checkbox control
 * @csspart label - The label
 * @fires change - Emits a custom change event when the checked state changes
 *
 * @public
 */
class Checkbox extends FormAssociatedCheckbox {
    constructor() {
        super();
        /**
         * The element's value to be included in form submission when checked.
         * Default to "on" to reach parity with input[type="checkbox"]
         *
         * @internal
         */
        this.initialValue = 'on';
        /**
         * This is a state in which it's impossible to say whether the item is toggled on or off.
         */
        this.indeterminate = false;
        /**
         * @internal
         */
        this.keypressHandler = (e) => {
            if (this.disabled) {
                return;
            }
            switch (e.key) {
                case keySpace:
                    this.toggleChecked();
                    break;
            }
        };
        /**
         * @internal
         */
        this.clickHandler = (_e) => {
            if (!this.disabled) {
                this.toggleChecked();
            }
        };
        /**
         * Indicates the entered value does not conform to the format expected by the application.
         *
         * @public
         */
        this.invalid = false;
        /**
         * Defines a string value that labels the error icon, when icons are not just presentational but used to communicate status.
         *
         * @a11y
         * @public
         */
        this.errorAriaLabel = 'Error';
        this.checkedInternal = false;
        this.changeHandler = () => {
            if (!this.disabled) {
                this.checkedInternal = true;
                //@ts-ignore
                this.toggleChecked();
                this.checkedInternal = false;
            }
        };
        this.canAnnounceValidation = false;
        this.proxy.setAttribute('type', 'checkbox');
    }
    toggleChecked() {
        if (this.indeterminate) {
            this.indeterminate = false;
        }
        this.checked = !this.checked;
    }
    get internalId() {
        return this.id || 'control';
    }
    /**
     * The unique IDs of the label and validation messages (if defined)
     *
     * @internal
     * Volatile decorator needed here because of the computed properties/conditionals
     */
    get ariaLabelledbyIds() {
        var _a;
        return concatLabelIds(this.id, {
            label: !!((_a = this.defaultSlottedNodes) === null || _a === void 0 ? void 0 : _a.length),
            status: this.invalid,
        });
    }
    connectedCallback() {
        super.connectedCallback();
        this.syncCheckedState();
        Updates.enqueue(() => {
            this.canAnnounceValidation = true;
        });
    }
    syncCheckedState() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.checked = this.checked;
            this.proxy.indeterminate = this.indeterminate;
        }
        if (this.control instanceof HTMLInputElement) {
            this.control.checked = this.checked;
            this.control.indeterminate = this.indeterminate;
        }
    }
    updateForm() {
        const value = this.checked ? this.value : null;
        this.setFormValue(value, value);
    }
    checkedChanged(prev) {
        if (!this.dirtyChecked) {
            this.dirtyChecked = true;
        }
        this.currentChecked = this.checked;
        this.updateForm();
        this.syncCheckedState();
        if (prev !== undefined && this.checkedInternal) {
            this.$emit('change');
        }
        this.validate();
    }
    indeterminateChanged() {
        this.syncCheckedState();
    }
    invalidChanged() {
        this.announceValidation();
    }
    validationMessageChanged() {
        this.announceValidation();
    }
    announceValidation() {
        var _a;
        if (this.canAnnounceValidation &&
            ((_a = this.validationMessage) === null || _a === void 0 ? void 0 : _a.length) &&
            !this.disabled &&
            this.invalid) {
            this.canAnnounceValidation = false;
            SafA11y.announce(this.validationMessage, 'status');
            setTimeout(() => {
                this.canAnnounceValidation = true;
            }, 500);
        }
    }
}
__decorate([
    observable
], Checkbox.prototype, "defaultSlottedNodes", void 0);
__decorate([
    observable
], Checkbox.prototype, "indeterminate", void 0);
__decorate([
    attr
], Checkbox.prototype, "id", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-description' })
], Checkbox.prototype, "a11yAriaDescription", void 0);
__decorate([
    attr({ mode: 'boolean' })
], Checkbox.prototype, "invalid", void 0);
__decorate([
    attr({ attribute: 'validation-message' })
], Checkbox.prototype, "validationMessage", void 0);
__decorate([
    attr({ attribute: 'error-aria-label' }),
    observable
], Checkbox.prototype, "errorAriaLabel", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-label' })
], Checkbox.prototype, "a11yAriaLabel", void 0);
__decorate([
    volatile
], Checkbox.prototype, "ariaLabelledbyIds", null);

export { Checkbox };
