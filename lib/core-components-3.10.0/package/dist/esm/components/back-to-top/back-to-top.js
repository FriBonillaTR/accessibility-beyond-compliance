import { __decorate } from 'tslib';
import { FASTElement, attr } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * A class for back-to-top derived from the Button foundation component
 */
class BackToTop extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * The anchor id to which you want to scroll.
         * For example, if you want to scroll to the top of the body, and the body has an id of `top`, the value for this attribute is `top`.
         *
         * @public
         */
        this.scrollToId = 'top';
        /**
         * The distance in pixels a user has to scroll from the top before the component appears.
         *
         * @public
         */
        this.yOffset = 100;
        /**
         * Whether or not the component is used in a right-to-left situation.
         * If rtl, the component will appear on the bottom left side of the screen.
         *
         * @public
         */
        this.direction = 'ltr';
        /**
         * The text that appears in the tooltip that is activated on hover or focus.
         *
         * @public
         */
        this.tooltipText = 'Back to top';
        this.id = 'backToTop';
    }
    handleScroll() {
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(() => {
            if (window.scrollY > this.yOffset) {
                this.classList.add('show');
            }
            else {
                this.classList.remove('show');
            }
        }, 250);
    }
    connectedCallback() {
        super.connectedCallback();
        const html = document.documentElement;
        if (html)
            html.style.scrollBehavior = 'smooth';
        this.handleScroll = this.handleScroll.bind(this);
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }
    disconnectedCallBack() {
        super.disconnectedCallback();
        window.removeEventListener('scroll', this.handleScroll);
    }
}
__decorate([
    attr({ attribute: 'scroll-to-id' })
], BackToTop.prototype, "scrollToId", void 0);
__decorate([
    attr({ attribute: 'y-offset' })
], BackToTop.prototype, "yOffset", void 0);
__decorate([
    attr
], BackToTop.prototype, "direction", void 0);
__decorate([
    attr({ attribute: 'tooltip-text' })
], BackToTop.prototype, "tooltipText", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-description' })
], BackToTop.prototype, "a11yAriaDescription", void 0);
__decorate([
    attr
], BackToTop.prototype, "id", void 0);

export { BackToTop };
