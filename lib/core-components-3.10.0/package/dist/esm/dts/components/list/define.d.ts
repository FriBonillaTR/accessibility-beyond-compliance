import type { AugmentClassEvents } from '../../utils/types.js';
import { List } from './list.js';
declare const SafList: () => typeof List;
export default SafList;
export type SafListInstance = AugmentClassEvents<List>;
