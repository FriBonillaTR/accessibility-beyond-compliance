"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var a=require("@saffron/config"),e=require("./saf-icon.js"),r=require("tslib"),t=require("./fast-element-DOTfrYFb.js"),s=require("./when-0aDJpnLk.js");require("./logger-vjs750p7.js");class o extends t.FASTElement{constructor(){super(...arguments),this.focusable=!0,this.pausedAriaLabel="Paused",this.infoAriaLabel="Info",this.successAriaLabel="Success",this.errorAriaLabel="Error",this.warningAriaLabel="Warning"}}r.__decorate([t.attr({attribute:"message"})],o.prototype,"message",void 0),r.__decorate([t.attr],o.prototype,"status",void 0),r.__decorate([t.attr({attribute:"aria-labelledby"})],o.prototype,"ariaLabelledBy",void 0),r.__decorate([t.attr({mode:"boolean",attribute:"focusable"})],o.prototype,"focusable",void 0),r.__decorate([t.attr({attribute:"aria-role"})],o.prototype,"ariaRole",void 0),r.__decorate([t.attr({attribute:"paused-aria-label"}),t.observable],o.prototype,"pausedAriaLabel",void 0),r.__decorate([t.attr({attribute:"info-aria-label"}),t.observable],o.prototype,"infoAriaLabel",void 0),r.__decorate([t.attr({attribute:"success-aria-label"}),t.observable],o.prototype,"successAriaLabel",void 0),r.__decorate([t.attr({attribute:"error-aria-label"}),t.observable],o.prototype,"errorAriaLabel",void 0),r.__decorate([t.attr({attribute:"warning-aria-label"}),t.observable],o.prototype,"warningAriaLabel",void 0);exports.default=()=>(e.default(),o.define({name:a.getComponentName("saf-status"),template:t.html`<template
		role="status"
		aria-live="polite"
		aria-labelledby="${a=>a.ariaLabelledBy}"
		focusable="${a=>a.focusable}"
		autofocus="${a=>a.autofocus}"
		:status="${a=>a.status}"
		paused-aria-label="${a=>a.pausedAriaLabel}"
		info-aria-label="${a=>a.infoAriaLabel}"
		success-aria-label="${a=>a.successAriaLabel}"
		error-aria-label="${a=>a.errorAriaLabel}"
		warning-aria-label="${a=>a.warningAriaLabel}"
	>
		${s.when(a=>"paused"===a.status,t.html`<saf-icon
				part="paused-icon"
				icon-name="circle-xmark"
				appearance="solid"
				color="var(--saf-color-status-neutral-strong)"
				aria-label="${a=>a.pausedAriaLabel}"
				presentation="false"
			>
			</saf-icon> `)}
		${s.when(a=>"info"===a.status,t.html`<saf-icon
				part="info-icon"
				icon-name="circle-info"
				appearance="solid"
				color="var(--saf-color-status-info-strong)"
				aria-label="${a=>a.infoAriaLabel}"
				presentation="false"
			>
			</saf-icon> `)}
		${s.when(a=>"success"===a.status,t.html`<saf-icon
				part="success-icon"
				icon-name="circle-check"
				appearance="solid"
				color="var(--saf-color-status-success-strong)"
				aria-label="${a=>a.successAriaLabel}"
				presentation="false"
			>
			</saf-icon> `)}
		${s.when(a=>"error"===a.status,t.html`<saf-icon
				part="error-icon"
				icon-name="hexagon-exclamation"
				appearance="solid"
				color="var(--saf-color-status-error-strong)"
				aria-label="${a=>a.errorAriaLabel}"
				presentation="false"
			>
			</saf-icon> `)}
		${s.when(a=>"warning"===a.status,t.html`<saf-icon
				part="warning-icon"
				icon-name="warning"
				appearance="solid"
				color="var(--saf-color-status-warning-strong)"
				aria-label="${a=>a.warningAriaLabel}"
				presentation="false"
			>
			</saf-icon> `)}
		<span part="message" class="message">${a=>a.message} </span>
	</template> `,styles:t.css`
	${a.replaceComponentNamesWithSafAttribute(":host{align-items:center;color:var(--saf-color-status-neutral-strong);display:flex;font:var(--saf-type-body-default-sm-strong-standard);gap:var(--saf-spacing-1);margin-block-start:var(--saf-spacing-2)}:host([status=paused]){color:var(--saf-color-status-neutral-strong)}:host([status=info]){color:var(--saf-color-status-information-strong)}:host([status=success]){color:var(--saf-color-status-success-strong)}:host([status=error]){color:var(--saf-color-status-error-strong)}:host([status=warning]){color:var(--saf-color-status-warning-strong)}svg{color:inherit;fill:inherit;flex:0 0 auto;margin-top:var(--saf-spacing-05)}span{flex-grow:1}")}
`,registry:a.getRegistry()}));
