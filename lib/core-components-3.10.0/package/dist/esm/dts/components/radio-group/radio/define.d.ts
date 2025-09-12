import type { AugmentClassEvents } from '../../../utils/types.js';
import { Radio } from './radio.js';
export declare const safRadioConfig: {
    readonly events: {
        readonly onClick: "click";
    };
};
declare const SafRadio: () => typeof Radio;
export default SafRadio;
export type SafRadioInstance = AugmentClassEvents<Radio, typeof safRadioConfig>;
