import { css } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const activityNoteStyles = ":host{align-items:center;background-color:var(--saf-color-background-subtle);border-radius:var(--saf-border-radius-xs);color:var(--saf-color-text-heavy);display:block;font:var(--saf-type-body-default-sm-regular-standard);overflow-wrap:break-word;padding:var(--saf-spacing-2) var(--saf-spacing-4)}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(activityNoteStyles)}
`;

export { styles };
