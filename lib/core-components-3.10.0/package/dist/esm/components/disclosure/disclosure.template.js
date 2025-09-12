import { html, ref, when } from '../../@microsoft/fast-element/dist/esm/index.js';
import { startSlotTemplate, endSlotTemplate } from '../../utils/start-end-template.js';

/**
 * The template for the {@link @saffron/core-components#(Disclosure:class)} component.
 * @public
 */
function disclosureTemplate() {
    return html `
		<details
			class="disclosure"
			part="disclosure"
			${ref('details')}
			?open="${(x) => x.expanded}"
		>
			<summary
				class="invoker"
				part="invoker"
				role="button"
				aria-controls="disclosure-content"
				aria-expanded="${(x) => x.expanded}"
				?hide-caret="${(x) => x.hideCaret}"
			>
				${when((x) => x.hideCaret !== true, html `
						<saf-icon
							icon-name="${(x) => (x.expanded ? 'caret-down' : 'caret-right')}"
							class="icon"
							part="icon"
							appearance="solid"
						></saf-icon>
					`)}
				${when((x) => x.hideCaret, html ` ${when((x) => x.expanded !== true, html ` ${(x) => x.show()} `)} `)}
				${startSlotTemplate()}
				<slot name="summary">${(x) => x.summary}</slot>
				${endSlotTemplate()}
			</summary>
			<div id="disclosure-content" class="content" part="content"><slot></slot></div>
		</details>
	`;
}

export { disclosureTemplate };
