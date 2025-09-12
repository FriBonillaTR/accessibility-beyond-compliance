import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const workspaceStyles = ":host{--saf-drawer-display: contents;--saf-window-panel-position: relative;display:flex;flex-direction:column;height:100%;justify-content:stretch;overflow:hidden}::slotted(saf-window-panel:last-child){position:relative}@media(width <= 767px){:host{min-width:640px;overflow-x:auto}}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(workspaceStyles)}
`;

export { styles };
