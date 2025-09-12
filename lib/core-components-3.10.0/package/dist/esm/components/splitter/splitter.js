import { __decorate } from 'tslib';
import { FASTElement, Updates, attr, nullableNumberConverter, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import { keyArrowDown, keyArrowLeft, keyArrowUp, keyArrowRight } from '@microsoft/fast-web-utilities';
import { getRootActiveElement } from '../../utils/dom-helpers.js';
import { getComponentName } from '@saffron/config';

/**
 * A class for Splitter
 */
class Splitter extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * 'Screen reader title for splitter indicator.
         * @public
         */
        this.srOnlyTitle = 'Window splitter';
        /**
         * Whether or not primary panel should be scrollable.
         * @public
         */
        this.scrollablePrimary = true;
        /**
         * Whether or not secondary panel should be scrollable.
         * @public
         */
        this.scrollableSecondary = true;
        /**
         * Controls the visual orientation of the splitter.
         * @public
         */
        this.orientation = 'vertical';
        /**
         * Tooltip text for splitter.
         * @public
         */
        this.tooltipText = 'Drag window';
        this.valuenow = '50';
        /**
         * Current value of the width in percentage 0 - 100
         * @public
         */
        this.width = '';
        this.isHorizontal = () => this.orientation === 'horizontal';
        this.sizeChanged = false;
        this.isDragging = false;
        this.startSize = {
            container: 0,
            primary: 0,
            secondary: 0,
            offset: 0,
        };
        this.onKeyDown = (e) => {
            if (!this.isValidEl()) {
                return;
            }
            if (e.shiftKey) {
                switch (e.key) {
                    case keyArrowRight:
                    case keyArrowUp:
                        e.preventDefault();
                        this.keyDownHandler('increase');
                        break;
                    case keyArrowLeft:
                    case keyArrowDown:
                        e.preventDefault();
                        this.keyDownHandler('decrease');
                        break;
                    default:
                        break;
                    // No default clause to be executed
                }
            }
            else {
                switch (e.key) {
                    case keyArrowRight:
                    case keyArrowUp:
                        e.preventDefault();
                        this.keyDownHandler('increase');
                        break;
                    case keyArrowLeft:
                    case keyArrowDown:
                        e.preventDefault();
                        this.keyDownHandler('decrease');
                        break;
                    default:
                        break;
                    // No default clause to be executed
                }
            }
        };
        /**
         * @public
         * @internal
         * @remarks Fired when the splitter handler moves
         */
        this.onMouseMove = (e) => {
            if (!this.primaryChild || !this.secondaryChild) {
                return;
            }
            const oldValueNow = this.valuenow;
            if (this.isDragging) {
                // Get distance from the start of the splitter handle
                const distance = this.isHorizontal() ? e.clientY : e.clientX;
                const { container, offset } = this.startSize;
                const nextPrimary = distance - offset;
                this.setFlexBasis(this.primaryChild, nextPrimary, container);
                const nextSecondary = container - nextPrimary;
                this.setFlexBasis(this.secondaryChild, nextSecondary, container);
                this.setValueNow();
            }
            if (oldValueNow !== this.valuenow) {
                this.sizeChanged = true;
            }
        };
        /**
         * @public
         * @internal
         * @remarks Fired when the splitter clicked
         */
        this.onMouseDown = () => {
            if (!this.primaryChild || !this.secondaryChild) {
                return;
            }
            this.setStartSize();
            this.isDragging = true;
        };
        /**
         * @public
         * @internal
         * @remarks Fired after dragging the splitter
         */
        this.onMouseUp = () => {
            if (!this.primaryChild || !this.secondaryChild) {
                return;
            }
            this.isDragging = false;
            if (this.sizeChanged) {
                this.$emit('size-change');
                this.sizeChanged = false;
            }
        };
    }
    /**
     * Tracking the changes from the initialSize
     *
     */
    initialSizeChanged(prev, next) {
        if (prev == null && next != null) {
            Updates.enqueue(() => this.setSplitterSize(next));
        }
    }
    widthChanged() {
        // As the value is a string we parse it as number
        const valueAsNumber = parseInt(this.width, 10);
        // it must be a value between 0 and 100 because it is a percentage
        const isBetweenHundred = valueAsNumber >= 0 && valueAsNumber <= 100;
        if (this.width !== '' && isBetweenHundred) {
            this.changeSplitterSize(valueAsNumber, !this.isDragging);
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.processChildren();
        this.handle = this.shadowRoot.querySelector('[part="splitter"]');
        this.handle.addEventListener('mousedown', this.onMouseDown);
        this.addEventListener('mouseup', this.onMouseUp);
        this.addEventListener('mousemove', this.onMouseMove, {
            passive: true,
        });
        this.addEventListener('keydown', this.onKeyDown);
    }
    disconnectedCallback() {
        this.handle.removeEventListener('mousedown', this.onMouseDown);
        this.removeEventListener('mouseup', this.onMouseUp);
        this.removeEventListener('mousemove', this.onMouseMove);
        this.removeEventListener('keydown', this.onKeyDown);
        super.disconnectedCallback();
    }
    /**
     * Change splitter width
     * @public
     * @param {number} percentageSize - percentage number between 0 and 100%
     */
    changeSplitterSize(percentageSize, emitEvent = true) {
        // We only accept percentages that are from 0 to 100
        if (!(percentageSize >= 0 && percentageSize <= 100)) {
            return;
        }
        Updates.enqueue(() => this.setSplitterSize(percentageSize));
        if (emitEvent) {
            Updates.enqueue(() => this.$emit('size-change'));
        }
    }
    /**
     * Set primary and secondary slots
     */
    processChildren() {
        this.primaryChild = this.shadowRoot.querySelector('[part="primary"]');
        this.secondaryChild = this.shadowRoot.querySelector('[part="secondary"]');
    }
    /**
     * Sets size of primary section of splitter with given percentage
     */
    setSplitterSize(percentageSize) {
        if (!this.primaryChild || !this.secondaryChild)
            return;
        this.primaryChild.style.flexBasis = `${percentageSize}${this.isHorizontal() ? 'vh' : '%'}`;
        this.secondaryChild.style.flexBasis = `${100 - percentageSize}${this.isHorizontal() ? 'vh' : '%'}`;
        if (this.valuenow != percentageSize.toString()) {
            this.valuenow = percentageSize.toString();
        }
    }
    /**
     * Increase or decrease the primary panel size
     */
    keyDownHandler(direction) {
        if (!this.handle)
            return;
        this.onMouseDown();
        // Get the next value for the splitter increment or decrement in pixels
        // this is used to update the position of the splitter
        const nextValue = this.getNextValue(direction, this.isHorizontal());
        // Uses the next value to create a new mouse event
        const nextEvent = this.getNextEvent(this.isHorizontal(), nextValue);
        // Calls the mouse move event with the new mouse event
        this.onMouseMove(nextEvent);
        this.onMouseUp();
    }
    setValueNow() {
        // Get the value of the width of the primary child as a percentage of the total width of the splitter
        const primaryWidth = this.primaryChild.getBoundingClientRect().width;
        const totalWidth = this.getBoundingClientRect().width;
        const valueNow = Math.round((primaryWidth / totalWidth) * 100);
        // Make valueNow a string
        this.valuenow = valueNow.toString();
        this.width = this.valuenow;
    }
    getNextValue(direction, isHorizontal) {
        // The distance to jump when the splitter is moved by keyboard in pixels
        const jumpSize = 100;
        // Get the bounds of the splitter handle element
        const bounds = this.handle.getBoundingClientRect();
        // Calculate the next position of the splitter handle depending on the direction
        if (direction === 'increase') {
            return isHorizontal ? bounds.y - jumpSize : bounds.x + jumpSize;
        }
        return isHorizontal ? bounds.y + jumpSize : bounds.x - jumpSize;
    }
    // Uses the next value to create a new mouse event with one key value pair
    getNextEvent(isHorizontal, nextValue) {
        return {
            [isHorizontal ? 'clientY' : 'clientX']: nextValue,
        };
    }
    /**
     * Handle arrow key events
     */
    isValidEl() {
        var _a, _b;
        return (!this.handle ||
            ((_a = getRootActiveElement(this)) === null || _a === void 0 ? void 0 : _a.nodeName) === this.nodeName ||
            ((_b = getRootActiveElement(this)) === null || _b === void 0 ? void 0 : _b.nodeName) ===
                getComponentName('saf-workspace-pattern').toUpperCase());
    }
    /**
     * Set flex basis
     */
    setFlexBasis(element, flexBasis, containerSize) {
        const nextFlexBasis = Math.max(0, Math.min(flexBasis, containerSize));
        element.style.flexBasis = `${nextFlexBasis}px`;
    }
    setStartSize() {
        const { top, left } = this.getBoundingClientRect();
        const size = this.isHorizontal() ? 'height' : 'width';
        const offset = this.isHorizontal() ? top : left;
        const container = this.getBoundingClientRect()[size];
        const primary = this.primaryChild.getBoundingClientRect()[size];
        const secondary = this.secondaryChild.getBoundingClientRect()[size];
        this.startSize = {
            container,
            primary,
            secondary,
            offset,
        };
    }
}
__decorate([
    attr({ attribute: 'sr-only-title' })
], Splitter.prototype, "srOnlyTitle", void 0);
__decorate([
    attr({ attribute: 'initial-size', converter: nullableNumberConverter })
], Splitter.prototype, "initialSize", void 0);
__decorate([
    attr({ attribute: 'scrollable-primary', mode: 'boolean' })
], Splitter.prototype, "scrollablePrimary", void 0);
__decorate([
    attr({ attribute: 'scrollable-secondary', mode: 'boolean' })
], Splitter.prototype, "scrollableSecondary", void 0);
__decorate([
    attr({ attribute: 'orientation' })
], Splitter.prototype, "orientation", void 0);
__decorate([
    attr({ attribute: 'tooltip-text' })
], Splitter.prototype, "tooltipText", void 0);
__decorate([
    observable
], Splitter.prototype, "valuenow", void 0);
__decorate([
    attr({ attribute: 'width' })
], Splitter.prototype, "width", void 0);

export { Splitter };
