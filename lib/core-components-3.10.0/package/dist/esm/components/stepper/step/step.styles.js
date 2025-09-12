import { css } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const stepStyles = ":host{color:var(--saf-color-text-subtle);display:inline-block;flex:1;position:relative}:host(.vertical){margin:var(--saf-spacing-4) 0}:host(.vertical[step-number=\"1\"]){margin-top:0}:host(.vertical) .step-divider{height:calc(100% - var(--saf-spacing-2));left:10px;position:absolute;top:32px;width:4px}:host(.vertical.last) .step-divider{display:none}:host .step-content{margin-left:var(--saf-spacing-8)}:host .number{align-items:center;align-self:flex-start;border-radius:var(--saf-border-radius-circle);display:flex;font:var(--saf-type-heading-default-md-strong-standard);height:24px;justify-content:center;line-height:0;margin-right:var(--saf-spacing-2);min-width:24px;text-align:center;width:24px}:host .number saf-icon{font:var(--saf-type-icon-strong-sm);height:24px;width:24px}:host .step-header-container{align-items:center;display:flex}:host .step-header{display:inline-block;font:var(--saf-type-heading-default-md-strong-standard)}:host .step-divider{border-radius:var(--saf-border-radius-xs);height:4px;margin-bottom:var(--saf-spacing-2)}:host(.completed) .step-divider{background-color:var(--saf-color-status-success-strong)}:host(.completed) .number,:host(.completed) .step-header{color:var(--saf-color-status-success-strong)}:host(.active) .number{background-color:var(--saf-color-interactive-states-item-current);color:var(--saf-color-text-knockout)}:host(.active) .step-header{color:var(--saf-color-interactive-states-item-current)}:host(.active) .step-divider{background-color:var(--saf-color-interactive-states-border-active)}:host(.inactive){color:var(--saf-color-text-subtle)}:host(.inactive) .number{border:solid var(--saf-line-width-thin);border-color:var(--saf-color-border-stronger);color:var(--saf-color-text-subtle);height:22px;min-width:22px;width:22px}:host(.inactive) .step-divider{background-color:var(--saf-color-border-strong)}:host slot[name=content]{display:block;font:var(--saf-type-body-default-sm-regular-standard);margin-left:var(--saf-spacing-8)}";
/**
 * Styles for Divider
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(stepStyles)}
`;

export { styles };
