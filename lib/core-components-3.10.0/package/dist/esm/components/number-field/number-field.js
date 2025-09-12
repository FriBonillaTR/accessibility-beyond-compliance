import { __decorate } from 'tslib';
import { Updates, attr, nullableNumberConverter, observable, volatile } from '../../@microsoft/fast-element/dist/esm/index.js';
import { keyPageUp, keyPageDown, keyHome, keyEnd, keyArrowDown, keyArrowUp } from '@microsoft/fast-web-utilities';
import { SafA11y } from '../../services/a11y.js';
import { applyMixins } from '../../utils/apply-mixins.js';
import '../../utils/index.js';
import { StartEnd } from '../../utils/start-end-template.js';
import { DelegatesARIATextbox } from '../text-field/text-field.js';
import { FormAssociatedNumberField } from './number-field.form-associated.js';
import { ComponentDensityEnum } from '../../utils/global-enums.js';
import { concatLabelIds } from '../../utils/string-helpers.js';

const MAX_NUMBER_LENGTH = 15;
function parseToPrecision(value) {
    const length = value.replace('.', '').replace('-', '').length;
    return parseFloat(value).toPrecision(length > MAX_NUMBER_LENGTH ? MAX_NUMBER_LENGTH : length);
}
/**
 * A class derived from the NumberField foundation component
 */
class NumberField extends FormAssociatedNumberField {
    constructor() {
        super(...arguments);
        /**
         * When true, spin buttons will not be rendered
         * @public
         * @remarks
         * HTML Attribute: autofocus
         */
        this.hideStep = false;
        /**
         * Amount to increment or decrement the value by
         * @public
         * @remarks
         * HTMLAttribute: step
         */
        this.step = 1;
        /**
         * Flag to indicate that the value change is from the user input
         * @internal
         */
        this.isUserInput = false;
        this.supportsElementInternal = true;
        /**
         * Indicates the entered value does not conform to the format expected by the application.
         *
         * @public
         */
        this.invalid = false;
        /**
         * Defines a string value that labels the success icon, when icons are not just presentational but used to communicate status.
         *
         * @public
         * @a11y
         */
        this.successAriaLabel = 'Success';
        /**
         * Defines a string value that labels the error icon, when icons are not just presentational but used to communicate status.
         *
         * @public
         * @a11y
         */
        this.errorAriaLabel = 'Error';
        /**
         * Adds additional character to the label when number-field is required.
         *
         * @public
         */
        this.requiredText = '*';
        /**
         * Used to change the spacing in and around the component.
         *
         * @public
         */
        this.density = ComponentDensityEnum.inherit;
        this.prevValue = '';
        this.canAnnounceValidation = false;
    }
    /**
     * Ensures that the max is greater than the min and that the value
     *  is less than the max
     * @param previous - the previous max value
     * @param next - updated max value
     *
     * @internal
     */
    maxChanged(previous, next) {
        var _a;
        this.max = Math.max(next, (_a = this.min) !== null && _a !== void 0 ? _a : next);
        const min = Math.min(this.min, this.max);
        if (this.min !== undefined && this.min !== min) {
            this.min = min;
        }
        this.value = this.getValidValue(this.value);
    }
    /**
     * Ensures that the min is less than the max and that the value
     *  is greater than the min
     * @param previous - previous min value
     * @param next - updated min value
     *
     * @internal
     */
    minChanged(previous, next) {
        var _a;
        this.min = Math.min(next, (_a = this.max) !== null && _a !== void 0 ? _a : next);
        const max = Math.max(this.min, this.max);
        if (this.max !== undefined && this.max !== max) {
            this.max = max;
        }
        this.value = this.getValidValue(this.value);
    }
    /**
     * The value property, typed as a number.
     *
     * @public
     */
    get valueAsNumber() {
        return parseFloat(super.value);
    }
    set valueAsNumber(next) {
        this.value = next.toString();
    }
    /**
     * Validates that the value is a number between the min and max
     * @param previous - previous stored value
     * @param next - value being updated
     * @internal
     */
    valueChanged(previous, next) {
        var _a;
        const value = this.getValidValue(next);
        if (next !== value) {
            this.value = value;
            return;
        }
        if (this.$fastController.isConnected && ((_a = this.control) === null || _a === void 0 ? void 0 : _a.value) !== value) {
            this.control.value = this.value;
        }
        super.valueChanged(previous, this.value);
        if (previous !== undefined && !this.isUserInput) {
            this.$emit('input');
            this.$emit('change');
        }
        this.isUserInput = false;
    }
    validate() {
        super.validate(this.control);
    }
    /**
     * Sets the internal value to a valid number between the min and max properties
     * @param value - user input
     *
     * @internal
     */
    getValidValue(value) {
        if (value === '') {
            return '';
        }
        const val = value === '-' ? '-0' : value;
        const integerLength = !val ? 0 : val.split('.')[0].replace('-', '').length;
        let validValue = this.isUserInput
            ? value
            : parseFloat(value)
                .toFixed(integerLength === MAX_NUMBER_LENGTH - 1 ? 1 : 2)
                .replace(/(\.0+|0+)$/, '');
        if (validValue && !/^-?(?:\d+(\.\d{0,2})?|\.\d{1,2}|\d+)?$/.test(validValue)) {
            return this.prevValue;
        }
        if (isNaN(parseFloat(val))) {
            validValue = '';
        }
        else {
            const length = validValue.replace('.', '').replace('-', '').length;
            if (length > MAX_NUMBER_LENGTH) {
                return this.prevValue;
            }
            const numericValue = parseFloat(parseToPrecision(val));
            const minValue = this.min !== undefined ? this.min : numericValue;
            const maxValue = this.max !== undefined ? this.max : numericValue;
            if (numericValue > Number.MAX_SAFE_INTEGER) {
                validValue = Number.MAX_SAFE_INTEGER.toString();
            }
            // Check if the value falls within the valid range
            if (numericValue < minValue) {
                validValue = minValue.toString();
            }
            else if (numericValue > maxValue) {
                validValue = maxValue.toString();
            }
        }
        this.prevValue = validValue;
        return validValue;
    }
    /**
     * Increments the value using the step value
     *
     * @public
     */
    stepUp() {
        const value = parseFloat(this.value);
        const stepUpValue = !isNaN(value)
            ? value + this.step
            : this.min > 0
                ? this.min
                : this.max < 0
                    ? this.max
                    : !this.min
                        ? this.step
                        : 0;
        this.value = stepUpValue.toString();
    }
    /**
     * Decrements the value using the step value
     *
     * @public
     */
    stepDown() {
        const value = parseFloat(this.value);
        const stepDownValue = !isNaN(value)
            ? value - this.step
            : this.min > 0
                ? this.min
                : this.max < 0
                    ? this.max
                    : !this.min
                        ? 0 - this.step
                        : 0;
        this.value = stepDownValue.toString();
    }
    /**
     * Sets up the initial state of the number field
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        this.proxy.setAttribute('type', 'number');
        this.validate();
        this.control.value = this.value;
        if (this.autofocus) {
            Updates.enqueue(() => {
                this.focus();
            });
        }
        Updates.enqueue(() => {
            this.canAnnounceValidation = true;
        });
    }
    /**
     * Selects all the text in the number field
     *
     * @public
     */
    select() {
        this.control.select();
        /**
         * The select event does not permeate the shadow DOM boundary.
         * This fn effectively proxies the select event,
         * emitting a `select` event whenever the internal
         * control emits a `select` event
         */
        this.$emit('select');
    }
    /**
     * Handles the internal input field's `input` event
     * @internal
     */
    handleTextInput() {
        this.control.value = this.control.value.replace(/[^0-9\-+e.]/g, '');
        this.isUserInput = true;
        this.value = this.control.value;
    }
    /**
     * Change event handler for inner control.
     * @remarks
     * "Change" events are not `composable` so they will not
     * permeate the shadow DOM boundary. This fn effectively proxies
     * the change event, emitting a `change` event whenever the internal
     * control emits a `change` event
     * @internal
     */
    handleChange() {
        this.$emit('change');
    }
    /**
     * Handles the internal control's `keydown` event
     * @internal
     */
    handleKeyDown(e) {
        if (this.disabled || this.readOnly) {
            return true;
        }
        const key = (e.key || e.key.charCodeAt(0));
        const specialKeys = [keyPageUp, keyPageDown, keyHome, keyEnd];
        if (!specialKeys.includes(key)) {
            if (this.disabled || this.readOnly) {
                return true;
            }
            const key = e.key;
            switch (key) {
                case keyArrowUp:
                    this.stepUp();
                    return false;
                case keyArrowDown:
                    this.stepDown();
                    return false;
            }
            return true;
        }
        e.preventDefault();
        if (key === keyPageUp) {
            const val = +this.value + this.step * 5;
            this.value = `${val > this.max ? this.max : val}`;
        }
        else if (key === keyPageDown) {
            const val = +this.value - this.step * 5;
            this.value = `${val < this.min ? this.min : val}`;
        }
        else if (key === keyHome && this.min !== undefined) {
            this.value = `${this.min}`;
        }
        else if (key === keyEnd && this.max !== undefined) {
            this.value = `${this.max}`;
        }
        return true;
    }
    /**
     * Handles populating the input field with a validated value when
     * leaving the input field.
     * @internal
     */
    handleBlur() {
        this.control.value = this.value;
    }
    /**
     * @internal
     * @remarks
     * The unique IDs of the label and validation messages (if defined)
     * Volatile decorator needed here because of the computed properties/conditionals
     */
    get ariaLabelledbyIds() {
        var _a, _b;
        return concatLabelIds(this.id, {
            label: !!((_a = this.label) === null || _a === void 0 ? void 0 : _a.trim()),
            optionalText: !!((_b = this.optionalText) === null || _b === void 0 ? void 0 : _b.trim()),
            status: this.invalid || this.isSuccess,
        });
    }
    /**
     * @internal
     * @remarks
     * The unique IDs of instructional text and additional a11y description
     */
    get ariaDescribedbyIds() {
        let ids = '';
        if (this.instructionalText) {
            ids += `instructional-${this.id}`;
        }
        if (this.a11yAriaDescription) {
            ids += ` a11y-aria-description`;
        }
        return ids;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    isSuccessChanged() {
        this.announceValidation();
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
            ((this.isSuccess && !this.invalid) || this.invalid)) {
            this.canAnnounceValidation = false;
            SafA11y.announce(this.validationMessage, 'status');
            setTimeout(() => {
                this.canAnnounceValidation = true;
            }, 500);
        }
    }
}
__decorate([
    attr({ attribute: 'readonly', mode: 'boolean' })
], NumberField.prototype, "readOnly", void 0);
__decorate([
    attr({ mode: 'boolean' })
], NumberField.prototype, "autofocus", void 0);
__decorate([
    attr({ attribute: 'hide-step', mode: 'boolean' })
], NumberField.prototype, "hideStep", void 0);
__decorate([
    attr
], NumberField.prototype, "placeholder", void 0);
__decorate([
    attr
], NumberField.prototype, "list", void 0);
__decorate([
    attr({ converter: nullableNumberConverter })
], NumberField.prototype, "maxlength", void 0);
__decorate([
    attr({ converter: nullableNumberConverter })
], NumberField.prototype, "minlength", void 0);
__decorate([
    attr({ converter: nullableNumberConverter })
], NumberField.prototype, "size", void 0);
__decorate([
    attr({ converter: nullableNumberConverter })
], NumberField.prototype, "step", void 0);
__decorate([
    attr({ converter: nullableNumberConverter })
], NumberField.prototype, "max", void 0);
__decorate([
    attr({ converter: nullableNumberConverter })
], NumberField.prototype, "min", void 0);
__decorate([
    observable
], NumberField.prototype, "defaultSlottedNodes", void 0);
__decorate([
    attr({ attribute: 'label' })
], NumberField.prototype, "label", void 0);
__decorate([
    attr({ attribute: 'instructional-text' })
], NumberField.prototype, "instructionalText", void 0);
__decorate([
    attr({ attribute: 'optional-text' })
], NumberField.prototype, "optionalText", void 0);
__decorate([
    attr({ attribute: 'invalid', mode: 'boolean' }),
    observable
], NumberField.prototype, "invalid", void 0);
__decorate([
    attr({ attribute: 'validation-message' })
], NumberField.prototype, "validationMessage", void 0);
__decorate([
    attr({ attribute: 'is-success', mode: 'boolean' }),
    observable
], NumberField.prototype, "isSuccess", void 0);
__decorate([
    attr({ attribute: 'success-aria-label' }),
    observable
], NumberField.prototype, "successAriaLabel", void 0);
__decorate([
    attr({ attribute: 'error-aria-label' }),
    observable
], NumberField.prototype, "errorAriaLabel", void 0);
__decorate([
    attr({ attribute: 'required-text' })
], NumberField.prototype, "requiredText", void 0);
__decorate([
    volatile
], NumberField.prototype, "ariaLabelledbyIds", null);
__decorate([
    attr({ attribute: 'a11y-aria-description' }),
    observable
], NumberField.prototype, "a11yAriaDescription", void 0);
__decorate([
    volatile
], NumberField.prototype, "ariaDescribedbyIds", null);
__decorate([
    attr
], NumberField.prototype, "density", void 0);
__decorate([
    attr
], NumberField.prototype, "autocomplete", void 0);
applyMixins(NumberField, StartEnd, DelegatesARIATextbox);

export { NumberField };
