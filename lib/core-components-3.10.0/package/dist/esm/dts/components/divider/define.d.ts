import type { AugmentClassEvents } from '../../utils/types.js';
import { Divider } from './divider.js';
declare const SafDivider: () => typeof Divider;
export default SafDivider;
export type SafDividerInstance = AugmentClassEvents<Divider>;
