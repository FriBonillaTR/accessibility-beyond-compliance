import { __decorate } from 'tslib';
import { FASTElement, Observable, observable, attr } from '../../@microsoft/fast-element/dist/esm/index.js';
import { isHTMLElement } from '@microsoft/fast-web-utilities';
import { applyMixins } from '../../utils/apply-mixins.js';
import '../../utils/index.js';
import { StartEnd } from '../../utils/start-end-template.js';
import { ARIAGlobalStatesAndProperties } from '../aria-global/aria-global.js';
import { getComponentName } from '@saffron/config';
import { ComponentDensityEnum } from '../../utils/global-enums.js';

function isListboxOption(el) {
    return (isHTMLElement(el) &&
        (el.getAttribute('role') === 'option' || el instanceof HTMLOptionElement));
}
/**
 * An Option Custom HTML Element.
 * Implements {@link https://www.w3.org/TR/wai-aria-1.1/#option | ARIA option }.
 *
 * @slot start - Content which can be provided before the listbox option content
 * @slot end - Content which can be provided after the listbox option content
 * @slot - The default slot for listbox option content
 * @csspart content - Wraps the listbox option content
 *
 * @public
 */
class Option extends FASTElement {
    /**
     * Updates the ariaChecked property when the checked property changes.
     *
     * @param prev - the previous checked value
     * @param next - the current checked value
     *
     * @public
     */
    checkedChanged(prev, next) {
        if (typeof next === 'boolean') {
            this.dataset.focus = next ? 'true' : 'false';
            return;
        }
    }
    /**
     * Updates the proxy's text content when the default slot changes.
     * @param prev - the previous content value
     * @param next - the current content value
     *
     * @internal
     */
    contentChanged(_prev, _next) {
        if (this.proxy instanceof HTMLOptionElement) {
            this.proxy.textContent = this.textContent;
        }
        this.$emit('contentchange', null, { bubbles: true });
    }
    defaultSelectedChanged() {
        if (!this.dirtySelected) {
            this.selected = this.defaultSelected;
            if (this.proxy instanceof HTMLOptionElement) {
                this.proxy.selected = this.defaultSelected;
            }
        }
    }
    disabledChanged(_prev, _next) {
        this.ariaDisabled = this.disabled ? 'true' : 'false';
        if (this.proxy instanceof HTMLOptionElement) {
            this.proxy.disabled = this.disabled;
        }
    }
    selectedAttributeChanged() {
        this.defaultSelected = this.selectedAttribute;
        if (this.proxy instanceof HTMLOptionElement) {
            this.proxy.defaultSelected = this.defaultSelected;
        }
    }
    selectedChanged() {
        this.ariaSelected = this.selected ? 'true' : 'false';
        if (!this.dirtySelected) {
            this.dirtySelected = true;
        }
        if (this.proxy instanceof HTMLOptionElement) {
            this.proxy.selected = this.selected;
        }
        if (this.isMultiple && this.selected) {
            this.ariaChecked = 'true';
        }
        else {
            this.ariaChecked = null;
        }
    }
    initialValueChanged(_previous, _next) {
        // If the value is clean and the component is connected to the DOM
        // then set value equal to the attribute value.
        if (!this.dirtyValue) {
            this.value = this.initialValue;
            this.dirtyValue = false;
        }
    }
    get label() {
        var _a;
        return (_a = this.value) !== null && _a !== void 0 ? _a : this.text;
    }
    get text() {
        var _a, _b;
        return (_b = (_a = this.textContent) === null || _a === void 0 ? void 0 : _a.replace(/\s+/g, ' ').trim()) !== null && _b !== void 0 ? _b : '';
    }
    set value(next) {
        const newValue = `${next !== null && next !== void 0 ? next : ''}`;
        this._value = newValue;
        this.dirtyValue = true;
        if (this.proxy instanceof HTMLOptionElement) {
            this.proxy.value = newValue;
        }
        Observable.notify(this, 'value');
    }
    /**
     * The initial value of the control.
     */
    get value() {
        var _a;
        Observable.track(this, 'value');
        return (_a = this._value) !== null && _a !== void 0 ? _a : this.text;
    }
    get form() {
        return this.proxy ? this.proxy.form : null;
    }
    constructor(text, value, defaultSelected, selected) {
        super();
        /**
         * The defaultSelected state of the option.
         * @public
         */
        this.defaultSelected = false;
        /**
         * Tracks whether the "selected" property has been changed.
         * @internal
         */
        this.dirtySelected = false;
        /**
         * The checked state of the control.
         *
         * @public
         */
        this.selected = this.defaultSelected;
        /**
         * Track whether the value has been changed from the initial value
         */
        this.dirtyValue = false;
        /**
         * Used to change the spacing in and around the component.
         *
         * @public
         */
        this.density = ComponentDensityEnum.inherit;
        if (text) {
            this.textContent = text;
        }
        if (value) {
            this.initialValue = value;
        }
        if (defaultSelected) {
            this.defaultSelected = defaultSelected;
        }
        if (selected) {
            this.selected = selected;
        }
        this.proxy = new window.Option(`${this.textContent}`, this.initialValue, this.defaultSelected, this.selected);
        this.proxy.disabled = this.disabled;
    }
    /**
     * Returns true if slotted in a saf-combobox.
     *
     * @internal
     */
    get isSlottedInSafCombobox() {
        return !!(this.parentNode &&
            this.parentNode.localName &&
            this.parentNode.localName === getComponentName('saf-combobox'));
    }
    /**
     * aria-current should be applied to the selected option in a combobox in single select mode.
     *
     * @internal
     */
    get ariaCurrentComputed() {
        return this.isSlottedInSafCombobox && !this.isMultiple && this.selected ? 'true' : null;
    }
}
__decorate([
    observable
], Option.prototype, "checked", void 0);
__decorate([
    observable
], Option.prototype, "content", void 0);
__decorate([
    observable
], Option.prototype, "defaultSelected", void 0);
__decorate([
    attr({ mode: 'boolean' })
], Option.prototype, "disabled", void 0);
__decorate([
    attr({ attribute: 'selected', mode: 'boolean' })
], Option.prototype, "selectedAttribute", void 0);
__decorate([
    observable
], Option.prototype, "selected", void 0);
__decorate([
    attr({ attribute: 'value', mode: 'fromView' })
], Option.prototype, "initialValue", void 0);
__decorate([
    attr
], Option.prototype, "density", void 0);
__decorate([
    observable
], Option.prototype, "isMultiple", void 0);
/**
 * States and properties relating to the ARIA `option` role.
 *
 * @public
 */
class DelegatesARIAListboxOption {
}
__decorate([
    observable,
    attr({ attribute: 'aria-checked' })
], DelegatesARIAListboxOption.prototype, "ariaChecked", void 0);
__decorate([
    observable,
    attr({ attribute: 'aria-posinset' })
], DelegatesARIAListboxOption.prototype, "ariaPosInSet", void 0);
__decorate([
    observable,
    attr({ attribute: 'aria-selected' })
], DelegatesARIAListboxOption.prototype, "ariaSelected", void 0);
__decorate([
    observable,
    attr({ attribute: 'aria-setsize' })
], DelegatesARIAListboxOption.prototype, "ariaSetSize", void 0);
applyMixins(DelegatesARIAListboxOption, ARIAGlobalStatesAndProperties);
applyMixins(Option, StartEnd, DelegatesARIAListboxOption);

export { DelegatesARIAListboxOption, Option, isListboxOption };
