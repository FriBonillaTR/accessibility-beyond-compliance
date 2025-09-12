import { FormAssociatedSwitch } from './switch.form-associated.js';
/**
 * A Switch Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#switch | ARIA switch }.
 *
 * @slot - The default slot for the label
 * @slot switch - For content inside of the thumb
 * @csspart label - The label element
 * @csspart switch - The container for the switch
 * @csspart checked-indicator - The checked indicator element
 * @csspart checked - The checked icon
 * @csspart unchecked - The unchecked icon
 * @fires change - Emits a custom change event when the checked state changes
 *
 * @public
 */
export declare class Switch extends FormAssociatedSwitch {
    /**
     * When true, the control will be immutable by user interaction.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information.
     * @public
     * @remarks
     * HTML Attribute: readonly
     */
    readOnly: boolean;
    protected readOnlyChanged(): void;
    constructor();
}
