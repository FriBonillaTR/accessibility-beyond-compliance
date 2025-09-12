"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("./saf-icon.js"),o=require("./saf-sr-only.js"),r=require("./define-DFHSE1N5.js"),i=require("tslib"),a=require("./fast-element-DOTfrYFb.js"),s=require("@microsoft/fast-web-utilities"),c=require("./when-0aDJpnLk.js");require("./logger-vjs750p7.js"),require("./global-enums-58U8enSy.js"),require("@floating-ui/dom"),require("./a11y-DvNZtvTj.js"),require("./dom-helpers-DxoVHRyN.js");class l extends a.FASTElement{constructor(){super(...arguments),this.scrollToId="top",this.yOffset=100,this.direction="ltr",this.tooltipText="Back to top",this.id="backToTop"}handleScroll(){clearTimeout(this.scrollTimeout),this.scrollTimeout=setTimeout(()=>{window.scrollY>this.yOffset?this.classList.add("show"):this.classList.remove("show")},250)}connectedCallback(){super.connectedCallback();const e=document.documentElement;e&&(e.style.scrollBehavior="smooth"),this.handleScroll=this.handleScroll.bind(this),window.addEventListener("scroll",this.handleScroll,{passive:!0})}disconnectedCallBack(){super.disconnectedCallback(),window.removeEventListener("scroll",this.handleScroll)}}i.__decorate([a.attr({attribute:"scroll-to-id"})],l.prototype,"scrollToId",void 0),i.__decorate([a.attr({attribute:"y-offset"})],l.prototype,"yOffset",void 0),i.__decorate([a.attr],l.prototype,"direction",void 0),i.__decorate([a.attr({attribute:"tooltip-text"})],l.prototype,"tooltipText",void 0),i.__decorate([a.attr({attribute:"a11y-aria-description"})],l.prototype,"a11yAriaDescription",void 0),i.__decorate([a.attr],l.prototype,"id",void 0);exports.default=()=>(t.default(),r.SafTooltip(),o.default(),l.define({name:e.getComponentName("saf-back-to-top"),template:a.html`
	<template class=${e=>e.direction===s.Direction.rtl?"rtl":""}>
		<a
			class="control"
			part="control"
			href=${e=>`#${e.scrollToId}`}
			id=${e=>e.id}
			aria-describedby=${e=>e.a11yAriaDescription?"a11y-aria-description":void 0}
		>
			<saf-icon icon-name="chevron-up" appearance="solid"></saf-icon>
			<saf-tooltip
				placement=${e=>e.direction===s.Direction.rtl?"right":"left"}
				anchor=${e=>e.id}
			>
				${e=>e.tooltipText}
			</saf-tooltip>
			<saf-sr-only>${e=>e.tooltipText}</saf-sr-only>
		</a>
		${c.when(e=>e.a11yAriaDescription,a.html`<span
				id="a11y-aria-description"
				class="a11y-aria-description"
				part="a11y-aria-description"
			>
				${e=>e.a11yAriaDescription}
			</span>`)}
	</template>
`,styles:a.css`
	${e.replaceComponentNamesWithSafAttribute('.smoothScroll{scroll-behavior:smooth}:host{bottom:40px;display:none;position:fixed;right:20px;z-index:var(--saf-z-index-fixed)}:host(.rtl){left:20px;right:initial}:host(.show){display:block}:host a{align-items:center;background:var(--saf-color-interactive-secondary-default);border:var(--saf-line-width-thin) solid var(--saf-color-interactive-border-secondary-default);border-radius:var(--saf-border-radius-circle);box-shadow:var(--saf-drop-shadow-level-3);color:var(--saf-color-interactive-on-secondary-default);display:flex;height:40px;justify-content:center;line-height:40px;text-decoration:none;width:40px}:host a:not([disabled]):hover::before{border:var(--saf-line-width-thick) solid var(--saf-color-interactive-border-secondary-hover);border-radius:inherit;content:"";height:calc(100% - 2px);position:absolute;width:calc(100% - 2px)}:host a:hover{background:var(--saf-color-interactive-secondary-hover);color:var(--saf-color-interactive-on-secondary-hover)}:host a:focus{box-shadow:var(--saf-drop-shadow-focus)}:host a:active{background:var(--saf-color-interactive-secondary-active);border-color:var(--saf-color-interactive-border-secondary-active)}:host a:active saf-icon{color:var(--saf-color-interactive-on-secondary-active)}:host .a11y-aria-description{display:none}')}
`,registry:e.getRegistry()}));
