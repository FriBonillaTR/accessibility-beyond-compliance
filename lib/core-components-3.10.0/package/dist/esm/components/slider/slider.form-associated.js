import { FASTElement } from '../../@microsoft/fast-element/dist/esm/index.js';
import { FormAssociated } from '../form-associated/form-associated.js';

class _Slider extends FASTElement {
}
/**
 * A form-associated base class for the {@link @saffron/core-components#(Slider:class)} component.
 *
 * @beta
 */
class FormAssociatedSlider extends FormAssociated(_Slider) {
    constructor() {
        super(...arguments);
        this.proxy = document.createElement('input');
    }
}

export { FormAssociatedSlider };
