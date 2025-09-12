import { __decorate } from 'tslib';
import { FASTElement, attr, nullableNumberConverter, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import { ResponsiveElement } from '../responsive-element/responsive-element.js';
import { Stepper } from '../stepper/stepper.js';
import { applyMixins } from '../../utils/apply-mixins.js';

/**
 * A class for Wizard
 */
class Wizard extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Define the accessible name of the complementary region of the wizard.
         *
         * @public
         * @a11y
         */
        this.a11yAriaLabel = 'Wizard Stepper';
        /**
         * Indicates the heading level used for each step title.
         *
         * @public
         */
        this.headingLevel = 1;
        this.slottedStepperElements = [];
        this.currentOrientation = 'horizontal';
        this.stepper = null;
        this.currentActiveStep = undefined;
        this.steps = [];
    }
    slottedStepperElementsChanged() {
        var _a;
        const slottedStepper = (_a = this.slottedStepperElements) === null || _a === void 0 ? void 0 : _a[0];
        this.stepper = slottedStepper instanceof Stepper ? slottedStepper : null;
        if (this.$fastController.isConnected && this.stepper) {
            this.currentOrientation = this.stepper.orientation;
        }
    }
    updateCurrentActiveStep(event) {
        if (this.stepper) {
            const nextIndex = (event ? event.detail : this.stepper.activeStep) - 1;
            this.currentActiveStep = this.stepper.steps[nextIndex];
        }
    }
    stepperChanged(prev, next) {
        setTimeout(this.updateCurrentActiveStep.bind(this));
        // remove old stepper event listener
        prev === null || prev === void 0 ? void 0 : prev.removeEventListener('step-change', this.updateCurrentActiveStep.bind(this));
        next === null || next === void 0 ? void 0 : next.addEventListener('step-change', this.updateCurrentActiveStep.bind(this));
    }
    currentActiveStepChanged(_prev, next) {
        if (!next)
            return;
        this.steps.forEach((step) => {
            step.hidden = Number(step.step) !== next.stepNumber;
        });
        setTimeout(() => {
            var _a, _b;
            (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`h${this.headingLevel}`)) === null || _b === void 0 ? void 0 : _b.focus();
        }, 150);
    }
    stepsChanged() {
        this.steps.forEach((step) => {
            step.classList.add('hidden');
        });
    }
    headingLevelChanged(_prev, next) {
        if (next < 1 || next > 6) {
            this.headingLevel = 1;
        }
    }
    get currentActiveStepText() {
        var _a, _b;
        if (!this.currentActiveStep)
            return undefined;
        if ((_a = this.currentActiveStep.stepHeaderSlot) === null || _a === void 0 ? void 0 : _a.length)
            return (_b = this.currentActiveStep.stepHeaderSlot[0]) === null || _b === void 0 ? void 0 : _b.textContent;
        return this.currentActiveStep.stepHeader;
    }
    get currentActiveStepDescription() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.currentActiveStep) === null || _a === void 0 ? void 0 : _a.defaultSlottedContent) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.textContent;
    }
    connectedCallback() {
        super.connectedCallback();
        this.initializeResponsiveness({ breakpoint: 768 });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.disconnectResizeObserver();
    }
}
__decorate([
    attr({ attribute: 'a11y-aria-label' })
], Wizard.prototype, "a11yAriaLabel", void 0);
__decorate([
    attr({
        attribute: 'heading-level',
        mode: 'fromView',
        converter: nullableNumberConverter,
    })
], Wizard.prototype, "headingLevel", void 0);
__decorate([
    observable
], Wizard.prototype, "slottedStepperElements", void 0);
__decorate([
    observable
], Wizard.prototype, "currentOrientation", void 0);
__decorate([
    observable
], Wizard.prototype, "stepper", void 0);
__decorate([
    observable
], Wizard.prototype, "currentActiveStep", void 0);
__decorate([
    observable
], Wizard.prototype, "steps", void 0);
__decorate([
    observable
], Wizard.prototype, "currentActiveStepText", null);
__decorate([
    observable
], Wizard.prototype, "currentActiveStepDescription", null);
applyMixins(Wizard, ResponsiveElement);

export { Wizard };
