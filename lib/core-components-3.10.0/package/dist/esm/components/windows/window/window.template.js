import { html, when } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { startSlotTemplate, endSlotTemplate } from '../../../utils/start-end-template.js';

function windowTemplate() {
    return html `
		<template
			slot="tab"
			role="group"
			aria-label=${(x) => { var _a; return (_a = x.textContent) === null || _a === void 0 ? void 0 : _a.trim(); }}
			aria-disabled="${(x) => x.disabled}"
			a11y-aria-selected=${(x) => x.ariaSelectedAttr}
		>
			<div
				class="window-label"
				part="window-label"
				role="tab"
				tabindex=${(x) => x.tabIndexAttr}
				aria-selected=${(x) => x.ariaSelectedAttr}
			>
				${startSlotTemplate()}
				<slot></slot>
				${endSlotTemplate()}
			</div>

			${when((x) => x.closeable, html `
					<saf-tooltip anchor="close" part="close-tooltip">
						${(x) => x.closeAriaLabel}
					</saf-tooltip>
					<saf-button
						nested-item
						a11y-aria-label="${(x) => x.closeAriaLabel}"
						id="close"
						appearance="tertiary"
						class="close-window-button"
						part="close-window-button"
						icon-only="true"
						@click="${(x) => x.close()}"
						density="compact"
						?disabled="${(x) => x.disabled}"
						tabindex=${(x) => (x.tabIndexAttr === '-1' ? '-1' : null)}
					>
						<saf-icon icon-name="xmark-large" size="12"></saf-icon>
					</saf-button>
				`)}
		</template>
	`;
}

export { windowTemplate };
