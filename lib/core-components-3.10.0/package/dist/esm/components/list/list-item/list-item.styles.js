import { css } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const listItemStyles = ":host{color:var(--saf-color-text-strong);display:list-item;padding:var(--saf-spacing-0)}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(listItemStyles)}
`;

export { styles };
