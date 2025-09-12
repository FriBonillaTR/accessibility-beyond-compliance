import { css } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const dateMaskedInputStyles = ":host{display:block}:host([embedded-item]) .text-field{align-items:center;display:inline-grid;grid-column-start:1;grid-row:1/span 3;grid-template-rows:subgrid}:host([embedded-item]) .text-field:not([disabled],[readonly])::part(root):hover{outline-offset:-1px}:host([embedded-item]) .text-field::part(root){padding-inline-end:var(--saf-text-field-embedded-item-padding-inline-end)}:host([embedded-item]) .text-field[readonly]::part(root){--saf-text-field-embedded-item-padding-inline-end: 0}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(dateMaskedInputStyles)}
`;

export { styles };
