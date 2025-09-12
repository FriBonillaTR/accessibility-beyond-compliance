import { __decorate } from 'tslib';
import { FASTElement, attr } from '../../../@microsoft/fast-element/dist/esm/index.js';

/**
 * A class derived from the FASTElement foundation component
 */
class DescriptionDetails extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Determine if the bullets are going to be displayed or not.
         *
         * @public
         */
        this.bulletPoint = true;
    }
}
__decorate([
    attr({ attribute: 'bullet-point', mode: 'boolean' })
], DescriptionDetails.prototype, "bulletPoint", void 0);

export { DescriptionDetails };
