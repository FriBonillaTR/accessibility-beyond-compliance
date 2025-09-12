import { __decorate } from 'tslib';
import { Updates, attr } from '../../@microsoft/fast-element/dist/esm/index.js';
import { AnchorBase } from '../anchor/anchor.js';
import { isElementInViewport } from '../../utils/dom-helpers.js';

/**
 * A class for SkipLink
 */
class SkipLink extends AnchorBase {
    constructor() {
        super(...arguments);
        /**
         * Determines the positioning of the skip link.
         * If set to 'absolute', the skip link will be positioned absolutely within its container.
         * If set to 'fixed', it will be fixed relative to the viewport.
         */
        this.positioning = 'fixed';
        /**
         * Determines the [scroll alignment](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#block) when the skip link is activated.
         */
        this.scrollAlignToTop = 'center';
    }
    positioningChanged() {
        if (this.$fastController.isConnected) {
            this.setTabIndex();
        }
    }
    focusOnTarget() {
        Updates.enqueue(() => {
            var _a;
            const targetId = (_a = this.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.slice(1);
            if (targetId) {
                const targetElement = this.getRootNode().getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: this.scrollAlignToTop,
                    });
                    if ('onscrollend' in window && !isElementInViewport(targetElement)) {
                        const scrollEndHandler = () => {
                            targetElement.focus({ preventScroll: true });
                            window.removeEventListener('scrollend', scrollEndHandler);
                        };
                        window.addEventListener('scrollend', scrollEndHandler);
                    }
                    else {
                        // Fall back to focusing immediately after scrolling
                        targetElement.focus();
                    }
                }
            }
        });
    }
    connectedCallback() {
        super.connectedCallback();
        this.setTabIndex();
        this.addEventListener('click', (event) => {
            if (this.href.startsWith('#')) {
                event.preventDefault();
                this.focusOnTarget();
                window.history.pushState({}, '', this.href);
            }
        });
    }
    setTabIndex() {
        if (this.positioning === 'absolute') {
            this.tabIndex = 0;
        }
        else {
            this.tabIndex = 1;
        }
    }
}
__decorate([
    attr
], SkipLink.prototype, "positioning", void 0);
__decorate([
    attr({ attribute: 'scroll-align-to-top' })
], SkipLink.prototype, "scrollAlignToTop", void 0);

export { SkipLink };
