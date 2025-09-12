"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("./saf-message-box.js"),a=require("./saf-progress-text.js"),o=require("tslib"),s=require("./fast-element-DOTfrYFb.js"),r=require("./when-0aDJpnLk.js"),i=require("./slotted-cZBT0SIc.js");require("./saf-avatar.js"),require("./saf-icon.js"),require("./logger-vjs750p7.js"),require("./saf-sr-only.js");class l extends s.FASTElement{constructor(){super(...arguments),this.ariaLabel="Chat window",this.loading=!1,this.loadingText="Processing",this.messageAriaLabel="Chat messages"}footerNodesChanged(){var e;(null===(e=this.footerNodes)||void 0===e?void 0:e.length)&&this.footerItemsExist()}footerItemsExist(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".control");null==t||t.classList.add("has-footer")}}o.__decorate([s.attr({attribute:"aria-label"})],l.prototype,"ariaLabel",void 0),o.__decorate([s.observable,s.attr({attribute:"loading",mode:"boolean"})],l.prototype,"loading",void 0),o.__decorate([s.attr({attribute:"loading-text"})],l.prototype,"loadingText",void 0),o.__decorate([s.attr({attribute:"message-aria-label"})],l.prototype,"messageAriaLabel",void 0),o.__decorate([s.observable],l.prototype,"footerNodes",void 0);exports.default=()=>(t.default(),a.default(),l.define({name:e.getComponentName("saf-chat"),template:s.html`
	<template
		role="region"
		aria-label="${e=>e.ariaLabel}"
		message-aria-label="${e=>""!==e.messageAriaLabel?e.messageAriaLabel:void 0}"
	>
		<div class="control" part="control">
			<div class="content-container" part="content-container">
				<div
					class="content"
					part="content"
					role="list"
					aria-label="${e=>e.messageAriaLabel}"
					aria-live="polite"
					aria-atomic="false"
				>
					<slot></slot>
					${r.when(e=>e.loading,s.html`
							<saf-message-box part="loading-message-box" class="loading-message-box">
								<saf-progress-text>${e=>e.loadingText}</saf-progress-text>
							</saf-message-box>
						`)}
				</div>
			</div>
			<slot
				name="footer"
				class="footer"
				part="footer"
				${i.slotted({property:"footerNodes"})}
			></slot>
		</div>
	</template>
`,styles:s.css`
	${e.replaceComponentNamesWithSafAttribute(":host{background-color:var(--saf-color-background-subtle);contain:layout;container-name:chat;container-type:inline-size;display:block;height:100%;position:relative}:host .control{display:flex;flex-direction:column;height:100%;overflow:auto;position:relative}:host .content-container{display:flex;flex-direction:column-reverse;height:100%;max-height:var(--saf-chat-max-height, 100vh);overflow:auto;overflow-anchor:auto !important;scroll-behavior:smooth}:host .content{align-items:stretch;display:flex;flex:1 1 100%;flex-direction:column;justify-content:flex-end}:host ::slotted(saf-message-box){animation:fadein 700ms normal forwards linear;transform:translateZ(0)}:host .footer{background-color:var(--saf-color-background-subtle);bottom:0;margin-top:auto;position:sticky}:host(:focus-within){z-index:var(--saf-z-index-default)}::slotted(saf-embedded-button){margin-top:var(--saf-spacing-4)}.has-footer .footer{display:block;padding:var(--saf-spacing-4) var(--saf-spacing-4) var(--saf-spacing-7)}@container chat (min-width: 480px){.has-footer .footer{padding:var(--saf-spacing-6) var(--saf-spacing-4) var(--saf-spacing-7)}}")}
`,registry:e.getRegistry()}));
