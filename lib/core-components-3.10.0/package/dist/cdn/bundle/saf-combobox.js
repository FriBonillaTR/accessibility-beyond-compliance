"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@saffron/config"),e=require("tslib"),i=require("@floating-ui/dom"),o=require("@microsoft/fast-web-utilities"),s=require("./a11y-DvNZtvTj.js"),a=require("./apply-mixins-CewQe2EQ.js"),r=require("./start-end-template-D7dQJgd3.js"),n=require("./define-CgQAavGn.js"),l=require("./chip-DK-bBfdO.js"),d=require("./listbox-BFi_umEM.js"),c=require("./option-3u3pMIm5.js"),h=require("./form-associated-DSP-KUNe.js"),p=require("./global-enums-58U8enSy.js"),f=require("./fast-element-DOTfrYFb.js"),u=require("./when-0aDJpnLk.js"),b=require("./ref-BeTe_0iT.js"),v=require("./slotted-cZBT0SIc.js"),g=require("./saf-icon.js"),x=require("./saf-option.js"),m=require("./saf-progress-ring.js"),y=require("./saf-sr-only.js");require("./aria-global-CYzDgx1a.js"),require("./dom-helpers-DxoVHRyN.js"),require("./logger-vjs750p7.js"),require("./progress-CWabmdLV.js");const O="includes",_="startsWith";class $ extends f.FASTElement{}class w extends(h.FormAssociated($)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class I extends w{constructor(){super(...arguments),this._options=[],this.filteredOptions=[],this.filter="",this.empty=!1,this.announceDelay=1e3,this.focusedIndex=-1,this.virtualizedOptions=[],this.previousScrollTop=0,this.slottedOptionNotifiers=[],this.required=!1,this.a11yKeyboardHelp="Press Enter to select",this.progressRingAriaLabel="Loading options",this.emptyOptionText="No options found",this.readonly=!1,this.value="",this.valueChanged=()=>{this.$fastController.isConnected&&this.control.value!==this.value&&(this.filter=this.value,this.filterOptions())},this.invalid=!1,this.requiredText="*",this.loading=!1,this.clearable=!1,this.open=!1,this.density=p.ComponentDensityEnum.inherit,this.successAriaLabel="Success",this.errorAriaLabel="Error",this.multiple=!1,this.closeOnSelect=!this.multiple,this.clearOnEscape=!1,this.openOnFocus=!1,this.searchOffline=!0,this.searchMode=O,this.autocomplete=!0,this.virtualized=!1,this.estimatedItemHeight=40,this.virtualizationPadding=3,this.highlightSubstrings=!1,this.scrollPosition=0,this.listboxMenuHeight=0,this.visibleOptions=7,this.handleFocus=t=>{var e;if(this.readonly||this.open)return;const i=(null===(e=this.emptySlot)||void 0===e?void 0:e.assignedNodes({flatten:!0}).length)>0&&this.filter.length>0;(this.openOnFocus||i)&&(this.open=!0,this.filterOptions())}}get options(){return f.Observable.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(t){this.listboxMenuHeight=this.estimatedItemHeight*t.length,this._options=t,f.Observable.notify(this,"options")}get hasSlottedOptions(){return(this.virtualized?this.virtualizedOptions.length:this.slottedOptions.length)>0||this.slottedEmptyOption.length>0}slottedOptionsChanged(t,e){this.virtualized&&this.virtualizedOptions.length||(this.options=e.reduce((t,e)=>(c.isListboxOption(e)&&t.push(e),t),[]),-1!==this.focusedIndex&&(null==t?void 0:t[this.focusedIndex])!==e[this.focusedIndex]&&(this.focusedIndex=-1),this._options.forEach((t,e)=>{t.id||(t.id=o.uniqueId("option-")),this.multiple&&(t.isMultiple=this.multiple),e!==this.focusedIndex&&t.setAttribute("data-focus","false")}),this.setOptionsAriaLabels(),this.setOptionNotifiers(),this.searchOffline&&this.value?(this.filter=this.value,this.filterOptions()):(this.filteredOptions=this._options,this.empty=0===this._options.length),this.virtualized&&this.$fastController.isConnected&&this.setupVirtualization(),f.Updates.enqueue(()=>this.syncListboxProxy()))}setOptionsAriaLabels(){const t=this._options.filter(t=>!t.hidden),e=`${t.length}`;t.forEach((t,i)=>{t.ariaPosInSet=`${i+1}`,t.ariaSetSize=e})}setOptionNotifiers(){const t="selected";this.slottedOptionNotifiers.forEach(e=>{e.unsubscribe(this,t)}),this.slottedOptionNotifiers=[],this._options.forEach(e=>{const i=f.Observable.getNotifier(e);i.subscribe(this,t),this.slottedOptionNotifiers.push(i)})}disabledChanged(){this.ariaDisabled=this.disabled?"true":"false"}openChanged(){this.open?(this.resetFocusedIndex(),this.ariaExpanded="true",f.Updates.enqueue(()=>this.syncListboxProxy()),this.$emit("open",null,{bubbles:!1}),f.Updates.enqueue(()=>this.setPositioning())):(this.ariaExpanded="false",this.$emit("close",null,{bubbles:!1}))}multipleChanged(){this.closeOnSelect=!this.multiple}slottedChipsChanged(t,e){if(this.open||!(null==t?void 0:t.length)||e.length>=t.length)return;if(!e.length)return void this.control.focus();const i=t.find(t=>!e.some(e=>e.textContent===t.textContent));if(!i)return;const o=t.indexOf(i);o>0?e[o-1].focus():e[0].focus()}get computedAriaLabel(){let t="";return this.invalid&&this.validationMessage?t=` ${this.errorAriaLabel}: ${this.validationMessage}`:this.isSuccess&&this.validationMessage&&(t=` ${this.successAriaLabel}: ${this.validationMessage}`),(this.inputAriaLabel||[this.label,this.optionalText].filter(Boolean).join(" "))+t}get ariaDescribedbyIds(){let t="";return this.instructionalText&&(t+=`instructional-${this.id}`),this.a11yAriaDescription&&(t+=` ${this.id}-a11y-aria-description`),t}get ariaAutocompleteComputed(){return this.autocomplete&&!this.multiple&&"startsWith"===this.searchMode?"both":"list"}get ariaActiveDescendantComputed(){var t;return this.open&&-1!==this.focusedIndex?null===(t=this.filteredOptions[this.focusedIndex])||void 0===t?void 0:t.id:null}setValue(t){this.control.value=t,this.value=t,this.$emit("change",t)}applySubstringHighlighting(){this.highlightSubstrings&&this.options.forEach(t=>{const e=t.text.split(new RegExp(`(${this.filter})`,"gi"));t.innerHTML="",e.forEach(e=>{if(e.toLowerCase()===this.filter.toLowerCase()){const i=document.createElement("mark");i.style.cssText+="background-color: var(--saf-combobox-highlight-background)",i.style.cssText+="color: var(--saf-combobox-highlight-text)",i.textContent=e,t.appendChild(i)}else{const i=document.createElement("span");i.textContent=e,t.appendChild(i)}})})}clearHandler(t){t.preventDefault(),this.$emit("clear"),this.control.focus()}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.filteredOptions.length>0&&this.focusedIndex>=0&&requestAnimationFrame(()=>{this.filteredOptions[this.focusedIndex].scrollIntoView({block:"nearest"})}))}applyAutocomplete(t){if(this.autocomplete&&!this.multiple&&this.filteredOptions.length&&!t&&this.filter.length){const t=this.filteredOptions[0];this.setValue(t.text),this.control.focus(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward")}}filterOptions(t=!1){if(!this.searchOffline)return;let e=this._options;if(this.virtualized&&this.virtualizedOptions.length&&(e=this.virtualizedOptions),this.searchMode===_?(this.filteredOptions=e.filter(t=>t.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.applyAutocomplete(t)):this.filteredOptions=e.filter(t=>t.text.toLowerCase().includes(this.filter.toLowerCase())),this.virtualized&&this.virtualizedOptions.length){let t=this.virtualizedOptions.length;this.filter.length>0&&(t=this.filteredOptions.length);const e=this.estimatedItemHeight*t-this.estimatedItemHeight*(this.visibleOptions+2*this.virtualizationPadding);0===t?this.resizeListbox(1,0,0,!0):this.resizeListbox(t,0,e,!0),this.renderOptions(0,this.visibleOptions+this.virtualizationPadding)}this.applySubstringHighlighting(),e.forEach(t=>{t.hidden=!this.filteredOptions.includes(t)}),this.setOptionsAriaLabels(),this.empty=0===this.filteredOptions.length,this.empty&&this.announceEmptyOptions(this.announceDelay)}inputHandler(t){t.stopPropagation();const e=["deleteContentBackward","deleteByCut"].includes(t.inputType);if(this.filter=this.control.value,this.value=this.control.value,this.$emit("input",this.value),this.focusedIndex>=0&&this.filteredOptions.length>0&&this.filteredOptions[this.focusedIndex].setAttribute("data-focus","false"),this.focusedIndex=-1,this.filterOptions(e),this.open||(this.open=!0),e||!this.filter.length)return!0}announceEmptyOptions(e){clearTimeout(this.announcerTimeout),this.announcerTimeout=setTimeout(()=>{let e="No results found";const i=this.emptySlot.assignedNodes({flatten:!0});for(const o of i)if(o.nodeType===Node.ELEMENT_NODE){o.localName===t.getComponentName("saf-option")&&(e=`${o.textContent}`)}s.SafA11y.announce(e)},e)}keydownHandler(t){const{key:e,target:i}=t;if(t.ctrlKey||t.shiftKey||this.readonly)return!0;switch(e){case"Enter":if(t.composedPath().some(t=>t instanceof n.Button)||i instanceof l.Chip)return!0;this.open&&this.focusedIndex>=0&&this.filteredOptions.length>0&&this.filteredOptions[this.focusedIndex].click(),!this.open||this.multiple&&-1!==this.focusedIndex||(this.open=!1);break;case"Escape":if(this.open)this.open=!1,t.preventDefault();else{if(!this.clearOnEscape||!this.control.value)return!0;this.$emit("clear")}break;case"ArrowUp":this.open&&this.filteredOptions.length>0&&(this.focusedIndex>=0&&this.filteredOptions[this.focusedIndex].setAttribute("data-focus","false"),this.focusedIndex--,this.focusedIndex<0?(this.focusedIndex=-1,this.control.focus()):this.filteredOptions[this.focusedIndex].setAttribute("data-focus","true"),this.focusAndScrollOptionIntoView());break;case"ArrowDown":if(t.altKey){this.control.focus(),this.open=!0;break}if(this.open||(this.open=!0),this.open&&this.filteredOptions.length>0){const t=this.filteredOptions[this.focusedIndex];-1!==this.focusedIndex&&"true"!==t.getAttribute("data-focus")||(this.focusedIndex>=0&&t.setAttribute("data-focus","false"),this.focusedIndex++,this.focusedIndex>this.filteredOptions.length-1&&(this.focusedIndex=this.filteredOptions.length-1)),this.filteredOptions[this.focusedIndex].setAttribute("data-focus","true"),this.focusAndScrollOptionIntoView()}this.empty&&this.announceEmptyOptions(this.announceDelay);break;case"PageUp":if(this.open&&this.filteredOptions.length>0&&(this.focusedIndex>=0&&this.filteredOptions[this.focusedIndex].setAttribute("data-focus","false"),this.focusedIndex-=10,this.focusedIndex<0&&(this.focusedIndex=0),this.filteredOptions[this.focusedIndex].setAttribute("data-focus","true"),this.focusAndScrollOptionIntoView(),this.virtualized)){const t=this.listbox.offsetHeight;this.listbox.scrollTop-=t}break;case"PageDown":if(this.open&&this.filteredOptions.length>0&&(this.focusedIndex>=0&&this.filteredOptions[this.focusedIndex].setAttribute("data-focus","false"),this.focusedIndex+=10,this.focusedIndex>this.filteredOptions.length-1&&(this.focusedIndex=this.filteredOptions.length-1),this.filteredOptions[this.focusedIndex].setAttribute("data-focus","true"),this.focusAndScrollOptionIntoView(),this.virtualized)){const t=this.listbox.offsetHeight;this.listbox.scrollTop+=t}break;case"Home":this.open&&this.filteredOptions.length>0&&(this.focusedIndex>=0&&this.filteredOptions[this.focusedIndex].setAttribute("data-focus","false"),this.focusedIndex=0,this.filteredOptions[this.focusedIndex].setAttribute("data-focus","true"),this.focusAndScrollOptionIntoView(),this.virtualized&&(this.listbox.scrollTop=0));break;case"End":if(this.open&&this.filteredOptions.length>0&&(this.focusedIndex>=0&&this.filteredOptions[this.focusedIndex].setAttribute("data-focus","false"),this.focusedIndex=this.filteredOptions.length-1,this.filteredOptions[this.focusedIndex].setAttribute("data-focus","true"),this.focusAndScrollOptionIntoView(),this.virtualized)){const t=this.filteredOptions.length*this.estimatedItemHeight;this.listbox.scrollTop=t}break;default:return!0}}focusoutHandler(t){if(!this.open)return!0;const e=t.relatedTarget;this.isSameNode(e)?this.focus():this.options&&this.options.includes(e)||(this.open=!1)}clickHandler(t){var e;if(!(this.disabled||this.readonly||t.target instanceof l.Chip)){if(this.open){const i=t.target.closest("option,[role=option]");if(!i||(null==i?void 0:i.disabled))return void t.stopPropagation();this.multiple||this.setValue(i.text);const o=this.filteredOptions.indexOf(i);return o>=0&&o!==this.focusedIndex&&(null===(e=this.filteredOptions[this.focusedIndex])||void 0===e||e.setAttribute("data-focus","false"),this.focusedIndex=o),void(this.closeOnSelect?this.open=!1:this.open=!0)}if(this.options.length)return this.open=!this.open,this.open&&this.control.focus(),!0}}resetFocusedIndex(){var t;(null===(t=this.filteredOptions)||void 0===t?void 0:t.length)&&(this.filteredOptions.forEach(t=>t.setAttribute("data-focus","false")),this.virtualized||(this.focusedIndex=this.filteredOptions.findIndex(t=>t.selected)))}setupVirtualization(){const t=this.estimatedItemHeight*this._options.length-this.estimatedItemHeight*(this.visibleOptions+2*this.virtualizationPadding);this.virtualizedOptions=[...this.options],this._options.forEach(t=>{t.remove()}),this.resizeListbox(this.virtualizedOptions.length,0,t,!0),this.renderOptions(0,this.visibleOptions+this.virtualizationPadding)}renderOptions(t,e){this._options.forEach(t=>{t.remove()}),this.filter.length>0?this._options=this.filteredOptions.slice(t,e):this._options=this.virtualizedOptions.slice(t,e);for(let t=0;t<this._options.length;t++)this.appendChild(this._options[t])}handleScroll(t){const e=t.target.scrollTop;this.scrollPosition=e||0;let i=this._options.length;if(this.virtualized&&(i=this.virtualizedOptions.length,this.filter.length>0&&(i=this.filteredOptions.length)),this.isAtScrollEnd&&this.$emit("scroll-end"),!this.virtualized)return;const o=Math.floor(this.scrollPosition/this.estimatedItemHeight);let s=o-this.virtualizationPadding;s<0&&(s=0);let a=o+this.visibleOptions+this.virtualizationPadding;a>this.virtualizedOptions.length&&(a=this.virtualizedOptions.length),this.filter.length>0&&a>this.filteredOptions.length&&(a=i);const r=s*this.estimatedItemHeight,n=this.listboxMenuHeight-a*this.estimatedItemHeight;this.resizeListbox(i,r,n,!1),this.renderOptions(s,a)}get isAtScrollEnd(){const t=this.listbox.scrollTop,e=t>this.previousScrollTop,i=t+this.listbox.offsetHeight>=this.listbox.scrollHeight-2;return this.previousScrollTop=t,e&&i}resizeListbox(t,e,i,o=!1){t<this.visibleOptions?(this.listbox.style.maxHeight="280px",this.listbox.style.height="auto",this.topSpacer.style.height="0px",this.bottomSpacer.style.height="0px"):(this.listboxMenuHeight=this.estimatedItemHeight*t,this.listbox.style.height=`${this.listboxMenuHeight}px`),this.topSpacer.style.height=`${e}px`,this.bottomSpacer.style.height=`${i}px`,o&&this.listbox.scrollTo({top:0,behavior:"auto"})}setAutocomplete(t="",e=""){e.includes(t,0)&&(this.setValue(e),this.control.focus(),this.control.setSelectionRange(t.length,this.control.value.length,"backward"),this.filter=e,this.filterOptions())}select(){this.control.select()}setPositioning(){var t;const o=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".root");this.$fastController.isConnected&&(this.cleanup=i.autoUpdate(o,this.listbox,()=>e.__awaiter(this,void 0,void 0,function*(){var t;const{middlewareData:e,x:s,y:a}=yield i.computePosition(o,this.listbox,{placement:"bottom",strategy:"fixed",middleware:[i.autoPlacement({allowedPlacements:["top","bottom"]}),i.offset(6),i.size({apply:({availableHeight:t,rects:e})=>{const i=window.getComputedStyle(this.listbox),o=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),s=this.estimatedItemHeight*this.visibleOptions+o,a=Math.floor((t-o)/this.estimatedItemHeight)*this.estimatedItemHeight+o;Object.assign(this.listbox.style,{maxHeight:`${a<s?a:s}px`,width:`${e.reference.width}px`})}}),i.hide()]});if(null===(t=e.hide)||void 0===t?void 0:t.referenceHidden)return this.open=!1,void this.cleanup();Object.assign(this.listbox.style,{position:"fixed",top:"0",left:"0",transform:`translate(${s}px, ${a}px)`})})))}openMenu(){this.open=!0}closeMenu(){this.open=!1}connectedCallback(){super.connectedCallback(),this.ariaControls="listbox-proxy",this.addEventListener("focus",this.handleFocus)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this.handleFocus)}syncListboxProxy(){if("object"!=typeof this.listboxProxy||!(this.listboxProxy instanceof HTMLElement))return;this.listboxProxy.innerHTML="";const t=this.filteredOptions[this.focusedIndex];if(t){const e=document.importNode(t,!0);this.listboxProxy.appendChild(e),["aria-setsize","aria-posinset","aria-selected","aria-checked","aria-current"].forEach(i=>{const o=t.getAttribute(i);null!==o?e.setAttribute(i,o):e.removeAttribute(i)})}}focusedIndexChanged(){f.Updates.enqueue(()=>this.syncListboxProxy())}handleChange(t){"object"==typeof t&&t instanceof c.Option&&f.Updates.enqueue(()=>this.syncListboxProxy())}}e.__decorate([f.observable],I.prototype,"empty",void 0),e.__decorate([f.observable],I.prototype,"focusedIndex",void 0),e.__decorate([f.observable],I.prototype,"slottedOptions",void 0),e.__decorate([f.observable],I.prototype,"slottedEmptyOption",void 0),e.__decorate([f.attr],I.prototype,"id",void 0),e.__decorate([f.attr({attribute:"required",mode:"boolean"})],I.prototype,"required",void 0),e.__decorate([f.attr({attribute:"disabled",mode:"boolean"})],I.prototype,"disabled",void 0),e.__decorate([f.attr({attribute:"a11y-keyboard-help"})],I.prototype,"a11yKeyboardHelp",void 0),e.__decorate([f.attr({attribute:"progress-ring-aria-label"})],I.prototype,"progressRingAriaLabel",void 0),e.__decorate([f.attr({attribute:"empty-option-text"})],I.prototype,"emptyOptionText",void 0),e.__decorate([f.attr],I.prototype,"placeholder",void 0),e.__decorate([f.attr({mode:"boolean"})],I.prototype,"readonly",void 0),e.__decorate([f.observable],I.prototype,"value",void 0),e.__decorate([f.attr({attribute:"invalid",mode:"boolean"}),f.observable],I.prototype,"invalid",void 0),e.__decorate([f.attr({attribute:"is-success",mode:"boolean"}),f.observable],I.prototype,"isSuccess",void 0),e.__decorate([f.attr({attribute:"label"})],I.prototype,"label",void 0),e.__decorate([f.attr({attribute:"input-aria-label"})],I.prototype,"inputAriaLabel",void 0),e.__decorate([f.attr({attribute:"instructional-text"})],I.prototype,"instructionalText",void 0),e.__decorate([f.attr({attribute:"required-text"})],I.prototype,"requiredText",void 0),e.__decorate([f.attr({attribute:"optional-text"})],I.prototype,"optionalText",void 0),e.__decorate([f.attr({attribute:"loading",mode:"boolean"})],I.prototype,"loading",void 0),e.__decorate([f.attr({attribute:"clearable",mode:"boolean"})],I.prototype,"clearable",void 0),e.__decorate([f.observable],I.prototype,"open",void 0),e.__decorate([f.attr],I.prototype,"density",void 0),e.__decorate([f.attr({attribute:"validation-message"})],I.prototype,"validationMessage",void 0),e.__decorate([f.attr({attribute:"success-aria-label"})],I.prototype,"successAriaLabel",void 0),e.__decorate([f.attr({attribute:"error-aria-label"})],I.prototype,"errorAriaLabel",void 0),e.__decorate([f.attr({attribute:"a11y-aria-description"})],I.prototype,"a11yAriaDescription",void 0),e.__decorate([f.attr({attribute:"multiple",mode:"boolean"})],I.prototype,"multiple",void 0),e.__decorate([f.attr({attribute:"close-on-select",mode:"boolean"})],I.prototype,"closeOnSelect",void 0),e.__decorate([f.attr({attribute:"clear-on-escape",mode:"boolean"})],I.prototype,"clearOnEscape",void 0),e.__decorate([f.attr({attribute:"open-on-focus",mode:"boolean"})],I.prototype,"openOnFocus",void 0),e.__decorate([f.attr({attribute:"search-offline",mode:"boolean"})],I.prototype,"searchOffline",void 0),e.__decorate([f.attr({attribute:"search-mode"})],I.prototype,"searchMode",void 0),e.__decorate([f.attr({attribute:"autocomplete",mode:"boolean"})],I.prototype,"autocomplete",void 0),e.__decorate([f.attr({attribute:"browser-autocomplete"})],I.prototype,"browserAutocomplete",void 0),e.__decorate([f.attr({attribute:"virtualized",mode:"boolean"})],I.prototype,"virtualized",void 0),e.__decorate([f.attr({attribute:"estimated-item-height"})],I.prototype,"estimatedItemHeight",void 0),e.__decorate([f.attr({attribute:"virtualization-padding"})],I.prototype,"virtualizationPadding",void 0),e.__decorate([f.attr({attribute:"highlight-substrings",mode:"boolean"})],I.prototype,"highlightSubstrings",void 0),e.__decorate([f.observable],I.prototype,"slottedChips",void 0),e.__decorate([f.volatile],I.prototype,"computedAriaLabel",null),e.__decorate([f.volatile],I.prototype,"ariaDescribedbyIds",null);class A{}e.__decorate([f.observable],A.prototype,"ariaAutoComplete",void 0),e.__decorate([f.observable],A.prototype,"ariaControls",void 0),a.applyMixins(A,d.DelegatesARIAListbox),a.applyMixins(I,r.StartEnd,A);exports.default=()=>(m.default(),n.SafButton(),g.default(),x.default(),y.default(),I.define({name:t.getComponentName("saf-combobox"),template:f.html`
	<template
		tabindex="${t=>t.disabled?null:"0"}"
		?disabled="${t=>t.disabled}"
		?open="${t=>t.open}"
		@focusout="${(t,e)=>t.focusoutHandler(e.event)}"
		@click="${(t,e)=>t.clickHandler(e.event)}"
		@keydown="${(t,e)=>t.keydownHandler(e.event)}"
	>
		<div class="label-container" part="label-container">
			<slot name="label">
				<label part="label" for="${t=>t.id}" id="label-${t=>t.id}" class="label">
					${t=>t.label}${u.when(t=>t.required,f.html`<span class="required-text" part="required-text" aria-hidden="true"
							>${t=>t.requiredText}
						</span>`)}
				</label>
			</slot>
			<span part="optional-text" class="optional-text" id="optional-${t=>t.id}">
				${t=>t.optionalText}
			</span>
			<p
				part="instructional-text"
				id="instructional-${t=>t.id}"
				class="instructional-text"
			>
				${t=>t.instructionalText}
			</p>
		</div>
		<div class="root" part="root">
			<slot name="root">
				<slot name="start"></slot>

				<slot name="control">
					<input
						id="${t=>t.id}"
						class="control ${t=>t.isSuccess?"is-success":""}"
						part="control"
						role="combobox"
						type="text"
						autocomplete="${t=>{var e;return null!==(e=t.browserAutocomplete)&&void 0!==e?e:"off"}}"
						aria-label="${t=>t.computedAriaLabel}"
						aria-activedescendant="${t=>t.ariaActiveDescendant||t.ariaActiveDescendantComputed}"
						aria-autocomplete="${t=>t.ariaAutoComplete||t.ariaAutocompleteComputed}"
						aria-controls="${t=>t.ariaControls}"
						aria-invalid="${t=>t.ariaInvalid||Boolean(t.invalid)}"
						aria-describedby="${t=>t.ariaDescribedbyIds.length>0?t.ariaDescribedbyIds:null}"
						aria-expanded="${t=>t.ariaExpanded}"
						aria-haspopup="listbox"
						aria-required="${t=>t.required}"
						aria-disabled="${t=>t.ariaDisabled}"
						aria-readonly="${t=>t.readonly}"
						?required="${t=>t.required}"
						?disabled="${t=>t.disabled}"
						placeholder="${t=>t.placeholder}"
						?readonly="${t=>t.readonly}"
						:value="${t=>t.value}"
						@input="${(t,e)=>t.inputHandler(e.event)}"
						${b.ref("control")}
					/>
				</slot>

				<slot name="end"></slot>

				${u.when(t=>t.loading,f.html`
						<div class="loading" part="loading">
							<slot name="loading">
								<saf-progress-ring
									aria-label="${t=>t.progressRingAriaLabel}"
									announce
									indeterminate="true"
									progress-size="small"
								/>
							</slot>
						</div>
					`)}
				${u.when(t=>t.clearable,f.html`
						<div part="clear" class="clear">
							<slot name="clear">
								<saf-button
									part="clear-button"
									class="clear-button"
									icon-only
									a11y-aria-label=${t=>`Clear ${t.label}`}
									appearance="tertiary"
									density="${t=>t.density}"
									?disabled="${t=>t.disabled}"
									@click="${(t,e)=>t.clearHandler(e.event)}"
								>
									<saf-icon icon-name="xmark-large" />
								</saf-button>
							</slot>
						</div>
					`)}

				<div part="indicator" class="indicator">
					<slot name="indicator">
						<saf-icon icon-name="chevron-down" />
					</slot>
				</div>
			</slot>
		</div>

		<!-- default slot for options -->
		<div
			part="listbox"
			tabindex="-1"
			id="listbox"
			aria-label="${t=>t.label?t.label:t.computedAriaLabel}"
			aria-multiselectable="${t=>t.multiple}"
			class="listbox"
			role="listbox"
			?disabled="${t=>t.disabled}"
			?hidden="${t=>!t.open||!t.hasSlottedOptions}"
			${b.ref("listbox")}
			@scroll="${(t,e)=>t.handleScroll(e.event)}"
		>
			<slot
				name="empty-option"
				${b.ref("emptySlot")}
				${v.slotted({property:"slottedEmptyOption"})}
			>
				${u.when(t=>t.searchOffline&&t.empty,f.html` <saf-option disabled> ${t=>t.emptyOptionText} </saf-option> `)}
			</slot>
			<div ${b.ref("topSpacer")}></div>
			<slot
				${v.slotted({filter:d.Listbox.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
			></slot>
			<div ${b.ref("bottomSpacer")}></div>
		</div>

		<div
			role="listbox"
			id="listbox-proxy"
			class="listbox-proxy"
			aria-label="${t=>t.label?t.label:t.computedAriaLabel}"
			aria-describedby="${t=>t.multiple?"a11y-listbox-description":null}"
			aria-multiselectable="${t=>t.multiple}"
			?disabled="${t=>t.disabled}"
			?hidden="${t=>!t.open||!t.hasSlottedOptions}"
			${b.ref("listboxProxy")}
		></div>
		<div id="a11y-listbox-description" class="a11y-listbox-description">
			${t=>t.a11yKeyboardHelp}
		</div>

		${u.when(t=>t.isSuccess&&!t.invalid,f.html`
				<div role="status" part="success" class="validation success">
					<slot name="success" id="status-${t=>t.id}-success">
						<saf-icon
							part="success-icon"
							class="success-icon"
							icon-name="circle-check"
							appearance="solid"
							color="var(--saf-color-status-success-strong)"
							presentation="false"
							aria-label="${t=>t.successAriaLabel}"
						></saf-icon>
						<span part="message" class="message">${t=>t.validationMessage}</span>
					</slot>
				</div>
			`)}
		${u.when(t=>t.invalid,f.html`
				<div role="status" part="error" class="validation error">
					<slot name="error" id="status-${t=>t.id}-error">
						<saf-icon
							part="error-icon"
							class="error-icon"
							icon-name="hexagon-exclamation"
							appearance="solid"
							color="var(--saf-color-status-error-strong)"
							presentation="false"
							aria-label="${t=>t.errorAriaLabel}"
						></saf-icon>
						<span part="message" class="message">${t=>t.validationMessage}</span>
					</slot>
				</div>
			`)}

		<saf-sr-only id="${t=>t.id}-a11y-aria-description" part="a11y-aria-description"
			>${t=>t.a11yAriaDescription}</saf-sr-only
		>

		${u.when(t=>t.multiple,f.html`
				<div
					part="chips"
					class="chips ${t=>{var e;return(null===(e=t.slottedChips)||void 0===e?void 0:e.length)?"has-chips":""}}"
					role="group"
					aria-label=${t=>`${t.label} selected`}
				>
					<slot
						name="chips"
						id="${t=>t.id}-selected"
						${v.slotted({property:"slottedChips",filter:v.elements("saf-chip")})}
					></slot>
				</div>
			`)}
	</template>
`,styles:f.css`
	${t.replaceComponentNamesWithSafAttribute(':host{--saf-form-label-container-margin: 0 0 var(--saf-spacing-2) 0;--saf-form-label-text-decoration: none;color:var(--saf-color-text-heavy)}.label{font:var(--saf-form-label-font, var(--saf-type-body-default-md-strong-standard));text-decoration:var(--saf-input-label-text-decoration)}.instructional-text,.optional-text{font:var(--saf-form-label-instructional-text-font, var(--saf-type-body-default-sm-regular-standard))}.instructional-text{display:block;margin:0}.label-container{margin:var(--saf-form-label-container-margin);text-align:start}:host(:not([label],[instructional-text],[optional-text])) .label-container,:host(:not([label])) .label,:host(:not([instructional-text])) .instructional-text,:host(:not([optional-text])) .optional-text,.instructional-text:empty{display:none}:host([disabled]) .label,:host([disabled]) .instructional-text,:host([disabled]) .optional-text{color:var(--saf-color-interactive-disabled-strong)}:host([readonly]) .label,:host([readonly]) .instructional-text,:host([readonly]) .optional-text{color:var(--saf-color-text-heavy)}:host([product-header-item]){color:var(--saf-color-text-knockout)}:host([product-header-item][disabled]) .label,:host([product-header-item][disabled]) .instructional-text{color:var(--saf-product-header-color-interactive-on-disabled-subtle)}:host([product-header-item][readonly]) .label,:host([product-header-item][readonly]) .instructional-text{color:var(--saf-product-header-color-interactive-on-read-only-subtle)}@container style(--saf-density: 0){.label{--saf-form-label-font: var(--saf-type-body-default-md-strong-standard)}.instructional-text,.optional-text{--saf-form-label-instructional-text-font: var(--saf-type-body-default-sm-regular-standard)}}@container style(--saf-density: 1){.label{--saf-form-label-font: var(--saf-type-body-default-md-strong-compact)}.instructional-text,.optional-text{--saf-form-label-instructional-text-font: var(--saf-type-body-default-sm-regular-compact)}}@supports(-moz-appearance: none) or (stroke-color: transparent){.label{--saf-conditional-line-height:calc(var(--saf-line-height-lg)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-md)*var(--saf-density)*(2 - var(--saf-density)));--saf-form-label-font: var(--saf-font-weight-semibold) var(--saf-font-size-md) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}.instructional-text,.optional-text{--saf-conditional-line-height:calc(var(--saf-line-height-md)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-sm)*var(--saf-density)*(2 - var(--saf-density)));--saf-form-label-instructional-text-font: var(--saf-font-weight-regular) var(--saf-font-size-sm) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}}:host{--saf-combobox-highlight-background: var(--saf-color-sky-500);--saf-combobox-highlight-text: var(--saf-color-text-knockout);display:block;position:relative}:host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=""]){--saf-density: 2}:host .control{background:rgba(0,0,0,0);border-color:var(--saf-color-border-stronger);border-radius:var(--saf-border-radius-xs) 0 0 var(--saf-border-radius-xs);border-style:solid;border-width:var(--saf-line-width-thin) 0 var(--saf-line-width-thin) var(--saf-line-width-thin);box-sizing:border-box;color:var(--saf-color-text-heavy);flex-grow:1;font:var(--saf-combobox-control-font, var(--saf-type-body-default-md-regular-standard));height:var(--saf-combobox-control-height, 42px);padding:var(--saf-combobox-control-padding, var(--saf-spacing-2) var(--saf-spacing-3));width:100%}.root{background:var(--saf-color-interactive-background-default);border-radius:var(--saf-border-radius-xs);box-sizing:border-box;display:flex;position:relative;width:100%}:host(:not([disabled]):hover) .root{outline:var(--saf-line-width-thick) solid var(--saf-color-interactive-border-secondary-hover);outline-offset:-1px}.root:has(.control:focus){box-shadow:var(--saf-drop-shadow-focus);outline:none}:host([readonly]){pointer-events:none}:host([disabled]) .root{background:var(--saf-color-interactive-disabled-subtle);box-shadow:none}:host([readonly]) .root{background:var(--saf-color-interactive-read-only-subtle);outline:var(--saf-line-width-thin) solid var(--saf-color-interactive-border-read-only-default);outline-offset:-1px}.indicator{align-items:center;background-color:var(--saf-color-background-subtle);border:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);border-radius:0 var(--saf-border-radius-xs) var(--saf-border-radius-xs) 0;box-sizing:border-box;display:flex;height:var(--saf-combobox-indicator-size, 42px);justify-content:center;padding:var(--saf-combobox-indicator-padding, var(--saf-spacing-3));width:var(--saf-combobox-indicator-size, 42px)}:host([readonly]) .indicator{background:var(--saf-color-interactive-read-only-subtle);border-color:var(--saf-color-interactive-on-read-only-subtle)}.clear{align-items:center;border-bottom:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);border-radius:0;border-top:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);box-sizing:border-box;display:inline-flex;height:var(--saf-combobox-indicator-size, 42px);justify-content:center;width:var(--saf-combobox-indicator-size, 42px);z-index:var(--saf-z-index-default);--saf-button-size: var(--saf-combobox-indicator-size, 42px)}:host .root .clear:focus-within .clear-button{--saf-drop-shadow-focus: none;--saf-line-width-thin: var(--saf-line-width-thick);--saf-button-border: var(--saf-color-interactive-focus)}:host(:not([disabled]):focus) .control{outline:none}.control::placeholder{color:var(--saf-color-text-subtle);opacity:var(--saf-opacity-7)}:host([disabled]) .control::placeholder{color:var(--saf-color-interactive-on-disabled-subtle)}:host([readonly]) .control::placeholder{color:var(--saf-color-text-heavy)}:host([disabled]) .clear,:host([disabled]) .loading,:host([disabled]) .control,:host([disabled]) .indicator{background-color:var(--saf-color-interactive-disabled-subtle);border-color:var(--saf-color-interactive-border-disabled-default);cursor:not-allowed}:host([disabled]) ::slotted(saf-icon){color:var(--saf-color-interactive-on-disabled-subtle);cursor:not-allowed}.chips{align-items:center;display:flex;flex-wrap:wrap;gap:var(--saf-spacing-2)}.chips.has-chips{margin-top:var(--saf-spacing-2)}.listbox{background:var(--saf-color-interactive-background-default);border:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);border-radius:var(--saf-border-radius-xs);box-shadow:var(--saf-drop-shadow-level-2);box-sizing:border-box;flex-direction:column;left:0;overflow-y:auto;overscroll-behavior:contain;padding:6px;position:absolute;right:0;z-index:var(--saf-z-index-dropdown)}slot[name=empty-option] saf-option[disabled],::slotted([slot=empty-option]){color:var(--saf-color-text-heavy)}.loading{align-items:center;border-bottom:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);border-top:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);display:flex;padding:var(--saf-spacing-1) var(--saf-spacing-2)}:host .a11y-aria-description{display:none}.root:has(.control:not(:disabled)[aria-invalid=true]){border-radius:var(--saf-border-radius-xs);box-shadow:var(--saf-drop-shadow-error)}.root:has(.control:not(:disabled)[aria-invalid=true]:focus){box-shadow:var(--saf-drop-shadow-error-focus)}.root:has(.control:not(:disabled,[aria-invalid=true]).is-success){border-radius:var(--saf-border-radius-xs);box-shadow:var(--saf-drop-shadow-success)}.root:has(.control:not(:disabled,[aria-invalid=true]).is-success:focus){box-shadow:var(--saf-drop-shadow-success-focus)}:host .listbox-proxy{border:0;clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;left:-100vw;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}:host:dir(rtl) .listbox-proxy{right:-100vw}.validation{display:flex;font:var(--saf-combobox-validation-font, var(--saf-type-body-default-sm-strong-standard));gap:var(--saf-spacing-1);margin-top:var(--saf-spacing-2)}.validation.error{color:var(--saf-color-status-error-strong)}.validation.success{color:var(--saf-color-status-success-strong)}.a11y-listbox-description{display:none}@container style(--saf-density: 0){.root{--saf-combobox-control-font: var(--saf-type-body-default-md-regular-standard);--saf-combobox-control-padding: var(--saf-spacing-2) var(--saf-spacing-3);--saf-combobox-control-height: 42px;--saf-combobox-indicator-padding: var(--saf-spacing-3);--saf-combobox-indicator-size: var(--saf-combobox-control-height);--saf-combobox-validation-font: var(--saf-type-body-default-sm-strong-standard)}}@container style(--saf-density: 1){.root{--saf-combobox-control-font: var(--saf-type-body-default-md-regular-compact);--saf-combobox-control-padding: var(--saf-spacing-1) var(--saf-spacing-3);--saf-combobox-control-height: 32px;--saf-combobox-indicator-padding: var(--saf-spacing-2);--saf-combobox-indicator-size: var(--saf-combobox-control-height);--saf-combobox-validation-font: var(--saf-type-body-default-sm-strong-compact)}}@supports(-moz-appearance: none) or (stroke-color: transparent){.root{--saf-conditional-control-line-height:calc(var(--saf-line-height-lg)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-md)*var(--saf-density)*(2 - var(--saf-density)));--saf-conditional-control-padding-block:calc(var(--saf-spacing-2)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-spacing-1)*var(--saf-density)*(2 - var(--saf-density)));--saf-combobox-control-height:calc(42px*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + 32px*var(--saf-density)*(2 - var(--saf-density)));--saf-combobox-indicator-padding:calc(var(--saf-spacing-3)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-spacing-2)*var(--saf-density)*(2 - var(--saf-density)));--saf-conditional-validation-line-height:calc(var(--saf-line-height-md)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-sm)*var(--saf-density)*(2 - var(--saf-density)));--saf-combobox-control-font: var(--saf-font-weight-regular) var(--saf-font-size-md) / var(--saf-conditional-control-line-height) var(--saf-font-family-source-sans-3);--saf-combobox-control-padding: var(--saf-combobox-control-padding-block) var(--saf-spacing-3);--saf-combobox-indicator-size: var(--saf-combobox-control-height);--saf-combobox-validation-font: var(--saf-font-weight-strong) var(--saf-font-size-sm) / var(--saf-conditional-validation-line-height) var(--saf-font-family-source-sans-3)}}')}
`,shadowOptions:{delegatesFocus:!0},registry:t.getRegistry()})),exports.safComboboxConfig={events:{onInput:"input",onClick:"click",onClear:"clear",onScrollEnd:"scroll-end",onChange:"change"}};
