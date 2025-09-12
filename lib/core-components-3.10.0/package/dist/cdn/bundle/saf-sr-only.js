"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("./fast-element-DOTfrYFb.js");class s extends t.FASTElement{}exports.default=()=>s.define({name:e.getComponentName("saf-sr-only"),template:t.html`
	<template id="${e=>e.id}">
		<slot></slot>
	</template>
`,styles:t.css`
	${e.replaceComponentNamesWithSafAttribute(":host{border:0;clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;left:-100vw;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}:host:dir(rtl){right:-100vw}")}
`,registry:e.getRegistry()});
