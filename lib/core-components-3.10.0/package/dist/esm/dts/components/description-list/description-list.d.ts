import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { DescriptionListOrientation } from './description-list.options.js';
/**
 * A class derived from the FASTElement foundation component
 */
export declare class DescriptionList extends FASTElement {
    /**
     * Determine if the bullets are going to be displayed or not.
     *
     * @public
     */
    bulletPoint: boolean;
    /**
     * Determine the orientation of the description list.
     *
     * @public
     */
    orientation: DescriptionListOrientation;
    /**
     * Determine the number of columns for the description list.
     *
     * @public
     */
    colNumber: number;
    connectedCallback(): void;
    private createDescriptionListGroups;
    private setColumnNumber;
}
