import { html } from '../../../@microsoft/fast-element/dist/esm/index.js';

const LayoutGridItemTemplate = () => html `
	<template
		xs="${(x) => x.xs}"
		sm="${(x) => x.sm}"
		md="${(x) => x.md}"
		lg="${(x) => x.lg}"
		xl="${(x) => x.xl}"
		xxl="${(x) => x.xxl}"
		xxxl="${(x) => x.xxxl}"
		xxxxl="${(x) => x.xxxxl}"
		auto-height="${(x) => x.autoHeight}"
	>
		<slot></slot>
	</template
`;

export { LayoutGridItemTemplate };
