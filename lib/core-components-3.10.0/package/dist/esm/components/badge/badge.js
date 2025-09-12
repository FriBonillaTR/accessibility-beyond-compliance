import { __decorate } from 'tslib';
import { FASTElement, attr } from '../../@microsoft/fast-element/dist/esm/index.js';
import { applyMixins } from '../../utils/apply-mixins.js';
import { StartEnd } from '../../utils/start-end-template.js';
import '../../utils/index.js';
import { ComponentDensityEnum } from '../../utils/global-enums.js';

/**
 * A Badge Custom HTML Element.
 * @slot start - Content which can be provided before the default slot
 * @slot end - Content which can be provided after the default slot
 * @slot - The default slot for the badge
 * @csspart control - The element wrapping the default slot
 *
 * @public
 */
class Badge extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Determines if the badge is attached to its parent.
         *
         * @public
         */
        this.attached = false;
        /**
         * If true, the badge will render a smaller variant meant to be used as a counter.
         *
         * @public
         */
        this.counter = false;
        /**
         * Used to change the spacing in and around the component.
         *
         * @public
         */
        this.density = ComponentDensityEnum.inherit;
    }
}
__decorate([
    attr({ mode: 'boolean' })
], Badge.prototype, "attached", void 0);
__decorate([
    attr({ mode: 'boolean' })
], Badge.prototype, "counter", void 0);
__decorate([
    attr
], Badge.prototype, "appearance", void 0);
__decorate([
    attr
], Badge.prototype, "density", void 0);
applyMixins(Badge, StartEnd);

export { Badge };
