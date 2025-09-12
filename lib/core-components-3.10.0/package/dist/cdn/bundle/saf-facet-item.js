"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("./saf-badge.js"),i=require("./define-CgQAavGn.js"),a=require("./saf-checkbox.js"),r=require("./saf-icon.js"),n=require("./saf-sr-only.js"),s=require("tslib"),l=require("@microsoft/fast-web-utilities"),d=require("./fast-element-DOTfrYFb.js"),o=require("./children-DPitos42.js"),c=require("./when-0aDJpnLk.js"),h=require("./ref-BeTe_0iT.js"),m=require("./slotted-cZBT0SIc.js");function u(t){return l.isHTMLElement(t)&&(t.isFacetItem||t.localName===e.getComponentName("saf-facet-item"))}require("./apply-mixins-CewQe2EQ.js"),require("./start-end-template-D7dQJgd3.js"),require("./global-enums-58U8enSy.js"),require("./aria-global-CYzDgx1a.js"),require("./form-associated-DSP-KUNe.js"),require("./a11y-DvNZtvTj.js"),require("./string-helpers-BBo17rr2.js"),require("./logger-vjs750p7.js");class p extends d.FASTElement{constructor(){super(...arguments),this.isFacetItem=!0,this.indeterminate=!1,this.checked=!1,this.disabled=!1,this.focusable=!1,this.expanded=!1,this.expandAriaLabel="Expand",this.collapseAriaLabel="Collapse",this.showCounterBadges=!1,this.deselectAllChildren=()=>{var e;null===(e=this.childItems)||void 0===e||e.forEach(e=>{var t;(null===(t=e.$fastController)||void 0===t?void 0:t.isConnected)&&e.uncheck()})},this.isNestedItem=()=>u(this.parentElement)}indeterminateChanged(){const e=this.parentElement;e instanceof p&&this.$fastController.isConnected&&e.updateCheckedState()}checkedChanged(){const e=this.parentElement;e instanceof p&&this.$fastController.isConnected&&e.updateCheckedState()}childItemsChanged(){this.childItems.length&&!this.indeterminate&&(this.checked?this.selectAllChildren():this.checked||this.deselectAllChildren())}get treeWhollySelected(){var e;return(null===(e=this.childItems)||void 0===e?void 0:e.length)?this.childItems.every(e=>e.treeWhollySelected):this.checked}get treeWhollyUnselected(){var e;return(null===(e=this.childItems)||void 0===e?void 0:e.length)?this.childItems.every(e=>e.treeWhollyUnselected):!this.checked}updateCheckedState(){var e;if(null===(e=this.childItems)||void 0===e?void 0:e.length){const e=this.treeWhollySelected,t=this.treeWhollyUnselected,i=!e&&!t;this.indeterminate!==i&&(this.indeterminate=i),this.checked!==e&&(this.checked=e,this.emitToggle())}}emitToggle(){this.$emit("toggle",this,{bubbles:!1,composed:!0})}check(){this.selectAllChildren(),this.checked=!0,this.indeterminate=!1,this.emitToggle()}uncheck(){this.deselectAllChildren(),this.checked=!1,this.indeterminate=!1,this.emitToggle()}handleCheckChange(e){e.target.checked?this.check():this.uncheck()}selectAllChildren(){var e;null===(e=this.childItems)||void 0===e||e.forEach(e=>{var t;(null===(t=e.$fastController)||void 0===t?void 0:t.isConnected)&&e.check()})}get itemTotal(){var e;return null===(e=this.childItems)||void 0===e?void 0:e.reduce((e,t)=>e+t.itemCount,0)}get childrenSelected(){var e;return null===(e=this.childItems)||void 0===e?void 0:e.reduce((e,t)=>{var i;return(null===(i=t.childItems)||void 0===i?void 0:i.length)?e+t.childrenSelected:t.checked?e+1:e},0)}toggleExpand(e){this.disabled||e.defaultPrevented||(this.expanded=!this.expanded)}get hasChildItems(){var e;return this.childElementCount&&(null===(e=Array.from(this.children))||void 0===e?void 0:e.some(e=>u(e)))}}s.__decorate([d.attr({attribute:"facet-name"})],p.prototype,"facetName",void 0),s.__decorate([d.attr({attribute:"indeterminate",mode:"boolean"}),d.observable],p.prototype,"indeterminate",void 0),s.__decorate([d.attr({attribute:"item-count",mode:"fromView",converter:d.nullableNumberConverter})],p.prototype,"itemCount",void 0),s.__decorate([d.attr({attribute:"checked",mode:"boolean"})],p.prototype,"checked",void 0),s.__decorate([d.attr({attribute:"disabled",mode:"boolean"})],p.prototype,"disabled",void 0),s.__decorate([d.observable],p.prototype,"focusable",void 0),s.__decorate([d.observable],p.prototype,"items",void 0),s.__decorate([d.observable],p.prototype,"childItems",void 0),s.__decorate([d.attr({attribute:"expanded",mode:"boolean"}),d.observable],p.prototype,"expanded",void 0),s.__decorate([d.attr({attribute:"expand-aria-label"})],p.prototype,"expandAriaLabel",void 0),s.__decorate([d.attr({attribute:"collapse-aria-label"})],p.prototype,"collapseAriaLabel",void 0),s.__decorate([d.observable],p.prototype,"showCounterBadges",void 0),s.__decorate([d.volatile],p.prototype,"itemTotal",null),s.__decorate([d.volatile],p.prototype,"childrenSelected",null);const v={fromView:e=>e};let g={determineChangeEvent:()=>"change"};class f{constructor(e,t,i){this.directive=e,this.subscriber=t,this.dataBinding=i,this.isNotBound=!0,this.notifier=d.Observable.binding(i.evaluate,this,i.isVolatile)}bind(e){var t;return this.changeEvent||(this.changeEvent=null!==(t=this.dataBinding.options.changeEvent)&&void 0!==t?t:g.determineChangeEvent(this.directive,this.target)),this.isNotBound&&(this.target.addEventListener(this.changeEvent,this),e.onUnbind(this),this.isNotBound=!1),this.notifier.bind(e)}unbind(e){this.isNotBound=!0,this.target.removeEventListener(this.changeEvent,this)}handleChange(e,t){this.subscriber.handleChange(this.dataBinding.evaluate,this)}handleEvent(e){const t=this.directive,i=e.currentTarget,a=this.notifier.last;if(!a)return void d.FAST.warn(1203);let r;switch(t.aspectType){case 1:r=i.getAttribute(t.targetAspect);break;case 2:r=i.hasAttribute(t.targetAspect);break;case 4:r=i.innerText;break;default:r=i[t.targetAspect]}a.propertySource[a.propertyName]=this.dataBinding.options.fromView(r)}}d.makeSerializationNoop(f);class b extends d.Binding{createObserver(e,t){return new f(t,e,this)}}function C(){return d.html`<template
		id="${e=>e.id}"
		role="listitem"
		aria-level="${e=>e.ariaLevel}"
		expand-aria-label="${e=>e.expandAriaLabel}"
		collapse-aria-label="${e=>e.collapseAriaLabel}"
		slot="${e=>e.isNestedItem()?"item":void 0}"
		facet-name="${e=>e.facetName}"
		:indeterminate="${e=>e.indeterminate}"
		:checked="${e=>e.checked}"
		expanded="${e=>e.expanded}"
		disabled="${e=>e.disabled}"
		item-count="${e=>{var t,i;return(null===(t=e.childItems)||void 0===t?void 0:t.length)?e.itemTotal:null!==(i=e.itemCount)&&void 0!==i?i:0}}"
		${o.children({property:"childItems",filter:m.elements("saf-facet-item")})}
	>
		<!-- root start -->
		<div
			class="root ${e=>e.childItems&&e.hasChildItems?"":"no-children"}"
			part="root"
		>
			${c.when(e=>e.childItems&&e.hasChildItems,d.html` <slot name="start"
					><saf-button
						id="start-${e=>e.id}"
						icon-only=""
						appearance="tertiary"
						density="extra-compact"
						@click="${(e,t)=>e.toggleExpand(t.event)}"
						class="toggle-button"
						part="toggle-button"
						aria-expanded="${e=>e.expanded}"
						aria-controls="child-${e=>e.id}"
						a11y-aria-label="${e=>e.facetName}"
						${h.ref("expandCollapseButton")}
					>
						<saf-icon
							icon-name="${e=>e.expanded?"caret-down":"caret-right"}"
							appearance="solid"
							size="16"
						></saf-icon> </saf-button
				></slot>`)}
			<div
				part="control"
				class="control"
				aria-checked="${e=>{var t;return(null===(t=e.childItems)||void 0===t?void 0:t.length)&&e.indeterminate?"mixed":e.checked}}"
			>
				<saf-checkbox
					id=${e=>{var t;return(null===(t=e.childItems)||void 0===t?void 0:t.length)?`parent-${e.id}`:`child-${e.id}`}}
					class="${e=>{var t;return(null===(t=e.childItems)||void 0===t?void 0:t.length)?"parent-facet":"child-facet"}}"
					:indeterminate="${e=>e.indeterminate}"
					:checked="${function(e,t,i,a=d.Observable.isVolatileBinding(e)){d.isString(t)&&(t={changeEvent:t}),t?t.fromView||(t.fromView=v.fromView):t=v;const r=new b(e,i,a);return r.options=t,r}(e=>e.checked)}"
					@change="${(e,t)=>e.handleCheckChange(t.event)}"
					tabindex="0"
					aria-checked="${e=>{var t;return(null===(t=e.childItems)||void 0===t?void 0:t.length)&&e.indeterminate?"mixed":e.checked}}"
				>
					${e=>e.facetName}
					<slot name="end">
						<!--If there are children items, parent facet displays the total -->
						<!--If there are no children items, show the item count pertaining to the parent-->
						<span class="number-of-items" part="number-of-items"
							>(${e=>{var t,i;return(null===(t=e.childItems)||void 0===t?void 0:t.length)?e.itemTotal:null!==(i=e.itemCount)&&void 0!==i?i:0}})
						</span>
					</slot>
					${c.when(e=>e.showCounterBadges&&e.childrenSelected,d.html`<saf-sr-only
							>${e=>e.childrenSelected} filters selected</saf-sr-only
						>`)}
				</saf-checkbox>
			</div>
			${c.when(e=>e.showCounterBadges&&e.childrenSelected,d.html` <div class="counter">
					<saf-badge appearance="info" counter="true" aria-hidden="true"
						>${e=>e.childrenSelected}</saf-badge
					>
				</div>`)}
		</div>

		${c.when(e=>e.hasChildItems||e.expanded,d.html`<div
				id="children-${e=>e.id}"
				role="list"
				class="child-items"
				part="child-items"
				aria-labelledby="parent-${e=>e.id}"
			>
				<slot name="item" ${m.slotted("childItems")}></slot>
			</div>`)}
	</template>`}exports.default=()=>(i.SafButton(),r.default(),n.default(),a.default(),t.default(),p.define({name:e.getComponentName("saf-facet-item"),template:C(),styles:d.css`
	${e.replaceComponentNamesWithSafAttribute(":host{display:grid;grid-template-rows:auto 1fr;margin-left:calc(var(--saf-spacing-1)*-1)}.root{display:flex;gap:var(--saf-spacing-2);padding-bottom:var(--saf-spacing-2);padding-top:var(--saf-spacing-2)}.counter{margin-left:auto;margin-right:var(--saf-spacing-3)}.control{align-self:center;display:flex}saf-checkbox{grid-column-start:2;margin-bottom:11px;margin-top:11px}.number-of-items{color:var(--saf-color-text-subtle)}:host([expanded=true]) .child-items{display:inline-block;position:relative}:host([expanded=false]) .child-items{display:none}saf-button{align-self:flex-start;display:inline-flex;position:relative}.child-items,:host .root.no-children{margin-left:var(--saf-spacing-8)}")}
`,registry:e.getRegistry()})),exports.safFacetItemConfig={events:{onToggle:"toggle",onExpandedChange:"expanded-change"}};
