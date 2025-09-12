"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@saffron/config"),e=require("tslib"),o=require("./global-enums-58U8enSy.js"),s=require("./dom-helpers-DxoVHRyN.js"),r=require("./fast-element-DOTfrYFb.js"),i=require("./slotted-cZBT0SIc.js");const a="horizontal",n="vertical";class l extends r.FASTElement{constructor(){super(...arguments),this.density=o.ComponentDensityEnum.inherit,this.role="group",this.orientation=a}slottedNodesChanged(){var e;(null===(e=this.slottedNodes)||void 0===e?void 0:e.length)&&(this.orientation===n?s.setAttributeOnChild(this,t.getComponentName("saf-button"),"group-item-vertical"):s.setAttributeOnChild(this,t.getComponentName("saf-button"),"group-item"))}}e.__decorate([r.attr({attribute:"aria-label"})],l.prototype,"ariaLabel",void 0),e.__decorate([r.attr],l.prototype,"density",void 0),e.__decorate([r.attr],l.prototype,"role",void 0),e.__decorate([r.attr],l.prototype,"orientation",void 0),e.__decorate([r.observable],l.prototype,"slottedNodes",void 0);exports.default=()=>l.define({name:t.getComponentName("saf-button-group"),template:r.html`
	<template aria-label="${t=>t.ariaLabel}" role="group" density="${t=>t.density}">
		<slot
			${i.slotted({property:"slottedNodes"})}
		></slot>
	</template>
`,styles:r.css`
	${t.replaceComponentNamesWithSafAttribute(':host{display:inline-flex}:host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=""]){--saf-density: 2}:host([orientation=vertical]){flex-direction:column}')}
`,registry:t.getRegistry()});
