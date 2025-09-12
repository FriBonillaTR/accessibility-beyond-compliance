"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@saffron/config"),e=require("tslib"),a=require("./a11y-DvNZtvTj.js"),r=require("./apply-mixins-CewQe2EQ.js"),o=require("./start-end-template-D7dQJgd3.js"),i=require("./text-field-CaPvWISP.js"),n=require("./form-associated-DSP-KUNe.js"),s=require("./fast-element-DOTfrYFb.js"),l=require("./global-enums-58U8enSy.js"),d=require("./string-helpers-BBo17rr2.js"),c=require("./when-0aDJpnLk.js"),p=require("./ref-BeTe_0iT.js"),u=require("./saf-icon.js"),h=require("./saf-sr-only.js");require("./aria-global-CYzDgx1a.js"),require("@microsoft/fast-web-utilities"),require("./logger-vjs750p7.js");class f extends s.FASTElement{}class v extends(n.FormAssociated(f)){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const b="both";class m extends v{constructor(){super(...arguments),this.resize=b,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value},this.invalid=!1,this.validationMessage="",this.errorAriaLabel="Error",this.required=!1,this.requiredText="*",this.density=l.ComponentDensityEnum.inherit,this.showRemainingText=!1,this.remainingCharactersCountDelay=1e3,this.canAnnounceValidation=!1}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}get ariaLabelledbyIds(){var t,e;return d.concatLabelIds(this.id,{label:!!(null===(t=this.label)||void 0===t?void 0:t.trim()),optionalText:!!(null===(e=this.optionalText)||void 0===e?void 0:e.trim()),status:this.invalid})}get ariaDescribedbyIds(){let t="";return this.instructionalText&&(t+=`instructional-${this.id}`),this.a11yAriaDescription&&(t+=" a11y-aria-description"),this.showRemainingText&&(t+=" charactercount-reader"),t}get remainingCharactersTextDefault(){return 1===this.remainingCharactersCounter?"character remaining":"characters remaining"}get remainingCharactersCounter(){return!this.maxlength&&this.showRemainingText&&(this.maxlength=200),this.maxlength-this.value.length}_keypressHandler(){}connectedCallback(){super.connectedCallback(),this.remainingCharactersCounterReader=this.remainingCharactersCounter,s.Updates.enqueue(()=>{this.canAnnounceValidation=!0})}disconnectedCallback(){super.disconnectedCallback()}keyupHandler(){this.updateCharactersCounterReader(this.remainingCharactersCountDelay)}updateCharactersCounterReader(t){clearTimeout(this.remainingCharacterCountTimeout),this.remainingCharacterCountTimeout=setTimeout(()=>{this.remainingCharactersCounterReader=this.remainingCharactersCounter},t)}invalidChanged(){this.announceValidation()}validationMessageChanged(){this.announceValidation()}announceValidation(){var t;this.canAnnounceValidation&&(null===(t=this.validationMessage)||void 0===t?void 0:t.length)&&!this.disabled&&this.invalid&&(this.canAnnounceValidation=!1,a.SafA11y.announce(this.validationMessage,"status"),setTimeout(()=>{this.canAnnounceValidation=!0},500))}}e.__decorate([s.attr({mode:"boolean"})],m.prototype,"readOnly",void 0),e.__decorate([s.attr],m.prototype,"resize",void 0),e.__decorate([s.attr({mode:"boolean"})],m.prototype,"autofocus",void 0),e.__decorate([s.attr({attribute:"form"})],m.prototype,"formId",void 0),e.__decorate([s.attr],m.prototype,"list",void 0),e.__decorate([s.attr({converter:s.nullableNumberConverter})],m.prototype,"maxlength",void 0),e.__decorate([s.attr({converter:s.nullableNumberConverter})],m.prototype,"minlength",void 0),e.__decorate([s.attr],m.prototype,"name",void 0),e.__decorate([s.attr],m.prototype,"placeholder",void 0),e.__decorate([s.attr({converter:s.nullableNumberConverter,mode:"fromView"})],m.prototype,"cols",void 0),e.__decorate([s.attr({converter:s.nullableNumberConverter,mode:"fromView"})],m.prototype,"rows",void 0),e.__decorate([s.attr({mode:"boolean"})],m.prototype,"spellcheck",void 0),e.__decorate([s.observable],m.prototype,"defaultSlottedNodes",void 0),e.__decorate([s.attr({attribute:"invalid",mode:"boolean"}),s.observable],m.prototype,"invalid",void 0),e.__decorate([s.attr({attribute:"label"})],m.prototype,"label",void 0),e.__decorate([s.attr({attribute:"instructional-text"})],m.prototype,"instructionalText",void 0),e.__decorate([s.attr({attribute:"optional-text"})],m.prototype,"optionalText",void 0),e.__decorate([s.attr({attribute:"a11y-aria-description"}),s.observable],m.prototype,"a11yAriaDescription",void 0),e.__decorate([s.attr({attribute:"validation-message"})],m.prototype,"validationMessage",void 0),e.__decorate([s.attr({attribute:"error-aria-label"}),s.observable],m.prototype,"errorAriaLabel",void 0),e.__decorate([s.attr({attribute:"required",mode:"boolean"})],m.prototype,"required",void 0),e.__decorate([s.attr({attribute:"required-text"})],m.prototype,"requiredText",void 0),e.__decorate([s.volatile],m.prototype,"ariaLabelledbyIds",null),e.__decorate([s.volatile],m.prototype,"ariaDescribedbyIds",null),e.__decorate([s.attr],m.prototype,"density",void 0),e.__decorate([s.attr({attribute:"show-remaining-text"})],m.prototype,"showRemainingText",void 0),e.__decorate([s.observable],m.prototype,"remainingCharactersCounterReader",void 0),e.__decorate([s.attr],m.prototype,"autocomplete",void 0),r.applyMixins(m,o.StartEnd,i.DelegatesARIATextbox);exports.default=()=>(u.default(),h.default(),m.define({name:t.getComponentName("saf-text-area"),template:s.html`<template
	density="${t=>t.density}"
	label="${t=>t.label?t.label:null}"
	instructional-text="${t=>t.instructionalText?t.instructionalText:null}"
	optional-text="${t=>t.optionalText?t.optionalText:null}"
	message="${t=>t.validationMessage}"
	invalid="${t=>t.invalid}"
	error-aria-label="${t=>t.errorAriaLabel}"
	resize="${t=>t.resize}"
>
	<div class="label-container" part="label-container">
		<label for="${t=>t.id}" part="label" class="label" id="label-${t=>t.id}">
			${t=>t.label}${c.when(t=>t.required,s.html`<span class="required-text" part="required-text" aria-hidden="true"
					>${t=>"*"===t.requiredText?`${t.requiredText}`:` ${t.requiredText}`}
				</span>`)}
		</label>
		<slot class="help-text" part="help-text" name="label-end"></slot>
		<span class="optional-text" part="optional-text" id="optional-${t=>t.id}">
			${t=>t.optionalText}
		</span>
		<p id="instructional-${t=>t.id}" part="instructional-text" class="instructional-text">
			${t=>t.instructionalText}
		</p>
	</div>
	${o.startSlotTemplate()}
	<textarea
		id="${t=>t.id}"
		?optional-text="${t=>t.optionalText}"
		part="control"
		class="${t=>t.invalid?"control invalid":"control valid"}"
		id="${t=>t.id}"
		?autofocus="${t=>t.autofocus}"
		cols="${t=>t.cols}"
		?disabled="${t=>t.disabled}"
		form="${t=>t.form}"
		list="${t=>t.list}"
		maxlength="${t=>t.maxlength}"
		minlength="${t=>t.minlength}"
		name="${t=>t.name}"
		:placeholder="${t=>{var e;return null!==(e=t.placeholder)&&void 0!==e?e:""}}"
		?readonly="${t=>t.readOnly}"
		?required="${t=>t.required}"
		resize="${t=>t.resize}"
		rows="${t=>t.rows?t.rows:"2"}"
		?spellcheck="${t=>t.spellcheck}"
		:value="${t=>t.value}"
		autocomplete="${t=>t.autocomplete}"
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
		aria-required="${t=>t.required}"
		aria-relevant="${t=>t.ariaRelevant}"
		aria-roledescription="${t=>t.ariaRoledescription}"
		validation-message="${t=>t.validationMessage}"
		@input="${t=>t.handleTextInput()}"
		@change="${t=>t.handleChange()}"
		formId="${t=>t.formId}"
		@keyup="${t=>t.keyupHandler()}"
		${p.ref("control")}
	></textarea>
	${o.endSlotTemplate()}
	${c.when(t=>t.a11yAriaDescription,s.html` <span
			class="a11y-aria-description"
			part="a11y-aria-description"
			id="a11y-aria-description"
		>
			${t=>t.a11yAriaDescription}
		</span>`)}
	<div class="validation-counter-wrapper">
		<div class="validation" part="validation">
			${c.when(t=>t.invalid,s.html`
					<div class="validation error" part="error">
						<slot id="status-${t=>t.id}" name="error">
							<saf-icon
								part="error-icon"
								class="error-icon"
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
		</div>
		${c.when(t=>t.showRemainingText,s.html` <div class="remaining-text-counter-wrapper" part="remaining-text-counter-wrapper">
				<slot name="charactercount">
					${t=>t.remainingCharactersCounter}
					${t=>t.remainingCharactersTextDefault}

					<div id="charactercount-reader" aria-live="polite" aria-atomic="true">
						<saf-sr-only id="sr-only">
							${t=>t.remainingCharactersCounterReader}
							${t=>t.remainingCharactersTextDefault}</saf-sr-only
						>
					</div>
				</slot>
			</div>`)}
	</div>
</template> `,styles:s.css`
	${t.replaceComponentNamesWithSafAttribute('button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:host{--saf-form-label-container-margin: 0 0 var(--saf-spacing-2) 0;--saf-form-label-text-decoration: none;color:var(--saf-color-text-heavy)}.label{font:var(--saf-form-label-font, var(--saf-type-body-default-md-strong-standard));text-decoration:var(--saf-input-label-text-decoration)}.instructional-text,.optional-text{font:var(--saf-form-label-instructional-text-font, var(--saf-type-body-default-sm-regular-standard))}.instructional-text{display:block;margin:0}.label-container{margin:var(--saf-form-label-container-margin);text-align:start}:host(:not([label],[instructional-text],[optional-text])) .label-container,:host(:not([label])) .label,:host(:not([instructional-text])) .instructional-text,:host(:not([optional-text])) .optional-text,.instructional-text:empty{display:none}:host([disabled]) .label,:host([disabled]) .instructional-text,:host([disabled]) .optional-text{color:var(--saf-color-interactive-disabled-strong)}:host([readonly]) .label,:host([readonly]) .instructional-text,:host([readonly]) .optional-text{color:var(--saf-color-text-heavy)}:host([product-header-item]){color:var(--saf-color-text-knockout)}:host([product-header-item][disabled]) .label,:host([product-header-item][disabled]) .instructional-text{color:var(--saf-product-header-color-interactive-on-disabled-subtle)}:host([product-header-item][readonly]) .label,:host([product-header-item][readonly]) .instructional-text{color:var(--saf-product-header-color-interactive-on-read-only-subtle)}@container style(--saf-density: 0){.label{--saf-form-label-font: var(--saf-type-body-default-md-strong-standard)}.instructional-text,.optional-text{--saf-form-label-instructional-text-font: var(--saf-type-body-default-sm-regular-standard)}}@container style(--saf-density: 1){.label{--saf-form-label-font: var(--saf-type-body-default-md-strong-compact)}.instructional-text,.optional-text{--saf-form-label-instructional-text-font: var(--saf-type-body-default-sm-regular-compact)}}@supports(-moz-appearance: none) or (stroke-color: transparent){.label{--saf-conditional-line-height:calc(var(--saf-line-height-lg)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-md)*var(--saf-density)*(2 - var(--saf-density)));--saf-form-label-font: var(--saf-font-weight-semibold) var(--saf-font-size-md) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}.instructional-text,.optional-text{--saf-conditional-line-height:calc(var(--saf-line-height-md)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-sm)*var(--saf-density)*(2 - var(--saf-density)));--saf-form-label-instructional-text-font: var(--saf-font-weight-regular) var(--saf-font-size-sm) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}}:host{display:block;outline:none}:host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=""]){--saf-density: 2}.control{background:var(--saf-color-interactive-background-default);border:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);border-radius:var(--saf-border-radius-xs);box-sizing:border-box;color:var(--saf-color-text-heavy);display:block;font:var(--saf-text-area-control-font, var(--saf-type-body-default-md-regular-standard));min-height:var(--saf-text-area-control-min-height, 40px);padding:var(--saf-text-area-control-padding, var(--saf-spacing-2) var(--saf-spacing-3));position:relative;resize:both;width:100%}:host([resize=none]) .control{resize:none}.control::placeholder{color:var(--saf-color-text-subtle);opacity:var(--saf-opacity-7)}:host([disabled]) .control::placeholder{color:var(--saf-color-interactive-on-disabled-subtle)}:host([readonly]) .control::placeholder{color:var(--saf-color-text-heavy)}:host([cols]){width:initial}:host([rows]) .control{height:initial}:host([resize=both]) .control{resize:both}:host([resize=horizontal]) .control{resize:horizontal}:host([resize=vertical]) .control{resize:vertical}:host(:active:not([disabled],[invalid=true])) .control:focus,:host(:focus-within:not([disabled],[invalid=true])) .control:focus-visible{box-shadow:var(--saf-drop-shadow-focus)}:host([invalid=true]) .control{box-shadow:var(--saf-drop-shadow-error)}:host([invalid=true]) .control:focus{box-shadow:var(--saf-drop-shadow-error-focus)}:host([readonly]) .control,:host([disabled]) .control{cursor:not-allowed}:host([disabled]) .control{background:var(--saf-color-interactive-disabled-subtle);border-color:var(--saf-color-interactive-border-disabled-default);color:var(--saf-color-interactive-on-disabled-subtle)}:host([readonly]) .control{background:var(--saf-color-interactive-read-only-subtle);border-color:var(--saf-color-interactive-border-read-only-default)}.control:focus,.control:disabled,.control:active{outline:none}:host(:not([disabled],[readonly])) .control:hover{outline:var(--saf-line-width-thick) solid var(--saf-color-interactive-border-secondary-hover);outline-offset:-2px}:host .validation{display:flex;font:var(--saf-text-area-validation-font, var(--saf-type-body-default-sm-strong-standard));gap:var(--saf-spacing-1)}:host .validation.error{color:var(--saf-color-status-error-strong)}:host .a11y-aria-description{display:none}:host .validation-counter-wrapper{display:flex;gap:var(--saf-spacing-4);justify-content:space-between;margin-block-start:var(--saf-spacing-2)}:host .remaining-text-counter-wrapper{flex-shrink:0;font:var(--saf-type-body-default-sm-regular-standard)}:host([disabled]) .remaining-text-counter-wrapper{color:var(--saf-color-interactive-disabled-strong)}:host ::slotted([slot=label-end]){margin-left:var(--saf-spacing-05)}@container style(--saf-density: 0){.control{--saf-text-area-control-font: var(--saf-type-body-default-md-regular-standard);--saf-text-area-control-min-height: 40px;--saf-text-area-control-padding: var(--saf-spacing-2) var(--saf-spacing-3)}.validation{--saf-text-area-validation-font: var(--saf-type-body-default-sm-strong-standard)}}@container style(--saf-density: 1){.control{--saf-text-area-control-font: var(--saf-type-body-default-md-regular-compact);--saf-text-area-control-min-height: 32px;--saf-text-area-control-padding: var(--saf-spacing-1) var(--saf-spacing-3)}.validation{--saf-text-area-validation-font: var(--saf-type-body-default-sm-strong-compact)}}@supports(-moz-appearance: none) or (stroke-color: transparent){.control{--saf-conditional-line-height:calc(var(--saf-line-height-lg)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-md)*var(--saf-density)*(2 - var(--saf-density)));--saf-text-area-control-min-height:calc(40px*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + 32px*var(--saf-density)*(2 - var(--saf-density)));--saf-conditional-padding-block:calc(var(--saf-spacing-2)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-spacing-1)*var(--saf-density)*(2 - var(--saf-density)));--saf-text-area-control-font: var(--saf-font-weight-regular) var(--saf-font-size-md) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3);--saf-text-area-control-padding: var(--saf-conditional-padding-block) var(--saf-spacing-3)}.validation{--saf-conditional-line-height:calc(var(--saf-line-height-md)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-sm)*var(--saf-density)*(2 - var(--saf-density)));--saf-text-area-validation-font: var(--saf-font-weight-semibold) var(--saf-font-size-sm) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}}')}
`,shadowOptions:{delegatesFocus:!0},registry:t.getRegistry()})),exports.safTextAreaConfig={events:{onChange:"change",onInput:"input"}};
