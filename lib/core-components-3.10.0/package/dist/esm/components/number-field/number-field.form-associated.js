import { FASTElement } from '../../@microsoft/fast-element/dist/esm/index.js';
import { FormAssociated } from '../form-associated/form-associated.js';

class _NumberField extends FASTElement {
}
/**
 * A form-associated base class for the {@link @saffron/core-components#(NumberField:class)} component.
 *
 * @beta
 */
class FormAssociatedNumberField extends FormAssociated(_NumberField) {
    constructor() {
        super(...arguments);
        this.proxy = document.createElement('input');
    }
}

export { FormAssociatedNumberField };
