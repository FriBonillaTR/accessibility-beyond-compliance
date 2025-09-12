import type { AugmentClassEvents } from '../../utils/types.js';
import { DescriptionList } from './description-list.js';
declare const SafDescriptionList: () => typeof DescriptionList;
export default SafDescriptionList;
export type SafDescriptionListInstance = AugmentClassEvents<DescriptionList>;
