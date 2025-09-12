import { AugmentClassEvents } from '../../../utils/types.js';
import { WizardStepContent } from './wizard-step-content.js';
declare const WizardStepContentDefine: () => typeof WizardStepContent;
export default WizardStepContentDefine;
export type SafWizardStepContentInstance = AugmentClassEvents<WizardStepContent>;
