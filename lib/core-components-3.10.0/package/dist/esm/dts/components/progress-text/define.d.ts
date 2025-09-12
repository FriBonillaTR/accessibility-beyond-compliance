import type { AugmentClassEvents } from '../../utils/types.js';
import { ProgressText } from './progress-text.js';
declare const SafProgressText: () => typeof ProgressText;
export default SafProgressText;
export type SafProgressTextInstance = AugmentClassEvents<ProgressText>;
