"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@saffron/config"),e=require("tslib"),a=require("./fast-element-DOTfrYFb.js");class s extends a.FASTElement{constructor(){super(...arguments),this.isCenter=!1,this.ariaTitleLevel=2}}e.__decorate([a.attr({attribute:"empty-state-title"})],s.prototype,"emptyStateTitle",void 0),e.__decorate([a.attr({attribute:"is-center",mode:"boolean"}),a.observable],s.prototype,"isCenter",void 0),e.__decorate([a.attr({attribute:"aria-title-level",mode:"fromView",converter:a.nullableNumberConverter})],s.prototype,"ariaTitleLevel",void 0);exports.default=()=>s.define({name:t.getComponentName("saf-empty-state"),template:a.html`
	<template ?is-center="${t=>t.isCenter?t.isCenter:void 0}">
		<slot name="icon"></slot>
		<div
			class="empty-state-title"
			part="empty-state-title"
			role="heading"
			aria-level="${t=>t.ariaTitleLevel}"
		>
			${t=>t.emptyStateTitle?t.emptyStateTitle:"Message title is 40 characters or less"}
		</div>
		<slot></slot>
		<slot name="actions"></slot>
	</template>
`,styles:a.css`
	${t.replaceComponentNamesWithSafAttribute(":host,::slotted([slot=actions]){align-items:flex-start;display:flex;flex-direction:column;max-width:488px}:host([is-center]),:host([is-center]) ::slotted([slot=actions]){align-items:center;margin:0 auto;text-align:center}::slotted(saf-icon),.empty-state-title,::slotted(p){margin:0 0 var(--saf-spacing-4) 0}.empty-state-title{font:var(--saf-type-heading-default-xl-strong-standard)}")}
`,registry:t.getRegistry()});
