import { html, when, slotted, elements } from '../../../@microsoft/fast-element/dist/esm/index.js';

/**
 * Template for CheckboxGroup component.
 * @public
 */
const checkboxGroupTemplate = () => html `
	<template
		id="${(x) => x.id}"
		label="${(x) => (x.label ? x.label : null)}"
		orientation=${(x) => (x.orientation ? x.orientation : 'vertical')}
		invalid="${(x) => x.invalid}"
		instructionalText="${(x) => (x.instructionalText ? x.instructionalText : null)}"
		optional-text="${(x) => (x.optionalText ? x.optionalText : null)}"
		validation-message="${(x) => x.validationMessage}"
		required="${(x) => x.required}"
		required-text="${(x) => x.requiredText}"
		required-aria-text="${(x) => x.requiredAriaText}"
		@change="${(x) => x.handleChange()}"
		@reset="${(x) => x.handleReset()}"
		value="${(x) => x.value}"
		error-aria-label="${(x) => x.errorAriaLabel}"
	>
		<fieldset part="control" class="control" aria-invalid="${(x) => x.invalid}">
			<legend part="legend" class="legend label-container">
				<span class="label" part="label" id="label-${(x) => x.id}">
					${(x) => x.label}${when((x) => x.required, html `<span class="required-text" part="required-text" aria-hidden="true"
								>${(x) => x.requiredText === '*'
    ? `${x.requiredText}`
    : ` ${x.requiredText}`}
							</span>
							<saf-sr-only>${(x) => x.requiredAriaText}</saf-sr-only>`)}
				</span>

				<slot class="help-text" part="help-text" name="label-end"></slot>

				<span class="optional-text" part="optional-text" id="optional-${(x) => x.id}">
					${(x) => x.optionalText}
				</span>
				<span
					id="instructional-${(x) => x.id}"
					part="instructional-text"
					class="instructional-text"
				>
					${(x) => x.instructionalText}
				</span>

				${when((x) => (x.invalid && x.validationMessage) ||
    (x.invalid && x.validationMessage && x.required), html `<slot name="error" part="error" class="validation error">
                <saf-icon
                    part="error-icon"
                    icon-name="hexagon-exclamation"
                    appearance="solid"
                    color="var(--saf-color-status-error-strong)"
                    presentation="false"
                    aria-label="${(x) => x.errorAriaLabel}"
                >
                </saf-icon>
                    <span part="message" class="message">${(x) => x.validationMessage} </span></slot
                >
                </slot>`)}
			</legend>
			<slot
				class="positioning-region"
				part="positioning-region"
				${slotted({
    property: 'slottedNodes',
    filter: elements('saf-checkbox'),
})}
			></slot>
		</fieldset>
	</template>
`;

export { checkboxGroupTemplate };
