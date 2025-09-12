import { html } from '../../@microsoft/fast-element/dist/esm/index.js';

const srOnlyTemplate = () => html `
	<template id="${(x) => x.id}">
		<slot></slot>
	</template>
`;

export { srOnlyTemplate };
