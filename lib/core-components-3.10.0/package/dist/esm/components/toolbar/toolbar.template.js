import { html, children, when, slotted } from '../../@microsoft/fast-element/dist/esm/index.js';

const toolbarTemplate = () => html `
	<template
		density="${(x) => x.density}"
		role="${(x) => (x.arrowNav ? 'toolbar' : 'group')}"
		aria-label="${(x) => x.ariaLabel}"
		:dir="${(x) => x.direction}"
		@keydown="${(x, c) => x.handleKeyDown(c.event)}"
		@click="${(x, c) => x.clickHandler(c.event)}"
		${children({
    property: 'childItems',
    attributeFilter: ['disabled', 'hidden'],
    selector: '*',
    subtree: true,
})}
	>
		<div class="top-row" part="top-row">
			<slot name="top-row-start"></slot>
			<slot name="top-row-end"></slot>
		</div>
		${when((x) => x.ifbottomSlots(), html `<saf-divider
				class="separator"
				part="separator"
				orientation="horizontal"
				role="presentation"
			>
			</saf-divider> `)}
		<div class="bottom-row" part="bottom-row">
			<slot name="bottom-row-start" ${slotted({ property: 'bottomStartNodes' })}></slot>
			<slot name="bottom-row-end" ${slotted({ property: 'bottomEndNodes' })}></slot>
		</div>
	</template>
`;

export { toolbarTemplate };
