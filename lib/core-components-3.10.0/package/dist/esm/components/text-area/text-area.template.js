import { html, when, ref } from '../../@microsoft/fast-element/dist/esm/index.js';
import { startSlotTemplate, endSlotTemplate } from '../../utils/start-end-template.js';

const textAreaTemplate = () => html `<template
	density="${(x) => x.density}"
	label="${(x) => (x.label ? x.label : null)}"
	instructional-text="${(x) => (x.instructionalText ? x.instructionalText : null)}"
	optional-text="${(x) => (x.optionalText ? x.optionalText : null)}"
	message="${(x) => x.validationMessage}"
	invalid="${(x) => x.invalid}"
	error-aria-label="${(x) => x.errorAriaLabel}"
	resize="${(x) => x.resize}"
>
	<div class="label-container" part="label-container">
		<label for="${(x) => x.id}" part="label" class="label" id="label-${(x) => x.id}">
			${(x) => x.label}${when((x) => x.required, html `<span class="required-text" part="required-text" aria-hidden="true"
					>${(x) => (x.requiredText === '*' ? `${x.requiredText}` : ` ${x.requiredText}`)}
				</span>`)}
		</label>
		<slot class="help-text" part="help-text" name="label-end"></slot>
		<span class="optional-text" part="optional-text" id="optional-${(x) => x.id}">
			${(x) => x.optionalText}
		</span>
		<p id="instructional-${(x) => x.id}" part="instructional-text" class="instructional-text">
			${(x) => x.instructionalText}
		</p>
	</div>
	${startSlotTemplate()}
	<textarea
		id="${(x) => x.id}"
		?optional-text="${(x) => x.optionalText}"
		part="control"
		class="${(x) => (x.invalid ? 'control invalid' : 'control valid')}"
		id="${(x) => x.id}"
		?autofocus="${(x) => x.autofocus}"
		cols="${(x) => x.cols}"
		?disabled="${(x) => x.disabled}"
		form="${(x) => x.form}"
		list="${(x) => x.list}"
		maxlength="${(x) => x.maxlength}"
		minlength="${(x) => x.minlength}"
		name="${(x) => x.name}"
		:placeholder="${(x) => { var _a; return (_a = x.placeholder) !== null && _a !== void 0 ? _a : ''; }}"
		?readonly="${(x) => x.readOnly}"
		?required="${(x) => x.required}"
		resize="${(x) => x.resize}"
		rows="${(x) => (x.rows ? x.rows : '2')}"
		?spellcheck="${(x) => x.spellcheck}"
		:value="${(x) => x.value}"
		autocomplete="${(x) => x.autocomplete}"
		aria-atomic="${(x) => x.ariaAtomic}"
		aria-autocomplete="${(x) => x.ariaAutoComplete}"
		aria-busy="${(x) => x.ariaBusy}"
		aria-controls="${(x) => x.ariaControls}"
		aria-current="${(x) => x.ariaCurrent}"
		aria-describedby="${(x) => (x.ariaDescribedbyIds.length > 0 ? x.ariaDescribedbyIds : null)}"
		aria-details="${(x) => x.ariaDetails}"
		aria-disabled="${(x) => x.ariaDisabled}"
		aria-flowto="${(x) => x.ariaFlowto}"
		aria-haspopup="${(x) => x.ariaHaspopup}"
		aria-hidden="${(x) => x.ariaHidden}"
		aria-invalid="${(x) => x.ariaInvalid || Boolean(x.invalid)}"
		aria-keyshortcuts="${(x) => x.ariaKeyshortcuts}"
		aria-label="${(x) => x.ariaLabel}"
		aria-labelledby="${(x) => (x.ariaLabelledby ? x.ariaLabelledby : x.ariaLabelledbyIds)}"
		aria-live="${(x) => x.ariaLive}"
		aria-owns="${(x) => x.ariaOwns}"
		aria-required="${(x) => x.required}"
		aria-relevant="${(x) => x.ariaRelevant}"
		aria-roledescription="${(x) => x.ariaRoledescription}"
		validation-message="${(x) => x.validationMessage}"
		@input="${(x) => x.handleTextInput()}"
		@change="${(x) => x.handleChange()}"
		formId="${(x) => x.formId}"
		@keyup="${(x) => x.keyupHandler()}"
		${ref('control')}
	></textarea>
	${endSlotTemplate()}
	${when((x) => x.a11yAriaDescription, html ` <span
			class="a11y-aria-description"
			part="a11y-aria-description"
			id="a11y-aria-description"
		>
			${(x) => x.a11yAriaDescription}
		</span>`)}
	<div class="validation-counter-wrapper">
		<div class="validation" part="validation">
			${when((x) => x.invalid, html `
					<div class="validation error" part="error">
						<slot id="status-${(x) => x.id}" name="error">
							<saf-icon
								part="error-icon"
								class="error-icon"
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
		</div>
		${when((x) => x.showRemainingText, html ` <div class="remaining-text-counter-wrapper" part="remaining-text-counter-wrapper">
				<slot name="charactercount">
					${(x) => x.remainingCharactersCounter}
					${(x) => x.remainingCharactersTextDefault}

					<div id="charactercount-reader" aria-live="polite" aria-atomic="true">
						<saf-sr-only id="sr-only">
							${(x) => x.remainingCharactersCounterReader}
							${(x) => x.remainingCharactersTextDefault}</saf-sr-only
						>
					</div>
				</slot>
			</div>`)}
	</div>
</template> `;

export { textAreaTemplate };
