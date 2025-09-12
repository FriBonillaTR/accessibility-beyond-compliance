import type { AugmentClassEvents } from '../../utils/types.js';
import { Slider } from './slider.js';
export declare const safSliderConfig: {
    readonly events: {
        readonly onChange: "change";
    };
};
declare const SafSlider: () => typeof Slider;
export default SafSlider;
export type SafSliderInstance = AugmentClassEvents<Slider, typeof safSliderConfig>;
