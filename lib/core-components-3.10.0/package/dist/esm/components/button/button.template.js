import { html, ref, when, slotted } from '../../@microsoft/fast-element/dist/esm/index.js';
import { startSlotTemplate, endSlotTemplate } from '../../utils/start-end-template.js';

/**
 * The template for Button component.
 * @public
 */
function buttonTemplate({ children, } = {}) {
    return html `
		<button
			class="control"
			part="control"
			role="${(x) => x.a11yRole}"
			?autofocus="${(x) => x.autofocus}"
			?disabled="${(x) => x.disabled}"
			form="${(x) => x.formId}"
			formaction="${(x) => x.formaction}"
			formenctype="${(x) => x.formenctype}"
			formmethod="${(x) => x.formmethod}"
			?formnovalidate="${(x) => x.formnovalidate}"
			formtarget="${(x) => x.formtarget}"
			name="${(x) => x.name}"
			type="${(x) => x.type}"
			value="${(x) => x.value}"
			aria-atomic="${(x) => x.ariaAtomic}"
			aria-busy="${(x) => x.ariaBusy}"
			aria-controls="${(x) => x.ariaControls}"
			aria-current="${(x) => x.ariaCurrent}"
			aria-describedby="${(x) => x.a11yAriaDescription ? 'a11y-aria-description' : undefined}"
			aria-details="${(x) => x.ariaDetails}"
			aria-disabled="${(x) => x.ariaDisabled}"
			aria-errormessage="${(x) => x.ariaErrormessage}"
			aria-flowto="${(x) => x.ariaFlowto}"
			aria-haspopup="${(x) => x.ariaHaspopup}"
			aria-hidden="${(x) => x.ariaHidden}"
			aria-invalid="${(x) => x.ariaInvalid}"
			aria-keyshortcuts="${(x) => x.ariaKeyshortcuts}"
			aria-label="${(x) => x.ariaLabel ? x.ariaLabel : x.a11yAriaLabel ? x.a11yAriaLabel : null}"
			aria-labelledby="${(x) => x.ariaLabelledby}"
			aria-live="${(x) => x.ariaLive}"
			aria-owns="${(x) => x.ariaOwns}"
			aria-pressed="${(x) => x.ariaPressed}"
			aria-relevant="${(x) => x.ariaRelevant}"
			aria-roledescription="${(x) => x.ariaRoledescription
        ? x.ariaRoledescription
        : x.a11yAriaRoleDescription
            ? x.a11yAriaRoleDescription
            : null}"
			aria-selected="${(x) => x.ariaSelected}"
			aria-valuenow="${(x) => x.a11yAriaValueNow}"
			aria-valuemin="${(x) => x.a11yAriaValueMin}"
			aria-valuemax="${(x) => x.a11yAriaValueMax}"
			aria-orientation="${(x) => x.a11yAriaOrientation}"
			aria-expanded="${(x) => x.ariaExpanded}"
			${ref('control')}
		>
			${when((x) => x.a11yAriaDescription, html `<span
					id="a11y-aria-description"
					class="a11y-aria-description"
					part="a11y-aria-description"
				>
					${(x) => x.a11yAriaDescription}
				</span>`)}
			${startSlotTemplate()}
			${children !== null && children !== void 0 ? children : html `
				<span class="content" part="content">
					<slot ${slotted('defaultSlottedContent')}></slot>
				</span>
			`}
			${endSlotTemplate()}
		</button>
	`;
}

export { buttonTemplate };
