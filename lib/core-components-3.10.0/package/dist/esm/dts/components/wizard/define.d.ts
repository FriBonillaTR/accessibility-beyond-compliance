import type { AugmentClassEvents } from '../../utils/types.js';
import { Wizard } from './wizard.js';
declare const SafWizard: () => typeof Wizard;
export default SafWizard;
export type SafWizardInstance = AugmentClassEvents<Wizard>;
