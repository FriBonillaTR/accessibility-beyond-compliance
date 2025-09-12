import type { AugmentClassEvents } from '../../utils/types.js';
import { Tooltip } from './tooltip.js';
export declare const safTooltipConfig: {
    readonly events: {
        readonly onDismiss: "dismiss";
    };
};
declare const SafTooltip: () => typeof Tooltip;
export default SafTooltip;
export type SafTooltipInstance = AugmentClassEvents<Tooltip, typeof safTooltipConfig>;
