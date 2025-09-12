import { html, when, slotted, elements } from '../../@microsoft/fast-element/dist/esm/index.js';
import { instructionalTextTemplate } from '../label/instructional-text.template.js';

const facetedFilterTemplate = () => html `
	<template
		id="${(x) => x.id}"
		filter-title="${(x) => x.filterTitle}"
		filter-subtitle="${(x) => x.filterSubtitle}"
		aria-title-level="${(x) => x.ariaTitleLevel}"
		aria-subtitle-level="${(x) => x.ariaSubtitleLevel}"
		reset-label="${(x) => x.resetButtonLabel}"
	>
		<div class="filter-header" part="filter-header">
			<div
				class="filter-title"
				part="filter-title"
				role="heading"
				aria-level="${(x) => x.ariaTitleLevel}"
			>
				${(x) => x.filterTitle}
			</div>
			${when((x) => x.instructionalText, html `${instructionalTextTemplate}`)}
			<div class="filter-by" part="filter-by">
				<div
					class="filter-subtitle"
					part="filter-subtitle"
					role="heading"
					aria-level="${(x) => x.ariaSubtitleLevel}"
				>
					${(x) => x.filterSubtitle}
				</div>
				<saf-button
					id="button-${(x) => x.id}"
					appearance="tertiary"
					@click="${(x) => x.handleReset()}"
				>
					<saf-icon icon-name="arrow-rotate-right" slot="start"></saf-icon>
					${(x) => x.resetButtonLabel}
				</saf-button>
			</div>
			<saf-divider></saf-divider>
		</div>
		<div class="control" part="control">
			<slot
				${slotted({
    property: 'slottedFacets',
    filter: elements('saf-facet-category'),
})}
			></slot>
		</div>
	</template>
`;

export { facetedFilterTemplate };
