import { FASTElement } from '../../@microsoft/fast-element/index.js';
/**
 * A class for Workspace Pattern
 */
export declare class WorkspacePattern extends FASTElement {
    /**
     * Screen reader title for splitter indicator.
     *
     * @public
     *
     * @remarks
     * Re-exposed from saf-splitter
     */
    srOnlyTitle: string;
    /**
     * Tooltip text for splitter.
     *
     * @public
     */
    tooltipText: string;
    /**
     * Whether or not primary panel should be scrollable.
     *
     * @public
     */
    scrollablePrimary: boolean;
    /**
     * Whether or not secondary panel should be scrollable.
     *
     * @public
     */
    scrollableSecondary: boolean;
    /**
     * Initial size for splitter in percentage.
     *
     * @public
     */
    initialSize?: number | undefined;
}
