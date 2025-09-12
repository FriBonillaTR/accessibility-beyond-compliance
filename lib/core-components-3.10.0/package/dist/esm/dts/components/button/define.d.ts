import type { AugmentClassEvents } from '../../utils/types.js';
import { FormButton } from './button.js';
declare const SafButton: () => typeof FormButton;
export default SafButton;
export type SafButtonInstance = AugmentClassEvents<FormButton>;
