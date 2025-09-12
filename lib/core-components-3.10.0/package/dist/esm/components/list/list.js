import { __decorate } from 'tslib';
import { FASTElement, attr } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * A class for List
 */
class List extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Determines if the list is inline.
         *
         * @public
         */
        this.inline = false;
    }
}
__decorate([
    attr({ attribute: 'order' })
], List.prototype, "order", void 0);
__decorate([
    attr({ attribute: 'size' })
], List.prototype, "size", void 0);
__decorate([
    attr({ attribute: 'list-style' })
], List.prototype, "listStyle", void 0);
__decorate([
    attr
], List.prototype, "inline", void 0);

export { List };
