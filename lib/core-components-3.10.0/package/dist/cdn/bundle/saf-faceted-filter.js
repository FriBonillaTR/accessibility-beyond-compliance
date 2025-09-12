"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("./define-CgQAavGn.js"),r=require("./saf-divider.js"),i=require("./saf-icon.js"),a=require("tslib"),l=require("./fast-element-DOTfrYFb.js"),s=require("./instructional-text.template-B5ljXGFW.js"),o=require("./when-0aDJpnLk.js"),d=require("./slotted-cZBT0SIc.js");require("./apply-mixins-CewQe2EQ.js"),require("./start-end-template-D7dQJgd3.js"),require("./ref-BeTe_0iT.js"),require("./aria-global-CYzDgx1a.js"),require("./form-associated-DSP-KUNe.js"),require("@microsoft/fast-web-utilities"),require("./global-enums-58U8enSy.js"),require("./logger-vjs750p7.js");class n extends l.FASTElement{constructor(){super(...arguments),this.filterTitle="Filters",this.resetButtonLabel="Clear filters",this.ariaTitleLevel=2,this.filterSubtitle="Filter by:",this.ariaSubtitleLevel=3,this.showCounterBadges=!1}showCounterBadgesChanged(e,t){e&&!t&&l.Updates.enqueue(()=>{this.updateChildItemsCounter(!1)})}slottedFacetsChanged(e,t){this.showCounterBadges&&t.length&&l.Updates.enqueue(()=>{this.updateChildItemsCounter()})}updateChildItemsCounter(e=!0){var t;const r=t=>{var i;(null===(i=t.childItems)||void 0===i?void 0:i.length)&&(t.showCounterBadges=e,t.childItems.forEach(e=>{r(e)}))};null===(t=this.slottedFacets)||void 0===t||t.forEach(t=>{var i;t.showCounterBadges=e,(null===(i=t.slottedFacets)||void 0===i?void 0:i.length)&&t.slottedFacets.forEach(e=>{r(e)})})}handleReset(){this.querySelectorAll(e.getComponentName("saf-facet-item")).forEach(e=>e.checked=!1),this.$emit("clear")}}a.__decorate([l.attr({attribute:"filter-title"})],n.prototype,"filterTitle",void 0),a.__decorate([l.attr({attribute:"reset-button-label"})],n.prototype,"resetButtonLabel",void 0),a.__decorate([l.attr({attribute:"aria-title-level",mode:"fromView",converter:l.nullableNumberConverter})],n.prototype,"ariaTitleLevel",void 0),a.__decorate([l.attr({attribute:"filter-subtitle"})],n.prototype,"filterSubtitle",void 0),a.__decorate([l.attr({attribute:"aria-subtitle-level",mode:"fromView",converter:l.nullableNumberConverter})],n.prototype,"ariaSubtitleLevel",void 0),a.__decorate([l.attr({attribute:"instructional-text"})],n.prototype,"instructionalText",void 0),a.__decorate([l.attr({attribute:"show-counter-badges",mode:"boolean"})],n.prototype,"showCounterBadges",void 0),a.__decorate([l.observable],n.prototype,"slottedFacets",void 0);exports.default=()=>(t.SafButton(),i.default(),r.default(),n.define({name:e.getComponentName("saf-faceted-filter"),template:l.html`
	<template
		id="${e=>e.id}"
		filter-title="${e=>e.filterTitle}"
		filter-subtitle="${e=>e.filterSubtitle}"
		aria-title-level="${e=>e.ariaTitleLevel}"
		aria-subtitle-level="${e=>e.ariaSubtitleLevel}"
		reset-label="${e=>e.resetButtonLabel}"
	>
		<div class="filter-header" part="filter-header">
			<div
				class="filter-title"
				part="filter-title"
				role="heading"
				aria-level="${e=>e.ariaTitleLevel}"
			>
				${e=>e.filterTitle}
			</div>
			${o.when(e=>e.instructionalText,l.html`${s.instructionalTextTemplate}`)}
			<div class="filter-by" part="filter-by">
				<div
					class="filter-subtitle"
					part="filter-subtitle"
					role="heading"
					aria-level="${e=>e.ariaSubtitleLevel}"
				>
					${e=>e.filterSubtitle}
				</div>
				<saf-button
					id="button-${e=>e.id}"
					appearance="tertiary"
					@click="${e=>e.handleReset()}"
				>
					<saf-icon icon-name="arrow-rotate-right" slot="start"></saf-icon>
					${e=>e.resetButtonLabel}
				</saf-button>
			</div>
			<saf-divider></saf-divider>
		</div>
		<div class="control" part="control">
			<slot
				${d.slotted({property:"slottedFacets",filter:d.elements("saf-facet-category")})}
			></slot>
		</div>
	</template>
`,styles:l.css`
	${e.replaceComponentNamesWithSafAttribute(":host{display:block}.filter-title{font:var(--saf-type-heading-default-xl-strong-standard);margin-bottom:var(--saf-spacing-1)}.filter-subtitle{font:var(--saf-type-heading-default-md-strong-standard);padding-bottom:var(--saf-spacing-2);padding-top:var(--saf-spacing-2)}.filter-title,.filter-subtitle{color:var(--saf-color-text-strong)}.instructional-text{font:var(--saf-type-body-default-md-regular-standard)}saf-divider{margin-bottom:var(--saf-spacing-4);margin-top:var(--saf-spacing-4)}.filter-by{align-items:center;display:flex;justify-content:space-between;margin-top:var(--saf-spacing-2)}@media(width <= 320px){.filter-by{display:block}}")}
`,registry:e.getRegistry()})),exports.safFacetedFilterConfig={events:{onClear:"clear"}};
