import { html, when } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * The template for the {@link @saffron/core-components#Progress} component.
 * @public
 */
function progressTemplate() {
    return html `
		<template
			id="${(x) => x.id}"
			role="progressbar"
			aria-valuenow="${(x) => (typeof x.value === 'number' ? x.value : null)}"
			aria-valuemin="${(x) => { var _a; return (_a = x.min) !== null && _a !== void 0 ? _a : 0; }}"
			aria-valuemax="${(x) => { var _a; return (_a = x.max) !== null && _a !== void 0 ? _a : 100; }}"
			aria-valuetext="${(x) => typeof x.value === 'number'
        ? `${Math.round(x.percentComplete)}% ${x.completeLabel}`
        : null}"
			aria-label="${(x) => (x.ariaLabel ? x.ariaLabel : x.label)}"
			status-color="${(x) => x.statusColor}"
			complete-label="${(x) => x.completeLabel}"
		>
			${when((x) => typeof x.value === 'number', html `
					<div id="label-${(x) => x.id}" class="progress-value" part="progress-value">
						${when((x) => x.label, html `<span class="label" part="label">${(x) => x.label}</span>`)}
						<span class="value" part="value">
							${(x) => Math.round(x.percentComplete)}% ${(x) => x.completeLabel}
						</span>
					</div>
					<div class="progress" part="progress" slot="determinate">
						<div
							class="determinate"
							part="determinate"
							style="width: ${(x) => x.percentComplete}%"
						></div>
					</div>
				`)}
			${when((x) => typeof x.value !== 'number', html `
					<div id="label-${(x) => x.id}" class="progress-value" part="progress-value">
						${when((x) => x.label, html `<span class="label" part="label">${(x) => x.label}</span>`)}
					</div>
					<div class="progress" part="progress" slot="indeterminate">
						<slot class="indeterminate" name="indeterminate">
							<span
								class="indeterminate-indicator-1"
								part="indeterminate-indicator-1"
							></span>
							<span
								class="indeterminate-indicator-2"
								part="indeterminate-indicator-2"
							></span>
						</slot>
					</div>
				`)}
		</template>
	`;
}

export { progressTemplate };
