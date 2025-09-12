import { FASTElement } from '../../../@microsoft/fast-element/index.js';
import { StartEnd } from '../../../utils/start-end-template.js';
/**
 * A class for Metadata item, based on concepts in FASTBreadcrumbItem
 */
export declare class MetadataItem extends FASTElement {
    /**
     * Determines if there is a divider between items.
     * @public
     */
    separator: boolean;
}
export interface MetadataItem extends StartEnd {
}
