import { getRegistry, getComponentName } from '@saffron/config';
import { Slider } from './slider.js';
import { styles } from './slider.styles.js';
import { sliderTemplate } from './slider.template.js';

const safSliderConfig = {
    events: {
        onChange: 'change',
    },
};
const SafSlider = () => {
    return Slider.define({
        name: getComponentName('saf-slider'),
        template: sliderTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafSlider as default, safSliderConfig };
