import { html, when } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * Form Status Template
 */
function statusTemplate() {
    return html `<template
		role="status"
		aria-live="polite"
		aria-labelledby="${(x) => x.ariaLabelledBy}"
		focusable="${(x) => x.focusable}"
		autofocus="${(x) => x.autofocus}"
		:status="${(x) => x.status}"
		paused-aria-label="${(x) => x.pausedAriaLabel}"
		info-aria-label="${(x) => x.infoAriaLabel}"
		success-aria-label="${(x) => x.successAriaLabel}"
		error-aria-label="${(x) => x.errorAriaLabel}"
		warning-aria-label="${(x) => x.warningAriaLabel}"
	>
		${when((x) => x.status === 'paused', html `<saf-icon
				part="paused-icon"
				icon-name="circle-xmark"
				appearance="solid"
				color="var(--saf-color-status-neutral-strong)"
				aria-label="${(x) => x.pausedAriaLabel}"
				presentation="false"
			>
			</saf-icon> `)}
		${when((x) => x.status === 'info', html `<saf-icon
				part="info-icon"
				icon-name="circle-info"
				appearance="solid"
				color="var(--saf-color-status-info-strong)"
				aria-label="${(x) => x.infoAriaLabel}"
				presentation="false"
			>
			</saf-icon> `)}
		${when((x) => x.status === 'success', html `<saf-icon
				part="success-icon"
				icon-name="circle-check"
				appearance="solid"
				color="var(--saf-color-status-success-strong)"
				aria-label="${(x) => x.successAriaLabel}"
				presentation="false"
			>
			</saf-icon> `)}
		${when((x) => x.status === 'error', html `<saf-icon
				part="error-icon"
				icon-name="hexagon-exclamation"
				appearance="solid"
				color="var(--saf-color-status-error-strong)"
				aria-label="${(x) => x.errorAriaLabel}"
				presentation="false"
			>
			</saf-icon> `)}
		${when((x) => x.status === 'warning', html `<saf-icon
				part="warning-icon"
				icon-name="warning"
				appearance="solid"
				color="var(--saf-color-status-warning-strong)"
				aria-label="${(x) => x.warningAriaLabel}"
				presentation="false"
			>
			</saf-icon> `)}
		<span part="message" class="message">${(x) => x.message} </span>
	</template> `;
}

export { statusTemplate };
