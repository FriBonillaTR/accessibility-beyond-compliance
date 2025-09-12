import { FASTElement } from '../../@microsoft/fast-element/dist/esm/index.js';
import { FormAssociated } from '../form-associated/form-associated.js';

class _TextField extends FASTElement {
}
/**
 * A form-associated base class for the {@link @saffron/core-components#(TextField:class)} component.
 *
 * @beta
 */
class FormAssociatedTextField extends FormAssociated(_TextField) {
    constructor() {
        super(...arguments);
        this.proxy = document.createElement('input');
    }
}

export { FormAssociatedTextField };
