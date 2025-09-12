import { FASTElement } from '../../@microsoft/fast-element/index.js';
/**
 * A class for EmptyState
 */
export declare class EmptyState extends FASTElement {
    /**
     * The title of the empty state.
     *
     * @a11y
     * @public
     */
    emptyStateTitle: string;
    /**
     * Whether the content is centered or not.
     *
     * @public
     */
    isCenter: boolean;
    /**
     * The heading level for the title.
     *
     * @a11y
     * @public
     */
    ariaTitleLevel: 1 | 2 | 3 | 4 | 5 | 6;
}
