import { html } from '../../@microsoft/fast-element/dist/esm/index.js';

const clickAwayListenerTemplate = () => html `
	<template>
		<slot></slot>
	</template>
`;

export { clickAwayListenerTemplate };
