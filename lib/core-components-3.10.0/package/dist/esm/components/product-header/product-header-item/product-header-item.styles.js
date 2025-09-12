import { css } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const productHeaderItemStyles = ":host{display:inline-block}::slotted(*){box-sizing:border-box}::slotted(saf-badge){margin-right:8px;white-space:nowrap}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(productHeaderItemStyles)}
`;

export { styles };
