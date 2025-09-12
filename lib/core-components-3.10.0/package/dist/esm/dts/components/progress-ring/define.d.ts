import type { AugmentClassEvents } from '../../utils/types.js';
import { ProgressRing } from './progress-ring.js';
declare const SafProgressRing: () => typeof ProgressRing;
export default SafProgressRing;
export type SafProgressRingInstance = AugmentClassEvents<ProgressRing>;
