"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@saffron/config"),e=require("tslib"),s=require("./metadata-item-Y-ohBFcu.js"),a=require("./fast-element-DOTfrYFb.js"),r=require("./slotted-cZBT0SIc.js");require("./start-end-template-D7dQJgd3.js"),require("./ref-BeTe_0iT.js"),require("./apply-mixins-CewQe2EQ.js");const o="sm";class i extends a.FASTElement{constructor(){super(...arguments),this.size=o}slottedMetadataItemsChanged(){if(this.$fastController.isConnected){if(void 0===this.slottedMetadataItems||0===this.slottedMetadataItems.length)return;const t=this.slottedMetadataItems[this.slottedMetadataItems.length-1];this.slottedMetadataItems.forEach(e=>{const s=e===t;this.setItemSeparator(e,s)})}}setItemSeparator(t,e){t instanceof s.MetadataItem&&(t.separator=!e)}}e.__decorate([a.attr],i.prototype,"size",void 0),e.__decorate([a.observable],i.prototype,"slottedMetadataItems",void 0);exports.default=()=>i.define({name:t.getComponentName("saf-metadata"),template:a.html`
		<template>
			<div class="content" part="content">
				<slot ${r.slotted({property:"slottedMetadataItems",filter:r.elements()})}></slot>
			</div>
		</template>
	`,styles:a.css`
	${t.replaceComponentNamesWithSafAttribute(":host{box-sizing:border-box;display:inline-block}.content{display:flex;flex-wrap:wrap}:host([size=xs]){font:var(--saf-type-body-default-xs-regular-standard)}:host([size=sm]){font:var(--saf-type-body-default-sm-regular-standard)}")}
`,registry:t.getRegistry()});
