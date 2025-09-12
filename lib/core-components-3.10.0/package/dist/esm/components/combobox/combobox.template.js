import { html, when, ref, slotted, elements } from '../../@microsoft/fast-element/dist/esm/index.js';
import { Listbox } from '../listbox/listbox.js';

const comboboxTemplate = () => html `
	<template
		tabindex="${(x) => (x.disabled ? null : '0')}"
		?disabled="${(x) => x.disabled}"
		?open="${(x) => x.open}"
		@focusout="${(x, c) => x.focusoutHandler(c.event)}"
		@click="${(x, c) => x.clickHandler(c.event)}"
		@keydown="${(x, c) => x.keydownHandler(c.event)}"
	>
		<div class="label-container" part="label-container">
			<slot name="label">
				<label part="label" for="${(x) => x.id}" id="label-${(x) => x.id}" class="label">
					${(x) => x.label}${when((x) => x.required, html `<span class="required-text" part="required-text" aria-hidden="true"
							>${(x) => x.requiredText}
						</span>`)}
				</label>
			</slot>
			<span part="optional-text" class="optional-text" id="optional-${(x) => x.id}">
				${(x) => x.optionalText}
			</span>
			<p
				part="instructional-text"
				id="instructional-${(x) => x.id}"
				class="instructional-text"
			>
				${(x) => x.instructionalText}
			</p>
		</div>
		<div class="root" part="root">
			<slot name="root">
				<slot name="start"></slot>

				<slot name="control">
					<input
						id="${(x) => x.id}"
						class="control ${(x) => (x.isSuccess ? 'is-success' : '')}"
						part="control"
						role="combobox"
						type="text"
						autocomplete="${(x) => { var _a; return (_a = x.browserAutocomplete) !== null && _a !== void 0 ? _a : 'off'; }}"
						aria-label="${(x) => x.computedAriaLabel}"
						aria-activedescendant="${(x) => x.ariaActiveDescendant || x.ariaActiveDescendantComputed}"
						aria-autocomplete="${(x) => x.ariaAutoComplete || x.ariaAutocompleteComputed}"
						aria-controls="${(x) => x.ariaControls}"
						aria-invalid="${(x) => x.ariaInvalid || Boolean(x.invalid)}"
						aria-describedby="${(x) => x.ariaDescribedbyIds.length > 0 ? x.ariaDescribedbyIds : null}"
						aria-expanded="${(x) => x.ariaExpanded}"
						aria-haspopup="listbox"
						aria-required="${(x) => x.required}"
						aria-disabled="${(x) => x.ariaDisabled}"
						aria-readonly="${(x) => x.readonly}"
						?required="${(x) => x.required}"
						?disabled="${(x) => x.disabled}"
						placeholder="${(x) => x.placeholder}"
						?readonly="${(x) => x.readonly}"
						:value="${(x) => x.value}"
						@input="${(x, c) => x.inputHandler(c.event)}"
						${ref('control')}
					/>
				</slot>

				<slot name="end"></slot>

				${when((x) => x.loading, html `
						<div class="loading" part="loading">
							<slot name="loading">
								<saf-progress-ring
									aria-label="${(x) => x.progressRingAriaLabel}"
									announce
									indeterminate="true"
									progress-size="small"
								/>
							</slot>
						</div>
					`)}
				${when((x) => x.clearable, html `
						<div part="clear" class="clear">
							<slot name="clear">
								<saf-button
									part="clear-button"
									class="clear-button"
									icon-only
									a11y-aria-label=${(x) => `Clear ${x.label}`}
									appearance="tertiary"
									density="${(x) => x.density}"
									?disabled="${(x) => x.disabled}"
									@click="${(x, c) => x.clearHandler(c.event)}"
								>
									<saf-icon icon-name="xmark-large" />
								</saf-button>
							</slot>
						</div>
					`)}

				<div part="indicator" class="indicator">
					<slot name="indicator">
						<saf-icon icon-name="chevron-down" />
					</slot>
				</div>
			</slot>
		</div>

		<!-- default slot for options -->
		<div
			part="listbox"
			tabindex="-1"
			id="listbox"
			aria-label="${(x) => (x.label ? x.label : x.computedAriaLabel)}"
			aria-multiselectable="${(x) => x.multiple}"
			class="listbox"
			role="listbox"
			?disabled="${(x) => x.disabled}"
			?hidden="${(x) => !x.open || !x.hasSlottedOptions}"
			${ref('listbox')}
			@scroll="${(x, c) => x.handleScroll(c.event)}"
		>
			<slot
				name="empty-option"
				${ref('emptySlot')}
				${slotted({
    property: 'slottedEmptyOption',
})}
			>
				${when((x) => x.searchOffline && x.empty, html ` <saf-option disabled> ${(x) => x.emptyOptionText} </saf-option> `)}
			</slot>
			<div ${ref('topSpacer')}></div>
			<slot
				${slotted({
    filter: Listbox.slottedOptionFilter,
    flatten: true,
    property: 'slottedOptions',
})}
			></slot>
			<div ${ref('bottomSpacer')}></div>
		</div>

		<div
			role="listbox"
			id="listbox-proxy"
			class="listbox-proxy"
			aria-label="${(x) => (x.label ? x.label : x.computedAriaLabel)}"
			aria-describedby="${(x) => (x.multiple ? 'a11y-listbox-description' : null)}"
			aria-multiselectable="${(x) => x.multiple}"
			?disabled="${(x) => x.disabled}"
			?hidden="${(x) => !x.open || !x.hasSlottedOptions}"
			${ref('listboxProxy')}
		></div>
		<div id="a11y-listbox-description" class="a11y-listbox-description">
			${(x) => x.a11yKeyboardHelp}
		</div>

		${when((x) => x.isSuccess && !x.invalid, html `
				<div role="status" part="success" class="validation success">
					<slot name="success" id="status-${(x) => x.id}-success">
						<saf-icon
							part="success-icon"
							class="success-icon"
							icon-name="circle-check"
							appearance="solid"
							color="var(--saf-color-status-success-strong)"
							presentation="false"
							aria-label="${(x) => x.successAriaLabel}"
						></saf-icon>
						<span part="message" class="message">${(x) => x.validationMessage}</span>
					</slot>
				</div>
			`)}
		${when((x) => x.invalid, html `
				<div role="status" part="error" class="validation error">
					<slot name="error" id="status-${(x) => x.id}-error">
						<saf-icon
							part="error-icon"
							class="error-icon"
							icon-name="hexagon-exclamation"
							appearance="solid"
							color="var(--saf-color-status-error-strong)"
							presentation="false"
							aria-label="${(x) => x.errorAriaLabel}"
						></saf-icon>
						<span part="message" class="message">${(x) => x.validationMessage}</span>
					</slot>
				</div>
			`)}

		<saf-sr-only id="${(x) => x.id}-a11y-aria-description" part="a11y-aria-description"
			>${(x) => x.a11yAriaDescription}</saf-sr-only
		>

		${when((x) => x.multiple, html `
				<div
					part="chips"
					class="chips ${(x) => { var _a; return (((_a = x.slottedChips) === null || _a === void 0 ? void 0 : _a.length) ? 'has-chips' : ''); }}"
					role="group"
					aria-label=${(x) => `${x.label} selected`}
				>
					<slot
						name="chips"
						id="${(x) => x.id}-selected"
						${slotted({
    property: 'slottedChips',
    filter: elements('saf-chip'),
})}
					></slot>
				</div>
			`)}
	</template>
`;

export { comboboxTemplate };
