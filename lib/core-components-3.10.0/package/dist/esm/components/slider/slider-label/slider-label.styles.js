import { css } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const sliderLabelStyles = ":host{--saf-slider-thumb-size: 32;--saf-slider-height: 40;color:var(--saf-color-text-heavy);display:inline-block;fill:currentcolor;font:var(--saf-type-body-default-md-regular-standard)}.root{display:grid;position:absolute}.container{display:grid;justify-self:center}.label{max-width:30px;place-self:center center;white-space:nowrap}.mark{background:var(--saf-color-border-stronger);height:16px;justify-self:center;width:2px}:host([aria-disabled=true]){color:var(--saf-color-interactive-disabled-strong)}:host([orientation=horizontal]){align-self:start;grid-row:2;height:calc((var(--saf-slider-height)/2 + 4)*1px);margin-top:-2px;width:auto}:host([orientation=horizontal]) .container{grid-template-columns:0;grid-template-rows:auto auto}:host([orientation=horizontal]) .label{margin:2px 0}:host([orientation=vertical]){grid-column:2;height:auto;justify-self:start;margin-left:2px;width:calc((var(--saf-slider-height)/2 + 4)*1px)}:host([orientation=vertical]) .container{grid-template-columns:auto auto;grid-template-rows:0;height:calc(var(--saf-slider-thumb-size)*1px);min-width:calc(var(--saf-slider-thumb-size)*1px)}:host([orientation=vertical]) .mark{align-self:center;transform:rotate(90deg)}:host([orientation=vertical]) .label{align-self:center;margin-left:16px}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(sliderLabelStyles)}
`;

export { styles };
