import { html, slotted, elements } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * Creates a template for the {@link @saffron/core-components#Accordion} component.
 * @public
 */
function accordionTemplate() {
    return html `
		<slot ${slotted({ property: 'slottedAccordionItems', filter: elements() })}></slot>
	`;
}

export { accordionTemplate };
