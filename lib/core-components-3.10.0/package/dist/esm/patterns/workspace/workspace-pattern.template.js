import { html } from '../../@microsoft/fast-element/dist/esm/index.js';

const workspacePatternTemplate = () => html `
	<template>
		<saf-splitter
			sr-only-title="${(x) => x.srOnlyTitle}"
			tooltip-text="${(x) => x.tooltipText}"
			initial-size="${(x) => x.initialSize}"
			scrollable-primary="${(x) => x.scrollablePrimary}"
			scrollable-secondary="${(x) => x.scrollableSecondary}"
		>
			<div slot="primary">
				<slot name="primary"></slot>
			</div>

			<div slot="secondary">
				<slot name="secondary"></slot>
			</div>
		</saf-splitter>
	</template>
`;

export { workspacePatternTemplate };
