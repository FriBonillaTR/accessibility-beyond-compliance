import type { AugmentClassEvents } from '../../utils/types.js';
import { SrOnly } from './sr-only.js';
declare const SafSrOnly: () => typeof SrOnly;
export default SafSrOnly;
export type SafSrOnlyInstance = AugmentClassEvents<SrOnly>;
