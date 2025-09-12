import type { AugmentClassEvents } from '../../../utils/types.js';
import { DescriptionDetails } from './description-details.js';
declare const SafDescriptionDetails: () => typeof DescriptionDetails;
export default SafDescriptionDetails;
export type SafDescriptionDetailsInstance = AugmentClassEvents<DescriptionDetails>;
