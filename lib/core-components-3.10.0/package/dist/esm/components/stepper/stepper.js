import { __decorate } from 'tslib';
import { FASTElement, attr } from '../../@microsoft/fast-element/dist/esm/index.js';
import { StepperOrientationEnum } from './stepper.options.js';
import { ResponsiveElement } from '../responsive-element/responsive-element.js';
import { applyMixins } from '../../utils/apply-mixins.js';
import { getComponentName } from '@saffron/config';

/**
 * A class for Stepper
 */
class Stepper extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * The visual orientation of the stepper.
         *
         * @public
         */
        this.orientation = StepperOrientationEnum.horizontal;
        /**
         * Whether the stepper should observe resizing of the parent element (be responsive).
         *
         * @public
         */
        this.observeResize = true;
        /**
         * Represents the currently active step in the stepper component.
         *
         * @public
         */
        this.activeStep = 0;
        // Array to store the steps
        this.steps = [];
    }
    observeResizeChanged(prev, next) {
        if (prev) {
            this.disconnectResizeObserver();
        }
        if (next) {
            this.initializeResponsiveness({
                threshold: 20,
                breakpoint: 768,
            });
        }
    }
    activeStepChanged() {
        this.$emit('step-change', this.activeStep);
    }
    findSteps() {
        const steps = this.querySelectorAll(getComponentName('saf-step'));
        this.steps = Array.from(steps);
        this.steps.forEach((step, index) => {
            this.addOrientationClass(step);
            this.updateStepNumbers(step, index);
            if (index === this.steps.length - 1) {
                step.classList.add('last');
            }
        });
    }
    // Update the step numbers based on the current index
    updateStepNumbers(step, index) {
        step.stepNumber = index + 1;
        step.totalSteps = this.steps.length;
    }
    addOrientationClass(step) {
        step.classList.remove('vertical', 'horizontal');
        step.classList.add(this.orientation === 'vertical' ? 'vertical' : 'horizontal');
    }
    updateStepper(step) {
        this.activeStep = step;
        this.updateStepStatus();
    }
    updateStepStatus() {
        this.steps.forEach((step, index) => {
            if (index < this.activeStep) {
                step.status = 'completed';
            }
            else if (index === this.activeStep) {
                step.status = 'active';
            }
            else {
                step.status = 'inactive';
            }
        });
    }
    connectedCallback() {
        super.connectedCallback();
        setTimeout(() => this.findSteps());
        this.addEventListener('mode-change', (e) => {
            this.orientation = e.detail === 'mobile' ? 'vertical' : 'horizontal';
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.disconnectResizeObserver();
    }
}
__decorate([
    attr
], Stepper.prototype, "orientation", void 0);
__decorate([
    attr({ attribute: 'aria-label' })
], Stepper.prototype, "ariaLabel", void 0);
__decorate([
    attr({ attribute: 'observe-resize', mode: 'boolean' })
], Stepper.prototype, "observeResize", void 0);
__decorate([
    attr({ attribute: 'active-step' })
], Stepper.prototype, "activeStep", void 0);
applyMixins(Stepper, ResponsiveElement);

export { Stepper };
