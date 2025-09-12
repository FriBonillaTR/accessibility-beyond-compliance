import { html } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * ViewTemplate that returns the text markup for text that appears after a label
 * This text can be used to describe whether a form field is "(optional)" or "(required)"
 */
const optionalTextTemplate = html `<span
	class="optional-text"
	part="optional-text"
	id="optional-${(x) => x.id}"
	>${(x) => x.optionalText}</span
>`;

export { optionalTextTemplate };
