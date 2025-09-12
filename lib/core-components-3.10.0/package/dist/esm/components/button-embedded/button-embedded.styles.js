import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const buttonEmbeddedStyles = ":host{align-items:flex-end;border-radius:var(--saf-border-radius-xs);display:grid;grid-template-columns:1fr auto;grid-template-rows:repeat(auto-fill, minmax(0, 1fr))}:host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=\"\"]){--saf-density: 2}::slotted(saf-text-field),::slotted(saf-number-field),::slotted(saf-search-field),::slotted(saf-date-masked-input),::slotted(saf-button){align-items:center;display:inline-grid;grid-template-rows:subgrid}::slotted(saf-button){grid-column-start:2;grid-row-start:2}::slotted(saf-button.first-row){grid-row-start:1}::slotted(saf-button.hidden){display:none}::slotted(saf-text-field),::slotted(saf-number-field),::slotted(saf-search-field),::slotted(saf-date-masked-input){grid-column-start:1;grid-row:1/span 3}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(buttonEmbeddedStyles)}
`;

export { styles };
