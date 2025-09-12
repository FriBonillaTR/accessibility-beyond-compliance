import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { TreeItem } from './tree-item/tree-item.js';
/**
 * A Tree view Custom HTML Element.
 * Implements the {@link https://w3c.github.io/aria-practices/#TreeView | ARIA TreeView }.
 *
 * @slot - The default slot for tree items
 *
 * @public
 */
export declare class TreeView extends FASTElement {
    /**
     * The currently selected tree item
     * @public
     */
    currentSelected: HTMLElement | TreeItem | null;
    protected slottedTreeItemsChanged(): void;
    connectedCallback(): void;
    /**
     * Move focus to a tree item based on its offset from the provided item
     */
    private focusNextNode;
    /**
     * Updates the tree view when slottedTreeItems changes
     */
    private setItems;
    /**
     * checks if there are any nested tree items
     */
    private getValidFocusableItem;
    /**
     * check if the item is focusable
     */
    private isFocusableElement;
    private isSelectedElement;
    private getVisibleNodes;
}
