import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { ComponentDensity } from '../../utils/index.js';
/**
 * A class for Toolbar
 */
export declare class Toolbar extends FASTElement {
    /**
     * The aria-label, the unique accessible name for the toolbar
     * @public
     * @a11y
     * @remarks Give the toolbar a descriptive, unique accessible name using the aria-label attribute
     */
    ariaLabel: string;
    /**
     * Used to change the spacing in and around the component.
     * @public
     */
    density: ComponentDensity;
    /**
     * Make the toolbar function as a single interactive UI control with
     * arrow key navigation
     *
     * @public
     */
    arrowNav: boolean;
    connectedCallback(): void;
    focus(): void;
}
