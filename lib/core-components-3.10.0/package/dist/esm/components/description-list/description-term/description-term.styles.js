import { css } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const descriptionTermStyles = ":host{color:var(--saf-color-text-heavy);display:block;font:var(--saf-type-heading-default-md-strong-standard)}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(descriptionTermStyles)}
`;

export { styles };
