import { html } from '../../../@microsoft/fast-element/dist/esm/index.js';

const activityNoteTemplate = () => html `
	<template role="listitem">
		<div class="note" part="note">
			<slot></slot>
		</div>
	</template>
`;

export { activityNoteTemplate };
