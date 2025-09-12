import { html } from '../../@microsoft/fast-element/dist/esm/index.js';

const emptyStateTemplate = () => html `
	<template ?is-center="${(x) => (x.isCenter ? x.isCenter : void 0)}">
		<slot name="icon"></slot>
		<div
			class="empty-state-title"
			part="empty-state-title"
			role="heading"
			aria-level="${(x) => x.ariaTitleLevel}"
		>
			${(x) => x.emptyStateTitle ? x.emptyStateTitle : 'Message title is 40 characters or less'}
		</div>
		<slot></slot>
		<slot name="actions"></slot>
	</template>
`;

export { emptyStateTemplate };
