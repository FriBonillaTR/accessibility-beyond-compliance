import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const buttonGroupStyles = ":host{display:inline-flex}:host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=\"\"]){--saf-density: 2}:host([orientation=vertical]){flex-direction:column}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(buttonGroupStyles)}
`;

export { styles };
