import { FASTElement } from '../../../@microsoft/fast-element/index.js';
export declare class FacetItem extends FASTElement {
    /**
     * The name of the facet item. This is used to label the checkbox.
     *
     * @public
     */
    facetName: string;
    /**
     * The indeterminate state of the facet item
     *
     * @public
     */
    indeterminate: boolean;
    indeterminateChanged(): void;
    /**
     * The number of items in the facet.
     *
     * @public
     */
    itemCount: number;
    /**
     * Whether the facet item is checked.
     *
     * @public
     */
    checked: boolean;
    checkedChanged(): void;
    /**
     * Whether the facet item is disabled.
     *
     * @public
     */
    disabled: boolean;
    protected childItemsChanged(): void;
    /**
     * Whether the facet item is expanded.
     *
     * @public
     */
    expanded: boolean;
    /**
     * The aria-label for the expand button.
     *
     * @a11y
     * @public
     */
    expandAriaLabel: string;
    /**
     * The aria-label for the collapse button.
     *
     * @a11y
     * @public
     */
    collapseAriaLabel: string;
    get treeWhollySelected(): boolean;
    get treeWhollyUnselected(): boolean;
    updateCheckedState(): void;
    emitToggle(): void;
    check(): void;
    uncheck(): void;
    selectAllChildren(): void;
    deselectAllChildren: () => void;
    get itemTotal(): number;
    get childrenSelected(): number;
    /**
     * Toggles expand and collapsing on a parent facet with children facets
     */
    toggleExpand(e: MouseEvent): void;
    get hasChildItems(): boolean | 0;
}
