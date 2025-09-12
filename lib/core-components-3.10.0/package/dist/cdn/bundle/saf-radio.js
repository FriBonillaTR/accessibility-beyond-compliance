"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),o=require("./radio-Cv2oPe0Z.js"),a=require("./fast-element-DOTfrYFb.js"),r=require("./slotted-cZBT0SIc.js"),t=require("./when-0aDJpnLk.js");require("tslib"),require("@microsoft/fast-web-utilities"),require("./form-associated-DSP-KUNe.js"),require("./string-helpers-BBo17rr2.js");const i=e=>{var o;return e.nodeType!==Node.TEXT_NODE||!!(null===(o=e.nodeValue)||void 0===o?void 0:o.trim().length)};exports.default=()=>o.Radio.define({name:e.getComponentName("saf-radio"),template:a.html`
		<template
			current-checked="${e=>e.currentChecked}"
			@click="${(e,o)=>e.clickHandler(o.event)}"
		>
			<div class="root" part="root">
				<input
					id="${e=>e.internalId}"
					part="control"
					class="control ${e=>[e.checked&&"checked",e.readOnly&&"readonly"].filter(Boolean).join(" ")}"
					:checked="${e=>e.checked}"
					type="radio"
					aria-label="${e=>e.a11yAriaLabel?e.a11yAriaLabel:e.ariaLabel?e.ariaLabel:void 0}"
					aria-labelledby="${e=>e.a11yAriaLabel?void 0:e.ariaLabelledbyIds}"
					aria-disabled="${e=>e.disabled}"
					aria-describedby="${e=>e.a11yAriaDescription?"a11y-aria-description":void 0}"
					tabindex="${e=>e.tabIndexAttr}"
					?disabled="${e=>e.disabled}"
				/>
				<slot name="checked-indicator">
					<div part="checked-indicator" class="checked-indicator"></div>
				</slot>
				<label
					for="${e=>e.internalId}"
					id="label-${e=>e.internalId}"
					part="label"
					class="${e=>{var o;return["label",!(null===(o=e.defaultSlottedNodes)||void 0===o?void 0:o.length)&&"label__hidden"].filter(Boolean).join(" ")}}"
				>
					<slot
						${r.slotted({property:"defaultSlottedNodes",filter:i})}
					></slot>
				</label>
				${t.when(e=>e.a11yAriaDescription,a.html`<span
						id="a11y-aria-description"
						class="a11y-aria-description"
						part="a11y-aria-description"
					>
						${e=>e.a11yAriaDescription}
					</span>`)}
			</div>
		</template>
	`,styles:a.css`
	${e.replaceComponentNamesWithSafAttribute("button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:host{--saf-radio-icon-size: 6px;--saf-radio-icon-offset: calc((var(--saf-radio-icon-size) + var(--saf-line-width-thin)));--saf-radio-size: 20px;display:contents;font:var(--saf-type-body-compact-default-md);position:relative}.root{display:inline-flex;position:relative}:host .control{align-items:center;appearance:none;background:var(--saf-color-interactive-background-default);border:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);border-radius:var(--saf-border-radius-circle);box-sizing:border-box;height:var(--saf-radio-size);outline:none;position:relative;user-select:none;width:var(--saf-radio-size)}.label{align-self:flex-end;color:var(--saf-color-text-heavy);font:var(--saf-type-body-default-md-regular-compact);margin-inline-end:var(--saf-spacing-4);padding-inline-start:var(--saf-spacing-2)}.label__hidden{display:none}.control,slot[name=checked-indicator]{flex-shrink:0}slot[name=checked-indicator]{border-radius:100%;display:inline-block;height:var(--saf-radio-icon-size);opacity:0;pointer-events:none;position:absolute;transform:translate(var(--saf-radio-icon-offset), var(--saf-radio-icon-offset));width:var(--saf-radio-icon-size)}:host .control:focus{box-shadow:var(--saf-drop-shadow-focus)}:host([disabled]) .control,:host([disabled]) .control.checked{background:var(--saf-color-interactive-disabled-subtle);border-color:var(--saf-color-interactive-border-disabled-default)}:host([disabled]) .label{color:var(--saf-color-interactive-disabled-strong)}:host .control.checked{background-color:var(--saf-color-interactive-secondary-active);border-color:var(--saf-color-interactive-border-secondary-active)}:host .control.checked+slot[name=checked-indicator]{background-color:var(--saf-color-interactive-on-secondary-active);opacity:1}:host([disabled]) .control.checked+slot[name=checked-indicator]{background-color:var(--saf-color-interactive-on-disabled-subtle)}:host([readonly]) .control,:host([readonly]) .control.checked{background:var(--saf-color-interactive-read-only-subtle)}:host([readonly]) .control.checked+slot[name=checked-indicator]{background-color:var(--saf-color-interactive-read-only-strong)}:host .control:not([disabled]):hover{background-color:var(--saf-color-interactive-secondary-hover);border:var(--saf-line-width-thick) solid var(--saf-color-interactive-border-secondary-hover)}:host .control.checked:not([disabled]):hover{background-color:var(--saf-color-interactive-secondary-hover);border-color:var(--saf-color-interactive-border-secondary-hover)}:host .control.checked:not([disabled]):hover+slot[name=checked-indicator]{background-color:var(--saf-color-interactive-on-secondary-hover)}:host .a11y-aria-description{display:none}")}
`,shadowOptions:{delegatesFocus:!0},registry:e.getRegistry()}),exports.safRadioConfig={events:{onClick:"click"}};
