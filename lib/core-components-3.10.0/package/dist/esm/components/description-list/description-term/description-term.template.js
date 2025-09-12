import { html } from '../../../@microsoft/fast-element/dist/esm/index.js';

const descriptionTermTemplate = () => html `
	<template role="descriptionlistterm">
		<dt id="${(x) => x.id}">
			<span class="term"><slot></slot><span>
		</dt>
	</template>
`;

export { descriptionTermTemplate };
