import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const fileUploadStyles = ":host{color:var(--saf-color-text-heavy);display:block}.control{width:100%}.title,.title-label-copy{margin:0}.title{font:var(--saf-type-heading-default-lg-strong-standard)}.title-label-copy{font:var(--saf-type-body-default-sm-regular-standard);margin-bottom:var(--saf-spacing-4)}input{overflow:hidden}.upload-space{background:var(--saf-color-interactive-secondary-default);border:var(--saf-line-width-thin) dashed var(--saf-color-interactive-on-tertiary-default);border-radius:var(--saf-border-radius-sm);padding:var(--saf-spacing-8)}.instructional-text{display:block;font:var(--saf-type-body-default-md-strong-standard);margin-bottom:var(--saf-spacing-4)}saf-status{margin-top:calc(var(--saf-spacing-5)*-1)}.document-name{display:inline;font:var(--saf-type-body-default-md-regular-standard);position:relative;top:21px}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(fileUploadStyles)}
`;

export { styles };
