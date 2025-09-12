"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),a=require("./menu-item-CKI6Iyzn.js"),t=require("./fast-element-DOTfrYFb.js"),o=require("./start-end-template-D7dQJgd3.js"),n=require("./when-0aDJpnLk.js"),r=require("./ref-BeTe_0iT.js"),i=require("./slotted-cZBT0SIc.js"),s=require("./saf-icon.js");require("tslib"),require("@floating-ui/dom"),require("@microsoft/fast-web-utilities"),require("./apply-mixins-CewQe2EQ.js"),require("./global-enums-58U8enSy.js"),require("./logger-vjs750p7.js");exports.default=()=>(s.default(),a.MenuItem.define({name:e.getComponentName("saf-menu-item"),template:t.html`
		<template
			aria-haspopup="${e=>e.hasSubmenu?"menu":void 0}"
			aria-checked="${e=>e.role!==a.MenuItemRoleEnum.menuitem?e.checked:void 0}"
			aria-disabled="${e=>e.disabled}"
			aria-expanded="${e=>e.expanded}"
			tabindex="0"
			@keydown="${(e,a)=>e.handleMenuItemKeyDown(a.event)}"
			@click="${(e,a)=>e.handleMenuItemClick(a.event)}"
			@mouseover="${(e,a)=>e.handleMouseOver(a.event)}"
			@mouseout="${(e,a)=>e.handleMouseOut(a.event)}"
			@mousedown="${(e,a)=>e.handleMenuItemMouseDown(a.event)}"
			@mouseup="${(e,a)=>e.handleMenuItemMouseup(a.event)}"
			@change="${(e,a)=>e.handleMenuItemChange(a.event)}"
		>
			<div class="root" part="root">
				${n.when(e=>e.role===a.MenuItemRoleEnum.menuitemcheckbox,t.html`
						<div part="input-container" class="input-container">
							<span part="checkbox" class="checkbox">
								<slot name="checkbox-indicator">
									<saf-icon
										color="var(--saf-color-interactive-on-secondary-active)"
										class="checkbox-indicator"
										part="checkbox-indicator"
										icon-name="check"
										appearance="solid"
									></saf-icon>
								</slot>
							</span>
						</div>
					`)}
				${n.when(e=>e.role===a.MenuItemRoleEnum.menuitemradio,t.html`
						<div part="input-container" class="input-container">
							<span part="radio" class="radio">
								<slot name="radio-indicator">
									<span part="radio-indicator" class="radio-indicator"></span>
								</slot>
							</span>
						</div>
					`)}
				${o.startSlotTemplate()}

				<span class="content" part="content">
					${n.when(e=>e.hasLinkOrRouterLink&&e.url,t.html`<a
							href="${e=>e.url}"
							tabindex="-1"
							target="${e=>{var a;return null!==(a=e.target)&&void 0!==a?a:"_self"}}"
							@click="${(e,a)=>e.handleAnchorClick(a.event)}"
							${r.ref("anchorElement")}
						>
							<slot></slot>
						</a>`,t.html`<slot></slot>`)}
				</span>

				${o.endSlotTemplate()}
				${n.when(e=>e.hasSubmenu,t.html`
						<div
							part="expand-collapse-glyph-container"
							class="expand-collapse-glyph-container"
						>
							<span part="expand-collapse" class="expand-collapse">
								<slot name="expand-collapse-indicator">
									<saf-icon
										class="nested-indicator"
										part="nested-indicator"
										icon-name="chevron-right"
										appearance="solid"
									></saf-icon>
								</slot>
							</span>
						</div>
					`)}
				<span
					?hidden="${e=>!e.expanded}"
					class="submenu-container"
					part="submenu-container"
					${r.ref("submenuContainer")}
				>
					<slot
						name="submenu"
						${i.slotted({property:"slottedSubmenu",filter:i.elements("[role='menu']")})}
					></slot>
				</span>
			</div>
		</template>
	`,styles:t.css`
	${e.replaceComponentNamesWithSafAttribute(':host{align-items:center;background:var(--saf-color-interactive-states-background-default);border-radius:var(--saf-border-radius-xs);box-sizing:border-box;color:var(--saf-color-interactive-states-on-default);cursor:default;display:flex;fill:currentcolor;max-width:310px;outline:none;position:relative;word-break:break-word}:host::before{border-radius:var(--saf-border-radius-xs);content:"";inset:0;position:absolute}:host([density=standard]){--saf-density: 0}:host([density=compact]){--saf-density: 1}:host([density=""]){--saf-density: 2}:host([has-link]),:host([router-link]){cursor:pointer}:host([disabled]){color:var(--saf-color-interactive-disabled-strong);cursor:not-allowed;pointer-events:none}.root{align-items:center;box-sizing:border-box;display:flex;font:var(--saf-menu-item-font, var(--saf-type-body-default-md-regular-standard));gap:var(--saf-menu-item-gap, var(--saf-spacing-2));min-height:var(--saf-menu-item-min-height, 40px);padding:var(--saf-menu-item-padding, var(--saf-spacing-2) var(--saf-spacing-3));width:100%}:host([class=prod-header]) .content,:host([class="prod-header selected"]) .content{column-gap:var(--saf-spacing-2);display:flex}:host([disabled][role=menuitemcheckbox]) .checkbox,:host([disabled][role=menuitemradio]) .radio{background:var(--saf-color-interactive-disabled-subtle);border-color:var(--saf-color-interactive-border-disabled-default)}::slotted([slot=start]){color:currentcolor;display:inline-flex;min-width:16px}.content{flex:1 1 auto;justify-self:start}.expand-collapse-glyph,::slotted(svg){fill:currentcolor;height:20px;width:16px}.input-container,.expand-collapse-glyph-container{display:none}:host([role=menuitemcheckbox]) .input-container,:host([role=menuitemradio]) .input-container{display:flex}:host([aria-haspopup=menu]) .expand-collapse-glyph-container{display:flex;margin-inline-end:0;margin-left:auto}.expand-collapse{justify-content:end}.expand-collapse,.checkbox,.radio{align-items:center;box-sizing:border-box;display:flex;height:20px;outline:none;position:relative;width:20px}.checkbox,.radio{background:var(--saf-color-interactive-states-background-default);border:var(--saf-line-width-thin) solid var(--saf-color-border-stronger);justify-content:center}:host(:not([disabled])[aria-checked=true]) .checkbox,:host(:not([disabled])[aria-checked=true]) .radio{background:var(--saf-color-interactive-secondary-active);border-color:var(--saf-color-interactive-border-secondary-active)}.checkbox{border-radius:var(--saf-border-radius-xs)}.radio{border-radius:var(--saf-border-radius-circle)}.checkbox-indicator,.radio-indicator,.expand-collapse-indicator,::slotted([slot=checkbox-indicator]),::slotted([slot=radio-indicator]),::slotted([slot=expand-collapse-indicator]){display:none}:host([aria-checked=true]) .checkbox-indicator,:host([aria-checked=true]) ::slotted([slot=checkbox-indicator]){display:inline-flex;fill:var(--saf-color-interactive-on-secondary-active);pointer-events:none}:host([aria-checked=true]) .radio-indicator{background:var(--saf-color-interactive-on-secondary-active);border-radius:50%;display:block;inset:6px;pointer-events:none;position:absolute}:host([aria-checked=true]) ::slotted([slot=radio-indicator]){display:block;pointer-events:none}:host([disabled][aria-checked=true]) .checkbox-indicator{fill:var(--saf-color-interactive-on-disabled-subtle)}:host([disabled][aria-checked=true]) .radio-indicator{background:var(--saf-color-interactive-on-disabled-subtle)}:host(:not([disabled]):hover),:host(:not(:focus,[disabled])[expanded]){background-color:var(--saf-color-interactive-states-background-hover);color:var(--saf-color-interactive-states-on-hover)}:host(:not([disabled],:hover)[expanded]),:host(:focus){outline:var(--saf-line-width-thick) solid var(--saf-color-interactive-focus);z-index:var(--saf-z-index-focus)}:host(:not(:focus)[expanded]){outline:none}:host(:not([disabled]):hover)::before,:host(:not(:focus,[disabled])[expanded])::before{border:var(--saf-line-width-thick) solid var(--saf-color-interactive-states-border-hover)}:host(:not([role=menuitemcheckbox],[role=menuitemradio],:hover).selected){background-color:var(--saf-color-interactive-states-background-active);color:var(--saf-color-interactive-states-on-active)}:host(:not([role=menuitemcheckbox],[role=menuitemradio],:hover).selected)::before{border:var(--saf-line-width-thick) solid var(--saf-color-interactive-states-border-active)}:host(:not([role=menuitemcheckbox],[role=menuitemradio],:hover).selected) ::slotted([slot=start]){color:var(--saf-color-interactive-states-item-current)}.submenu-container{left:0;position:fixed;top:0;z-index:var(--saf-z-index-dropdown)}a{color:currentcolor;text-decoration:none}@container style(--saf-density: 0){.root{--saf-menu-item-font: var(--saf-type-body-default-md-regular-standard);--saf-menu-item-min-height: 40px;--saf-menu-item-padding: var(--saf-spacing-2) var(--saf-spacing-3)}}@container style(--saf-density: 1){.root{--saf-menu-item-font: var(--saf-type-body-default-md-regular-compact);--saf-menu-item-min-height: 32px;--saf-menu-item-padding: var(--saf-spacing-1) var(--saf-spacing-3)}}@supports(-moz-appearance: none) or (stroke-color: transparent){.root{--saf-conditional-line-height:calc(var(--saf-line-height-lg)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-line-height-md)*var(--saf-density)*(2 - var(--saf-density)));--saf-conditional-min-height:calc(40px*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + 32px*var(--saf-density)*(2 - var(--saf-density)));--saf-conditional-padding-block:calc(var(--saf-spacing-2)*(1 - var(--saf-density))*(2 - var(--saf-density))*.5 + var(--saf-spacing-1)*var(--saf-density)*(2 - var(--saf-density)));--saf-menu-item-font: var(--saf-font-weight-regular) var(--saf-font-size-md) / var(--saf-conditional-line-height) var(--saf-font-family-source-sans-3);--saf-menu-item-min-height: var(--saf-conditional-min-height);--saf-menu-item-padding: var(--saf-conditional-padding-block) var(--saf-spacing-3)}}:host([side-nav-item]) .root{--saf-menu-item-font: var(--saf-type-label-text-default-md-strong-standard)}:host([side-nav-item]) .content{translate:0 1px}')}
`,registry:e.getRegistry()})),exports.safMenuItemConfig={events:{onExpandedChange:"expanded-change",onChange:"change",onClick:"click"}};
