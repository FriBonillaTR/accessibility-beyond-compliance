import { html } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { startSlotTemplate, endSlotTemplate } from '../../../utils/start-end-template.js';

/**
 * The template for the {@link @saffron/core-components#(Tab:class)} component.
 * @public
 */
function tabTemplate() {
    return html `
		<template slot="tab" role="tab" aria-disabled="${(x) => x.disabled}">
			${startSlotTemplate()}
			<slot></slot>
			${endSlotTemplate()}
		</template>
	`;
}

export { tabTemplate };
