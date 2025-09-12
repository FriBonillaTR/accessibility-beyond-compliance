import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const statusStyles = ":host{align-items:center;color:var(--saf-color-status-neutral-strong);display:flex;font:var(--saf-type-body-default-sm-strong-standard);gap:var(--saf-spacing-1);margin-block-start:var(--saf-spacing-2)}:host([status=paused]){color:var(--saf-color-status-neutral-strong)}:host([status=info]){color:var(--saf-color-status-information-strong)}:host([status=success]){color:var(--saf-color-status-success-strong)}:host([status=error]){color:var(--saf-color-status-error-strong)}:host([status=warning]){color:var(--saf-color-status-warning-strong)}svg{color:inherit;fill:inherit;flex:0 0 auto;margin-top:var(--saf-spacing-05)}span{flex-grow:1}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(statusStyles)}
`;

export { styles };
