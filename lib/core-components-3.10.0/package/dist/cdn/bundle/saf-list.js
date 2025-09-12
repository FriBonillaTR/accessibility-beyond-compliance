"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@saffron/config"),e=require("tslib"),s=require("./fast-element-DOTfrYFb.js"),l=require("./when-0aDJpnLk.js");class r extends s.FASTElement{constructor(){super(...arguments),this.inline=!1}}e.__decorate([s.attr({attribute:"order"})],r.prototype,"order",void 0),e.__decorate([s.attr({attribute:"size"})],r.prototype,"size",void 0),e.__decorate([s.attr({attribute:"list-style"})],r.prototype,"listStyle",void 0),e.__decorate([s.attr],r.prototype,"inline",void 0);exports.default=()=>r.define({name:t.getComponentName("saf-list"),template:s.html`<template
		size="${t=>t.size}"
		list-style="${t=>t.listStyle}"
		order="${t=>t.order||"unordered"}"
		inline="${t=>t.inline}"
	>
		${l.when(t=>"unordered"===t.order,s.html`<ul class="list" part="list">
				<slot></slot>
			</ul>`)}
		${l.when(t=>"ordered"===t.order,s.html`<ol class="list" part="list">
				<slot></slot>
			</ol>`)}
	</template> `,styles:s.css`
	${t.replaceComponentNamesWithSafAttribute('\ufeff:host{display:block;font:var(--saf-type-body-default-md-regular-standard);position:relative}:host ol,:host ul{display:flex;flex-direction:column;justify-content:var(--saf-list-inline-justify-content, initial);margin:var(--saf-spacing-0);padding-inline-start:var(--saf-spacing-6)}:host ::slotted(saf-list-item){margin-top:var(--saf-spacing-4)}:host([size=large]){font:var(--saf-type-body-default-lg-regular-standard)}:host([size=medium]){font:var(--saf-type-body-default-md-regular-standard)}:host([size=small]){font:var(--saf-type-body-default-sm-regular-standard)}:host([size=small]) ::slotted(saf-list-item){margin-top:var(--saf-spacing-2)}:host([order=ordered][list-style=decimal]) ol{list-style-type:decimal}:host([order=ordered][list-style=lower-alpha]) ol{list-style-type:lower-alpha}:host([order=ordered][list-style=lower-roman]) ol{list-style-type:lower-roman}:host([order=unordered][list-style=none]) ul{list-style-type:none}:host([order=unordered][list-style=circle]) ul{list-style-type:circle}:host([order=unordered][list-style=disc]) ul{list-style-type:disc}:host([order=unordered][list-style=square]) ul{list-style-type:square}:host([order=unordered][list-style=ticked]) ul{list-style-type:"✔"}:host([inline=true]) .list{flex-flow:var(--saf-list-inline-flex-dir, row) wrap;padding-inline-start:0}:host([inline=true]) ::slotted(saf-list-item){margin:var(--saf-list-inline-item-margin, 0 var(--saf-spacing-4) 0 0)}:host([inline=true]) ::slotted(saf-list-item:last-child){margin:0}:host([list-style=ticked]) ::slotted(saf-list-item){padding-inline-start:var(--saf-spacing-2)}:host([list-style=ticked]) ::slotted(saf-list-item)::marker{color:var(--saf-color-status-success-strong)}')}
`,registry:t.getRegistry()});
