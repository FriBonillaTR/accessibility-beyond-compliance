import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const disclosureStyles = ":host{display:block;--saf-summary-margin-bottom: var(--saf-spacing-0)}summary{background:var(--saf-color-interactive-states-background-default);border:var(--saf-line-width-thin) solid var(--saf-color-interactive-states-border-default);border-radius:var(--saf-border-radius-xs);box-sizing:border-box;color:var(--saf-color-interactive-states-on-default);display:flex;font:var(--saf-type-body-default-md-strong-standard);gap:var(--saf-spacing-2);margin-bottom:var(--saf-summary-margin-bottom);padding:var(--saf-spacing-2) var(--saf-spacing-3);position:relative;text-align:left}summary::before{content:\"\";inset:0;position:absolute}summary::marker,summary::-webkit-details-marker{display:none}summary:hover{background:var(--saf-color-interactive-states-background-hover);color:var(--saf-color-interactive-states-on-hover)}summary:active{background:var(--saf-color-interactive-states-background-active);color:var(--saf-color-interactive-states-on-active)}summary:not([disabled]):hover::before{border:var(--saf-line-width-thick) solid var(--saf-color-interactive-states-border-hover);border-radius:var(--saf-border-radius-xs);height:calc(100% - 2px);left:-1px;top:-1px;width:calc(100% - 2px)}summary:not([disabled]):active::before{border:var(--saf-line-width-thick) solid var(--saf-color-interactive-states-border-active);height:calc(100% - 2px);left:-1px;top:-1px;width:calc(100% - 2px)}summary:focus{box-shadow:var(--saf-drop-shadow-focus)}slot[name=summary]{align-items:center;display:flex}summary .icon{display:flex;justify-content:center;width:16px}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(disclosureStyles)}
`;

export { styles };
