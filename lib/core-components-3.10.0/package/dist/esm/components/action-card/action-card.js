import { __decorate } from 'tslib';
import { FASTElement, Updates, attr, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import { ComponentDensityEnum } from '../../utils/global-enums.js';

/**
 * A class for ActionCard
 */
class ActionCard extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * The density of the action card
         * @public
         */
        this.density = ComponentDensityEnum.inherit;
        /**
         * Internal observer to watch for changes in the size of controls
         * @internal
         */
        this.resizeObserver = null;
        /**
         * Internal mutation observer to watch for changes in controls slot
         * @internal
         */
        this.mutationObserver = null;
        /**
         * Internal flag to indicate if controls slot has elements
         * @internal
         */
        this.controlsHasElements = false;
        /**
         * Flag to avoid multiple updates to elements on control slot
         * @internal
         */
        this.updateQueued = false;
    }
    slottedActionElementsChanged() {
        Updates.enqueue(() => {
            const action = this.slottedActionElements[0];
            if (action && action.cardTitle && !this.ariaLabel) {
                this.ariaLabel = action.cardTitle;
            }
        });
    }
    connectedCallback() {
        super.connectedCallback();
        // initial queue for observation of controls
        this.queueControlsObservation();
        // Watch for changes and update the CSS custom property with the new height
        this.resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.contentRect.height > 0) {
                    // Standard: +20px padding, Compact: +10px padding
                    const paddingOffset = this.density === ComponentDensityEnum.compact ? 10 : 20;
                    const totalPadding = entry.contentRect.height + paddingOffset;
                    this.style.setProperty('--saf-action-card-dynamic-padding-block-end', `${totalPadding}px`);
                }
                else {
                    this.style.removeProperty('--saf-action-card-dynamic-padding-block-end');
                }
            }
        });
        // Initialize MutationObserver for dynamic content changes
        this.mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                var _a, _b;
                // Check if any mutations affect controls slot elements
                if (mutation.type === 'childList' || mutation.type === 'attributes') {
                    const target = mutation.target;
                    if (((_a = target.getAttribute) === null || _a === void 0 ? void 0 : _a.call(target, 'slot')) === 'controls' ||
                        ((_b = target.querySelector) === null || _b === void 0 ? void 0 : _b.call(target, '[slot="controls"]'))) {
                        this.controlsHasElements = true;
                    }
                    else {
                        this.controlsHasElements = false;
                    }
                }
            });
            if (this.controlsHasElements) {
                this.queueControlsObservation();
            }
        });
        this.mutationObserver.observe(this, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['slot'],
        });
    }
    disconnectedCallback() {
        var _a, _b;
        super.disconnectedCallback();
        (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.resizeObserver = null;
        (_b = this.mutationObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
        this.mutationObserver = null;
    }
    /**
     * Queues for observation of controls
     *
     * @internal
     */
    queueControlsObservation() {
        if (this.updateQueued)
            return;
        this.updateQueued = true;
        Updates.enqueue(() => {
            this.observeCurrentControls();
            this.updateQueued = false;
        });
    }
    /**
     * Observes current controls for changes in size
     * @internal
     */
    observeCurrentControls() {
        if (!this.resizeObserver)
            return;
        this.resizeObserver.disconnect();
        const controlsElement = this.querySelectorAll('[slot="controls"]');
        this.controlsHasElements = controlsElement.length > 0;
        controlsElement.forEach((element) => {
            this.resizeObserver.observe(element);
        });
    }
}
__decorate([
    attr
], ActionCard.prototype, "density", void 0);
__decorate([
    attr({ attribute: 'aria-label' })
], ActionCard.prototype, "ariaLabel", void 0);
__decorate([
    observable
], ActionCard.prototype, "slottedActionElements", void 0);
__decorate([
    observable
], ActionCard.prototype, "slottedControlsElements", void 0);
__decorate([
    observable
], ActionCard.prototype, "controlsHasElements", void 0);

export { ActionCard };
