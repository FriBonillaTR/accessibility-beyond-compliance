import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { ComponentDensity } from '../../utils/index.js';
/**
 * A class for ClickAwayListener
 */
export declare class ClickAwayListener extends FASTElement {
    handleClick: (event: MouseEvent) => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * The density of the alert.
     * @public
     */
    density: ComponentDensity;
}
