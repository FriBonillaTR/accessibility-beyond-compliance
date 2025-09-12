import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const MessageBoxStyles = ":host{border-bottom:var(--saf-line-width-thin) solid var(--saf-color-border-strong);contain:layout;container-name:messagebox;container-type:inline-size;display:block;position:relative}:host(:focus-within){z-index:var(--saf-z-index-default)}.control{color:var(--saf-color-text-heavy);display:flex;font:var(--saf-type-body-default-md-regular-standard);gap:var(--saf-spacing-2);padding:var(--saf-spacing-2) var(--saf-spacing-4)}@container messagebox (min-width: 480px){.control{gap:var(--saf-spacing-3);padding-left:var(--saf-spacing-6);padding-right:var(--saf-spacing-6)}}:host([has-progress-text]) .control{padding-bottom:var(--saf-spacing-4);padding-top:var(--saf-spacing-4)}.content{flex-grow:1}.metadata{display:flex}::slotted([slot=metadata]){margin-bottom:var(--saf-spacing-1);padding-top:1px}:host([appearance=agent]){background-color:var(--saf-color-background-subtle)}:host([appearance=agent]) .avatar{border-color:var(--saf-color-border-subtle)}:host(:not([appearance=agent])){background-color:var(--saf-color-interactive-background-default)}.avatar svg{align-items:center;display:flex;height:20px;justify-content:center;width:20px}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(MessageBoxStyles)}
`;

export { styles };
