"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("./saf-icon.js"),a=require("tslib"),i=require("@floating-ui/dom"),s=require("@microsoft/fast-web-utilities"),o=require("./a11y-DvNZtvTj.js"),l=require("./apply-mixins-CewQe2EQ.js"),n=require("./start-end-template-D7dQJgd3.js"),r=require("./listbox-BFi_umEM.js"),d=require("./form-associated-DSP-KUNe.js"),c=require("./global-enums-58U8enSy.js"),p=require("./dom-helpers-DxoVHRyN.js"),u=require("./fast-element-DOTfrYFb.js"),h=require("./ref-BeTe_0iT.js"),f=require("./when-0aDJpnLk.js"),v=require("./slotted-cZBT0SIc.js");require("./logger-vjs750p7.js"),require("./option-3u3pMIm5.js"),require("./aria-global-CYzDgx1a.js");class b extends r.Listbox{}class y extends(d.FormAssociated(b)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}const m="top";class g extends y{constructor(){super(...arguments),this.open=!1,this.listboxId=s.uniqueId("listbox-"),this.id=s.uniqueId("select-"),this.required=!1,this.requiredText="*",this.placement=m,this.invalid=!1,this.successAriaLabel="Success",this.errorAriaLabel="Error",this.density=c.ComponentDensityEnum.inherit,this.prefilter=!1,this.typedText="",this.typingTimeout=null,this.typedTimeout=800,this.canAnnounceValidation=!1}openChanged(e,t){var a;if(this.collapsible){if(this.open)return this.ariaExpanded="true",u.Updates.enqueue(()=>this.setPositioning()),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void u.Updates.enqueue(()=>this.focus());null===(a=this.cleanup)||void 0===a||a.call(this),this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return u.Observable.track(this,"value"),this._value}set value(e){var t,a,i,s,o,l,n;const r=`${this._value}`;if(null===(t=this._options)||void 0===t?void 0:t.length){const t=this._options.findIndex(t=>t.value===e),r=null!==(i=null===(a=this._options[this.selectedIndex])||void 0===a?void 0:a.value)&&void 0!==i?i:null,d=null!==(o=null===(s=this._options[t])||void 0===s?void 0:s.value)&&void 0!==o?o:null;-1!==t&&r===d||(e="",this.selectedIndex=t),e=null!==(n=null===(l=this.firstSelectedOption)||void 0===l?void 0:l.value)&&void 0!==n?n:e}r!==e&&(this._value=e,super.valueChanged(r,e),u.Observable.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,a;this.$fastController.isConnected&&(this.value=null!==(a=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.value)&&void 0!==a?a:""),e&&(this.$emit("input",this,{bubbles:!1,composed:void 0}),this.$emit("change",this,{bubbles:!1,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}isRTL(){return"rtl"===window.getComputedStyle(this).getPropertyValue("direction")}setPositioning(){this.$fastController.isConnected&&(this.cleanup=i.autoUpdate(this,this.listbox,()=>a.__awaiter(this,void 0,void 0,function*(){var e;const{middlewareData:t,x:a,y:s}=yield i.computePosition(this.control,this.listbox,{placement:"bottom-start",strategy:"fixed",middleware:[i.autoPlacement({allowedPlacements:["top","bottom"]}),i.offset(8),i.size({apply:({availableHeight:e,rects:t})=>{const a=this.prefilter?Math.max(1.5*t.reference.width,120):t.reference.width;Object.assign(this.listbox.style,{maxHeight:`${e}px`,width:`${a}px`})}}),i.hide()]});if(null===(e=t.hide)||void 0===e?void 0:e.referenceHidden)return void(this.open=!1);let o=a;if(this.prefilter){const e=this.control.getBoundingClientRect();o=this.isRTL()?e.right-this.listbox.offsetWidth:e.left}Object.assign(this.listbox.style,{position:"fixed",top:"0",left:"0",transform:`translate(${o}px, ${s}px)`})})))}get displayValue(){var e,t;return u.Observable.track(this,"displayValue"),null!==(t=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)&&void 0!==t?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const a=e.relatedTarget;this.isSameNode(a)?this.focus():(null===(t=this.options)||void 0===t?void 0:t.includes(a))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),"value"===t&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach(e=>{u.Observable.getNotifier(e).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,t),this.options.forEach(e=>{u.Observable.getNotifier(e).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=(null===(t=this.listbox)||void 0===t?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var a;super.selectedOptionsChanged(e,t),null===(a=this.options)||void 0===a||a.forEach((e,t)=>{var a;const i=null===(a=this.proxy)||void 0===a?void 0:a.options.item(t);i&&(i.selected=e.selected)})}setDefaultSelectedOption(){var e;const t=null!==(e=this.options)&&void 0!==e?e:Array.from(this.children).filter(r.Listbox.slottedOptionFilter),a=null==t?void 0:t.findIndex(e=>e.hasAttribute("selected")||e.selected||e.value===this.value);this.selectedIndex=-1===a?0:a}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)}))}keydownHandler(e){if(this.disabled)return!0;const t=e.key||e.key.charCodeAt(0);switch(t){case s.keySpace:p.isActiveElement(this)&&(e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open));break;case s.keyHome:case s.keyEnd:e.preventDefault(),this.open||(this.open=!0),super.keydownHandler(e);break;case s.keyEnter:p.isActiveElement(this)&&(e.preventDefault(),this.open=!this.open);break;case s.keyEscape:p.isActiveElement(this)&&this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case s.keyTab:this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case s.keyArrowUp:case s.keyArrowDown:this.open||(this.open=!0),e.altKey||super.keydownHandler(e)}return!this.open&&Number.isInteger(this.indexWhenOpened)&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===s.keyArrowDown||t===s.keyArrowUp)}connectedCallback(){super.connectedCallback(),this.addEventListener("contentchange",this.updateDisplayValue),this.addEventListener("keydown",this.captureKeyDown),this.ariaControls=this.listboxId,u.Updates.enqueue(()=>{this.canAnnounceValidation=!0})}disconnectedCallback(){var e;this.removeEventListener("contentchange",this.updateDisplayValue),null===(e=this.cleanup)||void 0===e||e.call(this),super.disconnectedCallback(),this.removeEventListener("keydown",this.captureKeyDown)}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){var e;this.$fastController.isConnected&&(this.displayValueEl.lang=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.lang,this.displayValueEl.lang||this.displayValueEl.removeAttribute("lang")),this.collapsible&&u.Observable.notify(this,"displayValue")}get computedAriaDescribedby(){return this.ariaDescribedby||(this.instructionalText?`instructional-${this.id}`:"")||null}get computedAriaLabelledby(){if(this.ariaLabelledby)return this.ariaLabelledby;let e=this.label?`label-${this.id}`:"";return e+=this.optionalText?` optional-${this.id}`:"",this.selectAriaLabel&&(e=`select-aria-label-${this.id}`),this.invalid&&this.errorAriaLabel&&this.errorAriaLabel.length>0&&(e+=` error-label-${this.id}`),!this.invalid&&this.isSuccess&&this.successAriaLabel&&this.successAriaLabel.length>0&&(e+=` success-label-${this.id}`),(this.invalid||!this.invalid&&this.isSuccess)&&this.validationMessage&&this.validationMessage.length>0&&(e+=` validation-message-${this.id}`),e.trim().length>0?e:null}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),u.Updates.enqueue(()=>{const i=[{attributeName:"label",idInShadowDom:"label"},{attributeName:"optional-text",idInShadowDom:"optional"},{attributeName:"select-aria-label",idInShadowDom:"select-aria-label"},{attributeName:"instructional-text",idInShadowDom:"instructional"},{attributeName:"error-aria-label",idInShadowDom:"error-label"},{attributeName:"success-aria-label",idInShadowDom:"success-label"},{attributeName:"validation-message",idInShadowDom:"validation-message"}].find(t=>t.attributeName===e);t!==a&&i&&this.accessibilityElementsToParent(i.idInShadowDom,a)})}accessibilityElementsToParent(e,t){var a,i;const s=(e,a)=>{var i;const s=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector(`#${a}-${this.id}`);if(!s)return;if(!e.querySelector(`#${a}-${this.id}`)){const t=s.cloneNode(!0);t.removeAttribute("slot"),t.removeAttribute("for"),e.append(t)}const o=e.querySelector(`#${a}-${this.id}`);o&&null!=t&&(o.textContent=t)},o=`saf-a11y-${this.id}`;let l=null===(a=this.parentElement)||void 0===a?void 0:a.querySelector(`#${o}`);l||(l=document.createElement("div"),l.id=o,l.setAttribute("style","display:none"),null===(i=this.parentElement)||void 0===i||i.append(l)),"string"!=typeof e?e.forEach(e=>{s(l,e)}):s(l,e)}isSuccessChanged(){this.announceValidation()}invalidChanged(){this.announceValidation()}validationMessageChanged(){this.announceValidation()}captureKeyDown(e){1!==e.key.length||e.ctrlKey||e.metaKey||(this.typedText+=e.key.toLowerCase(),this.typingTimeout&&clearTimeout(this.typingTimeout),this.typingTimeout=setTimeout(()=>this.typedText="",this.typedTimeout),this.setValueMatchingOption())}setValueMatchingOption(){var t,a,i,s;const o=Array.from(this.querySelectorAll(e.getComponentName("saf-option"))).find(e=>{var t;return null===(t=e.textContent)||void 0===t?void 0:t.toLowerCase().trim().startsWith(this.typedText)});if(o){this.value=null!==(a=null!==(t=o.value)&&void 0!==t?t:null==o?void 0:o.textContent)&&void 0!==a?a:"";const e=this._options.findIndex(e=>e.value===o.value||e===o);-1!==e&&(this.selectedIndex=e,this._value=null!==(s=null!==(i=o.value)&&void 0!==i?i:null==o?void 0:o.textContent)&&void 0!==s?s:"",u.Observable.notify(this,"value"),this.updateValue(!0))}}announceValidation(){var e;this.canAnnounceValidation&&(null===(e=this.validationMessage)||void 0===e?void 0:e.length)&&!this.disabled&&(this.isSuccess&&!this.invalid||this.invalid)&&(this.canAnnounceValidation=!1,o.SafA11y.announce(this.validationMessage,"status"),setTimeout(()=>{this.canAnnounceValidation=!0},500))}}a.__decorate([u.attr({attribute:"open",mode:"boolean"})],g.prototype,"open",void 0),a.__decorate([u.volatile],g.prototype,"collapsible",null),a.__decorate([u.observable],g.prototype,"control",void 0),a.__decorate([u.observable],g.prototype,"displayValueEl",void 0),a.__decorate([u.attr],g.prototype,"id",void 0),a.__decorate([u.attr({mode:"boolean"})],g.prototype,"required",void 0),a.__decorate([u.attr({attribute:"label"})],g.prototype,"label",void 0),a.__decorate([u.attr({attribute:"select-aria-label"})],g.prototype,"selectAriaLabel",void 0),a.__decorate([u.attr({attribute:"instructional-text"})],g.prototype,"instructionalText",void 0),a.__decorate([u.attr({attribute:"required-text"})],g.prototype,"requiredText",void 0),a.__decorate([u.volatile],g.prototype,"computedAriaDescribedby",null),a.__decorate([u.volatile],g.prototype,"computedAriaLabelledby",null),a.__decorate([u.attr({attribute:"optional-text"})],g.prototype,"optionalText",void 0),a.__decorate([u.attr({attribute:"invalid",mode:"boolean"})],g.prototype,"invalid",void 0),a.__decorate([u.attr({attribute:"validation-message"})],g.prototype,"validationMessage",void 0),a.__decorate([u.attr({attribute:"is-success",mode:"boolean"})],g.prototype,"isSuccess",void 0),a.__decorate([u.attr({attribute:"success-aria-label"})],g.prototype,"successAriaLabel",void 0),a.__decorate([u.attr({attribute:"error-aria-label"})],g.prototype,"errorAriaLabel",void 0),a.__decorate([u.attr],g.prototype,"density",void 0),a.__decorate([u.attr({mode:"boolean"})],g.prototype,"prefilter",void 0),a.__decorate([u.attr],g.prototype,"autocomplete",void 0),a.__decorate([u.attr({attribute:"typed-timeout"})],g.prototype,"typedTimeout",void 0);class x{}a.__decorate([u.observable],x.prototype,"ariaControls",void 0),l.applyMixins(x,r.DelegatesARIAListbox),l.applyMixins(g,n.StartEnd,x);function w(){return u.html`
		<template
			aria-activedescendant="${e=>e.ariaActiveDescendant}"
			aria-controls="${e=>e.ariaControls}"
			aria-disabled="${e=>e.ariaDisabled}"
			aria-expanded="${e=>e.ariaExpanded}"
			aria-haspopup="${e=>e.collapsible?"listbox":null}"
			aria-multiselectable="${e=>e.ariaMultiSelectable}"
			aria-describedby=${e=>e.computedAriaDescribedby}
			aria-labelledby=${e=>e.computedAriaLabelledby}
			aria-required="${e=>e.required}"
			aria-invalid="${e=>e.ariaInvalid||Boolean(e.invalid)}"
			autocomplete="${e=>e.autocomplete}"
			?open="${e=>e.open}"
			role="combobox"
			tabindex="${e=>e.disabled?null:"0"}"
			@focusin="${(e,t)=>e.focusinHandler(t.event)}"
			@focusout="${(e,t)=>e.focusoutHandler(t.event)}"
			@keydown="${(e,t)=>e.keydownHandler(t.event)}"
			@click="${(e,t)=>e.clickHandler(t.event)}"
			prefilter="${e=>e.prefilter}"
		>
			<div class="label-container" part="label-container" aria-hidden="true">
				<slot name="label-text"> ${u.html`<label
		slot="label-text"
		part="label"
		id="label-${e=>e.id}"
		for="${e=>e.id}"
		class="label"
	>
		${e=>e.label}${f.when(e=>e.required,u.html`<span class="required-text" part="required-text" aria-hidden="true"
				>${e=>"*"===e.requiredText?`${e.requiredText}`:` ${e.requiredText}`}
			</span>`)}
	</label>`} </slot>

				<slot class="help-text" part="help-text" name="label-end"></slot>

				<slot name="optional-text"> ${u.html`<span
		slot="optional-text"
		part="optional-text"
		id="optional-${e=>e.id}"
		class="optional-text"
	>
		${e=>e.optionalText}
	</span>`}</slot>
				<slot name="select-aria-label" class="a11y-aria-description">
					${u.html`<span slot="select-aria-label" id="select-aria-label-${e=>e.id}">
		${e=>e.selectAriaLabel}
	</span>`}
				</slot>
				<p class="instructional-text" part="instructional-text">
					<slot name="instructional-text"> ${u.html`<span
		slot="instructional-text"
		part="instructional-text"
		id="instructional-${e=>e.id}"
	>
		${e=>e.instructionalText}
	</span>`} </slot>
				</p>
				<slot name="error-label" class="a11y-aria-description"> ${u.html`<span slot="error-label" part="error-label" id="error-label-${e=>e.id}">
		${e=>e.errorAriaLabel}
	</span>`}</slot>
				<slot name="success-label" class="a11y-aria-description">
					${u.html`<span
		slot="success-label"
		part="success-label"
		id="success-label-${e=>e.id}"
	>
		${e=>e.successAriaLabel}
	</span>`}</slot
				>
				<slot name="validation-message" class="a11y-aria-description">
					${u.html`<span
		slot="validation-message"
		part="validation-message"
		id="validation-message-${e=>e.id}"
	>
		${e=>e.validationMessage}
	</span>`}</slot
				>
			</div>
			<div
				part="root"
				class="root"
				@mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
			>
				<div
					style="display: ${e=>e.collapsible?"flex":"none"};"
					class="control"
					part="control"
					?disabled="${e=>e.disabled}"
					?required="${e=>e.required}"
					required-text="${e=>e.requiredText}"
					invalid="${e=>e.invalid}"
					aria-disabled="${e=>e.ariaDisabled}"
					is-success="${e=>e.isSuccess&&!e.invalid}"
					${h.ref("control")}
				>
					${n.startSlotTemplate()}
					<slot name="button-container">
						${f.when(e=>e.prefilter,u.html`
								<slot name="start">
									<div class="prefilter-icon" part="prefilter-icon">
										<saf-icon
											presentation="true"
											size="16"
											icon-name="filter"
											class="prefilter-icon-svg"
											part="prefilter-icon-svg"
										></saf-icon>
									</div>
								</slot>
							`)}
						<div class="selected-value" part="selected-value" ${h.ref("displayValueEl")}>
							<slot name="selected-value">${e=>e.displayValue}</slot>
						</div>
						<div aria-hidden="true" class="indicator" part="indicator">
							<slot name="indicator">
								<saf-icon
									size="${e=>e.prefilter?"16":"12"}"
									icon-name="chevron-down"
									appearance="solid"
									class="select-indicator"
									part="select-indicator"
								></saf-icon>
							</slot>
						</div>
					</slot>
					${n.endSlotTemplate()}
				</div>
				<div
					class="listbox"
					id="${e=>e.listboxId}"
					part="listbox"
					role="listbox"
					?disabled="${e=>e.disabled}"
					?hidden="${e=>!!e.collapsible&&!e.open}"
					${h.ref("listbox")}
				>
					<div class="listbox-scroll" part="listbox-scroll">
						<slot
							${v.slotted({filter:r.Listbox.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
						></slot>
					</div>
				</div>
			</div>
			${f.when(e=>e.invalid,u.html`
					<div class="validation error" part="error">
						<slot id="status-${e=>e.id}" name="error">
							<saf-icon
								class="error-icon"
								part="error-icon"
								icon-name="hexagon-exclamation"
								appearance="solid"
								color="var(--saf-color-status-error-strong)"
								presentation="false"
								aria-label="${e=>e.errorAriaLabel}"
							>
							</saf-icon>
							<span part="message" class="message">
								${e=>e.validationMessage}
							</span>
						</slot>
					</div>
				`)}
			${f.when(e=>!e.invalid&&e.isSuccess,u.html`
					<div class="validation success" part="success">
						<slot id="status-${e=>e.id}" name="success">
							<saf-icon
								class="success-icon"
								part="success-icon"
								icon-name="circle-check"
								appearance="solid"
								color="var(--saf-color-status-success-strong)"
								aria-label="${e=>e.successAriaLabel}"
								presentation="false"
							>
							</saf-icon>
							<span part="message" class="message">
								${e=>e.validationMessage}
							</span>
						</slot>
					</div>
				`)}
		</template>
	`}exports.default=()=>(t.default(),g.define({name:e.getComponentName("saf-select"),template:w(),styles:u.css`
	${e.replaceComponentNamesWithSafAttribute('button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:host{--saf-form-label-container-margin: 0 0 var(--saf-spacing-2) 0;--saf-form-label-text-decoration: none;color:var(--saf-color-text-heavy)}.label{font:var(--saf-form-label-font, var(--saf-type-body-default-md-strong-standard));text-decoration:var(--saf-input-label-text-decoration)}.instructional-text,.optional-text{font:var(--saf-form-label-instructional-text-font, var(--saf-type-body-default-sm-regular-standard))}.instructional-text{display:block;margin:0}.label-container{margin:var(--saf-form-label-container-margin);text-align:start}:host(:not([label],[instructional-text],[optional-text])) .label-container,:host(:not([label])) .label,:host(:not([instructional-text])) .instructional-text,:host(:not([optional-text])) .optional-text,.instructional-text:empty{display:none}:host([disabled]) .label,:host([disabled]) .instructional-text,:host([disabled]) .optional-text{color:var(--saf-color-interactive-disabled-strong)}:host([readonly]) .label,:host([readonly]) .instructional-text,:host([readonly]) .optional-text{color:var(--saf-color-text-heavy)}:host([product-header-item]){color:var(--saf-color-text-knockout)}:host([product-header-item][disabled]) .label,:host([product-header-item][disabled]) .instructional-text{color:var(--saf-product-header-color-interactive-on-disabled-subtle)}:host([product-header-item][readonly]) .label,:host([product-header-item][readonly]) .instructional-text{color:var(--saf-product-header-color-interactive-on-read-only-subtle)}@container style(--saf-density: 0){.label{--saf-form-label-font: var(--saf-type-body-default-md-strong-standard)}.instructional-text,.optional-text{--saf-form-label-instructional-text-font: var(--saf-type-body-default-sm-regular-standard)}}@container style(--saf-density: 1){.label{--saf-form-label-font: var(--saf-type-body-default-md-strong-compact)}.instructional-text,.optional-text{--saf-form-label-instructional-text-font: var(--saf-type-body-default-sm-regular-compact)}}@supports(-moz-appearance: none) or (stroke-color: transparent){.label{--saf-conditional-line-height:calc(var(--saf-line-height-lg)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-md)*var(--saf-density)*(2 - var(--saf-density)));--saf-form-label-font: var(--saf-font-weight-semibold) var(--saf-font-size-md) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}.instructional-text,.optional-text{--saf-conditional-line-height:calc(var(--saf-line-height-md)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-sm)*var(--saf-density)*(2 - var(--saf-density)));--saf-form-label-instructional-text-font: var(--saf-font-weight-regular) var(--saf-font-size-sm) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}}:host{display:block}:host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=""]){--saf-density: 2}:host ::slotted([slot=label-end]){margin-left:var(--saf-spacing-05)}:host .control{align-items:center;border-radius:var(--saf-border-radius-xs);color:var(--saf-color-text-heavy);display:inline-flex;height:var(--saf-select-control-height, 40px);position:relative}:host .control,:host .listbox{background-color:var(--saf-color-interactive-background-default);border:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);cursor:default;display:flex}:host([slot=pre-filter]){flex-shrink:1;min-width:var(--saf-select-pre-filter-min-width, 100px)}:host([slot=pre-filter]) .control{background-color:var(--saf-color-interactive-background-subtle);border-end-end-radius:0;border-start-end-radius:0;justify-content:space-between;max-width:var(--saf-select-control-max-width, 200px);width:100%}:host([slot=pre-filter]) .selected-value{min-width:var(--saf-selected-value-min-width, 12px)}:host([slot=pre-filter]:not(:focus)) .control{border-inline-end:0}:host([slot=pre-filter]:focus) .control{position:relative;z-index:var(--saf-z-index-active)}:host .listbox{border-radius:var(--saf-border-radius-sm);box-shadow:var(--saf-drop-shadow-level-2);box-sizing:border-box;overflow:hidden;position:fixed;z-index:var(--saf-z-index-dropdown)}:host .listbox-scroll{overflow-y:auto;overscroll-behavior:contain;padding:var(--saf-spacing-1);width:100%}:host .selected-value{color:var(--saf-color-text-heavy);font:var(--saf-select-control-font, var(--saf-type-body-default-md-regular-standard));overflow:hidden;padding:var(--saf-select-control-padding, var(--saf-spacing-2) var(--saf-spacing-3));text-overflow:ellipsis;text-wrap:nowrap}:host .indicator,:host .prefilter-icon{align-items:center;box-sizing:border-box;display:flex;height:var(--saf-select-indicator-size, 40px);justify-content:center;margin-inline-start:auto;padding:var(--saf-select-indicator-padding, var(--saf-spacing-3));width:var(--saf-select-indicator-size, 40px)}:host([slot=pre-filter]) .prefilter-icon{margin-inline-start:0;padding-inline-end:0;width:initial}:host([disabled]) .control,:host([disabled]) .control .selected-value{color:var(--saf-color-interactive-on-disabled-subtle)}:host([disabled]) .control{background:var(--saf-color-interactive-disabled-subtle);border-color:var(--saf-color-interactive-border-disabled-default);cursor:not-allowed}:host([readonly]) .control{background-color:var(--saf-color-interactive-read-only-subtle);border-color:var(--saf-color-interactive-border-read-only-default)}:host(:not([disabled])) .control:hover{outline:var(--saf-line-width-thick) solid var(--saf-color-interactive-border-secondary-hover);outline-offset:-2px}:host(:not([disabled])) .control[invalid=true]{box-shadow:var(--saf-drop-shadow-error)}:host(:focus:not([disabled])) .control[invalid=true]{box-shadow:var(--saf-drop-shadow-error-focus)}:host(:not([disabled])) .control[is-success=true]{box-shadow:var(--saf-drop-shadow-success)}:host(:focus:not([disabled])) .control[is-success=true]{box-shadow:var(--saf-drop-shadow-success-focus)}:host(:focus-visible){outline:none}:host(:focus) .control,:host(:focus-visible) .control{box-shadow:var(--saf-drop-shadow-focus);outline:none}:host .listbox[hidden]{display:none}:host([placement=left]){align-items:center;display:inline-flex;flex-direction:row;gap:var(--saf-spacing-4);justify-content:space-between}:host([placement=right]){align-items:center;display:inline-flex;flex-direction:row-reverse;gap:var(--saf-spacing-4);justify-content:space-between}:host .a11y-aria-description{display:none}:host .label{font:var(--saf-select-label-font, var(--saf-type-body-default-md-strong-standard));text-decoration:var(--saf-input-label-text-decoration)}.instructional-text,.optional-text{font:var(--saf-select-instructional-text-font, var(--saf-type-body-default-sm-regular-standard))}.validation{display:flex;font:var(--saf-select-validation-font, var(--saf-type-body-default-sm-strong-standard));gap:var(--saf-spacing-1);margin-top:var(--saf-spacing-2)}.validation.error{color:var(--saf-color-status-error-strong)}.validation.success{color:var(--saf-color-status-success-strong)}@container style(--saf-density: 0){.root{--saf-select-control-font: var(--saf-type-body-default-md-regular-standard);--saf-select-control-padding: var(--saf-spacing-2) var(--saf-spacing-3);--saf-select-control-height: 40px;--saf-select-indicator-size: var(--saf-select-control-height);--saf-select-indicator-padding: var(--saf-spacing-3)}.label-container{--saf-select-label-font: var(--saf-type-body-default-md-strong-standard);--saf-select-instructional-text-font: var(--saf-type-body-default-sm-regular-standard)}.validation{--saf-select-validation-font: var(--saf-type-body-default-sm-strong-standard)}}@container style(--saf-density: 1){.root{--saf-select-control-font: var(--saf-type-body-default-md-regular-compact);--saf-select-control-padding: var(--saf-spacing-1) var(--saf-spacing-3);--saf-select-control-height: 32px;--saf-select-indicator-size: var(--saf-select-control-height);--saf-select-indicator-padding: var(--saf-spacing-2)}.label-container{--saf-select-label-font: var(--saf-type-body-default-md-strong-compact);--saf-select-instructional-text-font: var(--saf-type-body-default-sm-regular-compact)}.validation{--saf-select-validation-font: var(--saf-type-body-default-sm-strong-compact)}}@supports(-moz-appearance: none) or (stroke-color: transparent){.root{--saf-conditional-line-height:calc(var(--saf-line-height-lg)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-md)*var(--saf-density)*(2 - var(--saf-density)));--saf-conditional-padding-block:calc(var(--saf-spacing-2)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-spacing-1)*var(--saf-density)*(2 - var(--saf-density)));--saf-select-control-height:calc(40px*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + 32px*var(--saf-density)*(2 - var(--saf-density)));--saf-select-indicator-padding:calc(var(--saf-spacing-3)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-spacing-2)*var(--saf-density)*(2 - var(--saf-density)));--saf-select-control-font: var(--saf-font-weight-regular) var(--saf-font-size-md) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3);--saf-select-control-padding: var(--saf-conditional-padding-block) var(--saf-spacing-3);--saf-select-indicator-size: var(--saf-select-control-height)}.label-container{--saf-conditional-label-line-height:calc(var(--saf-line-height-lg)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-md)*var(--saf-density)*(2 - var(--saf-density)));--saf-conditional-instructional-line-height:calc(var(--saf-line-height-md)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-sm)*var(--saf-density)*(2 - var(--saf-density)));--saf-select-label-font: var(--saf-font-weight-semibold) var(--saf-font-size-md) / var(--saf-conditional-label-line-height) var(--saf-font-family-source-sans-3);--saf-select-instructional-text-font: var(--saf-font-weight-regular) var(--saf-font-size-sm) / var(--saf-conditional-instructional-line-height) var(--saf-font-family-source-sans-3)}.validation{--saf-conditional-validation-line-height:calc(var(--saf-line-height-md)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-sm)*var(--saf-density)*(2 - var(--saf-density)));--saf-select-validation-font: var(--saf-font-weight-semibold) var(--saf-font-size-sm) / var(--saf-conditional-validation-line-height) var(--saf-font-family-source-sans-3)}}')}
`,registry:e.getRegistry()})),exports.safSelectConfig={events:{onChange:"change",onInput:"input"}};
