import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const carouselStyles = ":host{display:block}.scroll-view{box-sizing:border-box;display:flex;flex-direction:column;height:100%;margin:var(--saf-spacing-4) var(--saf-spacing-4) var(--saf-spacing-2) var(--saf-spacing-4);max-width:100%;overflow-x:auto}.controls{align-items:center;display:inline-flex}.slides-info-container{font:var(--saf-type-body-default-md-regular-standard);margin:var(--saf-spacing-0) var(--saf-spacing-2)}.content-container{display:flex}.content-container ::slotted(*){flex-grow:1;flex-shrink:0;height:100%;overflow-wrap:break-word;scroll-behavior:smooth;width:100%}.scroll{display:inline-flex}.scroll-area.js-controlled{margin:var(--saf-spacing-0);padding:var(--saf-spacing-0)}.scroll-area.js-controlled .scroll-view{overflow:hidden}.scroll-area.js-controlled .content-container{transition:all .5s ease-in}";
/**
 * Styles for Carousel
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(carouselStyles)}
`;

export { styles };
