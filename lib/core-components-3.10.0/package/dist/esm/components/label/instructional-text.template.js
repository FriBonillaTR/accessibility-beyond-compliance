import { html } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * @public
 * @remarks
 * ViewTemplate that includes instructional text for text field
 */
const instructionalTextTemplate = html `<span
	id="instructional-${(x) => x.id}"
	part="instructional-text"
	class="instructional-text"
>
	${(x) => x.instructionalText}
</span>`;

export { instructionalTextTemplate };
