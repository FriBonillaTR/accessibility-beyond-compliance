"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("./metadata-item-Y-ohBFcu.js"),r=require("./fast-element-DOTfrYFb.js"),a=require("./start-end-template-D7dQJgd3.js"),s=require("./when-0aDJpnLk.js");require("tslib"),require("./apply-mixins-CewQe2EQ.js"),require("./ref-BeTe_0iT.js");exports.default=()=>t.MetadataItem.define({name:e.getComponentName("saf-metadata-item"),template:r.html`
		<div class="control" part="control">
			${a.startSlotTemplate()}
			<span class="content" part="content">
				<slot></slot>
			</span>
			${a.endSlotTemplate()}
			${s.when(e=>e.separator,r.html`
					<span class="separator" part="separator" aria-hidden="true">
						<slot name="separator">&ndash;</slot>
					</span>
				`)}
		</div>
	`,styles:r.css`
	${e.replaceComponentNamesWithSafAttribute(":host{box-sizing:border-box;color:var(--saf-color-text-subtle);display:inline-flex}.control{align-items:center;display:flex}.separator{color:inherit;display:flex;margin:0 .5rem}")}
`,registry:e.getRegistry()});
