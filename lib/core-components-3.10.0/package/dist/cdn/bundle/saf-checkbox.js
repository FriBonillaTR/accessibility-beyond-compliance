"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),a=require("./saf-icon.js"),t=require("tslib"),i=require("@microsoft/fast-web-utilities"),o=require("./a11y-DvNZtvTj.js"),r=require("./form-associated-DSP-KUNe.js"),n=require("./fast-element-DOTfrYFb.js"),s=require("./string-helpers-BBo17rr2.js"),d=require("./ref-BeTe_0iT.js"),l=require("./slotted-cZBT0SIc.js"),c=require("./when-0aDJpnLk.js");require("./logger-vjs750p7.js");class h extends n.FASTElement{}class b extends(r.CheckableFormAssociated(h)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class p extends b{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.disabled&&e.key===i.keySpace)this.toggleChecked()},this.clickHandler=e=>{this.disabled||this.toggleChecked()},this.invalid=!1,this.errorAriaLabel="Error",this.checkedInternal=!1,this.changeHandler=()=>{this.disabled||(this.checkedInternal=!0,this.toggleChecked(),this.checkedInternal=!1)},this.canAnnounceValidation=!1,this.proxy.setAttribute("type","checkbox")}toggleChecked(){this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked}get internalId(){return this.id||"control"}get ariaLabelledbyIds(){var e;return s.concatLabelIds(this.id,{label:!!(null===(e=this.defaultSlottedNodes)||void 0===e?void 0:e.length),status:this.invalid})}connectedCallback(){super.connectedCallback(),this.syncCheckedState(),n.Updates.enqueue(()=>{this.canAnnounceValidation=!0})}syncCheckedState(){this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked,this.proxy.indeterminate=this.indeterminate),this.control instanceof HTMLInputElement&&(this.control.checked=this.checked,this.control.indeterminate=this.indeterminate)}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}checkedChanged(e){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.syncCheckedState(),void 0!==e&&this.checkedInternal&&this.$emit("change"),this.validate()}indeterminateChanged(){this.syncCheckedState()}invalidChanged(){this.announceValidation()}validationMessageChanged(){this.announceValidation()}announceValidation(){var e;this.canAnnounceValidation&&(null===(e=this.validationMessage)||void 0===e?void 0:e.length)&&!this.disabled&&this.invalid&&(this.canAnnounceValidation=!1,o.SafA11y.announce(this.validationMessage,"status"),setTimeout(()=>{this.canAnnounceValidation=!0},500))}}t.__decorate([n.observable],p.prototype,"defaultSlottedNodes",void 0),t.__decorate([n.observable],p.prototype,"indeterminate",void 0),t.__decorate([n.attr],p.prototype,"id",void 0),t.__decorate([n.attr({attribute:"a11y-aria-description"})],p.prototype,"a11yAriaDescription",void 0),t.__decorate([n.attr({mode:"boolean"})],p.prototype,"invalid",void 0),t.__decorate([n.attr({attribute:"validation-message"})],p.prototype,"validationMessage",void 0),t.__decorate([n.attr({attribute:"error-aria-label"}),n.observable],p.prototype,"errorAriaLabel",void 0),t.__decorate([n.attr({attribute:"a11y-aria-label"})],p.prototype,"a11yAriaLabel",void 0),t.__decorate([n.volatile],p.prototype,"ariaLabelledbyIds",null);exports.default=()=>(a.default(),p.define({name:e.getComponentName("saf-checkbox"),template:n.html`
		<template
			id="${e=>e.id}"
			a11y-aria-label="${e=>e.a11yAriaLabel}"
			a11y-aria-description="${e=>e.a11yAriaDescription}"
			error-aria-label=${e=>e.errorAriaLabel}
		>
			<div class="root" part="root">
				<input
					id="${e=>e.internalId}"
					role="checkbox"
					type="checkbox"
					class="control ${e=>e.required?"required":""} ${e=>e.invalid?"invalid":""}"
					part="control"
					aria-label="${e=>e.a11yAriaLabel?e.a11yAriaLabel:e.ariaLabel?e.ariaLabel:void 0}"
					aria-labelledby="${e=>e.a11yAriaLabel?void 0:e.ariaLabelledbyIds}"
					aria-describedby="${e=>e.a11yAriaDescription?"a11y-aria-description":void 0}"
					aria-checked="${e=>e.indeterminate?"mixed":e.checked}"
					aria-required="${e=>e.required?"true":void 0}"
					aria-disabled="${e=>e.disabled?"true":void 0}"
					aria-invalid="${e=>e.ariaInvalid||Boolean(e.invalid)}"
					?disabled="${e=>e.disabled}"
					@change="${e=>e.changeHandler()}"
					${d.ref("control")}
				/>
				<slot name="checked-indicator">
					<saf-icon
						class="checked-indicator"
						part="checked-indicator"
						icon-name="check"
						appearance="solid"
					></saf-icon>
				</slot>
				<slot name="indeterminate-indicator">
					<saf-icon
						class="indeterminate-indicator"
						part="indeterminate-indicator"
						icon-name="minus"
						appearance="solid"
					></saf-icon>
				</slot>
				<label
					for="${e=>e.internalId}"
					id="label-${e=>e.internalId}"
					part="label"
					class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
				>
					<slot ${l.slotted("defaultSlottedNodes")}></slot>
				</label>
				${c.when(e=>e.a11yAriaDescription,n.html`<span
						id="a11y-aria-description"
						class="a11y-aria-description"
						part="a11y-aria-description"
					>
						${e=>e.a11yAriaDescription}
					</span>`)}
			</div>
			${c.when(e=>e.invalid,n.html`
					<div part="error" class="validation error">
						<slot id="status-${e=>e.internalId}" name="error">
							<saf-icon
								class="error-icon"
								part="error-icon"
								icon-name="hexagon-exclamation"
								appearance="solid"
								color="var(--saf-color-status-error-strong)"
								aria-label=${e=>e.errorAriaLabel}
								presentation="false"
							>
							</saf-icon>
							<span part="message" class="message" name="error">
								${e=>e.validationMessage?e.validationMessage:""}
							</span>
						</slot>
					</div>
				`)}
		</template>
	`,styles:n.css`
	${e.replaceComponentNamesWithSafAttribute("button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:host{--saf-checkbox-height: 20px;--saf-checkmark-indeterminate-indicator-border-radius: 2px;--saf-checkbox-width: 20px;display:contents;font:var(--saf-type-body-default-md-regular-compact)}.root{display:inline-flex;position:relative}.control{align-items:center;appearance:none;background:var(--saf-color-interactive-background-default);border:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);border-radius:var(--saf-border-radius-xxs);box-sizing:border-box;cursor:default;display:inline-flex;flex:none;height:var(--saf-checkbox-height);justify-content:center;position:relative;width:var(--saf-checkbox-width)}.label{align-self:flex-end;color:var(--saf-color-text-heavy);cursor:default;font:var(--saf-type-body-default-md-regular-compact);margin-inline-end:var(--saf-spacing-4);padding-inline-start:var(--saf-spacing-2)}.label__hidden{display:none}slot[name=checked-indicator],slot[name=indeterminate-indicator]{align-items:center;color:var(--saf-color-interactive-on-secondary-active);display:none;height:calc(100% + var(--saf-line-width-thick));justify-content:center;pointer-events:none;position:absolute;width:100%}:host .control[aria-checked=mixed]~slot[name=indeterminate-indicator],:host .control:not([aria-checked=mixed])[aria-checked=true]+slot[name=checked-indicator]{display:inline-flex;height:var(--saf-checkbox-height);width:var(--saf-checkbox-width)}:host .control:focus-visible{outline:none}:host .control:focus{box-shadow:var(--saf-drop-shadow-focus)}:host .invalid{box-shadow:var(--saf-drop-shadow-error)}:host .invalid:focus{box-shadow:var(--saf-drop-shadow-error-focus)}:host .validation{display:flex;font:var(--saf-type-body-default-sm-strong-standard);gap:var(--saf-spacing-1);margin-top:var(--saf-spacing-2)}:host .validation.error{color:var(--saf-color-status-error-strong)}:host([disabled]) .control{background:var(--saf-color-interactive-disabled-subtle);border-color:var(--saf-color-interactive-border-disabled-default)}:host([disabled]) slot[name=checked-indicator],:host([disabled]) slot[name=indeterminate-indicator]{color:var(--saf-color-interactive-on-disabled-subtle);padding-top:1px}:host([disabled]) label{color:var(--saf-color-interactive-disabled-strong)}:host([disabled]) .label,:host([readonly]) .label,:host([readonly]) .control,:host([disabled]) .control{cursor:not-allowed}:host(:not([disabled])) .control:hover+slot[name=checked-indicator],:host(:not([disabled])) .control:hover~slot[name=indeterminate-indicator]{color:var(--saf-color-interactive-on-secondary-hover)}:host(:not([disabled])) .control:hover{background:var(--saf-color-interactive-secondary-hover);border:var(--saf-line-width-thick) solid var(--saf-color-interactive-border-secondary-hover)}:host .control[aria-checked=true],:host .control[aria-checked=mixed]{background:var(--saf-color-interactive-secondary-active);border:var(--saf-line-width-thick) solid var(--saf-color-interactive-border-secondary-active)}:host .control[aria-checked=true]:hover,:host .control[aria-checked=mixed]:hover{background:var(--saf-color-interactive-secondary-hover);border-color:var(--saf-color-interactive-border-secondary-hover)}:host([disabled]) .control[aria-checked=true],:host([disabled]) .control[aria-checked=mixed],:host([disabled]) .control[data-indeterminate]{background:var(--saf-color-interactive-disabled-subtle);border-color:var(--saf-color-interactive-border-disabled-default)}:host .a11y-aria-description{display:none}")}
`,shadowOptions:{delegatesFocus:!0},registry:e.getRegistry()})),exports.safCheckboxConfig={events:{onChange:"change"}};
