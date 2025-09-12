import type { AugmentClassEvents } from '../../utils/types.js';
import { Logo } from './logo.js';
declare const SafLogo: () => typeof Logo;
export default SafLogo;
export type SafLogoInstance = AugmentClassEvents<Logo>;
