import { FASTElement } from '../../@microsoft/fast-element/dist/esm/index.js';
import { CheckableFormAssociated } from '../form-associated/form-associated.js';

class _Switch extends FASTElement {
}
/**
 * A form-associated base class for the {@link @saffron/core-components#(Switch:class)} component.
 *
 * @beta
 */
class FormAssociatedSwitch extends CheckableFormAssociated(_Switch) {
    constructor() {
        super(...arguments);
        this.proxy = document.createElement('input');
    }
}

export { FormAssociatedSwitch };
