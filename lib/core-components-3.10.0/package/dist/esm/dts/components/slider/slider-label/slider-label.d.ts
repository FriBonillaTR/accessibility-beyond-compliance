import { FASTElement } from '../../../@microsoft/fast-element/index.js';
/**
 * A label element intended to be used with the {@link @saffron/core-components#(Slider:class)} component.
 *
 * @slot - The default slot for the label content
 * @csspart container - The element wrapping the label mark and content
 * @csspart mark - The element wrapping the label mark
 * @csspart content - The element wrapping the label content
 *
 * @public
 */
export declare class SliderLabel extends FASTElement {
    /**
     * The position of the label relative to the min and max value of the parent Slider.
     *
     * @see {@link @saffron/core-components#(Slider:class)}.
     * @public
     * @remarks
     * HTML Attribute: position
     */
    position: string;
    protected positionChanged(): void;
    /**
     * Hides the tick mark.
     *
     * @public
     * @remarks
     * HTML Attribute: hide-mark
     */
    hideMark: boolean;
    /**
     * The disabled state of the label. This is generally controlled by the parent Slider.
     * @see {@link @saffron/core-components#(Slider:class)}.
     *
     * @public
     * @remarks
     * HTML Attribute: disabled
     */
    disabled: boolean;
    private notifier;
    private isSliderConfig;
    private getSliderConfiguration;
    private positionAsStyle;
}
