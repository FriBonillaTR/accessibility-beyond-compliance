import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { StartEnd } from '../../utils/start-end-template.js';
/**
 * A Disclosure Custom HTML Element.
 * Based largely on the {@link https://w3c.github.io/aria-practices/#disclosure | disclosure element }.
 *
 * @slot start - Content which can be provided before the summary content
 * @slot end - Content which can be provided after the summary content
 * @slot title - The summary content
 * @slot - The default slot for the disclosure content
 * @fires toggle - fires a toggle event when the summary is toggled
 *
 * @public
 */
export declare class Disclosure extends FASTElement {
    /**
     * Whether the disclosure is expanded or not.
     *
     * @public
     */
    expanded: boolean;
    /**
     * The label of the disclosure button.
     *
     * @public
     */
    summary: string;
    /**
     * Show extra content.
     */
    show(): void;
    /**
     * Hide extra content.
     */
    hide(): void;
    /**
     * Toggle the current(expanded/collapsed) state.
     */
    toggle(): void;
    /**
     * Register listener and set default disclosure mode
     */
    protected setup(): void;
    /**
     * Update the aria attr and fire `toggle` event
     */
    protected onToggle(): void;
    /**
     * Used to had content show and hide the caret.
     *
     * @public
     */
    hideCaret: boolean;
}
export interface Disclosure extends StartEnd {
}
