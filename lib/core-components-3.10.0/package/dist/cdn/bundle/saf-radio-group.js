"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@saffron/config"),e=require("tslib"),a=require("@microsoft/fast-web-utilities"),o=require("./a11y-DvNZtvTj.js"),i=require("./direction-CkR1Fynu.js"),s=require("./radio-Cv2oPe0Z.js"),r=require("./fast-element-DOTfrYFb.js"),n=require("./when-0aDJpnLk.js"),l=require("./slotted-cZBT0SIc.js"),d=require("./saf-icon.js"),c=require("./saf-sr-only.js");require("./form-associated-DSP-KUNe.js"),require("./string-helpers-BBo17rr2.js"),require("./logger-vjs750p7.js");class u extends r.FASTElement{constructor(){super(...arguments),this.value="",this.orientation=a.Orientation.horizontal,this.radioChangeHandler=t=>{const e=t.target;e.checked&&(this.slottedRadioButtons.forEach(t=>{t!==e&&(t.checked=!1,this.isInsideFoundationToolbar||t.setAttribute("tabindex","-1"))}),this.selectedRadio=e,this.value=e.value,e.setAttribute("tabindex","0"),this.focusedRadio=e),t.stopPropagation()},this.moveToRadioByIndex=(t,e)=>{const a=t[e];this.isInsideToolbar||(a.setAttribute("tabindex","0"),a.checked=!0,this.selectedRadio=a),this.focusedRadio=a,a.focus()},this.moveRightOffGroup=()=>{var t;null===(t=this.nextElementSibling)||void 0===t||t.focus()},this.moveLeftOffGroup=()=>{var t;null===(t=this.previousElementSibling)||void 0===t||t.focus()},this.focusOutHandler=t=>{const e=this.slottedRadioButtons,a=t.target,o=null!==a?e.indexOf(a):0,i=this.focusedRadio?e.indexOf(this.focusedRadio):-1;return(0===i&&o===i||i===e.length-1&&i===o)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),e.forEach(t=>{t!==this.selectedRadio&&t.setAttribute("tabindex","-1")}))):(this.focusedRadio=e[0],this.focusedRadio.setAttribute("tabindex","0"),e.forEach(t=>{t!==this.focusedRadio&&t.setAttribute("tabindex","-1")}))),!0},this.handleDisabledClick=t=>{if(!this.disabled)return!0;t.preventDefault()},this.clickHandler=t=>{if(this.disabled)return;t.preventDefault();const e=t.target;e&&e instanceof s.Radio&&(e.checked=!0,e.setAttribute("tabindex","0"),this.selectedRadio=e,this.focusedRadio=e)},this.shouldMoveOffGroupToTheRight=(t,e,o)=>t===e.length&&this.isInsideToolbar&&o===a.keyArrowRight,this.shouldMoveOffGroupToTheLeft=(t,e)=>(this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&e===a.keyArrowLeft,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=t=>{const e=this.slottedRadioButtons;let a=0;if(a=this.focusedRadio?e.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(a,e,t.key))this.moveRightOffGroup();else for(a===e.length&&(a=0);a<e.length&&e.length>1;){if(!e[a].disabled){this.moveToRadioByIndex(e,a);break}if(this.focusedRadio&&a===e.indexOf(this.focusedRadio))break;if(a+1>=e.length){if(this.isInsideToolbar)break;a=0}else a+=1}},this.moveLeft=t=>{const e=this.slottedRadioButtons;let a=0;if(a=this.focusedRadio?e.indexOf(this.focusedRadio)-1:0,a=a<0?e.length-1:a,this.shouldMoveOffGroupToTheLeft(e,t.key))this.moveLeftOffGroup();else for(;a>=0&&e.length>1;){if(!e[a].disabled){this.moveToRadioByIndex(e,a);break}if(this.focusedRadio&&a===e.indexOf(this.focusedRadio))break;a-1<0?a=e.length-1:a-=1}},this.keydownHandler=t=>{const e=t.key;if(e in a.ArrowKeys&&(this.isInsideFoundationToolbar||this.disabled))return!0;switch(e){case a.keyEnter:this.checkFocusedRadio();break;case a.keyArrowRight:case a.keyArrowDown:this.direction===a.Direction.ltr?this.moveRight(t):this.moveLeft(t);break;case a.keyArrowLeft:case a.keyArrowUp:this.direction===a.Direction.ltr?this.moveLeft(t):this.moveRight(t);break;default:return!0}},this.inputs=[],this.required=!1,this.requiredText="*",this.optionalTextVisible=!0,this.invalid=!1,this.errorAriaLabel="Error",this.canAnnounceValidation=!1}disabledChanged(){}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.value===this.value&&(t.checked=!0,this.selectedRadio=t)}),this.$emit("change"),this.announceValidation()}slottedRadioButtonsChanged(t,e){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons();const a=this.slottedRadioButtons;(null==a?void 0:a.length)&&a.every(t=>!t.hasAttribute("checked"))&&a[0].setAttribute("tabindex","0"),this.disabled&&a.forEach(t=>t.disabled=!0)}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var t;return null!==(t=this.parentToolbar)&&void 0!==t&&t}get isInsideFoundationToolbar(){var t;return!!(null===(t=this.parentToolbar)||void 0===t?void 0:t.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=i.getDirection(this),this.setupRadioButtons(),r.Updates.enqueue(()=>{this.canAnnounceValidation=!0})}disconnectedCallback(){this.slottedRadioButtons.forEach(t=>{t.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const t=this.slottedRadioButtons.filter(t=>t.hasAttribute("checked")),e=t?t.length:0;if(e>1){t[e-1].checked=!0}let a=!1;if(this.slottedRadioButtons.forEach(t=>{void 0!==this.name&&t.setAttribute("name",this.name),this.value&&this.value===t.value?(this.selectedRadio=t,this.focusedRadio=t,t.checked=!0,t.setAttribute("tabindex","0"),a=!0):(this.isInsideFoundationToolbar||t.setAttribute("tabindex","-1"),t.checked=!1),t.addEventListener("change",this.radioChangeHandler)}),void 0===this.value&&this.slottedRadioButtons.length>0){const t=this.slottedRadioButtons.filter(t=>t.hasAttribute("checked")),e=null!==t?t.length:0;if(e>0&&!a){const a=t[e-1];a.checked=!0,this.focusedRadio=a,a.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}requiredChanged(){this.announceValidation()}invalidChanged(){this.announceValidation()}validationMessageChanged(){this.announceValidation()}announceValidation(){var t;this.canAnnounceValidation&&(null===(t=this.validationMessage)||void 0===t?void 0:t.length)&&!this.disabled&&(this.invalid||!this.value&&this.required)&&(this.canAnnounceValidation=!1,o.SafA11y.announce(this.validationMessage,"status"),setTimeout(()=>{this.canAnnounceValidation=!0},500))}}e.__decorate([r.attr({attribute:"readonly",mode:"boolean"})],u.prototype,"readOnly",void 0),e.__decorate([r.attr({attribute:"disabled",mode:"boolean"})],u.prototype,"disabled",void 0),e.__decorate([r.attr],u.prototype,"name",void 0),e.__decorate([r.attr,r.observable],u.prototype,"value",void 0),e.__decorate([r.attr],u.prototype,"orientation",void 0),e.__decorate([r.observable],u.prototype,"childItems",void 0),e.__decorate([r.observable],u.prototype,"slottedRadioButtons",void 0),e.__decorate([r.attr({attribute:"required",mode:"boolean"}),r.observable],u.prototype,"required",void 0),e.__decorate([r.attr({attribute:"label"})],u.prototype,"label",void 0),e.__decorate([r.attr({attribute:"a11y-aria-label"})],u.prototype,"a11yAriaLabel",void 0),e.__decorate([r.attr({attribute:"required-text"})],u.prototype,"requiredText",void 0),e.__decorate([r.attr({attribute:"instructional-text"})],u.prototype,"instructionalText",void 0),e.__decorate([r.attr({attribute:"optional-text"})],u.prototype,"optionalText",void 0),e.__decorate([r.attr({attribute:"optional-text-visible",mode:"boolean"}),r.observable],u.prototype,"optionalTextVisible",void 0),e.__decorate([r.attr({attribute:"invalid",mode:"boolean"}),r.observable],u.prototype,"invalid",void 0),e.__decorate([r.attr({attribute:"validation-message"})],u.prototype,"validationMessage",void 0),e.__decorate([r.attr({attribute:"error-aria-label"}),r.observable],u.prototype,"errorAriaLabel",void 0);exports.default=()=>(d.default(),c.default(),u.define({name:t.getComponentName("saf-radio-group"),template:r.html`
		<template
			label="${t=>t.label?t.label:null}"
			instructional-text="${t=>t.instructionalText?t.instructionalText:null}"
			optional-text="${t=>t.optionalText?t.optionalText:null}"
			value="${t=>t.value}"
			validation-message="${t=>t.validationMessage}"
			readonly="${t=>t.readOnly}"
			@click="${(t,e)=>t.clickHandler(e.event)}"
			@keydown="${(t,e)=>t.keydownHandler(e.event)}"
			@focusout="${(t,e)=>t.focusOutHandler(e.event)}"
			required="${t=>t.required}"
			required-text="${t=>t.requiredText}"
			error-aria-label="${t=>t.errorAriaLabel}"
		>
			<fieldset
				part="control"
				class="control"
				role="radiogroup"
				aria-disabled="${t=>t.disabled}"
				aria-errormessage="${t=>t.invalid?`status-${t.id}`:null}"
				aria-invalid="${t=>t.ariaInvalid||Boolean(t.invalid)}"
				aria-label="${t=>t.a11yAriaLabel}"
				aria-orientation="${t=>t.orientation}"
				aria-required="${t=>t.required}"
				aria-readonly="${t=>t.readOnly}"
			>
				<legend part="legend" class="legend label-container">
					<span class="label" part="label" id="label-${t=>t.id}">
						${t=>t.label}${n.when(t=>t.required,r.html`<span class="required-text" part="required-text" aria-hidden="true"
								>${t=>"*"===t.requiredText?`${t.requiredText}`:` ${t.requiredText}`}
							</span>`)}
					</span>

					<slot class="help-text" part="help-text" name="label-end"></slot>

					${n.when(t=>t.optionalTextVisible,r.html`<span
							class="optional-text"
							part="optional-text"
							id="optional-${t=>t.id}"
						>
							${t=>t.optionalText}
						</span>`)}
					${n.when(t=>!t.optionalTextVisible,r.html`<saf-sr-only> ${t=>t.optionalText} </saf-sr-only>`)}
					<p
						id="instructional-${t=>t.id}"
						part="instructional-text"
						class="instructional-text"
					>
						${t=>t.instructionalText}
					</p>
					${n.when(t=>!t.disabled&&t.invalid,r.html`<slot
							id="status-${t=>t.id}"
							class="validation error"
							name="error"
							part="error"
							><saf-icon
								part="error-icon"
								icon-name="hexagon-exclamation"
								appearance="solid"
								color="var(--saf-color-status-error-strong)"
								presentation="false"
								aria-label="${t=>t.errorAriaLabel}"
							>
							</saf-icon>
							<span part="message" class="message"
								>${t=>t.validationMessage}
							</span></slot
						>`)}
				</legend>
				<slot
					class="positioning-region"
					part="positioning-region"
					${l.slotted({property:"slottedRadioButtons",filter:l.elements("saf-radio")})}
				></slot>
			</fieldset>
		</template>
	`,styles:r.css`
	${t.replaceComponentNamesWithSafAttribute(":host{--saf-form-label-container-margin: 0 0 var(--saf-spacing-2) 0;--saf-form-label-text-decoration: none;color:var(--saf-color-text-heavy)}.label{font:var(--saf-form-label-font, var(--saf-type-body-default-md-strong-standard));text-decoration:var(--saf-input-label-text-decoration)}.instructional-text,.optional-text{font:var(--saf-form-label-instructional-text-font, var(--saf-type-body-default-sm-regular-standard))}.instructional-text{display:block;margin:0}.label-container{margin:var(--saf-form-label-container-margin);text-align:start}:host(:not([label],[instructional-text],[optional-text])) .label-container,:host(:not([label])) .label,:host(:not([instructional-text])) .instructional-text,:host(:not([optional-text])) .optional-text,.instructional-text:empty{display:none}:host([disabled]) .label,:host([disabled]) .instructional-text,:host([disabled]) .optional-text{color:var(--saf-color-interactive-disabled-strong)}:host([readonly]) .label,:host([readonly]) .instructional-text,:host([readonly]) .optional-text{color:var(--saf-color-text-heavy)}:host([product-header-item]){color:var(--saf-color-text-knockout)}:host([product-header-item][disabled]) .label,:host([product-header-item][disabled]) .instructional-text{color:var(--saf-product-header-color-interactive-on-disabled-subtle)}:host([product-header-item][readonly]) .label,:host([product-header-item][readonly]) .instructional-text{color:var(--saf-product-header-color-interactive-on-read-only-subtle)}@container style(--saf-density: 0){.label{--saf-form-label-font: var(--saf-type-body-default-md-strong-standard)}.instructional-text,.optional-text{--saf-form-label-instructional-text-font: var(--saf-type-body-default-sm-regular-standard)}}@container style(--saf-density: 1){.label{--saf-form-label-font: var(--saf-type-body-default-md-strong-compact)}.instructional-text,.optional-text{--saf-form-label-instructional-text-font: var(--saf-type-body-default-sm-regular-compact)}}@supports(-moz-appearance: none) or (stroke-color: transparent){.label{--saf-conditional-line-height:calc(var(--saf-line-height-lg)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-md)*var(--saf-density)*(2 - var(--saf-density)));--saf-form-label-font: var(--saf-font-weight-semibold) var(--saf-font-size-md) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}.instructional-text,.optional-text{--saf-conditional-line-height:calc(var(--saf-line-height-md)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-sm)*var(--saf-density)*(2 - var(--saf-density)));--saf-form-label-instructional-text-font: var(--saf-font-weight-regular) var(--saf-font-size-sm) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}}:host{display:block}:host ::slotted([slot=label-end]){margin-left:var(--saf-spacing-05)}.control{align-items:start;border:none;display:flex;flex-direction:column}.control,legend,.instructional-text{margin:0;padding:0}saf-status{margin:var(--saf-spacing-2) 0}.positioning-region{display:flex;flex-wrap:wrap}:host([orientation=vertical]) .positioning-region{flex-direction:column;gap:var(--saf-spacing-4)}:host([orientation=horizontal]) .positioning-region{flex-direction:row}:host .validation{display:flex;font:var(--saf-type-body-default-sm-strong-standard);gap:var(--saf-spacing-1);margin-top:var(--saf-spacing-2)}:host .validation[name=error]{color:var(--saf-color-status-error-strong)}:host .validation[name=success]{color:var(--saf-color-status-success-strong)}")}
`,registry:t.getRegistry()})),exports.safRadioGroupConfig={events:{onChange:"change",onClick:"click",onKeyDown:"keydown",onFocusOut:"focusout",onReset:"reset"}};
