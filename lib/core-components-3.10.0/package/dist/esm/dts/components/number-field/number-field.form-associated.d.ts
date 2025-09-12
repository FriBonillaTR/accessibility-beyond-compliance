import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { FormAssociated } from '../form-associated/form-associated.js';
declare class _NumberField extends FASTElement {
}
interface _NumberField extends FormAssociated {
}
declare const FormAssociatedNumberField_base: typeof _NumberField;
/**
 * A form-associated base class for the {@link @saffron/core-components#(NumberField:class)} component.
 *
 * @beta
 */
export declare class FormAssociatedNumberField extends FormAssociatedNumberField_base {
    proxy: HTMLInputElement;
}
export {};
