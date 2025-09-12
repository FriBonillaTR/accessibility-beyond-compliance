import type { AugmentClassEvents } from '../../utils/types.js';
import { AnchoredRegion } from './anchored-region.js';
export declare const safAnchoredRegionConfig: {
    readonly events: {
        readonly onLoaded: "loaded";
        readonly onPositionChange: "positionchange";
    };
};
declare const SafAnchoredRegion: () => typeof AnchoredRegion;
export default SafAnchoredRegion;
export type SafAnchoredRegionInstance = AugmentClassEvents<AnchoredRegion, typeof safAnchoredRegionConfig>;
