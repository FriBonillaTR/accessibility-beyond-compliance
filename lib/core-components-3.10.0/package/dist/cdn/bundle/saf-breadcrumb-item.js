"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),r=require("./breadcrumb-item-DFqGjBlb.js"),t=require("./fast-element-DOTfrYFb.js"),a=require("./anchor.template-x-TicqrI.js"),o=require("./when-0aDJpnLk.js");require("tslib"),require("./anchor-CXrwbHEl.js"),require("./apply-mixins-CewQe2EQ.js"),require("./start-end-template-D7dQJgd3.js"),require("./ref-BeTe_0iT.js"),require("./aria-global-CYzDgx1a.js"),require("./global-enums-58U8enSy.js"),require("./slotted-cZBT0SIc.js");exports.default=()=>r.BreadcrumbItem.define({name:e.getComponentName("saf-breadcrumb-item"),template:t.html`
		<div role="listitem" class="listitem" part="listitem">
			${e=>t.html`${a.anchorTemplate({tag:e.separator?"a":"span"}).inline()}`}
			${o.when(e=>e.separator,t.html`
					<span class="separator" part="separator" aria-hidden="true">
						<slot name="separator"> / </slot>
					</span>
				`)}
		</div>
	`,styles:t.css`
	${e.replaceComponentNamesWithSafAttribute(":host{box-sizing:border-box;display:inline-block;font:var(--saf-type-body-default-sm-regular-standard);--saf-breadcrumb-item-text-decoration: var(--saf-text-decoration-underline)}.listitem{align-items:center;display:flex;width:max-content}.separator{color:var(--saf-color-text-subtle);display:flex;margin:0 var(--saf-spacing-2)}.control{align-items:center;box-sizing:border-box;color:var(--saf-color-anchor-default);cursor:pointer;display:flex;font-size:inherit;outline:none;text-decoration:none;transition:.2s linear all;white-space:nowrap}.control .content{text-decoration-line:var(--saf-breadcrumb-item-text-decoration);text-decoration-thickness:1px}.control:hover{color:var(--saf-color-anchor-hover)}.control:hover .content{text-decoration-thickness:2px}.control:focus{border-radius:var(--saf-border-radius-xs);box-shadow:var(--saf-drop-shadow-focus)}.control:not([href]){color:var(--saf-color-text-heavy);cursor:default;font:var(--saf-type-body-default-sm-strong-standard);--saf-breadcrumb-item-text-decoration: none}.control:not([href]):hover{--saf-breadcrumb-item-text-decoration: none}:host .a11y-aria-description{display:none}")}
`,shadowOptions:{delegatesFocus:!0},registry:e.getRegistry()});
