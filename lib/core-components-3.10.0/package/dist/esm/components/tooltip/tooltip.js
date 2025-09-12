import { __awaiter, __decorate } from 'tslib';
import { autoUpdate, computePosition, flip, shift } from '@floating-ui/dom';
import { FASTElement, Updates, css, observable, attr, nullableBooleanConverter } from '../../@microsoft/fast-element/dist/esm/index.js';
import { keyEscape, uniqueId } from '@microsoft/fast-web-utilities';
import { SafA11y } from '../../services/a11y.js';
import { Logger } from '../../services/logger.js';
import '../../utils/index.js';
import { getRootActiveElement } from '../../utils/dom-helpers.js';

const HIDE_DELAY = 150;
/**
 * A class derived from the FASTTooltip foundation component
 */
class Tooltip extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * The visibility of the tooltip.
         *
         * @private
         * @internal
         */
        this._visible = false;
        /**
         * A reference to the anchor element.
         * @public
         * @internal
         */
        this.anchorElement = null;
        /**
         * Specifies whether the tooltip should be triggered on click.
         * @public
         * @remarks - the popover variant of the tooltip will be triggered on click
         */
        this.triggerOnClick = false;
        /**
         * Indicates if the tooltip visibility is controlled by the `visible` attribute.
         *
         * @private
         * @internal
         * @remarks
         * When `true`, the tooltip visibility is controlled by the `visible` attribute.
         * When `false`, the tooltip visibility is controlled by the `mouseover` and `focusin` events on the anchor element.
         */
        this.controlledVisibility = false;
        this._mouseOver = false;
        /**
         * Hides the tooltip when the anchor element loses focus.
         * @protected
         * @internal
         */
        this.focusoutAnchorHandler = () => {
            if (!this.controlledVisibility && this._visible && !this._mouseOver) {
                this.hideTooltip();
            }
        };
        /**
         * Shows the tooltip when the anchor element gains focus.
         * @protected
         * @internal
         */
        this.focusinAnchorHandler = () => {
            var _a;
            if (!this.controlledVisibility && !this._visible) {
                (_a = this.anchorElement) === null || _a === void 0 ? void 0 : _a.focus();
                this.showTooltip();
            }
        };
        /**
         * Dismisses the tooltip if the 'Escape' key is pressed and the tooltip is visible.
         *
         * @param e - the keyboard event
         * @private
         * @internal
         */
        this.keydownDocumentHandler = (e) => {
            if (!e.defaultPrevented && this.visible && e.key === keyEscape) {
                this.dismiss();
            }
        };
        /**
         * Shows the tooltip when the mouse is over the anchor element.
         * @private
         * @internal
         */
        this.mouseoverAnchorHandler = () => {
            var _a;
            if (!((_a = getRootActiveElement(this)) === null || _a === void 0 ? void 0 : _a.isSameNode(this.anchorElement))) {
                this.showTooltip();
            }
            this._mouseOver = true;
        };
        /**
         * Hides the tooltip when the mouse leaves the anchor element.
         * @private
         * @internal
         */
        this.mouseoutAnchorHandler = (e) => {
            var _a;
            if (!((_a = getRootActiveElement(this)) === null || _a === void 0 ? void 0 : _a.isSameNode(this.anchorElement)) &&
                !this.isSameNode(e.relatedTarget)) {
                this.hideTooltip();
            }
            this._mouseOver = false;
        };
        /**
         * Event handler for click events on the anchor element.
         *
         * @param e - The click event object
         * @private
         * @internal
         * @remarks
         * Stops the event propagation and toggles the visibility of the tooltip.
         * If the tooltip is currently visible, it will be hidden. If it is hidden, it will be shown.
         * This handler is only triggered if the tooltip's visibility is not controlled externally.
         */
        this.clickAnchorHandler = (e) => {
            var _a;
            e.stopPropagation();
            if (!this.controlledVisibility) {
                if (this._visible) {
                    this.hideTooltip();
                }
                else {
                    (_a = this.anchorElement) === null || _a === void 0 ? void 0 : _a.focus();
                    this.showTooltip();
                }
            }
        };
        /**
         * Event handler for handling blur events on the anchor element.
         * @private
         * @internal
         * @remarks If the tooltip is not controlled and visible, and the active element is not the tooltip itself,
         * the anchor element, or any of their descendants, the tooltip will be hidden.
         */
        this.blurAnchorHandler = () => {
            Updates.enqueue(() => {
                if (!this.controlledVisibility && this._visible) {
                    if (document.activeElement !== this &&
                        document.activeElement !== this.anchorElement &&
                        !this.contains(document.activeElement) &&
                        !(this.anchorElement && this.anchorElement.contains(document.activeElement))) {
                        this.hideTooltip();
                    }
                }
            });
        };
        /**
         * The placement of the tooltip relative to the anchor element.
         *
         * @public
         * @remarks
         * HTML Attribute: `placement`
         */
        this.placement = 'bottom';
        /**
         * Handles the focus in event for the tooltip anchor element.
         * @private
         * @internal
         */
        this.onFocusIn = () => {
            this.setAttribute('anchor-focused', 'true');
        };
        /**
         * Handles the focus out event for the tooltip component.
         * @private
         * @internal
         * @remarks Sets the 'anchor-focused' attribute to 'false'.
         */
        this.onFocusOut = () => {
            this.setAttribute('anchor-focused', 'false');
        };
    }
    /**
     * Removes listeners from the previous anchor element and updates the anchor element reference.
     *
     * @param prev - the previous anchor string
     * @param next - the current anchor string
     * @protected
     * @internal
     */
    anchorChanged(prev, next) {
        if (this.$fastController.isConnected && next) {
            this.removeListeners();
            this.removeAnchorAriaDescribedBy(this.id);
            this.anchorElement = this.getAnchorElement(next);
            this.addAnchorAriaDescribedBy();
            if (!this.controlledVisibility) {
                this.addListeners();
            }
        }
    }
    /**
     * Handles the change event for the `triggerOnClick` property.
     * Removes existing event listeners and adds new ones based on the updated property value.
     * @protected
     * @internal
     */
    triggerOnClickChanged() {
        if (this.$fastController.isConnected) {
            this.removeListeners();
            this.addListeners();
        }
    }
    /**
     * Switches between controlled and uncontrolled visibility.
     *
     * @param prev - the previous forced visibility state
     * @param next - the current forced visibility state
     * @protected
     * @internal
     */
    controlledVisibilityChanged(prev, next) {
        if (prev && !next) {
            this.addListeners();
            this.hideTooltip();
            return;
        }
        else if (next) {
            this.removeListeners();
        }
    }
    /**
     * Handles the change of the tooltip's ID.
     * @param prev - The previous ID value.
     * @param _next - The new ID value (not used in this method).
     *
     * @public
     * @internal
     */
    idChanged(prev, _next) {
        if (this.addListenersTimeout) {
            clearTimeout(this.addListenersTimeout);
        }
        this.removeAnchorAriaDescribedBy(prev);
        Updates.enqueue(() => {
            this.addAnchorAriaDescribedBy();
        });
    }
    /**
     * Handles the outside click event for the tooltip.
     *
     * @param _event - The custom event containing the click-away details.
     * @public
     * @internal
     * @remarks If `triggerOnClick` is true, it hides the tooltip.
     */
    handleOutsideClick(_event) {
        if (this.triggerOnClick) {
            this.hideTooltip();
        }
    }
    /**
     * Updates the styles for the tooltip position.
     *
     * @param prev - the previous placement styles
     * @param next - the current placement styles
     * @protected
     * @internal
     */
    positionStylesChanged(prev, next) {
        this.$fastController.removeStyles(prev);
        this.$fastController.addStyles(next);
    }
    /**
     * Sets the visibility of the tooltip based on the change in the `show` property.
     * @param prev - The previous value of the `show` property.
     * @param next - The new value of the `show` property.
     * @public
     * @internal
     */
    showChanged(prev, next) {
        this.setVisible(next);
    }
    /**
     * Gets the visibility state of the tooltip.
     * @returns A boolean value indicating whether the tooltip is visible or not.
     * @readonly
     * @public
     */
    get visible() {
        return this._visible;
    }
    /**
     * Sets the forced visibility state and shows or hides the tooltip.
     * @param value - The visibility value. If `true`, the tooltip will be shown. If `false`, the tooltip will be hidden.
     * @private
     * @internal
     */
    setVisible(value) {
        this.controlledVisibility = typeof value === 'boolean';
        if (this.controlledVisibility) {
            this.show = value;
        }
        if (value) {
            this.showTooltip();
            return;
        }
        this.hideTooltip();
    }
    /**
     * Adds the tooltip's ID to the `aria-describedby` attribute of the anchor element.
     * @private
     * @internal
     * @remarks
     * If the tooltip doesn't have an ID, a unique ID is generated and assigned to it.
     * If the anchor element doesn't exist, no action is taken.
     */
    addAnchorAriaDescribedBy() {
        var _a;
        if (!this.id) {
            this.id = uniqueId('tooltip-');
            return;
        }
        if (!this.anchorElement) {
            return;
        }
        const anchorElementDescribedBy = (_a = this.anchorElement
            .getAttribute('aria-describedby')) === null || _a === void 0 ? void 0 : _a.concat(' ', this.id).trim();
        if (anchorElementDescribedBy) {
            this.anchorElement.setAttribute('aria-describedby', anchorElementDescribedBy);
        }
    }
    /**
     * Adds event listeners to the anchor element, the tooltip element, and the document.
     * @param retry - The number of times to retry finding the anchor element.
     * @private
     * @internal
     */
    addListeners(retry = 0) {
        if (!this.anchorElement && retry < 5) {
            Logger.warn(`Tooltip with ID "${this.id}": anchor element not found. Try #${retry + 1}. Retrying in ${retry * 200}ms.`, 'This is usually indicative of a wrong rendering order; ensure that the anchor element is rendered before the tooltip.');
            this.addListenersTimeout = setTimeout(() => {
                this.anchorElement = this.getAnchorElement(this.anchor);
                this.addListeners(retry + 1);
            }, retry * 200);
            return;
        }
        if (!this.anchorElement) {
            Logger.error(`Tooltip with ID "${this.id}": anchor element ${this.anchor ? `with ID "${this.anchor}" ` : ''}not found after 5 retries`);
            return;
        }
        if (this.triggerOnClick) {
            this.anchorElement.addEventListener('click', this.clickAnchorHandler);
            this.anchorElement.addEventListener('blur', this.blurAnchorHandler);
        }
        else {
            this.anchorElement.addEventListener('focus', this.focusinAnchorHandler);
            this.anchorElement.addEventListener('focusout', this.focusoutAnchorHandler);
            this.anchorElement.addEventListener('mouseout', this.mouseoutAnchorHandler);
            this.anchorElement.addEventListener('mouseover', this.mouseoverAnchorHandler);
            this.addEventListener('mouseout', this.mouseoutAnchorHandler);
            this.addEventListener('mouseover', this.mouseoverAnchorHandler);
        }
        this.anchorElement.addEventListener('focus', this.onFocusIn);
        this.anchorElement.addEventListener('focusout', this.onFocusOut);
        document.addEventListener('keydown', this.keydownDocumentHandler);
    }
    connectedCallback() {
        var _a;
        super.connectedCallback();
        this.anchorChanged(undefined, this.anchor);
        const clearHideTimeout = () => {
            if (this.hideTimeout) {
                clearTimeout(this.hideTimeout);
            }
        };
        (_a = this.anchorElement) === null || _a === void 0 ? void 0 : _a.addEventListener('mouseover', clearHideTimeout);
        this.addEventListener('mouseover', clearHideTimeout);
    }
    /**
     * Hides the tooltip and emits a custom `dismiss` event.
     * @private
     * @internal
     */
    dismiss() {
        this.hideTooltip();
        this.$emit('dismiss', null, { bubbles: false });
    }
    /**
     * Retrieves the anchor element with the specified id.
     * If the component is within a ShadowRoot, it searches for the element within the ShadowRoot.
     * Otherwise, it searches for the element within the document.
     * @param id - The id of the anchor element to retrieve.
     * @returns The anchor element with the specified id, or null if it is not found.
     * @private
     * @internal
     */
    getAnchorElement(id = '') {
        const rootNode = this.getRootNode();
        if (rootNode instanceof ShadowRoot) {
            return rootNode.getElementById(id);
        }
        return document.getElementById(id);
    }
    /**
     * Removes the specified ID from the `aria-describedby` attribute of the anchor element.
     * If the `aria-describedby` attribute becomes empty after removing the ID, the attribute is removed.
     * @param id - The ID to be removed from the `aria-describedby` attribute.
     * @private
     * @internal
     */
    removeAnchorAriaDescribedBy(id) {
        var _a;
        if (this.anchorElement) {
            const anchorElementDescribedBy = (_a = this.anchorElement
                .getAttribute('aria-describedby')) === null || _a === void 0 ? void 0 : _a.split(' ');
            this.anchorElement.setAttribute('aria-describedby', (anchorElementDescribedBy !== null && anchorElementDescribedBy !== void 0 ? anchorElementDescribedBy : []).filter((i) => i !== id).join(' '));
            if (this.anchorElement.getAttribute('aria-describedby') === '') {
                this.anchorElement.removeAttribute('aria-describedby');
            }
        }
    }
    /**
     * Removes event listeners from the anchor element, the tooltip element, and the document.
     * @private
     * @internal
     */
    removeListeners() {
        if (!this.anchorElement) {
            return;
        }
        this.anchorElement.removeEventListener('focus', this.focusinAnchorHandler);
        this.anchorElement.removeEventListener('focusout', this.focusoutAnchorHandler);
        this.anchorElement.removeEventListener('mouseout', this.mouseoutAnchorHandler);
        this.anchorElement.removeEventListener('mouseover', this.mouseoverAnchorHandler);
        this.anchorElement.removeEventListener('click', this.clickAnchorHandler);
        this.anchorElement.removeEventListener('blur', this.blurAnchorHandler);
        this.anchorElement.removeEventListener('focus', this.onFocusIn);
        this.anchorElement.removeEventListener('focusout', this.onFocusOut);
        this.removeEventListener('mouseout', this.mouseoutAnchorHandler);
        this.removeEventListener('mouseover', this.mouseoverAnchorHandler);
        document.removeEventListener('keydown', this.keydownDocumentHandler);
    }
    /**
     * Shows the tooltip.
     * @private
     * @internal
     */
    showTooltip() {
        this._visible = true;
        Updates.enqueue(() => this.setPositioning());
    }
    /**
     * Hides the tooltip with delay.
     * @private
     * @internal
     */
    hideTooltip() {
        this.hideTimeout = setTimeout(() => {
            var _a;
            if (!this.show) {
                this._visible = false;
                (_a = this.cleanup) === null || _a === void 0 ? void 0 : _a.call(this);
            }
        }, HIDE_DELAY);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeListeners();
    }
    /**
     * Sets the positioning of the tooltip based on the anchor element and the specified placement.
     * @public
     * @defaultValue setPositioning(): void
     * @remarks
     * If triggerOnClick is enabled, it announces the tooltip content for accessibility.
     * It also updates the position styles of the tooltip based on the computed position.
     */
    setPositioning() {
        var _a;
        if (this.triggerOnClick) {
            SafA11y.announce(this.textContent);
        }
        (_a = this.cleanup) === null || _a === void 0 ? void 0 : _a.call(this);
        if (!this.anchorElement) {
            this.hideTooltip();
            return;
        }
        const anchorElement = this.anchorElement;
        this.cleanup = autoUpdate(anchorElement, this, () => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            let { x, y, placement, middlewareData } = yield computePosition(anchorElement, this, {
                placement: this.placement,
                strategy: 'fixed',
                middleware: [flip(), shift({ mainAxis: false })],
            });
            const setPositionStyles = () => {
                return css `
					:host {
						position: fixed;
						left: ${x.toString()}px;
						top: ${y.toString()}px;
					}
				`;
            };
            const setPositionAndPlacementStyles = (axis, placementVal) => {
                if (axis === 'y') {
                    return css `
						${setPositionStyles()}
						:host([placement='left'])::after,
						:host([placement='right'])::after {
							top: ${placementVal}%;
							transform: translateY(-${placementVal}%) rotate(45deg);
						}
					`;
                }
                return css `
					${setPositionStyles()}
					:host([placement='top'])::after,
					:host([placement='bottom'])::after {
						left: ${placementVal}%;
						transform: translateX(-${placementVal}%) rotate(45deg);
					`;
            };
            this.placement = placement;
            const anchorWidth = (_a = this.anchorElement) === null || _a === void 0 ? void 0 : _a.clientWidth;
            if (anchorWidth && anchorWidth < 20) {
                const halfWidth = this.anchorElement.clientWidth / 2;
                // 14 is the x position of the tooltip + the distance from the tooltip edge to the base of the caret
                const offset = halfWidth - 14;
                if (placement.includes('start')) {
                    x = x + offset;
                }
                else if (placement.includes('end')) {
                    x = x - offset;
                }
            }
            /*
                Checks if content is shifted up or down
            */
            const xShiftPixels = (_b = middlewareData.shift) === null || _b === void 0 ? void 0 : _b.x;
            const yShiftPixels = (_c = middlewareData.shift) === null || _c === void 0 ? void 0 : _c.y;
            if (yShiftPixels && (placement.includes('right') || placement.includes('left'))) {
                const yShiftPercent = parseInt(String((yShiftPixels / this.clientHeight) * 100), 10);
                // default position was 50% - center, so we calculate new position based on shift
                const totalTop = `${50 - yShiftPercent}`;
                this.positionStyles = setPositionAndPlacementStyles('y', totalTop);
            }
            else if (xShiftPixels &&
                (placement.includes('top') || placement.includes('bottom'))) {
                const xShiftPercent = parseInt(String((xShiftPixels / this.clientWidth) * 100), 10);
                // default position was 50% - center, so we calculate new position based on shift
                const totalLeft = `${50 - xShiftPercent}`;
                this.positionStyles = setPositionAndPlacementStyles('x', totalLeft);
            }
            else {
                this.positionStyles = setPositionStyles();
            }
        }));
    }
}
__decorate([
    observable
], Tooltip.prototype, "_visible", void 0);
__decorate([
    attr({ attribute: 'anchor' })
], Tooltip.prototype, "anchor", void 0);
__decorate([
    attr({ mode: 'boolean', attribute: 'trigger-on-click' })
], Tooltip.prototype, "triggerOnClick", void 0);
__decorate([
    observable
], Tooltip.prototype, "controlledVisibility", void 0);
__decorate([
    attr
], Tooltip.prototype, "placement", void 0);
__decorate([
    observable
], Tooltip.prototype, "positionStyles", void 0);
__decorate([
    attr({
        attribute: 'show',
        converter: nullableBooleanConverter,
        mode: 'fromView',
    })
], Tooltip.prototype, "show", void 0);

export { Tooltip };
