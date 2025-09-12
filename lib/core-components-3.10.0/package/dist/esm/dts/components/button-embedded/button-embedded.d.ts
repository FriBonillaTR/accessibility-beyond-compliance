import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { ComponentDensity } from '../../utils/index.js';
/**
 * ButtonEmbedded
 */
export declare class ButtonEmbedded extends FASTElement {
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    private mutationObserver;
    slottedNodesChanged(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private updateButtonClasses;
    private observeSlottedElements;
}
