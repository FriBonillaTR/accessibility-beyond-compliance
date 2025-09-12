import { html, when, ref, slotted } from '../../@microsoft/fast-element/dist/esm/index.js';
import { startSlotTemplate, endSlotTemplate } from '../../utils/start-end-template.js';
import { Listbox } from '../listbox/listbox.js';

function labelSlot() {
    return html `<label
		slot="label-text"
		part="label"
		id="label-${(x) => x.id}"
		for="${(x) => x.id}"
		class="label"
	>
		${(x) => x.label}${when((x) => x.required, html `<span class="required-text" part="required-text" aria-hidden="true"
				>${(x) => (x.requiredText === '*' ? `${x.requiredText}` : ` ${x.requiredText}`)}
			</span>`)}
	</label>`;
}
function selectAriaLabelSlot() {
    return html `<span slot="select-aria-label" id="select-aria-label-${(x) => x.id}">
		${(x) => x.selectAriaLabel}
	</span>`;
}
function optionalTextSlot() {
    return html `<span
		slot="optional-text"
		part="optional-text"
		id="optional-${(x) => x.id}"
		class="optional-text"
	>
		${(x) => x.optionalText}
	</span>`;
}
function instructionalTextSlot() {
    return html `<span
		slot="instructional-text"
		part="instructional-text"
		id="instructional-${(x) => x.id}"
	>
		${(x) => x.instructionalText}
	</span>`;
}
function errorLabelSlot() {
    return html `<span slot="error-label" part="error-label" id="error-label-${(x) => x.id}">
		${(x) => x.errorAriaLabel}
	</span>`;
}
function successLabelSlot() {
    return html `<span
		slot="success-label"
		part="success-label"
		id="success-label-${(x) => x.id}"
	>
		${(x) => x.successAriaLabel}
	</span>`;
}
function validationMessageSlot() {
    return html `<span
		slot="validation-message"
		part="validation-message"
		id="validation-message-${(x) => x.id}"
	>
		${(x) => x.validationMessage}
	</span>`;
}
/**
 * The template for the {@link @saffron/core-components#(Select:class)} component.
 * @public
 */
function selectTemplate() {
    return html `
		<template
			aria-activedescendant="${(x) => x.ariaActiveDescendant}"
			aria-controls="${(x) => x.ariaControls}"
			aria-disabled="${(x) => x.ariaDisabled}"
			aria-expanded="${(x) => x.ariaExpanded}"
			aria-haspopup="${(x) => (x.collapsible ? 'listbox' : null)}"
			aria-multiselectable="${(x) => x.ariaMultiSelectable}"
			aria-describedby=${(x) => x.computedAriaDescribedby}
			aria-labelledby=${(x) => x.computedAriaLabelledby}
			aria-required="${(x) => x.required}"
			aria-invalid="${(x) => x.ariaInvalid || Boolean(x.invalid)}"
			autocomplete="${(x) => x.autocomplete}"
			?open="${(x) => x.open}"
			role="combobox"
			tabindex="${(x) => (!x.disabled ? '0' : null)}"
			@focusin="${(x, c) => x.focusinHandler(c.event)}"
			@focusout="${(x, c) => x.focusoutHandler(c.event)}"
			@keydown="${(x, c) => x.keydownHandler(c.event)}"
			@click="${(x, c) => x.clickHandler(c.event)}"
			prefilter="${(x) => x.prefilter}"
		>
			<div class="label-container" part="label-container" aria-hidden="true">
				<slot name="label-text"> ${labelSlot()} </slot>

				<slot class="help-text" part="help-text" name="label-end"></slot>

				<slot name="optional-text"> ${optionalTextSlot()}</slot>
				<slot name="select-aria-label" class="a11y-aria-description">
					${selectAriaLabelSlot()}
				</slot>
				<p class="instructional-text" part="instructional-text">
					<slot name="instructional-text"> ${instructionalTextSlot()} </slot>
				</p>
				<slot name="error-label" class="a11y-aria-description"> ${errorLabelSlot()}</slot>
				<slot name="success-label" class="a11y-aria-description">
					${successLabelSlot()}</slot
				>
				<slot name="validation-message" class="a11y-aria-description">
					${validationMessageSlot()}</slot
				>
			</div>
			<div
				part="root"
				class="root"
				@mousedown="${(x, c) => x.mousedownHandler(c.event)}"
			>
				<div
					style="display: ${(x) => (x.collapsible ? 'flex' : 'none')};"
					class="control"
					part="control"
					?disabled="${(x) => x.disabled}"
					?required="${(x) => x.required}"
					required-text="${(x) => x.requiredText}"
					invalid="${(x) => x.invalid}"
					aria-disabled="${(x) => x.ariaDisabled}"
					is-success="${(x) => x.isSuccess && !x.invalid}"
					${ref('control')}
				>
					${startSlotTemplate()}
					<slot name="button-container">
						${when((x) => x.prefilter, html `
								<slot name="start">
									<div class="prefilter-icon" part="prefilter-icon">
										<saf-icon
											presentation="true"
											size="16"
											icon-name="filter"
											class="prefilter-icon-svg"
											part="prefilter-icon-svg"
										></saf-icon>
									</div>
								</slot>
							`)}
						<div class="selected-value" part="selected-value" ${ref('displayValueEl')}>
							<slot name="selected-value">${(x) => x.displayValue}</slot>
						</div>
						<div aria-hidden="true" class="indicator" part="indicator">
							<slot name="indicator">
								<saf-icon
									size="${(x) => (x.prefilter ? '16' : '12')}"
									icon-name="chevron-down"
									appearance="solid"
									class="select-indicator"
									part="select-indicator"
								></saf-icon>
							</slot>
						</div>
					</slot>
					${endSlotTemplate()}
				</div>
				<div
					class="listbox"
					id="${(x) => x.listboxId}"
					part="listbox"
					role="listbox"
					?disabled="${(x) => x.disabled}"
					?hidden="${(x) => (x.collapsible ? !x.open : false)}"
					${ref('listbox')}
				>
					<div class="listbox-scroll" part="listbox-scroll">
						<slot
							${slotted({
        filter: Listbox.slottedOptionFilter,
        flatten: true,
        property: 'slottedOptions',
    })}
						></slot>
					</div>
				</div>
			</div>
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
			${when((x) => !x.invalid && x.isSuccess, html `
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
		</template>
	`;
}

export { errorLabelSlot, instructionalTextSlot, labelSlot, optionalTextSlot, selectAriaLabelSlot, selectTemplate, successLabelSlot, validationMessageSlot };
