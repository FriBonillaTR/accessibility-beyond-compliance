import { __decorate } from 'tslib';
import { FASTElement, attr, volatile } from '../../@microsoft/fast-element/dist/esm/index.js';

class Footer extends FASTElement {
    /**
     * Gets the current year as a string.
     * This property is marked as volatile, meaning it may change frequently.
     * @public
     * @returns {string} The current year.
     */
    get currentYear() {
        return new Date().getFullYear().toString();
    }
}
__decorate([
    attr({ attribute: 'product-name' })
], Footer.prototype, "productName", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-label-anchor-group' })
], Footer.prototype, "a11yAriaLabelAnchorGroup", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-label-social-icons' })
], Footer.prototype, "a11yAriaLabelSocialIcons", void 0);
__decorate([
    volatile
], Footer.prototype, "currentYear", null);

export { Footer };
