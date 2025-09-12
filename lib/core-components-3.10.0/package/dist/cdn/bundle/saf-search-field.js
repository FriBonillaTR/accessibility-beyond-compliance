"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@saffron/config"),e=require("./saf-button-embedded.js"),a=require("./define-CgQAavGn.js"),o=require("./saf-icon.js"),r=require("./define-DFHSE1N5.js"),i=require("tslib"),s=require("@microsoft/fast-web-utilities"),n=require("./form-associated-DSP-KUNe.js"),l=require("./fast-element-DOTfrYFb.js"),d=require("./apply-mixins-CewQe2EQ.js"),c=require("./aria-global-CYzDgx1a.js"),p=require("./start-end-template-D7dQJgd3.js"),f=require("./global-enums-58U8enSy.js"),u=require("./slotted-cZBT0SIc.js"),h=require("./ref-BeTe_0iT.js"),b=require("./when-0aDJpnLk.js");require("./dom-helpers-DxoVHRyN.js"),require("./logger-vjs750p7.js"),require("@floating-ui/dom"),require("./a11y-DvNZtvTj.js");class v extends l.FASTElement{}class y extends(n.FormAssociated(v)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class m extends y{constructor(){super(...arguments),this.id=s.uniqueId("search-field-"),this.searchButtonLabel="Search",this.clearButtonLabel="Clear search",this.density=f.ComponentDensityEnum.inherit,this.clearButtonTooltipPlacement="top",this.searchButtonTooltipPlacement="bottom",this.hideSearchButtonTooltip=!1,this.preFilterSlot=null}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&l.Updates.enqueue(()=>{this.focus()})}validate(){super.validate(this.control)}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus(),this.handleChange(),this.$emit("clear")}handleChange(){this.$emit("change")}get ariaDescribedbyIds(){let t="";return this.instructionalText&&(t+=`instructional-${this.id}`),this.a11yAriaDescription&&(t+=" a11y-aria-description"),t}search(){this.$emit("search")}slottedDataChanged(){var t;this.dataLists&&(this.dataLists.innerHTML="",null===(t=this.slottedData)||void 0===t||t.forEach(t=>{this.dataLists.appendChild(t.cloneNode(!0))}))}}i.__decorate([l.attr({attribute:"readonly",mode:"boolean"})],m.prototype,"readOnly",void 0),i.__decorate([l.attr({mode:"boolean"})],m.prototype,"autofocus",void 0),i.__decorate([l.attr],m.prototype,"placeholder",void 0),i.__decorate([l.attr],m.prototype,"list",void 0),i.__decorate([l.attr({converter:l.nullableNumberConverter})],m.prototype,"maxlength",void 0),i.__decorate([l.attr({converter:l.nullableNumberConverter})],m.prototype,"minlength",void 0),i.__decorate([l.attr],m.prototype,"pattern",void 0),i.__decorate([l.attr({converter:l.nullableNumberConverter})],m.prototype,"size",void 0),i.__decorate([l.attr({mode:"boolean"})],m.prototype,"spellcheck",void 0),i.__decorate([l.observable],m.prototype,"defaultSlottedNodes",void 0),i.__decorate([l.attr({attribute:"id"})],m.prototype,"id",void 0),i.__decorate([l.attr({attribute:"label"})],m.prototype,"label",void 0),i.__decorate([l.observable],m.prototype,"slottedData",void 0),i.__decorate([l.attr({attribute:"instructional-text"})],m.prototype,"instructionalText",void 0),i.__decorate([l.attr({attribute:"search-button-label"}),l.observable],m.prototype,"searchButtonLabel",void 0),i.__decorate([l.attr({attribute:"search-clear-label"}),l.observable],m.prototype,"clearButtonLabel",void 0),i.__decorate([l.attr],m.prototype,"density",void 0),i.__decorate([l.attr({attribute:"a11y-aria-description"}),l.observable],m.prototype,"a11yAriaDescription",void 0),i.__decorate([l.attr({attribute:"clear-button-tooltip-placement"})],m.prototype,"clearButtonTooltipPlacement",void 0),i.__decorate([l.attr({attribute:"search-button-tooltip-placement"})],m.prototype,"searchButtonTooltipPlacement",void 0),i.__decorate([l.attr({attribute:"hide-search-button-tooltip",mode:"boolean"})],m.prototype,"hideSearchButtonTooltip",void 0),i.__decorate([l.attr],m.prototype,"autocomplete",void 0),i.__decorate([l.volatile],m.prototype,"ariaDescribedbyIds",null),i.__decorate([l.observable],m.prototype,"preFilterSlot",void 0);class g{}d.applyMixins(g,c.ARIAGlobalStatesAndProperties),d.applyMixins(m,p.StartEnd,g);exports.default=()=>(e.default(),a.SafButton(),o.default(),r.SafTooltip(),m.define({name:t.getComponentName("saf-search-field"),template:l.html`
	<template
		density="${t=>t.density}"
		embedded-item
		id="${t=>t.id}"
		label="${t=>t.label?t.label:null}"
		instructional-text="${t=>t.instructionalText?t.instructionalText:null}"
		a11y-aria-description="${t=>t.a11yAriaDescription}"
	>
		<div class="label-container" part="label-container">
			<label for="${t=>t.id}" class="label" part="label" id="label-${t=>t.id}">
				${t=>t.label}
			</label>

			<slot class="help-text" part="help-text" name="label-end"></slot>

			<p
				class="instructional-text"
				part="instructional-text"
				id="instructional-${t=>t.id}"
			>
				${t=>t.instructionalText}
			</p>
		</div>
		<div
			class="container${t=>t.preFilterSlot&&t.preFilterSlot.length>0?" pre-filter":""}"
		>
			<slot
				name="pre-filter"
				${u.slotted({property:"preFilterSlot",filter:u.elements()})}
			></slot>
			<saf-button-embedded>
				<div class="search-wrapper" part="search-wrapper">
					<div class="root" part="root" ${h.ref("root")}>
						<div class="input-wrapper" part="input-wrapper">
							<input
								class="control control-search"
								part="control"
								id="${t=>t.id}"
								@input="${t=>t.handleTextInput()}"
								@change="${t=>t.handleChange()}"
								?autofocus="${t=>t.autofocus}"
								?disabled="${t=>t.disabled}"
								list="${t=>t.list}"
								maxlength="${t=>t.maxlength}"
								minlength="${t=>t.minlength}"
								pattern="${t=>t.pattern}"
								placeholder="${t=>t.placeholder}"
								?readonly="${t=>t.readOnly}"
								?required="${t=>t.required}"
								size="${t=>t.size}"
								?spellcheck="${t=>t.spellcheck}"
								:value="${t=>t.value}"
								type="search"
								aria-atomic="${t=>t.ariaAtomic}"
								aria-autocomplete="${t=>t.ariaAutoComplete}"
								aria-busy="${t=>t.ariaBusy}"
								aria-controls="${t=>t.ariaControls}"
								aria-current="${t=>t.ariaCurrent}"
								aria-describedby="${t=>t.ariaDescribedbyIds.length>0?t.ariaDescribedbyIds:null}"
								aria-details="${t=>t.ariaDetails}"
								aria-disabled="${t=>t.ariaDisabled}"
								aria-errormessage="${t=>t.ariaErrormessage}"
								aria-flowto="${t=>t.ariaFlowto}"
								aria-haspopup="${t=>t.ariaHaspopup}"
								aria-hidden="${t=>t.ariaHidden}"
								aria-invalid="${t=>{var e;return null!==(e=t.ariaInvalid)&&void 0!==e&&e}}"
								aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
								aria-label="${t=>t.ariaLabel}"
								aria-labelledby="${t=>t.id} instructional-${t=>t.id}"
								aria-live="${t=>t.ariaLive}"
								aria-owns="${t=>t.ariaOwns}"
								aria-relevant="${t=>t.ariaRelevant}"
								aria-roledescription="${t=>t.ariaRoledescription}"
								autocomplete="${t=>t.autocomplete}"
								:searchButtonLabel="${t=>t.searchButtonLabel}"
								:clearButtonLabel="${t=>t.clearButtonLabel}"
								${h.ref("control")}
							/>
							<slot name="clear-button">
								<saf-button
									embedded-item
									appearance="tertiary"
									icon-only=""
									class="clear-button ${t=>t.value?"":"clear-button__hidden"}"
									part="clear-button"
									@click=${t=>t.handleClearInput()}
									?disabled="${t=>!t.value}"
									aria-label="${t=>t.clearButtonLabel}"
									id="clear-button"
									tabindex="${t=>t.value?"0":"-1"}"
								>
									<saf-icon part="clear-icon" icon-name="xmark-large"></saf-icon>
									<saf-tooltip
										anchor="clear-button"
										placement=${t=>t.clearButtonTooltipPlacement}
										>${t=>t.clearButtonLabel}</saf-tooltip
									>
								</saf-button>
							</slot>

							<slot
								name="data"
								${u.slotted({property:"slottedData",filter:u.elements("datalist")})}
							></slot>
							<div ${h.ref("dataLists")}></div>
						</div>
					</div>
				</div>
				<saf-button
					class="search-button"
					part="search-button"
					embedded-item
					?disabled="${t=>t.disabled}"
					type="button"
					appearance="tertiary"
					icon-only=""
					aria-label="${t=>t.searchButtonLabel}"
					id="search-button"
					@click="${t=>t.search()}"
				>
					<saf-icon
						part="search-icon"
						appearance="solid"
						icon-name="magnifying-glass"
					></saf-icon>
					${b.when(t=>!t.hideSearchButtonTooltip,l.html` <saf-tooltip
							anchor="search-button"
							placement=${t=>t.searchButtonTooltipPlacement}
							>${t=>t.searchButtonLabel}</saf-tooltip
						>`)}
				</saf-button>
			</saf-button-embedded>
		</div>

		${b.when(t=>t.a11yAriaDescription,l.html` <span
				class="a11y-aria-description"
				part="a11y-aria-description"
				id="a11y-aria-description"
			>
				${t=>t.a11yAriaDescription}
			</span>`)}
	</template>
`,styles:l.css`
	${t.replaceComponentNamesWithSafAttribute('button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:host{--saf-form-label-container-margin: 0 0 var(--saf-spacing-2) 0;--saf-form-label-text-decoration: none;color:var(--saf-color-text-heavy)}.label{font:var(--saf-form-label-font, var(--saf-type-body-default-md-strong-standard));text-decoration:var(--saf-input-label-text-decoration)}.instructional-text,.optional-text{font:var(--saf-form-label-instructional-text-font, var(--saf-type-body-default-sm-regular-standard))}.instructional-text{display:block;margin:0}.label-container{margin:var(--saf-form-label-container-margin);text-align:start}:host(:not([label],[instructional-text],[optional-text])) .label-container,:host(:not([label])) .label,:host(:not([instructional-text])) .instructional-text,:host(:not([optional-text])) .optional-text,.instructional-text:empty{display:none}:host([disabled]) .label,:host([disabled]) .instructional-text,:host([disabled]) .optional-text{color:var(--saf-color-interactive-disabled-strong)}:host([readonly]) .label,:host([readonly]) .instructional-text,:host([readonly]) .optional-text{color:var(--saf-color-text-heavy)}:host([product-header-item]){color:var(--saf-color-text-knockout)}:host([product-header-item][disabled]) .label,:host([product-header-item][disabled]) .instructional-text{color:var(--saf-product-header-color-interactive-on-disabled-subtle)}:host([product-header-item][readonly]) .label,:host([product-header-item][readonly]) .instructional-text{color:var(--saf-product-header-color-interactive-on-read-only-subtle)}@container style(--saf-density: 0){.label{--saf-form-label-font: var(--saf-type-body-default-md-strong-standard)}.instructional-text,.optional-text{--saf-form-label-instructional-text-font: var(--saf-type-body-default-sm-regular-standard)}}@container style(--saf-density: 1){.label{--saf-form-label-font: var(--saf-type-body-default-md-strong-compact)}.instructional-text,.optional-text{--saf-form-label-instructional-text-font: var(--saf-type-body-default-sm-regular-compact)}}@supports(-moz-appearance: none) or (stroke-color: transparent){.label{--saf-conditional-line-height:calc(var(--saf-line-height-lg)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-md)*var(--saf-density)*(2 - var(--saf-density)));--saf-form-label-font: var(--saf-font-weight-semibold) var(--saf-font-size-md) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}.instructional-text,.optional-text{--saf-conditional-line-height:calc(var(--saf-line-height-md)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-sm)*var(--saf-density)*(2 - var(--saf-density)));--saf-form-label-instructional-text-font: var(--saf-font-weight-regular) var(--saf-font-size-sm) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}}:host{display:block;user-select:none}:host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=""]){--saf-density: 2}.root{align-items:stretch;background:var(--saf-color-interactive-background-default);border:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);border-radius:var(--saf-border-radius-xs);color:var(--saf-color-text-heavy);display:flex;font:var(--saf-text-field-font, var(--saf-type-body-default-md-regular-standard));height:var(--saf-text-field-height, 40px);position:relative}.root,.control{width:100%}.control{appearance:none;background:rgba(0,0,0,0);border:none;box-sizing:border-box;height:100%;padding:var(--saf-text-field-control-padding, var(--saf-spacing-2) var(--saf-spacing-3))}.control:-webkit-autofill,.control:-webkit-autofill:hover,.control:-webkit-autofill:focus{border-radius:var(--saf-border-radius-xs)}.control:focus-visible{outline:none}.control::placeholder{color:var(--saf-color-text-subtle);opacity:var(--saf-opacity-7)}:host([disabled]) .control::placeholder{color:var(--saf-color-interactive-on-disabled-subtle)}:host([readonly]) .control::placeholder{color:var(--saf-color-text-heavy)}.start,.control,.end{align-self:center}.start,.end{fill:currentcolor;margin:auto}:host(:focus-visible){outline:none}:host([readOnly]) .root{background-color:var(--saf-color-interactive-read-only-subtle);border-color:var(--saf-color-interactive-border-read-only-default)}:host([disabled]) .root{background-color:var(--saf-color-interactive-disabled-subtle);border-color:var(--saf-color-interactive-border-disabled-default)}:host([disabled]) .root,:host([disabled]) .control{color:var(--saf-color-interactive-on-disabled-subtle);cursor:not-allowed}.root:has(.control:focus){box-shadow:var(--saf-drop-shadow-focus)}:host(:not([disabled])[invalid=true]) .root:has(.control:focus){box-shadow:var(--saf-drop-shadow-error-focus)}:host([disabled]) .root,:host([invalid=true]) .root{box-shadow:none}:host(:not([disabled],[readonly])) .root:hover{outline:var(--saf-line-width-thick) solid var(--saf-color-interactive-border-secondary-hover);outline-offset:-2px}:host([embedded-item]:not([disabled],[readonly])) .root:hover{outline-offset:-1px}:host([embedded-item]) .root{padding-inline-end:var(--saf-text-field-embedded-item-padding-inline-end, calc(var(--saf-spacing-10) - 2px))}:host([embedded-item][readonly]) .root{--saf-text-field-embedded-item-padding-inline-end: 0}:host(:not([disabled])[invalid=true]) .root{box-shadow:var(--saf-drop-shadow-error)}:host(:not([disabled])[is-success=true][invalid=false]) .root{box-shadow:var(--saf-drop-shadow-success)}:host(:not([disabled])[is-success=true][invalid=false]) .root:has(.control:focus){box-shadow:var(--saf-drop-shadow-success-focus)}:host .validation{display:flex;font:var(--saf-text-field-validation-font, var(--saf-type-body-default-sm-strong-standard));gap:var(--saf-spacing-1);margin-top:var(--saf-spacing-2)}:host .validation.error{color:var(--saf-color-status-error-strong)}:host .validation.success{color:var(--saf-color-status-success-strong)}:host .a11y-aria-description{display:none}:host input::-webkit-calendar-picker-indicator{color:rgba(0,0,0,0)}:host ::slotted([slot=label-end]){margin-left:var(--saf-spacing-05)}:host([product-header-item]) .root{border-color:var(--saf-product-header-color-border-stronger)}:host([product-header-item]:not([disabled],[readonly])) .root:hover{outline:var(--saf-line-width-thick) solid var(--saf-product-header-color-border-stronger)}:host([product-header-item][disabled]) .root{background-color:var(--saf-product-header-color-interactive-disabled-subtle);border-color:var(--saf-product-header-color-interactive-disabled-subtle)}:host([product-header-item][disabled]) .control,:host([product-header-item][disabled]) .control::placeholder{color:var(--saf-product-header-color-interactive-on-disabled-subtle)}:host([product-header-item][readonly]) .root{background-color:var(--saf-product-header-color-interactive-read-only-subtle);border-color:var(--saf-product-header-color-interactive-border-read-only-default)}:host([product-header-item][readonly]) .control,:host([product-header-item][readonly]) .control::placeholder{color:var(--saf-color-text-knockout)}:host([product-header-item]) .root:has(.control:focus){box-shadow:var(--saf-drop-shadow-product-header-focus)}@container style(--saf-density: 0){.root{--saf-text-field-font: var(--saf-type-body-default-md-regular-standard);--saf-text-field-height: 40px;--saf-text-field-control-padding: var(--saf-spacing-2) var(--saf-spacing-3);--saf-text-field-embedded-item-padding-inline-end: calc(var(--saf-spacing-10) - 2px)}.validation{--saf-text-field-validation-font: var(--saf-type-body-default-sm-strong-standard)}}@container style(--saf-density: 1){.root{--saf-text-field-font: var(--saf-type-body-default-md-regular-compact);--saf-text-field-height: 32px;--saf-text-field-control-padding: var(--saf-spacing-1) var(--saf-spacing-3);--saf-text-field-embedded-item-padding-inline-end: calc(var(--saf-spacing-8) - 2px)}.validation{--saf-text-field-validation-font: var(--saf-type-body-default-sm-strong-compact)}}@supports(-moz-appearance: none) or (stroke-color: transparent){.root{--saf-text-field-height:calc(40px*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + 32px*var(--saf-density)*(2 - var(--saf-density)));--saf-conditional-line-height:calc(var(--saf-line-height-lg)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-md)*var(--saf-density)*(2 - var(--saf-density)));--saf-conditional-padding-block:calc(var(--saf-spacing-2)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-spacing-1)*var(--saf-density)*(2 - var(--saf-density)));--saf-text-field-embedded-item-padding-inline-end:calc((var(--saf-spacing-10) - 2px)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + (var(--saf-spacing-8) - 2px)*var(--saf-density)*(2 - var(--saf-density)));--saf-text-field-font: var(--saf-font-weight-regular) var(--saf-font-size-md) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3);--saf-text-field-control-padding: var(--saf-conditional-padding-block) var(--saf-spacing-3)}.validation{--saf-conditional-line-height:calc(var(--saf-line-height-md)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-sm)*var(--saf-density)*(2 - var(--saf-density)));--saf-text-field-validation-font: var(--saf-font-weight-semibold) var(--saf-font-size-sm) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}}:host([date-rtl]) .control{direction:ltr;text-align:right}:host{display:block}:host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=""]){--saf-density: 2}:host ::slotted([slot=label-end]){margin-left:var(--saf-spacing-05)}.root{background-color:var(--saf-color-interactive-background-subtle);box-sizing:initial}.search-wrapper{grid-column-start:1;grid-row:span 3}.control{font:var(--saf-search-field-control-font, var(--saf-type-body-default-md-regular-standard));padding:var(--saf-search-field-control-padding, var(--saf-spacing-2) var(--saf-spacing-3))}.control::-webkit-search-cancel-button{appearance:none}.input-wrapper{display:flex;height:100%;position:relative;width:100%}:host(:not([readonly],[disabled])) .input-wrapper{background-color:var(--saf-color-interactive-background-default)}:host .container:not(.pre-filter) .input-wrapper{border-radius:var(--saf-border-radius-xs)}.search-button{grid-row-start:1}:host([readonly]) .search-button{display:none}.clear-button{display:inline-flex;position:relative;right:1px;z-index:var(--saf-z-index-default)}:host .root .clear-button:focus-within{--saf-drop-shadow-focus: none;--saf-line-width-thin: var(--saf-line-width-thick);--saf-button-border: var(--saf-color-interactive-focus)}.clear-button__hidden{opacity:0}:host(:hover:not([disabled],[readonly])) .clear-button,:host(:active:not([disabled],[readonly])) .clear-button,:host(:focus-within:not([disabled],[readonly])) .clear-button{opacity:1}:host(:hover:not([disabled],[readonly])) .clear-button__hidden,:host(:active:not([disabled],[readonly])) .clear-button__hidden,:host(:focus-within:not([disabled],[readonly])) .clear-button__hidden{opacity:0}:host .a11y-aria-description{display:none}:host input::-webkit-calendar-picker-indicator{color:rgba(0,0,0,0)}:host([disabled]) .control{cursor:not-allowed}:host([product-header-item]) .search-button::part(control):disabled{background:var(--saf-product-header-color-interactive-disabled-subtle);border-color:var(--saf-product-header-color-interactive-border-disabled-default);color:var(--saf-product-header-color-interactive-on-disabled-subtle)}:host .container.pre-filter{align-items:center;display:flex}.clear-button:is([embedded-item])::part(control){border-end-end-radius:0;border-end-start-radius:0;border-start-end-radius:0}:host .container.pre-filter .root{border-end-start-radius:0;border-start-start-radius:0}:host .container .clear-button::part(control),:host .container .search-button::part(control){inset-inline-end:0}.clear-button:is([embedded-item])::part(control):not(:focus,:hover){border-inline-start:0}.clear-button:is([embedded-item])::part(control):not(:focus,:hover),:host .container .search-button::part(control):not(:focus,:hover){border-inline-end:0}@container style(--saf-density: 0){.root{--saf-search-field-control-font: var(--saf-type-body-default-md-regular-standard);--saf-search-field-control-padding: var(--saf-spacing-2) var(--saf-spacing-3)}.clear-button{--saf-button-size: 40px}}@container style(--saf-density: 1){.root{--saf-search-field-control-font: var(--saf-type-body-default-md-regular-compact);--saf-search-field-control-padding: var(--saf-spacing-1) var(--saf-spacing-3)}.clear-button{--saf-button-size: 32px}}@supports(-moz-appearance: none) or (stroke-color: transparent){.root{--saf-conditional-line-height:calc(var(--saf-line-height-lg)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-md)*var(--saf-density)*(2 - var(--saf-density)));--saf-conditional-padding-block:calc(var(--saf-spacing-2)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-spacing-1)*var(--saf-density)*(2 - var(--saf-density)));--saf-search-field-control-font: var(--saf-font-weight-regular) var(--saf-font-size-md) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3);--saf-search-field-control-padding: var(--saf-conditional-padding-block) var(--saf-spacing-3)}.clear-button{--saf-button-size:calc(40px*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + 32px*var(--saf-density)*(2 - var(--saf-density)))}}')}
`,shadowOptions:{delegatesFocus:!0},registry:t.getRegistry()})),exports.safSearchFieldConfig={events:{onSearch:"search",onClear:"clear",onInput:"input",onChange:"change"}};
