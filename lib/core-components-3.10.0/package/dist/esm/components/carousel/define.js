import { getRegistry, getComponentName } from '@saffron/config';
import SafFlipper from '../flipper/define.js';
import SafTooltip from '../tooltip/define.js';
import { Carousel } from './carousel.js';
import { styles } from './carousel.styles.js';
import { carouselTemplate } from './carousel.template.js';

const SafCarousel = () => {
    SafFlipper();
    SafTooltip();
    return Carousel.define({
        name: getComponentName('saf-carousel'),
        template: carouselTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafCarousel as default };
