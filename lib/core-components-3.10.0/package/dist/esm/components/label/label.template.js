import { html, when } from '../../@microsoft/fast-element/dist/esm/index.js';
import { optionalTextTemplate } from './optional-text.template.js';

/**
 * @public
 * @remarks
 * ViewTemplate that returns a label element
 * that contains a unique ID and a `for` attribute
 * that references a form field's input ID
 */
const labelTemplate = html `<label
	part="label"
	for="${(x) => x.id}"
	class="label"
	id="label-${(x) => x.id}"
	>${(x) => x.label}${when((x) => x.optionalText, optionalTextTemplate)}${when((x) => x.required, html `<span class="required-text" part="required-text" aria-hidden="true"
			>${(x) => (x.requiredText === '*' ? `${x.requiredText}` : ` ${x.requiredText}`)}
		</span>`)}
</label>`;

export { labelTemplate };
