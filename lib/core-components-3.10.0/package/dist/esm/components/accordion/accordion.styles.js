import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const accordionStyles = ":host{box-sizing:border-box;display:block}:host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=\"\"]){--saf-density: 2}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(accordionStyles)}
`;

export { styles };
