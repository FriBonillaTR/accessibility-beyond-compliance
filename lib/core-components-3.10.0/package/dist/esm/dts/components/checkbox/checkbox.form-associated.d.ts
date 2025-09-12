import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { CheckableFormAssociated } from '../form-associated/form-associated.js';
declare class _Checkbox extends FASTElement {
}
interface _Checkbox extends CheckableFormAssociated {
}
declare const FormAssociatedCheckbox_base: typeof _Checkbox;
/**
 * A form-associated base class for the {@link @saffron/core-components#(Checkbox:class)} component.
 *
 * @beta
 */
export declare class FormAssociatedCheckbox extends FormAssociatedCheckbox_base {
    proxy: HTMLInputElement;
}
export {};
