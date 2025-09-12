import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { CardAppearance } from './card.options.js';
import { ComponentDensity } from '../../utils/index.js';
/**
 * A class for Card
 */
export declare class Card extends FASTElement {
    /**
     * Determines the card orientation.
     *
     * @public
     */
    appearance: CardAppearance;
    /**
     * Configures the {@link https://www.w3.org/TR/wai-aria-1.1/#aria-level | level} of the heading element.
     *
     * @a11y
     * @public
     */
    headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    /**
     * Determines if the image bleeds to the edge of the card or is inset
     *
     * @public
     */
    imageBleed: boolean;
}
