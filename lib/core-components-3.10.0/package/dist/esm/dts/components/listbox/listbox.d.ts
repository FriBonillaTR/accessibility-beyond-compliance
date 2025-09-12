import { ComponentDensity } from '../../utils/index.js';
import { ListboxAbstract } from './listbox.abstract.js';
/**
 * A Listbox Custom HTML Element.
 * Implements the {@link https://w3c.github.io/aria/#listbox | ARIA listbox }.
 *
 * @public
 */
export declare class Listbox extends ListboxAbstract {
    /**
     * Indicates if the listbox is in multi-selection mode.
     *
     * @remarks
     * HTML Attribute: `multiple`
     *
     * @public
     */
    multiple: boolean;
    /**
     * The maximum number of options to display.
     *
     * @remarks
     * HTML Attribute: `size`.
     *
     * @public
     */
    size: number;
    /**
     * Sets an option as selected and gives it focus.
     *
     * @override
     * @public
     */
    protected setSelectedOptions(): void;
    /**
     * Identifies the element (or elements) that labels the current element.
     *
     * @a11y
     * @public
     */
    ariaLabelledBy: string;
    /**
     * Defines a string value that labels the current element.
     *
     * @a11y
     * @public
     */
    ariaLabel: string | null;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    private computedStylesheet?;
    protected updateComputedStylesheet(): void;
}
