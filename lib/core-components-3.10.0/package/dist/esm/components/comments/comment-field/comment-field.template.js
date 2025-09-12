import { html } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { startSlotTemplate, endSlotTemplate } from '../../../utils/start-end-template.js';

const commentFieldTemplate = () => html `
	<template role="region" aria-label="${(x) => x.ariaLabel}">
		<div class="control" part="control" role="form">
			${startSlotTemplate()}
			<form>
				<slot></slot>
			</form>
			${endSlotTemplate()}
		</div>
	</template>
`;

export { commentFieldTemplate };
