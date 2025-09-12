import type { AugmentClassEvents } from '../../utils/types.js';
import { Text } from './text.js';
declare const SafText: () => typeof Text;
export default SafText;
export type SafTextInstance = AugmentClassEvents<Text>;
