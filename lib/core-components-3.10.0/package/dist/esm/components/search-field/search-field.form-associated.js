import { FASTElement } from '../../@microsoft/fast-element/dist/esm/index.js';
import { FormAssociated } from '../form-associated/form-associated.js';

class _Search extends FASTElement {
}
/**
 * A form-associated base class for the {@link @saffron/core-components#(Search:class)} component.
 *
 * @beta
 */
class FormAssociatedSearch extends FormAssociated(_Search) {
    constructor() {
        super(...arguments);
        this.proxy = document.createElement('input');
    }
}

export { FormAssociatedSearch };
