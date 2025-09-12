import { html } from '../../@microsoft/fast-element/dist/esm/index.js';

const textTemplate = () => html `
	<template appearance="${(x) => x.appearance}">
		<span class="content" part="content">
			<slot></slot>
		</span>
	</template>
`;

export { textTemplate };
