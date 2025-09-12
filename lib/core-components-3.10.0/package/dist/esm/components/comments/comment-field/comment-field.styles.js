import { css } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const CommentFieldStyles = ":host{display:block}.control{display:flex;gap:var(--saf-spacing-2);justify-content:center}.control form{width:360px}.end{display:flex;justify-content:flex-end;margin-inline-end:0;padding-top:var(--saf-spacing-7)}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(CommentFieldStyles)}
`;

export { styles };
