import { __decorate } from 'tslib';
import { Updates, attr, nullableNumberConverter, observable, volatile } from '../../@microsoft/fast-element/dist/esm/index.js';
import '../../utils/index.js';
import { uniqueId } from '@microsoft/fast-web-utilities';
import { FormAssociatedSearch } from './search-field.form-associated.js';
import { applyMixins } from '../../utils/apply-mixins.js';
import { ARIAGlobalStatesAndProperties } from '../aria-global/aria-global.js';
import { StartEnd } from '../../utils/start-end-template.js';
import { ComponentDensityEnum } from '../../utils/global-enums.js';

/**
 * A Search Custom HTML Element.
 * Based largely on the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search | <input type="search" /> element }.
 *
 * @slot start - Content which can be provided before the search input
 * @slot end - Content which can be provided after the search clear button
 * @slot - The default slot for the label
 * @slot clear-button - The clear button
 * @slot clear-icon - The clear icon
 * @csspart label - The label
 * @csspart control - The logical control, the element wrapping the input field, including start and end slots
 * @csspart field - The element representing the input field
 * @csspart clear-button - The button to clear the input
 *
 * @public
 */
class SearchField extends FormAssociatedSearch {
    constructor() {
        super(...arguments);
        /**
         * The item ID
         *
         * @public
         * @remarks
         * HTML Attribute: id
         */
        this.id = uniqueId('search-field-');
        /**
         * 'Label for the search button tooltip.
         *
         * @public
         */
        this.searchButtonLabel = 'Search';
        /**
         * Label for the clear button tooltip.
         *
         * @public
         */
        this.clearButtonLabel = 'Clear search';
        /**
         * Used to change the spacing in and around the component.
         *
         * @public
         */
        this.density = ComponentDensityEnum.inherit;
        /**
         * Position of the clear button tooltip.
         *
         * @public
         */
        this.clearButtonTooltipPlacement = 'top';
        /**
         * Position of the search button tooltip.
         *
         * @public
         */
        this.searchButtonTooltipPlacement = 'bottom';
        /**
         * Whether or not the search button tooltip is shown.
         *
         * @public
         */
        this.hideSearchButtonTooltip = false;
        this.preFilterSlot = null;
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
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        this.validate();
        if (this.autofocus) {
            Updates.enqueue(() => {
                this.focus();
            });
        }
    }
    validate() {
        super.validate(this.control);
    }
    /**
     * Handles the internal input field's `input` event
     * @internal
     */
    handleTextInput() {
        this.value = this.control.value;
    }
    /**
     * Clears the value, focuses the input field and emits a `clear` event.
     * @public
     */
    handleClearInput() {
        this.value = '';
        this.control.focus();
        this.handleChange();
        this.$emit('clear');
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
    /**
     * Handle click on search
     * @public
     */
    search() {
        this.$emit('search');
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
}
__decorate([
    attr({ attribute: 'readonly', mode: 'boolean' })
], SearchField.prototype, "readOnly", void 0);
__decorate([
    attr({ mode: 'boolean' })
], SearchField.prototype, "autofocus", void 0);
__decorate([
    attr
], SearchField.prototype, "placeholder", void 0);
__decorate([
    attr
], SearchField.prototype, "list", void 0);
__decorate([
    attr({ converter: nullableNumberConverter })
], SearchField.prototype, "maxlength", void 0);
__decorate([
    attr({ converter: nullableNumberConverter })
], SearchField.prototype, "minlength", void 0);
__decorate([
    attr
], SearchField.prototype, "pattern", void 0);
__decorate([
    attr({ converter: nullableNumberConverter })
], SearchField.prototype, "size", void 0);
__decorate([
    attr({ mode: 'boolean' })
], SearchField.prototype, "spellcheck", void 0);
__decorate([
    observable
], SearchField.prototype, "defaultSlottedNodes", void 0);
__decorate([
    attr({ attribute: 'id' })
], SearchField.prototype, "id", void 0);
__decorate([
    attr({ attribute: 'label' })
], SearchField.prototype, "label", void 0);
__decorate([
    observable
], SearchField.prototype, "slottedData", void 0);
__decorate([
    attr({ attribute: 'instructional-text' })
], SearchField.prototype, "instructionalText", void 0);
__decorate([
    attr({ attribute: 'search-button-label' }),
    observable
], SearchField.prototype, "searchButtonLabel", void 0);
__decorate([
    attr({ attribute: 'search-clear-label' }),
    observable
], SearchField.prototype, "clearButtonLabel", void 0);
__decorate([
    attr
], SearchField.prototype, "density", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-description' }),
    observable
], SearchField.prototype, "a11yAriaDescription", void 0);
__decorate([
    attr({ attribute: 'clear-button-tooltip-placement' })
], SearchField.prototype, "clearButtonTooltipPlacement", void 0);
__decorate([
    attr({ attribute: 'search-button-tooltip-placement' })
], SearchField.prototype, "searchButtonTooltipPlacement", void 0);
__decorate([
    attr({ attribute: 'hide-search-button-tooltip', mode: 'boolean' })
], SearchField.prototype, "hideSearchButtonTooltip", void 0);
__decorate([
    attr
], SearchField.prototype, "autocomplete", void 0);
__decorate([
    volatile
], SearchField.prototype, "ariaDescribedbyIds", null);
__decorate([
    observable
], SearchField.prototype, "preFilterSlot", void 0);
/**
 * Includes ARIA states and properties relating to the ARIA textbox role
 *
 * @public
 */
class DelegatesARIASearch {
}
applyMixins(DelegatesARIASearch, ARIAGlobalStatesAndProperties);
applyMixins(SearchField, StartEnd, DelegatesARIASearch);

export { DelegatesARIASearch, SearchField };
