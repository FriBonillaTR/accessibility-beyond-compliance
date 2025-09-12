import { __decorate } from 'tslib';
import { FASTElement, observable } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * A base class for creating responsive elements.
 * Meant to be used as a mixin
 * @public
 */
class ResponsiveElement extends FASTElement {
    constructor() {
        super(...arguments);
        this._mode = 'mobile';
    }
    // Helper function for creating ResizeObserver in the component
    createResizeObserver(config) {
        const { threshold = 5, breakpoint = 480 } = config !== null && config !== void 0 ? config : {};
        let previousWidth = 0;
        return new ResizeObserver((entries) => {
            const parent = entries[0];
            // Prevents from firing on every change
            if (Math.abs(parent.contentRect.width - previousWidth) > threshold) {
                const isNarrow = parent.contentRect.width < breakpoint;
                this._mode = isNarrow ? 'mobile' : 'desktop';
                previousWidth = parent.contentRect.width;
            }
        });
    }
    /**
     * read-only property to get the current mode of the element
     *
     * @internal
     */
    get mode() {
        return this._mode;
    }
    set mode(_) {
        throw new Error('mode is read-only');
    }
    initializeResponsiveness(config) {
        // wait for the element to be rendered
        setTimeout(() => {
            var _a, _b;
            // create and attach ResizeObserver to element
            this.resizeObserver = this.createResizeObserver(config);
            // observe parent element for resize
            (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.observe(this.parentElement);
            // initialize mode
            this._mode =
                this.parentElement.getBoundingClientRect().width < ((_b = config === null || config === void 0 ? void 0 : config.breakpoint) !== null && _b !== void 0 ? _b : 480)
                    ? 'mobile'
                    : 'desktop';
            // add modeChanged handler
            this._modeChanged = (_prev, next) => {
                this.$emit('mode-change', next);
            };
        });
    }
    disconnectResizeObserver() {
        // This is also wrapped in a setTimeout to ensure execution order is correct with connecting the ResizeObserver
        setTimeout(() => {
            var _a;
            (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        });
    }
}
__decorate([
    observable
], ResponsiveElement.prototype, "_mode", void 0);

export { ResponsiveElement };
