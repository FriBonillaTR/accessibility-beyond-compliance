import { ComponentDensity } from '../../utils/index.js';
import { StartEnd } from '../../utils/start-end-template.js';
import { ARIAGlobalStatesAndProperties } from '../aria-global/aria-global.js';
import { FormAssociatedTextField } from './text-field.form-associated.js';
import { TextFieldType } from './text-field.options.js';
/**
 * A Text Field Custom HTML Element.
 * Based largely on the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text | <input type="text" /> element }.
 * Not currently recommended for number input
 * @slot start - Content which can be provided before the input field
 * @slot end - Content which can be provided after the input field
 * @slot - The default slot for the label
 * @csspart label - The label
 * @csspart control - The logical control, the element wrapping the input field, including start and end slots
 * @csspart control - The text field element
 * @fires change - Fires a custom 'change' event when the value has changed
 *
 * @public
 */
export declare class TextField extends FormAssociatedTextField {
    /**
     * When true, the input will be immutable by user interaction.
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
     * Allows setting a type or mode of text.
     * @public
     * @remarks
     * HTML Attribute: type
     */
    type: TextFieldType;
    private typeChanged;
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
    /**
     * defines what action label (or icon) to present for the enter key on virtual keyboards.
     * @public
     * @remarks
     * HTMLAttribute: enterkeyhint
     */
    enterKeyHint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
    protected enterKeyHintChanged(): void;
    /**
     * Selects all the text in the text field
     *
     * @public
     */
    select(): void;
    validate(): void;
    /**
     * unique ID on the input text element
     * @public
     */
    id: string;
    /**
     * The initial value of the control.
     * @public
     */
    value: string;
    /**
     * Text that describes the input.
     *
     * @public
     */
    label?: string;
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     * @public
     * @remarks
     * invalid attribute: initializes as false
     */
    invalid: boolean;
    /**
     * The message displayed when the control is valid or invalid.
     * @public
     */
    validationMessage: string;
    /**
     * Specifies that the control is valid and that a success message should display.
     *
     * @public
     * @remarks
     * This boolean value exists as an api for taking in async behaviors
     * (i.e. uploading or password validation) that need success state reflected
     * in tandem with isValid
     */
    isSuccess: boolean | undefined;
    /**
     * Provides additional instructional text that provides extra guidance for the input.
     *
     * @public
     * @remarks
     * paragraph element that takes instructional text
     */
    instructionalText?: string;
    /**
     * Provides additional optional text to the label. Accepts any text but intended to indicate `(Required)` or `(Optional)`.
     *
     * @remarks
     * For accessibility purposes, allows author to mentions in text next to label
     * whether the field is optional '(Optional)' or '(Required)'
     * @public
     */
    optionalText?: string;
    /**
     * Adds additional character to the label when text-field is required.
     * @public
     * @remarks
     * character to add on required radio group
     */
    requiredText?: string;
    /**
     * A description for the input that is only visible to screen readers.
     * @public
     */
    a11yAriaDescription: string;
    get ariaDescribedbyIds(): string;
    /**
     * Defines a string value that labels the success icon, when icons are not just presentational but used to communicate status.
     * @a11y
     * @public
     */
    successAriaLabel: string;
    /**
     * Defines a string value that labels the error icon, when icons are not just presentational but used to communicate status.
     * @a11y
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
     * Controls <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete">browser autofill</a> behavior. (Ex: `off`, `on`, `name`, `email`)
     * @public
     * @remarks
     * Autocomplete attribute for identifying input purpose
     */
    autocomplete?: string;
    valueChanged(previous: string, next: string): void;
    currentValueChanged(): void;
    disconnectedCallback(): void;
    dataLists: HTMLDivElement;
    slottedDataChanged(): void;
    protected canAnnounceValidation: boolean;
    isSuccessChanged(): void;
    invalidChanged(): void;
    validationMessageChanged(): void;
    protected announceValidation(): void;
}
export interface DelegatesARIATextbox extends ARIAGlobalStatesAndProperties {
}
export interface TextField extends StartEnd, DelegatesARIATextbox {
}
