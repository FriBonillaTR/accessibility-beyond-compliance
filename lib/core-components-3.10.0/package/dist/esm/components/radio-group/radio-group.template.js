import { html, when, slotted, elements } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * The template for the SafRadioGroup component.
 * @public
 */
function radioGroupTemplate() {
    return html `
		<template
			label="${(x) => (x.label ? x.label : null)}"
			instructional-text="${(x) => (x.instructionalText ? x.instructionalText : null)}"
			optional-text="${(x) => (x.optionalText ? x.optionalText : null)}"
			value="${(x) => x.value}"
			validation-message="${(x) => x.validationMessage}"
			readonly="${(x) => x.readOnly}"
			@click="${(x, c) => x.clickHandler(c.event)}"
			@keydown="${(x, c) => x.keydownHandler(c.event)}"
			@focusout="${(x, c) => x.focusOutHandler(c.event)}"
			required="${(x) => x.required}"
			required-text="${(x) => x.requiredText}"
			error-aria-label="${(x) => x.errorAriaLabel}"
		>
			<fieldset
				part="control"
				class="control"
				role="radiogroup"
				aria-disabled="${(x) => x.disabled}"
				aria-errormessage="${(x) => (x.invalid ? `status-${x.id}` : null)}"
				aria-invalid="${(x) => x.ariaInvalid || Boolean(x.invalid)}"
				aria-label="${(x) => x.a11yAriaLabel}"
				aria-orientation="${(x) => x.orientation}"
				aria-required="${(x) => x.required}"
				aria-readonly="${(x) => x.readOnly}"
			>
				<legend part="legend" class="legend label-container">
					<span class="label" part="label" id="label-${(x) => x.id}">
						${(x) => x.label}${when((x) => x.required, html `<span class="required-text" part="required-text" aria-hidden="true"
								>${(x) => x.requiredText === '*'
        ? `${x.requiredText}`
        : ` ${x.requiredText}`}
							</span>`)}
					</span>

					<slot class="help-text" part="help-text" name="label-end"></slot>

					${when((x) => x.optionalTextVisible, html `<span
							class="optional-text"
							part="optional-text"
							id="optional-${(x) => x.id}"
						>
							${(x) => x.optionalText}
						</span>`)}
					${when((x) => !x.optionalTextVisible, html `<saf-sr-only> ${(x) => x.optionalText} </saf-sr-only>`)}
					<p
						id="instructional-${(x) => x.id}"
						part="instructional-text"
						class="instructional-text"
					>
						${(x) => x.instructionalText}
					</p>
					${when((x) => (x.disabled ? false : x.invalid), html `<slot
							id="status-${(x) => x.id}"
							class="validation error"
							name="error"
							part="error"
							><saf-icon
								part="error-icon"
								icon-name="hexagon-exclamation"
								appearance="solid"
								color="var(--saf-color-status-error-strong)"
								presentation="false"
								aria-label="${(x) => x.errorAriaLabel}"
							>
							</saf-icon>
							<span part="message" class="message"
								>${(x) => x.validationMessage}
							</span></slot
						>`)}
				</legend>
				<slot
					class="positioning-region"
					part="positioning-region"
					${slotted({
        property: 'slottedRadioButtons',
        filter: elements('saf-radio'),
    })}
				></slot>
			</fieldset>
		</template>
	`;
}

export { radioGroupTemplate };
