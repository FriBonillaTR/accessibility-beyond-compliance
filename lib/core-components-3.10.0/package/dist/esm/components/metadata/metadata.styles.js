import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const MetadataStyles = ":host{box-sizing:border-box;display:inline-block}.content{display:flex;flex-wrap:wrap}:host([size=xs]){font:var(--saf-type-body-default-xs-regular-standard)}:host([size=sm]){font:var(--saf-type-body-default-sm-regular-standard)}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(MetadataStyles)}
`;

export { styles };
