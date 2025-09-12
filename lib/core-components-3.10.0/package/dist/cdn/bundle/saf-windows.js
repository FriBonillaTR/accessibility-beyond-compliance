"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("./define-CgQAavGn.js"),a=require("./saf-icon.js"),i=require("./saf-sr-only.js"),r=require("./define-DFHSE1N5.js"),s=require("tslib"),o=require("./tabs-CRv1sjr9.js"),d=require("./fast-element-DOTfrYFb.js"),l=require("./start-end-template-D7dQJgd3.js"),n=require("./slotted-cZBT0SIc.js"),u=require("./when-0aDJpnLk.js");require("./apply-mixins-CewQe2EQ.js"),require("./aria-global-CYzDgx1a.js"),require("./form-associated-DSP-KUNe.js"),require("@microsoft/fast-web-utilities"),require("./global-enums-58U8enSy.js"),require("./ref-BeTe_0iT.js"),require("./logger-vjs750p7.js"),require("@floating-ui/dom"),require("./a11y-DvNZtvTj.js"),require("./dom-helpers-DxoVHRyN.js");class p extends o.Tabs{constructor(){super(...arguments),this.addable=!0,this.addAriaLabel="Add new window"}add(){this.$emit("add")}}s.__decorate([d.attr({attribute:"addable",mode:"boolean"})],p.prototype,"addable",void 0),s.__decorate([d.attr({attribute:"add-aria-label"})],p.prototype,"addAriaLabel",void 0),s.__decorate([d.attr({attribute:"a11y-aria-label"})],p.prototype,"a11yAriaLabel",void 0);exports.default=()=>(r.SafTooltip(),t.SafButton(),a.default(),i.default(),p.define({name:e.getComponentName("saf-windows"),template:d.html`
		<div class="windows" part="windows">
			${l.startSlotTemplate()}
			<div class="tablist" part="tablist" role="tablist" aria-label=${e=>e.a11yAriaLabel}>
				<slot name="tab" ${n.slotted("tabs")}></slot>
				${u.when(e=>e.addable,d.html`
						<saf-tooltip anchor="add" part="add-tooltip"
							>${e=>e.addAriaLabel}</saf-tooltip
						>
						<saf-button
							nested-item
							id="add"
							class="add-window-button"
							part="add-window-button"
							appearance="tertiary"
							icon-only="true"
							@click="${e=>e.add()}"
							density="compact"
						>
							<saf-icon icon-name="plus"></saf-icon>
							<saf-sr-only>${e=>e.addAriaLabel}</saf-sr-only>
						</saf-button>
					`)}
			</div>
			${l.endSlotTemplate()}
		</div>
		<div class="tabpanel" part="tabpanel">
			<slot name="tabpanel" ${n.slotted("tabpanels")}></slot>
		</div>
	`,styles:d.css`
	${e.replaceComponentNamesWithSafAttribute(":host{display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr;height:100%;overflow:hidden auto}.windows{background:var(--saf-color-interactive-background-strong);display:inline-flex}.tablist{align-items:center;align-self:end;box-sizing:border-box;display:grid;grid-template-columns:repeat(auto-fill, minmax(160px, 1fr));grid-template-rows:auto;padding:0;position:relative;width:100%}.add-window-button{margin-left:var(--saf-spacing-1)}:host saf-button{width:42px}::slotted(saf-window:first-child){border-left:0}")}
`,registry:e.getRegistry()})),exports.safWindowsConfig={events:{onAdd:"add"}};
