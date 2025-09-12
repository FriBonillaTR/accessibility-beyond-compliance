import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { ComponentDensity } from '../../utils/index.js';
import { PaginationAriaLive } from './pagination.options.js';
/**
 * A class for Pagination
 */
export declare class Pagination extends FASTElement {
    /**
     * The aria label for the region called pagination.
     *
     * @public
     * @a11y
     */
    ariaLabel: string;
    /**
     * Text for the results label.
     *
     * @public
     */
    pageResultsLabel: string;
    /**
     * Text for the page **of** label.
     *
     * @public
     */
    pageOfLabel: string;
    /**
     * Text for the previous button.
     *
     * @public
     */
    previousButton: string;
    /**
     * Text for the next button.
     *
     * @public
     */
    nextButton: string;
    /**
     * Text for the **results** label.
     *
     * @public
     */
    resultsLabel: string;
    /**
     * Text for the **to** label.
     *
     * @public
     */
    toLabel: string;
    /**
     * Text for select items field.
     *
     * @public
     * @remarks Text for select items field
     */
    itemsInputLabel: string;
    /**
     * Text for the page input label.
     *
     * @public
     */
    pageInputLabel: string;
    /**
     * Text for the page button.
     *
     * @public
     */
    pageButton: string;
    /**
     * Whether or not the component has a border, showing by default.
     *
     * @public
     */
    hasBorder: boolean;
    /**
     * Total number of results.
     *
     * @public
     */
    totalItemCount: number;
    /**
     * The current page index.
     *
     * @public
     */
    currentPageIndex: number;
    /**
     * Option for the items per page number selection.
     *
     * @public
     */
    itemsArray: number[];
    /**
     * Number of items per page.
     *
     * @public
     */
    itemsPerPage: number;
    /**
     * Indicates that an element will be updated, and describes the types of updates the user agents, assisitve technologies, and user can expect from the live region.
     *
     * @public
     * @a11y
     */
    dataAriaLive: PaginationAriaLive;
    /**
     * Text to describe the results.
     *
     * @public
     */
    itemsLabel: string;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    /**
     * The `controlled` mode will make the component to just read attributes and emit events. The state
     * should be handled by the end user. This is also known as `stateless` components in React
     * or `Props down, Events up` in Vue.
     *
     * @public
     *
     */
    controlled: boolean;
    disconnectedCallBack(): void;
    buttonPageValue(): void;
    /**
     * Go to previous page
     *
     * @public
     */
    previous(): void;
    /**
     * Go to next page
     *
     * @public
     */
    next(): void;
}
