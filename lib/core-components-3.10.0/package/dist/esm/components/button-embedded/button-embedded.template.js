import { html, slotted } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * The template for ButtonEmbedded component.
 * @public
 */
const buttonEmbeddedTemplate = () => html `
	<template density="${(x) => x.density}">
		<slot
			${slotted({
    property: 'slottedNodes',
})}
		></slot>
	</template>
`;

export { buttonEmbeddedTemplate };
