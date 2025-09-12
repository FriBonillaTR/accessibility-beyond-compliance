"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),a=require("./define-CgQAavGn.js"),t=require("./saf-icon.js"),i=require("./saf-sr-only.js"),o=require("tslib"),r=require("./dialogBase-BiiI0NTo.js"),l=require("./fast-element-DOTfrYFb.js"),s=require("./when-0aDJpnLk.js"),d=require("./ref-BeTe_0iT.js");require("./apply-mixins-CewQe2EQ.js"),require("./start-end-template-D7dQJgd3.js"),require("./aria-global-CYzDgx1a.js"),require("./form-associated-DSP-KUNe.js"),require("@microsoft/fast-web-utilities"),require("./global-enums-58U8enSy.js"),require("./slotted-cZBT0SIc.js"),require("./logger-vjs750p7.js"),require("tabbable");class n extends r.DialogBase{constructor(){super(...arguments),this.isAlert=!1,this.isHeader=!0,this.isFooter=!1,this.ariaTitleLevel=2,this.ariaSubtitleLevel=3,this.modal=!0,this.hidden=!0,this.noFocusTrap=!1,this.noFocusTrapChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()}}get closeButtonElement(){var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".close")}get titleElement(){var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".dialog-title")}get isHidden(){return this.hidden}set isHidden(e){this.hidden=e}get hideStateAttribute(){return"hidden"}get isModal(){return this.modal}get hasCancelEvent(){return!0}get openEventName(){return"show"}get hideEventName(){return"hide"}get preventTriggerFocus(){return!1}hide(){this._hide()}show(){this._show()}}o.__decorate([l.attr({attribute:"a11y-aria-label"})],n.prototype,"a11yAriaLabel",void 0),o.__decorate([l.attr({attribute:"close-aria-label"}),l.observable],n.prototype,"closeAriaLabel",void 0),o.__decorate([l.attr({attribute:"is-alert",mode:"boolean"})],n.prototype,"isAlert",void 0),o.__decorate([l.attr({attribute:"is-header",mode:"boolean"})],n.prototype,"isHeader",void 0),o.__decorate([l.attr({attribute:"is-footer",mode:"boolean"})],n.prototype,"isFooter",void 0),o.__decorate([l.attr({attribute:"dialog-title"})],n.prototype,"dialogTitle",void 0),o.__decorate([l.attr({attribute:"aria-title-level",mode:"fromView",converter:l.nullableNumberConverter})],n.prototype,"ariaTitleLevel",void 0),o.__decorate([l.attr({attribute:"dialog-subtitle"})],n.prototype,"dialogSubtitle",void 0),o.__decorate([l.attr({attribute:"aria-subtitle-level",mode:"fromView",converter:l.nullableNumberConverter})],n.prototype,"ariaSubtitleLevel",void 0),o.__decorate([l.attr({mode:"boolean"}),l.observable],n.prototype,"modal",void 0),o.__decorate([l.attr({mode:"boolean"}),l.observable],n.prototype,"hidden",void 0),o.__decorate([l.attr({attribute:"no-focus-trap",mode:"boolean"})],n.prototype,"noFocusTrap",void 0);exports.default=()=>(a.SafButton(),t.default(),i.default(),n.define({name:e.getComponentName("saf-dialog"),template:l.html`
	<template
		id="${e=>e.id}"
		is-footer="${e=>e.isFooter}"
		is-header="${e=>e.isHeader}"
		?modal="${e=>e.modal?e.modal:void 0}"
		?hidden="${e=>e.hidden}"
		?aria-hidden="${e=>e.hidden}"
		?no-focus-trap="${e=>!!e.noFocusTrap&&e.noFocusTrap}"
	>
		${s.when(e=>e.modal,l.html`
				<div
					class="overlay"
					part="overlay"
					role="presentation"
					@click="${e=>{e.dismiss()}}"
				></div>
			`)}
		<div
			role="${e=>e.isAlert?"alertdialog":"dialog"}"
			tabindex="-1"
			class="control"
			part="control"
			aria-modal="${e=>e.modal?e.modal:void 0}"
			aria-describedby="${e=>e.ariaDescribedby}"
			aria-labelledby="${e=>e.ariaLabel||e.a11yAriaLabel?null:e.isHeader?`dialog-title-${e.id}`:null}"
			aria-label="${e=>e.ariaLabel||e.a11yAriaLabel?e.a11yAriaLabel?e.a11yAriaLabel:e.ariaLabel:void 0}"
			${d.ref("dialog")}
		>
			<!-- start dialog header wrapper -->
			<div class="dialog-header-wrapper" part="dialog-header-wrapper">
				${s.when(e=>e.isHeader,l.html`
						<div class="dialog-headings" part="dialog-headings">
							<div
								id="dialog-title-${e=>e.id}"
								class="dialog-title"
								part="dialog-title"
								role="heading"
								aria-level="${e=>e.ariaTitleLevel}"
								tabindex="-1"
							>
								${e=>e.dialogTitle}
							</div>
							${s.when(e=>!!e.dialogSubtitle,l.html`
									<div
										id="dialog-subtitle-${e=>e.id}"
										class="dialog-subtitle"
										part="dialog-subtitle"
										role="${e=>e.ariaSubtitleLevel?"heading":null}"
										aria-level="${e=>e.ariaSubtitleLevel?e.ariaSubtitleLevel:null}"
									>
										${e=>e.dialogSubtitle}
									</div>
								`)}
						</div>
					`)}

				<saf-button
					nested-item
					class="close"
					part="close"
					icon-only=""
					appearance="tertiary"
					a11y-aria-label="${e=>{var a;return null!==(a=e.closeAriaLabel)&&void 0!==a?a:"Close"}}"
					@click="${e=>e.hide()}"
				>
					<saf-icon icon-name="xmark-large"></saf-icon>
				</saf-button>
				<slot name="subheader" part="subheader" class="subheader"></slot>
			</div>
			<!-- closes dialog header wrapper -->

			<div class="content" part="content" @scroll="${e=>e.scrollHandler()}">
				<slot></slot>
			</div>

			${s.when(e=>e.isFooter,l.html`
					<slot
						id="footer-${e=>e.id}"
						name="footer"
						class="footer"
						part="footer"
					></slot>
				`)}
		</div>
	</template>
`,styles:l.css`
	${e.replaceComponentNamesWithSafAttribute(":host{--saf-dialog-minWidth: 200px;--saf-dialog-minHeight: 100px;box-sizing:border-box;display:flex;height:100%;justify-content:center;left:0;overflow-y:auto;padding:var(--saf-spacing-4);position:fixed;top:0;width:100%;z-index:var(--saf-z-index-dialog)}@media(width >= 48em)and (height >= 20em){:host{overflow:unset;padding:var(--saf-spacing-8)}}.overlay{background:var(--saf-color-interactive-overlay);height:100%;inset:0;position:fixed;touch-action:none;transition:opacity .3s ease-out;width:100%;z-index:var(--saf-z-index-overlay)}.control{background-color:var(--saf-color-background-default);border:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);border-radius:var(--saf-border-radius-md);box-shadow:var(--saf-drop-shadow-level-3);display:flex;flex-direction:column;inset:0;margin-bottom:auto;margin-top:auto;min-height:var(--saf-dialog-minHeight);min-width:var(--saf-dialog-minWidth);overflow-y:auto;position:relative;width:auto;z-index:var(--saf-z-index-dialog)}@media(width >= 48em){.control{max-width:50vw}}@media(width >= 48em)and (height >= 20em){.control{height:auto;justify-content:center;max-height:calc(100vh - var(--saf-spacing-8)*2);overflow:hidden}}:host([hidden]) .overlay{opacity:0;transform:translateX(100%);transition:opacity .3s ease-out,transform 0s .3s ease-out,visibility 0s .3s linear}:host([hidden]) .control{transform:translateX(400px);transition:transform .3s ease-out,visibility 0s .3s linear,opacity .3s linear}:host([hidden]) .overlay,:host([hidden]) .control{visibility:hidden}:host([inactive]) .control{z-index:calc(var(--saf-z-index-overlay) - 1)}:host(:not([hidden])) .overlay,:host(:not([hidden])) .control{visibility:visible}.dialog-header-wrapper{display:grid;flex-shrink:0;grid-template-columns:1fr auto;padding:var(--saf-spacing-8) var(--saf-spacing-6) var(--saf-spacing-5)}.dialog-header-wrapper saf-button{place-self:flex-start flex-end}.dialog-headings{flex-grow:1;padding-right:var(--saf-spacing-4)}.dialog-title{color:var(--saf-color-text-heavy);font:var(--saf-type-heading-default-2xl-strong-standard);margin-bottom:var(--saf-spacing-1)}.dialog-title:focus,.dialog-title:focus-visible{outline:none}.dialog-subtitle{color:var(--saf-color-text-strong);font:var(--saf-type-heading-default-md-strong-standard)}.dialog-subtitle:empty{margin-top:var(--saf-spacing-4)}.content{flex:1 1 auto;padding:var(--saf-spacing-1) var(--saf-spacing-6);pointer-events:auto}@media(width >= 48em)and (height >= 20em){.content{height:auto;overflow-y:auto;width:auto}}::slotted(p){font:var(--saf-type-body-default-md-regular-standard);margin:0}.subheader{flex:0 0 auto;padding-left:var(--saf-spacing-8);padding-right:var(--saf-spacing-8)}.footer{display:block;padding:var(--saf-spacing-8) var(--saf-spacing-6);position:relative}")}
`,registry:e.getRegistry()})),exports.safDialogConfig={events:{onCancel:"cancel",onClose:"close",onHide:"hide",onShow:"show"}};
