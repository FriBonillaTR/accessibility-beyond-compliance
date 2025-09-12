import { __decorate } from 'tslib';
import { FASTElement, attr, nullableNumberConverter } from '../../@microsoft/fast-element/dist/esm/index.js';
import { CardAppearanceEnum } from './card.options.js';
import '../../utils/index.js';
import { ComponentDensityEnum } from '../../utils/global-enums.js';

/**
 * A class for Card
 */
class Card extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Determines the card orientation.
         *
         * @public
         */
        this.appearance = CardAppearanceEnum.vertical;
        /**
         * Configures the {@link https://www.w3.org/TR/wai-aria-1.1/#aria-level | level} of the heading element.
         *
         * @a11y
         * @public
         */
        this.headingLevel = 2;
        /**
         * Used to change the spacing in and around the component.
         *
         * @public
         */
        this.density = ComponentDensityEnum.inherit;
        /**
         * Determines if the image bleeds to the edge of the card or is inset
         *
         * @public
         */
        this.imageBleed = true;
    }
}
__decorate([
    attr
], Card.prototype, "appearance", void 0);
__decorate([
    attr({
        attribute: 'heading-level',
        mode: 'fromView',
        converter: nullableNumberConverter,
    })
], Card.prototype, "headingLevel", void 0);
__decorate([
    attr
], Card.prototype, "density", void 0);
__decorate([
    attr({ attribute: 'image-bleed', mode: 'boolean' })
], Card.prototype, "imageBleed", void 0);

export { Card };
