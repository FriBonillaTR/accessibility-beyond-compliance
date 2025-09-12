import type { AugmentClassEvents } from '../../../utils/types.js';
import { Step } from './step.js';
declare const SafStep: () => typeof Step;
export default SafStep;
export type SafStepInstance = AugmentClassEvents<Step>;
