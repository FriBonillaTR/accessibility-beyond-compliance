import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { ComponentDensity } from '../../utils/index.js';
import { AccordionExpandMode } from './accordion.options.js';
/**
 * An Accordion Custom HTML Element
 * Implements {@link https://www.w3.org/TR/wai-aria-practices-1.1/#accordion | ARIA Accordion}.
 *
 * @slot - The slot for the accordion items
 * @fires change - Fires a custom 'change' event when the active item changes
 * @public
 *
 * @remarks
 * Designed to be used with {@link @saffron/core-components#accordionTemplate}
 * and {@link @saffron/core-components#(AccordionItem:class)}.
 */
export declare class Accordion extends FASTElement {
    /**
     * Controls the expand mode of the Accordion, either allowing
     * single or multiple item expansion.
     * @public
     *
     * @remarks
     * HTML attribute: expand-mode
     * TODO: rename to expand-mode in v4
     */
    expandmode: AccordionExpandMode;
    expandmodeChanged(prev: AccordionExpandMode, next: AccordionExpandMode): void;
    protected accordionItems: Element[];
    private activeid;
    private activeItemIndex;
    private accordionIds;
    private change;
    private findExpandedItem;
    private setItems;
    private setSingleExpandMode;
    private removeItemListeners;
    private activeItemChange;
    private handleExpandedChange;
    private getItemIds;
    private isSingleExpandMode;
    private handleItemKeyDown;
    private handleItemFocus;
    private adjust;
    private focusItem;
    /**
     * The density of the accordion
     *
     * @public
     */
    density: ComponentDensity;
}
