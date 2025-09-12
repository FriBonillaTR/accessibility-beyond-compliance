import { __decorate } from 'tslib';
import { FASTElement, attr, observable } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * A class for SkipLinkGroup
 */
class SkipLinkGroup extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * The aria label for the skip link group.
         *
         * @a11y
         * @public
         */
        this.ariaLabel = 'Skip links';
        this.slottedSkipLinks = [];
    }
    slottedSkipLinksChanged() {
        this.slottedSkipLinks.forEach((skipLink) => {
            skipLink.setAttribute('nested', 'true');
        });
    }
}
__decorate([
    attr({ attribute: 'aria-label' })
], SkipLinkGroup.prototype, "ariaLabel", void 0);
__decorate([
    observable
], SkipLinkGroup.prototype, "slottedSkipLinks", void 0);

export { SkipLinkGroup };
