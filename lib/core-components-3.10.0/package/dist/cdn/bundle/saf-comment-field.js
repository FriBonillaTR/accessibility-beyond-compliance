"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("tslib"),r=require("./fast-element-DOTfrYFb.js"),a=require("./start-end-template-D7dQJgd3.js");require("./ref-BeTe_0iT.js");class l extends r.FASTElement{constructor(){super(...arguments),this.ariaLabel="Post a reply"}}t.__decorate([r.attr({attribute:"aria-label"})],l.prototype,"ariaLabel",void 0);exports.default=()=>l.define({name:e.getComponentName("saf-comment-field"),template:r.html`
	<template role="region" aria-label="${e=>e.ariaLabel}">
		<div class="control" part="control" role="form">
			${a.startSlotTemplate()}
			<form>
				<slot></slot>
			</form>
			${a.endSlotTemplate()}
		</div>
	</template>
`,styles:r.css`
	${e.replaceComponentNamesWithSafAttribute(":host{display:block}.control{display:flex;gap:var(--saf-spacing-2);justify-content:center}.control form{width:360px}.end{display:flex;justify-content:flex-end;margin-inline-end:0;padding-top:var(--saf-spacing-7)}")}
`,registry:e.getRegistry()});
