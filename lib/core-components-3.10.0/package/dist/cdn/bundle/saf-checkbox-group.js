"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./saf-icon.js"),e=require("@saffron/config"),a=require("./saf-sr-only.js"),o=require("tslib"),i=require("./a11y-DvNZtvTj.js"),r=require("./fast-element-DOTfrYFb.js"),n=require("./when-0aDJpnLk.js"),s=require("./slotted-cZBT0SIc.js");require("./logger-vjs750p7.js");class l extends r.FASTElement{constructor(){var t;super(...arguments),this.supportsElementsInternals=!0,this.form=null!==(t=this.closest("form"))&&void 0!==t?t:void 0,this.required=!1,this.errorAriaLabel="Error",this.invalid=!1,this.requiredText="*",this.requiredAriaText="Please select an option",this.handleChange=()=>{const t=this.slottedNodes.filter(t=>t.checked&&t.innerText).reduce((t,e)=>e.innerText?[...t,e.innerText]:t,[]);this.value=t,this.setValidity()},this.handleReset=()=>{this.value=[],this.slottedNodes.map(t=>t.checked=!1),this.invalid=!1},this.setValidity=()=>{var t;this.invalid=(null===(t=this.value)||void 0===t?void 0:t.length)<1&&this.required,this.$emit("invalid",this.invalid)},this.canAnnounceValidation=!1}requiredAriaTextChanged(t,e){e||(this.requiredAriaText="Please select an option")}connectedCallback(){super.connectedCallback(),this.form&&this.form.addEventListener("reset",this.handleReset),r.Updates.enqueue(()=>{this.canAnnounceValidation=!0})}invalidChanged(){this.announceValidation()}validationMessageChanged(){this.announceValidation()}announceValidation(){var t;this.canAnnounceValidation&&(null===(t=this.validationMessage)||void 0===t?void 0:t.length)&&this.invalid&&(this.canAnnounceValidation=!1,i.SafA11y.announce(this.validationMessage,"status"),setTimeout(()=>{this.canAnnounceValidation=!0},500))}}o.__decorate([r.attr],l.prototype,"label",void 0),o.__decorate([r.attr({attribute:"required",mode:"boolean"})],l.prototype,"required",void 0),o.__decorate([r.attr({attribute:"instructional-text"})],l.prototype,"instructionalText",void 0),o.__decorate([r.attr({attribute:"optional-text"})],l.prototype,"optionalText",void 0),o.__decorate([r.attr],l.prototype,"disabled",void 0),o.__decorate([r.attr],l.prototype,"orientation",void 0),o.__decorate([r.attr({attribute:"error-aria-label"}),r.observable],l.prototype,"errorAriaLabel",void 0),o.__decorate([r.attr({attribute:"invalid",mode:"boolean"}),r.observable],l.prototype,"invalid",void 0),o.__decorate([r.attr({attribute:"validation-message"})],l.prototype,"validationMessage",void 0),o.__decorate([r.attr({attribute:"required-text"})],l.prototype,"requiredText",void 0),o.__decorate([r.attr({attribute:"required-aria-text"}),r.observable],l.prototype,"requiredAriaText",void 0),o.__decorate([r.observable],l.prototype,"value",void 0);exports.default=()=>(t.default(),a.default(),l.define({name:e.getComponentName("saf-checkbox-group"),template:r.html`
	<template
		id="${t=>t.id}"
		label="${t=>t.label?t.label:null}"
		orientation=${t=>t.orientation?t.orientation:"vertical"}
		invalid="${t=>t.invalid}"
		instructionalText="${t=>t.instructionalText?t.instructionalText:null}"
		optional-text="${t=>t.optionalText?t.optionalText:null}"
		validation-message="${t=>t.validationMessage}"
		required="${t=>t.required}"
		required-text="${t=>t.requiredText}"
		required-aria-text="${t=>t.requiredAriaText}"
		@change="${t=>t.handleChange()}"
		@reset="${t=>t.handleReset()}"
		value="${t=>t.value}"
		error-aria-label="${t=>t.errorAriaLabel}"
	>
		<fieldset part="control" class="control" aria-invalid="${t=>t.invalid}">
			<legend part="legend" class="legend label-container">
				<span class="label" part="label" id="label-${t=>t.id}">
					${t=>t.label}${n.when(t=>t.required,r.html`<span class="required-text" part="required-text" aria-hidden="true"
								>${t=>"*"===t.requiredText?`${t.requiredText}`:` ${t.requiredText}`}
							</span>
							<saf-sr-only>${t=>t.requiredAriaText}</saf-sr-only>`)}
				</span>

				<slot class="help-text" part="help-text" name="label-end"></slot>

				<span class="optional-text" part="optional-text" id="optional-${t=>t.id}">
					${t=>t.optionalText}
				</span>
				<span
					id="instructional-${t=>t.id}"
					part="instructional-text"
					class="instructional-text"
				>
					${t=>t.instructionalText}
				</span>

				${n.when(t=>t.invalid&&t.validationMessage||t.invalid&&t.validationMessage&&t.required,r.html`<slot name="error" part="error" class="validation error">
                <saf-icon
                    part="error-icon"
                    icon-name="hexagon-exclamation"
                    appearance="solid"
                    color="var(--saf-color-status-error-strong)"
                    presentation="false"
                    aria-label="${t=>t.errorAriaLabel}"
                >
                </saf-icon>
                    <span part="message" class="message">${t=>t.validationMessage} </span></slot
                >
                </slot>`)}
			</legend>
			<slot
				class="positioning-region"
				part="positioning-region"
				${s.slotted({property:"slottedNodes",filter:s.elements("saf-checkbox")})}
			></slot>
		</fieldset>
	</template>
`,styles:r.css`
	${e.replaceComponentNamesWithSafAttribute(":host{--saf-form-label-container-margin: 0 0 var(--saf-spacing-2) 0;--saf-form-label-text-decoration: none;color:var(--saf-color-text-heavy)}.label{font:var(--saf-form-label-font, var(--saf-type-body-default-md-strong-standard));text-decoration:var(--saf-input-label-text-decoration)}.instructional-text,.optional-text{font:var(--saf-form-label-instructional-text-font, var(--saf-type-body-default-sm-regular-standard))}.instructional-text{display:block;margin:0}.label-container{margin:var(--saf-form-label-container-margin);text-align:start}:host(:not([label],[instructional-text],[optional-text])) .label-container,:host(:not([label])) .label,:host(:not([instructional-text])) .instructional-text,:host(:not([optional-text])) .optional-text,.instructional-text:empty{display:none}:host([disabled]) .label,:host([disabled]) .instructional-text,:host([disabled]) .optional-text{color:var(--saf-color-interactive-disabled-strong)}:host([readonly]) .label,:host([readonly]) .instructional-text,:host([readonly]) .optional-text{color:var(--saf-color-text-heavy)}:host([product-header-item]){color:var(--saf-color-text-knockout)}:host([product-header-item][disabled]) .label,:host([product-header-item][disabled]) .instructional-text{color:var(--saf-product-header-color-interactive-on-disabled-subtle)}:host([product-header-item][readonly]) .label,:host([product-header-item][readonly]) .instructional-text{color:var(--saf-product-header-color-interactive-on-read-only-subtle)}@container style(--saf-density: 0){.label{--saf-form-label-font: var(--saf-type-body-default-md-strong-standard)}.instructional-text,.optional-text{--saf-form-label-instructional-text-font: var(--saf-type-body-default-sm-regular-standard)}}@container style(--saf-density: 1){.label{--saf-form-label-font: var(--saf-type-body-default-md-strong-compact)}.instructional-text,.optional-text{--saf-form-label-instructional-text-font: var(--saf-type-body-default-sm-regular-compact)}}@supports(-moz-appearance: none) or (stroke-color: transparent){.label{--saf-conditional-line-height:calc(var(--saf-line-height-lg)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-md)*var(--saf-density)*(2 - var(--saf-density)));--saf-form-label-font: var(--saf-font-weight-semibold) var(--saf-font-size-md) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}.instructional-text,.optional-text{--saf-conditional-line-height:calc(var(--saf-line-height-md)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-sm)*var(--saf-density)*(2 - var(--saf-density)));--saf-form-label-instructional-text-font: var(--saf-font-weight-regular) var(--saf-font-size-sm) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}}:host{display:block}:host ::slotted([slot=label-end]){margin-left:var(--saf-spacing-05)}.control{align-items:start;border:none;display:flex;flex-direction:column}.control,legend,.instructional-text{margin:0;padding:0}saf-status{margin:var(--saf-spacing-2) 0}.positioning-region{display:flex;flex-wrap:wrap}:host([orientation=horizontal]) .positioning-region{flex-direction:row}:host([orientation=vertical]) .positioning-region{flex-direction:column;gap:var(--saf-spacing-4)}:host .validation{display:flex;font:var(--saf-type-body-default-sm-strong-standard);gap:var(--saf-spacing-1);margin-top:var(--saf-spacing-2)}:host .validation[name=error]{color:var(--saf-color-status-error-strong)}:host .validation[name=success]{color:var(--saf-color-status-success-strong)}")}
`,registry:e.getRegistry()})),exports.safCheckboxGroupConfig={events:{onChange:"change",onInvalid:"invalid",onReset:"reset"}};
