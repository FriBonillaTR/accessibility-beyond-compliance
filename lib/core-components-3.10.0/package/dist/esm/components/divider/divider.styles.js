import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const dividerStyles = ":host{--saf-divider-borderColor: var(--saf-color-border-stronger);--saf-divider-borderStyle: solid;--saf-divider-borderWidth: var(--saf-line-width-thin) 0 0 0;--saf-divider-size: 0;border-color:var(--saf-divider-borderColor);border-style:var(--saf-divider-borderStyle);border-width:var(--saf-divider-borderWidth);box-sizing:content-box;height:var(--saf-divider-size)}:host([role=presentation]){--saf-divider-borderColor: var(--saf-color-border-strong)}:host([orientation=horizontal]){display:block}:host([orientation=vertical]){--saf-divider-borderWidth: 0 0 0 var(--saf-line-width-thin);--saf-divider-size: 100%;display:inline-block}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(dividerStyles)}
`;

export { styles };
