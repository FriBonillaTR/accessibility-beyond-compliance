import { html, when, ref, slotted, elements } from '../../@microsoft/fast-element/dist/esm/index.js';

/* eslint-disable no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function textInputTemplate() {
    return html `<template
		density="${(x) => x.density}"
		is-success="${(x) => x.isSuccess}"
		invalid="${(x) => x.invalid}"
		label="${(x) => (x.label ? x.label : null)}"
		instructional-text="${(x) => (x.instructionalText ? x.instructionalText : null)}"
		optional-text="${(x) => (x.optionalText ? x.optionalText : null)}"
		success-aria-label="${(x) => x.successAriaLabel}"
		error-aria-label="${(x) => x.errorAriaLabel}"
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
		<div part="root" class="root">
			<slot name="start"></slot>
			<input
				id="${(x) => x.id}"
				name="${(x) => x.name}"
				class="${(x) => (x.invalid ? 'invalid' : 'valid')} control"
				@input="${(x) => x.handleTextInput()}"
				@change="${(x) => x.handleChange()}"
				part="control"
				:invalid="${(x) => x.invalid}"
				:inputmode="${(x) => x.inputMode}"
				:placeholder="${(x) => { var _a; return (_a = x.placeholder) !== null && _a !== void 0 ? _a : ''; }}"
				autocomplete="${(x) => x.autocomplete}"
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
				?autofocus="${(x) => x.autofocus}"
				?disabled="${(x) => x.disabled}"
				?readonly="${(x) => x.readOnly}"
				?required="${(x) => x.required}"
				?spellcheck="${(x) => x.spellcheck}"
				list="${(x) => x.list}"
				maxlength="${(x) => x.maxlength}"
				minlength="${(x) => x.minlength}"
				name="${(x) => x.name}"
				pattern="${(x) => x.pattern}"
				size="${(x) => x.size}"
				tabindex="${(x) => (x.disabled ? null : 0)}"
				type="${(x) => x.type}"
				validation-message="${(x) => x.validationMessage}"
				enterkeyhint="${(x) => x.enterKeyHint}"
				:value="${(x) => x.value}"
				:is-success="${(x) => x.isSuccess && !x.invalid}"
				${ref('control')}
			/>
			<slot name="end"></slot>

			<slot
				name="data"
				${slotted({
        property: 'slottedData',
        filter: elements('datalist'),
    })}
			></slot>

			<div class="dataLists" ${ref('dataLists')}></div>

			${when((x) => x.a11yAriaDescription, html ` <span
					class="a11y-aria-description"
					part="a11y-aria-description"
					id="a11y-aria-description"
				>
					${(x) => x.a11yAriaDescription}
				</span>`)}
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
						<span part="message" class="message"> ${(x) => x.validationMessage} </span>
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
							aria-label="${(x) => x.errorAriaLabel}"
							presentation="false"
							size="16"
						>
						</saf-icon>
						<span part="message" class="message"> ${(x) => x.validationMessage} </span>
					</slot>
				</div>
			`)}
	</template> `;
}

export { textInputTemplate };
