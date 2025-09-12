import { html, when, slotted } from '../../@microsoft/fast-element/dist/esm/index.js';
import { endSlotTemplate, startSlotTemplate } from '../../utils/start-end-template.js';

function optionTemplate() {
    return html `
		<template
			aria-checked="${(x) => x.ariaChecked}"
			aria-disabled="${(x) => x.ariaDisabled || x.parentNode.disabled}"
			aria-posinset="${(x) => x.ariaPosInSet}"
			aria-selected="${(x) => x.ariaSelected || x.selected}"
			aria-setsize="${(x) => x.ariaSetSize}"
			density="${(x) => x.density}"
			aria-current="${(x) => x.ariaCurrentComputed}"
			?disabled="${(x) => x.disabled}"
			role="option"
		>
			<div class="root" part="root">
				${when((x) => x.isMultiple && x.ariaSelected === 'true', html `
						<saf-icon
							class="square-check-icon"
							part="square-check-icon"
							icon-name="square-check"
							appearance="solid"
							size="16"
						></saf-icon>
					`)}
				${when((x) => x.isMultiple && x.ariaSelected !== 'true', html `
						<saf-icon
							class="square-icon"
							part="square-icon"
							icon-name="square"
							size="16"
						></saf-icon>
					`)}
				${when((x) => !x.isMultiple, html ` ${startSlotTemplate()} `)}
				<span class="content" part="content">
					<slot ${slotted('content')}></slot>
				</span>
				${endSlotTemplate()}
			</div>
		</template>
	`;
}

export { optionTemplate };
