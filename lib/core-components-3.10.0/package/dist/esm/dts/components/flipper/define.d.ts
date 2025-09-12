import type { AugmentClassEvents } from '../../utils/types.js';
import { Flipper } from './flipper.js';
declare const SafFlipper: () => typeof Flipper;
export default SafFlipper;
export type SafFlipperInstance = AugmentClassEvents<Flipper>;
