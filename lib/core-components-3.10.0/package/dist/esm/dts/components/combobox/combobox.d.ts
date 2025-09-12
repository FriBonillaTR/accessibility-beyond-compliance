import { FASTElement, Notifier } from '../../@microsoft/fast-element/index.js';
import { ComponentDensity } from '../../utils/index.js';
import { StartEnd } from '../../utils/start-end-template.js';
import { DelegatesARIAListbox } from '../listbox/listbox.abstract.js';
import { Option } from '../option/option.js';
import { ComboboxSearchMode } from './combobox.options.js';
import { FormAssociated } from '../form-associated/form-associated.js';
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
declare class _Combobox extends FASTElement {
}
interface _Combobox extends FormAssociated {
}
declare const FormAssociatedCombobox_base: typeof _Combobox;
/**
 * A form-associated base class for the {@link (Combobox:class)} component.
 *
 * @beta
 */
export declare class FormAssociatedCombobox extends FormAssociatedCombobox_base {
    proxy: HTMLInputElement;
}
export declare class Combobox extends FormAssociatedCombobox {
    set options(value: Option[]);
    slottedEmptyOption: Element[];
    get hasSlottedOptions(): boolean;
    protected setOptionsAriaLabels(): void;
    protected setOptionNotifiers(): void;
    slottedOptionNotifiers: Notifier[];
    /**
     * Unique ID on the input text element.
     * @public
     */
    id: string;
    /**
     * Whether input field is required to enter.
     * Note that the validation state is controlled, and this attribute is only used for styling and accessibility purposes.
     * @public
     */
    required: boolean;
    /**
     * Toggles the disabled state for the combobox.
     * @public
     */
    disabled: boolean;
    /**
     * Text for listbox aria-description in multiple mode
     * @public
     * @a11y
     */
    a11yKeyboardHelp: string;
    /**
     * Text for progress ring aria label
     * @public
     * @a11y
     */
    progressRingAriaLabel: string;
    /**
     * Text to show in a disabled option when no results are found.
     * Appears only when the `search-offline` attribute is true.
     *
     * @category Label attributes
     * @public
     */
    emptyOptionText: string;
    /**
     * Sets the placeholder value of the input, generally used to provide a hint to the user.
     * @category Label attributes
     * @public
     */
    placeholder: string;
    /**
     * The readonly attribute for input.
     * @public
     */
    readonly: boolean;
    /**
     * Value of the input.
     * @public
     */
    value: string;
    valueChanged: () => void;
    /**
     * Validation state. If true, combobox is invalid.
     * If false, combobox is indeterminate.
     * @public
     */
    invalid: boolean;
    /**
     * Validation state. If true and invalid is false, combobox is in success state.
     * If false, combobox is in indeterminate state.
     * @public
     */
    isSuccess: boolean | undefined;
    /**
     * Label text value.
     * @category Label attributes
     * @public
     */
    label?: string;
    /**
     * Aria label to input element.
     * @public
     * @a11y
     */
    inputAriaLabel?: string;
    /**
     * Paragraph element that takes instructional text.
     * @category Label attributes
     * @public
     */
    instructionalText?: string;
    /**
     * Text to visually indicate the field is required.
     * @category Label attributes
     * @public
     */
    requiredText: string;
    /**
     * For accessibility purposes, allows author to mentions in text next to label
     * whether the field is optional '(Optional)' or '(Required)'.
     * @category Label attributes
     * @public
     */
    optionalText?: string;
    /**
     * Indicates loading state of the combobox. To be used with remote search.
     * @public
     */
    loading: boolean;
    /**
     * Indicates whether the input field is clearable when clicks on the clear button.
     * @public
     */
    clearable: boolean;
    /**
     * The density of the combobox
     * @public
     */
    density: ComponentDensity;
    /**
     * Text message to show when invalid is true (error)
     * or isSuccess is true (success).
     * @category Label attributes
     * @public
     */
    validationMessage: string;
    /**
     * The aria label for the success icon.
     * @public
     * @a11y
     */
    successAriaLabel: string;
    /**
     * The aria label for the error icon.
     * @public
     * @a11y
     */
    errorAriaLabel: string;
    /**
     * Pass through for a div that adds additional information for combobox
     * @public
     */
    a11yAriaDescription: string | undefined;
    /**
     * Specifies if combobox is in multiselect mode.
     * @public
     */
    multiple: boolean;
    multipleChanged(): void;
    /**
     * If true, listbox closes automatically on selecting an option.
     * If false, listbox remains open until user clicks outside or
     * presses escape key.
     * @public
     */
    closeOnSelect: boolean;
    /**
     * If true, when pressing escape key, combobox will emit the `clear` event.
     * @public
     */
    clearOnEscape: boolean;
    /**
     * If true, upon combobox focus, listbox will open.
     * @public
     */
    openOnFocus: boolean;
    /**
     * If true, combobox will search offline in the available options.
     * If false, typing in the input will not filter the options. You control the filtering and the options passed to the listbox.
     * @public
     */
    searchOffline: boolean;
    /**
     * Specifies search mode used when searchOffline is true.
     * @public
     */
    searchMode: ComboboxSearchMode;
    /**
     * If true, on input, first option label will be populated in the field.
     * Works only when `searchOffline==true`, `searchMode=='startsWith'` and `multiple==false`.
     * To use autocomplete with a custom search mode (`searchOffline==false`), refer to the `setAutocomplete()` public method.
     *
     * @public
     */
    autocomplete: boolean;
    /**
     * Specifies the autocomplete attribute for the input element,
     * which can be used to provide hints for the browser's autocomplete functionality.
     * @public
     */
    browserAutocomplete?: string;
    /**
     * Turns virtualization feature on and off for the listbox container.
     * @public
     */
    virtualized: boolean;
    /**
     * Default height for each option when virtualization is on.
     * @public
     */
    estimatedItemHeight: number;
    /**
     * Determines the number of options to render in the listbox before and after the virtualization window.
     * For example, if the listbox shows 7 items, and padding is 3 items, a total of 3+7+3=13 items will be rendered at a given moment.
     * @public
     */
    virtualizationPadding: number;
    /**
     * If true, the combobox will highlight the substring in the options
     * that matches the user input.
     * @public
     */
    highlightSubstrings: boolean;
    slottedChipsChanged(prev: HTMLElement[] | undefined, next: HTMLElement[]): void;
    /**
     * The unique IDs of the instruction and additional accessibility description.
     * @public
     */
    get ariaDescribedbyIds(): string;
    /**
     * Emits clear event when clear button is clicked.
     * @public
     * @remarks
     * Emits clear event when clear button is clicked.
     * @public
     */
    clearHandler(e: MouseEvent): void;
    /**
     * Autocomplete the input and highlight the rest of the text.
     */
    private applyAutocomplete;
    private setupVirtualization;
    renderOptions(startIndex: number, endIndex: number): void;
    handleScroll(event: UIEvent): boolean | void;
    /**
     * Public method to achieve autocomplete in controlled form.
     * @public
     */
    setAutocomplete(from?: string, to?: string): void;
    /**
     * Select combobox input content
     * @public
     */
    select(): void;
    /**
     * @public
     * Public method for opening the listbox.
     */
    openMenu(): void;
    /**
     * @public
     * Public method for closing the listbox.
     */
    closeMenu(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected syncListboxProxy(): void;
    focusedIndexChanged(): void;
    handleChange(source: any): void;
}
export declare class DelegatesARIACombobox {
    /**
     * See {@link https://www.w3.org/TR/wai-aria-1.2/#aria-autocomplete} for more information.
     *
     * @public
     * HTML Attribute: `aria-autocomplete`
     */
    ariaAutoComplete: 'inline' | 'list' | 'both' | 'none' | string | null;
    /**
     * See {@link https://www.w3.org/TR/wai-aria-1.2/#aria-controls} for more information.
     *
     * @public
     * HTML Attribute: `aria-controls`
     */
    ariaControls: string | null;
}
export interface DelegatesARIACombobox extends DelegatesARIAListbox {
}
export interface Combobox extends StartEnd, DelegatesARIACombobox {
}
export {};
