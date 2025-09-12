import type { AugmentClassEvents } from '../../utils/types.js';
import { ProductHeader } from './product-header.js';
declare const SafProductHeader: () => typeof ProductHeader;
export default SafProductHeader;
export type SafProductHeaderInstance = AugmentClassEvents<ProductHeader>;
