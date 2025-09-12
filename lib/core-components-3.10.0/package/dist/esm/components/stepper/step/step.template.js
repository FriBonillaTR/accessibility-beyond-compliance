import { html, slotted } from '../../../@microsoft/fast-element/dist/esm/index.js';

const stepTemplate = () => html `
	<template
		aria-current=${(x) => (x.status === 'active' ? 'true' : 'false')}
		part="item"
		role="listitem"
		status-label=${(x) => x.statusLabel}
	>
		<div class="step-divider" part="step-divider"></div>
		<div class="step-header-container" part="step-header-container">
			<div class="number" part="number">
				${(x) => x.status === 'completed'
    ? html `<saf-icon
								size="24"
								icon-name="circle-check"
								appearance="solid"
						  ></saf-icon>`
    : html `${x.stepNumber}`}
			</div>
			<slot name="start"> </slot>
			<div class="step-header" part="step-header">
				<slot name="step-header" ${slotted('stepHeaderSlot')}>
					${(x) => x.stepHeader}
				</slot>
			</div>
		</div>
		<div class="step-content" part="step-content">
			<slot ${slotted({ property: 'defaultSlottedContent' })}></slot>
		</div>
		<saf-sr-only>${(x) => (x.statusLabel ? x.statusLabel : x.status)}</saf-sr-only>
		<slot name="end"></slot>
	</template>
`;

export { stepTemplate };
