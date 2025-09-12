import { css } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const facetItemStyles = ":host{display:grid;grid-template-rows:auto 1fr;margin-left:calc(var(--saf-spacing-1)*-1)}.root{display:flex;gap:var(--saf-spacing-2);padding-bottom:var(--saf-spacing-2);padding-top:var(--saf-spacing-2)}.counter{margin-left:auto;margin-right:var(--saf-spacing-3)}.control{align-self:center;display:flex}saf-checkbox{grid-column-start:2;margin-bottom:11px;margin-top:11px}.number-of-items{color:var(--saf-color-text-subtle)}:host([expanded=true]) .child-items{display:inline-block;position:relative}:host([expanded=false]) .child-items{display:none}saf-button{align-self:flex-start;display:inline-flex;position:relative}.child-items,:host .root.no-children{margin-left:var(--saf-spacing-8)}";
/**
 * Styles for Badge
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(facetItemStyles)}
`;

export { styles };
