import { FormAssociatedCheckbox } from './checkbox.form-associated.js';
/**
 * A Checkbox Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#checkbox | ARIA checkbox }.
 *
 * @slot checked-indicator - The checked indicator
 * @slot indeterminate-indicator - The indeterminate indicator
 * @slot - The default slot for the label
 * @csspart control - The element representing the visual checkbox control
 * @csspart label - The label
 * @fires change - Emits a custom change event when the checked state changes
 *
 * @public
 */
export declare class Checkbox extends FormAssociatedCheckbox {
    /**
     * This is a state in which it's impossible to say whether the item is toggled on or off.
     */
    indeterminate: boolean;
    constructor();
    private toggleChecked;
    /**
     * Pass through the input element.
     *
     * @public
     */
    id: string;
    get internalId(): string;
    /**
     * Pass through for a div that adds additional information for the button, which uses aria-describedby to associate the two
     *
     * @a11y
     * @public
     */
    a11yAriaDescription: string | undefined;
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
     * Defines a string value that labels the error icon, when icons are not just presentational but used to communicate status.
     *
     * @a11y
     * @public
     */
    errorAriaLabel: string;
    /**
     * A label that is passed from the component to the checkbox input element.
     *
     * @a11y
     * @public
     */
    a11yAriaLabel: string;
    private checkedInternal;
    connectedCallback(): void;
    changeHandler: () => void;
    private syncCheckedState;
    private updateForm;
    checkedChanged(prev: boolean | undefined): void;
    indeterminateChanged(): void;
    protected canAnnounceValidation: boolean;
    invalidChanged(): void;
    validationMessageChanged(): void;
    protected announceValidation(): void;
}
