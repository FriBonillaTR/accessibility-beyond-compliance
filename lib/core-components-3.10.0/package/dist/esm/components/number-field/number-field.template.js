import { html, when, ref } from '../../@microsoft/fast-element/dist/esm/index.js';
import { startSlotTemplate, endSlotTemplate } from '../../utils/start-end-template.js';

function numberFieldTemplate() {
    return html `
		<template
			density="${(x) => x.density}"
			is-success="${(x) => x.isSuccess}"
			label="${(x) => (x.label ? x.label : null)}"
			instructional-text="${(x) => (x.instructionalText ? x.instructionalText : null)}"
			optional-text="${(x) => (x.optionalText ? x.optionalText : null)}"
			invalid="${(x) => x.invalid}"
			success-aria-label="${(x) => x.successAriaLabel}"
			error-aria-label="${(x) => x.errorAriaLabel}"
			a11y-aria-description="${(x) => x.a11yAriaDescription}"
			required="${(x) => x.required}"
			required-text="${(x) => x.requiredText}"
		>
			<div class="label-container" part="label-container">
				<label for="${(x) => x.id}" class="label" part="label" id="label-${(x) => x.id}">
					${(x) => x.label}${when((x) => x.required, html `<span class="required-text" part="required-text" aria-hidden="true"
							>${(x) => x.requiredText === '*' ? `${x.requiredText}` : ` ${x.requiredText}`}
						</span>`)}
				</label>
				<slot class="help-text" part="help-text" name="label-end"></slot>
				<span class="optional-text" part="optional-text" id="optional-${(x) => x.id}">
					${(x) => x.optionalText}
				</span>
				<p
					class="instructional-text"
					part="instructional-text"
					id="instructional-${(x) => x.id}"
				>
					${(x) => x.instructionalText}
				</p>
			</div>
			<div class="root" part="root">
				${startSlotTemplate()}
				<input
					id="${(x) => x.id}"
					name="${(x) => x.name}"
					class="control"
					part="control"
					?optional-text="${(x) => x.optionalText}"
					@input="${(x) => x.handleTextInput()}"
					@change="${(x) => x.handleChange()}"
					@keydown="${(x, c) => x.handleKeyDown(c.event)}"
					@blur="${(x) => x.handleBlur()}"
					?autofocus="${(x) => x.autofocus}"
					?disabled="${(x) => x.disabled}"
					?invalid="${(x) => x.invalid}"
					list="${(x) => x.list}"
					maxlength="${(x) => x.maxlength}"
					minlength="${(x) => x.minlength}"
					placeholder="${(x) => x.placeholder}"
					?readonly="${(x) => x.readOnly}"
					?required="${(x) => x.required}"
					size="${(x) => x.size}"
					type="number"
					inputmode="numeric"
					min="${(x) => x.min}"
					aria-valuemin="${(x) => x.min}"
					max="${(x) => x.max}"
					aria-valuemax="${(x) => x.max}"
					step="${(x) => x.step}"
					aria-valuenow="${(x) => x.value}"
					aria-atomic="${(x) => x.ariaAtomic}"
					aria-autocomplete="${(x) => x.ariaAutoComplete}"
					aria-busy="${(x) => x.ariaBusy}"
					aria-controls="${(x) => x.ariaControls}"
					aria-current="${(x) => x.ariaCurrent}"
					aria-describedby="${(x) => x.ariaDescribedbyIds.length > 0 ? x.ariaDescribedbyIds : null}"
					aria-details="${(x) => x.ariaDetails}"
					aria-disabled="${(x) => x.ariaDisabled}"
					aria-flowto="${(x) => x.ariaFlowto}"
					aria-haspopup="${(x) => x.ariaHaspopup}"
					aria-hidden="${(x) => x.ariaHidden}"
					aria-invalid="${(x) => x.ariaInvalid || Boolean(x.invalid)}"
					aria-keyshortcuts="${(x) => x.ariaKeyshortcuts}"
					aria-label="${(x) => x.ariaLabel}"
					aria-labelledby="${(x) => x.ariaLabelledby ? x.ariaLabelledby : x.ariaLabelledbyIds}"
					aria-live="${(x) => x.ariaLive}"
					aria-owns="${(x) => x.ariaOwns}"
					aria-relevant="${(x) => x.ariaRelevant}"
					aria-roledescription="${(x) => x.ariaRoledescription}"
					autocomplete="${(x) => x.autocomplete}"
					:is-success="${(x) => x.isSuccess && !x.invalid}"
					validation-message="${(x) => x.validationMessage}"
					${ref('control')}
				/>
				<div class="controls" part="controls">
					${when((x) => !x.hideStep && !x.readOnly && !x.disabled, html `
							<div
								class="step-up step-controls"
								part="step-up"
								@click="${(x) => x.stepUp()}"
							>
								<saf-icon
									part="step-up-icon"
									size="12"
									appearance="solid"
									icon-name="chevron-up"
								></saf-icon>
							</div>
							<div
								class="step-down step-controls"
								part="step-down"
								@click="${(x) => x.stepDown()}"
							>
								<saf-icon
									part="step-down-icon"
									size="12"
									appearance="solid"
									icon-name="chevron-down"
								></saf-icon>
							</div>
						`)}
				</div>
				${endSlotTemplate()}
			</div>
			${when((x) => x.isSuccess && !x.invalid, html `
					<div class="validation success" part="success">
						<slot id="status-${(x) => x.id}" name="success">
							<saf-icon
								class="success-icon"
								part="success-icon"
								icon-name="circle-check"
								appearance="solid"
								color="var(--saf-color-status-success-strong)"
								aria-label="${(x) => x.successAriaLabel}"
								presentation="false"
							>
							</saf-icon>
							<span part="message" class="message">
								${(x) => x.validationMessage}
							</span>
						</slot>
					</div>
				`)}
			${when((x) => x.invalid, html `
					<div class="validation error" part="error">
						<slot id="status-${(x) => x.id}" name="error">
							<saf-icon
								class="error-icon"
								part="error-icon"
								icon-name="hexagon-exclamation"
								appearance="solid"
								color="var(--saf-color-status-error-strong)"
								presentation="false"
								aria-label="${(x) => x.errorAriaLabel}"
							>
							</saf-icon>
							<span part="message" class="message">
								${(x) => x.validationMessage}
							</span>
						</slot>
					</div>
				`)}
			${when((x) => x.a11yAriaDescription, html ` <span
					class="a11y-aria-description"
					part="a11y-aria-description"
					id="a11y-aria-description"
				>
					${(x) => x.a11yAriaDescription}
				</span>`)}
		</template>
	`;
}

export { numberFieldTemplate };
