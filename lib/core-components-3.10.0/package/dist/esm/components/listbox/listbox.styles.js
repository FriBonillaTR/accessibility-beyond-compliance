import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const listboxStyles = ":host{--saf-listbox-heightMultiplier: 10;--saf-listbox-designUnit: 4;--saf-listbox-strokeWidth: 1;background:var(--saf-color-background-default);border:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);border-radius:var(--saf-border-radius-sm);box-shadow:var(--saf-drop-shadow-level-2);box-sizing:border-box;display:flex;flex-direction:column;padding:var(--saf-spacing-1);width:100%;z-index:var(--saf-z-index-dropdown)}:host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=\"\"]){--saf-density: 2}:host([hidden]){display:none !important}:host([disabled]) ::slotted(*){background:var(--saf-color-interactive-background-default);border:var(--saf-line-width-thin) solid rgba(0,0,0,0);color:var(--saf-color-interactive-disabled-strong);cursor:not-allowed;padding:0 var(--saf-spacing-3) 0 11px;pointer-events:none}:host([size]){max-height:calc((var(--saf-listbox-size)*var(--saf-listbox-heightMultiplier)*var(--saf-listbox-designUnit) + (var(--saf-listbox-designUnit) + var(--saf-listbox-strokeWidth))*2)*1px);overflow-y:auto;overscroll-behavior:contain}:host(:not([disabled]):focus-visible){box-shadow:var(--saf-drop-shadow-level-2),var(--saf-drop-shadow-focus);outline:none}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(listboxStyles)}
`;

export { styles };
