import { getRegistry, getComponentName } from '@saffron/config';
import { SliderLabel } from './slider-label.js';
import { styles } from './slider-label.styles.js';
import { sliderLabelTemplate } from './slider-label.template.js';

const SafSliderLabel = () => SliderLabel.define({
    name: getComponentName('saf-slider-label'),
    template: sliderLabelTemplate(),
    styles: styles(),
    registry: getRegistry(),
});

export { SafSliderLabel as default };
