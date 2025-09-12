import { html, when } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { startSlotTemplate, endSlotTemplate } from '../../../utils/start-end-template.js';

function metadataItemTemplate() {
    return html `
		<div class="control" part="control">
			${startSlotTemplate()}
			<span class="content" part="content">
				<slot></slot>
			</span>
			${endSlotTemplate()}
			${when((x) => x.separator, html `
					<span class="separator" part="separator" aria-hidden="true">
						<slot name="separator">&ndash;</slot>
					</span>
				`)}
		</div>
	`;
}

export { metadataItemTemplate };
