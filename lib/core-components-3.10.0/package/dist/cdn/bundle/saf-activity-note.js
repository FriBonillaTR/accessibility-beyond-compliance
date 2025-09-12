"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("./fast-element-DOTfrYFb.js");class a extends t.FASTElement{}exports.default=()=>a.define({name:e.getComponentName("saf-activity-note"),template:t.html`
	<template role="listitem">
		<div class="note" part="note">
			<slot></slot>
		</div>
	</template>
`,styles:t.css`
	${e.replaceComponentNamesWithSafAttribute(":host{align-items:center;background-color:var(--saf-color-background-subtle);border-radius:var(--saf-border-radius-xs);color:var(--saf-color-text-heavy);display:block;font:var(--saf-type-body-default-sm-regular-standard);overflow-wrap:break-word;padding:var(--saf-spacing-2) var(--saf-spacing-4)}")}
`,registry:e.getRegistry()});
