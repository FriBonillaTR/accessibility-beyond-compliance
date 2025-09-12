import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { ListOrder, ListSize, ListStyle } from './list.options.js';
/**
 * A class for List
 */
export declare class List extends FASTElement {
    /**
     * The type of list.
     *
     * @public
     */
    order: ListOrder;
    /**
     * The size of the list text.
     *
     * @public
     */
    size: ListSize;
    /**
     * The visual style for the list.
     *
     * @public
     */
    listStyle: ListStyle;
    /**
     * Determines if the list is inline.
     *
     * @public
     */
    inline: boolean;
}
