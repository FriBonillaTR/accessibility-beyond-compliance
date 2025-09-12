"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),a=require("./saf-icon.js"),t=require("./option-3u3pMIm5.js"),s=require("./fast-element-DOTfrYFb.js"),o=require("./start-end-template-D7dQJgd3.js"),r=require("./when-0aDJpnLk.js"),i=require("./slotted-cZBT0SIc.js");require("tslib"),require("./logger-vjs750p7.js"),require("@microsoft/fast-web-utilities"),require("./apply-mixins-CewQe2EQ.js"),require("./aria-global-CYzDgx1a.js"),require("./global-enums-58U8enSy.js"),require("./ref-BeTe_0iT.js");exports.default=()=>(a.default(),t.Option.define({name:e.getComponentName("saf-option"),template:s.html`
		<template
			aria-checked="${e=>e.ariaChecked}"
			aria-disabled="${e=>e.ariaDisabled||e.parentNode.disabled}"
			aria-posinset="${e=>e.ariaPosInSet}"
			aria-selected="${e=>e.ariaSelected||e.selected}"
			aria-setsize="${e=>e.ariaSetSize}"
			density="${e=>e.density}"
			aria-current="${e=>e.ariaCurrentComputed}"
			?disabled="${e=>e.disabled}"
			role="option"
		>
			<div class="root" part="root">
				${r.when(e=>e.isMultiple&&"true"===e.ariaSelected,s.html`
						<saf-icon
							class="square-check-icon"
							part="square-check-icon"
							icon-name="square-check"
							appearance="solid"
							size="16"
						></saf-icon>
					`)}
				${r.when(e=>e.isMultiple&&"true"!==e.ariaSelected,s.html`
						<saf-icon
							class="square-icon"
							part="square-icon"
							icon-name="square"
							size="16"
						></saf-icon>
					`)}
				${r.when(e=>!e.isMultiple,s.html` ${o.startSlotTemplate()} `)}
				<span class="content" part="content">
					<slot ${i.slotted("content")}></slot>
				</span>
				${o.endSlotTemplate()}
			</div>
		</template>
	`,styles:s.css`
	${e.replaceComponentNamesWithSafAttribute(':host{align-items:center;box-sizing:border-box;color:var(--saf-color-interactive-states-on-default);display:flex;fill:currentcolor;flex:0 0 auto;outline:none;position:relative;scroll-margin-bottom:4px;scroll-margin-top:6px;user-select:none;width:100%}:host::before{border:var(--saf-line-width-thick) solid var(--saf-color-interactive-states-border-default);content:"";inset:-1px;position:absolute}:host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=""]){--saf-density: 2}:host,:host::before{border-radius:var(--saf-border-radius-xs)}:host(:not([disabled]):active),:host(:not([disabled])[aria-selected=true]){background:var(--saf-color-interactive-states-background-active);color:var(--saf-color-interactive-states-on-active)}:host(:not([disabled]):active)::before,:host(:not([disabled])[aria-selected=true])::before{border-color:var(--saf-color-interactive-states-border-active)}.root{align-items:center;box-sizing:border-box;display:flex;font:var(--saf-listbox-option-font, var(--saf-type-body-default-md-regular-standard));min-height:var(--saf-listbox-option-min-height, 40px);padding:var(--saf-listbox-option-padding, var(--saf-spacing-2) var(--saf-spacing-3));width:100%}:host::part(square-icon),:host::part(square-check-icon){margin-inline-end:var(--saf-spacing-2)}:host::part(square-icon){color:var(--saf-color-interactive-on-tertiary-default);font:var(--saf-type-icon-default-md)}:host::part(square-check-icon){color:var(--saf-color-interactive-secondary-active);font:var(--saf-type-icon-strong-md)}:host([disabled]),:host([disabled])::part(square-icon),:host([disabled])::part(square-check-icon){color:var(--saf-color-interactive-disabled-strong);cursor:not-allowed}.content{grid-column-start:2;justify-self:start;overflow:hidden;padding-inline-end:var(--saf-spacing-2);text-overflow:ellipsis;word-break:break-word}:host(:focus)::before,:host([data-focus=true])::before{box-shadow:var(--saf-drop-shadow-focus);z-index:var(--saf-z-index-focus)}:host(:not([disabled]):hover){background:var(--saf-color-interactive-states-background-hover);color:var(--saf-color-interactive-states-on-hover)}:host(:not([disabled]):hover)::before{border-color:var(--saf-color-interactive-states-border-hover)}::slotted([slot=start]),::slotted([slot=end]){display:flex}::slotted([slot=start]):not(saf-icon),::slotted([slot=end]):not(saf-icon){color:inherit}::slotted([slot=start]){margin-inline-end:11px}::slotted([slot=end]){margin-inline-start:11px}@container style(--saf-density: 0){.root{--saf-listbox-option-font: var(--saf-type-body-default-md-regular-standard);--saf-listbox-option-min-height: 40px;--saf-listbox-option-padding: var(--saf-spacing-2) var(--saf-spacing-3)}}@container style(--saf-density: 1){.root{--saf-listbox-option-font: var(--saf-type-body-default-md-regular-compact);--saf-listbox-option-min-height: 32px;--saf-listbox-option-padding: var(--saf-spacing-1) var(--saf-spacing-3)}}@supports(-moz-appearance: none) or (stroke-color: transparent){.root{--saf-conditional-line-height:calc(var(--saf-line-height-lg)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-md)*var(--saf-density)*(2 - var(--saf-density)));--saf-conditional-padding-block:calc(var(--saf-spacing-2)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-spacing-1)*var(--saf-density)*(2 - var(--saf-density)));min-height:calc(40px*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + 32px*var(--saf-density)*(2 - var(--saf-density)));--saf-listbox-option-font: var(--saf-font-weight-regular) var(--saf-font-size-md) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3);--saf-listbox-option-min-height: var(--saf-conditional-min-height);--saf-listbox-option-padding: var(--saf-conditional-padding-block) var(--saf-spacing-3)}}')}
`,registry:e.getRegistry()}));
