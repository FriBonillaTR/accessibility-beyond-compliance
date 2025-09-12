"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("./define-CgQAavGn.js"),i=require("./saf-icon.js"),r=require("./saf-sr-only.js"),s=require("./define-DFHSE1N5.js"),o=require("tslib"),a=require("@microsoft/fast-web-utilities"),n=require("./dom-helpers-DxoVHRyN.js"),l=require("./fast-element-DOTfrYFb.js");require("./apply-mixins-CewQe2EQ.js"),require("./start-end-template-D7dQJgd3.js"),require("./ref-BeTe_0iT.js"),require("./aria-global-CYzDgx1a.js"),require("./form-associated-DSP-KUNe.js"),require("./global-enums-58U8enSy.js"),require("./when-0aDJpnLk.js"),require("./slotted-cZBT0SIc.js"),require("./logger-vjs750p7.js"),require("@floating-ui/dom"),require("./a11y-DvNZtvTj.js");class h extends l.FASTElement{constructor(){super(...arguments),this.srOnlyTitle="Window splitter",this.scrollablePrimary=!0,this.scrollableSecondary=!0,this.orientation="vertical",this.tooltipText="Drag window",this.valuenow="50",this.width="",this.isHorizontal=()=>"horizontal"===this.orientation,this.sizeChanged=!1,this.isDragging=!1,this.startSize={container:0,primary:0,secondary:0,offset:0},this.onKeyDown=e=>{if(this.isValidEl())if(e.shiftKey)switch(e.key){case a.keyArrowRight:case a.keyArrowUp:e.preventDefault(),this.keyDownHandler("increase");break;case a.keyArrowLeft:case a.keyArrowDown:e.preventDefault(),this.keyDownHandler("decrease")}else switch(e.key){case a.keyArrowRight:case a.keyArrowUp:e.preventDefault(),this.keyDownHandler("increase");break;case a.keyArrowLeft:case a.keyArrowDown:e.preventDefault(),this.keyDownHandler("decrease")}},this.onMouseMove=e=>{if(!this.primaryChild||!this.secondaryChild)return;const t=this.valuenow;if(this.isDragging){const t=this.isHorizontal()?e.clientY:e.clientX,{container:i,offset:r}=this.startSize,s=t-r;this.setFlexBasis(this.primaryChild,s,i);const o=i-s;this.setFlexBasis(this.secondaryChild,o,i),this.setValueNow()}t!==this.valuenow&&(this.sizeChanged=!0)},this.onMouseDown=()=>{this.primaryChild&&this.secondaryChild&&(this.setStartSize(),this.isDragging=!0)},this.onMouseUp=()=>{this.primaryChild&&this.secondaryChild&&(this.isDragging=!1,this.sizeChanged&&(this.$emit("size-change"),this.sizeChanged=!1))}}initialSizeChanged(e,t){null==e&&null!=t&&l.Updates.enqueue(()=>this.setSplitterSize(t))}widthChanged(){const e=parseInt(this.width,10),t=e>=0&&e<=100;""!==this.width&&t&&this.changeSplitterSize(e,!this.isDragging)}connectedCallback(){super.connectedCallback(),this.processChildren(),this.handle=this.shadowRoot.querySelector('[part="splitter"]'),this.handle.addEventListener("mousedown",this.onMouseDown),this.addEventListener("mouseup",this.onMouseUp),this.addEventListener("mousemove",this.onMouseMove,{passive:!0}),this.addEventListener("keydown",this.onKeyDown)}disconnectedCallback(){this.handle.removeEventListener("mousedown",this.onMouseDown),this.removeEventListener("mouseup",this.onMouseUp),this.removeEventListener("mousemove",this.onMouseMove),this.removeEventListener("keydown",this.onKeyDown),super.disconnectedCallback()}changeSplitterSize(e,t=!0){e>=0&&e<=100&&(l.Updates.enqueue(()=>this.setSplitterSize(e)),t&&l.Updates.enqueue(()=>this.$emit("size-change")))}processChildren(){this.primaryChild=this.shadowRoot.querySelector('[part="primary"]'),this.secondaryChild=this.shadowRoot.querySelector('[part="secondary"]')}setSplitterSize(e){this.primaryChild&&this.secondaryChild&&(this.primaryChild.style.flexBasis=`${e}${this.isHorizontal()?"vh":"%"}`,this.secondaryChild.style.flexBasis=`${100-e}${this.isHorizontal()?"vh":"%"}`,this.valuenow!=e.toString()&&(this.valuenow=e.toString()))}keyDownHandler(e){if(!this.handle)return;this.onMouseDown();const t=this.getNextValue(e,this.isHorizontal()),i=this.getNextEvent(this.isHorizontal(),t);this.onMouseMove(i),this.onMouseUp()}setValueNow(){const e=this.primaryChild.getBoundingClientRect().width,t=this.getBoundingClientRect().width,i=Math.round(e/t*100);this.valuenow=i.toString(),this.width=this.valuenow}getNextValue(e,t){const i=100,r=this.handle.getBoundingClientRect();return"increase"===e?t?r.y-i:r.x+i:t?r.y+i:r.x-i}getNextEvent(e,t){return{[e?"clientY":"clientX"]:t}}isValidEl(){var t,i;return!this.handle||(null===(t=n.getRootActiveElement(this))||void 0===t?void 0:t.nodeName)===this.nodeName||(null===(i=n.getRootActiveElement(this))||void 0===i?void 0:i.nodeName)===e.getComponentName("saf-workspace-pattern").toUpperCase()}setFlexBasis(e,t,i){const r=Math.max(0,Math.min(t,i));e.style.flexBasis=`${r}px`}setStartSize(){const{top:e,left:t}=this.getBoundingClientRect(),i=this.isHorizontal()?"height":"width",r=this.isHorizontal()?e:t,s=this.getBoundingClientRect()[i],o=this.primaryChild.getBoundingClientRect()[i],a=this.secondaryChild.getBoundingClientRect()[i];this.startSize={container:s,primary:o,secondary:a,offset:r}}}o.__decorate([l.attr({attribute:"sr-only-title"})],h.prototype,"srOnlyTitle",void 0),o.__decorate([l.attr({attribute:"initial-size",converter:l.nullableNumberConverter})],h.prototype,"initialSize",void 0),o.__decorate([l.attr({attribute:"scrollable-primary",mode:"boolean"})],h.prototype,"scrollablePrimary",void 0),o.__decorate([l.attr({attribute:"scrollable-secondary",mode:"boolean"})],h.prototype,"scrollableSecondary",void 0),o.__decorate([l.attr({attribute:"orientation"})],h.prototype,"orientation",void 0),o.__decorate([l.attr({attribute:"tooltip-text"})],h.prototype,"tooltipText",void 0),o.__decorate([l.observable],h.prototype,"valuenow",void 0),o.__decorate([l.attr({attribute:"width"})],h.prototype,"width",void 0);exports.default=()=>(t.SafButton(),i.default(),r.default(),s.SafTooltip(),h.define({name:e.getComponentName("saf-splitter"),template:l.html`
	<template orientation="${e=>e.orientation}">
		<div
			id="${e=>e.id}"
			class="splitter-wrapper ${e=>e.orientation}"
			part="splitter-wrapper"
			width="${e=>e.width}"
		>
			<div
				part="primary"
				class="primary"
				id="primaryContent-${e=>e.id}"
				?scrollable="${e=>e.scrollablePrimary}"
			>
				<slot name="primary"></slot>
			</div>
			<div part="splitter" class="splitter">
				<saf-button
					a11y-role="slider"
					a11y-aria-roledescription="separator"
					a11y-aria-label="${e=>e.srOnlyTitle}"
					a11y-aria-valuenow="${e=>e.valuenow}"
					a11y-aria-valuemin="0"
					a11y-aria-valuemax="100"
					a11y-aria-orientation="${e=>e.orientation}"
					aria-controls="primaryContent-${e=>e.id}"
					appearance="secondary"
					id="splitterSeparator-${e=>e.id}"
					icon-only=""
					part="handle"
					class="handle"
					shape="circle"
				>
					<saf-icon
						icon-name="${e=>"horizontal"===e.orientation?"arrows-up-down":"arrows-left-right"}"
					></saf-icon>
					<saf-sr-only>${e=>e.srOnlyTitle}</saf-sr-only>
				</saf-button>
				<saf-tooltip anchor="splitterSeparator-${e=>e.id}">
					${e=>e.tooltipText}
				</saf-tooltip>
			</div>
			<div
				part="secondary"
				class="secondary"
				id="secondaryContent-${e=>e.id}"
				?scrollable="${e=>e.scrollableSecondary}"
			>
				<slot name="secondary"></slot>
			</div>
		</div>
	</template>
`,styles:l.css`
	${e.replaceComponentNamesWithSafAttribute(":host{display:block;height:100%}:host ::slotted(*){box-sizing:border-box;height:100%;width:100%}:host ::slotted([slot=primary]),:host ::slotted([slot=secondary]){position:relative}.primary{z-index:var(--saf-z-index-default)}.primary,.secondary{display:flex;flex:1 1 50%;min-width:0}.primary[scrollable],.secondary[scrollable]{overflow-y:auto}.splitter{background:var(--saf-color-border-stronger);cursor:ew-resize;flex:none;overflow:visible;position:relative;width:1px;z-index:var(--saf-z-index-default)}.handle{left:50%;position:absolute;top:50%;translate:-50% -50% 0}.handle::part(control){box-shadow:var(--saf-drop-shadow-level-1);margin:0}.handle::part(control):focus{box-shadow:var(--saf-drop-shadow-focus)}.handle::part(control):hover{cursor:ew-resize}.horizontal .splitter,.horizontal .handle::part(control):hover{cursor:ns-resize}.horizontal .splitter{width:unset}.splitter-wrapper{display:flex}[hidden]{display:none !important}.splitter-wrapper.horizontal{flex-direction:column;height:100%}.splitter-wrapper.vertical{height:100%}:host([scrollable-primary]) .splitter-wrapper.vertical,:host([scrollable-secondary]) .splitter-wrapper.vertical,:host([scrollable-primary]) .splitter-wrapper.horizontal,:host([scrollable-secondary]) .splitter-wrapper.horizontal{max-height:100vh;overflow:hidden}")}
`,registry:e.getRegistry()})),exports.safSplitterConfig={events:{onSizeChange:"size-change"}};
