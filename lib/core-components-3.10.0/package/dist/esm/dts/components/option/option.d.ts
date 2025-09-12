import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { ComponentDensity } from '../../utils/index.js';
import { StartEnd } from '../../utils/start-end-template.js';
import { ARIAGlobalStatesAndProperties } from '../aria-global/aria-global.js';
export declare function isListboxOption(el: Element): el is Option;
/**
 * An Option Custom HTML Element.
 * Implements {@link https://www.w3.org/TR/wai-aria-1.1/#option | ARIA option }.
 *
 * @slot start - Content which can be provided before the listbox option content
 * @slot end - Content which can be provided after the listbox option content
 * @slot - The default slot for listbox option content
 * @csspart content - Wraps the listbox option content
 *
 * @public
 */
export declare class Option extends FASTElement {
    /**
     * The checked state is used when the parent listbox is in multiple selection mode.
     * To avoid accessibility conflicts, the checked state should not be present in
     * single selection mode.
     *
     * @public
     */
    checked?: boolean;
    /**
     * Updates the ariaChecked property when the checked property changes.
     *
     * @param prev - the previous checked value
     * @param next - the current checked value
     *
     * @public
     */
    protected checkedChanged(prev: boolean | unknown, next?: boolean): void;
    /**
     * The default slotted content.
     *
     * @public
     */
    content: Node[];
    /**
     * The defaultSelected state of the option.
     * @public
     */
    defaultSelected: boolean;
    protected defaultSelectedChanged(): void;
    /**
     * The disabled state of the option.
     * @public
     * @remarks
     * HTML Attribute: disabled
     */
    disabled: boolean;
    protected disabledChanged(_prev: boolean, _next: boolean): void;
    /**
     * The selected attribute value. This sets the initial selected value.
     *
     * @public
     * @remarks
     * HTML Attribute: selected
     */
    selectedAttribute: boolean;
    protected selectedAttributeChanged(): void;
    /**
     * The checked state of the control.
     *
     * @public
     */
    selected: boolean;
    protected selectedChanged(): void;
    /**
     * Track whether the value has been changed from the initial value
     */
    dirtyValue: boolean;
    /**
     * The initial value of the option. This value sets the `value` property
     * only when the `value` property has not been explicitly set.
     *
     * @remarks
     * HTML Attribute: value
     */
    protected initialValue: string;
    initialValueChanged(_previous: string, _next: string): void;
    get label(): string;
    get text(): string;
    set value(next: string);
    /**
     * The initial value of the control.
     */
    get value(): string;
    get form(): HTMLFormElement | null;
    constructor(text?: string, value?: string, defaultSelected?: boolean, selected?: boolean);
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
}
/**
 * States and properties relating to the ARIA `option` role.
 *
 * @public
 */
export declare class DelegatesARIAListboxOption {
    /**
     * Indicates the current "checked" state.
     * @see {@link https://www.w3.org/TR/wai-aria-1.2/#option} for more information.
     * @public
     * @remarks
     * HTML Attribute: `aria-checked`
     */
    ariaChecked: 'true' | 'false' | string | null;
    /**
     * Defines an element's number or position in the current set of listitems.
     * @see {@link https://www.w3.org/TR/wai-aria-1.2/#option} for more information.
     * @public
     * @remarks
     * HTML Attribute: `aria-posinset`
     */
    ariaPosInSet: string | null;
    /**
     * Indicates the current "selected" state.
     * @see {@link https://www.w3.org/TR/wai-aria-1.2/#option} for more information.
     * @public
     * @remarks
     * HTML Attribute: `aria-selected`
     */
    ariaSelected: 'true' | 'false' | string | null;
    /**
     * Defines the number of items in the current set of listitems.
     * @see {@link https://www.w3.org/TR/wai-aria-1.2/#option} for more information.
     * @public
     * @remarks
     * HTML Attribute: `aria-setsize`
     */
    ariaSetSize: string | null;
}
export interface DelegatesARIAListboxOption extends ARIAGlobalStatesAndProperties {
}
export interface Option extends StartEnd, DelegatesARIAListboxOption {
}
