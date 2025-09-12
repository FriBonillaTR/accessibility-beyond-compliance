import { __decorate } from 'tslib';
import { FASTElement, attr } from '../../../@microsoft/fast-element/dist/esm/index.js';

/**
 * A class for Chat
 */
class CommentField extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * The aria label for the region called comments.
         *
         * @a11y
         * @public
         */
        this.ariaLabel = 'Post a reply';
    }
}
__decorate([
    attr({ attribute: 'aria-label' })
], CommentField.prototype, "ariaLabel", void 0);

export { CommentField };
