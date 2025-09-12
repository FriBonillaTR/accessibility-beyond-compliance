"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("tslib"),r=require("./breadcrumb-item-DFqGjBlb.js"),s=require("./fast-element-DOTfrYFb.js"),a=require("./start-end-template-D7dQJgd3.js"),l=require("./slotted-cZBT0SIc.js");require("./anchor-CXrwbHEl.js"),require("./apply-mixins-CewQe2EQ.js"),require("./aria-global-CYzDgx1a.js"),require("./global-enums-58U8enSy.js"),require("./ref-BeTe_0iT.js");class i extends s.FASTElement{slottedBreadcrumbItemsChanged(){var e;if(!this.$fastController.isConnected||!(null===(e=this.slottedBreadcrumbItems)||void 0===e?void 0:e.length))return;const t=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach(e=>{if(e instanceof r.BreadcrumbItem){const r=e===t;e.separator=!r,r?e.setAttribute("data-aria-current","page"):e.removeAttribute("data-aria-current")}})}}t.__decorate([s.observable],i.prototype,"slottedBreadcrumbItems",void 0);exports.default=()=>i.define({name:e.getComponentName("saf-breadcrumb"),template:s.html`
		<template role="navigation">
			${a.startSlotTemplate()}
			<span role="list" class="list" part="list">
				<slot ${l.slotted({property:"slottedBreadcrumbItems",filter:l.elements()})}></slot>
			</span>
			${a.endSlotTemplate()}
		</template>
	`,styles:s.css`
	${e.replaceComponentNamesWithSafAttribute(":host{box-sizing:border-box;display:inline-block}.list{display:flex;flex-wrap:wrap}")}
`,registry:e.getRegistry()});
