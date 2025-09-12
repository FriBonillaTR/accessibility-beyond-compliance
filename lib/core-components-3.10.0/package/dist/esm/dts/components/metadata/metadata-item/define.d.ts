import type { AugmentClassEvents } from '../../../utils/types.js';
import { MetadataItem } from './metadata-item.js';
declare const SafMetadataItem: () => typeof MetadataItem;
export default SafMetadataItem;
export type SafMetadataItemInstance = AugmentClassEvents<MetadataItem>;
