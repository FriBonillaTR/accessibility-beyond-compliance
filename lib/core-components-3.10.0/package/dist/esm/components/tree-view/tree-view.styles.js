import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const treeViewStyles = ":host{align-items:stretch;display:flex;flex-direction:column;font-size:4px;min-width:fit-content}:host([hidden]){display:none}:host:focus-visible{outline:none}";
/**
 * Styles for tree view
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(treeViewStyles)}
`;

export { styles };
