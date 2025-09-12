"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var a=require("@saffron/config"),e=require("./saf-icon.js"),t=require("./text-field-CaPvWISP.js"),o=require("./fast-element-DOTfrYFb.js"),r=require("./when-0aDJpnLk.js"),s=require("./ref-BeTe_0iT.js"),i=require("./slotted-cZBT0SIc.js");require("tslib"),require("./logger-vjs750p7.js"),require("./a11y-DvNZtvTj.js"),require("./apply-mixins-CewQe2EQ.js"),require("./start-end-template-D7dQJgd3.js"),require("./aria-global-CYzDgx1a.js"),require("./form-associated-DSP-KUNe.js"),require("@microsoft/fast-web-utilities"),require("./global-enums-58U8enSy.js"),require("./string-helpers-BBo17rr2.js");exports.default=()=>(e.default(),t.TextField.define({name:a.getComponentName("saf-text-field"),template:o.html`<template
		density="${a=>a.density}"
		is-success="${a=>a.isSuccess}"
		invalid="${a=>a.invalid}"
		label="${a=>a.label?a.label:null}"
		instructional-text="${a=>a.instructionalText?a.instructionalText:null}"
		optional-text="${a=>a.optionalText?a.optionalText:null}"
		success-aria-label="${a=>a.successAriaLabel}"
		error-aria-label="${a=>a.errorAriaLabel}"
	>
		<div class="label-container" part="label-container">
			<label for="${a=>a.id}" class="label" part="label" id="label-${a=>a.id}">
				${a=>a.label}${r.when(a=>a.required,o.html`<span class="required-text" part="required-text" aria-hidden="true"
						>${a=>"*"===a.requiredText?`${a.requiredText}`:` ${a.requiredText}`}
					</span>`)}
			</label>
			<slot class="help-text" part="help-text" name="label-end"></slot>
			<span class="optional-text" part="optional-text" id="optional-${a=>a.id}">
				${a=>a.optionalText}
			</span>
			<p
				class="instructional-text"
				part="instructional-text"
				id="instructional-${a=>a.id}"
			>
				${a=>a.instructionalText}
			</p>
		</div>
		<div part="root" class="root">
			<slot name="start"></slot>
			<input
				id="${a=>a.id}"
				name="${a=>a.name}"
				class="${a=>a.invalid?"invalid":"valid"} control"
				@input="${a=>a.handleTextInput()}"
				@change="${a=>a.handleChange()}"
				part="control"
				:invalid="${a=>a.invalid}"
				:inputmode="${a=>a.inputMode}"
				:placeholder="${a=>{var e;return null!==(e=a.placeholder)&&void 0!==e?e:""}}"
				autocomplete="${a=>a.autocomplete}"
				aria-atomic="${a=>a.ariaAtomic}"
				aria-autocomplete="${a=>a.ariaAutoComplete}"
				aria-busy="${a=>a.ariaBusy}"
				aria-controls="${a=>a.ariaControls}"
				aria-current="${a=>a.ariaCurrent}"
				aria-describedby="${a=>a.ariaDescribedbyIds.length>0?a.ariaDescribedbyIds:null}"
				aria-details="${a=>a.ariaDetails}"
				aria-disabled="${a=>a.ariaDisabled}"
				aria-flowto="${a=>a.ariaFlowto}"
				aria-haspopup="${a=>a.ariaHaspopup}"
				aria-hidden="${a=>a.ariaHidden}"
				aria-invalid="${a=>a.ariaInvalid||Boolean(a.invalid)}"
				aria-keyshortcuts="${a=>a.ariaKeyshortcuts}"
				aria-label="${a=>a.ariaLabel}"
				aria-labelledby="${a=>a.ariaLabelledby?a.ariaLabelledby:a.ariaLabelledbyIds}"
				aria-live="${a=>a.ariaLive}"
				aria-owns="${a=>a.ariaOwns}"
				aria-relevant="${a=>a.ariaRelevant}"
				aria-roledescription="${a=>a.ariaRoledescription}"
				?autofocus="${a=>a.autofocus}"
				?disabled="${a=>a.disabled}"
				?readonly="${a=>a.readOnly}"
				?required="${a=>a.required}"
				?spellcheck="${a=>a.spellcheck}"
				list="${a=>a.list}"
				maxlength="${a=>a.maxlength}"
				minlength="${a=>a.minlength}"
				name="${a=>a.name}"
				pattern="${a=>a.pattern}"
				size="${a=>a.size}"
				tabindex="${a=>a.disabled?null:0}"
				type="${a=>a.type}"
				validation-message="${a=>a.validationMessage}"
				enterkeyhint="${a=>a.enterKeyHint}"
				:value="${a=>a.value}"
				:is-success="${a=>a.isSuccess&&!a.invalid}"
				${s.ref("control")}
			/>
			<slot name="end"></slot>

			<slot
				name="data"
				${i.slotted({property:"slottedData",filter:i.elements("datalist")})}
			></slot>

			<div class="dataLists" ${s.ref("dataLists")}></div>

			${r.when(a=>a.a11yAriaDescription,o.html` <span
					class="a11y-aria-description"
					part="a11y-aria-description"
					id="a11y-aria-description"
				>
					${a=>a.a11yAriaDescription}
				</span>`)}
		</div>
		${r.when(a=>a.isSuccess&&!a.invalid,o.html`
				<div class="validation success" part="success">
					<slot id="status-${a=>a.id}" name="success">
						<saf-icon
							class="success-icon"
							part="success-icon"
							icon-name="circle-check"
							appearance="solid"
							color="var(--saf-color-status-success-strong)"
							aria-label="${a=>a.successAriaLabel}"
							presentation="false"
						>
						</saf-icon>
						<span part="message" class="message"> ${a=>a.validationMessage} </span>
					</slot>
				</div>
			`)}
		${r.when(a=>a.invalid,o.html`
				<div class="validation error" part="error">
					<slot id="status-${a=>a.id}" name="error">
						<saf-icon
							class="error-icon"
							part="error-icon"
							icon-name="hexagon-exclamation"
							appearance="solid"
							color="var(--saf-color-status-error-strong)"
							aria-label="${a=>a.errorAriaLabel}"
							presentation="false"
							size="16"
						>
						</saf-icon>
						<span part="message" class="message"> ${a=>a.validationMessage} </span>
					</slot>
				</div>
			`)}
	</template> `,styles:o.css`
	${a.replaceComponentNamesWithSafAttribute('button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:host{--saf-form-label-container-margin: 0 0 var(--saf-spacing-2) 0;--saf-form-label-text-decoration: none;color:var(--saf-color-text-heavy)}.label{font:var(--saf-form-label-font, var(--saf-type-body-default-md-strong-standard));text-decoration:var(--saf-input-label-text-decoration)}.instructional-text,.optional-text{font:var(--saf-form-label-instructional-text-font, var(--saf-type-body-default-sm-regular-standard))}.instructional-text{display:block;margin:0}.label-container{margin:var(--saf-form-label-container-margin);text-align:start}:host(:not([label],[instructional-text],[optional-text])) .label-container,:host(:not([label])) .label,:host(:not([instructional-text])) .instructional-text,:host(:not([optional-text])) .optional-text,.instructional-text:empty{display:none}:host([disabled]) .label,:host([disabled]) .instructional-text,:host([disabled]) .optional-text{color:var(--saf-color-interactive-disabled-strong)}:host([readonly]) .label,:host([readonly]) .instructional-text,:host([readonly]) .optional-text{color:var(--saf-color-text-heavy)}:host([product-header-item]){color:var(--saf-color-text-knockout)}:host([product-header-item][disabled]) .label,:host([product-header-item][disabled]) .instructional-text{color:var(--saf-product-header-color-interactive-on-disabled-subtle)}:host([product-header-item][readonly]) .label,:host([product-header-item][readonly]) .instructional-text{color:var(--saf-product-header-color-interactive-on-read-only-subtle)}@container style(--saf-density: 0){.label{--saf-form-label-font: var(--saf-type-body-default-md-strong-standard)}.instructional-text,.optional-text{--saf-form-label-instructional-text-font: var(--saf-type-body-default-sm-regular-standard)}}@container style(--saf-density: 1){.label{--saf-form-label-font: var(--saf-type-body-default-md-strong-compact)}.instructional-text,.optional-text{--saf-form-label-instructional-text-font: var(--saf-type-body-default-sm-regular-compact)}}@supports(-moz-appearance: none) or (stroke-color: transparent){.label{--saf-conditional-line-height:calc(var(--saf-line-height-lg)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-md)*var(--saf-density)*(2 - var(--saf-density)));--saf-form-label-font: var(--saf-font-weight-semibold) var(--saf-font-size-md) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}.instructional-text,.optional-text{--saf-conditional-line-height:calc(var(--saf-line-height-md)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-sm)*var(--saf-density)*(2 - var(--saf-density)));--saf-form-label-instructional-text-font: var(--saf-font-weight-regular) var(--saf-font-size-sm) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}}:host{display:block;user-select:none}:host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=""]){--saf-density: 2}.root{align-items:stretch;background:var(--saf-color-interactive-background-default);border:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);border-radius:var(--saf-border-radius-xs);color:var(--saf-color-text-heavy);display:flex;font:var(--saf-text-field-font, var(--saf-type-body-default-md-regular-standard));height:var(--saf-text-field-height, 40px);position:relative}.root,.control{width:100%}.control{appearance:none;background:rgba(0,0,0,0);border:none;box-sizing:border-box;height:100%;padding:var(--saf-text-field-control-padding, var(--saf-spacing-2) var(--saf-spacing-3))}.control:-webkit-autofill,.control:-webkit-autofill:hover,.control:-webkit-autofill:focus{border-radius:var(--saf-border-radius-xs)}.control:focus-visible{outline:none}.control::placeholder{color:var(--saf-color-text-subtle);opacity:var(--saf-opacity-7)}:host([disabled]) .control::placeholder{color:var(--saf-color-interactive-on-disabled-subtle)}:host([readonly]) .control::placeholder{color:var(--saf-color-text-heavy)}.start,.control,.end{align-self:center}.start,.end{fill:currentcolor;margin:auto}:host(:focus-visible){outline:none}:host([readOnly]) .root{background-color:var(--saf-color-interactive-read-only-subtle);border-color:var(--saf-color-interactive-border-read-only-default)}:host([disabled]) .root{background-color:var(--saf-color-interactive-disabled-subtle);border-color:var(--saf-color-interactive-border-disabled-default)}:host([disabled]) .root,:host([disabled]) .control{color:var(--saf-color-interactive-on-disabled-subtle);cursor:not-allowed}.root:has(.control:focus){box-shadow:var(--saf-drop-shadow-focus)}:host(:not([disabled])[invalid=true]) .root:has(.control:focus){box-shadow:var(--saf-drop-shadow-error-focus)}:host([disabled]) .root,:host([invalid=true]) .root{box-shadow:none}:host(:not([disabled],[readonly])) .root:hover{outline:var(--saf-line-width-thick) solid var(--saf-color-interactive-border-secondary-hover);outline-offset:-2px}:host([embedded-item]:not([disabled],[readonly])) .root:hover{outline-offset:-1px}:host([embedded-item]) .root{padding-inline-end:var(--saf-text-field-embedded-item-padding-inline-end, calc(var(--saf-spacing-10) - 2px))}:host([embedded-item][readonly]) .root{--saf-text-field-embedded-item-padding-inline-end: 0}:host(:not([disabled])[invalid=true]) .root{box-shadow:var(--saf-drop-shadow-error)}:host(:not([disabled])[is-success=true][invalid=false]) .root{box-shadow:var(--saf-drop-shadow-success)}:host(:not([disabled])[is-success=true][invalid=false]) .root:has(.control:focus){box-shadow:var(--saf-drop-shadow-success-focus)}:host .validation{display:flex;font:var(--saf-text-field-validation-font, var(--saf-type-body-default-sm-strong-standard));gap:var(--saf-spacing-1);margin-top:var(--saf-spacing-2)}:host .validation.error{color:var(--saf-color-status-error-strong)}:host .validation.success{color:var(--saf-color-status-success-strong)}:host .a11y-aria-description{display:none}:host input::-webkit-calendar-picker-indicator{color:rgba(0,0,0,0)}:host ::slotted([slot=label-end]){margin-left:var(--saf-spacing-05)}:host([product-header-item]) .root{border-color:var(--saf-product-header-color-border-stronger)}:host([product-header-item]:not([disabled],[readonly])) .root:hover{outline:var(--saf-line-width-thick) solid var(--saf-product-header-color-border-stronger)}:host([product-header-item][disabled]) .root{background-color:var(--saf-product-header-color-interactive-disabled-subtle);border-color:var(--saf-product-header-color-interactive-disabled-subtle)}:host([product-header-item][disabled]) .control,:host([product-header-item][disabled]) .control::placeholder{color:var(--saf-product-header-color-interactive-on-disabled-subtle)}:host([product-header-item][readonly]) .root{background-color:var(--saf-product-header-color-interactive-read-only-subtle);border-color:var(--saf-product-header-color-interactive-border-read-only-default)}:host([product-header-item][readonly]) .control,:host([product-header-item][readonly]) .control::placeholder{color:var(--saf-color-text-knockout)}:host([product-header-item]) .root:has(.control:focus){box-shadow:var(--saf-drop-shadow-product-header-focus)}@container style(--saf-density: 0){.root{--saf-text-field-font: var(--saf-type-body-default-md-regular-standard);--saf-text-field-height: 40px;--saf-text-field-control-padding: var(--saf-spacing-2) var(--saf-spacing-3);--saf-text-field-embedded-item-padding-inline-end: calc(var(--saf-spacing-10) - 2px)}.validation{--saf-text-field-validation-font: var(--saf-type-body-default-sm-strong-standard)}}@container style(--saf-density: 1){.root{--saf-text-field-font: var(--saf-type-body-default-md-regular-compact);--saf-text-field-height: 32px;--saf-text-field-control-padding: var(--saf-spacing-1) var(--saf-spacing-3);--saf-text-field-embedded-item-padding-inline-end: calc(var(--saf-spacing-8) - 2px)}.validation{--saf-text-field-validation-font: var(--saf-type-body-default-sm-strong-compact)}}@supports(-moz-appearance: none) or (stroke-color: transparent){.root{--saf-text-field-height:calc(40px*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + 32px*var(--saf-density)*(2 - var(--saf-density)));--saf-conditional-line-height:calc(var(--saf-line-height-lg)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-md)*var(--saf-density)*(2 - var(--saf-density)));--saf-conditional-padding-block:calc(var(--saf-spacing-2)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-spacing-1)*var(--saf-density)*(2 - var(--saf-density)));--saf-text-field-embedded-item-padding-inline-end:calc((var(--saf-spacing-10) - 2px)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + (var(--saf-spacing-8) - 2px)*var(--saf-density)*(2 - var(--saf-density)));--saf-text-field-font: var(--saf-font-weight-regular) var(--saf-font-size-md) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3);--saf-text-field-control-padding: var(--saf-conditional-padding-block) var(--saf-spacing-3)}.validation{--saf-conditional-line-height:calc(var(--saf-line-height-md)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-sm)*var(--saf-density)*(2 - var(--saf-density)));--saf-text-field-validation-font: var(--saf-font-weight-semibold) var(--saf-font-size-sm) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}}:host([date-rtl]) .control{direction:ltr;text-align:right}')}
`,shadowOptions:{delegatesFocus:!0},registry:a.getRegistry()})),exports.safTextFieldConfig={events:{onChange:"change",onInput:"input",onValidate:"validate",onInvalid:"invalid",onReset:"reset"}};
