import { FASTElement } from '../../../@microsoft/fast-element/index.js';
/**
 * Checkbox Group
 */
export declare class CheckboxGroup extends FASTElement {
    supportsElementsInternals: boolean;
    form: HTMLFormElement | undefined;
    slottedNodes: Node[];
    /**
     * Text that describes the checkbox group.
     *
     * @public
     */
    label: string;
    /**
     * Indicates the checkbox group is required.
     *
     * @public
     */
    required: boolean;
    /**
     * Provides additional instructional text for extra guidance for the checkbox group.
     *
     * @public
     */
    instructionalText: string;
    /**
     * Provides additional optional text to the label. Accepts any text but intended to indicate `(Required)` or `(Optional)`.
     *
     * @a11y
     * @public
     */
    optionalText?: string;
    disabled: boolean;
    /**
     * Controls the visual orientation of the checkbox group.
     *
     * @public
     */
    orientation: 'horizontal' | 'vertical';
    /**
     * Defines a string value that labels the error icon, when icons are not just presentational but used to communicate status.
     *
     * @a11y
     * @public
     */
    errorAriaLabel: string;
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
     * Adds additional character to the label when checkbox-group is required.
     *
     * @public
     */
    requiredText?: string;
    /**
     * Provides additional ARIA text when the checkbox group is required.
     *
     * @a11y
     * @public
     */
    requiredAriaText: string;
    requiredAriaTextChanged(_oldValue: string, newValue: string): void;
    connectedCallback(): void;
    /**
     * The values of selected checkbox items.
     *
     * @public
     */
    value: string[];
    setValidity: () => void;
    protected canAnnounceValidation: boolean;
    invalidChanged(): void;
    validationMessageChanged(): void;
    protected announceValidation(): void;
}
