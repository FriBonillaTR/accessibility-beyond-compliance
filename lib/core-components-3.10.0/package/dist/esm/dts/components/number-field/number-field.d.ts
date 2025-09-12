import { ComponentDensity } from '../../utils/index.js';
import { StartEnd } from '../../utils/start-end-template.js';
import { DelegatesARIATextbox } from '../text-field/text-field.js';
import { FormAssociatedNumberField } from './number-field.form-associated.js';
/**
 * A class derived from the NumberField foundation component
 */
export declare class NumberField extends FormAssociatedNumberField {
    /**
     * When true, the control will be immutable by user interaction.
     * @public
     * @remarks
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information.
     * HTML Attribute: readonly
     */
    readOnly: boolean;
    /**
     * Indicates that this element should get focus after the page finishes loading.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautofocus | autofocus HTML attribute}
     * for more information.
     * @public
     * @remarks
     * HTML Attribute: autofocus
     */
    autofocus: boolean;
    /**
     * When true, spin buttons will not be rendered
     * @public
     * @remarks
     * HTML Attribute: autofocus
     */
    hideStep: boolean;
    /**
     * Sets the placeholder value of the element, generally used to provide a hint to the user.
     * @public
     * @remarks
     * HTML Attribute: placeholder
     * Using this attribute does is not a valid substitute for a labeling element.
     */
    placeholder: string;
    /**
     * Allows associating a {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist | datalist}
     * to the element by {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/id}.
     * @public
     * @remarks
     * HTML Attribute: list
     */
    list: string;
    /**
     * The maximum number of characters a user can enter.
     * @public
     * @remarks
     * HTMLAttribute: maxlength
     */
    maxlength: number;
    /**
     * The minimum number of characters a user can enter.
     * @public
     * @remarks
     * HTMLAttribute: minlength
     */
    minlength: number;
    /**
     * Sets the width of the element to a specified number of characters.
     * @public
     * @remarks
     * HTMLAttribute: size
     */
    size: number;
    /**
     * Amount to increment or decrement the value by
     * @public
     * @remarks
     * HTMLAttribute: step
     */
    step: number;
    /**
     * The maximum the value can be
     * @public
     * @remarks
     * HTMLAttribute: max
     */
    max: number;
    /**
     * The minimum the value can be
     * @public
     * @remarks
     * HTMLAttribute: min
     */
    min: number;
    /**
     * The value property, typed as a number.
     *
     * @public
     */
    get valueAsNumber(): number;
    set valueAsNumber(next: number);
    validate(): void;
    /**
     * Increments the value using the step value
     *
     * @public
     */
    stepUp(): void;
    /**
     * Decrements the value using the step value
     *
     * @public
     */
    stepDown(): void;
    /**
     * Selects all the text in the number field
     *
     * @public
     */
    select(): void;
    supportsElementInternal: boolean;
    /**
     * Text that describes the input.
     *
     * @public
     */
    label?: string;
    /**
     * Provides additional instructional text that provides extra guidance for the input.
     *
     * @public
     */
    instructionalText?: string;
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
     * @remarks
     * This boolean value exists as an api for taking in async behaviours
     * (i.e. uploading or password validation) that need success state reflected
     * in tandem with isValid
     */
    isSuccess: boolean | undefined;
    /**
     * Defines a string value that labels the success icon, when icons are not just presentational but used to communicate status.
     *
     * @public
     * @a11y
     */
    successAriaLabel: string;
    /**
     * Defines a string value that labels the error icon, when icons are not just presentational but used to communicate status.
     *
     * @public
     * @a11y
     */
    errorAriaLabel: string;
    /**
     * Adds additional character to the label when number-field is required.
     *
     * @public
     */
    requiredText?: string;
    /**
     * A description for the number input that is only visible to screen readers, passed to a hidden span element, connected to the input via aria-describedby.
     *
     * @public
     * @a11y
     */
    a11yAriaDescription: string;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    /**
     * Controls <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete">browser autofill</a> behavior.
     *
     * @public
     */
    autocomplete?: string;
    disconnectedCallback(): void;
    prevValue: string;
    protected canAnnounceValidation: boolean;
    isSuccessChanged(): void;
    invalidChanged(): void;
    validationMessageChanged(): void;
    protected announceValidation(): void;
}
export interface NumberField extends StartEnd, DelegatesARIATextbox {
}
