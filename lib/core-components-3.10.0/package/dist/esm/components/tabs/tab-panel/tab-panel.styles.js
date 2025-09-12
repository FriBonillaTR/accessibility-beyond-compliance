import { css } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const tabPanelStyles = ":host{display:block}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(tabPanelStyles)}
`;

export { styles };
