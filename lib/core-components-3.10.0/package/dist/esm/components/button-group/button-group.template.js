import { html, slotted } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * The template for ButtonGroup component.
 * @public
 */
const buttonGroupTemplate = () => html `
	<template aria-label="${(x) => x.ariaLabel}" role="group" density="${(x) => x.density}">
		<slot
			${slotted({
    property: 'slottedNodes',
})}
		></slot>
	</template>
`;

export { buttonGroupTemplate };
