import { Tabs } from '../tabs/tabs.js';
/**
 * A class derived from the FASTTab foundation component
 */
export declare class Windows extends Tabs {
    /**
     * Indicates whether the windows are addable.
     * @public
     */
    addable: boolean;
    /**
     * The accessible label for the add button.
     * @public
     * @remarks The label for the add button
     */
    addAriaLabel: string;
    /**
     * A label that is passed from the component to the `role="tablist"` element.
     * @public
     */
    a11yAriaLabel: string;
    /**
     * Emits a custom 'add' event when the window add button is clicked
     * @public
     * @remarks Fired when the window added
     */
    add(): void;
}
