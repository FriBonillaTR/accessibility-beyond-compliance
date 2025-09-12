import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const activityStyles = ":host{display:block}.header{gap:var(--saf-spacing-4)}.header,.content{align-items:center;display:flex}.content{align-items:stretch;gap:var(--saf-spacing-2);padding-top:var(--saf-spacing-2)}.header-text{margin:0;overflow-wrap:break-word}::slotted([slot=title]){color:var(--saf-color-text-heavy);font:var(--saf-type-body-default-md-strong-standard) !important;margin:0;padding:0}.header-icon{align-items:center;background:var(--saf-color-background-default);border:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);border-radius:var(--saf-border-radius-circle);box-sizing:border-box;display:flex;flex-direction:column;font:var(--saf-type-icon-default-md);height:40px;justify-content:center;width:40px}.header-icon ::slotted(saf-avatar){border:inherit}.notes{flex:1 1 auto;min-width:200px}.notes,.notes-list{display:flex;flex-direction:column;gap:var(--saf-spacing-2)}.vertical-line{align-items:center;display:flex;flex:0 0 40px;height:auto;justify-content:center;position:relative}.vertical-line::after{background-color:var(--saf-color-border-subtle);border-radius:var(--saf-border-radius-xs);content:\"\";display:block;height:100%;width:4px}.time{align-items:initial;color:var(--saf-color-text-subtle);display:block;font:var(--saf-type-body-default-sm-regular-standard);padding:0 var(--saf-spacing-2) var(--saf-spacing-4) var(--saf-spacing-4)}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(activityStyles)}
`;

export { styles };
