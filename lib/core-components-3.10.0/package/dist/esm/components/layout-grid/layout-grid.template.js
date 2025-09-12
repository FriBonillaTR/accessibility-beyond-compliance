import { html } from '../../@microsoft/fast-element/dist/esm/index.js';

const layoutGridTemplate = () => html `
	<template>
		<div class="root" part="root">
			<slot></slot>
		</div>
	</template>
`;

export { layoutGridTemplate };
