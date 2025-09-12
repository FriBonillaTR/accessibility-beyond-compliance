import { FormAssociatedRadio } from './radio.form-associated.js';
/**
 * A structure representing a {@link @saffron/core-components#(Radio:class)} element
 * @public
 */
export type RadioControl = Pick<HTMLInputElement, 'checked' | 'disabled' | 'focus' | 'setAttribute' | 'getAttribute'>;
/**
 * A Radio Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#radio | ARIA radio }.
 *
 * @slot checked-indicator - The checked indicator
 * @slot - The default slot for the label
 * @csspart control - The element representing the visual radio control
 * @csspart label - The label
 * @fires change - Emits a custom change event when the checked state changes
 *
 * @public
 */
export declare class Radio extends FormAssociatedRadio implements RadioControl {
    /**
     * The name of the radio.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname | name attribute} for more info.
     */
    name: string;
    private get radioGroup();
    constructor();
    private isInsideRadioGroup;
    /**
     * Handles key presses on the radio.
     * @beta
     */
    keypressHandler(e: KeyboardEvent): boolean | void;
    /**
     * When set to `true`, the radio button cannot be interacted with by the user.
     *
     */
    readOnly: boolean;
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
     * @public
     * @a11y
     */
    a11yAriaDescription: string | undefined;
    /**
     * attr for passing aria-label to the radio input without also being applied to the component element
     *
     * @public
     * @a11y
     */
    a11yAriaLabel: string;
    /**
     * The unique IDs of the label and validation messages (if defined)
     *
     * @public
     * @a11y
     * Volatile decorator needed here because of the computed properties/conditionals
     */
    get ariaLabelledbyIds(): string;
    get tabIndex(): number;
    set tabIndex(value: number);
    tabIndexProp: number;
    tabIndexAttr: string | null;
    setAttribute(qualifiedName: string, value: string): void;
    removeAttribute(qualifiedName: string): void;
    getAttribute(qualifiedName: string): string | null;
    hasAttribute(qualifiedName: string): boolean;
    focus(): void;
    getInputEl(): HTMLInputElement | undefined | null;
    clickHandler(e: MouseEvent): void;
}
