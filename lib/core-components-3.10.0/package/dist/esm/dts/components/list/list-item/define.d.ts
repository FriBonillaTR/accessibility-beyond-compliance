import type { AugmentClassEvents } from '../../../utils/types.js';
import { ListItem } from './list-item.js';
declare const SafListItem: () => typeof ListItem;
export default SafListItem;
export type SafListItemInstance = AugmentClassEvents<ListItem>;
