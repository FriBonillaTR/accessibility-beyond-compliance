import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { StatusType } from './status.options.js';
/**
 * A class for Status
 */
export declare class Status extends FASTElement {
    /**
     * The message to display.
     *
     * @public
     */
    message: string;
    /**
     * Determines the status type.
     *
     * @public
     */
    status: StatusType;
    /**
     * Used to create an accessible name by referencing other elements.
     *
     * @public
     */
    ariaLabelledBy: string;
    /**
     * Whether the item is focusable.
     *
     * @public
     */
    focusable: boolean;
    /**
     * Used to provide semantic meaning to assistive technologies.
     *
     * @public
     */
    ariaRole: string;
    /**
     * The label for the paused icon to communicate status.
     *
     * @a11y
     * @public
     */
    pausedAriaLabel: string;
    /**
     * 	The label for the info icon to communicate status.
     *
     * @a11y
     * @public
     */
    infoAriaLabel: string;
    /**
     * The label for the success icon to communicate status.
     *
     * @a11y
     * @public
     */
    successAriaLabel: string;
    /**
     * The label for the error icon to communicate status.
     *
     * @a11y
     * @public
     */
    errorAriaLabel: string;
    /**
     * The label for the warning icon to communicate status.
     *
     * @a11y
     * @public
     */
    warningAriaLabel: string;
}
