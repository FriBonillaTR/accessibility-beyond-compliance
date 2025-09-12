import { FASTElement } from '../../@microsoft/fast-element/index.js';
/**
 * A Breadcrumb Custom HTML Element.
 * @slot - The default slot for the breadcrumb items
 * @csspart list - The element wrapping the slotted items
 *
 * @public
 */
export declare class Breadcrumb extends FASTElement {
    protected slottedBreadcrumbItemsChanged(): void;
}
