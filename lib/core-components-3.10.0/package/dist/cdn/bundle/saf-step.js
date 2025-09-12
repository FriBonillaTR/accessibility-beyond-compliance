"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@saffron/config"),e=require("./saf-icon.js"),s=require("./saf-sr-only.js"),a=require("tslib"),r=require("./fast-element-DOTfrYFb.js"),i=require("./slotted-cZBT0SIc.js");require("./logger-vjs750p7.js"),require("./when-0aDJpnLk.js");const o="active";class l extends r.FASTElement{constructor(){super(...arguments),this.status=o,this.stepNumber=0,this.totalSteps=0,this.stepHeaderSlot=null,this.defaultSlottedContent=null}statusChanged(t,e){this.$fastController.isConnected&&(t&&this.classList.remove(t),e&&this.classList.add(e))}connectedCallback(){super.connectedCallback(),this.classList.add("item"),this.classList.add(this.status),setTimeout(()=>this.addObserver())}addObserver(){var t;"false"!==(null===(t=this.parentElement)||void 0===t?void 0:t.getAttribute("observe-resize"))&&(this.orientationObserver=new MutationObserver(t=>{var e;for(const s of t)if("attributes"===s.type&&"orientation"===s.attributeName){const t=null===(e=this.parentElement)||void 0===e?void 0:e.getAttribute("orientation");this.changeClasses(t)}}),this.orientationObserver.observe(this.parentElement,{attributes:!0}))}changeClasses(t){this.classList.remove("horizontal","vertical","last"),this.classList.add(t),this.stepNumber===this.totalSteps&&this.classList.add("last")}disconnectedCallback(){super.disconnectedCallback(),this.orientationObserver&&this.orientationObserver.disconnect()}get stepHeader(){return`Step ${this.stepNumber} of ${this.totalSteps}${this.stepTitle?`: ${this.stepTitle}`:""}`}}a.__decorate([r.attr({attribute:"status"})],l.prototype,"status",void 0),a.__decorate([r.attr({attribute:"status-label"})],l.prototype,"statusLabel",void 0),a.__decorate([r.attr({attribute:"step-title"})],l.prototype,"stepTitle",void 0),a.__decorate([r.attr({attribute:"step-number"})],l.prototype,"stepNumber",void 0),a.__decorate([r.attr({attribute:"total-steps"})],l.prototype,"totalSteps",void 0);exports.default=()=>(e.default(),s.default(),l.define({name:t.getComponentName("saf-step"),template:r.html`
	<template
		aria-current=${t=>"active"===t.status?"true":"false"}
		part="item"
		role="listitem"
		status-label=${t=>t.statusLabel}
	>
		<div class="step-divider" part="step-divider"></div>
		<div class="step-header-container" part="step-header-container">
			<div class="number" part="number">
				${t=>"completed"===t.status?r.html`<saf-icon
								size="24"
								icon-name="circle-check"
								appearance="solid"
						  ></saf-icon>`:r.html`${t.stepNumber}`}
			</div>
			<slot name="start"> </slot>
			<div class="step-header" part="step-header">
				<slot name="step-header" ${i.slotted("stepHeaderSlot")}>
					${t=>t.stepHeader}
				</slot>
			</div>
		</div>
		<div class="step-content" part="step-content">
			<slot ${i.slotted({property:"defaultSlottedContent"})}></slot>
		</div>
		<saf-sr-only>${t=>t.statusLabel?t.statusLabel:t.status}</saf-sr-only>
		<slot name="end"></slot>
	</template>
`,styles:r.css`
	${t.replaceComponentNamesWithSafAttribute(':host{color:var(--saf-color-text-subtle);display:inline-block;flex:1;position:relative}:host(.vertical){margin:var(--saf-spacing-4) 0}:host(.vertical[step-number="1"]){margin-top:0}:host(.vertical) .step-divider{height:calc(100% - var(--saf-spacing-2));left:10px;position:absolute;top:32px;width:4px}:host(.vertical.last) .step-divider{display:none}:host .step-content{margin-left:var(--saf-spacing-8)}:host .number{align-items:center;align-self:flex-start;border-radius:var(--saf-border-radius-circle);display:flex;font:var(--saf-type-heading-default-md-strong-standard);height:24px;justify-content:center;line-height:0;margin-right:var(--saf-spacing-2);min-width:24px;text-align:center;width:24px}:host .number saf-icon{font:var(--saf-type-icon-strong-sm);height:24px;width:24px}:host .step-header-container{align-items:center;display:flex}:host .step-header{display:inline-block;font:var(--saf-type-heading-default-md-strong-standard)}:host .step-divider{border-radius:var(--saf-border-radius-xs);height:4px;margin-bottom:var(--saf-spacing-2)}:host(.completed) .step-divider{background-color:var(--saf-color-status-success-strong)}:host(.completed) .number,:host(.completed) .step-header{color:var(--saf-color-status-success-strong)}:host(.active) .number{background-color:var(--saf-color-interactive-states-item-current);color:var(--saf-color-text-knockout)}:host(.active) .step-header{color:var(--saf-color-interactive-states-item-current)}:host(.active) .step-divider{background-color:var(--saf-color-interactive-states-border-active)}:host(.inactive){color:var(--saf-color-text-subtle)}:host(.inactive) .number{border:solid var(--saf-line-width-thin);border-color:var(--saf-color-border-stronger);color:var(--saf-color-text-subtle);height:22px;min-width:22px;width:22px}:host(.inactive) .step-divider{background-color:var(--saf-color-border-strong)}:host slot[name=content]{display:block;font:var(--saf-type-body-default-sm-regular-standard);margin-left:var(--saf-spacing-8)}')}
`,registry:t.getRegistry()}));
