import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const ProgressTextStyles = ":host{display:block}.control{align-items:center;color:var(--saf-color-text-heavy);display:flex;font:var(--saf-type-body-default-md-regular-standard)}.dots{animation:dot-flashing 1s infinite linear alternate;animation-delay:.5s;background-color:var(--saf-color-text-heavy);border-radius:var(--saf-border-radius-xs);color:var(--saf-color-text-heavy);height:8px;position:relative;transform:translate(240%, 2px);width:8px}.dots::before,.dots::after{content:\"\";display:inline-block;position:absolute;top:0}.dots::before{animation:dot-flashing 1s infinite alternate;animation-delay:0s;background-color:var(--saf-color-text-heavy);border-radius:var(--saf-border-radius-xs);color:var(--saf-color-text-heavy);height:8px;left:-100%;transform:translate(-50%);width:8px}.dots::after{animation:dot-flashing 1s infinite alternate;animation-delay:1s;background-color:var(--saf-color-text-heavy);border-radius:var(--saf-border-radius-xs);color:var(--saf-color-text-heavy);height:8px;left:100%;transform:translate(50%);width:8px}@keyframes dot-flashing{0%{background-color:var(--saf-color-text-heavy)}50%,100%{background-color:rgba(31,31,31,.2)}}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(ProgressTextStyles)}
`;

export { styles };
