"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("./fast-element-DOTfrYFb.js");class s extends t.FASTElement{}exports.default=()=>s.define({name:e.getComponentName("saf-list-item"),template:t.html`<template role="listitem" part="list-item">
		<slot></slot>
	</template> `,styles:t.css`
	${e.replaceComponentNamesWithSafAttribute(":host{color:var(--saf-color-text-strong);display:list-item;padding:var(--saf-spacing-0)}")}
`,registry:e.getRegistry()});
