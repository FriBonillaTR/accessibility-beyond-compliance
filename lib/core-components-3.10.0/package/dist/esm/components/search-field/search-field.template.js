import { html, slotted, ref, when, elements } from '../../@microsoft/fast-element/dist/esm/index.js';

const searchTemplate = () => html `
	<template
		density="${(x) => x.density}"
		embedded-item
		id="${(x) => x.id}"
		label="${(x) => (x.label ? x.label : null)}"
		instructional-text="${(x) => (x.instructionalText ? x.instructionalText : null)}"
		a11y-aria-description="${(x) => x.a11yAriaDescription}"
	>
		<div class="label-container" part="label-container">
			<label for="${(x) => x.id}" class="label" part="label" id="label-${(x) => x.id}">
				${(x) => x.label}
			</label>

			<slot class="help-text" part="help-text" name="label-end"></slot>

			<p
				class="instructional-text"
				part="instructional-text"
				id="instructional-${(x) => x.id}"
			>
				${(x) => x.instructionalText}
			</p>
		</div>
		<div
			class="container${(x) => x.preFilterSlot && x.preFilterSlot.length > 0 ? ' pre-filter' : ''}"
		>
			<slot
				name="pre-filter"
				${slotted({
    property: 'preFilterSlot',
    filter: elements(),
})}
			></slot>
			<saf-button-embedded>
				<div class="search-wrapper" part="search-wrapper">
					<div class="root" part="root" ${ref('root')}>
						<div class="input-wrapper" part="input-wrapper">
							<input
								class="control control-search"
								part="control"
								id="${(x) => x.id}"
								@input="${(x) => x.handleTextInput()}"
								@change="${(x) => x.handleChange()}"
								?autofocus="${(x) => x.autofocus}"
								?disabled="${(x) => x.disabled}"
								list="${(x) => x.list}"
								maxlength="${(x) => x.maxlength}"
								minlength="${(x) => x.minlength}"
								pattern="${(x) => x.pattern}"
								placeholder="${(x) => x.placeholder}"
								?readonly="${(x) => x.readOnly}"
								?required="${(x) => x.required}"
								size="${(x) => x.size}"
								?spellcheck="${(x) => x.spellcheck}"
								:value="${(x) => x.value}"
								type="search"
								aria-atomic="${(x) => x.ariaAtomic}"
								aria-autocomplete="${(x) => x.ariaAutoComplete}"
								aria-busy="${(x) => x.ariaBusy}"
								aria-controls="${(x) => x.ariaControls}"
								aria-current="${(x) => x.ariaCurrent}"
								aria-describedby="${(x) => x.ariaDescribedbyIds.length > 0 ? x.ariaDescribedbyIds : null}"
								aria-details="${(x) => x.ariaDetails}"
								aria-disabled="${(x) => x.ariaDisabled}"
								aria-errormessage="${(x) => x.ariaErrormessage}"
								aria-flowto="${(x) => x.ariaFlowto}"
								aria-haspopup="${(x) => x.ariaHaspopup}"
								aria-hidden="${(x) => x.ariaHidden}"
								aria-invalid="${(x) => { var _a; return (_a = x.ariaInvalid) !== null && _a !== void 0 ? _a : false; }}"
								aria-keyshortcuts="${(x) => x.ariaKeyshortcuts}"
								aria-label="${(x) => x.ariaLabel}"
								aria-labelledby="${(x) => x.id} instructional-${(x) => x.id}"
								aria-live="${(x) => x.ariaLive}"
								aria-owns="${(x) => x.ariaOwns}"
								aria-relevant="${(x) => x.ariaRelevant}"
								aria-roledescription="${(x) => x.ariaRoledescription}"
								autocomplete="${(x) => x.autocomplete}"
								:searchButtonLabel="${(x) => x.searchButtonLabel}"
								:clearButtonLabel="${(x) => x.clearButtonLabel}"
								${ref('control')}
							/>
							<slot name="clear-button">
								<saf-button
									embedded-item
									appearance="tertiary"
									icon-only=""
									class="clear-button ${(x) => x.value ? '' : 'clear-button__hidden'}"
									part="clear-button"
									@click=${(x) => x.handleClearInput()}
									?disabled="${(x) => !x.value}"
									aria-label="${(x) => x.clearButtonLabel}"
									id="clear-button"
									tabindex="${(x) => (x.value ? '0' : '-1')}"
								>
									<saf-icon part="clear-icon" icon-name="xmark-large"></saf-icon>
									<saf-tooltip
										anchor="clear-button"
										placement=${(x) => x.clearButtonTooltipPlacement}
										>${(x) => x.clearButtonLabel}</saf-tooltip
									>
								</saf-button>
							</slot>

							<slot
								name="data"
								${slotted({
    property: 'slottedData',
    filter: elements('datalist'),
})}
							></slot>
							<div ${ref('dataLists')}></div>
						</div>
					</div>
				</div>
				<saf-button
					class="search-button"
					part="search-button"
					embedded-item
					?disabled="${(x) => x.disabled}"
					type="button"
					appearance="tertiary"
					icon-only=""
					aria-label="${(x) => x.searchButtonLabel}"
					id="search-button"
					@click="${(x) => x.search()}"
				>
					<saf-icon
						part="search-icon"
						appearance="solid"
						icon-name="magnifying-glass"
					></saf-icon>
					${when((x) => !x.hideSearchButtonTooltip, html ` <saf-tooltip
							anchor="search-button"
							placement=${(x) => x.searchButtonTooltipPlacement}
							>${(x) => x.searchButtonLabel}</saf-tooltip
						>`)}
				</saf-button>
			</saf-button-embedded>
		</div>

		${when((x) => x.a11yAriaDescription, html ` <span
				class="a11y-aria-description"
				part="a11y-aria-description"
				id="a11y-aria-description"
			>
				${(x) => x.a11yAriaDescription}
			</span>`)}
	</template>
`;

export { searchTemplate };
