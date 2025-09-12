import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const EmptyStateStyles = ":host,::slotted([slot=actions]){align-items:flex-start;display:flex;flex-direction:column;max-width:488px}:host([is-center]),:host([is-center]) ::slotted([slot=actions]){align-items:center;margin:0 auto;text-align:center}::slotted(saf-icon),.empty-state-title,::slotted(p){margin:0 0 var(--saf-spacing-4) 0}.empty-state-title{font:var(--saf-type-heading-default-xl-strong-standard)}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(EmptyStateStyles)}
`;

export { styles };
