import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { FormAssociated } from '../form-associated/form-associated.js';
declare class _Slider extends FASTElement {
}
interface _Slider extends FormAssociated {
}
declare const FormAssociatedSlider_base: typeof _Slider;
/**
 * A form-associated base class for the {@link @saffron/core-components#(Slider:class)} component.
 *
 * @beta
 */
export declare class FormAssociatedSlider extends FormAssociatedSlider_base {
    proxy: HTMLInputElement;
}
export {};
