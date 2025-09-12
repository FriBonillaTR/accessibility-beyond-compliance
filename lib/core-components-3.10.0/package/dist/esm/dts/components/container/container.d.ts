import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { Breakpoint } from '../../utils/index.js';
export declare class Container extends FASTElement {
    /**
     * Controls the maximum width of the container based on CSS container queries.
     *
     * @public
     */
    maxWidth: Breakpoint | undefined;
    /**
     * Determines if the content should be centered.
     *
     * @defaultValue false
     * @public
     */
    centered: boolean;
    /**
     * Used to disable the padding on the container. Typically used for components that have padding like tabs and navigation.
     *
     * @defaultValue false
     * @public
     */
    disablePadding: boolean;
}
