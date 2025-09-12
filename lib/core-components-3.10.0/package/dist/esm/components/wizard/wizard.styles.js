import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const wizardStyles = ":host{display:block}.wizard-container.vertical slot[name=stepper]{display:block;max-width:25%}::slotted(saf-stepper.horizontal){margin:var(--saf-spacing-6) 0}.wizard-container.horizontal{margin:0 var(--saf-spacing-8)}.wizard-container.mobile{margin:0}.wizard-container.mobile .wizard-content-container{padding:var(--saf-spacing-4)}.wizard-container.vertical{display:flex;flex-direction:row;margin:var(--saf-spacing-8) 0 0 var(--saf-spacing-8)}.wizard-container.vertical .wizard-content-container{flex:1;margin-left:var(--saf-spacing-8)}saf-step.vertical{margin-top:0}.step-content{margin-top:var(--saf-spacing-6)}.wizard-container.mobile .step-content{margin-top:0}.step-title{margin-top:0}.step-title-mobile{margin-bottom:0}.wizard-footer{display:flex;justify-content:space-between;margin:var(--saf-spacing-6) 0}.wizard-footer-right{display:flex;gap:var(--saf-spacing-2)}.step-header-mobile{align-items:flex-start;align-self:stretch;background:var(--saf-color-background-subtle);border-bottom:1px solid var(--saf-color-border-subtle);border-top:1px solid var(--saf-color-border-subtle);display:flex;flex-direction:column;gap:4px;padding:12px 16px}.step-description-mobile{font:var(--saf-type-body-default-sm-regular-standard)}.wizard-mobile-divider{margin:var(--saf-spacing-6) 0}";
/**
 * Styles for Wizard
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(wizardStyles)}
`;

export { styles };
