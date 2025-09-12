import type { AugmentClassEvents } from '../../../utils/types.js';
import { ProductHeaderItem } from './product-header-item.js';
declare const SafProductHeaderItem: () => typeof ProductHeaderItem;
export default SafProductHeaderItem;
export type SafProductHeaderItemInstance = AugmentClassEvents<ProductHeaderItem>;
