import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { ComponentDensity } from '../../utils/index.js';
import { ButtonGroupOrientation } from './button-group.options.js';
/**
 * ButtonGroup
 * aria-label: string (required) - To identify the group of buttons
 * role: string (optional) - The role of the button group
 */
export declare class ButtonGroup extends FASTElement {
    /**
     * Defines a string value to identify the component as an interactive element.
     *
     * @a11y
     * @public
     */
    ariaLabel: string;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    role: string;
    /**
     * Determines the orientation of the button group.
     *
     * @public
     */
    orientation: ButtonGroupOrientation;
    slottedNodesChanged(): void;
}
