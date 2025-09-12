import { html, when } from '../../@microsoft/fast-element/dist/esm/index.js';

const progressSegments = 44;
function progressRingTemplate() {
    return html `
		<template
			id="${(x) => x.id}"
			role="progressbar"
			aria-valuenow="${(x) => (typeof x.value === 'number' ? x.value : null)}"
			aria-valuemin="${(x) => { var _a; return (_a = x.min) !== null && _a !== void 0 ? _a : 0; }}"
			aria-valuemax="${(x) => { var _a; return (_a = x.max) !== null && _a !== void 0 ? _a : 100; }}"
			aria-valuetext="${(x) => typeof x.value === 'number' ? `${Math.round(x.percentComplete)}% complete` : null}"
			aria-label="${(x) => (x.ariaLabel ? x.ariaLabel : x.label)}"
		>
			${when((x) => typeof x.value === 'number', html `
					<svg
						class="progress ${(x) => (x.label ? '' : 'no-label')}"
						part="progress"
						viewBox="0 0 16 16"
						slot="determinate"
						role="presentation"
					>
						<circle
							class="determinate"
							part="determinate"
							style="stroke-dasharray: ${(x) => (progressSegments * x.percentComplete) / 100} ${progressSegments}"
							cx="8px"
							cy="8px"
							r="7px"
						></circle>
					</svg>
				`)}
			${when((x) => typeof x.value !== 'number', html `
					<slot name="indeterminate">
						<svg
							class="progress indeterminate ${(x) => (x.label ? '' : 'no-label')}"
							part="progress"
							viewBox="0 0 16 16"
						>
							<circle
								class="indeterminate-indicator-1"
								part="indeterminate-indicator-1"
								cx="8px"
								cy="8px"
								r="7px"
							></circle>
						</svg>
					</slot>
				`)}
			<div id="label-${(x) => x.id}" class="label" part="label">${(x) => x.label}</div>
		</template>
	`;
}

export { progressRingTemplate };
