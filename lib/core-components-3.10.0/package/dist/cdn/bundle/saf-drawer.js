"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("./define-CgQAavGn.js"),a=require("./saf-icon.js"),r=require("./saf-sr-only.js"),o=require("tslib"),i=require("./dialogBase-BiiI0NTo.js"),s=require("./fast-element-DOTfrYFb.js"),d=require("./when-0aDJpnLk.js"),l=require("./ref-BeTe_0iT.js");require("./apply-mixins-CewQe2EQ.js"),require("./start-end-template-D7dQJgd3.js"),require("./aria-global-CYzDgx1a.js"),require("./form-associated-DSP-KUNe.js"),require("@microsoft/fast-web-utilities"),require("./global-enums-58U8enSy.js"),require("./slotted-cZBT0SIc.js"),require("./logger-vjs750p7.js"),require("tabbable");const n="right";class h extends i.DialogBase{constructor(){super(...arguments),this.isHeader=!0,this.isFooter=!1,this.ariaTitleLevel=2,this.ariaSubtitleLevel=3,this.modal=!0,this.hidden=!0,this.placement=n,this.handleKeyDown=e=>{"Escape"===e.key&&0===this.depth&&(e.stopPropagation(),this.dismiss())},this.noFocusTrap=!1,this.noFocusTrapChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()}}ariaLabelledbyIds(){if(!this.drawerTitle)return;let e="";return e+=`drawer-title-${this.id}`,e}get closeButtonElement(){var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".close")}get titleElement(){var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".drawer-title")}get isHidden(){return this.hidden}set isHidden(e){this.hidden=e}get hideStateAttribute(){return"hidden"}get isModal(){return this.modal}get hasCancelEvent(){return!0}get openEventName(){return"show"}get hideEventName(){return"hide"}get preventTriggerFocus(){return!1}show(){this.hidden=!1}hide(){this.hidden=!0}dismiss(){0===this.depth&&(this.hide(),this.dispatchEvent(new CustomEvent("dismiss",{bubbles:!0})),this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0})))}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleKeyDown)}}o.__decorate([s.attr({attribute:"close-aria-label"}),s.observable],h.prototype,"closeAriaLabel",void 0),o.__decorate([s.attr({attribute:"is-header",mode:"boolean"})],h.prototype,"isHeader",void 0),o.__decorate([s.attr({attribute:"is-footer",mode:"boolean"})],h.prototype,"isFooter",void 0),o.__decorate([s.attr({attribute:"drawer-title"})],h.prototype,"drawerTitle",void 0),o.__decorate([s.attr({attribute:"aria-title-level",mode:"fromView",converter:s.nullableNumberConverter})],h.prototype,"ariaTitleLevel",void 0),o.__decorate([s.attr({attribute:"drawer-subtitle"})],h.prototype,"drawerSubtitle",void 0),o.__decorate([s.attr({attribute:"aria-subtitle-level",mode:"fromView",converter:s.nullableNumberConverter})],h.prototype,"ariaSubtitleLevel",void 0),o.__decorate([s.attr({mode:"boolean"}),s.observable],h.prototype,"modal",void 0),o.__decorate([s.attr({mode:"boolean"}),s.observable],h.prototype,"hidden",void 0),o.__decorate([s.attr({attribute:"placement"})],h.prototype,"placement",void 0),o.__decorate([s.attr({attribute:"a11y-aria-label"})],h.prototype,"a11yAriaLabel",void 0),o.__decorate([s.attr({attribute:"no-focus-trap",mode:"boolean"})],h.prototype,"noFocusTrap",void 0);exports.default=()=>(t.SafButton(),a.default(),r.default(),h.define({name:e.getComponentName("saf-drawer"),template:s.html`
	<template
		id="${e=>e.id}"
		is-footer="${e=>e.isFooter}"
		is-header="${e=>e.isHeader}"
		?modal="${e=>e.modal?e.modal:void 0}"
		?hidden="${e=>e.hidden}"
		?aria-hidden="${e=>e.hidden}"
		?no-focus-trap="${e=>!!e.noFocusTrap&&e.noFocusTrap}"
		a11y-aria-label="${e=>e.a11yAriaLabel}"
		drawer-title="${e=>e.drawerTitle}"
		drawer-subtitle="${e=>e.drawerSubtitle}"
	>
		${d.when(e=>e.modal,s.html`
				<div
					class="overlay"
					part="overlay"
					role="presentation"
					@click="${e=>{e.dismiss()}}"
				></div>
			`)}
		<div
			role="dialog"
			tabindex="-1"
			class="control"
			part="control"
			aria-modal="${e=>e.modal?e.modal:void 0}"
			aria-describedby="${e=>e.ariaDescribedby}"
			aria-labelledby="${e=>e.ariaLabel||e.a11yAriaLabel?void 0:e.ariaLabelledbyIds()}"
			aria-label="${e=>e.ariaLabel||e.a11yAriaLabel?e.a11yAriaLabel?e.a11yAriaLabel:e.ariaLabel:void 0}"
			${l.ref("dialog")}
		>
			<!-- start drawer header wrapper -->
			<div class="drawer-header-wrapper" part="drawer-header-wrapper">
				${d.when(e=>e.isHeader,s.html`
						<div class="drawer-headings" part="drawer-headings">
							${d.when(e=>{var t;return null===(t=e.drawerTitle)||void 0===t?void 0:t.trim()},s.html`<div
									id="drawer-title-${e=>e.id}"
									class="drawer-title"
									part="drawer-title"
									role="heading"
									aria-level="${e=>e.ariaTitleLevel}"
									tabindex="-1"
								>
									${e=>e.drawerTitle}
								</div>`)}
							${d.when(e=>{var t;return null===(t=e.drawerSubtitle)||void 0===t?void 0:t.trim()},s.html`<div
									id="drawer-subtitle-${e=>e.id}"
									class="drawer-subtitle"
									part="drawer-subtitle"
									role="heading"
									aria-level="${e=>e.ariaSubtitleLevel}"
								>
									${e=>e.drawerSubtitle}
								</div>`)}
						</div>
					`)}

				<saf-button
					nested-item
					a11y-aria-label="${e=>{var t;return null!==(t=e.closeAriaLabel)&&void 0!==t?t:"Close"}}"
					class="close"
					part="close"
					icon-only=""
					appearance="tertiary"
					@click="${e=>e.hide()}"
				>
					<saf-icon icon-name="xmark-large"></saf-icon>
				</saf-button>
				<slot name="subheader" part="subheader" class="subheader"></slot>
			</div>
			<!-- closes drawer header wrapper -->

			<div class="content" part="content" @scroll="${e=>e.scrollHandler()}">
				<slot></slot>
			</div>

			${d.when(e=>e.isFooter,s.html`
					<slot
						id="footer-${e=>e.id}"
						name="footer"
						class="footer"
						part="footer"
					></slot>
				`)}
		</div>
	</template>
`,styles:s.css`
	${e.replaceComponentNamesWithSafAttribute(":host{bottom:0;contain:layout;container-name:drawer;container-type:inline-size;display:var(--saf-drawer-display, flex);height:100vh;position:fixed;right:0;top:0;width:100%;z-index:var(--saf-z-index-deep-dive)}@container drawer (max-width: 600px){:host .overlay{display:none}:host .control{width:100%}:host([placement=bottom]) .control{width:auto}}:host([hidden]){display:none !important}:host(:not([hidden])){display:block;z-index:var(--saf-z-index-dialog)}.overlay{background:var(--saf-color-black);height:100%;inset:0;opacity:var(--saf-opacity-4);position:fixed;touch-action:none;transition:opacity .3s ease-out;width:100%;z-index:var(--saf-z-index-overlay)}.drawer-title{color:var(--saf-color-text-heavy);font:var(--saf-type-heading-default-xl-strong-standard)}@media(width >= 340px)and (height >= 276px){.drawer-title{font:var(--saf-type-heading-default-2xl-strong-standard);margin-bottom:var(--saf-spacing-1)}}.drawer-title:focus,.drawer-title:focus-visible{outline:none}.drawer-subtitle{color:var(--saf-color-text-strong);font:var(--saf-type-heading-default-md-strong-standard)}.drawer-subtitle:empty{margin-top:var(--saf-spacing-1)}.control{background-color:var(--saf-color-background-default);border-left:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);box-shadow:var(--saf-drop-shadow-level-3);box-sizing:border-box;display:flex;flex-flow:column nowrap;height:100vh;max-width:600px;min-width:320px;opacity:1;overflow-y:auto;position:absolute;right:0;transition:transform .3s ease-out;width:400px;z-index:var(--saf-z-index-dialog)}@media(width >= 340px)and (height >= 276px){.control{overflow-y:hidden}}:host([placement=bottom]) .control{border-right:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);border-top:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);border-top-left-radius:var(--saf-border-radius-md);border-top-right-radius:var(--saf-border-radius-md);bottom:0;box-shadow:var(--saf-drop-shadow-level-2);height:50%;left:0;margin:auto;max-width:initial;overflow-y:auto;position:absolute;transition:transform .3s ease-out;width:90%}@media(width <= 600px){:host([placement=bottom]) .control{height:100%;width:100%}}:host([hidden]) .overlay{opacity:0;transform:translateX(100%);transition:opacity .3s ease-out,transform 0s .3s ease-out,visibility 0s .3s linear}:host([hidden]:not([placement=bottom])) .control{transform:translateX(100%);transition:transform .3s ease-out,visibility 0s .3s linear,opacity .3s linear}:host([hidden][placement=bottom]) .control{transform:translateY(100%);transition:transform .3s ease-out,visibility 0s .3s linear,opacity .3s linear}:host([hidden]) .overlay,:host([hidden]) .control{visibility:hidden}:host([inactive]){z-index:calc(var(--saf-z-index-overlay) - 1) !important}:host([inactive]) .control{z-index:calc(var(--saf-z-index-overlay) - 1)}:host(:not([hidden])) .overlay,:host(:not([hidden])) .control{visibility:visible}.drawer-header-wrapper{border-bottom:var(--saf-line-width-thin) solid var(--saf-color-border-strong);display:grid;grid-template-columns:1fr auto;padding:var(--saf-spacing-6) var(--saf-spacing-6) 0}.drawer-header-wrapper saf-button{place-self:flex-start flex-end}.drawer-headings{flex-grow:1;padding-bottom:var(--saf-spacing-6)}.content{flex:1 1 auto;padding:var(--saf-spacing-6);pointer-events:auto}@media(width >= 340px)and (height >= 276px){.content{overflow-y:auto}}.content ::slotted(p){font:var(--saf-type-body-default-md-regular-standard);margin:0}.footer{border-top:var(--saf-line-width-thin) solid var(--saf-color-border-strong);bottom:0;display:flex;padding:var(--saf-spacing-6);position:relative}.footer::slotted(saf-anchor){--saf-anchor-icon-margin: 0 var(--saf-spacing-2) 0 0}:host([placement=bottom]) .footer{border-top:none;padding:0}")}
`,registry:e.getRegistry()})),exports.safDrawerConfig={events:{onDismiss:"dismiss",onHide:"hide",onShow:"show"}};
