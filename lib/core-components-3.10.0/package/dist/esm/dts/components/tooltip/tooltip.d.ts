import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { TooltipPosition } from './tooltip.options.js';
/**
 * A class derived from the FASTTooltip foundation component
 */
export declare class Tooltip extends FASTElement {
    /**
     * The id of the element the tooltip is anchored to.
     *
     * @defaultValueValue - undefined
     * @public
     * @remarks
     * HTML Attribute: `anchor`
     */
    anchor: string;
    /**
     * Specifies whether the tooltip should be triggered on click.
     * @public
     * @remarks - the popover variant of the tooltip will be triggered on click
     */
    triggerOnClick: boolean;
    private _mouseOver;
    /**
     * The placement of the tooltip relative to the anchor element.
     *
     * @public
     * @remarks
     * HTML Attribute: `placement`
     */
    placement: TooltipPosition;
    /**
     * The visibility state of the tooltip.
     *
     * @public
     * @remarks
     * HTML Attribute: `show`
     */
    show: boolean | undefined;
    /**
     * Gets the visibility state of the tooltip.
     * @returns A boolean value indicating whether the tooltip is visible or not.
     * @readonly
     * @public
     */
    get visible(): boolean | undefined;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Sets the positioning of the tooltip based on the anchor element and the specified placement.
     * @public
     * @defaultValue setPositioning(): void
     * @remarks
     * If triggerOnClick is enabled, it announces the tooltip content for accessibility.
     * It also updates the position styles of the tooltip based on the computed position.
     */
    setPositioning(): void;
}
