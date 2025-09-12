import { html, children, when, elements, ref, slotted } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { twoWay } from '../../../@microsoft/fast-element/dist/esm/binding/two-way.js';

function facetItemTemplate() {
    return html `<template
		id="${(x) => x.id}"
		role="listitem"
		aria-level="${(x) => x.ariaLevel}"
		expand-aria-label="${(x) => x.expandAriaLabel}"
		collapse-aria-label="${(x) => x.collapseAriaLabel}"
		slot="${(x) => (x.isNestedItem() ? 'item' : void 0)}"
		facet-name="${(x) => x.facetName}"
		:indeterminate="${(x) => x.indeterminate}"
		:checked="${(x) => x.checked}"
		expanded="${(x) => x.expanded}"
		disabled="${(x) => x.disabled}"
		item-count="${(x) => { var _a, _b; return (((_a = x.childItems) === null || _a === void 0 ? void 0 : _a.length) ? x.itemTotal : (_b = x.itemCount) !== null && _b !== void 0 ? _b : 0); }}"
		${children({ property: 'childItems', filter: elements('saf-facet-item') })}
	>
		<!-- root start -->
		<div
			class="root ${(x) => (x.childItems && x.hasChildItems ? '' : 'no-children')}"
			part="root"
		>
			${when((x) => x.childItems && x.hasChildItems, html ` <slot name="start"
					><saf-button
						id="start-${(x) => x.id}"
						icon-only=""
						appearance="tertiary"
						density="extra-compact"
						@click="${(x, c) => x.toggleExpand(c.event)}"
						class="toggle-button"
						part="toggle-button"
						aria-expanded="${(x) => x.expanded}"
						aria-controls="child-${(x) => x.id}"
						a11y-aria-label="${(x) => x.facetName}"
						${ref('expandCollapseButton')}
					>
						<saf-icon
							icon-name="${(x) => (x.expanded ? 'caret-down' : 'caret-right')}"
							appearance="solid"
							size="16"
						></saf-icon> </saf-button
				></slot>`)}
			<div
				part="control"
				class="control"
				aria-checked="${(x) => { var _a; return ((_a = x.childItems) === null || _a === void 0 ? void 0 : _a.length) && x.indeterminate ? 'mixed' : x.checked; }}"
			>
				<saf-checkbox
					id=${(x) => { var _a; return (((_a = x.childItems) === null || _a === void 0 ? void 0 : _a.length) ? `parent-${x.id}` : `child-${x.id}`); }}
					class="${(x) => { var _a; return (((_a = x.childItems) === null || _a === void 0 ? void 0 : _a.length) ? `parent-facet` : `child-facet`); }}"
					:indeterminate="${(x) => x.indeterminate}"
					:checked="${twoWay((x) => x.checked)}"
					@change="${(x, c) => x.handleCheckChange(c.event)}"
					tabindex="0"
					aria-checked="${(x) => { var _a; return ((_a = x.childItems) === null || _a === void 0 ? void 0 : _a.length) && x.indeterminate ? 'mixed' : x.checked; }}"
				>
					${(x) => x.facetName}
					<slot name="end">
						<!--If there are children items, parent facet displays the total -->
						<!--If there are no children items, show the item count pertaining to the parent-->
						<span class="number-of-items" part="number-of-items"
							>(${(x) => { var _a, _b; return (((_a = x.childItems) === null || _a === void 0 ? void 0 : _a.length) ? x.itemTotal : (_b = x.itemCount) !== null && _b !== void 0 ? _b : 0); }})
						</span>
					</slot>
					${when((x) => x.showCounterBadges && x.childrenSelected, html `<saf-sr-only
							>${(x) => x.childrenSelected} filters selected</saf-sr-only
						>`)}
				</saf-checkbox>
			</div>
			${when((x) => x.showCounterBadges && x.childrenSelected, html ` <div class="counter">
					<saf-badge appearance="info" counter="true" aria-hidden="true"
						>${(x) => x.childrenSelected}</saf-badge
					>
				</div>`)}
		</div>

		${when((x) => x.hasChildItems || x.expanded, html `<div
				id="children-${(x) => x.id}"
				role="list"
				class="child-items"
				part="child-items"
				aria-labelledby="parent-${(x) => x.id}"
			>
				<slot name="item" ${slotted('childItems')}></slot>
			</div>`)}
	</template>`;
}

export { facetItemTemplate };
