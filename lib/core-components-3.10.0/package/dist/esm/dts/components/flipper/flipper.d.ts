import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { FlipperDirection } from './flipper.options.js';
/**
 * A Flipper Custom HTML Element.
 * Flippers are a form of button that implies directional content navigation, such as in a carousel.
 *
 * @slot next - The next flipper content
 * @slot previous - The previous flipper content
 * @csspart next - Wraps the next flipper content
 * @csspart previous - Wraps the previous flipper content
 * @fires click - Fires a custom 'click' event when Enter or Space is invoked via keyboard
 * and the flipper is exposed to assistive technologies.
 *
 * @public
 */
export declare class Flipper extends FASTElement {
    /**
     * Disables the flipper component.
     * @public
     */
    disabled: boolean;
    /**
     * Indicates the flipper should be hidden from assistive technology.
     * Because flippers are often supplementary navigation, they are often hidden from assistive technology.
     *
     * @public
     * @defaultValue - true
     * @remarks
     * HTML Attribute: aria-hidden
     */
    hiddenFromAT: boolean;
    /**
     * Sets the direction of the flipper
     *
     * @public
     *  @defaultValue previous
     * @remarks
     * HTML Attribute: direction
     */
    direction: FlipperDirection;
    /**
     * Simulate a click event when the flipper has focus and the user hits enter or space keys
     * Blur focus if the user hits escape key
     * @param e - Keyboard event
     * @public
     */
    keyupHandler(e: Event & KeyboardEvent): void;
}
