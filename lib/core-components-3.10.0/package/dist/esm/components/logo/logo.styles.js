import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const logoStyles = ":host{--saf-display-logo: inline-block;--saf-spacing-title: var(--saf-spacing-4);--saf-logo-height: 26px;--saf-logo-width: 193px;align-items:center;box-sizing:border-box;display:inline-flex;flex-wrap:wrap;font:var(--saf-logo-type-default);min-width:var(--saf-logo-width);padding-left:var(--saf-spacing-6);position:relative;width:100%}:host::before{content:\"\";display:var(--saf-display-logo);height:var(--saf-logo-height);margin-left:calc(var(--saf-spacing-6)*-1);width:var(--saf-logo-width)}:host svg{display:var(--saf-display-logo);left:0;position:absolute;top:0}:host div{color:var(--saf-color-orange-500);line-height:var(--saf-logo-height);margin-left:var(--saf-spacing-2)}@container (max-width: 63.9375em){:host([product-header-logo]){--saf-display-logo: none;--saf-spacing-title: 0;min-width:initial;padding-left:0}}:host([appearance=\"1-color-reversed\"]) div{color:var(--saf-color-text-knockout)}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(logoStyles)}
`;

export { styles };
