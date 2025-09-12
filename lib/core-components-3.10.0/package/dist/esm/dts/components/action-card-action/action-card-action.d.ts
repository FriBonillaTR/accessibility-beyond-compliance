import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { ComponentDensity } from '../../utils/global-enums.js';
import { AnchorBase } from '../anchor/anchor.js';
import { ButtonBase } from '../button/button.js';
import { ActionCardActionMode } from './action-card-action.options.js';
/**
 * A class for ActionCardAction
 */
export declare class ActionCardAction extends FASTElement {
    /**
     * The density of the action card action
     * @public
     */
    density: ComponentDensity;
    /**
     * Mode of the action, can be 'a' or 'button'.
     * @public
     * @defaultValue button
     */
    mode: ActionCardActionMode;
    modeChanged(): void;
    slottedCardTitleElements: Element[];
    slottedCardTitleElementsChanged(): void;
    cardTitle: string;
    slottedDescriptionElements: Element[];
    slottedDescriptionElementsChanged(): void;
}
export interface ActionCardAction extends Omit<AnchorBase, 'control' | 'ariaDisabled'>, Omit<ButtonBase, 'disabled' | 'ariaDisabled' | 'control'> {
}
