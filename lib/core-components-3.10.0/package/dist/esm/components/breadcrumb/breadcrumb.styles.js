import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const breadcrumbStyles = ":host{box-sizing:border-box;display:inline-block}.list{display:flex;flex-wrap:wrap}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(breadcrumbStyles)}
`;

export { styles };
