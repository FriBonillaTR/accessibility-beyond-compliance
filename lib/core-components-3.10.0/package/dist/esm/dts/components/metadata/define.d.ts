import type { AugmentClassEvents } from '../../utils/types.js';
import { Metadata } from './metadata.js';
declare const SafMetadata: () => typeof Metadata;
export default SafMetadata;
export type SafMetadataInstance = AugmentClassEvents<Metadata>;
