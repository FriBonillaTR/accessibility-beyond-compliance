import { html } from '../../../@microsoft/fast-element/dist/esm/index.js';

const wizardStepContentTemplate = () => html `
	<template class="control" part="control">
		<slot></slot>
	</template>
`;

export { wizardStepContentTemplate };
