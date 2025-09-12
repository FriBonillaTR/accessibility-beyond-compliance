import { html, slotted, when, elements } from '../../../@microsoft/fast-element/dist/esm/index.js';

function facetCategoryTemplate() {
    return html `<template
		id="${(x) => x.id}"
		expanded="${(x) => x.expanded}"
		summary="${(x) => x.summary}"
	>
		<saf-disclosure
			id="disclosure-${(x) => x.id}"
			summary="${(x) => x.summary}"
			expanded="${(x) => x.expanded}"
			?hide-caret="${(x) => x.hideCaret}"
		>
			<div role="list">
				<slot
					${slotted({ property: 'slottedFacets', filter: elements('saf-facet-item') })}
				></slot>
			</div>
			${when((x) => x.showCounterBadges && x.childrenSelected, html ` <div class="counter" slot="end">
					<saf-badge appearance="info" counter="true"
						>${(x) => x.childrenSelected}</saf-badge
					>
					<saf-sr-only>filters selected</saf-sr-only>
				</div>`)}
			${when((x) => x.showCounterBadges && !x.childrenSelected, html ` <div slot="end">
					<saf-sr-only>0 filters selected</saf-sr-only>
				</div>`)}
		</saf-disclosure>
	</template> `;
}

export { facetCategoryTemplate };
