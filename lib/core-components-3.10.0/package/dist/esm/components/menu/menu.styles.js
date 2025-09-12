import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const menuStyles = ":host{background-color:var(--saf-color-background-default);border:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);border-radius:var(--saf-border-radius-sm);box-shadow:var(--saf-drop-shadow-level-2);display:inline-block;overflow-y:auto;overscroll-behavior:contain;padding:4px;max-height:calc(280px*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + 224px*var(--saf-density)*(2 - var(--saf-density)))}:host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=\"\"]){--saf-density: 2}:host([slot=submenu]){margin-left:3px;margin-top:-5px;min-width:max-content;position:absolute}:host ::slotted(saf-divider){margin:var(--saf-spacing-1) 0}:host([hidden]){display:none}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(menuStyles)}
`;

export { styles };
