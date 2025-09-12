import { html, ref, when, slotted } from '../../@microsoft/fast-element/dist/esm/index.js';
import { startSlotTemplate, endSlotTemplate } from '../../utils/start-end-template.js';

/**
 * The template for the {@link @saffron/core-components#(Anchor:class)} component.
 * @public
 */
function anchorTemplate(options = {}) {
    return html `${(x) => {
        var _a, _b, _c;
        return html `
		<${html.partial((_a = options.tag) !== null && _a !== void 0 ? _a : (x.span ? 'span' : 'a'))}
			class="control"
			part="control"
			aria-atomic="${(x) => x.ariaAtomic}"
			aria-flowto="${(x) => x.ariaFlowto}"
			aria-hidden="${(x) => x.ariaHidden}"
			aria-live="${(x) => x.ariaLive}"
			aria-owns="${(x) => x.ariaOwns}"
			aria-relevant="${(x) => x.ariaRelevant}"
			download="${(x) => (x.span ? null : x.download)}"
			href="${(x) => (x.span ? null : x.href)}"
			hreflang="${(x) => (x.span ? null : x.hreflang)}"
			ping="${(x) => (x.span ? null : x.ping)}"
			referrerpolicy="${(x) => (x.span ? null : x.referrerpolicy)}"
			rel="${(x) => (x.span ? null : x.rel)}"
			target="${(x) => (x.span ? null : x.target)}"
			type="${(x) => (x.span ? null : x.type)}"
			aria-busy="${(x) => (x.span ? null : x.ariaBusy)}"
			aria-controls="${(x) => (x.span ? null : x.ariaControls)}"
			aria-current="${(x) => { var _a, _b; return x.span ? null : (_b = (_a = x.a11yAriaCurrent) !== null && _a !== void 0 ? _a : x.ariaCurrent) !== null && _b !== void 0 ? _b : x.dataset.ariaCurrent; }}"
			aria-describedby="${(x) => x.span ? null : x.a11yAriaDescription ? 'a11y-aria-description' : undefined}"
			aria-details="${(x) => (x.span ? null : x.ariaDetails)}"
			aria-disabled="${(x) => (x.span ? null : x.ariaDisabled)}"
			aria-errormessage="${(x) => (x.span ? null : x.ariaErrormessage)}"
			aria-expanded="${(x) => (x.span ? null : x.ariaExpanded)}"
			aria-haspopup="${(x) => (x.span ? null : x.ariaHaspopup)}"
			aria-invalid="${(x) => (x.span ? null : x.ariaInvalid)}"
			aria-keyshortcuts="${(x) => (x.span ? null : x.ariaKeyshortcuts)}"
			aria-label="${(x) => (x.span ? null : x.ariaLabel)}"
			aria-labelledby="${(x) => (x.span ? null : x.ariaLabelledby)}"
			aria-roledescription="${(x) => (x.span ? null : x.ariaRoledescription)}"
			${ref('control')}
		>
			${when((x) => x.a11yAriaDescription && !x.span, html `<span
					id="a11y-aria-description"
					class="a11y-aria-description"
					part="a11y-aria-description"
				>
					${(x) => x.a11yAriaDescription}
				</span>`)}
				${startSlotTemplate()}
					${(_b = options.children) !== null && _b !== void 0 ? _b : html `
							<span class="content" part="content">
								<slot ${slotted('defaultSlottedContent')}></slot>
							</span>
						`}
				${endSlotTemplate()}
		</${html.partial((_c = options.tag) !== null && _c !== void 0 ? _c : (x.span ? 'span' : 'a'))}>
	`;
    }}`;
}

export { anchorTemplate };
