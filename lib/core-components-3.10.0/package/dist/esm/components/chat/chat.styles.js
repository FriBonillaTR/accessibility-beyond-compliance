import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const ChatStyles = ":host{background-color:var(--saf-color-background-subtle);contain:layout;container-name:chat;container-type:inline-size;display:block;height:100%;position:relative}:host .control{display:flex;flex-direction:column;height:100%;overflow:auto;position:relative}:host .content-container{display:flex;flex-direction:column-reverse;height:100%;max-height:var(--saf-chat-max-height, 100vh);overflow:auto;overflow-anchor:auto !important;scroll-behavior:smooth}:host .content{align-items:stretch;display:flex;flex:1 1 100%;flex-direction:column;justify-content:flex-end}:host ::slotted(saf-message-box){animation:fadein 700ms normal forwards linear;transform:translateZ(0)}:host .footer{background-color:var(--saf-color-background-subtle);bottom:0;margin-top:auto;position:sticky}:host(:focus-within){z-index:var(--saf-z-index-default)}::slotted(saf-embedded-button){margin-top:var(--saf-spacing-4)}.has-footer .footer{display:block;padding:var(--saf-spacing-4) var(--saf-spacing-4) var(--saf-spacing-7)}@container chat (min-width: 480px){.has-footer .footer{padding:var(--saf-spacing-6) var(--saf-spacing-4) var(--saf-spacing-7)}}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(ChatStyles)}
`;

export { styles };
