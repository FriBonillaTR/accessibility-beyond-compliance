import { html } from '../../@microsoft/fast-element/dist/esm/index.js';

const stepperTemplate = () => html `
	<template
		role="list"
		orientation="${(x) => x.orientation}"
		observe-resize="${(x) => x.observeResize}"
		aria-label="${(x) => { var _a; return (_a = x.ariaLabel) !== null && _a !== void 0 ? _a : 'progress'; }}"
		class="list ${(x) => x.orientation}"
		part="list"
		@updateStepper="${(x, c) => x.updateStepper(c.event.detail)}"
	>
		<slot></slot>
	</template>
`;

export { stepperTemplate };
