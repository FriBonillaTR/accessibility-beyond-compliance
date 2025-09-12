import type { AugmentClassEvents } from '../../utils/types.js';
import { Carousel } from './carousel.js';
declare const SafCarousel: () => typeof Carousel;
export default SafCarousel;
export type SafCarouselInstance = AugmentClassEvents<Carousel>;
