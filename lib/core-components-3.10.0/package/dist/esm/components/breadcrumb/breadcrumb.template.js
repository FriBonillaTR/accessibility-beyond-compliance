import { html, slotted, elements } from '../../@microsoft/fast-element/dist/esm/index.js';
import { startSlotTemplate, endSlotTemplate } from '../../utils/start-end-template.js';

/**
 * The template for the {@link @saffron/core-components#(Breadcrumb:class)} component.
 * @public
 */
function breadcrumbTemplate() {
    return html `
		<template role="navigation">
			${startSlotTemplate()}
			<span role="list" class="list" part="list">
				<slot ${slotted({ property: 'slottedBreadcrumbItems', filter: elements() })}></slot>
			</span>
			${endSlotTemplate()}
		</template>
	`;
}

export { breadcrumbTemplate };
