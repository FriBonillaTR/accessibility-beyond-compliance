"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("./saf-icon.js"),a=require("tslib"),s=require("./apply-mixins-CewQe2EQ.js"),r=require("./start-end-template-D7dQJgd3.js"),o=require("./fast-element-DOTfrYFb.js"),i=require("./ref-BeTe_0iT.js"),n=require("./when-0aDJpnLk.js");require("./logger-vjs750p7.js");class d extends o.FASTElement{constructor(){super(...arguments),this.expanded=!1,this.hideCaret=!1}connectedCallback(){super.connectedCallback(),this.setup()}disconnectedCallback(){super.disconnectedCallback(),this.details.removeEventListener("toggle",this.onToggle)}show(){this.details.open=!0}hide(){this.details.open=!1}toggle(){this.details.open=!this.details.open}setup(){this.onToggle=this.onToggle.bind(this),this.details.addEventListener("toggle",this.onToggle),this.expanded&&this.show()}onToggle(){this.expanded=this.details.open,this.$emit("toggle",null,{bubbles:!1})}}a.__decorate([o.attr({mode:"boolean"})],d.prototype,"expanded",void 0),a.__decorate([o.attr],d.prototype,"summary",void 0),a.__decorate([o.attr({attribute:"hide-caret",mode:"boolean"})],d.prototype,"hideCaret",void 0),s.applyMixins(d,r.StartEnd);exports.default=()=>(t.default(),d.define({name:e.getComponentName("saf-disclosure"),template:o.html`
		<details
			class="disclosure"
			part="disclosure"
			${i.ref("details")}
			?open="${e=>e.expanded}"
		>
			<summary
				class="invoker"
				part="invoker"
				role="button"
				aria-controls="disclosure-content"
				aria-expanded="${e=>e.expanded}"
				?hide-caret="${e=>e.hideCaret}"
			>
				${n.when(e=>!0!==e.hideCaret,o.html`
						<saf-icon
							icon-name="${e=>e.expanded?"caret-down":"caret-right"}"
							class="icon"
							part="icon"
							appearance="solid"
						></saf-icon>
					`)}
				${n.when(e=>e.hideCaret,o.html` ${n.when(e=>!0!==e.expanded,o.html` ${e=>e.show()} `)} `)}
				${r.startSlotTemplate()}
				<slot name="summary">${e=>e.summary}</slot>
				${r.endSlotTemplate()}
			</summary>
			<div id="disclosure-content" class="content" part="content"><slot></slot></div>
		</details>
	`,styles:o.css`
	${e.replaceComponentNamesWithSafAttribute(':host{display:block;--saf-summary-margin-bottom: var(--saf-spacing-0)}summary{background:var(--saf-color-interactive-states-background-default);border:var(--saf-line-width-thin) solid var(--saf-color-interactive-states-border-default);border-radius:var(--saf-border-radius-xs);box-sizing:border-box;color:var(--saf-color-interactive-states-on-default);display:flex;font:var(--saf-type-body-default-md-strong-standard);gap:var(--saf-spacing-2);margin-bottom:var(--saf-summary-margin-bottom);padding:var(--saf-spacing-2) var(--saf-spacing-3);position:relative;text-align:left}summary::before{content:"";inset:0;position:absolute}summary::marker,summary::-webkit-details-marker{display:none}summary:hover{background:var(--saf-color-interactive-states-background-hover);color:var(--saf-color-interactive-states-on-hover)}summary:active{background:var(--saf-color-interactive-states-background-active);color:var(--saf-color-interactive-states-on-active)}summary:not([disabled]):hover::before{border:var(--saf-line-width-thick) solid var(--saf-color-interactive-states-border-hover);border-radius:var(--saf-border-radius-xs);height:calc(100% - 2px);left:-1px;top:-1px;width:calc(100% - 2px)}summary:not([disabled]):active::before{border:var(--saf-line-width-thick) solid var(--saf-color-interactive-states-border-active);height:calc(100% - 2px);left:-1px;top:-1px;width:calc(100% - 2px)}summary:focus{box-shadow:var(--saf-drop-shadow-focus)}slot[name=summary]{align-items:center;display:flex}summary .icon{display:flex;justify-content:center;width:16px}')}
`,registry:e.getRegistry()}));
