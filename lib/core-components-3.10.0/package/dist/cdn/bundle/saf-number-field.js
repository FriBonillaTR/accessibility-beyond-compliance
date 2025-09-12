"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@saffron/config"),e=require("./saf-icon.js"),a=require("tslib"),o=require("@microsoft/fast-web-utilities"),i=require("./a11y-DvNZtvTj.js"),s=require("./apply-mixins-CewQe2EQ.js"),r=require("./start-end-template-D7dQJgd3.js"),n=require("./text-field-CaPvWISP.js"),l=require("./form-associated-DSP-KUNe.js"),d=require("./fast-element-DOTfrYFb.js"),c=require("./global-enums-58U8enSy.js"),u=require("./string-helpers-BBo17rr2.js"),p=require("./when-0aDJpnLk.js"),h=require("./ref-BeTe_0iT.js");require("./logger-vjs750p7.js"),require("./aria-global-CYzDgx1a.js");class f extends d.FASTElement{}class v extends(l.FormAssociated(f)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class b extends v{constructor(){super(...arguments),this.hideStep=!1,this.step=1,this.isUserInput=!1,this.supportsElementInternal=!0,this.invalid=!1,this.successAriaLabel="Success",this.errorAriaLabel="Error",this.requiredText="*",this.density=c.ComponentDensityEnum.inherit,this.prevValue="",this.canAnnounceValidation=!1}maxChanged(t,e){var a;this.max=Math.max(e,null!==(a=this.min)&&void 0!==a?a:e);const o=Math.min(this.min,this.max);void 0!==this.min&&this.min!==o&&(this.min=o),this.value=this.getValidValue(this.value)}minChanged(t,e){var a;this.min=Math.min(e,null!==(a=this.max)&&void 0!==a?a:e);const o=Math.max(this.min,this.max);void 0!==this.max&&this.max!==o&&(this.max=o),this.value=this.getValidValue(this.value)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,e){var a;const o=this.getValidValue(e);e===o?(this.$fastController.isConnected&&(null===(a=this.control)||void 0===a?void 0:a.value)!==o&&(this.control.value=this.value),super.valueChanged(t,this.value),void 0===t||this.isUserInput||(this.$emit("input"),this.$emit("change")),this.isUserInput=!1):this.value=o}validate(){super.validate(this.control)}getValidValue(t){if(""===t)return"";const e="-"===t?"-0":t,a=e?e.split(".")[0].replace("-","").length:0;let o=this.isUserInput?t:parseFloat(t).toFixed(14===a?1:2).replace(/(\.0+|0+)$/,"");if(o&&!/^-?(?:\d+(\.\d{0,2})?|\.\d{1,2}|\d+)?$/.test(o))return this.prevValue;if(isNaN(parseFloat(e)))o="";else{if(o.replace(".","").replace("-","").length>15)return this.prevValue;const t=parseFloat(function(t){const e=t.replace(".","").replace("-","").length;return parseFloat(t).toPrecision(e>15?15:e)}(e)),a=void 0!==this.min?this.min:t,i=void 0!==this.max?this.max:t;t>Number.MAX_SAFE_INTEGER&&(o=Number.MAX_SAFE_INTEGER.toString()),t<a?o=a.toString():t>i&&(o=i.toString())}return this.prevValue=o,o}stepUp(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:t+this.step;this.value=e.toString()}stepDown(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:t-this.step;this.value=e.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&d.Updates.enqueue(()=>{this.focus()}),d.Updates.enqueue(()=>{this.canAnnounceValidation=!0})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(t){if(this.disabled||this.readOnly)return!0;const e=t.key||t.key.charCodeAt(0);if(![o.keyPageUp,o.keyPageDown,o.keyHome,o.keyEnd].includes(e)){if(this.disabled||this.readOnly)return!0;switch(t.key){case o.keyArrowUp:return this.stepUp(),!1;case o.keyArrowDown:return this.stepDown(),!1}return!0}if(t.preventDefault(),e===o.keyPageUp){const t=+this.value+5*this.step;this.value=`${t>this.max?this.max:t}`}else if(e===o.keyPageDown){const t=+this.value-5*this.step;this.value=`${t<this.min?this.min:t}`}else e===o.keyHome&&void 0!==this.min?this.value=`${this.min}`:e===o.keyEnd&&void 0!==this.max&&(this.value=`${this.max}`);return!0}handleBlur(){this.control.value=this.value}get ariaLabelledbyIds(){var t,e;return u.concatLabelIds(this.id,{label:!!(null===(t=this.label)||void 0===t?void 0:t.trim()),optionalText:!!(null===(e=this.optionalText)||void 0===e?void 0:e.trim()),status:this.invalid||this.isSuccess})}get ariaDescribedbyIds(){let t="";return this.instructionalText&&(t+=`instructional-${this.id}`),this.a11yAriaDescription&&(t+=" a11y-aria-description"),t}disconnectedCallback(){super.disconnectedCallback()}isSuccessChanged(){this.announceValidation()}invalidChanged(){this.announceValidation()}validationMessageChanged(){this.announceValidation()}announceValidation(){var t;this.canAnnounceValidation&&(null===(t=this.validationMessage)||void 0===t?void 0:t.length)&&!this.disabled&&(this.isSuccess&&!this.invalid||this.invalid)&&(this.canAnnounceValidation=!1,i.SafA11y.announce(this.validationMessage,"status"),setTimeout(()=>{this.canAnnounceValidation=!0},500))}}a.__decorate([d.attr({attribute:"readonly",mode:"boolean"})],b.prototype,"readOnly",void 0),a.__decorate([d.attr({mode:"boolean"})],b.prototype,"autofocus",void 0),a.__decorate([d.attr({attribute:"hide-step",mode:"boolean"})],b.prototype,"hideStep",void 0),a.__decorate([d.attr],b.prototype,"placeholder",void 0),a.__decorate([d.attr],b.prototype,"list",void 0),a.__decorate([d.attr({converter:d.nullableNumberConverter})],b.prototype,"maxlength",void 0),a.__decorate([d.attr({converter:d.nullableNumberConverter})],b.prototype,"minlength",void 0),a.__decorate([d.attr({converter:d.nullableNumberConverter})],b.prototype,"size",void 0),a.__decorate([d.attr({converter:d.nullableNumberConverter})],b.prototype,"step",void 0),a.__decorate([d.attr({converter:d.nullableNumberConverter})],b.prototype,"max",void 0),a.__decorate([d.attr({converter:d.nullableNumberConverter})],b.prototype,"min",void 0),a.__decorate([d.observable],b.prototype,"defaultSlottedNodes",void 0),a.__decorate([d.attr({attribute:"label"})],b.prototype,"label",void 0),a.__decorate([d.attr({attribute:"instructional-text"})],b.prototype,"instructionalText",void 0),a.__decorate([d.attr({attribute:"optional-text"})],b.prototype,"optionalText",void 0),a.__decorate([d.attr({attribute:"invalid",mode:"boolean"}),d.observable],b.prototype,"invalid",void 0),a.__decorate([d.attr({attribute:"validation-message"})],b.prototype,"validationMessage",void 0),a.__decorate([d.attr({attribute:"is-success",mode:"boolean"}),d.observable],b.prototype,"isSuccess",void 0),a.__decorate([d.attr({attribute:"success-aria-label"}),d.observable],b.prototype,"successAriaLabel",void 0),a.__decorate([d.attr({attribute:"error-aria-label"}),d.observable],b.prototype,"errorAriaLabel",void 0),a.__decorate([d.attr({attribute:"required-text"})],b.prototype,"requiredText",void 0),a.__decorate([d.volatile],b.prototype,"ariaLabelledbyIds",null),a.__decorate([d.attr({attribute:"a11y-aria-description"}),d.observable],b.prototype,"a11yAriaDescription",void 0),a.__decorate([d.volatile],b.prototype,"ariaDescribedbyIds",null),a.__decorate([d.attr],b.prototype,"density",void 0),a.__decorate([d.attr],b.prototype,"autocomplete",void 0),s.applyMixins(b,r.StartEnd,n.DelegatesARIATextbox);exports.default=()=>(e.default(),b.define({name:t.getComponentName("saf-number-field"),template:d.html`
		<template
			density="${t=>t.density}"
			is-success="${t=>t.isSuccess}"
			label="${t=>t.label?t.label:null}"
			instructional-text="${t=>t.instructionalText?t.instructionalText:null}"
			optional-text="${t=>t.optionalText?t.optionalText:null}"
			invalid="${t=>t.invalid}"
			success-aria-label="${t=>t.successAriaLabel}"
			error-aria-label="${t=>t.errorAriaLabel}"
			a11y-aria-description="${t=>t.a11yAriaDescription}"
			required="${t=>t.required}"
			required-text="${t=>t.requiredText}"
		>
			<div class="label-container" part="label-container">
				<label for="${t=>t.id}" class="label" part="label" id="label-${t=>t.id}">
					${t=>t.label}${p.when(t=>t.required,d.html`<span class="required-text" part="required-text" aria-hidden="true"
							>${t=>"*"===t.requiredText?`${t.requiredText}`:` ${t.requiredText}`}
						</span>`)}
				</label>
				<slot class="help-text" part="help-text" name="label-end"></slot>
				<span class="optional-text" part="optional-text" id="optional-${t=>t.id}">
					${t=>t.optionalText}
				</span>
				<p
					class="instructional-text"
					part="instructional-text"
					id="instructional-${t=>t.id}"
				>
					${t=>t.instructionalText}
				</p>
			</div>
			<div class="root" part="root">
				${r.startSlotTemplate()}
				<input
					id="${t=>t.id}"
					name="${t=>t.name}"
					class="control"
					part="control"
					?optional-text="${t=>t.optionalText}"
					@input="${t=>t.handleTextInput()}"
					@change="${t=>t.handleChange()}"
					@keydown="${(t,e)=>t.handleKeyDown(e.event)}"
					@blur="${t=>t.handleBlur()}"
					?autofocus="${t=>t.autofocus}"
					?disabled="${t=>t.disabled}"
					?invalid="${t=>t.invalid}"
					list="${t=>t.list}"
					maxlength="${t=>t.maxlength}"
					minlength="${t=>t.minlength}"
					placeholder="${t=>t.placeholder}"
					?readonly="${t=>t.readOnly}"
					?required="${t=>t.required}"
					size="${t=>t.size}"
					type="number"
					inputmode="numeric"
					min="${t=>t.min}"
					aria-valuemin="${t=>t.min}"
					max="${t=>t.max}"
					aria-valuemax="${t=>t.max}"
					step="${t=>t.step}"
					aria-valuenow="${t=>t.value}"
					aria-atomic="${t=>t.ariaAtomic}"
					aria-autocomplete="${t=>t.ariaAutoComplete}"
					aria-busy="${t=>t.ariaBusy}"
					aria-controls="${t=>t.ariaControls}"
					aria-current="${t=>t.ariaCurrent}"
					aria-describedby="${t=>t.ariaDescribedbyIds.length>0?t.ariaDescribedbyIds:null}"
					aria-details="${t=>t.ariaDetails}"
					aria-disabled="${t=>t.ariaDisabled}"
					aria-flowto="${t=>t.ariaFlowto}"
					aria-haspopup="${t=>t.ariaHaspopup}"
					aria-hidden="${t=>t.ariaHidden}"
					aria-invalid="${t=>t.ariaInvalid||Boolean(t.invalid)}"
					aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
					aria-label="${t=>t.ariaLabel}"
					aria-labelledby="${t=>t.ariaLabelledby?t.ariaLabelledby:t.ariaLabelledbyIds}"
					aria-live="${t=>t.ariaLive}"
					aria-owns="${t=>t.ariaOwns}"
					aria-relevant="${t=>t.ariaRelevant}"
					aria-roledescription="${t=>t.ariaRoledescription}"
					autocomplete="${t=>t.autocomplete}"
					:is-success="${t=>t.isSuccess&&!t.invalid}"
					validation-message="${t=>t.validationMessage}"
					${h.ref("control")}
				/>
				<div class="controls" part="controls">
					${p.when(t=>!t.hideStep&&!t.readOnly&&!t.disabled,d.html`
							<div
								class="step-up step-controls"
								part="step-up"
								@click="${t=>t.stepUp()}"
							>
								<saf-icon
									part="step-up-icon"
									size="12"
									appearance="solid"
									icon-name="chevron-up"
								></saf-icon>
							</div>
							<div
								class="step-down step-controls"
								part="step-down"
								@click="${t=>t.stepDown()}"
							>
								<saf-icon
									part="step-down-icon"
									size="12"
									appearance="solid"
									icon-name="chevron-down"
								></saf-icon>
							</div>
						`)}
				</div>
				${r.endSlotTemplate()}
			</div>
			${p.when(t=>t.isSuccess&&!t.invalid,d.html`
					<div class="validation success" part="success">
						<slot id="status-${t=>t.id}" name="success">
							<saf-icon
								class="success-icon"
								part="success-icon"
								icon-name="circle-check"
								appearance="solid"
								color="var(--saf-color-status-success-strong)"
								aria-label="${t=>t.successAriaLabel}"
								presentation="false"
							>
							</saf-icon>
							<span part="message" class="message">
								${t=>t.validationMessage}
							</span>
						</slot>
					</div>
				`)}
			${p.when(t=>t.invalid,d.html`
					<div class="validation error" part="error">
						<slot id="status-${t=>t.id}" name="error">
							<saf-icon
								class="error-icon"
								part="error-icon"
								icon-name="hexagon-exclamation"
								appearance="solid"
								color="var(--saf-color-status-error-strong)"
								presentation="false"
								aria-label="${t=>t.errorAriaLabel}"
							>
							</saf-icon>
							<span part="message" class="message">
								${t=>t.validationMessage}
							</span>
						</slot>
					</div>
				`)}
			${p.when(t=>t.a11yAriaDescription,d.html` <span
					class="a11y-aria-description"
					part="a11y-aria-description"
					id="a11y-aria-description"
				>
					${t=>t.a11yAriaDescription}
				</span>`)}
		</template>
	`,styles:d.css`
	${t.replaceComponentNamesWithSafAttribute('button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:host{--saf-form-label-container-margin: 0 0 var(--saf-spacing-2) 0;--saf-form-label-text-decoration: none;color:var(--saf-color-text-heavy)}.label{font:var(--saf-form-label-font, var(--saf-type-body-default-md-strong-standard));text-decoration:var(--saf-input-label-text-decoration)}.instructional-text,.optional-text{font:var(--saf-form-label-instructional-text-font, var(--saf-type-body-default-sm-regular-standard))}.instructional-text{display:block;margin:0}.label-container{margin:var(--saf-form-label-container-margin);text-align:start}:host(:not([label],[instructional-text],[optional-text])) .label-container,:host(:not([label])) .label,:host(:not([instructional-text])) .instructional-text,:host(:not([optional-text])) .optional-text,.instructional-text:empty{display:none}:host([disabled]) .label,:host([disabled]) .instructional-text,:host([disabled]) .optional-text{color:var(--saf-color-interactive-disabled-strong)}:host([readonly]) .label,:host([readonly]) .instructional-text,:host([readonly]) .optional-text{color:var(--saf-color-text-heavy)}:host([product-header-item]){color:var(--saf-color-text-knockout)}:host([product-header-item][disabled]) .label,:host([product-header-item][disabled]) .instructional-text{color:var(--saf-product-header-color-interactive-on-disabled-subtle)}:host([product-header-item][readonly]) .label,:host([product-header-item][readonly]) .instructional-text{color:var(--saf-product-header-color-interactive-on-read-only-subtle)}@container style(--saf-density: 0){.label{--saf-form-label-font: var(--saf-type-body-default-md-strong-standard)}.instructional-text,.optional-text{--saf-form-label-instructional-text-font: var(--saf-type-body-default-sm-regular-standard)}}@container style(--saf-density: 1){.label{--saf-form-label-font: var(--saf-type-body-default-md-strong-compact)}.instructional-text,.optional-text{--saf-form-label-instructional-text-font: var(--saf-type-body-default-sm-regular-compact)}}@supports(-moz-appearance: none) or (stroke-color: transparent){.label{--saf-conditional-line-height:calc(var(--saf-line-height-lg)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-md)*var(--saf-density)*(2 - var(--saf-density)));--saf-form-label-font: var(--saf-font-weight-semibold) var(--saf-font-size-md) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}.instructional-text,.optional-text{--saf-conditional-line-height:calc(var(--saf-line-height-md)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-sm)*var(--saf-density)*(2 - var(--saf-density)));--saf-form-label-instructional-text-font: var(--saf-font-weight-regular) var(--saf-font-size-sm) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}}:host{display:block;outline:none}:host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=""]){--saf-density: 2}.root,.control{box-sizing:border-box;width:100%}.root{align-items:center;background:var(--saf-color-interactive-background-default);border:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);border-radius:var(--saf-border-radius-xs);color:var(--saf-color-text-heavy);display:flex;fill:currentcolor;flex-direction:row;position:relative}.control{appearance:textfield;background:rgba(0,0,0,0);border:none;color:inherit;font:var(--saf-number-field-control-font, var(--saf-type-body-default-md-regular-standard));padding:var(--saf-number-field-control-padding, var(--saf-spacing-2) var(--saf-spacing-3))}.control::-webkit-outer-spin-button,.control::-webkit-inner-spin-button{appearance:none;margin:0}.control::placeholder{color:var(--saf-color-text-subtle);opacity:var(--saf-opacity-7)}:host([disabled]) .control::placeholder{color:var(--saf-color-interactive-on-disabled-subtle)}:host([readonly]) .control::placeholder{color:var(--saf-color-text-heavy)}.control:hover,.control:focus-visible,.control:disabled,.control:active{outline:none}::slotted([slot=start]),::slotted([slot=end]){display:flex;margin-inline:var(--saf-spacing-2)}.control,.controls{height:var(--saf-number-field-control-height, 40px)}.controls{align-items:center;display:flex;flex-direction:column;justify-content:center;opacity:0;padding:0 var(--saf-spacing-2)}:host([disabled]) .label,:host([readonly]) .label,:host([disabled]) .control,:host([readonly]) .control{cursor:not-allowed}:host([disabled]) .root{background:var(--saf-color-interactive-disabled-subtle);border-color:var(--saf-color-interactive-border-disabled-default)}:host([readonly]) .root{background:var(--saf-color-interactive-read-only-subtle);border-color:var(--saf-color-interactive-border-read-only-default)}:host(:not([disabled],[readonly])) .root:hover{outline:var(--saf-line-width-thick) solid var(--saf-color-interactive-border-secondary-hover);outline-offset:-2px}:host(:not([disabled])) .root:focus-within,:host([autofocus]:not([disabled])) .root{box-shadow:var(--saf-drop-shadow-focus)}:host(:not([disabled])) .controls:hover,:host(:not([disabled])) .root:focus-within .controls,:host([autofocus]:not([disabled])) .controls{opacity:1}:host(:not([disabled])[invalid=true]) .root{box-shadow:var(--saf-drop-shadow-error)}:host(:not([disabled])[invalid=true]) .root:has(.control:focus){box-shadow:var(--saf-drop-shadow-error-focus)}:host(:not([disabled])[is-success=true][invalid=false]) .root{box-shadow:var(--saf-drop-shadow-success)}:host(:not([disabled])[is-success=true][invalid=false]) .root:has(.control:focus){box-shadow:var(--saf-drop-shadow-success-focus)}.step-up.step-controls,.step-down.step-controls{align-items:center;display:flex;fill:currentcolor;height:10px;justify-content:center;overflow:hidden;padding:0 var(--saf-spacing-1);position:relative;width:12px}.step-up.step-controls{top:0}.step-down.step-controls{bottom:0}:host .validation{display:flex;font:var(--saf-number-field-validation-font, var(--saf-type-body-default-sm-strong-standard));gap:var(--saf-spacing-1);margin-top:var(--saf-spacing-2)}:host .validation.error{color:var(--saf-color-status-error-strong)}:host .validation.success{color:var(--saf-color-status-success-strong)}:host .a11y-aria-description{display:none}:host ::slotted([slot=label-end]){margin-left:var(--saf-spacing-05)}@container style(--saf-density: 0){.root{--saf-number-field-control-font: var(--saf-type-body-default-md-regular-standard);--saf-number-field-control-height: 40px;--saf-number-field-control-padding: var(--saf-spacing-2) var(--saf-spacing-3);--saf-number-field-validation-font: var(--saf-type-body-default-sm-strong-standard)}}@container style(--saf-density: 1){.root{--saf-number-field-control-font: var(--saf-type-body-default-md-regular-compact);--saf-number-field-control-padding: var(--saf-spacing-1) var(--saf-spacing-3);--saf-number-field-control-height: 32px;--saf-number-field-validation-font: var(--saf-type-body-default-sm-strong-compact)}}@supports(-moz-appearance: none) or (stroke-color: transparent){.root{--saf-conditional-line-height:calc(var(--saf-line-height-lg)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-md)*var(--saf-density)*(2 - var(--saf-density)));--saf-conditional-padding-block:calc(var(--saf-spacing-2)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-spacing-1)*var(--saf-density)*(2 - var(--saf-density)));--saf-number-field-control-height:calc(40px*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + 32px*var(--saf-density)*(2 - var(--saf-density)));--saf-conditional-line-height:calc(var(--saf-line-height-md)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-sm)*var(--saf-density)*(2 - var(--saf-density)));--saf-number-field-control-font: var(--saf-font-weight-regular) var(--saf-font-size-md) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3);--saf-number-field-control-padding: var(--saf-conditional-padding-block) var(--saf-spacing-3);--saf-number-field-validation-font: var(--saf-font-weight-semibold) var(--saf-font-size-sm) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}}')}
`,shadowOptions:{delegatesFocus:!0},registry:t.getRegistry()})),exports.safNumberFieldConfig={events:{onChange:"change",onInput:"input",onInvalid:"invalid",onClick:"click"}};
