import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const flipperStyles = ":host{display:inline-block}";
/**
 * Styles for Flipper
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(flipperStyles)}
`;

export { styles };
