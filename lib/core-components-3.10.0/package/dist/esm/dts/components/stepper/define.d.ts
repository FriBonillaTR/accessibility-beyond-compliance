import type { AugmentClassEvents } from '../../utils/types.js';
import { Stepper } from './stepper.js';
export declare const safStepperConfig: {
    readonly events: {
        readonly updateStepper: "update-stepper";
        readonly onStepChange: "step-change";
    };
};
export type SafStepperEventDetails = {
    'step-change': {
        detail: number;
    };
};
declare const SafStepper: () => typeof Stepper;
export default SafStepper;
export type SafStepperInstance = AugmentClassEvents<Stepper, typeof safStepperConfig, SafStepperEventDetails>;
