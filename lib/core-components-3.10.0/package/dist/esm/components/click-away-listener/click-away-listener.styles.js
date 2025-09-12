import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const clickAwayListenerStyles = ":host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=\"\"]){--saf-density: 2}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(clickAwayListenerStyles)}
`;

export { styles };
