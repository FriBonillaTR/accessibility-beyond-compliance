import { __decorate } from 'tslib';
import { FASTElement, attr, nullableNumberConverter } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { uniqueId } from '@microsoft/fast-web-utilities';
import { applyMixins } from '../../../utils/apply-mixins.js';
import '../../../utils/index.js';
import { StartEnd } from '../../../utils/start-end-template.js';
import { AccordionItemHeadingSizeEnum } from './accordion-item.options.js';
import { ComponentDensityEnum } from '../../../utils/global-enums.js';

/**
 * A class derived from the Accordion foundation component
 */
class AccordionItem extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Configures the {@link https://www.w3.org/TR/wai-aria-1.1/#aria-level | level} of the
         * heading element.
         *
         * @defaultValue 2
         * @public
         * @remarks
         * HTML attribute: heading-level
         */
        this.headinglevel = 2;
        /**
         * Expands or collapses the item.
         *
         * @public
         * @remarks
         * HTML attribute: expanded
         */
        this.expanded = false;
        /**
         * Disables an accordion item
         *
         * @public
         * @remarks
         * HTML attribute: disabled
         */
        this.disabled = false;
        /**
         * The item ID
         *
         * @public
         * @remarks
         * HTML Attribute: id
         */
        this.id = uniqueId('accordion-');
        /**
         * @internal
         */
        this.clickHandler = (e) => {
            if (this.disabled) {
                return;
            }
            // TODO: remove re-emitting click in v4. it
            this.$emit('click', e);
            // this event is used by parent accordion to toggle the expanded state of the item
            this.$emit('toggle', e, { bubbles: false });
        };
        /**
         * Used to change the spacing in and around the component.
         * @public
         */
        this.density = ComponentDensityEnum.inherit;
        /**
         * Determines whether the heading element should fill the available width or hug its content.
         * @public
         */
        this.headingSize = AccordionItemHeadingSizeEnum.fill;
        /**
         * `Deprecated`. Propagation is allowed by default.
         * @TODO: Delete attribute in v4
         * @public
         * @deprecated
         */
        this.allowContentPropagation = false;
    }
}
__decorate([
    attr({
        attribute: 'heading-level',
        mode: 'fromView',
        converter: nullableNumberConverter,
    })
], AccordionItem.prototype, "headinglevel", void 0);
__decorate([
    attr({ mode: 'boolean' })
], AccordionItem.prototype, "expanded", void 0);
__decorate([
    attr({ mode: 'boolean' })
], AccordionItem.prototype, "disabled", void 0);
__decorate([
    attr
], AccordionItem.prototype, "id", void 0);
__decorate([
    attr
], AccordionItem.prototype, "density", void 0);
__decorate([
    attr({ attribute: 'heading-size' })
], AccordionItem.prototype, "headingSize", void 0);
__decorate([
    attr({ mode: 'boolean', attribute: 'allow-content-propagation' })
], AccordionItem.prototype, "allowContentPropagation", void 0);
applyMixins(AccordionItem, StartEnd);

export { AccordionItem };
