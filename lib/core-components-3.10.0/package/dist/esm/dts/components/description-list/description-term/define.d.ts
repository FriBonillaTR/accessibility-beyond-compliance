import type { AugmentClassEvents } from '../../../utils/types.js';
import { DescriptionTerm } from './description-term.js';
declare const SafDescriptionTerm: () => typeof DescriptionTerm;
export default SafDescriptionTerm;
export type SafDescriptionTermInstance = AugmentClassEvents<DescriptionTerm>;
