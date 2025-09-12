import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const skipLinkStyles = ":host a{border:solid var(--saf-line-width-thick) var(--saf-skip-link-color-border-default);color:var(--saf-skip-link-color-on-default);font:var(--saf-type-body-link-md-strong-standard);padding:var(--saf-spacing-1) var(--saf-spacing-2);text-decoration:none;top:var(--saf-spacing-5);white-space:nowrap;z-index:var(--saf-skip-link-z-index, 1000)}:host(:not([nested])) a:not(:focus){left:-9999px}:host(:is([nested])) a:focus{box-shadow:none;line-height:var(--saf-line-height-lg);padding:var(--saf-spacing-1) var(--saf-spacing-2)}:host a:focus,:host(:not([nested])) a:focus{background-color:var(--saf-skip-link-color-background-focus);border:solid var(--saf-line-width-thick) var(--saf-skip-link-color-border-focus);border-radius:var(--saf-border-radius-xs);box-shadow:var(--saf-drop-shadow-a11y-on-dark),var(--saf-drop-shadow-level-3);color:var(--saf-skip-link-color-on-focus);left:10px;line-height:var(--saf-line-height-lg);outline:none;padding:var(--saf-spacing-1) var(--saf-spacing-2);text-decoration:none}:host a:hover,:host(:not([nested])) a:hover{text-decoration:var(--saf-text-decoration-underline)}:host a:active,:host(:not([nested])) a:active{border:solid var(--saf-line-width-thick) var(--saf-skip-link-color-on-active);color:var(--saf-skip-link-color-on-active);text-decoration:var(--saf-text-decoration-underline)}:host(:not([nested])[positioning=fixed]) a{position:fixed}:host(:not([nested])[positioning=absolute]) a{position:absolute}@media(width <= 767px){:host a{display:inline-block;max-width:280px;white-space:normal}}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(skipLinkStyles)}
`;

export { styles };
