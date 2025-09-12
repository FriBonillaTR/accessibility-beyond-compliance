"use strict";var a=require("./start-end-template-D7dQJgd3.js"),r=require("./fast-element-DOTfrYFb.js"),l=require("./ref-BeTe_0iT.js"),n=require("./when-0aDJpnLk.js"),e=require("./slotted-cZBT0SIc.js");exports.anchorTemplate=function(i={}){return r.html`${t=>{var s,p,o;return r.html`
		<${r.html.partial(null!==(s=i.tag)&&void 0!==s?s:t.span?"span":"a")}
			class="control"
			part="control"
			aria-atomic="${a=>a.ariaAtomic}"
			aria-flowto="${a=>a.ariaFlowto}"
			aria-hidden="${a=>a.ariaHidden}"
			aria-live="${a=>a.ariaLive}"
			aria-owns="${a=>a.ariaOwns}"
			aria-relevant="${a=>a.ariaRelevant}"
			download="${a=>a.span?null:a.download}"
			href="${a=>a.span?null:a.href}"
			hreflang="${a=>a.span?null:a.hreflang}"
			ping="${a=>a.span?null:a.ping}"
			referrerpolicy="${a=>a.span?null:a.referrerpolicy}"
			rel="${a=>a.span?null:a.rel}"
			target="${a=>a.span?null:a.target}"
			type="${a=>a.span?null:a.type}"
			aria-busy="${a=>a.span?null:a.ariaBusy}"
			aria-controls="${a=>a.span?null:a.ariaControls}"
			aria-current="${a=>{var r,l;return a.span?null:null!==(l=null!==(r=a.a11yAriaCurrent)&&void 0!==r?r:a.ariaCurrent)&&void 0!==l?l:a.dataset.ariaCurrent}}"
			aria-describedby="${a=>a.span?null:a.a11yAriaDescription?"a11y-aria-description":void 0}"
			aria-details="${a=>a.span?null:a.ariaDetails}"
			aria-disabled="${a=>a.span?null:a.ariaDisabled}"
			aria-errormessage="${a=>a.span?null:a.ariaErrormessage}"
			aria-expanded="${a=>a.span?null:a.ariaExpanded}"
			aria-haspopup="${a=>a.span?null:a.ariaHaspopup}"
			aria-invalid="${a=>a.span?null:a.ariaInvalid}"
			aria-keyshortcuts="${a=>a.span?null:a.ariaKeyshortcuts}"
			aria-label="${a=>a.span?null:a.ariaLabel}"
			aria-labelledby="${a=>a.span?null:a.ariaLabelledby}"
			aria-roledescription="${a=>a.span?null:a.ariaRoledescription}"
			${l.ref("control")}
		>
			${n.when(a=>a.a11yAriaDescription&&!a.span,r.html`<span
					id="a11y-aria-description"
					class="a11y-aria-description"
					part="a11y-aria-description"
				>
					${a=>a.a11yAriaDescription}
				</span>`)}
				${a.startSlotTemplate()}
					${null!==(p=i.children)&&void 0!==p?p:r.html`
							<span class="content" part="content">
								<slot ${e.slotted("defaultSlottedContent")}></slot>
							</span>
						`}
				${a.endSlotTemplate()}
		</${r.html.partial(null!==(o=i.tag)&&void 0!==o?o:t.span?"span":"a")}>
	`}}`};
