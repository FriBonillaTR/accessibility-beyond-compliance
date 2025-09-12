import { FASTElement } from '../../@microsoft/fast-element/index.js';
export declare class FacetedFilter extends FASTElement {
    /**
     * Heading for filtering.
     *
     * @public
     */
    filterTitle: string;
    /**
     * Label for the reset button.
     *
     * @public
     */
    resetButtonLabel: string;
    /**
     * Hierarchical level of the Title element.
     *
     * @a11y
     * @public
     * @defaultValue 2
     */
    ariaTitleLevel: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Secondary heading for filtering.
     *
     * @public
     */
    filterSubtitle: string;
    /**
     * Hierarchical level of the Subtitle element.
     *
     * @a11y
     * @public
     * @defaultValue 3
     */
    ariaSubtitleLevel: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Provides additional instructional text for extra guidance for filtering.
     *
     * @public
     */
    instructionalText: string;
    /**
     * Determines whether or not the selected items counter badges should be displayed.
     *
     * @public
     */
    showCounterBadges: boolean;
    showCounterBadgesChanged(prev: boolean | undefined, next: boolean): void;
    slottedFacetsChanged(_prev: HTMLElement[] | undefined, next: HTMLElement[]): void;
    private updateChildItemsCounter;
}
