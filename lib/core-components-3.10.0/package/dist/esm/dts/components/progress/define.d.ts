import type { AugmentClassEvents } from '../../utils/types.js';
import { Progress } from './progress.js';
declare const SafProgress: () => typeof Progress;
export default SafProgress;
export type SafProgressInstance = AugmentClassEvents<Progress>;
