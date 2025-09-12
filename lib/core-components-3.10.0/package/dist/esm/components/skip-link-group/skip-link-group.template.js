import { html, slotted, elements } from '../../@microsoft/fast-element/dist/esm/index.js';

const skipLinkGroupTemplate = () => html `
	<template role="navigation" aria-label="${(x) => x.ariaLabel}">
		<slot
			${slotted({
    property: 'slottedSkipLinks',
    filter: elements('saf-skip-link'),
})}
		></slot>
	</template>
`;

export { skipLinkGroupTemplate };
