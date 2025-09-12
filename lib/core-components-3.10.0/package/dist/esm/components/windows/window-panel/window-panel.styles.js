import { css } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const windowPanelStyles = ":host{box-sizing:border-box;display:block;height:100%;max-height:100vh;overflow:hidden auto;padding:var(--saf-spacing-6) var(--saf-spacing-8) var(--saf-spacing-8) var(--saf-spacing-8);position:var(--saf-window-panel-position, static)}:host([is-full-width]){padding:0}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(windowPanelStyles)}
`;

export { styles };
