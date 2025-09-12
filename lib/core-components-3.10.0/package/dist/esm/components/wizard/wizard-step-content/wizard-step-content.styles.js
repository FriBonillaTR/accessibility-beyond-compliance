import { css } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const wizardStepContentStyles = ":host[hidden]{display:none}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(wizardStepContentStyles)}
`;

export { styles };
