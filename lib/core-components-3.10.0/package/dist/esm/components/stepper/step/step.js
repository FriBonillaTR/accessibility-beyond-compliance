import { __decorate } from 'tslib';
import { FASTElement, attr } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { StepStatusEnum } from './step.options.js';

class Step extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * The status of the step.
         *
         * @public
         */
        this.status = StepStatusEnum.active;
        // Properties to store step number and total number of steps
        /**
         * The step number.
         *
         * @public
         */
        this.stepNumber = 0;
        /**
         * The total number of steps.
         *
         * @public
         */
        this.totalSteps = 0;
        this.stepHeaderSlot = null;
        this.defaultSlottedContent = null;
    }
    statusChanged(prev, next) {
        if (this.$fastController.isConnected) {
            prev && this.classList.remove(prev);
            next && this.classList.add(next);
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('item');
        this.classList.add(this.status);
        setTimeout(() => this.addObserver());
    }
    addObserver() {
        var _a;
        if (((_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.getAttribute('observe-resize')) === 'false') {
            return;
        }
        this.orientationObserver = new MutationObserver((mutationsList) => {
            var _a;
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'orientation') {
                    const newValue = (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.getAttribute('orientation');
                    this.changeClasses(newValue);
                }
            }
        });
        this.orientationObserver.observe(this.parentElement, { attributes: true });
    }
    changeClasses(o) {
        this.classList.remove('horizontal', 'vertical', 'last');
        this.classList.add(o);
        if (this.stepNumber === this.totalSteps) {
            this.classList.add('last');
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.orientationObserver)
            this.orientationObserver.disconnect();
    }
    get stepHeader() {
        return `Step ${this.stepNumber} of ${this.totalSteps}${this.stepTitle ? `: ${this.stepTitle}` : ''}`;
    }
}
__decorate([
    attr({ attribute: 'status' })
], Step.prototype, "status", void 0);
__decorate([
    attr({ attribute: 'status-label' })
], Step.prototype, "statusLabel", void 0);
__decorate([
    attr({ attribute: 'step-title' })
], Step.prototype, "stepTitle", void 0);
__decorate([
    attr({ attribute: 'step-number' })
], Step.prototype, "stepNumber", void 0);
__decorate([
    attr({ attribute: 'total-steps' })
], Step.prototype, "totalSteps", void 0);

export { Step };
