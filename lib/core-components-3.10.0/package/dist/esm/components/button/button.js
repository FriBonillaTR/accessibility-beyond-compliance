import { __decorate } from 'tslib';
import { FASTElement, Updates, attr, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import { applyMixins } from '../../utils/apply-mixins.js';
import { StartEnd } from '../../utils/start-end-template.js';
import { ARIAGlobalStatesAndProperties } from '../aria-global/aria-global.js';
import { FormAssociatedButton } from './button.form-associated.js';
import { ButtonTypeEnum } from './button.options.js';
import '../../utils/index.js';
import { ComponentDensityWithExtraCompactEnum } from '../../utils/global-enums.js';

/**
 * contains attributes and logic related to buttons in general (i.e. disabled, autofocus, aria attributes)
 */
class ButtonBase extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Prevents the user from interacting with the component.
         */
        this.disabled = false;
    }
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        if (this.autofocus) {
            Updates.enqueue(() => {
                this.focus();
            });
        }
    }
}
__decorate([
    attr({ mode: 'boolean' })
], ButtonBase.prototype, "disabled", void 0);
__decorate([
    attr({ mode: 'boolean' })
], ButtonBase.prototype, "autofocus", void 0);
__decorate([
    observable
], ButtonBase.prototype, "defaultSlottedContent", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-description' })
], ButtonBase.prototype, "a11yAriaDescription", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-controls' })
], ButtonBase.prototype, "ariaControls", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-haspopup' })
], ButtonBase.prototype, "ariaHaspopup", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-expanded' })
], ButtonBase.prototype, "ariaExpanded", void 0);
__decorate([
    attr({ attribute: 'aria-pressed' })
], ButtonBase.prototype, "ariaPressed", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-label' })
], ButtonBase.prototype, "a11yAriaLabel", void 0);
__decorate([
    attr({ attribute: 'a11y-role' })
], ButtonBase.prototype, "a11yRole", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-valuenow' })
], ButtonBase.prototype, "a11yAriaValueNow", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-valuemin' })
], ButtonBase.prototype, "a11yAriaValueMin", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-valuemax' })
], ButtonBase.prototype, "a11yAriaValueMax", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-orientation' })
], ButtonBase.prototype, "a11yAriaOrientation", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-roledescription' })
], ButtonBase.prototype, "a11yAriaRoleDescription", void 0);
__decorate([
    attr({ attribute: 'aria-selected' })
], ButtonBase.prototype, "ariaSelected", void 0);
/**
 * contains attributes and logic related to Saffron button (i.e. density, layout, shape)
 */
class Button extends ButtonBase {
    constructor() {
        super(...arguments);
        /**
         * Determines the visual appearance of the button.
         *
         * @public
         */
        this.appearance = 'primary';
        /**
         * If set to `block`, will have the button expand to the full width of its container
         *
         * @public
         */
        this.layout = undefined;
        /**
         * Used to change the spacing in and around the component
         *
         * @public
         */
        this.density = ComponentDensityWithExtraCompactEnum.inherit;
    }
}
__decorate([
    attr
], Button.prototype, "appearance", void 0);
__decorate([
    attr
], Button.prototype, "shape", void 0);
__decorate([
    attr({ attribute: 'icon-only', mode: 'boolean' })
], Button.prototype, "iconOnly", void 0);
__decorate([
    attr({ attribute: 'nested-item', mode: 'boolean' })
], Button.prototype, "nestedItem", void 0);
__decorate([
    attr
], Button.prototype, "layout", void 0);
__decorate([
    attr
], Button.prototype, "density", void 0);
/**
 * contains attributes and logic related to form associated buttons (i.e. name, value, form submission logic)
 */
class FormButton extends FormAssociatedButton {
    constructor() {
        super(...arguments);
        /**
         * Submits the parent form
         */
        this.handleSubmission = () => {
            if (!this.form) {
                return;
            }
            const attached = this.proxy.isConnected;
            if (!attached) {
                this.attachProxy();
            }
            // Browser support for requestSubmit is not comprehensive
            // so click the proxy if it isn't supported
            typeof this.form.requestSubmit === 'function'
                ? this.form.requestSubmit(this.proxy)
                : this.proxy.click();
            if (!attached) {
                this.detachProxy();
            }
        };
        /**
         * Resets the parent form
         */
        this.handleFormReset = () => {
            var _a;
            (_a = this.form) === null || _a === void 0 ? void 0 : _a.reset();
        };
    }
    autofocusChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.autofocus = this.autofocus;
        }
    }
    formactionChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.formAction = this.formaction;
        }
    }
    formenctypeChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.formEnctype = this.formenctype;
        }
    }
    formmethodChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.formMethod = this.formmethod;
        }
    }
    formnovalidateChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.formNoValidate = this.formnovalidate;
        }
    }
    formtargetChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.formTarget = this.formtarget;
        }
    }
    typeChanged(previous, next) {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.type = this.type;
        }
        next === ButtonTypeEnum.submit && this.addEventListener('click', this.handleSubmission);
        previous === ButtonTypeEnum.submit &&
            this.removeEventListener('click', this.handleSubmission);
        next === ButtonTypeEnum.reset && this.addEventListener('click', this.handleFormReset);
        previous === ButtonTypeEnum.reset &&
            this.removeEventListener('click', this.handleFormReset);
    }
    validate() {
        super.validate(this.control);
    }
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        this.proxy.setAttribute('type', this.type);
        if (this.autofocus) {
            Updates.enqueue(() => {
                this.focus();
            });
        }
    }
    // eslint-disable-next-line no-undef
    focus(options) {
        var _a;
        // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
        const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('button.control');
        btn.focus(options);
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    _keypressHandler() { }
}
__decorate([
    attr({ attribute: 'form' })
], FormButton.prototype, "formId", void 0);
__decorate([
    attr
], FormButton.prototype, "formaction", void 0);
__decorate([
    attr
], FormButton.prototype, "formenctype", void 0);
__decorate([
    attr
], FormButton.prototype, "formmethod", void 0);
__decorate([
    attr({ mode: 'boolean' })
], FormButton.prototype, "formnovalidate", void 0);
__decorate([
    attr
], FormButton.prototype, "formtarget", void 0);
__decorate([
    attr
], FormButton.prototype, "type", void 0);
applyMixins(ButtonBase, ARIAGlobalStatesAndProperties);
applyMixins(FormButton, StartEnd, Button);

export { Button, ButtonBase, FormButton };
