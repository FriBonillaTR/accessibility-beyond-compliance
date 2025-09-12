import type { AugmentClassEvents } from '../../utils/types.js';
import { BackToTop } from './back-to-top.js';
declare const SafBackToTop: () => typeof BackToTop;
export default SafBackToTop;
export type SafBackToTopInstance = AugmentClassEvents<BackToTop>;
