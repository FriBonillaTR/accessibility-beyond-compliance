import { css } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const breadcrumbItemStyles = ":host{box-sizing:border-box;display:inline-block;font:var(--saf-type-body-default-sm-regular-standard);--saf-breadcrumb-item-text-decoration: var(--saf-text-decoration-underline)}.listitem{align-items:center;display:flex;width:max-content}.separator{color:var(--saf-color-text-subtle);display:flex;margin:0 var(--saf-spacing-2)}.control{align-items:center;box-sizing:border-box;color:var(--saf-color-anchor-default);cursor:pointer;display:flex;font-size:inherit;outline:none;text-decoration:none;transition:.2s linear all;white-space:nowrap}.control .content{text-decoration-line:var(--saf-breadcrumb-item-text-decoration);text-decoration-thickness:1px}.control:hover{color:var(--saf-color-anchor-hover)}.control:hover .content{text-decoration-thickness:2px}.control:focus{border-radius:var(--saf-border-radius-xs);box-shadow:var(--saf-drop-shadow-focus)}.control:not([href]){color:var(--saf-color-text-heavy);cursor:default;font:var(--saf-type-body-default-sm-strong-standard);--saf-breadcrumb-item-text-decoration: none}.control:not([href]):hover{--saf-breadcrumb-item-text-decoration: none}:host .a11y-aria-description{display:none}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(breadcrumbItemStyles)}
`;

export { styles };
