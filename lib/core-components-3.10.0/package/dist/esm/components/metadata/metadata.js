import { __decorate } from 'tslib';
import { FASTElement, attr, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import { MetadataSizeEnum } from './metadata.options.js';
import { MetadataItem } from './metadata-item/metadata-item.js';

/**
 * A class for Metadata, based on concepts in FASTBreadcrumb
 */
class Metadata extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Determines metadata text size.
         * @public
         */
        this.size = MetadataSizeEnum.small;
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    slottedMetadataItemsChanged() {
        if (this.$fastController.isConnected) {
            if (this.slottedMetadataItems === undefined || this.slottedMetadataItems.length === 0) {
                return;
            }
            const lastNode = this.slottedMetadataItems[this.slottedMetadataItems.length - 1];
            this.slottedMetadataItems.forEach((item) => {
                const itemIsLastNode = item === lastNode;
                this.setItemSeparator(item, itemIsLastNode);
            });
        }
    }
    setItemSeparator(item, isLastNode) {
        if (item instanceof MetadataItem) {
            item.separator = !isLastNode;
        }
    }
}
__decorate([
    attr
], Metadata.prototype, "size", void 0);
__decorate([
    observable
], Metadata.prototype, "slottedMetadataItems", void 0);

export { Metadata };
