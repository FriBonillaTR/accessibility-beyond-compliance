import { __decorate } from 'tslib';
import { FASTElement, attr, observable, nullableNumberConverter } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * A class for EmptyState
 */
class EmptyState extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Whether the content is centered or not.
         *
         * @public
         */
        this.isCenter = false;
        /**
         * The heading level for the title.
         *
         * @a11y
         * @public
         */
        this.ariaTitleLevel = 2;
    }
}
__decorate([
    attr({ attribute: 'empty-state-title' })
], EmptyState.prototype, "emptyStateTitle", void 0);
__decorate([
    attr({ attribute: 'is-center', mode: 'boolean' }),
    observable
], EmptyState.prototype, "isCenter", void 0);
__decorate([
    attr({
        attribute: 'aria-title-level',
        mode: 'fromView',
        converter: nullableNumberConverter,
    })
], EmptyState.prototype, "ariaTitleLevel", void 0);

export { EmptyState };
