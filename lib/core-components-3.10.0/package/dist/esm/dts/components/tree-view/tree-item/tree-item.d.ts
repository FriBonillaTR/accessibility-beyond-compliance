import { FASTElement } from '../../../@microsoft/fast-element/index.js';
import { StartEnd } from '../../../utils/start-end-template.js';
/**
 * check if the item is a tree item
 * @public
 * @remarks
 * determines if element is an HTMLElement and if it has the role treeitem
 */
export declare function isTreeItemElement(el: Element): el is HTMLElement;
/**
 * A Tree item Custom HTML Element.
 *
 * @slot start - Content which can be provided before the tree item content
 * @slot end - Content which can be provided after the tree item content
 * @slot - The default slot for tree item text content
 * @slot item - The slot for tree items (fast tree items manage this assignment themselves)
 * @slot expand-collapse-button - The expand/collapse button
 * @csspart positioning-region - The element used to position the tree item content with exception of any child nodes
 * @csspart content-region - The element containing the expand/collapse, start, and end slots
 * @csspart items - The element wrapping any child items
 * @csspart expand-collapse-button - The expand/collapse button
 * @fires expanded-change - Fires a custom 'expanded-change' event when the expanded state changes
 * @fires selected-change - Fires a custom 'selected-change' event when the selected state changes
 *
 * @public
 */
export declare class TreeItem extends FASTElement {
    /**
     * When true, the control will be appear expanded by user interaction.
     * @public
     * @remarks
     * HTML Attribute: expanded
     */
    expanded: boolean;
    protected expandedChanged(_prev: boolean | undefined, _next: boolean): void;
    /**
     * When true, the control will appear selected by user interaction.
     * @public
     * @remarks
     * HTML Attribute: selected
     */
    selected: boolean;
    protected selectedChanged(_prev: boolean | undefined, _next: boolean): void;
    /**
     * When true, the control will be immutable by user interaction.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled | disabled HTML attribute} for more information.
     * @public
     * @remarks
     * HTML Attribute: disabled
     */
    disabled: boolean;
    /**
     * Places document focus on a tree item
     *
     * @public
     * @param el - the element to focus
     */
    static focusItem(el: HTMLElement): void;
}
export interface TreeItem extends StartEnd {
}
