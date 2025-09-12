"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("./saf-icon.js"),a=require("tslib"),o=require("@microsoft/fast-web-utilities"),r=require("./form-associated-DSP-KUNe.js"),s=require("./fast-element-DOTfrYFb.js"),i=require("./slotted-cZBT0SIc.js");require("./logger-vjs750p7.js"),require("./when-0aDJpnLk.js");class c extends s.FASTElement{}class n extends(r.CheckableFormAssociated(c)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class d extends n{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case o.keyEnter:case o.keySpace:this.checked=!this.checked}},this.clickHandler=e=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}}a.__decorate([s.attr({attribute:"readonly",mode:"boolean"})],d.prototype,"readOnly",void 0),a.__decorate([s.observable],d.prototype,"defaultSlottedNodes",void 0);exports.default=()=>(t.default(),d.define({name:e.getComponentName("saf-switch"),template:s.html`
		<template
			role="switch"
			aria-checked="${e=>e.checked}"
			aria-disabled="${e=>e.disabled||e.readOnly}"
			tabindex="${e=>e.disabled?null:0}"
			@keypress="${(e,t)=>e.keypressHandler(t.event)}"
			@click="${(e,t)=>e.clickHandler(t.event)}"
		>
			<label
				part="label"
				class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
			>
				<slot ${i.slotted("defaultSlottedNodes")}></slot>
			</label>
			<div part="switch" class="switch">
				<slot name="switch">
					<span class="checked-indicator" part="checked-indicator">
						<saf-icon
							class="checked"
							part="checked"
							aria-hidden="true"
							focusable="false"
							presentation="true"
							icon-name="circle-check"
							appearance="solid"
						></saf-icon>
						<saf-icon
							class="unchecked"
							part="unchecked"
							aria-hidden="true"
							focusable="false"
							presentation="true"
							icon-name="circle-xmark"
							appearance="solid"
						></saf-icon>
					</span>
				</slot>
			</div>
		</template>
	`,styles:s.css`
	${e.replaceComponentNamesWithSafAttribute('button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:host{--saf-switch-height: 20px;--saf-switch-width: 40px;align-items:center;display:inline-flex;flex-wrap:wrap;font-size:var(--saf-font-size-md);gap:var(--saf-spacing-2);width:fit-content}:host([disabled]) label,:host([readonly]) label,:host([disabled]) .switch,:host([readonly]) .switch,:host([disabled]) .status-message,:host([readonly]) .status-message{cursor:not-allowed}:host .switch{border:var(--saf-line-width-thin) solid rgba(255,255,255,0);border-radius:var(--saf-border-radius-circle);height:var(--saf-switch-height);position:relative;width:var(--saf-switch-width)}:host([disabled]) label,:host([disabled]) .status-message{color:var(--saf-color-interactive-disabled-strong)}:host(:focus) .switch{box-shadow:var(--saf-drop-shadow-focus)}:host(:focus){outline:none}:host .checked-indicator{line-height:16px;position:absolute;top:2px;transition:all .2s ease-in-out 0s}:host([aria-checked=true]) .checked-indicator{left:22px;right:2px}:host([aria-checked=false]) .checked-indicator{left:2px;right:22px}:host([aria-checked=false]) .checked-indicator .checked,:host([aria-checked=true]) .checked-indicator .unchecked{display:none}:host(:not([disabled],[readonly])) .switch:hover{background-color:var(--saf-color-interactive-secondary-hover);color:var(--saf-color-interactive-on-secondary-hover)}:host([aria-checked=true]) .switch{background:var(--saf-color-interactive-secondary-active)}:host([aria-checked=false]) .switch{background:var(--saf-color-interactive-secondary-default);border-color:var(--saf-color-interactive-border-secondary-default)}:host(:not([disabled],[readonly])) .switch:hover::before{border:var(--saf-line-width-thick) solid var(--saf-color-interactive-border-secondary-hover);border-radius:var(--saf-border-radius-md);content:"";height:calc(100% - 2px);left:-1px;position:absolute;top:-1px;width:calc(100% - 2px)}:host(:not([disabled],[readonly])) .switch:hover .checked-indicator saf-icon{color:var(--saf-color-interactive-on-secondary-hover)}:host .checked-indicator saf-icon{color:var(--saf-color-interactive-on-secondary-active)}:host([aria-checked=false]) .checked-indicator saf-icon{color:var(--saf-color-interactive-on-secondary-default)}:host .status-message{margin-inline-start:var(--saf-spacing-2)}:host([disabled]) .switch,:host([disabled]) .switch:hover{background-color:var(--saf-color-interactive-disabled-subtle);border:var(--saf-line-width-thin) solid var(--saf-color-interactive-border-disabled-default)}:host([disabled]) .checked-indicator saf-icon{color:var(--saf-color-interactive-on-disabled-subtle)}:host([readonly]) .switch,:host([readonly]) .switch:hover{background-color:var(--saf-color-interactive-read-only-subtle);border:var(--saf-line-width-thin) solid var(--saf-color-interactive-border-read-only-default)}:host([readonly]) .checked-indicator saf-icon{color:var(--saf-color-interactive-read-only-strong)}:host label{color:var(--saf-color-text-heavy);font:var(--saf-type-body-default-md-regular-standard)}.label__hiden{display:none}')}
`,registry:e.getRegistry()})),exports.safSwitchConfig={events:{onChange:"change"}};
