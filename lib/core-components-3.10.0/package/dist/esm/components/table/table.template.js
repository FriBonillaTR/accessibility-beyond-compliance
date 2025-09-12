import { html } from '../../@microsoft/fast-element/dist/esm/index.js';

const tableTemplate = () => html `
	<template>
		<slot></slot>
	</template>
`;

export { tableTemplate };
