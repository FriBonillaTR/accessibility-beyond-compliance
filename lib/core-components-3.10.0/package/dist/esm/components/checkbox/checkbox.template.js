import { html, ref, slotted, when } from '../../@microsoft/fast-element/dist/esm/index.js';

function checkboxTemplate() {
    return html `
		<template
			id="${(x) => x.id}"
			a11y-aria-label="${(x) => x.a11yAriaLabel}"
			a11y-aria-description="${(x) => x.a11yAriaDescription}"
			error-aria-label=${(x) => x.errorAriaLabel}
		>
			<div class="root" part="root">
				<input
					id="${(x) => x.internalId}"
					role="checkbox"
					type="checkbox"
					class="control ${(x) => (x.required ? 'required' : '')} ${(x) => x.invalid ? 'invalid' : ''}"
					part="control"
					aria-label="${(x) => x.a11yAriaLabel ? x.a11yAriaLabel : x.ariaLabel ? x.ariaLabel : undefined}"
					aria-labelledby="${(x) => (!x.a11yAriaLabel ? x.ariaLabelledbyIds : undefined)}"
					aria-describedby="${(x) => x.a11yAriaDescription ? `a11y-aria-description` : undefined}"
					aria-checked="${(x) => (x.indeterminate ? 'mixed' : x.checked)}"
					aria-required="${(x) => (x.required ? 'true' : undefined)}"
					aria-disabled="${(x) => (x.disabled ? 'true' : undefined)}"
					aria-invalid="${(x) => x.ariaInvalid || Boolean(x.invalid)}"
					?disabled="${(x) => x.disabled}"
					@change="${(x) => x.changeHandler()}"
					${ref('control')}
				/>
				<slot name="checked-indicator">
					<saf-icon
						class="checked-indicator"
						part="checked-indicator"
						icon-name="check"
						appearance="solid"
					></saf-icon>
				</slot>
				<slot name="indeterminate-indicator">
					<saf-icon
						class="indeterminate-indicator"
						part="indeterminate-indicator"
						icon-name="minus"
						appearance="solid"
					></saf-icon>
				</slot>
				<label
					for="${(x) => x.internalId}"
					id="label-${(x) => x.internalId}"
					part="label"
					class="${(x) => x.defaultSlottedNodes && x.defaultSlottedNodes.length
        ? 'label'
        : 'label label__hidden'}"
				>
					<slot ${slotted('defaultSlottedNodes')}></slot>
				</label>
				${when((x) => x.a11yAriaDescription, html `<span
						id="a11y-aria-description"
						class="a11y-aria-description"
						part="a11y-aria-description"
					>
						${(x) => x.a11yAriaDescription}
					</span>`)}
			</div>
			${when((x) => x.invalid, html `
					<div part="error" class="validation error">
						<slot id="status-${(x) => x.internalId}" name="error">
							<saf-icon
								class="error-icon"
								part="error-icon"
								icon-name="hexagon-exclamation"
								appearance="solid"
								color="var(--saf-color-status-error-strong)"
								aria-label=${(x) => x.errorAriaLabel}
								presentation="false"
							>
							</saf-icon>
							<span part="message" class="message" name="error">
								${(x) => (x.validationMessage ? x.validationMessage : '')}
							</span>
						</slot>
					</div>
				`)}
		</template>
	`;
}

export { checkboxTemplate };
