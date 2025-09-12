import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { Direction as DirectionEnum } from '@microsoft/fast-web-utilities';
type Direction = keyof typeof DirectionEnum;
/**
 * A class for back-to-top derived from the Button foundation component
 */
export declare class BackToTop extends FASTElement {
    /**
     * The anchor id to which you want to scroll.
     * For example, if you want to scroll to the top of the body, and the body has an id of `top`, the value for this attribute is `top`.
     *
     * @public
     */
    scrollToId: string;
    /**
     * The distance in pixels a user has to scroll from the top before the component appears.
     *
     * @public
     */
    yOffset: number;
    /**
     * Whether or not the component is used in a right-to-left situation.
     * If rtl, the component will appear on the bottom left side of the screen.
     *
     * @public
     */
    direction: Direction;
    /**
     * The text that appears in the tooltip that is activated on hover or focus.
     *
     * @public
     */
    tooltipText: string;
    /**
     * A description for the anchor that is only visible to screen readers, passed to a hidden span element, connected to the anchor via aria-describedby
     *
     * @public
     */
    a11yAriaDescription: string | undefined;
    id: string;
    private scrollTimeout;
    private handleScroll;
    connectedCallback(): void;
    disconnectedCallBack(): void;
}
export {};
