import { FASTElement } from '../../@microsoft/fast-element/dist/esm/index.js';
import { CheckableFormAssociated } from '../form-associated/form-associated.js';

class _Checkbox extends FASTElement {
}
/**
 * A form-associated base class for the {@link @saffron/core-components#(Checkbox:class)} component.
 *
 * @beta
 */
class FormAssociatedCheckbox extends CheckableFormAssociated(_Checkbox) {
    constructor() {
        super(...arguments);
        this.proxy = document.createElement('input');
    }
}

export { FormAssociatedCheckbox };
