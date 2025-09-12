import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { StepperOrientation } from './stepper.options.js';
import { SafStepInstance } from './step/define.js';
import { ResponsiveElement } from '../responsive-element/responsive-element.js';
/**
 * A class for Stepper
 */
export declare class Stepper extends FASTElement {
    /**
     * The visual orientation of the stepper.
     *
     * @public
     */
    orientation: StepperOrientation;
    /**
     * Defines a string value that labels the current element.
     *
     * @public
     * @a11y
     */
    ariaLabel: string;
    /**
     * Whether the stepper should observe resizing of the parent element (be responsive).
     *
     * @public
     */
    observeResize: boolean;
    observeResizeChanged(prev: boolean, next: boolean): void;
    /**
     * Represents the currently active step in the stepper component.
     *
     * @public
     */
    activeStep: number;
    activeStepChanged(): void;
    steps: SafStepInstance[];
    findSteps(): void;
    private updateStepNumbers;
    addOrientationClass(step: Element): void;
    updateStepper(step: number): void;
    private updateStepStatus;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
export interface Stepper extends ResponsiveElement {
}
