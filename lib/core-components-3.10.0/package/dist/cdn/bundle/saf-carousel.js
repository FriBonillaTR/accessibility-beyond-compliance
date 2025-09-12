"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("./saf-flipper.js"),s=require("./define-DFHSE1N5.js"),r=require("tslib"),i=require("./fast-element-DOTfrYFb.js"),o=require("./slotted-cZBT0SIc.js"),l=require("./when-0aDJpnLk.js");require("./define-CgQAavGn.js"),require("./apply-mixins-CewQe2EQ.js"),require("./start-end-template-D7dQJgd3.js"),require("./ref-BeTe_0iT.js"),require("./aria-global-CYzDgx1a.js"),require("./form-associated-DSP-KUNe.js"),require("@microsoft/fast-web-utilities"),require("./global-enums-58U8enSy.js"),require("./saf-icon.js"),require("./logger-vjs750p7.js"),require("./saf-sr-only.js"),require("@floating-ui/dom"),require("./a11y-DvNZtvTj.js"),require("./dom-helpers-DxoVHRyN.js");class a extends i.FASTElement{constructor(){super(...arguments),this.flippersHiddenFromAT="true",this.slideLabel="Slide",this.totalSlides=0,this.currentSlide=1,this.endOfSlides=!1,this.currentIndex=1,this.observeResize=!0}addResizeObserver(){this.resizeObserver&&this.resizeObserver.disconnect(),this.observeResize&&(this.resizeObserver=new ResizeObserver(()=>{this.step=this.contentContainer.offsetWidth,this.resizeSlide()}),this.resizeObserver.observe(this.parentElement))}slottedNodesChanged(){var e;(null===(e=this.slottedNodes)||void 0===e?void 0:e.length)&&this.initialize()}initialize(){this.shadowRoot&&(this.scrollArea=this.shadowRoot.querySelector(".scroll-area"),this.contentContainer=this.shadowRoot.querySelector(".content-container"),this.scrollArea.classList.add("js-controlled"),this.slotContent=this.shadowRoot.querySelector("slot"),this.slides=this.slotContent.assignedElements(),this.totalSlides=this.slides.length,this.step||(this.step=this.contentContainer.offsetWidth),this.addResizeObserver())}resizeSlide(){this.contentContainer.style.transform=`translateX(-${this.step*(this.currentSlide-1)}px)`}previousSlide(){this.currentSlide<=this.totalSlides&&this.currentSlide>1&&(this.currentSlide--,this.currentIndex--,this.contentContainer.style.transform=`translateX(-${this.step*(this.currentSlide-1)}px)`)}nextSlide(){this.currentSlide<=this.totalSlides-1&&this.currentSlide>0&&(this.currentSlide++,this.contentContainer.style.transform=`translateX(-${this.step*(this.currentSlide-1)}px)`),this.currentIndex===this.totalSlides&&(this.endOfSlides=!0),this.endOfSlides&&this.currentIndex===this.totalSlides&&(this.currentSlide=1,this.currentIndex=0,this.contentContainer.style.transform="translateX(0)"),this.currentIndex++}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver&&this.resizeObserver.disconnect()}}r.__decorate([i.attr({attribute:"flippers-hidden-from-AT"})],a.prototype,"flippersHiddenFromAT",void 0),r.__decorate([i.attr({attribute:"slide-label"})],a.prototype,"slideLabel",void 0),r.__decorate([i.attr({attribute:"total-slides"})],a.prototype,"totalSlides",void 0),r.__decorate([i.attr({attribute:"current-slide"})],a.prototype,"currentSlide",void 0),r.__decorate([i.attr],a.prototype,"step",void 0),r.__decorate([i.attr],a.prototype,"contentContainer",void 0),r.__decorate([i.attr],a.prototype,"scrollArea",void 0),r.__decorate([i.attr],a.prototype,"slotContent",void 0),r.__decorate([i.attr],a.prototype,"slides",void 0),r.__decorate([i.attr],a.prototype,"endOfSlides",void 0),r.__decorate([i.attr],a.prototype,"currentIndex",void 0),r.__decorate([i.attr({attribute:"observe-resize",mode:"boolean"})],a.prototype,"observeResize",void 0),r.__decorate([i.observable],a.prototype,"slottedNodes",void 0);exports.default=()=>(t.default(),s.SafTooltip(),a.define({name:e.getComponentName("saf-carousel"),template:i.html`
		<template class="saf-horizontal-scroll">
			<div class="scroll-area" part="scroll-area">
				<div class="scroll-view" part="scroll-view" id="scrollContainer">
					<div class="content-container" part="content-container" id="content">
						<slot
							${o.slotted({property:"slottedNodes"})}
						>
							<slot name="slide-header"></slot>
							<slot name="slide-body"></slot>
						</slot>
					</div>
				</div>
				${l.when(e=>e.totalSlides>1,i.html`
						<span class="controls" part="controls">
							<div
								class="scroll previous scroll-prev"
								part="scroll-prev"
								id="previousFlipperContainer"
							>
								<div
									class="scroll-action scroll-action-previous"
									part="scroll-action-previous"
								>
									<saf-flipper
										id="previous-slide"
										aria-hidden="${e=>e.flippersHiddenFromAT}"
										direction="previous"
										disabled="${e=>1===e.currentSlide}"
										@click="${e=>e.previousSlide()}"
									>
										${l.when(e=>e.currentSlide>1,i.html`<saf-tooltip
												anchor="previous-slide"
												placement="bottom"
												>Previous item</saf-tooltip
											>`)}
									</saf-flipper>
								</div>
							</div>
							<span class="slides-info-container">
								${e=>e.slideLabel} ${e=>e.currentSlide} of
								${e=>e.totalSlides}
							</span>
							<div
								class="scroll next scroll-next"
								part="scroll-next"
								id="nextFlipperContainer"
							>
								<div
									class="scroll-action scroll-action-next"
									part="scroll-action-next"
								>
									<saf-flipper
										id="next-slide"
										class="flipper-next"
										aria-hidden="${e=>e.flippersHiddenFromAT}"
										direction="next"
										disabled="${e=>e.currentSlide===e.totalSlides}"
										@click="${e=>e.nextSlide()}"
									>
										${l.when(e=>e.currentSlide<e.totalSlides,i.html`<saf-tooltip anchor="next-slide" placement="bottom"
												>Next item</saf-tooltip
											>`)}
									</saf-flipper>
								</div>
							</div>
						</span>
					`)}
			</div>
		</template>
	`,styles:i.css`
	${e.replaceComponentNamesWithSafAttribute(":host{display:block}.scroll-view{box-sizing:border-box;display:flex;flex-direction:column;height:100%;margin:var(--saf-spacing-4) var(--saf-spacing-4) var(--saf-spacing-2) var(--saf-spacing-4);max-width:100%;overflow-x:auto}.controls{align-items:center;display:inline-flex}.slides-info-container{font:var(--saf-type-body-default-md-regular-standard);margin:var(--saf-spacing-0) var(--saf-spacing-2)}.content-container{display:flex}.content-container ::slotted(*){flex-grow:1;flex-shrink:0;height:100%;overflow-wrap:break-word;scroll-behavior:smooth;width:100%}.scroll{display:inline-flex}.scroll-area.js-controlled{margin:var(--saf-spacing-0);padding:var(--saf-spacing-0)}.scroll-area.js-controlled .scroll-view{overflow:hidden}.scroll-area.js-controlled .content-container{transition:all .5s ease-in}")}
`,registry:e.getRegistry()}));
