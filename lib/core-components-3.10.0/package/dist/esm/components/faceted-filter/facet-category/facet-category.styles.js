import { css } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const facetCategoryStyles = ":host{display:block}saf-disclosure{--saf-summary-margin-bottom: var(--saf-spacing-1)}.counter{margin-left:auto}::slotted(saf-facet-item){margin-left:var(--saf-spacing-5)}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(facetCategoryStyles)}
`;

export { styles };
