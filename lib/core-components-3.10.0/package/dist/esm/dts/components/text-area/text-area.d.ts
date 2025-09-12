import { ComponentDensity } from '../../utils/index.js';
import { StartEnd } from '../../utils/start-end-template.js';
import { DelegatesARIATextbox } from '../text-field/text-field.js';
import { FormAssociatedTextArea } from './text-area.form-associated.js';
import { TextAreaResize } from './text-area.options.js';
/**
 * A Text Area Custom HTML Element.
 * Based largely on the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea | <textarea> element }.
 *
 * @slot start - Content which can be provided before the text area input
 * @slot end - Content which can be provided after the text area input
 * @slot - The default slot for the label
 * @csspart root - The element wrapping the control
 * @csspart control - The textarea element
 * @fires change - Emits a custom 'change' event when the textarea emits a change event
 *
 * @public
 */
export declare class TextArea extends FormAssociatedTextArea {
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
     * The resize mode of the element.
     * @public
     * @remarks
     * HTML Attribute: resize
     */
    resize: TextAreaResize;
    /**
     * Indicates that this element should get focus after the page finishes loading.
     * @public
     * @remarks
     * HTML Attribute: autofocus
     */
    autofocus: boolean;
    protected autofocusChanged(): void;
    /**
     * The {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id | id}
     * of the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form | form} the element is associated to
     * @public
     */
    formId: string;
    /**
     * Allows associating a {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist | datalist}
     * to the element by {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/id | id}.
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
     * The name of the element.
     * @public
     * @remarks
     * HTML Attribute: name
     */
    name: string;
    /**
     * Sets the placeholder value of the element, generally used to provide a hint to the user.
     * @public
     * @remarks
     * HTML Attribute: placeholder
     * Using this attribute does is not a valid substitute for a labeling element.
     */
    placeholder: string;
    /**
     * Sizes the element horizontally by a number of character columns.
     *
     * @public
     * @remarks
     * HTML Attribute: cols
     */
    cols: number;
    /**
     * Sizes the element vertically by a number of character rows.
     *
     * @public
     * @remarks
     * HTML Attribute: rows
     */
    rows: number;
    /**
     * Controls whether or not to enable spell checking for the input field, or if the default spell checking configuration should be used.
     * @public
     * @remarks
     * HTML Attribute: spellcheck
     */
    spellcheck: boolean;
    protected spellcheckChanged(): void;
    /**
     * Selects all the text in the text area
     *
     * @public
     */
    select(): void;
    validate(): void;
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     * @public
     */
    invalid: boolean;
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
     * A description for the textarea that is only visible to screen readers.
     *
     * @public
     * @a11y
     */
    a11yAriaDescription: string;
    /**
     * The message displayed when the control is valid or invalid.
     *
     * @public
     * @remarks
     * validation-message accepts the custom validation that shows up
     * when isSuccess is true or invalid is true
     * otherwise, the default Constraint Validation message should show up
     */
    validationMessage: string;
    /**
     * Defines a string value that labels the error icon, when icons are not just presentational but used to communicate status.
     *
     * @public
     * @a11y
     */
    errorAriaLabel: string;
    /**
     * A value is required or must be checked for the form to be submittable.
     *
     * @public
     */
    required: boolean;
    /**
     * Adds additional character to the label when text-area is required.
     *
     * @public
     */
    requiredText?: string;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    /**
     * Controls whether or not to enable display of remaining character count.
     *
     * @public
     */
    showRemainingText: boolean;
    get remainingCharactersTextDefault(): string;
    private remainingCharactersCountDelay;
    get remainingCharactersCounter(): number;
    remainingCharactersCounterReader: number;
    /**
     * Controls <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete">browser autofill</a> behavior.
     *
     * @public
     */
    autocomplete?: string;
    private _keypressHandler;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private remainingCharacterCountTimeout;
    keyupHandler(): void;
    updateCharactersCounterReader(delay: number): void;
    protected canAnnounceValidation: boolean;
    invalidChanged(): void;
    validationMessageChanged(): void;
    protected announceValidation(): void;
}
export interface TextArea extends StartEnd, DelegatesARIATextbox {
}
