import { FASTElement } from '../../@microsoft/fast-element/index.js';
/**
 * A class for Chat
 */
export declare class Chat extends FASTElement {
    /**
     * The aria label for the region called chat.
     *
     * @a11y
     * @public
     */
    ariaLabel: string;
    /**
     * Whether or not the content is being loaded.
     *
     * @public
     */
    loading: boolean;
    /**
     * Text on loading ring.
     *
     * @public
     */
    loadingText: string;
    /**
     * The aria label for the list of chat messages.
     *
     * @a11y
     * @public
     */
    messageAriaLabel?: string;
    footerNodesChanged(): void;
    footerItemsExist(): void;
}
