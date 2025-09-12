import { css } from '../../@microsoft/fast-element/dist/esm/index.js';

const skipLinkGroupStyles = ":host{left:-9999px;position:fixed;top:20px;z-index:var(--saf-skip-link-z-index, 1000)}:host(:focus-within){background-color:var(--saf-skip-link-color-background-default);border:dashed var(--saf-line-width-thick) var(--saf-color-border-stronger);border-radius:var(--saf-border-radius-sm);box-shadow:var(--saf-drop-shadow-level-3),0 0 0 2px var(--saf-skip-link-color-background-default);display:flex;flex-direction:row;gap:var(--saf-spacing-4);left:20px;padding:var(--saf-spacing-2) var(--saf-spacing-3)}@media(width <= 767px){:host(:focus-within){flex-direction:column;max-height:280px;overflow-y:auto}}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${skipLinkGroupStyles}
`;

export { styles };
