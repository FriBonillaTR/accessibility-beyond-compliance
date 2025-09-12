import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const descriptionListStyles = ":host{display:block}.vertical{display:flex;flex-direction:column;gap:2em}.horizontal{display:inline-grid;gap:1em;grid-template-columns:repeat(3, auto)}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(descriptionListStyles)}
`;

export { styles };
