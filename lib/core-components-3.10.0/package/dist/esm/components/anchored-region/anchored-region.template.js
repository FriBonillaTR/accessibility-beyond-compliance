import { html, when } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * The template for the {@link @saffron/core-components#(AnchoredRegion:class)} component.
 * @public
 */
function anchoredRegionTemplate() {
    return html `
		<template data-loaded="${(x) => (x.initialLayoutComplete ? 'loaded' : '')}">
			${when((x) => x.initialLayoutComplete, html ` <slot></slot> `)}
		</template>
	`;
}

export { anchoredRegionTemplate };
