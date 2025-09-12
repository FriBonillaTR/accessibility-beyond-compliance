import { AugmentClassEvents } from '../../utils/types.js';
import { Skeleton } from './skeleton.js';
declare const SafSkeleton: () => typeof Skeleton;
export default SafSkeleton;
export type SafSkeletonInstance = AugmentClassEvents<Skeleton>;
