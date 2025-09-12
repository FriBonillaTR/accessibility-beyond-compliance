import { html, ref } from '../../../@microsoft/fast-element/dist/esm/index.js';

const dateMaskedInputTemplate = () => html `
	<saf-text-field
		id="${(x) => x.id}"
		class="text-field"
		part="text-field"
		inputmode="numeric"
		highlight-on-click="false"
		label="${(x) => x.label}"
		instructional-text="${(x) => (x.instructionalText ? x.instructionalText : null)}"
		optional-text="${(x) => (x.optionalText ? x.optionalText : null)}"
		?readonly="${(x) => x.readOnly}"
		?disabled="${(x) => x.disabled}"
		?required="${(x) => x.required}"
		required-text="${(x) => x.requiredText}"
		is-success="${(x) => x.isSuccess}"
		invalid="${(x) => x.invalid}"
		validation-message="${(x) => x.validationMessage}"
		density="${(x) => x.density}"
		autocomplete="off"
		@input="${(x, c) => x.onInputInput(c.event)}"
		@keydown="${(x, c) => x.onInputKeyDown(c.event)}"
		@click="${(x, c) => x.onInputClick(c.event)}"
		@focusin=${(x, c) => x.onInputFocusIn(c.event)}
		@change=${(x, c) => x.onInputChange(c.event)}
		:value="${(x) => x.value}"
		${ref('textField')}
	>
	</saf-text-field>
`;

export { dateMaskedInputTemplate };
