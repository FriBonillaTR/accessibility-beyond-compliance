import { html } from '../../../@microsoft/fast-element/dist/esm/index.js';

const descriptionDetailsTemplate = () => html `
	<template role="descriptionlistdetail">
		<dd class="${(x) => (x.bulletPoint ? 'with-bullet' : '')}" id="${(x) => x.id}">
			<span class="description-list-details"><slot></slot></span>
		</dd>
	</template>
`;

export { descriptionDetailsTemplate };
