import { FASTElement } from '../../../@microsoft/fast-element/index.js';
export declare class FacetCategory extends FASTElement {
    /**
     * The label of the disclosure button representing the facet category.
     *
     * @public
     */
    summary: string;
    /**
     *
     * Whether the disclosure is expanded or not.
     *
     * @public
     *
     */
    expanded: boolean;
    /**
     * Option to hide caret if is not required.
     *
     * @public
     */
    hideCaret: boolean;
    private _currentChildrenSelected;
    get childrenSelected(): number;
}
