import { AnchorBase } from '../anchor/anchor.js';
/**
 * A class for SkipLink
 */
export declare class SkipLink extends AnchorBase {
    /**
     * Determines the positioning of the skip link.
     * If set to 'absolute', the skip link will be positioned absolutely within its container.
     * If set to 'fixed', it will be fixed relative to the viewport.
     */
    positioning: 'absolute' | 'fixed';
    positioningChanged(): void;
    /**
     * Determines the [scroll alignment](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#block) when the skip link is activated.
     */
    scrollAlignToTop: 'start' | 'center' | 'nearest';
    private focusOnTarget;
    connectedCallback(): void;
    setTabIndex(): void;
}
