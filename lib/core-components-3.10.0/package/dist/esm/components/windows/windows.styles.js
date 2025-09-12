import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const windowsStyles = ":host{display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr;height:100%;overflow:hidden auto}.windows{background:var(--saf-color-interactive-background-strong);display:inline-flex}.tablist{align-items:center;align-self:end;box-sizing:border-box;display:grid;grid-template-columns:repeat(auto-fill, minmax(160px, 1fr));grid-template-rows:auto;padding:0;position:relative;width:100%}.add-window-button{margin-left:var(--saf-spacing-1)}:host saf-button{width:42px}::slotted(saf-window:first-child){border-left:0}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(windowsStyles)}
`;

export { styles };
