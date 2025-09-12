import { html } from '../../@microsoft/fast-element/dist/esm/index.js';
import { startSlotTemplate, endSlotTemplate } from '../../utils/start-end-template.js';

/**
 * The template for the {@link @saffron/core-components#(Badge:class)} component.
 * @public
 */
function badgeTemplate() {
    return html `
		${startSlotTemplate()}
		<span class="control" part="control">
			<slot></slot>
		</span>
		${endSlotTemplate()}
	`;
}

export { badgeTemplate };
