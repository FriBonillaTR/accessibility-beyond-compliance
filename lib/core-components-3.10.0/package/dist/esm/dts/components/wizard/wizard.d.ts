import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { ResponsiveElement } from '../responsive-element/responsive-element.js';
import { SafStepperInstance } from '../stepper/define.js';
import { SafStepInstance } from '../stepper/step/define.js';
import { SafWizardStepContentInstance } from './wizard-step-content/define.js';
/**
 * A class for Wizard
 */
export declare class Wizard extends FASTElement {
    /**
     * Define the accessible name of the complementary region of the wizard.
     *
     * @public
     * @a11y
     */
    a11yAriaLabel: string;
    /**
     * Indicates the heading level used for each step title.
     *
     * @public
     */
    headingLevel: number;
    slottedStepperElements: (SafStepperInstance | null)[];
    slottedStepperElementsChanged(): void;
    currentOrientation: 'horizontal' | 'vertical';
    updateCurrentActiveStep(event: {
        detail: number;
    }): void;
    stepper: SafStepperInstance | null;
    stepperChanged(prev: SafStepperInstance | null | undefined, next: SafStepperInstance | null | undefined): void;
    currentActiveStep: SafStepInstance | undefined;
    currentActiveStepChanged(_prev: SafStepInstance, next: SafStepInstance): void;
    steps: SafWizardStepContentInstance[];
    stepsChanged(): void;
    headingLevelChanged(_prev: any, next: any): void;
    get currentActiveStepText(): string | null | undefined;
    get currentActiveStepDescription(): string | null | undefined;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
export interface Wizard extends ResponsiveElement {
}
