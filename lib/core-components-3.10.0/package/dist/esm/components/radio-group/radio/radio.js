import { __decorate } from 'tslib';
import { observable, attr, volatile } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { keySpace } from '@microsoft/fast-web-utilities';
import '../../../utils/index.js';
import { FormAssociatedRadio } from './radio.form-associated.js';
import { concatLabelIds } from '../../../utils/string-helpers.js';

/**
 * A Radio Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#radio | ARIA radio }.
 *
 * @slot checked-indicator - The checked indicator
 * @slot - The default slot for the label
 * @csspart control - The element representing the visual radio control
 * @csspart label - The label
 * @fires change - Emits a custom change event when the checked state changes
 *
 * @public
 */
class Radio extends FormAssociatedRadio {
    get radioGroup() {
        return this.closest('[role=radiogroup]');
    }
    /**
     * @internal
     */
    defaultCheckedChanged() {
        var _a;
        if (this.$fastController.isConnected && !this.dirtyChecked) {
            // Setting this.checked will cause us to enter a dirty state,
            // but if we are clean when defaultChecked is changed, we want to stay
            // in a clean state, so reset this.dirtyChecked
            if (!this.isInsideRadioGroup()) {
                this.checked = (_a = this.defaultChecked) !== null && _a !== void 0 ? _a : false;
                this.dirtyChecked = false;
            }
        }
    }
    constructor() {
        super();
        /**
         * The element's value to be included in form submission when checked.
         * Default to "on" to reach parity with input[type="radio"]
         *
         * @internal
         */
        this.initialValue = 'on';
        /**
         * When set to `true`, the radio button cannot be interacted with by the user.
         *
         */
        this.readOnly = false;
        this.tabIndexProp = -1;
        this.tabIndexAttr = null;
        this.proxy.setAttribute('type', 'radio');
    }
    /**
     * @internal
     */
    connectedCallback() {
        var _a, _b;
        super.connectedCallback();
        this.validate();
        if (((_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.getAttribute('role')) !== 'radiogroup' &&
            this.getAttribute('tabindex') === null) {
            if (!this.disabled) {
                this.setAttribute('tabindex', '0');
            }
        }
        if (this.checkedAttribute) {
            if (!this.dirtyChecked) {
                // Setting this.checked will cause us to enter a dirty state,
                // but if we are clean when defaultChecked is changed, we want to stay
                // in a clean state, so reset this.dirtyChecked
                if (!this.isInsideRadioGroup()) {
                    this.checked = (_b = this.defaultChecked) !== null && _b !== void 0 ? _b : false;
                    this.dirtyChecked = false;
                }
            }
        }
    }
    isInsideRadioGroup() {
        return this.radioGroup !== null;
    }
    /**
     * Handles key presses on the radio.
     * @beta
     */
    keypressHandler(e) {
        var _a;
        switch (e.key) {
            case keySpace:
                if (!this.checked && !((_a = this.radioGroup) === null || _a === void 0 ? void 0 : _a.readOnly)) {
                    this.checked = true;
                }
                return;
        }
        return true;
    }
    get internalId() {
        return this.id || 'control';
    }
    /**
     * The unique IDs of the label and validation messages (if defined)
     *
     * @public
     * @a11y
     * Volatile decorator needed here because of the computed properties/conditionals
     */
    get ariaLabelledbyIds() {
        var _a;
        return concatLabelIds(this.id, {
            label: !!((_a = this.defaultSlottedNodes) === null || _a === void 0 ? void 0 : _a.length),
        });
    }
    get tabIndex() {
        return this.tabIndexProp;
    }
    set tabIndex(value) {
        const n = typeof value === 'number' ? value : parseInt(value !== null && value !== void 0 ? value : '', 10);
        this.tabIndexProp = !isNaN(n) ? n : -1;
        this.tabIndexAttr = !isNaN(n) ? String(value) : null;
    }
    setAttribute(qualifiedName, value) {
        if (qualifiedName === 'tabindex') {
            const n = parseInt(value !== null && value !== void 0 ? value : '', 10);
            this.tabIndexProp = !isNaN(n) ? n : -1;
            this.tabIndexAttr = value;
            return;
        }
        super.setAttribute(qualifiedName, value);
    }
    removeAttribute(qualifiedName) {
        if (qualifiedName === 'tabindex') {
            this.tabIndexProp = -1;
            this.tabIndexAttr = null;
            return;
        }
        super.removeAttribute(qualifiedName);
    }
    getAttribute(qualifiedName) {
        if (qualifiedName === 'tabindex')
            return this.tabIndexAttr;
        return super.getAttribute(qualifiedName);
    }
    hasAttribute(qualifiedName) {
        if (qualifiedName === 'tabindex')
            return this.tabIndexAttr !== null;
        return super.hasAttribute(qualifiedName);
    }
    focus() {
        var _a, _b;
        (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('input')) === null || _b === void 0 ? void 0 : _b.focus();
    }
    getInputEl() {
        var _a;
        return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('input');
    }
    clickHandler(e) {
        if (this.readOnly) {
            // so radio group will ignore it
            e.stopImmediatePropagation();
            return;
        }
        if (!this.checked) {
            this.checked = true;
        }
        return;
    }
}
__decorate([
    observable
], Radio.prototype, "name", void 0);
__decorate([
    observable
], Radio.prototype, "defaultSlottedNodes", void 0);
__decorate([
    attr({ attribute: 'readonly', mode: 'boolean' })
], Radio.prototype, "readOnly", void 0);
__decorate([
    attr
], Radio.prototype, "id", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-description' })
], Radio.prototype, "a11yAriaDescription", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-label' })
], Radio.prototype, "a11yAriaLabel", void 0);
__decorate([
    volatile
], Radio.prototype, "ariaLabelledbyIds", null);
__decorate([
    observable
], Radio.prototype, "tabIndexProp", void 0);
__decorate([
    observable
], Radio.prototype, "tabIndexAttr", void 0);

export { Radio };
