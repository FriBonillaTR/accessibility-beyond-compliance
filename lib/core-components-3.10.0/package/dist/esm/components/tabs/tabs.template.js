import { html, slotted } from '../../@microsoft/fast-element/dist/esm/index.js';
import { startSlotTemplate, endSlotTemplate } from '../../utils/start-end-template.js';

/**
 * The template for the {@link @saffron/core-components#(Tabs:class)} component.
 * @public
 */
//
function tabsTemplate() {
    return html `
		<div class="tablist-container" part="tablist-container">
			${startSlotTemplate()}
			<div
				class="tablist"
				part="tablist"
				role="tablist"
				aria-label="${(x) => (x.a11yAriaLabel ? x.a11yAriaLabel : null)}"
				aria-orientation="${(x) => x.orientation}"
			>
				<slot name="tab" ${slotted('tabs')}></slot>
			</div>
			${endSlotTemplate()}
		</div>

		<div class="tabpanel" part="tabpanel" @change="${(_, e) => e.event.stopPropagation()}">
			<slot name="tabpanel" ${slotted('tabpanels')}></slot>
		</div>
	`;
}

export { tabsTemplate };
