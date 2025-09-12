import { css } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const descriptionDetailsStyles = ":host{display:block}dd{color:var(--saf-color-text-heavy);font:var(--saf-type-body-default-md);margin-inline-start:0}.with-bullet{display:list-item;list-style-type:disc;margin-inline-start:32px}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(descriptionDetailsStyles)}
`;

export { styles };
