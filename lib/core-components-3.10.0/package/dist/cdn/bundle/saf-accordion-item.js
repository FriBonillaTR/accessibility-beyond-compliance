"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var a=require("@saffron/config"),e=require("./saf-icon.js"),i=require("./accordion-item-YZU1nbc3.js"),r=require("./fast-element-DOTfrYFb.js"),o=require("./start-end-template-D7dQJgd3.js"),n=require("./ref-BeTe_0iT.js");require("tslib"),require("./logger-vjs750p7.js"),require("./when-0aDJpnLk.js"),require("@microsoft/fast-web-utilities"),require("./apply-mixins-CewQe2EQ.js"),require("./global-enums-58U8enSy.js");exports.default=()=>(e.default(),i.AccordionItem.define({name:a.getComponentName("saf-accordion-item"),template:r.html`
		<div class="heading" part="heading" role="heading" aria-level="${a=>a.headinglevel}">
			<button
				class="button"
				part="button"
				${n.ref("expandbutton")}
				?disabled="${a=>a.disabled?"true":void 0}"
				aria-expanded="${a=>a.expanded}"
				aria-controls="${a=>a.id}-panel"
				id="${a=>a.id}"
				@click="${(a,e)=>a.clickHandler(e.event)}"
			>
				<span class="heading-content" part="heading-content">
					<slot name="heading"></slot>
				</span>
			</button>
			${""}
			${o.startSlotTemplate()} ${o.endSlotTemplate()}
			<span class="icon" part="icon" aria-hidden="true">
				<slot name="expanded-icon"
					><saf-icon
						focusable="false"
						presentation="true"
						aria-hidden="true"
						icon-name="chevron-up"
						appearance="solid"
					></saf-icon
				></slot>
				<slot name="collapsed-icon">
					<saf-icon
						focusable="false"
						presentation="true"
						aria-hidden="true"
						icon-name="chevron-down"
						appearance="solid"
					></saf-icon>
				</slot>
			</span>
		</div>
		<div
			class="region"
			part="region"
			id="${a=>a.id}-panel"
			role="region"
			aria-labelledby="${a=>a.id}"
		>
			<slot></slot>
		</div>
	`,styles:r.css`
	${a.replaceComponentNamesWithSafAttribute(':host{background:var(--saf-color-interactive-background-default);box-sizing:border-box;display:flex;flex-direction:column;padding-bottom:var(--saf-spacing-2)}:host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=""]){--saf-density: 2}.heading{align-items:start;border-radius:var(--saf-accordion-item-border-radius);box-shadow:0 0 0 1px inset var(--saf-color-border-stronger);color:var(--saf-color-text-strong);display:grid;font:var(--saf-accordion-item-font, var(--saf-type-body-default-md-strong-standard));padding:var(--saf-accordion-item-heading-padding, var(--saf-spacing-2) var(--saf-spacing-3));position:relative}:host([expanded]) .heading{background:var(--saf-color-interactive-background-default);border-radius:var(--saf-accordion-item-border-radius) var(--saf-accordion-item-border-radius) 0 0;color:var(--saf-color-interactive-states-on-default)}:host([heading-size=hug]) .heading{grid-template-columns:auto auto 1fr auto}:host([heading-size=fill]) .heading{grid-template-columns:auto 1fr auto auto}.heading:hover,:host([expanded]) .heading:hover{background:var(--saf-color-interactive-states-background-hover);box-shadow:0 0 0 2px inset var(--saf-color-interactive-states-border-hover);color:var(--saf-color-interactive-states-on-hover)}.heading:active,:host([expanded]) .heading:active{background:var(--saf-color-interactive-background-default);box-shadow:0 0 0 2px inset var(--saf-color-interactive-states-border-active);color:var(--saf-color-interactive-states-on-active)}.button{appearance:none;background:none;border:none;color:inherit;font:inherit;grid-column:2;grid-row:1;margin-inline-end:auto;outline:none;padding:0;text-align:left}.button::before{content:"";inset:0;position:absolute}.button:focus::before{border-radius:var(--saf-accordion-item-border-radius);box-shadow:var(--saf-drop-shadow-focus);outline:none;z-index:var(--saf-z-index-focus)}:host([expanded]) .button:focus::before{border-radius:var(--saf-accordion-item-border-radius) var(--saf-accordion-item-border-radius) 0 0}.region{display:none;font:var(--saf-accordion-item-font, var(--saf-type-body-default-md-strong-standard));padding:var(--saf-accordion-item-region-padding, var(--saf-spacing-6))}:host([expanded]) .region{background:var(--saf-color-interactive-background-default);border-bottom:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);border-left:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);border-radius:0 0 var(--saf-accordion-item-border-radius) var(--saf-accordion-item-border-radius);border-right:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);color:var(--saf-color-text-heavy);display:block}::slotted([slot=start]){padding-right:var(--saf-spacing-2)}::slotted([slot=end]){align-items:center;display:flex;grid-column:3;grid-gap:var(--saf-spacing-2);padding-inline:var(--saf-spacing-2);pointer-events:none;position:relative}.icon{display:flex;grid-column:4;pointer-events:none;position:relative}:host([expanded]) slot[name=expanded-icon],slot[name=collapsed-icon]{display:flex}:host([expanded]) slot[name=collapsed-icon],slot[name=expanded-icon]{display:none}:host([expanded]) slot[name=expanded-icon] saf-icon,slot[name=collapsed-icon] saf-icon{color:inherit}@container style(--saf-density: 0){.heading,.region{--saf-accordion-item-border-radius: var(--saf-border-radius-sm);--saf-accordion-item-font: var(--saf-type-body-default-md-strong-standard)}.heading{--saf-accordion-item-heading-padding: var(--saf-spacing-2) var(--saf-spacing-3)}.region{--saf-accordion-item-region-padding: var(--saf-spacing-6)}}@container style(--saf-density: 1){.heading,.region{--saf-accordion-item-border-radius: var(--saf-border-radius-xs);--saf-accordion-item-font: var(--saf-type-body-default-md-strong-compact)}.heading{--saf-accordion-item-heading-padding: var(--saf-spacing-1) var(--saf-spacing-3)}.region{--saf-accordion-item-region-padding: var(--saf-spacing-4)}}@supports(-moz-appearance: none) or (stroke-color: transparent){.heading,.region{--saf-conditional-line-height:calc(var(--saf-line-height-lg)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-md)*var(--saf-density)*(2 - var(--saf-density)));--saf-accordion-item-border-radius:calc(var(--saf-border-radius-sm)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-border-radius-xs)*var(--saf-density)*(2 - var(--saf-density)));--saf-accordion-item-font: var(--saf-font-weigh-semiBold) var(--saf-font-size-md) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3)}.heading{--saf-conditional-padding-block:calc(var(--saf-spacing-2)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-spacing-1)*var(--saf-density)*(2 - var(--saf-density)));--saf-conditional-padding-inline:calc(var(--saf-spacing-3)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-spacing-3)*var(--saf-density)*(2 - var(--saf-density)));--saf-accordion-item-heading-padding: var(--saf-conditional-padding-block) var(--saf-conditional-padding-inline)}.region{--saf-conditional-padding:calc(var(--saf-spacing-6)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-spacing-4)*var(--saf-density)*(2 - var(--saf-density)));--saf-accordion-item-region-padding: var(--saf-conditional-padding)}}')}
`,registry:a.getRegistry()})),exports.safAccordionConfig={events:{onChange:"change"}};
