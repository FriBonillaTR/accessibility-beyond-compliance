"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("tslib"),a=require("./apply-mixins-CewQe2EQ.js"),r=require("./start-end-template-D7dQJgd3.js"),i=require("./fast-element-DOTfrYFb.js");require("./ref-BeTe_0iT.js");class s extends i.FASTElement{constructor(){super(...arguments),this.headerId="headerId",this.timeId="timeId"}}t.__decorate([i.attr],s.prototype,"time",void 0),t.__decorate([i.attr({attribute:"header-id"})],s.prototype,"headerId",void 0),t.__decorate([i.attr({attribute:"time-id"})],s.prototype,"timeId",void 0),a.applyMixins(s,r.StartEnd);exports.default=()=>s.define({name:e.getComponentName("saf-activity"),template:i.html`
		<div class="root" part="root">
			<div class="header" part="header">
				<div class="header-icon" part="header-icon">${r.startSlotTemplate()}</div>
				<div class="header-text" part="header-text" id=${e=>e.headerId}>
					<slot name="title"></slot>
				</div>
			</div>
			<div class="content" part="content">
				<div class="vertical-line" part="vertical-line"></div>
				<div class="notes" part="notes">
					<div
						class="notes-list"
						part="notes-list"
						role="list"
						aria-labelledby=${e=>`${e.headerId} ${e.timeId}`}
					>
						<slot></slot>
					</div>
					<span class="time" part="time" id=${e=>e.timeId}> ${e=>e.time} </span>
				</div>
			</div>
		</div>
	`,styles:i.css`
	${e.replaceComponentNamesWithSafAttribute(':host{display:block}.header{gap:var(--saf-spacing-4)}.header,.content{align-items:center;display:flex}.content{align-items:stretch;gap:var(--saf-spacing-2);padding-top:var(--saf-spacing-2)}.header-text{margin:0;overflow-wrap:break-word}::slotted([slot=title]){color:var(--saf-color-text-heavy);font:var(--saf-type-body-default-md-strong-standard) !important;margin:0;padding:0}.header-icon{align-items:center;background:var(--saf-color-background-default);border:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);border-radius:var(--saf-border-radius-circle);box-sizing:border-box;display:flex;flex-direction:column;font:var(--saf-type-icon-default-md);height:40px;justify-content:center;width:40px}.header-icon ::slotted(saf-avatar){border:inherit}.notes{flex:1 1 auto;min-width:200px}.notes,.notes-list{display:flex;flex-direction:column;gap:var(--saf-spacing-2)}.vertical-line{align-items:center;display:flex;flex:0 0 40px;height:auto;justify-content:center;position:relative}.vertical-line::after{background-color:var(--saf-color-border-subtle);border-radius:var(--saf-border-radius-xs);content:"";display:block;height:100%;width:4px}.time{align-items:initial;color:var(--saf-color-text-subtle);display:block;font:var(--saf-type-body-default-sm-regular-standard);padding:0 var(--saf-spacing-2) var(--saf-spacing-4) var(--saf-spacing-4)}')}
`,registry:e.getRegistry()});
