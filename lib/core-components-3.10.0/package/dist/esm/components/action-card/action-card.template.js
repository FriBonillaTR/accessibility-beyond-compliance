import { html, slotted, elements } from '../../@microsoft/fast-element/dist/esm/index.js';

const actionCardTemplate = () => html `
		<template role="group">
			<div class="wrapper" part="wrapper">
				<slot
					${slotted({
    property: 'slottedActionElements',
    filter: elements('saf-action-card-action'),
})}
				></slot>
				<div
					class="controls ${(x) => (x.controlsHasElements ? '' : 'empty')}"
					part="controls"
				>
					<slot
						name="controls"
						${slotted({
    property: 'slottedControlsElements',
    filter: elements(),
})}
					></slot>
				</div>
			</div>
		</template>
	`;

export { actionCardTemplate };
