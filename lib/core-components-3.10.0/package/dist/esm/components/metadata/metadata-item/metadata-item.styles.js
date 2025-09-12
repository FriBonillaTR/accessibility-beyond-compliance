import { css } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const metadataItemStyles = ":host{box-sizing:border-box;color:var(--saf-color-text-subtle);display:inline-flex}.control{align-items:center;display:flex}.separator{color:inherit;display:flex;margin:0 .5rem}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(metadataItemStyles)}
`;

export { styles };
