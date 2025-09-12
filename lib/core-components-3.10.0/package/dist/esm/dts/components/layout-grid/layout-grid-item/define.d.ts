import { AugmentClassEvents } from '../../../utils/types.js';
import { LayoutGridItem } from './layout-grid-item.js';
declare const SafLayoutGridItem: () => typeof LayoutGridItem;
export default SafLayoutGridItem;
export type SafLayoutGridItemInstance = AugmentClassEvents<LayoutGridItem>;
