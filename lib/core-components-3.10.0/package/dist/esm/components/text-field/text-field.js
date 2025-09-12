import { __decorate } from 'tslib';
import { Updates, attr, nullableNumberConverter, observable, volatile } from '../../@microsoft/fast-element/dist/esm/index.js';
import { SafA11y } from '../../services/a11y.js';
import { applyMixins } from '../../utils/apply-mixins.js';
import '../../utils/index.js';
import { StartEnd } from '../../utils/start-end-template.js';
import { ARIAGlobalStatesAndProperties } from '../aria-global/aria-global.js';
import { FormAssociatedTextField } from './text-field.form-associated.js';
import { TextFieldTypeEnum } from './text-field.options.js';
import { ComponentDensityEnum } from '../../utils/global-enums.js';
import { concatLabelIds } from '../../utils/string-helpers.js';

/**
 * A Text Field Custom HTML Element.
 * Based largely on the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text | <input type="text" /> element }.
 * Not currently recommended for number input
 * @slot start - Content which can be provided before the input field
 * @slot end - Content which can be provided after the input field
 * @slot - The default slot for the label
 * @csspart label - The label
 * @csspart control - The logical control, the element wrapping the input field, including start and end slots
 * @csspart control - The text field element
 * @fires change - Fires a custom 'change' event when the value has changed
 *
 * @public
 */
class TextField extends FormAssociatedTextField {
    constructor() {
        super(...arguments);
        /**
         * Allows setting a type or mode of text.
         * @public
         * @remarks
         * HTML Attribute: type
         */
        this.type = TextFieldTypeEnum.text;
        /**
         * The initial value of the control.
         * @public
         */
        this.value = '';
        /**
         * Indicates the entered value does not conform to the format expected by the application.
         * @public
         * @remarks
         * invalid attribute: initializes as false
         */
        this.invalid = false;
        /**
         * Adds additional character to the label when text-field is required.
         * @public
         * @remarks
         * character to add on required radio group
         */
        this.requiredText = '*';
        /**
         * Defines a string value that labels the success icon, when icons are not just presentational but used to communicate status.
         * @a11y
         * @public
         */
        this.successAriaLabel = 'Success';
        /**
         * Defines a string value that labels the error icon, when icons are not just presentational but used to communicate status.
         * @a11y
         * @public
         */
        this.errorAriaLabel = 'Error';
        /**
         * Used to change the spacing in and around the component.
         *
         * @public
         */
        this.density = ComponentDensityEnum.inherit;
        this.canAnnounceValidation = false;
    }
    readOnlyChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.readOnly = this.readOnly;
            this.validate();
        }
    }
    autofocusChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.autofocus = this.autofocus;
            this.validate();
        }
    }
    placeholderChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.placeholder = this.placeholder;
        }
    }
    typeChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.type = this.type;
            if (this.proxy.value !== this.value) {
                this.value = this.proxy.value;
            }
            this.validate();
        }
    }
    listChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.setAttribute('list', this.list);
            this.validate();
        }
    }
    maxlengthChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.maxLength = this.maxlength;
            this.validate();
        }
    }
    minlengthChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.minLength = this.minlength;
            this.validate();
        }
    }
    patternChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.pattern = this.pattern;
            this.validate();
        }
    }
    sizeChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.size = this.size;
        }
    }
    spellcheckChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.spellcheck = this.spellcheck;
        }
    }
    enterKeyHintChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.enterKeyHint = this.enterKeyHint;
        }
    }
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        this.proxy.setAttribute('type', this.type);
        this.validate();
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
     * Selects all the text in the text field
     *
     * @public
     */
    select() {
        this.control.select();
        /**
         * The select event does not permeate the shadow DOM boundary.
         * This fn effectively proxies the select event,
         * emitting a `select` event whenever the internal
         * input emits a `select` event
         */
        this.$emit('select');
    }
    /**
     * Handles the internal input field's `input` event
     * @internal
     */
    handleTextInput() {
        this.value = this.control.value;
    }
    /**
     * Change event handler for inner input.
     * @remarks
     * "Change" events are not `composable` so they will not
     * permeate the shadow DOM boundary. This fn effectively proxies
     * the change event, emitting a `change` event whenever the internal
     * input emits a `change` event
     * @internal
     */
    handleChange() {
        this.$emit('change');
    }
    validate() {
        super.validate(this.control);
    }
    /**
     * The unique IDs of the label and validation messages (if defined)
     * Volatile decorator needed here because of the computed properties/conditionals
     * @public
     * @internal
     */
    get ariaLabelledbyIds() {
        var _a, _b;
        return concatLabelIds(this.id, {
            label: !!((_a = this.label) === null || _a === void 0 ? void 0 : _a.trim()),
            optionalText: !!((_b = this.optionalText) === null || _b === void 0 ? void 0 : _b.trim()),
            status: this.invalid || this.isSuccess,
        });
    }
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
    valueChanged(previous, next) {
        super.valueChanged(previous, next);
        if (this.type === 'password') {
            this.currentValue = '';
        }
    }
    currentValueChanged() {
        if (this.type !== 'password') {
            this.value = this.currentValue;
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    slottedDataChanged() {
        var _a;
        /*
         * The input element can't access datalist outside of shadow dom.
         * That's why we are cloning element here.
         * */
        if (this.dataLists) {
            this.dataLists.innerHTML = '';
            (_a = this.slottedData) === null || _a === void 0 ? void 0 : _a.forEach((element) => {
                this.dataLists.appendChild(element.cloneNode(true));
            });
        }
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
], TextField.prototype, "readOnly", void 0);
__decorate([
    attr({ mode: 'boolean' })
], TextField.prototype, "autofocus", void 0);
__decorate([
    attr
], TextField.prototype, "placeholder", void 0);
__decorate([
    attr
], TextField.prototype, "type", void 0);
__decorate([
    attr
], TextField.prototype, "list", void 0);
__decorate([
    attr({ converter: nullableNumberConverter })
], TextField.prototype, "maxlength", void 0);
__decorate([
    attr({ converter: nullableNumberConverter })
], TextField.prototype, "minlength", void 0);
__decorate([
    attr
], TextField.prototype, "pattern", void 0);
__decorate([
    attr({ converter: nullableNumberConverter })
], TextField.prototype, "size", void 0);
__decorate([
    attr({ mode: 'boolean' })
], TextField.prototype, "spellcheck", void 0);
__decorate([
    attr({ attribute: 'enterkeyhint' })
], TextField.prototype, "enterKeyHint", void 0);
__decorate([
    observable
], TextField.prototype, "defaultSlottedNodes", void 0);
__decorate([
    attr
], TextField.prototype, "id", void 0);
__decorate([
    observable
], TextField.prototype, "value", void 0);
__decorate([
    attr({ attribute: 'label' })
], TextField.prototype, "label", void 0);
__decorate([
    observable
], TextField.prototype, "slottedData", void 0);
__decorate([
    attr({ attribute: 'invalid', mode: 'boolean' }),
    observable
], TextField.prototype, "invalid", void 0);
__decorate([
    attr({ attribute: 'validation-message' }),
    observable
], TextField.prototype, "validationMessage", void 0);
__decorate([
    attr({ attribute: 'is-success', mode: 'boolean' }),
    observable
], TextField.prototype, "isSuccess", void 0);
__decorate([
    attr({ attribute: 'instructional-text' })
], TextField.prototype, "instructionalText", void 0);
__decorate([
    attr({ attribute: 'optional-text' })
], TextField.prototype, "optionalText", void 0);
__decorate([
    attr({ attribute: 'required-text' })
], TextField.prototype, "requiredText", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-description' }),
    observable
], TextField.prototype, "a11yAriaDescription", void 0);
__decorate([
    volatile
], TextField.prototype, "ariaLabelledbyIds", null);
__decorate([
    volatile
], TextField.prototype, "ariaDescribedbyIds", null);
__decorate([
    attr({ attribute: 'success-aria-label' }),
    observable
], TextField.prototype, "successAriaLabel", void 0);
__decorate([
    attr({ attribute: 'error-aria-label' }),
    observable
], TextField.prototype, "errorAriaLabel", void 0);
__decorate([
    attr
], TextField.prototype, "density", void 0);
__decorate([
    attr
], TextField.prototype, "autocomplete", void 0);
/**
 * Includes ARIA states and properties relating to the ARIA textbox role
 *
 * @internal
 */
class DelegatesARIATextbox {
}
applyMixins(DelegatesARIATextbox, ARIAGlobalStatesAndProperties);
applyMixins(TextField, StartEnd, DelegatesARIATextbox);

export { DelegatesARIATextbox, TextField };
