import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const backToTopStyles = ".smoothScroll{scroll-behavior:smooth}:host{bottom:40px;display:none;position:fixed;right:20px;z-index:var(--saf-z-index-fixed)}:host(.rtl){left:20px;right:initial}:host(.show){display:block}:host a{align-items:center;background:var(--saf-color-interactive-secondary-default);border:var(--saf-line-width-thin) solid var(--saf-color-interactive-border-secondary-default);border-radius:var(--saf-border-radius-circle);box-shadow:var(--saf-drop-shadow-level-3);color:var(--saf-color-interactive-on-secondary-default);display:flex;height:40px;justify-content:center;line-height:40px;text-decoration:none;width:40px}:host a:not([disabled]):hover::before{border:var(--saf-line-width-thick) solid var(--saf-color-interactive-border-secondary-hover);border-radius:inherit;content:\"\";height:calc(100% - 2px);position:absolute;width:calc(100% - 2px)}:host a:hover{background:var(--saf-color-interactive-secondary-hover);color:var(--saf-color-interactive-on-secondary-hover)}:host a:focus{box-shadow:var(--saf-drop-shadow-focus)}:host a:active{background:var(--saf-color-interactive-secondary-active);border-color:var(--saf-color-interactive-border-secondary-active)}:host a:active saf-icon{color:var(--saf-color-interactive-on-secondary-active)}:host .a11y-aria-description{display:none}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(backToTopStyles)}
`;

export { styles };
