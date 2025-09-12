import { html, children, when, elements, ref, slotted } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { startSlotTemplate, endSlotTemplate } from '../../../utils/start-end-template.js';

/**
 * The template for the {@link @saffron/core-components#(TreeItem:class)} component.
 * @public
 */
function treeItemTemplate() {
    return html `
		<template
			role="treeitem"
			slot="${(x) => (x.isNestedItem() ? 'item' : void 0)}"
			tabindex="-1"
			aria-expanded="${(x) => (x.childItems && x.childItemLength > 0 ? x.expanded : void 0)}"
			aria-selected="${(x) => x.selected}"
			aria-disabled="${(x) => x.disabled}"
			@focusin="${(x, c) => x.handleFocus(c.event)}"
			@focusout="${(x, c) => x.handleBlur(c.event)}"
			@click="${(x, c) => x.handleExpandCollapseButtonClick(c.event)}"
			${children({
        property: 'childItems',
        filter: elements(),
    })}
		>
			<div class="positioning-region" part="positioning-region">
				<div class="content-region" part="content-region">
					${when((x) => x.childItems && x.childItemLength > 0, html `
							<div
								aria-hidden="true"
								class="expand-collapse-button"
								part="expand-collapse-button"
								${ref('expandCollapseButton')}
							>
								<slot name="expand-collapse-glyph">
									<saf-icon
										class="expand-collapse-glyph"
										icon-name="${(x) => x.expanded ? 'caret-down' : 'caret-right'}"
										appearance="solid"
									></saf-icon>
								</slot>
							</div>
						`)}
					${startSlotTemplate()}
					<slot></slot>
					${endSlotTemplate()}
				</div>
			</div>
			${when((x) => x.childItems && x.childItemLength > 0 && x.expanded, html `
					<div role="group" class="items" part="items">
						<slot name="item" ${slotted('items')}></slot>
					</div>
				`)}
		</template>
	`;
}

export { treeItemTemplate };
