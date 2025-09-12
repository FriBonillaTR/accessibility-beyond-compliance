"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("./fast-element-DOTfrYFb.js");class s extends t.FASTElement{}exports.default=()=>s.define({name:e.getComponentName("saf-product-header-item"),template:t.html`
	<template role="listitem">
		<slot></slot>
	</template>
`,styles:t.css`
	${e.replaceComponentNamesWithSafAttribute(":host{display:inline-block}::slotted(*){box-sizing:border-box}::slotted(saf-badge){margin-right:8px;white-space:nowrap}")}
`,registry:e.getRegistry()});
