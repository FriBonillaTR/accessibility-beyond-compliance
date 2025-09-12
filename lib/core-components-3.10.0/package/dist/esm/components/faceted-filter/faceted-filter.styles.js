import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const facetedFilterStyles = ":host{display:block}.filter-title{font:var(--saf-type-heading-default-xl-strong-standard);margin-bottom:var(--saf-spacing-1)}.filter-subtitle{font:var(--saf-type-heading-default-md-strong-standard);padding-bottom:var(--saf-spacing-2);padding-top:var(--saf-spacing-2)}.filter-title,.filter-subtitle{color:var(--saf-color-text-strong)}.instructional-text{font:var(--saf-type-body-default-md-regular-standard)}saf-divider{margin-bottom:var(--saf-spacing-4);margin-top:var(--saf-spacing-4)}.filter-by{align-items:center;display:flex;justify-content:space-between;margin-top:var(--saf-spacing-2)}@media(width <= 320px){.filter-by{display:block}}";
/**
 * Styles for Badge
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(facetedFilterStyles)}
`;

export { styles };
