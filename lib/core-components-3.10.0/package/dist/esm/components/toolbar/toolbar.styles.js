import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const toolbarStyles = ":host{color:var(--saf-color-text-heavy);display:block}:host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=\"\"]){--saf-density: 2}.separator{margin-block:var(--saf-toolbar-separator-margin-block, var(--saf-spacing-4))}.top-row,.bottom-row{justify-content:space-between}.top-row,.bottom-row,::slotted([slot=top-row-start]),::slotted([slot=top-row-end]),::slotted([slot=bottom-row-start]),::slotted([slot=bottom-row-end]){align-items:center;display:flex;flex-wrap:wrap;gap:var(--saf-spacing-3)}@container style(--saf-density: 0){.separator{--saf-toolbar-separator-margin-block: var(--saf-spacing-4)}}@container style(--saf-density: 1){.separator{--saf-toolbar-separator-margin-block: var(--saf-spacing-3)}}@supports(-moz-appearance: none) or (stroke-color: transparent){.separator{--saf-toolbar-separator-margin-block:calc(var(--saf-spacing-4)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-spacing-3)*var(--saf-density)*(2 - var(--saf-density)))}}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(toolbarStyles)}
`;

export { styles };
