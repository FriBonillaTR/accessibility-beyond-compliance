import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { FormAssociated } from '../form-associated/form-associated.js';
declare class _TextField extends FASTElement {
}
interface _TextField extends FormAssociated {
}
declare const FormAssociatedTextField_base: typeof _TextField;
/**
 * A form-associated base class for the {@link @saffron/core-components#(TextField:class)} component.
 *
 * @beta
 */
export declare class FormAssociatedTextField extends FormAssociatedTextField_base {
    proxy: HTMLInputElement;
}
export {};
