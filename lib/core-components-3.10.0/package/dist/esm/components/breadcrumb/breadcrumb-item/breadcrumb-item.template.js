import { html, when } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { anchorTemplate } from '../../anchor/anchor.template.js';

/**
 * The template for the {@link @saffron/core-components#(BreadcrumbItem:class)} component.
 * @public
 */
function breadcrumbItemTemplate() {
    return html `
		<div role="listitem" class="listitem" part="listitem">
			${(x) => html `${anchorTemplate({ tag: x.separator ? 'a' : 'span' }).inline()}`}
			${when((x) => x.separator, html `
					<span class="separator" part="separator" aria-hidden="true">
						<slot name="separator"> / </slot>
					</span>
				`)}
		</div>
	`;
}

export { breadcrumbItemTemplate };
