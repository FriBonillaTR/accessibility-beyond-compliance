import { FASTElement } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { CheckableFormAssociated } from '../../form-associated/form-associated.js';

class _Radio extends FASTElement {
}
/**
 * A form-associated base class for the {@link @saffron/core-components#(FASTRadio:class)} component.
 *
 * @beta
 */
class FormAssociatedRadio extends CheckableFormAssociated(_Radio) {
    constructor() {
        super(...arguments);
        this.proxy = document.createElement('input');
    }
}

export { FormAssociatedRadio };
