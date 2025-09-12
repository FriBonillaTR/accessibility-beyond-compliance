import { AugmentClassEvents } from '../../utils/types.js';
import { LayoutGrid } from './layout-grid.js';
declare const LayoutGridDefine: () => typeof LayoutGrid;
export default LayoutGridDefine;
export type SafLayoutGridInstance = AugmentClassEvents<LayoutGrid>;
