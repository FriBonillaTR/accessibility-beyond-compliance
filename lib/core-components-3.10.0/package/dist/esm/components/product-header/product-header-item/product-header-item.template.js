import { html } from '../../../@microsoft/fast-element/dist/esm/index.js';

const productHeaderItemTemplate = () => html `
	<template role="listitem">
		<slot></slot>
	</template>
`;

export { productHeaderItemTemplate };
