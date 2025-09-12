import { __decorate } from 'tslib';
import { Updates, attr, nullableNumberConverter, observable, volatile } from '../../@microsoft/fast-element/dist/esm/index.js';
import { SafA11y } from '../../services/a11y.js';
import { applyMixins } from '../../utils/apply-mixins.js';
import '../../utils/index.js';
import { StartEnd } from '../../utils/start-end-template.js';
import { DelegatesARIATextbox } from '../text-field/text-field.js';
import { FormAssociatedTextArea } from './text-area.form-associated.js';
import { TextAreaResizeEnum } from './text-area.options.js';
import { ComponentDensityEnum } from '../../utils/global-enums.js';
import { concatLabelIds } from '../../utils/string-helpers.js';

/**
 * A Text Area Custom HTML Element.
 * Based largely on the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea | <textarea> element }.
 *
 * @slot start - Content which can be provided before the text area input
 * @slot end - Content which can be provided after the text area input
 * @slot - The default slot for the label
 * @csspart root - The element wrapping the control
 * @csspart control - The textarea element
 * @fires change - Emits a custom 'change' event when the textarea emits a change event
 *
 * @public
 */
class TextArea extends FormAssociatedTextArea {
    constructor() {
        super(...arguments);
        /**
         * The resize mode of the element.
         * @public
         * @remarks
         * HTML Attribute: resize
         */
        this.resize = TextAreaResizeEnum.both;
        /**
         * Sizes the element horizontally by a number of character columns.
         *
         * @public
         * @remarks
         * HTML Attribute: cols
         */
        this.cols = 20;
        /**
         * @internal
         */
        this.handleTextInput = () => {
            this.value = this.control.value;
        };
        /**
         * Indicates the entered value does not conform to the format expected by the application.
         * @public
         */
        this.invalid = false;
        /**
         * The message displayed when the control is valid or invalid.
         *
         * @public
         * @remarks
         * validation-message accepts the custom validation that shows up
         * when isSuccess is true or invalid is true
         * otherwise, the default Constraint Validation message should show up
         */
        this.validationMessage = '';
        /**
         * Defines a string value that labels the error icon, when icons are not just presentational but used to communicate status.
         *
         * @public
         * @a11y
         */
        this.errorAriaLabel = 'Error';
        /**
         * A value is required or must be checked for the form to be submittable.
         *
         * @public
         */
        this.required = false;
        /**
         * Adds additional character to the label when text-area is required.
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
        /**
         * Controls whether or not to enable display of remaining character count.
         *
         * @public
         */
        this.showRemainingText = false;
        this.remainingCharactersCountDelay = 1000;
        this.canAnnounceValidation = false;
    }
    readOnlyChanged() {
        if (this.proxy instanceof HTMLTextAreaElement) {
            this.proxy.readOnly = this.readOnly;
        }
    }
    autofocusChanged() {
        if (this.proxy instanceof HTMLTextAreaElement) {
            this.proxy.autofocus = this.autofocus;
        }
    }
    listChanged() {
        if (this.proxy instanceof HTMLTextAreaElement) {
            this.proxy.setAttribute('list', this.list);
        }
    }
    maxlengthChanged() {
        if (this.proxy instanceof HTMLTextAreaElement) {
            this.proxy.maxLength = this.maxlength;
        }
    }
    minlengthChanged() {
        if (this.proxy instanceof HTMLTextAreaElement) {
            this.proxy.minLength = this.minlength;
        }
    }
    spellcheckChanged() {
        if (this.proxy instanceof HTMLTextAreaElement) {
            this.proxy.spellcheck = this.spellcheck;
        }
    }
    /**
     * Selects all the text in the text area
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
            status: this.invalid,
        });
    }
    /**
     * @internal
     * @remarks
     * The unique IDs of the instruction and additional accessibility description
     */
    get ariaDescribedbyIds() {
        let ids = '';
        if (this.instructionalText) {
            ids += `instructional-${this.id}`;
        }
        if (this.a11yAriaDescription) {
            ids += ` a11y-aria-description`;
        }
        if (this.showRemainingText) {
            ids += ` charactercount-reader`;
        }
        return ids;
    }
    get remainingCharactersTextDefault() {
        return this.remainingCharactersCounter === 1
            ? 'character remaining'
            : 'characters remaining';
    }
    get remainingCharactersCounter() {
        if (!this.maxlength && this.showRemainingText)
            this.maxlength = 200;
        return this.maxlength - this.value.length;
    }
    // prevents the form from being submitted after the Enter key is pressed
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    _keypressHandler() { }
    connectedCallback() {
        super.connectedCallback();
        this.remainingCharactersCounterReader = this.remainingCharactersCounter;
        Updates.enqueue(() => {
            this.canAnnounceValidation = true;
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    keyupHandler() {
        this.updateCharactersCounterReader(this.remainingCharactersCountDelay);
    }
    updateCharactersCounterReader(delay) {
        clearTimeout(this.remainingCharacterCountTimeout);
        this.remainingCharacterCountTimeout = setTimeout(() => {
            this.remainingCharactersCounterReader = this.remainingCharactersCounter;
        }, delay);
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
    attr({ mode: 'boolean' })
], TextArea.prototype, "readOnly", void 0);
__decorate([
    attr
], TextArea.prototype, "resize", void 0);
__decorate([
    attr({ mode: 'boolean' })
], TextArea.prototype, "autofocus", void 0);
__decorate([
    attr({ attribute: 'form' })
], TextArea.prototype, "formId", void 0);
__decorate([
    attr
], TextArea.prototype, "list", void 0);
__decorate([
    attr({ converter: nullableNumberConverter })
], TextArea.prototype, "maxlength", void 0);
__decorate([
    attr({ converter: nullableNumberConverter })
], TextArea.prototype, "minlength", void 0);
__decorate([
    attr
], TextArea.prototype, "name", void 0);
__decorate([
    attr
], TextArea.prototype, "placeholder", void 0);
__decorate([
    attr({ converter: nullableNumberConverter, mode: 'fromView' })
], TextArea.prototype, "cols", void 0);
__decorate([
    attr({ converter: nullableNumberConverter, mode: 'fromView' })
], TextArea.prototype, "rows", void 0);
__decorate([
    attr({ mode: 'boolean' })
], TextArea.prototype, "spellcheck", void 0);
__decorate([
    observable
], TextArea.prototype, "defaultSlottedNodes", void 0);
__decorate([
    attr({ attribute: 'invalid', mode: 'boolean' }),
    observable
], TextArea.prototype, "invalid", void 0);
__decorate([
    attr({ attribute: 'label' })
], TextArea.prototype, "label", void 0);
__decorate([
    attr({ attribute: 'instructional-text' })
], TextArea.prototype, "instructionalText", void 0);
__decorate([
    attr({ attribute: 'optional-text' })
], TextArea.prototype, "optionalText", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-description' }),
    observable
], TextArea.prototype, "a11yAriaDescription", void 0);
__decorate([
    attr({ attribute: 'validation-message' })
], TextArea.prototype, "validationMessage", void 0);
__decorate([
    attr({ attribute: 'error-aria-label' }),
    observable
], TextArea.prototype, "errorAriaLabel", void 0);
__decorate([
    attr({ attribute: 'required', mode: 'boolean' })
], TextArea.prototype, "required", void 0);
__decorate([
    attr({ attribute: 'required-text' })
], TextArea.prototype, "requiredText", void 0);
__decorate([
    volatile
], TextArea.prototype, "ariaLabelledbyIds", null);
__decorate([
    volatile
], TextArea.prototype, "ariaDescribedbyIds", null);
__decorate([
    attr
], TextArea.prototype, "density", void 0);
__decorate([
    attr({ attribute: 'show-remaining-text' })
], TextArea.prototype, "showRemainingText", void 0);
__decorate([
    observable
], TextArea.prototype, "remainingCharactersCounterReader", void 0);
__decorate([
    attr
], TextArea.prototype, "autocomplete", void 0);
applyMixins(TextArea, StartEnd, DelegatesARIATextbox);

export { TextArea };
