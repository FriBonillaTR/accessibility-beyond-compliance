import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const tableStyles = ":host{--saf-table-cell-border-color: var(--saf-color-border-stronger);--saf-table-cell-color: var(--saf-color-text-heavy);--saf-table-cell-border-style: solid;--saf-table-td-border-width: var(--saf-line-width-thin);--saf-table-td-background: var(--saf-color-background-default);--saf-table-th-background: var(--saf-color-background-default);--saf-table-th-border-width: var(--saf-line-width-thin) var(--saf-line-width-thin) var(--saf-line-width-thick) var(--saf-line-width-thin);--saf-table-text-align: left;--saf-table-caption-font: var(--saf-type-body-default-sm-strong-standard);--saf-table-caption-color: var(--saf-color-text-heavy);--saf-table-td-background-alt: var(--saf-color-background-subtle)}:host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=\"\"]){--saf-density: 2}:host([inline-borders=false]){--saf-table-td-border-width: var(--saf-line-width-thin) 0;--saf-table-th-border-width: var(--saf-line-width-thin) 0 var(--saf-line-width-thick)}:host([header-background=strong]){--saf-table-th-background: var(--saf-color-background-strong)}:host([header-background=subtle]){--saf-table-th-background: var(--saf-table-td-background-alt)}::slotted(table){border-collapse:collapse}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(tableStyles)}
`;

export { styles };
