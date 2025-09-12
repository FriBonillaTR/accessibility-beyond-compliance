import { ComponentDensity } from '../../utils/index.js';
import { StartEnd } from '../../utils/start-end-template.js';
import { DelegatesARIAListbox } from '../listbox/listbox.abstract.js';
import { FormAssociatedSelect } from './select.form-associated.js';
import { SelectLabelPosition } from './select.options.js';
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
export declare class Select extends FormAssociatedSelect {
    /**
     * Whether or not the listbox is open.
     *
     * @public
     * @remarks
     * HTML Attribute: open
     */
    open: boolean;
    /**
     * The initial value of the control.
     * @category Attributes
     * @type string
     * @public
     */
    get value(): string;
    set value(next: string);
    /**
     * Sets the multiple property on the proxy element.
     *
     * @param prev - the previous multiple value
     * @param next - the current multiple value
     */
    multipleChanged(prev: boolean | undefined, next: boolean): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * The id attribute of the input element.
     *
     * @public
     */
    id: string;
    /**
     * A value is required or must be checked for the form to be submittable.
     *
     * @public
     */
    required: boolean;
    /**
     * Text that describes the select component.
     *
     * @public
     */
    label?: string;
    /**
     * The combobox aria label.
     *
     * @public
     */
    selectAriaLabel?: string;
    /**
     * Provides additional instructional text that provides extra guidance for the select component.
     *
     * @public
     */
    instructionalText?: string;
    /**
     * Adds additional character to the label when select is required.
     *
     * @public
     */
    requiredText?: string;
    /**
     * Set the position of the label.
     */
    placement: SelectLabelPosition;
    /**
     * Provides additional optional text to the label. Accepts any text but intended to indicate `(Required)` or `(Optional)`.
     *
     * @public
     */
    optionalText?: string;
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     *
     * @public
     */
    invalid: boolean;
    /**
     * The message displayed when the control is valid or invalid.
     *
     * @public
     */
    validationMessage: string;
    /**
     * Specifies that the control is valid and that a success message should display.
     *
     * @public
     */
    isSuccess: boolean | undefined;
    /**
     * 'Defines a string value that labels the success icon, when icons are not just presentational but used to communicate status.
     *
     * @public
     */
    successAriaLabel: string;
    /**
     * Defines a string value that labels the error icon, when icons are not just presentational but used to communicate status.
     * @public
     */
    errorAriaLabel: string;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    /**
     * Indicates if this select is used as a prefilter in a search component.
     *
     * @public
     */
    prefilter: boolean;
    /**
     * Controls <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete">browser aut
     *
     * @public
     */
    autocomplete?: string;
    /**
     * Timeout ms for keydown event capture string and select value.
     * @public
     */
    typedTimeout: number;
    private accessibilityElementsToParent;
    protected canAnnounceValidation: boolean;
    isSuccessChanged(): void;
    invalidChanged(): void;
    validationMessageChanged(): void;
    protected announceValidation(): void;
}
/**
 * Includes ARIA states and properties relating to the ARIA select role.
 *
 * @public
 */
export declare class DelegatesARIASelect {
    /**
     * See {@link https://www.w3.org/TR/wai-aria-1.2/#combobox} for more information
     * @public
     * @remarks
     * HTML Attribute: `aria-controls`
     */
    ariaControls: string | null;
}
export interface DelegatesARIASelect extends DelegatesARIAListbox {
}
export interface Select extends StartEnd, DelegatesARIASelect {
}
