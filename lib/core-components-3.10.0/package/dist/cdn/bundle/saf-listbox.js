"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),s=require("./listbox-BFi_umEM.js"),t=require("./fast-element-DOTfrYFb.js"),a=require("./slotted-cZBT0SIc.js");require("tslib"),require("@microsoft/fast-web-utilities"),require("./option-3u3pMIm5.js"),require("./apply-mixins-CewQe2EQ.js"),require("./start-end-template-D7dQJgd3.js"),require("./ref-BeTe_0iT.js"),require("./aria-global-CYzDgx1a.js"),require("./global-enums-58U8enSy.js"),require("./dom-helpers-DxoVHRyN.js");exports.default=()=>s.Listbox.define({name:e.getComponentName("saf-listbox"),template:t.html`
		<template
			density="${e=>e.density}"
			aria-labelledby="${e=>e.ariaLabelledBy}"
			aria-label="${e=>e.ariaLabel}"
			aria-activedescendant="${e=>e.ariaActiveDescendant}"
			aria-multiselectable="${e=>e.ariaMultiSelectable}"
			role="listbox"
			tabindex="${e=>e.disabled?null:"0"}"
			@click="${(e,s)=>e.clickHandler(s.event)}"
			@focusin="${(e,s)=>e.focusinHandler(s.event)}"
			@keydown="${(e,s)=>e.keydownHandler(s.event)}"
			@mousedown="${(e,s)=>e.mousedownHandler(s.event)}"
		>
			<slot
				${a.slotted({filter:s.Listbox.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
			></slot>
		</template>
	`,styles:t.css`
	${e.replaceComponentNamesWithSafAttribute(':host{--saf-listbox-heightMultiplier: 10;--saf-listbox-designUnit: 4;--saf-listbox-strokeWidth: 1;background:var(--saf-color-background-default);border:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);border-radius:var(--saf-border-radius-sm);box-shadow:var(--saf-drop-shadow-level-2);box-sizing:border-box;display:flex;flex-direction:column;padding:var(--saf-spacing-1);width:100%;z-index:var(--saf-z-index-dropdown)}:host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=""]){--saf-density: 2}:host([hidden]){display:none !important}:host([disabled]) ::slotted(*){background:var(--saf-color-interactive-background-default);border:var(--saf-line-width-thin) solid rgba(0,0,0,0);color:var(--saf-color-interactive-disabled-strong);cursor:not-allowed;padding:0 var(--saf-spacing-3) 0 11px;pointer-events:none}:host([size]){max-height:calc((var(--saf-listbox-size)*var(--saf-listbox-heightMultiplier)*var(--saf-listbox-designUnit) + (var(--saf-listbox-designUnit) + var(--saf-listbox-strokeWidth))*2)*1px);overflow-y:auto;overscroll-behavior:contain}:host(:not([disabled]):focus-visible){box-shadow:var(--saf-drop-shadow-level-2),var(--saf-drop-shadow-focus);outline:none}')}
`,registry:e.getRegistry()}),exports.safListboxConfig={events:{onClick:"click"}};
