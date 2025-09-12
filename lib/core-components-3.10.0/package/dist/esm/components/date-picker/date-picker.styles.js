import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const datePickerStyles = ":host{--saf-datepicker-max-width: 360px;display:block;max-width:var(--saf-datepicker-max-width);position:relative}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(datePickerStyles)}
`;

export { styles };
