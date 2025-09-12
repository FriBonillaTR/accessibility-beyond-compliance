import { FASTElement } from '../../../@microsoft/fast-element/index.js';
import { CheckableFormAssociated } from '../../form-associated/form-associated.js';
declare class _Radio extends FASTElement {
}
interface _Radio extends CheckableFormAssociated {
}
declare const FormAssociatedRadio_base: typeof _Radio;
/**
 * A form-associated base class for the {@link @saffron/core-components#(FASTRadio:class)} component.
 *
 * @beta
 */
export declare class FormAssociatedRadio extends FormAssociatedRadio_base {
    proxy: HTMLInputElement;
}
export {};
