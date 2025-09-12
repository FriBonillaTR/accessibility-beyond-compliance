import { __decorate } from 'tslib';
import { FASTElement, Observable, attr, nullableNumberConverter, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import { SafA11y } from '../../services/a11y.js';
import { ProgressStatusEnum } from './progress.options.js';

/**
 * An Progress HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#progressbar | ARIA progressbar }.
 *
 * @slot indeterminate - The slot for a custom indeterminate indicator
 * @csspart progress - Represents the progress element
 * @csspart determinate - The determinate indicator
 * @csspart indeterminate - The indeterminate indicator
 *
 * @public
 */
class Progress extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Indicates progress in %
         * @internal
         */
        this.percentComplete = 0;
        /**
         * Applies status appearance colors matching status component
         * @public
         */
        this.statusColor = ProgressStatusEnum.LOADING;
        /**
         * The text that appears beside the % loading complete number - Useful for translations.
         * @public
         */
        this.completeLabel = 'complete';
        /**
         * Cause progress to be announced dynamically by assistive technologies.
         * @public
         * @a11y
         */
        this.announce = false;
        /**
         * Indicates that the progress is complete. Setting this to true manually triggers completion announcement for assistive technologies. (user must also set `completion-message` attribute).
         * @public
         * @a11y
         */
        this.complete = false;
        this.previousValue = null;
        this.valueAnnounced = false;
    }
    valueChanged() {
        this.updatePercentComplete();
    }
    minChanged() {
        if (this.$fastController.isConnected) {
            this.updatePercentComplete();
        }
    }
    maxChanged() {
        if (this.$fastController.isConnected) {
            this.updatePercentComplete();
        }
    }
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        this.updatePercentComplete();
        this.notifier = Observable.getNotifier(this);
        this.notifier.subscribe(this, 'value');
        this.notifier.subscribe(this, 'announce');
        if (this.announce) {
            this.setupIndeterminateAnnouncements();
        }
        // Store the initial value
        this.previousValue = this.value;
    }
    updatePercentComplete() {
        const min = typeof this.min === 'number' ? this.min : 0;
        const max = typeof this.max === 'number' ? this.max : 100;
        const value = typeof this.value === 'number' ? this.value : 0;
        const range = max - min;
        this.percentComplete = range === 0 ? 0 : Math.fround(((value - min) / range) * 100);
    }
    completeChanged(oldValue, newValue) {
        if (newValue && !oldValue) {
            this.handleCompletion();
        }
    }
    /**
     * Handles completion when either the complete property is set to true or
     * the progress value reaches 100% or the max value.
     * @internal
     */
    handleCompletion() {
        if (this.completionMessage) {
            SafA11y.announce(this.completionMessage, 'assertive');
            this.announce = false;
        }
    }
    setupIndeterminateAnnouncements() {
        this.clearIndeterminateAnnouncements();
        if (this.isIndeterminate()) {
            this.announcementTimeout = setTimeout(() => {
                const message = this.ariaLabel ? this.ariaLabel : this.label;
                SafA11y.announce(message);
                this.announcementInterval = setInterval(() => {
                    SafA11y.announce(message);
                }, Progress.INDETERMINATE_INTERVAL);
            }, Progress.INDETERMINATE_DELAY);
        }
    }
    clearIndeterminateAnnouncements() {
        if (this.announcementTimeout) {
            clearTimeout(this.announcementTimeout);
            this.announcementTimeout = null;
        }
        if (this.announcementInterval) {
            clearInterval(this.announcementInterval);
            this.announcementInterval = null;
        }
    }
    announceValue() {
        if (!this.valueAnnounced) {
            this.valueAnnounced = true;
            const message = `${Math.round(this.percentComplete)}% ${this.completeLabel}`;
            SafA11y.announce(message);
            setTimeout(() => {
                this.valueAnnounced = false;
            }, Progress.ANNOUNCEMENT_DEBOUNCE);
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.notifier.unsubscribe(this, 'value');
        this.notifier.unsubscribe(this, 'announce');
        this.clearIndeterminateAnnouncements();
    }
    isIndeterminate() {
        return typeof this.value !== 'number';
    }
    /**
     * @internal
     */
    handleChange(_, propertyName) {
        switch (propertyName) {
            case 'value':
                if (this.announce) {
                    this.setupIndeterminateAnnouncements();
                    if (this.value !== null) {
                        this.announceValue();
                    }
                }
                // Check for completion based on value changes
                if (this.value !== null && this.completionMessage) {
                    const max = typeof this.max === 'number' ? this.max : 100;
                    // If value reached max or 100%, trigger completion
                    if (this.value >= max &&
                        (this.previousValue === null || this.previousValue < max)) {
                        this.complete = true;
                    }
                    // Store the current value for next comparison
                    this.previousValue = this.value;
                }
                break;
            case 'announce':
                if (this.announce) {
                    this.setupIndeterminateAnnouncements();
                }
                else {
                    this.clearIndeterminateAnnouncements();
                }
                break;
        }
    }
}
Progress.INDETERMINATE_INTERVAL = 8000;
Progress.INDETERMINATE_DELAY = 2000;
Progress.ANNOUNCEMENT_DEBOUNCE = 4000;
__decorate([
    attr({ converter: nullableNumberConverter })
], Progress.prototype, "value", void 0);
__decorate([
    attr({ converter: nullableNumberConverter })
], Progress.prototype, "min", void 0);
__decorate([
    attr({ converter: nullableNumberConverter })
], Progress.prototype, "max", void 0);
__decorate([
    observable
], Progress.prototype, "percentComplete", void 0);
__decorate([
    attr({ attribute: 'status-color' })
], Progress.prototype, "statusColor", void 0);
__decorate([
    attr
], Progress.prototype, "message", void 0);
__decorate([
    attr
], Progress.prototype, "color", void 0);
__decorate([
    attr
], Progress.prototype, "indeterminate", void 0);
__decorate([
    attr({ attribute: 'complete-label' })
], Progress.prototype, "completeLabel", void 0);
__decorate([
    attr
], Progress.prototype, "headinglabel", void 0);
__decorate([
    attr({ attribute: 'aria-label' })
], Progress.prototype, "ariaLabel", void 0);
__decorate([
    attr
], Progress.prototype, "label", void 0);
__decorate([
    attr({ attribute: 'aria-valuenow' })
], Progress.prototype, "ariaValueNow", void 0);
__decorate([
    attr({ attribute: 'aria-valuemin' })
], Progress.prototype, "ariaValueMin", void 0);
__decorate([
    attr({ attribute: 'aria-valuemax' })
], Progress.prototype, "ariaValueMax", void 0);
__decorate([
    attr({ attribute: 'aria-labelledby' })
], Progress.prototype, "ariaLabelledBy", void 0);
__decorate([
    attr({ mode: 'boolean' })
], Progress.prototype, "paused", void 0);
__decorate([
    attr({ attribute: 'announce', mode: 'boolean' })
], Progress.prototype, "announce", void 0);
__decorate([
    attr({ attribute: 'completion-message' })
], Progress.prototype, "completionMessage", void 0);
__decorate([
    attr({ mode: 'boolean' })
], Progress.prototype, "complete", void 0);

export { Progress };
