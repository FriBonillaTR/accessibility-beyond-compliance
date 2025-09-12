import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { ComponentDensity } from '../../utils/global-enums.js';
import { SafActionCardActionInstance } from '../action-card-action/define.js';
/**
 * A class for ActionCard
 */
export declare class ActionCard extends FASTElement {
    /**
     * The density of the action card
     * @public
     */
    density: ComponentDensity;
    /**
     * Defines a string value that labels the `action-card`.
     *
     * @a11y
     * @public
     */
    ariaLabel: string;
    slottedActionElements: SafActionCardActionInstance[];
    slottedControlsElements: Element[];
    slottedActionElementsChanged(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
