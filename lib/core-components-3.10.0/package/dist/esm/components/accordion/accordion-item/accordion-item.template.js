import { html, ref } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { startSlotTemplate, endSlotTemplate } from '../../../utils/start-end-template.js';

/**
 * The template for the {@link @saffron/core-components#(AccordionItem:class)} component.
 * @public
 */
function accordionItemTemplate() {
    return html `
		<div class="heading" part="heading" role="heading" aria-level="${(x) => x.headinglevel}">
			<button
				class="button"
				part="button"
				${ref('expandbutton')}
				?disabled="${(x) => (x.disabled ? 'true' : void 0)}"
				aria-expanded="${(x) => x.expanded}"
				aria-controls="${(x) => x.id}-panel"
				id="${(x) => x.id}"
				@click="${(x, c) => x.clickHandler(c.event)}"
			>
				<span class="heading-content" part="heading-content">
					<slot name="heading"></slot>
				</span>
			</button>
			${ /* The start slot is after the button for an improved screen reader experience */''}
			${startSlotTemplate()} ${endSlotTemplate()}
			<span class="icon" part="icon" aria-hidden="true">
				<slot name="expanded-icon"
					><saf-icon
						focusable="false"
						presentation="true"
						aria-hidden="true"
						icon-name="chevron-up"
						appearance="solid"
					></saf-icon
				></slot>
				<slot name="collapsed-icon">
					<saf-icon
						focusable="false"
						presentation="true"
						aria-hidden="true"
						icon-name="chevron-down"
						appearance="solid"
					></saf-icon>
				</slot>
			</span>
		</div>
		<div
			class="region"
			part="region"
			id="${(x) => x.id}-panel"
			role="region"
			aria-labelledby="${(x) => x.id}"
		>
			<slot></slot>
		</div>
	`;
}

export { accordionItemTemplate };
