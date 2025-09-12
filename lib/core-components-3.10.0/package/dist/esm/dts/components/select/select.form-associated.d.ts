import { FormAssociated } from '../form-associated/form-associated.js';
import { Listbox } from '../listbox/listbox.js';
declare class _Select extends Listbox {
}
interface _Select extends FormAssociated {
}
declare const FormAssociatedSelect_base: typeof _Select;
/**
 * A form-associated base class for the {@link @saffron/core-components#(Select:class)} component.
 *
 * @beta
 */
export declare class FormAssociatedSelect extends FormAssociatedSelect_base {
    proxy: HTMLSelectElement;
}
export {};
