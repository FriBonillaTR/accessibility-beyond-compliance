import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { MetadataSize } from './metadata.options.js';
/**
 * A class for Metadata, based on concepts in FASTBreadcrumb
 */
export declare class Metadata extends FASTElement {
    /**
     * Determines metadata text size.
     * @public
     */
    size: MetadataSize;
    protected slottedMetadataItemsChanged(): void;
    private setItemSeparator;
}
