import { html, slotted, when } from '../../@microsoft/fast-element/dist/esm/index.js';
import { startSlotTemplate, endSlotTemplate } from '../../utils/start-end-template.js';

function windowsTemplate() {
    return html `
		<div class="windows" part="windows">
			${startSlotTemplate()}
			<div class="tablist" part="tablist" role="tablist" aria-label=${(x) => x.a11yAriaLabel}>
				<slot name="tab" ${slotted('tabs')}></slot>
				${when((x) => x.addable, html `
						<saf-tooltip anchor="add" part="add-tooltip"
							>${(x) => x.addAriaLabel}</saf-tooltip
						>
						<saf-button
							nested-item
							id="add"
							class="add-window-button"
							part="add-window-button"
							appearance="tertiary"
							icon-only="true"
							@click="${(x) => x.add()}"
							density="compact"
						>
							<saf-icon icon-name="plus"></saf-icon>
							<saf-sr-only>${(x) => x.addAriaLabel}</saf-sr-only>
						</saf-button>
					`)}
			</div>
			${endSlotTemplate()}
		</div>
		<div class="tabpanel" part="tabpanel">
			<slot name="tabpanel" ${slotted('tabpanels')}></slot>
		</div>
	`;
}

export { windowsTemplate };
