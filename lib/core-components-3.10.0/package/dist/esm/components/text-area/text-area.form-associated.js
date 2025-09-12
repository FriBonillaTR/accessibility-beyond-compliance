import { FASTElement } from '../../@microsoft/fast-element/dist/esm/index.js';
import { FormAssociated } from '../form-associated/form-associated.js';

class _TextArea extends FASTElement {
}
/**
 * A form-associated base class for the {@link @saffron/core-components#(TextArea:class)} component.
 *
 * @beta
 */
class FormAssociatedTextArea extends FormAssociated(_TextArea) {
    constructor() {
        super(...arguments);
        this.proxy = document.createElement('textarea');
    }
}

export { FormAssociatedTextArea };
