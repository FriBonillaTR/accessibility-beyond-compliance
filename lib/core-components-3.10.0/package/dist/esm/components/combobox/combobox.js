import { __awaiter, __decorate } from 'tslib';
import { autoUpdate, computePosition, autoPlacement, offset, size, hide } from '@floating-ui/dom';
import { FASTElement, Observable, Updates, observable, attr, volatile } from '../../@microsoft/fast-element/dist/esm/index.js';
import { uniqueId } from '@microsoft/fast-web-utilities';
import { SafA11y } from '../../services/a11y.js';
import { applyMixins } from '../../utils/apply-mixins.js';
import '../../utils/index.js';
import { StartEnd } from '../../utils/start-end-template.js';
import { Button } from '../button/button.js';
import { Chip } from '../chip/chip.js';
import { DelegatesARIAListbox } from '../listbox/listbox.abstract.js';
import { isListboxOption, Option } from '../option/option.js';
import { ComboboxSearchModeEnum } from './combobox.options.js';
import { FormAssociated } from '../form-associated/form-associated.js';
import { getComponentName } from '@saffron/config';
import { ComponentDensityEnum } from '../../utils/global-enums.js';

/**
 * A Combobox Custom HTML Element.
 * Implements the {@link https://w3c.github.io/aria-practic1es/#combobox | ARIA combobox }.
 *
 * @slot - The default slot for the options
 * @slot root - The wrapper element containing the input area, including start and end
 * @slot control - Used to replace the input element representing the combobox
 * @slot start - Content which can be provided before the input
 * @slot end - Content which can be provided after the input
 * @slot loading - The progress indicator to show while loading
 * @slot clear - The button to clear the combobox
 * @csspart indicator - The element wrapping the indicator slot
 * @slot chips - Used to render chips for selected elements in multiple mode
 * @slot success - The wrapper for success validation feedback
 * @slot error - The wrapper for error validation feedback
 * @csspart label-container - The container for the label and required indicator
 * @csspart label - The label text element
 * @csspart optional-text - The optional text element
 * @csspart instructional-text - The instructional text element
 * @csspart root - The wrapper div element containing input, loading, clear, and indicator
 * @csspart clear-button - The button element used to clear the input
 * @csspart indicator - The element wrapping the indicator slot
 * @csspart listbox - The wrapper for the listbox slotted options
 * @csspart success - The wrapper for success validation feedback
 * @csspart success-icon - The success icon
 * @csspart error - The wrapper for error validation feedback
 * @csspart error-icon - The error icon
 * @csspart message - The validation message element under success or error
 * @csspart a11y-aria-description - The div that contains the additional information
 * @fires input - Fires a custom 'input' event when user types in the input
 * @fires open - Fires a custom 'open' event when the listbox opens
 * @fires close - Fires a custom 'close' event when the listbox closes
 * @fires clear - Fires a custom 'clear' event when the clear button is clicked
 * @fires scroll-end - Fires a custom 'scroll-end' event when the listbox reaches the end of the scroll
 */
class _Combobox extends FASTElement {
}
/**
 * A form-associated base class for the {@link (Combobox:class)} component.
 *
 * @beta
 */
class FormAssociatedCombobox extends FormAssociated(_Combobox) {
    constructor() {
        super(...arguments);
        this.proxy = document.createElement('input');
    }
}
class Combobox extends FormAssociatedCombobox {
    constructor() {
        super(...arguments);
        /**
         * @internal
         * Copy list of options that are available to the combobox
         */
        this._options = [];
        /**
         *
         * @internal
         * Filtered options based on user input when searchOffline is true
         */
        this.filteredOptions = [];
        /**
         * @internal
         * The current filter value.
         */
        this.filter = '';
        /**
         * @internal
         * Indicates if search options is empty
         */
        this.empty = false;
        /**
         * Delay in ms for the SafA11y service to announce.
         *
         * @internal
         * @private
         */
        this.announceDelay = 1000;
        /**
         * @internal
         * Index for the focused option in the listbox.
         */
        this.focusedIndex = -1;
        /**
         * @internal
         * Total virtualized options for the listbox.
         */
        this.virtualizedOptions = [];
        /**
         * @internal
         * Previous scroll position to track scroll direction.
         */
        this.previousScrollTop = 0;
        this.slottedOptionNotifiers = [];
        /**
         * Whether input field is required to enter.
         * Note that the validation state is controlled, and this attribute is only used for styling and accessibility purposes.
         * @public
         */
        this.required = false;
        /**
         * Text for listbox aria-description in multiple mode
         * @public
         * @a11y
         */
        this.a11yKeyboardHelp = 'Press Enter to select';
        /**
         * Text for progress ring aria label
         * @public
         * @a11y
         */
        this.progressRingAriaLabel = 'Loading options';
        /**
         * Text to show in a disabled option when no results are found.
         * Appears only when the `search-offline` attribute is true.
         *
         * @category Label attributes
         * @public
         */
        this.emptyOptionText = 'No options found';
        /**
         * The readonly attribute for input.
         * @public
         */
        this.readonly = false;
        /**
         * Value of the input.
         * @public
         */
        this.value = '';
        this.valueChanged = () => {
            // If control value is not equal to value,
            // it means that it was not changed by input or component logic,
            // so we need to filter the options.
            if (this.$fastController.isConnected && this.control.value !== this.value) {
                this.filter = this.value;
                this.filterOptions();
            }
        };
        /**
         * Validation state. If true, combobox is invalid.
         * If false, combobox is indeterminate.
         * @public
         */
        this.invalid = false;
        /**
         * Text to visually indicate the field is required.
         * @category Label attributes
         * @public
         */
        this.requiredText = '*';
        /**
         * Indicates loading state of the combobox. To be used with remote search.
         * @public
         */
        this.loading = false;
        /**
         * Indicates whether the input field is clearable when clicks on the clear button.
         * @public
         */
        this.clearable = false;
        /**
         * Indicates whether the listbox is open or closed.
         * @public
         * @internal
         */
        this.open = false;
        /**
         * The density of the combobox
         * @public
         */
        this.density = ComponentDensityEnum.inherit;
        /**
         * The aria label for the success icon.
         * @public
         * @a11y
         */
        this.successAriaLabel = 'Success';
        /**
         * The aria label for the error icon.
         * @public
         * @a11y
         */
        this.errorAriaLabel = 'Error';
        /**
         * Specifies if combobox is in multiselect mode.
         * @public
         */
        this.multiple = false;
        /**
         * If true, listbox closes automatically on selecting an option.
         * If false, listbox remains open until user clicks outside or
         * presses escape key.
         * @public
         */
        this.closeOnSelect = !this.multiple;
        /**
         * If true, when pressing escape key, combobox will emit the `clear` event.
         * @public
         */
        this.clearOnEscape = false;
        /**
         * If true, upon combobox focus, listbox will open.
         * @public
         */
        this.openOnFocus = false;
        /**
         * If true, combobox will search offline in the available options.
         * If false, typing in the input will not filter the options. You control the filtering and the options passed to the listbox.
         * @public
         */
        this.searchOffline = true;
        /**
         * Specifies search mode used when searchOffline is true.
         * @public
         */
        this.searchMode = ComboboxSearchModeEnum.includes;
        /**
         * If true, on input, first option label will be populated in the field.
         * Works only when `searchOffline==true`, `searchMode=='startsWith'` and `multiple==false`.
         * To use autocomplete with a custom search mode (`searchOffline==false`), refer to the `setAutocomplete()` public method.
         *
         * @public
         */
        this.autocomplete = true;
        /**
         * Turns virtualization feature on and off for the listbox container.
         * @public
         */
        this.virtualized = false;
        /**
         * Default height for each option when virtualization is on.
         * @public
         */
        this.estimatedItemHeight = 40;
        /**
         * Determines the number of options to render in the listbox before and after the virtualization window.
         * For example, if the listbox shows 7 items, and padding is 3 items, a total of 3+7+3=13 items will be rendered at a given moment.
         * @public
         */
        this.virtualizationPadding = 3;
        /**
         * If true, the combobox will highlight the substring in the options
         * that matches the user input.
         * @public
         */
        this.highlightSubstrings = false;
        /**
         * @internal
         * Current scroll position of the listbox.
         */
        this.scrollPosition = 0;
        /**
         * @internal
         * Listbox menu height based on the number of options.
         * (used for virtualization feature)
         */
        this.listboxMenuHeight = 0;
        /**
         * @internal
         * Visible options in the listbox.
         */
        this.visibleOptions = 7;
        /**
         * @param _e - The focus event
         * @internal
         * Handle focus state when component is focused.
         */
        this.handleFocus = (_e) => {
            var _a;
            if (this.readonly || this.open) {
                return;
            }
            // Check if there's content in the empty slot (e.g., "No results found" message)
            const hasEmptySlotContent = ((_a = this.emptySlot) === null || _a === void 0 ? void 0 : _a.assignedNodes({ flatten: true }).length) > 0;
            // Open if there's empty slot content and user has typed something
            const shouldOpenOnEmptyContent = hasEmptySlotContent && this.filter.length > 0;
            // Open the listbox if configured to open on focus or if empty content should be shown
            if (this.openOnFocus || shouldOpenOnEmptyContent) {
                this.open = true;
                this.filterOptions();
            }
        };
    }
    /**
     * The list of options.
     * @public
     * @internal
     * Overrides `Listbox.options`.
     */
    get options() {
        Observable.track(this, 'options');
        return this.filteredOptions.length
            ? this.filteredOptions
            : this._options;
    }
    set options(value) {
        this.listboxMenuHeight = this.estimatedItemHeight * value.length;
        this._options = value;
        Observable.notify(this, 'options');
    }
    get hasSlottedOptions() {
        const totalOptions = this.virtualized
            ? this.virtualizedOptions.length
            : this.slottedOptions.length;
        return totalOptions > 0 || this.slottedEmptyOption.length > 0;
    }
    /**
     * @internal
     * @param prev - the previous list of slotted options
     * @param next - the current list of slotted options
     * Updates the list of options slotted in the combobox.
     */
    slottedOptionsChanged(prev, next) {
        if (this.virtualized && this.virtualizedOptions.length) {
            return;
        }
        this.options = next.reduce((options, item) => {
            if (isListboxOption(item)) {
                options.push(item);
            }
            return options;
        }, []);
        // if previously focused option was changed, reset the focus
        if (this.focusedIndex !== -1 && (prev === null || prev === void 0 ? void 0 : prev[this.focusedIndex]) !== next[this.focusedIndex]) {
            this.focusedIndex = -1;
        }
        this._options.forEach((option, index) => {
            if (!option.id) {
                option.id = uniqueId('option-');
            }
            if (this.multiple) {
                // Add isMultiple flag
                option.isMultiple = this.multiple;
            }
            if (index !== this.focusedIndex) {
                option.setAttribute('data-focus', 'false');
            }
        });
        this.setOptionsAriaLabels();
        this.setOptionNotifiers();
        if (this.searchOffline && this.value) {
            this.filter = this.value;
            this.filterOptions();
        }
        else {
            this.filteredOptions = this._options;
            this.empty = this._options.length === 0;
        }
        if (this.virtualized && this.$fastController.isConnected) {
            this.setupVirtualization();
        }
        Updates.enqueue(() => this.syncListboxProxy());
    }
    setOptionsAriaLabels() {
        const visibleOptions = this._options.filter((o) => !o.hidden);
        const setSize = `${visibleOptions.length}`;
        visibleOptions.forEach((option, index) => {
            option.ariaPosInSet = `${index + 1}`;
            option.ariaSetSize = setSize;
        });
    }
    setOptionNotifiers() {
        const prop = 'selected';
        this.slottedOptionNotifiers.forEach((notifier) => {
            notifier.unsubscribe(this, prop);
        });
        this.slottedOptionNotifiers = [];
        this._options.forEach((option) => {
            const notifier = Observable.getNotifier(option);
            notifier.subscribe(this, prop);
            this.slottedOptionNotifiers.push(notifier);
        });
    }
    /**
     * Synchronize the `aria-disabled` property when the `disabled` property changes.
     * @internal
     */
    disabledChanged() {
        this.ariaDisabled = this.disabled ? 'true' : 'false';
    }
    /**
     * @internal
     * @param prev - the previous open value
     * @param next - the current open value
     * Emits open and close events when the listbox opens and closes.
     */
    openChanged() {
        if (this.open) {
            this.resetFocusedIndex();
            this.ariaExpanded = 'true';
            Updates.enqueue(() => this.syncListboxProxy());
            this.$emit('open', null, { bubbles: false });
            Updates.enqueue(() => this.setPositioning());
        }
        else {
            this.ariaExpanded = 'false';
            this.$emit('close', null, { bubbles: false });
        }
    }
    multipleChanged() {
        this.closeOnSelect = !this.multiple;
    }
    slottedChipsChanged(prev, next) {
        if (this.open || !(prev === null || prev === void 0 ? void 0 : prev.length) || next.length >= prev.length) {
            return;
        }
        if (!next.length) {
            this.control.focus();
            return;
        }
        const removedEl = prev.find((el) => !next.some((x) => x.textContent === el.textContent));
        if (!removedEl) {
            return;
        }
        const index = prev.indexOf(removedEl);
        if (index > 0) {
            next[index - 1].focus();
        }
        else {
            next[0].focus();
        }
    }
    /**
     * Aria label for input based on validation flags and other
     * labels available.
     * @public
     * @internal
     */
    get computedAriaLabel() {
        let validationStatus = '';
        if (this.invalid && this.validationMessage) {
            validationStatus = ` ${this.errorAriaLabel}: ${this.validationMessage}`;
        }
        else if (this.isSuccess && this.validationMessage) {
            validationStatus = ` ${this.successAriaLabel}: ${this.validationMessage}`;
        }
        return ((this.inputAriaLabel || // for backward-compatibility with previous version
            [this.label, this.optionalText] // the rest of the labels
                .filter(Boolean)
                .join(' ')) + validationStatus);
    }
    /**
     * The unique IDs of the instruction and additional accessibility description.
     * @public
     */
    get ariaDescribedbyIds() {
        let ids = '';
        if (this.instructionalText) {
            ids += `instructional-${this.id}`;
        }
        if (this.a11yAriaDescription) {
            ids += ` ${this.id}-a11y-aria-description`;
        }
        return ids;
    }
    /**
     * Aria label for autocomplete based on attributes.
     * @public
     * @internal
     */
    get ariaAutocompleteComputed() {
        if (this.autocomplete && !this.multiple && this.searchMode === 'startsWith') {
            return 'both';
        }
        return 'list';
    }
    /**
     * Aria label for aria-activedescendant.
     * @public
     * @internal
     */
    get ariaActiveDescendantComputed() {
        var _a;
        if (!this.open || this.focusedIndex === -1) {
            return null;
        }
        return (_a = this.filteredOptions[this.focusedIndex]) === null || _a === void 0 ? void 0 : _a.id;
    }
    /**
     * Sets the value of the input and combobox and emits an input event.
     * @internal
     * @private
     */
    setValue(value) {
        this.control.value = value;
        this.value = value;
        this.$emit('change', value);
    }
    /**
     * Applies the substring highlighting to the options if enabled.
     * @internal
     */
    applySubstringHighlighting() {
        if (!this.highlightSubstrings)
            return;
        this.options.forEach((option) => {
            const from = option.text;
            const chunks = from.split(new RegExp(`(${this.filter})`, 'gi'));
            option.innerHTML = '';
            chunks.forEach((chunk) => {
                if (chunk.toLowerCase() === this.filter.toLowerCase()) {
                    const spanHighlighted = document.createElement('mark');
                    // Set colors via css variables to cascade from combobox into slotted options, values defined in combobox.scss
                    spanHighlighted.style.cssText +=
                        'background-color: var(--saf-combobox-highlight-background)';
                    spanHighlighted.style.cssText += 'color: var(--saf-combobox-highlight-text)';
                    spanHighlighted.textContent = chunk;
                    option.appendChild(spanHighlighted);
                }
                else {
                    const spanRegular = document.createElement('span');
                    spanRegular.textContent = chunk;
                    option.appendChild(spanRegular);
                }
            });
        });
    }
    /**
     * Emits clear event when clear button is clicked.
     * @public
     * @remarks
     * Emits clear event when clear button is clicked.
     * @public
     */
    clearHandler(e) {
        e.preventDefault();
        this.$emit('clear');
        this.control.focus();
    }
    /**
     * @internal
     * Focus the control and scroll the first selected option into view.
     */
    focusAndScrollOptionIntoView() {
        if (this.contains(document.activeElement)) {
            this.control.focus();
            if (this.filteredOptions.length > 0 && this.focusedIndex >= 0) {
                requestAnimationFrame(() => {
                    this.filteredOptions[this.focusedIndex].scrollIntoView({ block: 'nearest' });
                });
            }
        }
    }
    /**
     * Autocomplete the input and highlight the rest of the text.
     */
    applyAutocomplete(isDeleting) {
        if (
        // when autocomplete is on
        this.autocomplete &&
            // in single select mode
            !this.multiple &&
            // and there are available options
            this.filteredOptions.length &&
            // and the user is typing, not deleting
            !isDeleting &&
            // and the filter is not empty (fixes issues with this code running and overriding the value on mount)
            this.filter.length) {
            const firstOption = this.filteredOptions[0];
            this.setValue(firstOption.text);
            this.control.focus();
            this.control.setSelectionRange(this.filter.length, this.control.value.length, 'backward');
        }
    }
    /**
     * @internal
     * Filter available options by text value.
     */
    filterOptions(isDeleting = false) {
        if (!this.searchOffline) {
            return;
        }
        let allOptions = this._options;
        if (this.virtualized && this.virtualizedOptions.length) {
            allOptions = this.virtualizedOptions;
        }
        if (this.searchMode === ComboboxSearchModeEnum.startsWith) {
            this.filteredOptions = allOptions.filter((option) => option.text.toLowerCase().startsWith(this.filter.toLowerCase()));
            this.applyAutocomplete(isDeleting);
        }
        else {
            this.filteredOptions = allOptions.filter((option) => option.text.toLowerCase().includes(this.filter.toLowerCase()));
        }
        if (this.virtualized && this.virtualizedOptions.length) {
            let totalOptions = this.virtualizedOptions.length;
            if (this.filter.length > 0) {
                totalOptions = this.filteredOptions.length;
            }
            const bottomHeight = this.estimatedItemHeight * totalOptions -
                this.estimatedItemHeight * (this.visibleOptions + this.virtualizationPadding * 2);
            if (totalOptions === 0) {
                this.resizeListbox(1, 0, 0, true);
            }
            else {
                this.resizeListbox(totalOptions, 0, bottomHeight, true);
            }
            this.renderOptions(0, this.visibleOptions + this.virtualizationPadding);
        }
        this.applySubstringHighlighting();
        // hiding not selected options
        allOptions.forEach((o) => {
            o.hidden = !this.filteredOptions.includes(o);
        });
        this.setOptionsAriaLabels();
        this.empty = this.filteredOptions.length === 0;
        if (this.empty) {
            this.announceEmptyOptions(this.announceDelay);
        }
    }
    /**
     * @param e - the input event
     * @internal
     * Handle content changes on the control input.
     */
    inputHandler(e) {
        e.stopPropagation();
        const isDeleting = ['deleteContentBackward', 'deleteByCut'].includes(e.inputType);
        this.filter = this.control.value;
        this.value = this.control.value;
        this.$emit('input', this.value);
        if (this.focusedIndex >= 0 && this.filteredOptions.length > 0) {
            this.filteredOptions[this.focusedIndex].setAttribute('data-focus', 'false');
        }
        this.focusedIndex = -1;
        this.filterOptions(isDeleting);
        if (!this.open) {
            this.open = true;
        }
        if (isDeleting || !this.filter.length) {
            return true;
        }
        return;
    }
    /**
     * Method for announcing empty options for AT
     *
     * @internal
     * @private.
     */
    announceEmptyOptions(delay) {
        clearTimeout(this.announcerTimeout);
        this.announcerTimeout = setTimeout(() => {
            let emptyText = 'No results found';
            const assignedNodes = this.emptySlot.assignedNodes({ flatten: true });
            for (const node of assignedNodes) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    const element = node;
                    if (element.localName === getComponentName('saf-option')) {
                        emptyText = `${node.textContent}`;
                    }
                }
            }
            SafA11y.announce(emptyText);
        }, delay);
    }
    /**
     * @internal
     * @param e - the keyboard event
     * Handle keydown actions for listbox navigation.
     */
    keydownHandler(e) {
        const { key, target } = e;
        if (e.ctrlKey || e.shiftKey || this.readonly) {
            return true;
        }
        switch (key) {
            case 'Enter': {
                if (e.composedPath().some((el) => el instanceof Button) ||
                    target instanceof Chip) {
                    return true;
                }
                if (this.open && this.focusedIndex >= 0 && this.filteredOptions.length > 0) {
                    this.filteredOptions[this.focusedIndex].click();
                }
                if (this.open && (!this.multiple || this.focusedIndex === -1)) {
                    this.open = false;
                }
                break;
            }
            case 'Escape': {
                if (this.open) {
                    this.open = false;
                    e.preventDefault();
                }
                else if (this.clearOnEscape && this.control.value) {
                    this.$emit('clear');
                }
                else {
                    return true;
                }
                break;
            }
            case 'ArrowUp': {
                if (this.open && this.filteredOptions.length > 0) {
                    if (this.focusedIndex >= 0) {
                        this.filteredOptions[this.focusedIndex].setAttribute('data-focus', 'false');
                    }
                    this.focusedIndex--;
                    if (this.focusedIndex < 0) {
                        this.focusedIndex = -1;
                        this.control.focus();
                    }
                    else {
                        this.filteredOptions[this.focusedIndex].setAttribute('data-focus', 'true');
                    }
                    this.focusAndScrollOptionIntoView();
                }
                break;
            }
            case 'ArrowDown': {
                // alt + arrow down
                if (e.altKey) {
                    this.control.focus();
                    this.open = true;
                    break;
                }
                if (!this.open) {
                    this.open = true;
                }
                if (this.open && this.filteredOptions.length > 0) {
                    const current = this.filteredOptions[this.focusedIndex];
                    if (this.focusedIndex === -1 || current.getAttribute('data-focus') === 'true') {
                        if (this.focusedIndex >= 0) {
                            current.setAttribute('data-focus', 'false');
                        }
                        this.focusedIndex++;
                        if (this.focusedIndex > this.filteredOptions.length - 1) {
                            this.focusedIndex = this.filteredOptions.length - 1;
                        }
                    }
                    this.filteredOptions[this.focusedIndex].setAttribute('data-focus', 'true');
                    this.focusAndScrollOptionIntoView();
                }
                if (this.empty) {
                    this.announceEmptyOptions(this.announceDelay);
                }
                break;
            }
            case 'PageUp': {
                if (this.open && this.filteredOptions.length > 0) {
                    if (this.focusedIndex >= 0) {
                        this.filteredOptions[this.focusedIndex].setAttribute('data-focus', 'false');
                    }
                    this.focusedIndex -= 10;
                    if (this.focusedIndex < 0) {
                        this.focusedIndex = 0;
                    }
                    this.filteredOptions[this.focusedIndex].setAttribute('data-focus', 'true');
                    this.focusAndScrollOptionIntoView();
                    if (this.virtualized) {
                        const offsetHeight = this.listbox.offsetHeight;
                        this.listbox.scrollTop -= offsetHeight;
                    }
                }
                break;
            }
            case 'PageDown': {
                if (this.open && this.filteredOptions.length > 0) {
                    if (this.focusedIndex >= 0) {
                        this.filteredOptions[this.focusedIndex].setAttribute('data-focus', 'false');
                    }
                    this.focusedIndex += 10;
                    if (this.focusedIndex > this.filteredOptions.length - 1) {
                        this.focusedIndex = this.filteredOptions.length - 1;
                    }
                    this.filteredOptions[this.focusedIndex].setAttribute('data-focus', 'true');
                    this.focusAndScrollOptionIntoView();
                    if (this.virtualized) {
                        const offsetHeight = this.listbox.offsetHeight;
                        this.listbox.scrollTop += offsetHeight;
                    }
                }
                break;
            }
            case 'Home': {
                if (this.open && this.filteredOptions.length > 0) {
                    if (this.focusedIndex >= 0) {
                        this.filteredOptions[this.focusedIndex].setAttribute('data-focus', 'false');
                    }
                    this.focusedIndex = 0;
                    this.filteredOptions[this.focusedIndex].setAttribute('data-focus', 'true');
                    this.focusAndScrollOptionIntoView();
                    if (this.virtualized) {
                        this.listbox.scrollTop = 0;
                    }
                }
                break;
            }
            case 'End': {
                if (this.open && this.filteredOptions.length > 0) {
                    if (this.focusedIndex >= 0) {
                        this.filteredOptions[this.focusedIndex].setAttribute('data-focus', 'false');
                    }
                    this.focusedIndex = this.filteredOptions.length - 1;
                    this.filteredOptions[this.focusedIndex].setAttribute('data-focus', 'true');
                    this.focusAndScrollOptionIntoView();
                    if (this.virtualized) {
                        const scrollBottom = this.filteredOptions.length * this.estimatedItemHeight;
                        this.listbox.scrollTop = scrollBottom;
                    }
                }
                break;
            }
            default: {
                return true;
            }
        }
    }
    /**
     *
     * @param e - The focus event
     * @internal
     * Handle focus state when the element or its children lose focus.
     */
    focusoutHandler(e) {
        if (!this.open) {
            return true;
        }
        const focusTarget = e.relatedTarget;
        if (this.isSameNode(focusTarget)) {
            this.focus();
            return;
        }
        if (!this.options || !this.options.includes(focusTarget)) {
            this.open = false;
        }
    }
    /**
     * @param e - the mouse event
     * @internal
     * Handle opening and closing the listbox when the combobox is clicked.
     */
    clickHandler(e) {
        var _a;
        if (this.disabled || this.readonly || e.target instanceof Chip) {
            return;
        }
        if (this.open) {
            const captured = e.target.closest(`option,[role=option]`);
            if (!captured || (captured === null || captured === void 0 ? void 0 : captured.disabled)) {
                e.stopPropagation();
                return;
            }
            if (!this.multiple) {
                this.setValue(captured.text);
            }
            const idx = this.filteredOptions.indexOf(captured);
            if (idx >= 0 && idx !== this.focusedIndex) {
                (_a = this.filteredOptions[this.focusedIndex]) === null || _a === void 0 ? void 0 : _a.setAttribute('data-focus', 'false');
                this.focusedIndex = idx;
            }
            if (this.closeOnSelect) {
                this.open = false;
            }
            else {
                this.open = true;
            }
            return;
        }
        // not opening if empty options
        if (!this.options.length) {
            return;
        }
        this.open = !this.open;
        if (this.open) {
            this.control.focus();
        }
        return true;
    }
    /**
     * Resets the focused item index if virtualized is not true
     *
     * @internal
     */
    resetFocusedIndex() {
        var _a;
        if (!((_a = this.filteredOptions) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        this.filteredOptions.forEach((el) => el.setAttribute('data-focus', 'false'));
        if (this.virtualized) {
            return;
        }
        this.focusedIndex = this.filteredOptions.findIndex((el) => el.selected);
    }
    setupVirtualization() {
        const bottomHeight = this.estimatedItemHeight * this._options.length -
            this.estimatedItemHeight * (this.visibleOptions + this.virtualizationPadding * 2);
        this.virtualizedOptions = [...this.options];
        this._options.forEach((o) => {
            o.remove();
        });
        this.resizeListbox(this.virtualizedOptions.length, 0, bottomHeight, true);
        this.renderOptions(0, this.visibleOptions + this.virtualizationPadding);
    }
    renderOptions(startIndex, endIndex) {
        this._options.forEach((o) => {
            o.remove();
        });
        if (this.filter.length > 0) {
            this._options = this.filteredOptions.slice(startIndex, endIndex);
        }
        else {
            this._options = this.virtualizedOptions.slice(startIndex, endIndex);
        }
        for (let i = 0; i < this._options.length; i++) {
            this.appendChild(this._options[i]);
        }
    }
    handleScroll(event) {
        const scrollPosition = event.target.scrollTop;
        this.scrollPosition = scrollPosition || 0;
        let totalOptions = this._options.length;
        if (this.virtualized) {
            totalOptions = this.virtualizedOptions.length;
            if (this.filter.length > 0) {
                totalOptions = this.filteredOptions.length;
            }
        }
        if (this.isAtScrollEnd) {
            this.$emit('scroll-end');
        }
        if (!this.virtualized) {
            return;
        }
        // For virtualization
        const startIndexScroll = Math.floor(this.scrollPosition / this.estimatedItemHeight);
        let startIndex = startIndexScroll - this.virtualizationPadding;
        if (startIndex < 0) {
            startIndex = 0;
        }
        let endIndex = startIndexScroll + this.visibleOptions + this.virtualizationPadding;
        if (endIndex > this.virtualizedOptions.length) {
            endIndex = this.virtualizedOptions.length;
        }
        if (this.filter.length > 0 && endIndex > this.filteredOptions.length) {
            endIndex = totalOptions;
        }
        const topSpacerHeight = startIndex * this.estimatedItemHeight;
        const bottomSpacerHeight = this.listboxMenuHeight - endIndex * this.estimatedItemHeight;
        this.resizeListbox(totalOptions, topSpacerHeight, bottomSpacerHeight, false);
        this.renderOptions(startIndex, endIndex);
    }
    /**
     * Determines if the scroll has reached the end of the container.
     * @internal
     */
    get isAtScrollEnd() {
        const threshold = 2;
        const currentScrollTop = this.listbox.scrollTop;
        const isScrollingDown = currentScrollTop > this.previousScrollTop;
        const isAtEnd = currentScrollTop + this.listbox.offsetHeight >= this.listbox.scrollHeight - threshold;
        // Update previous scroll position
        this.previousScrollTop = currentScrollTop;
        // Only return true if scrolling down and at the end
        return isScrollingDown && isAtEnd;
    }
    /**
     * @param totalOptions - total options available
     * @param topHeight - height of the top spacer
     * @param bottomHeight - height of the bottom spacer
     * @param resetScroll - reset the scroll position on top
     * @internal
     * Resize the listbox and spacers for virtualization.
     */
    resizeListbox(totalOptions, topHeight, bottomHeight, resetScroll = false) {
        if (totalOptions < this.visibleOptions) {
            this.listbox.style.maxHeight = `280px`;
            this.listbox.style.height = `auto`;
            this.topSpacer.style.height = `0px`;
            this.bottomSpacer.style.height = `0px`;
        }
        else {
            this.listboxMenuHeight = this.estimatedItemHeight * totalOptions;
            this.listbox.style.height = `${this.listboxMenuHeight}px`;
        }
        this.topSpacer.style.height = `${topHeight}px`;
        this.bottomSpacer.style.height = `${bottomHeight}px`;
        if (resetScroll) {
            this.listbox.scrollTo({ top: 0, behavior: 'auto' });
        }
    }
    /**
     * Public method to achieve autocomplete in controlled form.
     * @public
     */
    setAutocomplete(from = '', to = '') {
        if (!to.includes(from, 0)) {
            return;
        }
        this.setValue(to);
        this.control.focus();
        this.control.setSelectionRange(from.length, this.control.value.length, 'backward');
        this.filter = to;
        this.filterOptions();
    }
    /**
     * Select combobox input content
     * @public
     */
    select() {
        this.control.select();
    }
    /**
     * @internal
     * Calculate and apply listbox positioning based on available viewport space.
     */
    setPositioning() {
        var _a;
        // Root element
        const root = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.root');
        if (this.$fastController.isConnected) {
            this.cleanup = autoUpdate(root, this.listbox, () => __awaiter(this, void 0, void 0, function* () {
                var _a;
                const { middlewareData, x, y } = yield computePosition(root, this.listbox, {
                    placement: 'bottom',
                    strategy: 'fixed',
                    middleware: [
                        autoPlacement({
                            allowedPlacements: ['top', 'bottom'],
                        }),
                        offset(6),
                        size({
                            apply: ({ availableHeight, rects }) => {
                                // Calculate additional space needed for listbox padding and borders
                                const listboxStyle = window.getComputedStyle(this.listbox);
                                const listboxAdjustments = parseFloat(listboxStyle.paddingTop) +
                                    parseFloat(listboxStyle.paddingBottom) +
                                    parseFloat(listboxStyle.borderTopWidth) +
                                    parseFloat(listboxStyle.borderBottomWidth);
                                // Maximum height to display all visible options plus padding/borders
                                const maxAvailableHeight = this.estimatedItemHeight * this.visibleOptions +
                                    listboxAdjustments;
                                // Calculate how many whole options can fit within available viewport height
                                const visibleOptionsInAvailableHeight = Math.floor((availableHeight - listboxAdjustments) /
                                    this.estimatedItemHeight);
                                // Calculate optimal height that fits a whole number of options plus padding/borders
                                const adjustedAvailableHeight = visibleOptionsInAvailableHeight * this.estimatedItemHeight +
                                    listboxAdjustments;
                                Object.assign(this.listbox.style, {
                                    maxHeight: `${adjustedAvailableHeight < maxAvailableHeight
                                        ? adjustedAvailableHeight
                                        : maxAvailableHeight}px`,
                                    width: `${rects.reference.width}px`,
                                });
                            },
                        }),
                        hide(),
                    ],
                });
                if ((_a = middlewareData.hide) === null || _a === void 0 ? void 0 : _a.referenceHidden) {
                    this.open = false;
                    this.cleanup();
                    return;
                }
                Object.assign(this.listbox.style, {
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    transform: `translate(${x}px, ${y}px)`,
                });
            }));
        }
    }
    /**
     * @public
     * Public method for opening the listbox.
     */
    openMenu() {
        this.open = true;
    }
    /**
     * @public
     * Public method for closing the listbox.
     */
    closeMenu() {
        this.open = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.ariaControls = 'listbox-proxy';
        this.addEventListener('focus', this.handleFocus);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('focus', this.handleFocus);
    }
    syncListboxProxy() {
        if (typeof this.listboxProxy != 'object' || !(this.listboxProxy instanceof HTMLElement)) {
            return;
        }
        this.listboxProxy.innerHTML = '';
        const focusedOption = this.filteredOptions[this.focusedIndex];
        if (focusedOption) {
            const optionProxy = document.importNode(focusedOption, true);
            this.listboxProxy.appendChild(optionProxy);
            [
                'aria-setsize',
                'aria-posinset',
                'aria-selected',
                'aria-checked',
                'aria-current',
            ].forEach((attr) => {
                const value = focusedOption.getAttribute(attr);
                if (value !== null) {
                    optionProxy.setAttribute(attr, value);
                }
                else {
                    optionProxy.removeAttribute(attr);
                }
            });
        }
    }
    focusedIndexChanged() {
        Updates.enqueue(() => this.syncListboxProxy());
    }
    handleChange(source) {
        if (typeof source == 'object' && source instanceof Option) {
            Updates.enqueue(() => this.syncListboxProxy());
        }
    }
}
__decorate([
    observable
], Combobox.prototype, "empty", void 0);
__decorate([
    observable
], Combobox.prototype, "focusedIndex", void 0);
__decorate([
    observable
], Combobox.prototype, "slottedOptions", void 0);
__decorate([
    observable
], Combobox.prototype, "slottedEmptyOption", void 0);
__decorate([
    attr
], Combobox.prototype, "id", void 0);
__decorate([
    attr({ attribute: 'required', mode: 'boolean' })
], Combobox.prototype, "required", void 0);
__decorate([
    attr({ attribute: 'disabled', mode: 'boolean' })
], Combobox.prototype, "disabled", void 0);
__decorate([
    attr({ attribute: 'a11y-keyboard-help' })
], Combobox.prototype, "a11yKeyboardHelp", void 0);
__decorate([
    attr({ attribute: 'progress-ring-aria-label' })
], Combobox.prototype, "progressRingAriaLabel", void 0);
__decorate([
    attr({ attribute: 'empty-option-text' })
], Combobox.prototype, "emptyOptionText", void 0);
__decorate([
    attr
], Combobox.prototype, "placeholder", void 0);
__decorate([
    attr({ mode: 'boolean' })
], Combobox.prototype, "readonly", void 0);
__decorate([
    observable
], Combobox.prototype, "value", void 0);
__decorate([
    attr({ attribute: 'invalid', mode: 'boolean' }),
    observable
], Combobox.prototype, "invalid", void 0);
__decorate([
    attr({ attribute: 'is-success', mode: 'boolean' }),
    observable
], Combobox.prototype, "isSuccess", void 0);
__decorate([
    attr({ attribute: 'label' })
], Combobox.prototype, "label", void 0);
__decorate([
    attr({ attribute: 'input-aria-label' })
], Combobox.prototype, "inputAriaLabel", void 0);
__decorate([
    attr({ attribute: 'instructional-text' })
], Combobox.prototype, "instructionalText", void 0);
__decorate([
    attr({ attribute: 'required-text' })
], Combobox.prototype, "requiredText", void 0);
__decorate([
    attr({ attribute: 'optional-text' })
], Combobox.prototype, "optionalText", void 0);
__decorate([
    attr({ attribute: 'loading', mode: 'boolean' })
], Combobox.prototype, "loading", void 0);
__decorate([
    attr({ attribute: 'clearable', mode: 'boolean' })
], Combobox.prototype, "clearable", void 0);
__decorate([
    observable
], Combobox.prototype, "open", void 0);
__decorate([
    attr
], Combobox.prototype, "density", void 0);
__decorate([
    attr({ attribute: 'validation-message' })
], Combobox.prototype, "validationMessage", void 0);
__decorate([
    attr({ attribute: 'success-aria-label' })
], Combobox.prototype, "successAriaLabel", void 0);
__decorate([
    attr({ attribute: 'error-aria-label' })
], Combobox.prototype, "errorAriaLabel", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-description' })
], Combobox.prototype, "a11yAriaDescription", void 0);
__decorate([
    attr({ attribute: 'multiple', mode: 'boolean' })
], Combobox.prototype, "multiple", void 0);
__decorate([
    attr({ attribute: 'close-on-select', mode: 'boolean' })
], Combobox.prototype, "closeOnSelect", void 0);
__decorate([
    attr({ attribute: 'clear-on-escape', mode: 'boolean' })
], Combobox.prototype, "clearOnEscape", void 0);
__decorate([
    attr({ attribute: 'open-on-focus', mode: 'boolean' })
], Combobox.prototype, "openOnFocus", void 0);
__decorate([
    attr({ attribute: 'search-offline', mode: 'boolean' })
], Combobox.prototype, "searchOffline", void 0);
__decorate([
    attr({ attribute: 'search-mode' })
], Combobox.prototype, "searchMode", void 0);
__decorate([
    attr({ attribute: 'autocomplete', mode: 'boolean' })
], Combobox.prototype, "autocomplete", void 0);
__decorate([
    attr({ attribute: 'browser-autocomplete' })
], Combobox.prototype, "browserAutocomplete", void 0);
__decorate([
    attr({ attribute: 'virtualized', mode: 'boolean' })
], Combobox.prototype, "virtualized", void 0);
__decorate([
    attr({ attribute: 'estimated-item-height' })
], Combobox.prototype, "estimatedItemHeight", void 0);
__decorate([
    attr({ attribute: 'virtualization-padding' })
], Combobox.prototype, "virtualizationPadding", void 0);
__decorate([
    attr({ attribute: 'highlight-substrings', mode: 'boolean' })
], Combobox.prototype, "highlightSubstrings", void 0);
__decorate([
    observable
], Combobox.prototype, "slottedChips", void 0);
__decorate([
    volatile
], Combobox.prototype, "computedAriaLabel", null);
__decorate([
    volatile
], Combobox.prototype, "ariaDescribedbyIds", null);
class DelegatesARIACombobox {
}
__decorate([
    observable
], DelegatesARIACombobox.prototype, "ariaAutoComplete", void 0);
__decorate([
    observable
], DelegatesARIACombobox.prototype, "ariaControls", void 0);
applyMixins(DelegatesARIACombobox, DelegatesARIAListbox);
applyMixins(Combobox, StartEnd, DelegatesARIACombobox);

export { Combobox, DelegatesARIACombobox, FormAssociatedCombobox };
