import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const anchoredRegionStyles = ":host{contain:layout;display:block;z-index:var(--saf-z-index-dropdown)}:host ::slotted(saf-dialog){overflow:unset;padding:0;width:auto}:host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=\"\"]){--saf-density: 2}";
/**
 * Styles for Badge
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(anchoredRegionStyles)}
`;

export { styles };
