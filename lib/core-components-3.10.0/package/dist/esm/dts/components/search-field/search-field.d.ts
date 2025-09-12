import { ComponentDensity } from '../../utils/index.js';
import { TooltipPosition } from '../tooltip/tooltip.options.js';
import { FormAssociatedSearch } from './search-field.form-associated.js';
import { ARIAGlobalStatesAndProperties } from '../aria-global/aria-global.js';
import { StartEnd } from '../../utils/start-end-template.js';
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
export declare class SearchField extends FormAssociatedSearch {
    /**
     * When true, the control will be immutable by user interaction.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information.
     * @public
     * @remarks
     * HTML Attribute: readonly
     */
    readOnly: boolean;
    protected readOnlyChanged(): void;
    /**
     * Indicates that this element should get focus after the page finishes loading.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautofocus | autofocus HTML attribute}
     * for more information.
     * @public
     * @remarks
     * HTML Attribute: autofocus
     */
    autofocus: boolean;
    protected autofocusChanged(): void;
    /**
     * Sets the placeholder value of the element, generally used to provide a hint to the user.
     * @public
     * @remarks
     * HTML Attribute: placeholder
     * Using this attribute does is not a valid substitute for a labeling element.
     */
    placeholder: string;
    protected placeholderChanged(): void;
    /**
     * Allows associating a {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist | datalist}
     * to the element by {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/id}.
     * @public
     * @remarks
     * HTML Attribute: list
     */
    list: string;
    protected listChanged(): void;
    /**
     * The maximum number of characters a user can enter.
     * @public
     * @remarks
     * HTMLAttribute: maxlength
     */
    maxlength: number;
    protected maxlengthChanged(): void;
    /**
     * The minimum number of characters a user can enter.
     * @public
     * @remarks
     * HTMLAttribute: minlength
     */
    minlength: number;
    protected minlengthChanged(): void;
    /**
     * A regular expression that the value must match to pass validation.
     * @public
     * @remarks
     * HTMLAttribute: pattern
     */
    pattern: string;
    protected patternChanged(): void;
    /**
     * Sets the width of the element to a specified number of characters.
     * @public
     * @remarks
     * HTMLAttribute: size
     */
    size: number;
    protected sizeChanged(): void;
    /**
     * Controls whether or not to enable spell checking for the input field, or if the default spell checking configuration should be used.
     * @public
     * @remarks
     * HTMLAttribute: size
     */
    spellcheck: boolean;
    protected spellcheckChanged(): void;
    validate(): void;
    /**
     * Clears the value, focuses the input field and emits a `clear` event.
     * @public
     */
    handleClearInput(): void;
    /**
     * The item ID
     *
     * @public
     * @remarks
     * HTML Attribute: id
     */
    id: string;
    /**
     * Text that describes the input
     *
     * @public
     */
    label?: string;
    /**
     * Provides additional instructional text for extra guidance for the search field.
     * @public
     * @remarks
     * paragraph element that takes instructional text
     */
    instructionalText?: string;
    /**
     * 'Label for the search button tooltip.
     *
     * @public
     */
    searchButtonLabel: string;
    /**
     * Label for the clear button tooltip.
     *
     * @public
     */
    clearButtonLabel: string;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    /**
     * A description for the search field that is only visible to screen readers.
     *
     * @public
     */
    a11yAriaDescription: string;
    /**
     * Position of the clear button tooltip.
     *
     * @public
     */
    clearButtonTooltipPlacement: TooltipPosition;
    /**
     * Position of the search button tooltip.
     *
     * @public
     */
    searchButtonTooltipPlacement: TooltipPosition;
    /**
     * Whether or not the search button tooltip is shown.
     *
     * @public
     */
    hideSearchButtonTooltip: boolean;
    /**
     * Controls <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete">browser autofill</a> behavior. (Ex: `off`, `on`, `name`, `email`) `string`
     *
     * @public
     */
    autocomplete?: string;
    get ariaDescribedbyIds(): string;
    preFilterSlot: HTMLElement[] | null;
    /**
     * Handle click on search
     * @public
     */
    search(): void;
    dataLists: HTMLDivElement;
    slottedDataChanged(): void;
}
/**
 * Includes ARIA states and properties relating to the ARIA textbox role
 *
 * @public
 */
export declare class DelegatesARIASearch {
}
export interface DelegatesARIASearch extends ARIAGlobalStatesAndProperties {
}
export interface SearchField extends StartEnd, DelegatesARIASearch {
}
