import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { Option } from '../option/option.js';
import { ARIAGlobalStatesAndProperties } from '../aria-global/aria-global.js';
/**
 * A Listbox Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#listbox | ARIA listbox }.
 *
 * @slot - The default slot for the listbox options
 *
 * @public
 */
export declare abstract class ListboxAbstract extends FASTElement {
    /**
     * The list of options.
     *
     * @public
     */
    get options(): Option[];
    set options(value: Option[]);
    protected set typeAheadExpired(value: boolean);
    /**
     * The disabled state of the listbox.
     *
     * @public
     * @remarks
     * HTML Attribute: `disabled`
     */
    disabled: boolean;
    /**
     * An array representing the currently selected `<saf-option>` elements.
     *
     * @public
     */
    selectedOptions: Option[];
    /**
     * A static filter to include only selectable options.
     *
     * @param n - element to filter
     * @public
     */
    static slottedOptionFilter(n: HTMLElement): boolean;
    /**
     * Sets an option as selected and gives it focus.
     *
     * @public
     */
    protected setSelectedOptions(): void;
}
/**
 * Includes ARIA states and properties relating to the ARIA listbox role
 *
 * @public
 */
export declare class DelegatesARIAListbox {
    /**
     * See {@link https://www.w3.org/TR/wai-aria-1.2/#listbox} for more information
     * @public
     * @remarks
     * HTML Attribute: `aria-activedescendant`
     */
    ariaActiveDescendant: string | null;
    /**
     * See {@link https://www.w3.org/TR/wai-aria-1.2/#listbox} for more information
     * @public
     * @remarks
     * HTML Attribute: `aria-disabled`
     */
    ariaDisabled: 'true' | 'false' | string | null;
    /**
     * See {@link https://www.w3.org/TR/wai-aria-1.2/#listbox} for more information
     * @public
     * @remarks
     * HTML Attribute: `aria-expanded`
     */
    ariaExpanded: 'true' | 'false' | string | null;
    /**
     * See {@link https://w3c.github.io/aria/#listbox} for more information
     * @public
     * @remarks
     * HTML Attribute: `aria-multiselectable`
     */
    ariaMultiSelectable: 'true' | 'false' | string | null;
}
export interface DelegatesARIAListbox extends ARIAGlobalStatesAndProperties {
}
export interface ListboxAbstract extends DelegatesARIAListbox {
}
