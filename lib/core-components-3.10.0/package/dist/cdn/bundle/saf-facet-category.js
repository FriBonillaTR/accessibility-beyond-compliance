"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("./saf-badge.js"),r=require("./saf-disclosure.js"),s=require("./saf-sr-only.js"),a=require("tslib"),d=require("./a11y-DvNZtvTj.js"),i=require("./fast-element-DOTfrYFb.js"),o=require("./slotted-cZBT0SIc.js"),l=require("./when-0aDJpnLk.js");require("./apply-mixins-CewQe2EQ.js"),require("./start-end-template-D7dQJgd3.js"),require("./ref-BeTe_0iT.js"),require("./global-enums-58U8enSy.js"),require("./saf-icon.js"),require("./logger-vjs750p7.js");class n extends i.FASTElement{constructor(){super(...arguments),this.expanded=!0,this.hideCaret=!1,this.showCounterBadges=!1,this._currentChildrenSelected=0}get childrenSelected(){var e;const t=null===(e=this.slottedFacets)||void 0===e?void 0:e.reduce((e,t)=>{var r;return(null===(r=t.childItems)||void 0===r?void 0:r.length)?e+t.childrenSelected:t.checked?e+1:e},0);return this._currentChildrenSelected!==t&&this.showCounterBadges&&d.SafA11y.announce(`${this.summary} ${t} ${1===t?"filter":"filters"} selected`,"polite"),this._currentChildrenSelected=t,t}}a.__decorate([i.attr({attribute:"summary"})],n.prototype,"summary",void 0),a.__decorate([i.attr({attribute:"expanded"}),i.observable],n.prototype,"expanded",void 0),a.__decorate([i.observable],n.prototype,"slottedFacets",void 0),a.__decorate([i.attr({attribute:"hide-caret",mode:"boolean"})],n.prototype,"hideCaret",void 0),a.__decorate([i.observable],n.prototype,"showCounterBadges",void 0),a.__decorate([i.volatile],n.prototype,"childrenSelected",null);exports.default=()=>(r.default(),t.default(),s.default(),n.define({name:e.getComponentName("saf-facet-category"),template:i.html`<template
		id="${e=>e.id}"
		expanded="${e=>e.expanded}"
		summary="${e=>e.summary}"
	>
		<saf-disclosure
			id="disclosure-${e=>e.id}"
			summary="${e=>e.summary}"
			expanded="${e=>e.expanded}"
			?hide-caret="${e=>e.hideCaret}"
		>
			<div role="list">
				<slot
					${o.slotted({property:"slottedFacets",filter:o.elements("saf-facet-item")})}
				></slot>
			</div>
			${l.when(e=>e.showCounterBadges&&e.childrenSelected,i.html` <div class="counter" slot="end">
					<saf-badge appearance="info" counter="true"
						>${e=>e.childrenSelected}</saf-badge
					>
					<saf-sr-only>filters selected</saf-sr-only>
				</div>`)}
			${l.when(e=>e.showCounterBadges&&!e.childrenSelected,i.html` <div slot="end">
					<saf-sr-only>0 filters selected</saf-sr-only>
				</div>`)}
		</saf-disclosure>
	</template> `,styles:i.css`
	${e.replaceComponentNamesWithSafAttribute(":host{display:block}saf-disclosure{--saf-summary-margin-bottom: var(--saf-spacing-1)}.counter{margin-left:auto}::slotted(saf-facet-item){margin-left:var(--saf-spacing-5)}")}
`,registry:e.getRegistry()}));
