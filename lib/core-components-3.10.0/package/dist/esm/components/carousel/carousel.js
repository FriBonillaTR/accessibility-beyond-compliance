import { __decorate } from 'tslib';
import { FASTElement, attr, observable } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * A class for Carousel
 */
class Carousel extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Hide or show the flippers for assistive technologies.
         *
         * @public
         */
        this.flippersHiddenFromAT = 'true';
        /**
         * Header to display in slide controls.
         *
         * @public
         */
        this.slideLabel = 'Slide';
        /**
         * Determines the total number of slides.
         *
         * @public
         */
        this.totalSlides = 0;
        /**
         * Determines the number of the current slide.
         *
         * @public
         */
        this.currentSlide = 1;
        this.endOfSlides = false;
        this.currentIndex = 1;
        this.observeResize = true;
    }
    addResizeObserver() {
        if (this.resizeObserver)
            this.resizeObserver.disconnect();
        if (!this.observeResize) {
            return;
        }
        this.resizeObserver = new ResizeObserver(() => {
            this.step = this.contentContainer.offsetWidth;
            this.resizeSlide();
            return;
        });
        this.resizeObserver.observe(this.parentElement);
    }
    slottedNodesChanged() {
        var _a;
        if ((_a = this.slottedNodes) === null || _a === void 0 ? void 0 : _a.length) {
            this.initialize();
        }
    }
    initialize() {
        if (this.shadowRoot) {
            this.scrollArea = this.shadowRoot.querySelector('.scroll-area');
            this.contentContainer = this.shadowRoot.querySelector('.content-container');
            this.scrollArea.classList.add('js-controlled');
            this.slotContent = this.shadowRoot.querySelector('slot');
            this.slides = this.slotContent.assignedElements();
            this.totalSlides = this.slides.length;
            if (!this.step)
                this.step = this.contentContainer.offsetWidth;
            this.addResizeObserver();
        }
    }
    resizeSlide() {
        this.contentContainer.style.transform = `translateX(-${this.step * (this.currentSlide - 1)}px)`;
    }
    previousSlide() {
        if (this.currentSlide <= this.totalSlides && this.currentSlide > 1) {
            this.currentSlide--;
            this.currentIndex--;
            this.contentContainer.style.transform = `translateX(-${this.step * (this.currentSlide - 1)}px)`;
        }
    }
    nextSlide() {
        if (this.currentSlide <= this.totalSlides - 1 && this.currentSlide > 0) {
            this.currentSlide++;
            this.contentContainer.style.transform = `translateX(-${this.step * (this.currentSlide - 1)}px)`;
        }
        if (this.currentIndex === this.totalSlides) {
            this.endOfSlides = true;
        }
        if (this.endOfSlides && this.currentIndex === this.totalSlides) {
            this.currentSlide = 1;
            this.currentIndex = 0;
            this.contentContainer.style.transform = `translateX(0)`;
        }
        this.currentIndex++;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.resizeObserver)
            this.resizeObserver.disconnect();
    }
}
__decorate([
    attr({ attribute: 'flippers-hidden-from-AT' })
], Carousel.prototype, "flippersHiddenFromAT", void 0);
__decorate([
    attr({ attribute: 'slide-label' })
], Carousel.prototype, "slideLabel", void 0);
__decorate([
    attr({ attribute: 'total-slides' })
], Carousel.prototype, "totalSlides", void 0);
__decorate([
    attr({ attribute: 'current-slide' })
], Carousel.prototype, "currentSlide", void 0);
__decorate([
    attr
], Carousel.prototype, "step", void 0);
__decorate([
    attr
], Carousel.prototype, "contentContainer", void 0);
__decorate([
    attr
], Carousel.prototype, "scrollArea", void 0);
__decorate([
    attr
], Carousel.prototype, "slotContent", void 0);
__decorate([
    attr
], Carousel.prototype, "slides", void 0);
__decorate([
    attr
], Carousel.prototype, "endOfSlides", void 0);
__decorate([
    attr
], Carousel.prototype, "currentIndex", void 0);
__decorate([
    attr({ attribute: 'observe-resize', mode: 'boolean' })
], Carousel.prototype, "observeResize", void 0);
__decorate([
    observable
], Carousel.prototype, "slottedNodes", void 0);

export { Carousel };
