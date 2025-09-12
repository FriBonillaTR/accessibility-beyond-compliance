import { __decorate } from 'tslib';
import { FASTElement, Updates, attr, observable } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { SafA11y } from '../../../services/a11y.js';

/**
 * Checkbox Group
 */
class CheckboxGroup extends FASTElement {
    constructor() {
        var _a;
        super(...arguments);
        this.supportsElementsInternals = true;
        this.form = (_a = this.closest('form')) !== null && _a !== void 0 ? _a : undefined;
        /**
         * Indicates the checkbox group is required.
         *
         * @public
         */
        this.required = false;
        /**
         * Defines a string value that labels the error icon, when icons are not just presentational but used to communicate status.
         *
         * @a11y
         * @public
         */
        this.errorAriaLabel = 'Error';
        /**
         * Indicates the entered value does not conform to the format expected by the application.
         *
         * @public
         */
        this.invalid = false;
        /**
         * Adds additional character to the label when checkbox-group is required.
         *
         * @public
         */
        this.requiredText = '*';
        /**
         * Provides additional ARIA text when the checkbox group is required.
         *
         * @a11y
         * @public
         */
        this.requiredAriaText = 'Please select an option';
        /**
         * Event runs when change happens on checkbox group.
         *
         * @internal
         */
        this.handleChange = () => {
            const selected = this.slottedNodes
                .filter((node) => node.checked && node.innerText)
                .reduce((acc, node) => node.innerText ? [...acc, node.innerText] : acc, []);
            this.value = selected;
            this.setValidity();
        };
        /**
         * Event runs when checkbox group is inside a <form> element
         * and the form is reset
         *
         * @internal
         */
        this.handleReset = () => {
            this.value = [];
            this.slottedNodes.map((node) => (node.checked = false));
            this.invalid = false;
        };
        this.setValidity = () => {
            var _a;
            // If no checkboxes are checked, invalid is true
            // and validation message is displayed
            this.invalid = ((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) < 1 && this.required;
            this.$emit('invalid', this.invalid);
        };
        this.canAnnounceValidation = false;
    }
    requiredAriaTextChanged(_oldValue, newValue) {
        if (!newValue) {
            this.requiredAriaText = 'Please select an option';
        }
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.form) {
            this.form.addEventListener('reset', this.handleReset);
        }
        Updates.enqueue(() => {
            this.canAnnounceValidation = true;
        });
    }
    invalidChanged() {
        this.announceValidation();
    }
    validationMessageChanged() {
        this.announceValidation();
    }
    announceValidation() {
        var _a;
        if (this.canAnnounceValidation && ((_a = this.validationMessage) === null || _a === void 0 ? void 0 : _a.length) && this.invalid) {
            this.canAnnounceValidation = false;
            SafA11y.announce(this.validationMessage, 'status');
            setTimeout(() => {
                this.canAnnounceValidation = true;
            }, 500);
        }
    }
}
__decorate([
    attr
], CheckboxGroup.prototype, "label", void 0);
__decorate([
    attr({ attribute: 'required', mode: 'boolean' })
], CheckboxGroup.prototype, "required", void 0);
__decorate([
    attr({ attribute: 'instructional-text' })
], CheckboxGroup.prototype, "instructionalText", void 0);
__decorate([
    attr({ attribute: 'optional-text' })
], CheckboxGroup.prototype, "optionalText", void 0);
__decorate([
    attr
], CheckboxGroup.prototype, "disabled", void 0);
__decorate([
    attr
], CheckboxGroup.prototype, "orientation", void 0);
__decorate([
    attr({ attribute: 'error-aria-label' }),
    observable
], CheckboxGroup.prototype, "errorAriaLabel", void 0);
__decorate([
    attr({ attribute: 'invalid', mode: 'boolean' }),
    observable
], CheckboxGroup.prototype, "invalid", void 0);
__decorate([
    attr({ attribute: 'validation-message' })
], CheckboxGroup.prototype, "validationMessage", void 0);
__decorate([
    attr({ attribute: 'required-text' })
], CheckboxGroup.prototype, "requiredText", void 0);
__decorate([
    attr({ attribute: 'required-aria-text' }),
    observable
], CheckboxGroup.prototype, "requiredAriaText", void 0);
__decorate([
    observable
], CheckboxGroup.prototype, "value", void 0);

export { CheckboxGroup };
