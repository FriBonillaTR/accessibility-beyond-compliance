import { FormAssociated } from '../form-associated/form-associated.js';
import { Listbox } from '../listbox/listbox.js';

class _Select extends Listbox {
}
/**
 * A form-associated base class for the {@link @saffron/core-components#(Select:class)} component.
 *
 * @beta
 */
class FormAssociatedSelect extends FormAssociated(_Select) {
    constructor() {
        super(...arguments);
        this.proxy = document.createElement('select');
    }
}

export { FormAssociatedSelect };
