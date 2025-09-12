"use strict";var e=require("@saffron/config"),t=require("./define-CgQAavGn.js"),s=require("./saf-divider.js"),i=require("./saf-icon.js"),n=require("./saf-number-field.js"),a=require("./saf-option.js"),r=require("./saf-select.js"),o=require("tslib"),l=require("./a11y-DvNZtvTj.js"),d=require("./global-enums-58U8enSy.js"),c=require("./fast-element-DOTfrYFb.js"),p=require("./when-0aDJpnLk.js");class h{constructor(e,t,s){this.index=e,this.removed=t,this.addedCount=s}adjustTo(e){let t=this.index;const s=e.length;return t>s?t=s-this.addedCount:t<0&&(t=s+this.removed.length+t-this.addedCount),this.index=t<0?0:t,this}}const u=Object.freeze({reset:1,splice:2,optimized:3}),g=new h(0,c.emptyArray,0);g.reset=!0;const f=[g];function v(e,t,s,i){return t<s||i<e?-1:t===s||i===e?0:e<s?t<i?t-s:i-s:i<t?i-e:t-e}function m(e,t,s,i,n,a){let r=0,o=0;const l=Math.min(s-t,a-n);if(0===t&&0===n&&(r=function(e,t,s){for(let i=0;i<s;++i)if(e[i]!==t[i])return i;return s}(e,i,l)),s===e.length&&a===i.length&&(o=function(e,t,s){let i=e.length,n=t.length,a=0;for(;a<s&&e[--i]===t[--n];)a++;return a}(e,i,l-r)),n+=r,a-=o,(s-=o)-(t+=r)===0&&a-n===0)return c.emptyArray;if(t===s){const e=new h(t,[],0);for(;n<a;)e.removed.push(i[n++]);return[e]}if(n===a)return[new h(t,[],s-t)];const d=function(e){let t=e.length-1,s=e[0].length-1,i=e[t][s];const n=[];for(;t>0||s>0;){if(0===t){n.push(2),s--;continue}if(0===s){n.push(3),t--;continue}const a=e[t-1][s-1],r=e[t-1][s],o=e[t][s-1];let l;l=r<o?r<a?r:a:o<a?o:a,l===a?(a===i?n.push(0):(n.push(1),i=a),t--,s--):l===r?(n.push(3),t--,i=r):(n.push(2),s--,i=o)}return n.reverse()}(function(e,t,s,i,n,a){const r=a-n+1,o=s-t+1,l=new Array(r);let d,c;for(let e=0;e<r;++e)l[e]=new Array(o),l[e][0]=e;for(let e=0;e<o;++e)l[0][e]=e;for(let s=1;s<r;++s)for(let a=1;a<o;++a)e[t+a-1]===i[n+s-1]?l[s][a]=l[s-1][a-1]:(d=l[s-1][a]+1,c=l[s][a-1]+1,l[s][a]=d<c?d:c);return l}(e,t,s,i,n,a)),p=[];let u,g=t,f=n;for(let e=0;e<d.length;++e)switch(d[e]){case 0:void 0!==u&&(p.push(u),u=void 0),g++,f++;break;case 1:void 0===u&&(u=new h(g,[],0)),u.addedCount++,g++,u.removed.push(i[f]),f++;break;case 2:void 0===u&&(u=new h(g,[],0)),u.addedCount++,g++;break;case 3:void 0===u&&(u=new h(g,[],0)),u.removed.push(i[f]),f++}return void 0!==u&&p.push(u),p}function b(e,t){let s=!1,i=0;for(let n=0;n<t.length;n++){const a=t[n];if(a.index+=i,s)continue;const r=v(e.index,e.index+e.removed.length,a.index,a.index+a.addedCount);if(r>=0){t.splice(n,1),n--,i-=a.addedCount-a.removed.length,e.addedCount+=a.addedCount-r;const o=e.removed.length+a.removed.length-r;if(e.addedCount||o){let t=a.removed;if(e.index<a.index){const s=e.removed.slice(0,a.index-e.index);s.push(...t),t=s}if(e.index+e.removed.length>a.index+a.addedCount){const s=e.removed.slice(a.index+a.addedCount-e.index);t.push(...s)}e.removed=t,a.index<e.index&&(e.index=a.index)}else s=!0}else if(e.index<a.index){s=!0,t.splice(n,0,e),n++;const r=e.addedCount-e.removed.length;a.index+=r,i+=r}}s||t.push(e)}let x=Object.freeze({support:u.optimized,normalize:(e,t,s)=>void 0===e?void 0===s?c.emptyArray:function(e,t){let s=[];const i=[];for(let e=0,s=t.length;e<s;e++)b(t[e],i);for(let t=0,n=i.length;t<n;++t){const n=i[t];1!==n.addedCount||1!==n.removed.length?s=s.concat(m(e,n.index,n.index+n.addedCount,n.removed,0,n.removed.length)):n.removed[0]!==e[n.index]&&s.push(n)}return s}(t,s):f,pop(e,t,s,i){const n=e.length>0,a=s.apply(e,i);return n&&t.addSplice(new h(e.length,[a],0)),a},push(e,t,s,i){const n=s.apply(e,i);return t.addSplice(new h(e.length-i.length,[],i.length).adjustTo(e)),n},reverse(e,t,s,i){const n=s.apply(e,i);return t.reset(e),n},shift(e,t,s,i){const n=e.length>0,a=s.apply(e,i);return n&&t.addSplice(new h(0,[a],0)),a},sort(e,t,s,i){const n=s.apply(e,i);return t.reset(e),n},splice(e,t,s,i){const n=s.apply(e,i);return t.addSplice(new h(+i[0],n,i.length>2?i.length-2:0).adjustTo(e)),n},unshift(e,t,s,i){const n=s.apply(e,i);return t.addSplice(new h(0,[],i.length).adjustTo(e)),n}});function y(e,t,s){Reflect.defineProperty(e,t,{value:s,enumerable:!1})}class w extends c.SubscriberSet{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this._strategy=null,this._lengthObserver=void 0,this.call=this.flush,y(e,"$fastController",this)}get strategy(){return this._strategy}set strategy(e){this._strategy=e}get lengthObserver(){let e=this._lengthObserver;if(void 0===e){const t=this.subject;this._lengthObserver=e={length:t.length,handleChange(){this.length!==t.length&&(this.length=t.length,c.Observable.notify(e,"length"))}},this.subscribe(e)}return e}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){void 0===this.splices?this.splices=[e]:this.splices.push(e),this.enqueue()}reset(e){this.oldCollection=e,this.enqueue()}flush(){var e;const t=this.splices,s=this.oldCollection;void 0===t&&void 0===s||(this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0,this.notify((null!==(e=this._strategy)&&void 0!==e?e:x).normalize(s,this.subject,t)))}enqueue(){this.needsQueue&&(this.needsQueue=!1,c.Updates.enqueue(this))}}let P=!1;const I=Object.freeze({enable(){if(P)return;P=!0,c.Observable.setArrayObserverFactory(e=>new w(e));const e=Array.prototype;e.$fastPatch||(y(e,"$fastPatch",1),[e.pop,e.push,e.reverse,e.shift,e.sort,e.splice,e.unshift].forEach(t=>{e[t.name]=function(...e){var s;const i=this.$fastController;return void 0===i?t.apply(this,e):(null!==(s=i.strategy)&&void 0!==s?s:x)[t.name](this,i,t,e)}}))}});function _(e){return c.isFunction(e)?c.oneWay(e):e instanceof c.Binding?e:c.oneTime(()=>e)}const $=Object.freeze({positioning:!1,recycle:!0});function C(e,t,s,i){e.context.parent=i.source,e.context.parentContext=i.context,e.bind(t[s])}function L(e,t,s,i){e.context.parent=i.source,e.context.parentContext=i.context,e.context.length=t.length,e.context.index=s,e.bind(t[s])}class O{constructor(e){this.directive=e,this.items=null,this.itemsObserver=null,this.bindView=C,this.views=[],this.itemsBindingObserver=e.dataBinding.createObserver(this,e),this.templateBindingObserver=e.templateBinding.createObserver(this,e),e.options.positioning&&(this.bindView=L)}bind(e){this.location=e.targets[this.directive.targetNodeId],this.controller=e,this.items=this.itemsBindingObserver.bind(e),this.template=this.templateBindingObserver.bind(e),this.observeItems(!0),this.refreshAllViews(),e.onUnbind(this)}unbind(){null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews()}handleChange(e,t){if(t===this.itemsBindingObserver)this.items=this.itemsBindingObserver.bind(this.controller),this.observeItems(),this.refreshAllViews();else if(t===this.templateBindingObserver)this.template=this.templateBindingObserver.bind(this.controller),this.refreshAllViews(!0);else{if(!t[0])return;t[0].reset?this.refreshAllViews():this.updateViews(t)}}observeItems(e=!1){if(!this.items)return void(this.items=c.emptyArray);const t=this.itemsObserver,s=this.itemsObserver=c.Observable.getNotifier(this.items),i=t!==s;i&&null!==t&&t.unsubscribe(this),(i||e)&&s.subscribe(this)}updateViews(e){const t=this.views,s=this.bindView,i=this.items,n=this.template,a=this.controller,r=this.directive.options.recycle,o=[];let l=0,d=0;for(let c=0,p=e.length;c<p;++c){const p=e[c],h=p.removed;let u=0,g=p.index;const f=g+p.addedCount,v=t.splice(p.index,h.length),m=d=o.length+v.length;for(;g<f;++g){const e=t[g],c=e?e.firstChild:this.location;let p;r&&d>0?(u<=m&&v.length>0?(p=v[u],u++):(p=o[l],l++),d--):p=n.create(),t.splice(g,0,p),s(p,i,g,a),p.insertBefore(c)}v[u]&&o.push(...v.slice(u))}for(let e=l,t=o.length;e<t;++e)o[e].dispose();if(this.directive.options.positioning)for(let e=0,s=t.length;e<s;++e){const i=t[e].context;i.length=s,i.index=e}}refreshAllViews(e=!1){const t=this.items,s=this.template,i=this.location,n=this.bindView,a=this.controller;let r=t.length,o=this.views,l=o.length;if(0!==r&&!e&&this.directive.options.recycle||(c.HTMLView.disposeContiguousBatch(o),l=0),0===l){this.views=o=new Array(r);for(let e=0;e<r;++e){const r=s.create();n(r,t,e,a),o[e]=r,r.insertBefore(i)}}else{let e=0;for(;e<r;++e)if(e<l){n(o[e],t,e,a)}else{const r=s.create();n(r,t,e,a),o.push(r),r.insertBefore(i)}const d=o.splice(e,l-e);for(e=0,r=d.length;e<r;++e)d[e].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,s=e.length;t<s;++t)e[t].unbind()}}class B{constructor(e,t,s){this.dataBinding=e,this.templateBinding=t,this.options=s,I.enable()}createHTML(e){return c.Markup.comment(e(this))}createBehavior(){return new O(this)}}function A(e,t,s=$){const i=_(e),n=_(t);return new B(i,n,Object.assign(Object.assign({},$),s))}c.HTMLDirective.define(B);const j="off";class V extends c.FASTElement{constructor(){super(...arguments),this.observer=new ResizeObserver(e=>this.dividerOrientation=e[0].contentRect.width>594),this.ariaLabel="Pagination",this.pageResultsLabel="Page",this.pageOfLabel="of",this.previousButton="Previous",this.nextButton="Next",this.resultsLabel="Showing",this.toLabel="to",this.itemsInputLabel="Items per page",this.pageInputLabel="Go to page:",this.pageButton="Go",this.hasBorder=!1,this.currentPageIndex=1,this.itemsArray=[10,25,50,100],this.itemsPerPage=25,this.dataAriaLive=j,this.itemsLabel="",this.density=d.ComponentDensityEnum.inherit,this.controlled=!1}connectedCallback(){c.Updates.enqueue(()=>super.connectedCallback()),this.getStartIndex(),this.getEndIndex(),this.getTotalPages(),this.observer.observe(this)}disconnectedCallBack(){super.disconnectedCallback(),this.observer.disconnect()}getStartIndex(){return this.startIndex=(this.currentPageIndex-1)*this.itemsPerPage+1}getEndIndex(){return this.endIndex=this.totalItemCount<this.itemsPerPage*this.currentPageIndex?this.totalItemCount:this.itemsPerPage*this.currentPageIndex}getTotalPages(){return this.totalPages=Math.ceil(this.totalItemCount/this.itemsPerPage)||1}updateFormValue(e){this.controlled||(this.itemsPerPage=Number(e),this.startIndex=1,this.currentPageIndex=1),this.$emit("items-per-page-change",Number(e)),this.controlled||this.$emit("change",this.currentPageIndex)}updatePageValue(e){this.controlled||(this.currentPageIndex=Number(e),Number(e)>this.totalPages?this.startIndex=this.totalPages:this.getStartIndex()),this.$emit("change",Number(e))}buttonPageValue(){var t;const s=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(e.getComponentName("saf-number-field"));s.value&&(this.updatePageValue(s.value),s.value="")}_previous(e){this.$emit("previous",e),this.controlled||this.previous()}previous(){this.updatePageValue(this.currentPageIndex-1)}_next(e){this.$emit("next",e),this.controlled||this.next()}next(){this.updatePageValue(this.currentPageIndex+1)}currentPageIndexChanged(){this.getStartIndex(),this.getEndIndex(),this.announceResults()}totalItemCountChanged(){this.getTotalPages(),this.getEndIndex(),this.announceResults()}itemsPerPageChanged(){this.getTotalPages(),this.getEndIndex(),this.announceResults()}announceResults(){if(this.dataAriaLive&&"off"!==this.dataAriaLive){const e=this.totalItemCount?`${this.resultsLabel} ${this.startIndex} ${this.toLabel} ${this.endIndex} ${this.pageOfLabel} ${this.totalItemCount} ${this.itemsLabel}`:`${this.resultsLabel} 0 ${this.itemsLabel}`;l.SafA11y.announce(e.trim(),this.dataAriaLive)}}}o.__decorate([c.attr({attribute:"aria-label"})],V.prototype,"ariaLabel",void 0),o.__decorate([c.attr({attribute:"page-results-label"})],V.prototype,"pageResultsLabel",void 0),o.__decorate([c.attr({attribute:"page-of-label"})],V.prototype,"pageOfLabel",void 0),o.__decorate([c.attr({attribute:"previous-button"})],V.prototype,"previousButton",void 0),o.__decorate([c.attr({attribute:"next-button"})],V.prototype,"nextButton",void 0),o.__decorate([c.attr({attribute:"results-label"})],V.prototype,"resultsLabel",void 0),o.__decorate([c.attr({attribute:"to-label"})],V.prototype,"toLabel",void 0),o.__decorate([c.attr({attribute:"items-input-label"})],V.prototype,"itemsInputLabel",void 0),o.__decorate([c.attr({attribute:"page-input-label"})],V.prototype,"pageInputLabel",void 0),o.__decorate([c.attr({attribute:"page-button"})],V.prototype,"pageButton",void 0),o.__decorate([c.attr({attribute:"has-border"})],V.prototype,"hasBorder",void 0),o.__decorate([c.attr({attribute:"total-item-count",converter:c.nullableNumberConverter})],V.prototype,"totalItemCount",void 0),o.__decorate([c.attr({attribute:"current-page-index"})],V.prototype,"currentPageIndex",void 0),o.__decorate([c.observable],V.prototype,"itemsArray",void 0),o.__decorate([c.attr({attribute:"items-per-page"})],V.prototype,"itemsPerPage",void 0),o.__decorate([c.attr({attribute:"data-aria-live"})],V.prototype,"dataAriaLive",void 0),o.__decorate([c.attr({attribute:"items-label"})],V.prototype,"itemsLabel",void 0),o.__decorate([c.observable],V.prototype,"dividerOrientation",void 0),o.__decorate([c.observable],V.prototype,"startIndex",void 0),o.__decorate([c.observable],V.prototype,"endIndex",void 0),o.__decorate([c.observable],V.prototype,"totalPages",void 0),o.__decorate([c.attr],V.prototype,"density",void 0),o.__decorate([c.attr({attribute:"controlled",mode:"boolean"})],V.prototype,"controlled",void 0);exports.SafPagination=()=>(t.SafButton(),i.default(),s.default(),n.default(),r.default(),a.default(),V.define({name:e.getComponentName("saf-pagination"),template:c.html`
	<template role="navigation" aria-label="${e=>e.ariaLabel}">
		<div class="control" part="control">
			<div class="content" part="content">
				<div
					role="group"
					class="all-page-controls"
					part="all-page-controls"
					aria-labelledBy="flipper-label"
				>
					<div class="flipper-content" part="flipper-content">
						<div id="flipper-label" class="flipper-label" part="flipper-label">
							${e=>e.pageResultsLabel}
							<span class="u-emphasis" part="u-emphasis"
								>${e=>e.currentPageIndex}</span
							>
							${e=>e.pageOfLabel}
							<span class="u-emphasis" part="u-emphasis">${e=>e.totalPages}</span>
						</div>
						<div class="flipper-controls" part="flipper-controls">
							<saf-button
								part="flipper-control-previous"
								class="flipper-control-previous"
								appearance="secondary"
								@click="${e=>e._previous(e.currentPageIndex)}"
								?disabled="${e=>Boolean(1===e.currentPageIndex||1===e.totalPages)}"
							>
								<saf-icon
									slot="start"
									icon-name="chevron-left"
									appearance="solid"
									size="12"
								></saf-icon>
								${e=>e.previousButton}
							</saf-button>
							<saf-button
								part="flipper-control-next"
								class="flipper-control-next"
								appearance="secondary"
								@click="${e=>e._next(e.currentPageIndex)}"
								?disabled="${e=>Boolean(e.currentPageIndex===e.totalPages||e.totalPages<=1)}"
							>
								${e=>e.nextButton}
								<saf-icon
									slot="end"
									icon-name="chevron-right"
									appearance="solid"
									size="12"
								></saf-icon>
							</saf-button>
							<saf-divider
								part="flipper-divider"
								class="flipper-divider"
								orientation="${e=>e.dividerOrientation?"vertical":"horizontal"}"
								role="presentation"
							></saf-divider>
						</div>
					</div>
					<div class="page-controls" part="page-controls">
						<saf-number-field
							part="page-control"
							class="page-control"
							label="${e=>e.pageInputLabel}"
							min="1"
							max="${e=>e.totalPages}"
							@change="${(e,t)=>{t.event.stopPropagation()}}"
						>
						</saf-number-field>
						<saf-button
							part="page-control-button"
							class="page-control-button"
							appearance="secondary"
							@click="${e=>{e.buttonPageValue()}}"
						>
							${e=>e.pageButton}
						</saf-button>
					</div>
				</div>
				<div class="items-content-container" part="items-content-container">
					<p id="items-content-${e=>e.id}" class="items-content" part="items-content">
						${p.when(e=>e.totalItemCount,c.html`
								(${e=>e.resultsLabel}
								<span class="u-emphasis" part="u-emphasis"
									>${e=>e.startIndex}</span
								>
								${e=>e.toLabel}
								<span class="u-emphasis" part="u-emphasis"
									>${e=>e.endIndex}</span
								>
								${e=>e.pageOfLabel}
								<span class="u-emphasis" part="u-emphasis"
									>${e=>e.totalItemCount}</span
								>
								${e=>e.itemsLabel})
							`)}
						${p.when(e=>!e.totalItemCount,c.html`
								(${e=>e.resultsLabel}
								<span class="u-emphasis" part="u-emphasis">0</span> ${e=>e.itemsLabel})
							`)}
					</p>
					<div class="items-controls" part="items-controls">
						<saf-select
							part="item-control"
							class="item-control"
							aria-describedby="items-content-${e=>e.id}"
							label="${e=>e.itemsInputLabel}"
							:value="${e=>String(e.itemsPerPage)}"
							@change="${(e,t)=>{const s=t.event.target,i=s.value;s.value=String(e.itemsPerPage),e.updateFormValue(i)}}"
						>
							${A(e=>e.itemsArray,c.html`<saf-option value=${e=>e}>
									${e=>e}
								</saf-option>`)}
						</saf-select>
					</div>
				</div>
			</div>
		</div>
	</template>
`,styles:c.css`
	${e.replaceComponentNamesWithSafAttribute(':host{contain:layout;container-type:inline-size;display:block;position:relative}:host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=""]){--saf-density: 2}:host(:focus-within){z-index:var(--saf-z-index-default)}:host .content{display:grid;grid-gap:var(--saf-spacing-2) var(--saf-spacing-4);grid-template-columns:auto auto}.control{box-sizing:border-box;font:var(--saf-pagination-control-font, var(--saf-type-body-default-md-regular-standard));padding:var(--saf-pagination-control-padding, var(--saf-spacing-4))}:host([has-border=true]) .control{background:var(--saf-color-background-default);border-color:var(--saf-color-border-strong);border-radius:0 0 var(--saf-border-radius-md) var(--saf-border-radius-md);border-style:solid;border-width:0 var(--saf-line-width-thin) var(--saf-line-width-thin) var(--saf-line-width-thin);box-shadow:var(--saf-drop-shadow-level-1)}.flipper-label{color:var(--saf-color-text-heavy)}.flipper-controls{display:flex;margin-top:var(--saf-spacing-2)}.flipper-controls saf-button{margin-inline-end:var(--saf-spacing-3)}.flipper-controls saf-button:nth-child(2){margin-inline-end:var(--saf-spacing-4)}.u-emphasis{font:var(--saf-pagination-emphasis-font, var(--saf-type-body-default-md-strong-standard))}.all-page-controls,.items-content-container{color:var(--saf-color-text-heavy);display:flex}:host .items-content-container{justify-content:flex-end}.page-controls{align-items:flex-end;display:flex;gap:var(--saf-spacing-3);min-width:max-content}saf-number-field::part(root){max-width:96px}.items-content{margin-bottom:var(--saf-spacing-2);margin-right:var(--saf-spacing-4)}saf-select::part(listbox){position:absolute !important}:host .items-controls{white-space:nowrap}@container (max-width: 37.125em){:host .items-content,:host .items-controls{margin-right:0}:host .items-content{white-space:nowrap}:host .all-page-controls,:host .items-content-container{flex-direction:column}:host .items-content-container{align-items:flex-end}.items-content{margin-top:auto}:host .flipper-controls saf-button{flex-grow:50%;margin-bottom:var(--saf-spacing-4)}.page-controls,.items-content-container{gap:var(--saf-spacing-2);margin-top:var(--saf-spacing-8)}:host .content{gap:0;grid-template-columns:40% auto}:host saf-divider{display:none}}@container (min-width: 37.1875em){:host .flipper-controls{display:flex}:host saf-divider{height:var(--saf-pagination-divider-height, 40px);margin-right:var(--saf-spacing-4)}}@container (max-width: 17.975em){:host .items-content{margin-top:var(--saf-spacing-5)}:host([has-border=true]) .control{border-radius:0}:host .content{grid-template-columns:auto}:host .items-content-container{align-items:flex-start;margin-top:0}.page-controls,.items-content-container{margin-top:8px}}@container (min-width: 37.1875em) and (max-width: 44.5em){:host .items-content-container{flex-direction:column}:host .items-content{align-self:flex-end;margin-top:0;max-width:148px;white-space:nowrap}:host .items-controls{grid-column-start:3}:host .flipper-content,:host .items-controls,:host .page-controls{align-self:flex-end;grid-row-start:2}.items-content{margin-bottom:var(--saf-spacing-2)}}@container (min-width: 44.5625em){:host .items-content{align-self:center;margin-bottom:0;margin-top:var(--saf-spacing-7)}}@container style(--saf-density: 0){.control{--saf-pagination-control-font: var(--saf-type-body-default-md-regular-standard);--saf-pagination-control-padding: var(--saf-spacing-4);--saf-pagination-emphasis-font: var(--saf-type-body-default-md-strong-standard);--saf-pagination-divider-height: 40px}}@container style(--saf-density: 1){.control{--saf-pagination-control-font: var(--saf-type-body-default-md-regular-compact);--saf-pagination-control-padding: var(--saf-spacing-3) var(--saf-spacing-4);--saf-pagination-emphasis-font: var(--saf-type-body-default-md-strong-compact);--saf-pagination-divider-height: 32px}}@supports(-moz-appearance: none) or (stroke-color: transparent){.control{--saf-conditional-line-height:calc(var(--saf-line-height-lg)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-md)*var(--saf-density)*(2 - var(--saf-density)));--saf-conditional-padding-block:calc(var(--saf-spacing-4)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-spacing-3)*var(--saf-density)*(2 - var(--saf-density)));line-height:calc(var(--saf-line-height-lg)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-md)*var(--saf-density)*(2 - var(--saf-density)));--saf-pagination-control-font: var(--saf-font-weight-regular) var(--saf-font-size-md) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3);--saf-pagination-control-padding: var(--saf-conditional-padding-block) var(--saf-spacing-4);--saf-pagination-emphasis-font: var(--saf-font-weight-semibold) var(--saf-font-size-md) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}@container (min-width: 595px){.control{--saf-pagination-divider-height:calc(40px*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + 32px*var(--saf-density)*(2 - var(--saf-density)))}}}')}
`,registry:e.getRegistry()})),exports.repeat=A,exports.safPaginationConfig={events:{onChange:"change",onItemsPerPageChange:"items-per-page-change",onPrevious:"previous",onNext:"next"}};
