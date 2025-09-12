import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const stepperStyles = ":host{margin:0;padding:0}:host(.horizontal){display:flex;gap:var(--saf-spacing-2)}:host(.vertical){display:inline-flex;flex-direction:column}";
/**
 * Styles for Divider
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(stepperStyles)}
`;

export { styles };
