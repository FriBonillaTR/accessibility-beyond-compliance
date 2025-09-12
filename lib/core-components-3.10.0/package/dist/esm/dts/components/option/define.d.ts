import type { AugmentClassEvents } from '../../utils/types.js';
import { Option } from './option.js';
declare const SafOption: () => typeof Option;
export default SafOption;
export type SafOptionInstance = AugmentClassEvents<Option>;
