"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("./saf-icon.js"),o=require("./tree-item-DNUdje2H.js"),a=require("./fast-element-DOTfrYFb.js"),r=require("./start-end-template-D7dQJgd3.js"),i=require("./children-DPitos42.js"),s=require("./when-0aDJpnLk.js"),n=require("./ref-BeTe_0iT.js"),l=require("./slotted-cZBT0SIc.js");require("tslib"),require("./logger-vjs750p7.js"),require("@microsoft/fast-web-utilities"),require("./apply-mixins-CewQe2EQ.js");exports.default=()=>(t.default(),o.TreeItem.define({name:e.getComponentName("saf-tree-item"),template:a.html`
		<template
			role="treeitem"
			slot="${e=>e.isNestedItem()?"item":void 0}"
			tabindex="-1"
			aria-expanded="${e=>e.childItems&&e.childItemLength>0?e.expanded:void 0}"
			aria-selected="${e=>e.selected}"
			aria-disabled="${e=>e.disabled}"
			@focusin="${(e,t)=>e.handleFocus(t.event)}"
			@focusout="${(e,t)=>e.handleBlur(t.event)}"
			@click="${(e,t)=>e.handleExpandCollapseButtonClick(t.event)}"
			${i.children({property:"childItems",filter:l.elements()})}
		>
			<div class="positioning-region" part="positioning-region">
				<div class="content-region" part="content-region">
					${s.when(e=>e.childItems&&e.childItemLength>0,a.html`
							<div
								aria-hidden="true"
								class="expand-collapse-button"
								part="expand-collapse-button"
								${n.ref("expandCollapseButton")}
							>
								<slot name="expand-collapse-glyph">
									<saf-icon
										class="expand-collapse-glyph"
										icon-name="${e=>e.expanded?"caret-down":"caret-right"}"
										appearance="solid"
									></saf-icon>
								</slot>
							</div>
						`)}
					${r.startSlotTemplate()}
					<slot></slot>
					${r.endSlotTemplate()}
				</div>
			</div>
			${s.when(e=>e.childItems&&e.childItemLength>0&&e.expanded,a.html`
					<div role="group" class="items" part="items">
						<slot name="item" ${l.slotted("items")}></slot>
					</div>
				`)}
		</template>
	`,styles:a.css`
	${e.replaceComponentNamesWithSafAttribute(':host{background-color:var(--saf-color-interactive-states-background-default);color:var(--saf-color-interactive-states-on-default);contain:content;display:block;font-family:var(--saf-font-family-source-sans-3);outline:none;position:relative;--saf-treeItem-collapseButton-size: 40px;--saf-treeItem-nested-width: 0}:host([hidden]){display:none}.positioning-region{border:var(--saf-line-width-thick) solid var(--saf-color-interactive-states-border-default);border-radius:var(--saf-border-radius-xs);box-sizing:border-box;display:flex;padding:var(--saf-spacing-2) var(--saf-spacing-3);position:relative}:host(:focus)>.positioning-region{outline:none}:host(:focus-visible) .positioning-region{border-color:var(--saf-color-interactive-focus)}.positioning-region::before{content:"";display:block;flex-shrink:0;width:var(--saf-treeItem-nested-width)}.positioning-region:hover{background:var(--saf-color-interactive-states-background-hover);border-color:var(--saf-color-interactive-states-border-hover);color:var(--saf-color-interactive-states-on-hover)}.positioning-region:active{background:var(--saf-color-interactive-states-background-active);border-color:var(--saf-color-interactive-states-border-active);color:var(--saf-color-interactive-states-on-active)}.content-region{align-items:center;display:inline-flex;font:var(--saf-type-body-default-md-regular-standard);margin-inline-start:var(--saf-spacing-4);white-space:nowrap;width:100%}:host(:focus) .content-region{outline:none}:host([selected]) .positioning-region{background:var(--saf-color-interactive-states-background-active);border-color:var(--saf-color-interactive-states-border-active);color:var(--saf-color-interactive-states-on-active)}:host([disabled]) .positioning-region:hover{background:var(--saf-color-interactive-states-background-default);border-color:var(--saf-color-interactive-states-border-default);color:var(--saf-color-interactive-states-on-default)}.items{display:none;font-size:calc(1em + var(--saf-font-size-md))}.expand-collapse-button{background:none;border:none;margin-right:var(--saf-spacing-2);outline:none}.expand-collapse-glyph{fill:currentcolor;height:16px;pointer-events:none;transition:transform .1s linear;width:16px}::slotted([slot=start]),::slotted([slot=end]){display:flex}::slotted([slot=start]){margin-inline-end:var(--saf-spacing-3)}::slotted([slot=end]){margin-inline-start:var(--saf-spacing-3)}:host([aria-expanded=true])>.items{display:block}:host([disabled]) .content-region{cursor:not-allowed}:host([nested]) .content-region{margin-inline-start:var(--saf-treeItem-collapseButton-size);position:relative}:host([nested]) .expand-collapse-button{position:absolute;right:100%}:host([disabled]) .expand-collapse-button{color:var(--saf-color-interactive-on-disabled-subtle)}::slotted(saf-tree-item){--saf-treeItem-nested-width: 1em}')}
`,registry:e.getRegistry()})),exports.safTreeItemConfig={events:{expandedChange:"expanded-change",selectedChange:"selected-change"}};
