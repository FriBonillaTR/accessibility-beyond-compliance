import { __decorate } from 'tslib';
import { FASTElement, observable } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { StartEnd } from '../../../utils/start-end-template.js';
import { applyMixins } from '../../../utils/apply-mixins.js';

/**
 * A class for Metadata item, based on concepts in FASTBreadcrumbItem
 */
class MetadataItem extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Determines if there is a divider between items.
         * @public
         */
        this.separator = true;
    }
}
__decorate([
    observable
], MetadataItem.prototype, "separator", void 0);
applyMixins(MetadataItem, StartEnd);

export { MetadataItem };
