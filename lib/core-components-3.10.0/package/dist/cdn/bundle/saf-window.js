"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("./define-CgQAavGn.js"),r=require("./saf-icon.js"),a=require("./saf-sr-only.js"),o=require("./define-DFHSE1N5.js"),i=require("tslib"),s=require("./tab-D1ly1F3Y.js"),l=require("./fast-element-DOTfrYFb.js"),n=require("./start-end-template-D7dQJgd3.js"),d=require("./when-0aDJpnLk.js");require("./apply-mixins-CewQe2EQ.js"),require("./aria-global-CYzDgx1a.js"),require("./form-associated-DSP-KUNe.js"),require("@microsoft/fast-web-utilities"),require("./global-enums-58U8enSy.js"),require("./ref-BeTe_0iT.js"),require("./slotted-cZBT0SIc.js"),require("./logger-vjs750p7.js"),require("@floating-ui/dom"),require("./a11y-DvNZtvTj.js"),require("./dom-helpers-DxoVHRyN.js");class c extends s.Tab{constructor(){super(...arguments),this.closeAriaLabel="Close",this.closeable=!0,this.ariaSelectedAttr=null,this.tabIndexProp=-1,this.tabIndexAttr=null}get ariaSelected(){var e;return null!==(e=this.ariaSelectedAttr)&&void 0!==e?e:null}set ariaSelected(e){this.ariaSelectedAttr=e}get tabIndex(){return this.tabIndexProp}set tabIndex(e){const t="number"==typeof e?e:parseInt(null!=e?e:"",10);this.tabIndexProp=isNaN(t)?-1:t,this.tabIndexAttr=isNaN(t)?null:String(e)}close(){this.$emit("close",null,{bubbles:!1})}setAttribute(e,t){if("tabindex"===e){const e=parseInt(null!=t?t:"",10);return this.tabIndexProp=isNaN(e)?-1:e,void(this.tabIndexAttr=t)}"aria-selected"!==e?super.setAttribute(e,t):this.ariaSelectedAttr=t}getAttribute(e){return"tabindex"===e?this.tabIndexAttr:"aria-selected"===e?this.ariaSelectedAttr:super.getAttribute(e)}hasAttribute(e){return"tabindex"===e?null!==this.tabIndexAttr:"aria-selected"===e?null!=this.ariaSelectedAttr:super.hasAttribute(e)}removeAttribute(e){if("tabindex"===e)return this.tabIndexProp=-1,void(this.tabIndexAttr=null);"aria-selected"!==e?super.removeAttribute(e):this.ariaSelectedAttr=null}focus(){var e;(null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".window-label")).focus()}}i.__decorate([l.attr({attribute:"close-aria-label"})],c.prototype,"closeAriaLabel",void 0),i.__decorate([l.attr({attribute:"closeable",mode:"boolean"})],c.prototype,"closeable",void 0),i.__decorate([l.observable],c.prototype,"ariaSelectedAttr",void 0),i.__decorate([l.observable],c.prototype,"tabIndexProp",void 0),i.__decorate([l.observable],c.prototype,"tabIndexAttr",void 0);exports.default=()=>(o.SafTooltip(),t.SafButton(),r.default(),a.default(),c.define({name:e.getComponentName("saf-window"),template:l.html`
		<template
			slot="tab"
			role="group"
			aria-label=${e=>{var t;return null===(t=e.textContent)||void 0===t?void 0:t.trim()}}
			aria-disabled="${e=>e.disabled}"
			a11y-aria-selected=${e=>e.ariaSelectedAttr}
		>
			<div
				class="window-label"
				part="window-label"
				role="tab"
				tabindex=${e=>e.tabIndexAttr}
				aria-selected=${e=>e.ariaSelectedAttr}
			>
				${n.startSlotTemplate()}
				<slot></slot>
				${n.endSlotTemplate()}
			</div>

			${d.when(e=>e.closeable,l.html`
					<saf-tooltip anchor="close" part="close-tooltip">
						${e=>e.closeAriaLabel}
					</saf-tooltip>
					<saf-button
						nested-item
						a11y-aria-label="${e=>e.closeAriaLabel}"
						id="close"
						appearance="tertiary"
						class="close-window-button"
						part="close-window-button"
						icon-only="true"
						@click="${e=>e.close()}"
						density="compact"
						?disabled="${e=>e.disabled}"
						tabindex=${e=>"-1"===e.tabIndexAttr?"-1":null}
					>
						<saf-icon icon-name="xmark-large" size="12"></saf-icon>
					</saf-button>
				`)}
		</template>
	`,styles:l.css`
	${e.replaceComponentNamesWithSafAttribute(":host{align-items:center;border-left:var(--saf-line-width-thin) solid rgba(0,0,0,0);border-right:var(--saf-line-width-thin) solid var(--saf-color-interactive-border-tertiary-active);box-sizing:border-box;color:var(--saf-color-interactive-states-on-default);display:inline-flex;fill:currentcolor;font:var(--saf-type-body-default-md-strong-standard);grid-column:unset !important;min-height:42px;outline:none;padding:0 var(--saf-spacing-1) 0 var(--saf-spacing-4);user-select:none}.window-label{overflow:hidden;padding:var(--saf-spacing-2) 0;text-overflow:ellipsis;white-space:nowrap}.close-window-button{margin-left:auto}:host(:hover){background:var(--saf-color-interactive-states-background-hover);border-color:var(--saf-color-interactive-states-border-hover);border-style:solid;border-width:0 var(--saf-line-width-thin);color:var(--saf-color-interactive-on-tertiary-hover)}:host(:focus-within){background:var(--saf-color-interactive-background-default);border-color:rgba(0,0,0,0);box-shadow:var(--saf-drop-shadow-focus-flush);color:var(--saf-color-interactive-on-tertiary-default);margin-left:var(--saf-line-width-thick);margin-top:var(--saf-line-width-thick);min-height:var(--saf-spacing-10);padding-left:14px;z-index:1}:host(:focus-within) .window-label{outline:none;padding-top:6px}:host([disabled]),:host([disabled]:hover){background-color:var(--saf-color-interactive-disabled-subtle);border-color:var(--saf-color-border-subtle);color:var(--saf-color-interactive-on-disabled-subtle);cursor:not-allowed}:host([a11y-aria-selected=true]){background:var(--saf-color-interactive-background-default);border-color:var(--saf-color-interactive-border-tertiary-active);border-width:0 var(--saf-line-width-thin)}:host([a11y-aria-selected=true]),:host([a11y-aria-selected=true]:focus-within){color:var(--saf-color-interactive-states-on-default)}:host([disabled]:focus-within){outline:none}")}
`,registry:e.getRegistry()})),exports.safWindowConfig={events:{onClose:"close"}};
