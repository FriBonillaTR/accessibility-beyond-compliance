import { FASTElement } from '../../@microsoft/fast-element/dist/esm/index.js';
import { FormAssociated } from '../form-associated/form-associated.js';

class _Button extends FASTElement {
}
/**
 * A form-associated base class for the {@link @saffron/core-components#(Button:class)} component.
 *
 * @beta
 */
class FormAssociatedButton extends FormAssociated(_Button) {
    constructor() {
        super(...arguments);
        this.proxy = document.createElement('input');
    }
}

export { FormAssociatedButton };
