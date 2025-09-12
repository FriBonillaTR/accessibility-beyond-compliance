import type { AugmentClassEvents } from '../../utils/types.js';
import { Footer } from './footer.js';
declare const SafFooter: () => typeof Footer;
export default SafFooter;
export type SafFooterInstance = AugmentClassEvents<Footer>;
