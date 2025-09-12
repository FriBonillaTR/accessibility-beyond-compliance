"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@saffron/config"),a=require("./tabs-CRv1sjr9.js"),e=require("./fast-element-DOTfrYFb.js"),i=require("./start-end-template-D7dQJgd3.js"),n=require("./slotted-cZBT0SIc.js");require("tslib"),require("@microsoft/fast-web-utilities"),require("./apply-mixins-CewQe2EQ.js"),require("./ref-BeTe_0iT.js");exports.default=()=>a.Tabs.define({name:t.getComponentName("saf-tabs"),template:e.html`
		<div class="tablist-container" part="tablist-container">
			${i.startSlotTemplate()}
			<div
				class="tablist"
				part="tablist"
				role="tablist"
				aria-label="${t=>t.a11yAriaLabel?t.a11yAriaLabel:null}"
				aria-orientation="${t=>t.orientation}"
			>
				<slot name="tab" ${n.slotted("tabs")}></slot>
			</div>
			${i.endSlotTemplate()}
		</div>

		<div class="tabpanel" part="tabpanel" @change="${(t,a)=>a.event.stopPropagation()}">
			<slot name="tabpanel" ${n.slotted("tabpanels")}></slot>
		</div>
	`,styles:e.css`
	${t.replaceComponentNamesWithSafAttribute(":host{contain:layout;container-name:tabs;container-type:inline-size;margin:calc(var(--saf-container-padding-y, 0)*-1) calc(var(--saf-container-padding-x, 0)*-1) calc(var(--saf-container-padding-y, 0)*-1) calc(var(--saf-container-padding-x, 0)*-1);position:relative}:host(:focus-within){z-index:var(--saf-z-index-default)}:host([orientation=horizontal]){display:block}:host([orientation=vertical]){display:flex}.tablist-container{border-bottom:var(--saf-line-width-thin) solid var(--saf-color-border-strong);box-sizing:border-box;display:inline-flex;gap:var(--saf-spacing-2);padding-left:var(--saf-container-padding-x, 0);padding-right:var(--saf-container-padding-x, 0);width:100%}.tablist{align-self:end;box-sizing:border-box;flex-wrap:wrap;padding:0;position:relative}.tabpanel{padding:var(--saf-container-padding-y, 32px) var(--saf-container-padding-x, 0) var(--saf-container-padding-y, 0);position:relative}@container tabs (max-width: 640px){:host([orientation=vertical]) .tablist,:host([orientation=vertical]) .tabpanel{flex:1 1 50%}:host([orientation=vertical]) .tabpanel{padding:0}}@container tabs (min-width: 641px){:host([orientation=vertical]) .tablist{flex:0 1 max-content}:host([orientation=vertical]) .tabpanel{flex:1 0 auto}}:host([orientation=vertical]) .tablist{display:grid;padding:0;place-self:flex-start end;position:relative;width:max-content;width:100%}:host([orientation=vertical]) .tablist-container{border-bottom:none;border-left:var(--saf-line-width-thin) solid var(--saf-color-border-subtle);flex-direction:column;width:auto}:host([orientation=vertical]) ::slotted([slot=start]),:host([orientation=vertical]) ::slotted([slot=end]){margin-left:var(--saf-spacing-2)}:host([orientation=vertical]) .tabpanel{padding:0 0 0 32px}")}
`,registry:t.getRegistry()}),exports.safTabsConfig={events:{onChange:"change"}};
