import { __decorate } from 'tslib';
import { FASTElement, observable } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * A class for ProgressText component
 */
class ProgressText extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * @internal
         * @remarks
         * Internal property for default slotted text content
         */
        // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
        this.processingContent = 'Processing';
    }
}
__decorate([
    observable
], ProgressText.prototype, "processingContent", void 0);

export { ProgressText };
