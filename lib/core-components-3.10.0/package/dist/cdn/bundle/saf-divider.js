"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),r=require("tslib"),t=require("@microsoft/fast-web-utilities"),o=require("./fast-element-DOTfrYFb.js");const i="separator",s="presentation";class a extends o.FASTElement{constructor(){super(...arguments),this.role=i,this.orientation=t.Orientation.horizontal}}r.__decorate([o.attr],a.prototype,"role",void 0),r.__decorate([o.attr],a.prototype,"orientation",void 0);exports.default=()=>a.define({name:e.getComponentName("saf-divider"),template:o.html`
		<template
			role="${e=>e.role}"
			aria-orientation="${e=>e.role!==s?e.orientation:void 0}"
		>
			<slot></slot>
		</template>
	`,styles:o.css`
	${e.replaceComponentNamesWithSafAttribute(":host{--saf-divider-borderColor: var(--saf-color-border-stronger);--saf-divider-borderStyle: solid;--saf-divider-borderWidth: var(--saf-line-width-thin) 0 0 0;--saf-divider-size: 0;border-color:var(--saf-divider-borderColor);border-style:var(--saf-divider-borderStyle);border-width:var(--saf-divider-borderWidth);box-sizing:content-box;height:var(--saf-divider-size)}:host([role=presentation]){--saf-divider-borderColor: var(--saf-color-border-strong)}:host([orientation=horizontal]){display:block}:host([orientation=vertical]){--saf-divider-borderWidth: 0 0 0 var(--saf-line-width-thin);--saf-divider-size: 100%;display:inline-block}")}
`,registry:e.getRegistry()});
