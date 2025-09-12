import type { AugmentClassEvents } from '../../utils/types.js';
import { Chip } from './chip.js';
export declare const safChipConfig: {
    readonly events: {
        readonly onRemove: "remove";
    };
};
declare const SafChip: () => typeof Chip;
export default SafChip;
export type SafChipInstance = AugmentClassEvents<Chip, typeof safChipConfig>;
