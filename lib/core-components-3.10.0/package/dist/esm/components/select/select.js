import { __awaiter, __decorate } from 'tslib';
import { autoUpdate, computePosition, autoPlacement, offset, size, hide } from '@floating-ui/dom';
import { Updates, Observable, attr, volatile, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import { uniqueId, keyArrowDown, keyArrowUp, keyTab, keyEscape, keyEnter, keyEnd, keyHome, keySpace } from '@microsoft/fast-web-utilities';
import { SafA11y } from '../../services/a11y.js';
import { applyMixins } from '../../utils/apply-mixins.js';
import '../../utils/index.js';
import { StartEnd } from '../../utils/start-end-template.js';
import { DelegatesARIAListbox } from '../listbox/listbox.abstract.js';
import { Listbox } from '../listbox/listbox.js';
import { FormAssociatedSelect } from './select.form-associated.js';
import { SelectLabelPositionEnum } from './select.options.js';
import { getComponentName } from '@saffron/config';
import { ComponentDensityEnum } from '../../utils/global-enums.js';
import { isActiveElement } from '../../utils/dom-helpers.js';

/**
 * A Select Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#select | ARIA select }.
 *
 * @slot start - Content which can be provided before the button content
 * @slot end - Content which can be provided after the button content
 * @slot button-container - The element representing the select button
 * @slot selected-value - The selected value
 * @slot indicator - The visual indicator for the expand/collapse state of the button
 * @slot - The default slot for slotted options
 * @csspart control - The element representing the select invoking element
 * @csspart selected-value - The element wrapping the selected value
 * @csspart indicator - The element wrapping the visual indicator
 * @csspart listbox - The listbox element
 * @fires input - Fires a custom 'input' event when the value updates
 * @fires change - Fires a custom 'change' event when the value updates
 *
 * @public
 */
class Select extends FormAssociatedSelect {
    constructor() {
        super(...arguments);
        /**
         * Whether or not the listbox is open.
         *
         * @public
         * @remarks
         * HTML Attribute: open
         */
        this.open = false;
        /**
         * The unique id for the internal listbox element.
         *
         * @internal
         */
        this.listboxId = uniqueId('listbox-');
        /**
         * The id attribute of the input element.
         *
         * @public
         */
        this.id = uniqueId('select-');
        /**
         * A value is required or must be checked for the form to be submittable.
         *
         * @public
         */
        this.required = false;
        /**
         * Adds additional character to the label when select is required.
         *
         * @public
         */
        this.requiredText = '*';
        /**
         * Set the position of the label.
         */
        this.placement = SelectLabelPositionEnum.top;
        /**
         * Indicates the entered value does not conform to the format expected by the application.
         *
         * @public
         */
        this.invalid = false;
        /**
         * 'Defines a string value that labels the success icon, when icons are not just presentational but used to communicate status.
         *
         * @public
         */
        this.successAriaLabel = 'Success';
        /**
         * Defines a string value that labels the error icon, when icons are not just presentational but used to communicate status.
         * @public
         */
        this.errorAriaLabel = 'Error';
        /**
         * Used to change the spacing in and around the component.
         *
         * @public
         */
        this.density = ComponentDensityEnum.inherit;
        /**
         * Indicates if this select is used as a prefilter in a search component.
         *
         * @public
         */
        this.prefilter = false;
        /**
         * Capture the key or string pressed within typedTimeout.
         *
         * @internal
         */
        this.typedText = '';
        /**
         * Timeout for typing.
         * @internal
         */
        this.typingTimeout = null;
        /**
         * Timeout ms for keydown event capture string and select value.
         * @public
         */
        this.typedTimeout = 800;
        this.canAnnounceValidation = false;
    }
    /**
     * Sets focus and synchronizes ARIA attributes when the open property changes.
     *
     * @param prev - the previous open value
     * @param next - the current open value
     *
     * @internal
     */
    openChanged(_prev, _next) {
        var _a;
        if (!this.collapsible) {
            return;
        }
        if (this.open) {
            this.ariaExpanded = 'true';
            Updates.enqueue(() => this.setPositioning());
            this.focusAndScrollOptionIntoView();
            this.indexWhenOpened = this.selectedIndex;
            // focus is directed to the element when `open` is changed programmatically
            Updates.enqueue(() => this.focus());
            return;
        }
        (_a = this.cleanup) === null || _a === void 0 ? void 0 : _a.call(this);
        this.ariaExpanded = 'false';
    }
    /**
     * The component is collapsible when in single-selection mode with no size attribute.
     *
     * @internal
     */
    get collapsible() {
        return !(this.multiple || typeof this.size === 'number');
    }
    /**
     * The initial value of the control.
     * @category Attributes
     * @type string
     * @public
     */
    get value() {
        Observable.track(this, 'value');
        return this._value;
    }
    set value(next) {
        var _a, _b, _c, _d, _e, _f, _g;
        const prev = `${this._value}`;
        if ((_a = this._options) === null || _a === void 0 ? void 0 : _a.length) {
            const selectedIndex = this._options.findIndex((el) => el.value === next);
            const prevSelectedValue = (_c = (_b = this._options[this.selectedIndex]) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : null;
            const nextSelectedValue = (_e = (_d = this._options[selectedIndex]) === null || _d === void 0 ? void 0 : _d.value) !== null && _e !== void 0 ? _e : null;
            if (selectedIndex === -1 || prevSelectedValue !== nextSelectedValue) {
                next = '';
                this.selectedIndex = selectedIndex;
            }
            next = (_g = (_f = this.firstSelectedOption) === null || _f === void 0 ? void 0 : _f.value) !== null && _g !== void 0 ? _g : next;
        }
        if (prev !== next) {
            this._value = next;
            super.valueChanged(prev, next);
            Observable.notify(this, 'value');
            this.updateDisplayValue();
        }
    }
    /**
     * Sets the value and display value to match the first selected option.
     *
     * @param shouldEmit - if true, the input and change events will be emitted
     *
     * @internal
     */
    updateValue(shouldEmit) {
        var _a, _b;
        if (this.$fastController.isConnected) {
            this.value = (_b = (_a = this.firstSelectedOption) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
        }
        if (shouldEmit) {
            this.$emit('input', this, { bubbles: false, composed: undefined });
            this.$emit('change', this, { bubbles: false, composed: undefined });
        }
    }
    /**
     * Updates the proxy value when the selected index changes.
     *
     * @param prev - the previous selected index
     * @param next - the next selected index
     *
     * @internal
     */
    selectedIndexChanged(prev, next) {
        super.selectedIndexChanged(prev, next);
        this.updateValue();
    }
    /**
     * Checks the computed style for the 'direction' property to set isRtl to true for RTL layouts.
     * @public
     * @internal
     */
    isRTL() {
        const computedStyle = window.getComputedStyle(this);
        const directionValue = computedStyle.getPropertyValue('direction');
        return directionValue === 'rtl';
    }
    /**
     * Calculate and apply listbox positioning based on available viewport space.
     *
     * @internal
     * @public
     */
    setPositioning() {
        if (this.$fastController.isConnected) {
            this.cleanup = autoUpdate(this, this.listbox, () => __awaiter(this, void 0, void 0, function* () {
                var _a;
                const { middlewareData, x, y } = yield computePosition(this.control, this.listbox, {
                    placement: 'bottom-start',
                    strategy: 'fixed',
                    middleware: [
                        autoPlacement({
                            allowedPlacements: ['top', 'bottom'],
                        }),
                        offset(8),
                        size({
                            apply: ({ availableHeight, rects }) => {
                                const width = this.prefilter
                                    ? Math.max(rects.reference.width * 1.5, 120)
                                    : rects.reference.width;
                                Object.assign(this.listbox.style, {
                                    maxHeight: `${availableHeight}px`,
                                    width: `${width}px`,
                                });
                            },
                        }),
                        hide(),
                    ],
                });
                if ((_a = middlewareData.hide) === null || _a === void 0 ? void 0 : _a.referenceHidden) {
                    this.open = false;
                    return;
                }
                let finalX = x;
                if (this.prefilter) {
                    const controlRect = this.control.getBoundingClientRect();
                    finalX = this.isRTL()
                        ? controlRect.right - this.listbox.offsetWidth
                        : controlRect.left;
                }
                Object.assign(this.listbox.style, {
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    transform: `translate(${finalX}px, ${y}px)`,
                });
            }));
        }
    }
    /**
     * The value displayed on the button.
     *
     * @internal
     * @public
     */
    get displayValue() {
        var _a, _b;
        Observable.track(this, 'displayValue');
        return (_b = (_a = this.firstSelectedOption) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : '';
    }
    /**
     * Synchronize the `aria-disabled` property when the `disabled` property changes.
     *
     * @param prev - The previous disabled value
     * @param next - The next disabled value
     *
     * @internal
     */
    disabledChanged(prev, next) {
        if (super.disabledChanged) {
            super.disabledChanged(prev, next);
        }
        this.ariaDisabled = this.disabled ? 'true' : 'false';
    }
    /**
     * Reset the element to its first selectable option when its parent form is reset.
     *
     * @internal
     */
    formResetCallback() {
        this.setProxyOptions();
        // Call the base class's implementation setDefaultSelectedOption instead of the select's
        // override, in order to reset the selectedIndex without using the value property.
        super.setDefaultSelectedOption();
        if (this.selectedIndex === -1) {
            this.selectedIndex = 0;
        }
    }
    /**
     * Handle opening and closing the listbox when the select is clicked.
     *
     * @param e - the mouse event
     * @internal
     */
    clickHandler(e) {
        // do nothing if the select is disabled
        if (this.disabled) {
            return;
        }
        if (this.open) {
            const captured = e.target.closest(`option,[role=option]`);
            if (captured && captured.disabled) {
                return;
            }
        }
        super.clickHandler(e);
        this.open = this.collapsible && !this.open;
        if (!this.open && this.indexWhenOpened !== this.selectedIndex) {
            this.updateValue(true);
        }
        return true;
    }
    /**
     * Handles focus state when the element or its children lose focus.
     *
     * @param e - The focus event
     * @internal
     */
    focusoutHandler(e) {
        var _a;
        super.focusoutHandler(e);
        if (!this.open) {
            return true;
        }
        const focusTarget = e.relatedTarget;
        if (this.isSameNode(focusTarget)) {
            this.focus();
            return;
        }
        if (!((_a = this.options) === null || _a === void 0 ? void 0 : _a.includes(focusTarget))) {
            this.open = false;
            if (this.indexWhenOpened !== this.selectedIndex) {
                this.updateValue(true);
            }
        }
    }
    /**
     * Updates the value when an option's value changes.
     *
     * @param source - the source object
     * @param propertyName - the property to evaluate
     *
     * @internal
     * @override
     */
    handleChange(source, propertyName) {
        super.handleChange(source, propertyName);
        if (propertyName === 'value') {
            this.updateValue();
        }
    }
    /**
     * Synchronize the form-associated proxy and updates the value property of the element.
     *
     * @param prev - the previous collection of slotted option elements
     * @param next - the next collection of slotted option elements
     *
     * @internal
     */
    slottedOptionsChanged(prev, next) {
        this.options.forEach((o) => {
            const notifier = Observable.getNotifier(o);
            notifier.unsubscribe(this, 'value');
        });
        super.slottedOptionsChanged(prev, next);
        this.options.forEach((o) => {
            const notifier = Observable.getNotifier(o);
            notifier.subscribe(this, 'value');
        });
        this.setProxyOptions();
        this.updateValue();
    }
    /**
     * Prevents focus when size is set and a scrollbar is clicked.
     *
     * @param e - the mouse event object
     *
     * @override
     * @internal
     */
    mousedownHandler(e) {
        var _a;
        if (e.offsetX >= 0 && e.offsetX <= ((_a = this.listbox) === null || _a === void 0 ? void 0 : _a.scrollWidth)) {
            return super.mousedownHandler(e);
        }
        return this.collapsible;
    }
    /**
     * Sets the multiple property on the proxy element.
     *
     * @param prev - the previous multiple value
     * @param next - the current multiple value
     */
    multipleChanged(prev, next) {
        super.multipleChanged(prev, next);
        if (this.proxy) {
            this.proxy.multiple = next;
        }
    }
    /**
     * Updates the selectedness of each option when the list of selected options changes.
     *
     * @param prev - the previous list of selected options
     * @param next - the current list of selected options
     *
     * @override
     * @internal
     */
    selectedOptionsChanged(prev, next) {
        var _a;
        super.selectedOptionsChanged(prev, next);
        (_a = this.options) === null || _a === void 0 ? void 0 : _a.forEach((o, i) => {
            var _a;
            const proxyOption = (_a = this.proxy) === null || _a === void 0 ? void 0 : _a.options.item(i);
            if (proxyOption) {
                proxyOption.selected = o.selected;
            }
        });
    }
    /**
     * Sets the selected index to match the first option with the selected attribute, or
     * the first selectable option.
     *
     * @override
     * @internal
     */
    setDefaultSelectedOption() {
        var _a;
        const options = (_a = this.options) !== null && _a !== void 0 ? _a : Array.from(this.children).filter(Listbox.slottedOptionFilter);
        const selectedIndex = options === null || options === void 0 ? void 0 : options.findIndex((el) => el.hasAttribute('selected') || el.selected || el.value === this.value);
        if (selectedIndex !== -1) {
            this.selectedIndex = selectedIndex;
            return;
        }
        this.selectedIndex = 0;
    }
    /**
     * Resets and fills the proxy to match the component's options.
     *
     * @internal
     */
    setProxyOptions() {
        if (this.proxy instanceof HTMLSelectElement && this.options) {
            this.proxy.options.length = 0;
            this.options.forEach((option) => {
                const proxyOption = option.proxy ||
                    (option instanceof HTMLOptionElement ? option.cloneNode() : null);
                if (proxyOption) {
                    this.proxy.options.add(proxyOption);
                }
            });
        }
    }
    /**
     * Handle keyboard interaction for the select.
     *
     * @param e - the keyboard event
     * @internal
     */
    keydownHandler(e) {
        if (this.disabled) {
            return true;
        }
        const key = e.key || e.key.charCodeAt(0);
        switch (key) {
            case keySpace: {
                if (isActiveElement(this)) {
                    e.preventDefault();
                    if (this.collapsible && this.typeAheadExpired) {
                        this.open = !this.open;
                    }
                }
                break;
            }
            case keyHome:
            case keyEnd: {
                e.preventDefault();
                if (!this.open) {
                    this.open = true;
                }
                super.keydownHandler(e);
                break;
            }
            case keyEnter: {
                if (isActiveElement(this)) {
                    e.preventDefault();
                    this.open = !this.open;
                }
                break;
            }
            case keyEscape: {
                if (isActiveElement(this)) {
                    if (this.collapsible && this.open) {
                        e.preventDefault();
                        this.open = false;
                    }
                }
                break;
            }
            case keyTab: {
                if (this.collapsible && this.open) {
                    e.preventDefault();
                    this.open = false;
                }
                break;
            }
            case keyArrowUp:
            case keyArrowDown: {
                if (!this.open) {
                    this.open = true;
                }
                if (!e.altKey) {
                    super.keydownHandler(e);
                }
                break;
            }
        }
        if (!this.open &&
            Number.isInteger(this.indexWhenOpened) &&
            this.indexWhenOpened !== this.selectedIndex) {
            this.updateValue(true);
            this.indexWhenOpened = this.selectedIndex;
        }
        return !(key === keyArrowDown || key === keyArrowUp);
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('contentchange', this.updateDisplayValue);
        this.addEventListener('keydown', this.captureKeyDown);
        this.ariaControls = this.listboxId;
        Updates.enqueue(() => {
            this.canAnnounceValidation = true;
        });
    }
    disconnectedCallback() {
        var _a;
        this.removeEventListener('contentchange', this.updateDisplayValue);
        (_a = this.cleanup) === null || _a === void 0 ? void 0 : _a.call(this);
        super.disconnectedCallback();
        this.removeEventListener('keydown', this.captureKeyDown);
    }
    /**
     * Updates the proxy's size property when the size attribute changes.
     *
     * @param prev - the previous size
     * @param next - the current size
     *
     * @override
     * @internal
     */
    sizeChanged(prev, next) {
        super.sizeChanged(prev, next);
        if (this.proxy) {
            this.proxy.size = next;
        }
    }
    /**
     *
     * @internal
     */
    updateDisplayValue() {
        var _a;
        if (this.$fastController.isConnected) {
            this.displayValueEl.lang = (_a = this.firstSelectedOption) === null || _a === void 0 ? void 0 : _a.lang;
            if (!this.displayValueEl.lang) {
                this.displayValueEl.removeAttribute('lang');
            }
        }
        if (this.collapsible) {
            Observable.notify(this, 'displayValue');
        }
    }
    /**
     * @public
     * @internal
     * @remarks
     * To set the aria-describedby to the instructional text
     */
    get computedAriaDescribedby() {
        return (this.ariaDescribedby ||
            (this.instructionalText ? `instructional-${this.id}` : '') ||
            null);
    }
    /**
     * @public
     * @internal
     * @remarks
     * To set the aria-labelledby with IDs for label, optional text
     * and include validation messages
     */
    get computedAriaLabelledby() {
        if (this.ariaLabelledby) {
            return this.ariaLabelledby;
        }
        let labelIds = this.label ? `label-${this.id}` : '';
        labelIds += this.optionalText ? ` optional-${this.id}` : '';
        // Prioritizes selectAriaLabel when defined
        if (this.selectAriaLabel) {
            labelIds = `select-aria-label-${this.id}`;
        }
        // Error
        if (this.invalid && this.errorAriaLabel && this.errorAriaLabel.length > 0) {
            labelIds += ` error-label-${this.id}`;
        }
        // Success
        if (!this.invalid &&
            this.isSuccess &&
            this.successAriaLabel &&
            this.successAriaLabel.length > 0) {
            labelIds += ` success-label-${this.id}`;
        }
        if ((this.invalid || (!this.invalid && this.isSuccess)) &&
            this.validationMessage &&
            this.validationMessage.length > 0) {
            labelIds += ` validation-message-${this.id}`;
        }
        return labelIds.trim().length > 0 ? labelIds : null;
    }
    /**
     * Handle the "reflection" of the values from the shadow dom into the light dom
     * every time an attribute from the accessibilityObservedAttributes array changes.
     *
     * @internal
     */
    attributeChangedCallback(attributeName, oldValue, newValue) {
        super.attributeChangedCallback(attributeName, oldValue, newValue);
        Updates.enqueue(() => {
            const accessibilityObservedAttributes = [
                { attributeName: 'label', idInShadowDom: 'label' },
                { attributeName: 'optional-text', idInShadowDom: 'optional' },
                { attributeName: 'select-aria-label', idInShadowDom: 'select-aria-label' },
                { attributeName: 'instructional-text', idInShadowDom: 'instructional' },
                { attributeName: 'error-aria-label', idInShadowDom: 'error-label' },
                { attributeName: 'success-aria-label', idInShadowDom: 'success-label' },
                { attributeName: 'validation-message', idInShadowDom: 'validation-message' },
            ];
            const observedAttribute = accessibilityObservedAttributes.find((observed) => observed.attributeName === attributeName);
            if (oldValue !== newValue && observedAttribute) {
                this.accessibilityElementsToParent(observedAttribute.idInShadowDom, newValue);
            }
        });
    }
    accessibilityElementsToParent(idToFind, value) {
        var _a, _b;
        const cloneAndAppend = (container, elementId) => {
            var _a;
            const element = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`#${elementId}-${this.id}`);
            if (!element) {
                return;
            }
            const elementToUpdate = container.querySelector(`#${elementId}-${this.id}`);
            if (!elementToUpdate) {
                const clone = element.cloneNode(true);
                clone.removeAttribute('slot');
                clone.removeAttribute('for');
                container.append(clone);
            }
            const safeElement = container.querySelector(`#${elementId}-${this.id}`);
            if (safeElement && value !== undefined && value !== null) {
                safeElement.textContent = value;
            }
        };
        const containerId = `saf-a11y-${this.id}`;
        let container = (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector(`#${containerId}`);
        if (!container) {
            container = document.createElement('div');
            container.id = containerId;
            container.setAttribute('style', 'display:none');
            (_b = this.parentElement) === null || _b === void 0 ? void 0 : _b.append(container);
        }
        if (typeof idToFind === 'string') {
            cloneAndAppend(container, idToFind);
            return;
        }
        idToFind.forEach((id) => {
            cloneAndAppend(container, id);
        });
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
    /**
    /**
     * Captures keydown events and focuses the element when a key or string is pressed within typedTimeout ms.
     * @internal
     **/
    captureKeyDown(event) {
        if (event.key.length === 1 && !event.ctrlKey && !event.metaKey) {
            this.typedText += event.key.toLowerCase();
            // Clear the typed text after a delay
            if (this.typingTimeout)
                clearTimeout(this.typingTimeout);
            this.typingTimeout = setTimeout(() => (this.typedText = ''), this.typedTimeout);
            this.setValueMatchingOption();
        }
    }
    /**
     * Sets the value of the select to the first option that matches the typed text.
     * @internal
     */
    setValueMatchingOption() {
        var _a, _b, _c, _d;
        const options = Array.from(this.querySelectorAll(getComponentName('saf-option')));
        const match = options.find((option) => { var _a; return (_a = option.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase().trim().startsWith(this.typedText); });
        if (match) {
            this.value = (_b = (_a = match.value) !== null && _a !== void 0 ? _a : match === null || match === void 0 ? void 0 : match.textContent) !== null && _b !== void 0 ? _b : '';
            const matchIndex = this._options.findIndex((o) => o.value === match.value || o === match);
            if (matchIndex !== -1) {
                // update selectedIndex which triggers the selectedIndexChanged observer in ListboxAbstract
                this.selectedIndex = matchIndex;
                // ensure the value property is updated
                this._value = (_d = (_c = match.value) !== null && _c !== void 0 ? _c : match === null || match === void 0 ? void 0 : match.textContent) !== null && _d !== void 0 ? _d : '';
                // Force notification to update UI
                Observable.notify(this, 'value');
                // Explicitly emit change and input events
                this.updateValue(true);
            }
        }
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
    attr({ attribute: 'open', mode: 'boolean' })
], Select.prototype, "open", void 0);
__decorate([
    volatile
], Select.prototype, "collapsible", null);
__decorate([
    observable
], Select.prototype, "control", void 0);
__decorate([
    observable
], Select.prototype, "displayValueEl", void 0);
__decorate([
    attr
], Select.prototype, "id", void 0);
__decorate([
    attr({ mode: 'boolean' })
], Select.prototype, "required", void 0);
__decorate([
    attr({ attribute: 'label' })
], Select.prototype, "label", void 0);
__decorate([
    attr({ attribute: 'select-aria-label' })
], Select.prototype, "selectAriaLabel", void 0);
__decorate([
    attr({ attribute: 'instructional-text' })
], Select.prototype, "instructionalText", void 0);
__decorate([
    attr({ attribute: 'required-text' })
], Select.prototype, "requiredText", void 0);
__decorate([
    volatile
], Select.prototype, "computedAriaDescribedby", null);
__decorate([
    volatile
], Select.prototype, "computedAriaLabelledby", null);
__decorate([
    attr({ attribute: 'optional-text' })
], Select.prototype, "optionalText", void 0);
__decorate([
    attr({ attribute: 'invalid', mode: 'boolean' })
], Select.prototype, "invalid", void 0);
__decorate([
    attr({ attribute: 'validation-message' })
], Select.prototype, "validationMessage", void 0);
__decorate([
    attr({ attribute: 'is-success', mode: 'boolean' })
], Select.prototype, "isSuccess", void 0);
__decorate([
    attr({ attribute: 'success-aria-label' })
], Select.prototype, "successAriaLabel", void 0);
__decorate([
    attr({ attribute: 'error-aria-label' })
], Select.prototype, "errorAriaLabel", void 0);
__decorate([
    attr
], Select.prototype, "density", void 0);
__decorate([
    attr({ mode: 'boolean' })
], Select.prototype, "prefilter", void 0);
__decorate([
    attr
], Select.prototype, "autocomplete", void 0);
__decorate([
    attr({ attribute: 'typed-timeout' })
], Select.prototype, "typedTimeout", void 0);
/**
 * Includes ARIA states and properties relating to the ARIA select role.
 *
 * @public
 */
class DelegatesARIASelect {
}
__decorate([
    observable
], DelegatesARIASelect.prototype, "ariaControls", void 0);
applyMixins(DelegatesARIASelect, DelegatesARIAListbox);
applyMixins(Select, StartEnd, DelegatesARIASelect);

export { DelegatesARIASelect, Select };
