import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { Orientation } from '@microsoft/fast-web-utilities';
/**
 * An Radio Group Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#radiogroup | ARIA radiogroup }.
 *
 * @slot label - The slot for the label
 * @slot - The default slot for radio buttons
 * @csspart positioning-region - The positioning region for laying out the radios
 * @fires change - Fires a custom 'change' event when the value changes
 *
 * @public
 */
export declare class RadioGroup extends FASTElement {
    /**
     * When true, the child radios will be immutable by user interaction.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information.
     * @public
     * @remarks
     * HTML Attribute: readonly
     */
    readOnly: boolean;
    /**
     * Disables the radio group and child radios.
     *
     * @public
     * @remarks
     * HTML Attribute: disabled
     */
    disabled: boolean;
    protected disabledChanged(): void;
    /**
     * The name of the radio group. Setting this value will set the name value
     * for all child radio elements.
     *
     * @public
     * @remarks
     * HTML Attribute: name
     */
    name: string;
    protected nameChanged(): void;
    /**
     * The initial checked value of the control.
     *
     * @public
     * @remarks
     * HTML Attribute: value
     */
    value: string;
    protected valueChanged(): void;
    /**
     * The orientation of the group
     *
     * @public
     * @remarks
     * HTML Attribute: orientation
     */
    orientation: Orientation;
    childItems: HTMLElement[];
    protected slottedRadioButtonsChanged(_oldValue: unknown, _newValue: HTMLElement[]): void;
    private selectedRadio;
    private focusedRadio;
    private direction;
    private get parentToolbar();
    private get isInsideToolbar();
    private get isInsideFoundationToolbar();
    disconnectedCallback(): void;
    private setupRadioButtons;
    private radioChangeHandler;
    private moveToRadioByIndex;
    private moveRightOffGroup;
    private moveLeftOffGroup;
    private shouldMoveOffGroupToTheRight;
    private shouldMoveOffGroupToTheLeft;
    private checkFocusedRadio;
    private moveRight;
    private moveLeft;
    supportsElementInternals: boolean;
    inputs: HTMLInputElement[];
    /**
     * Indicates the radio group must have a selected value before the form will submit.
     *
     * @public
     */
    required: boolean;
    /**
     * Text that describes the radio group.
     *
     * @public
     */
    label?: string;
    /**
     * Define the accessible name of the radio group. Overrides the visible label for assistive technologies.
     *
     * @public
     * @a11y
     */
    a11yAriaLabel: string;
    /**
     * Adds additional character to the label when radio-group is required.
     *
     * @public
     */
    requiredText?: string;
    /**
     * Provides additional instructional text for extra guidance for the radio group.
     *
     * @public
     */
    instructionalText?: string;
    /**
     * Provides additional optional text to the label. Accepts any text but intended to indicate `(Required)` or `(Optional)`
     *
     * @public
     */
    optionalText?: string;
    /**
     * Indicates the optional text should be rendered visible or just availble to screen readers
     *
     * @public
     */
    optionalTextVisible: boolean;
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
     * @public
     * @a11y
     */
    errorAriaLabel: string;
    protected canAnnounceValidation: boolean;
    requiredChanged(): void;
    invalidChanged(): void;
    validationMessageChanged(): void;
    protected announceValidation(): void;
}
