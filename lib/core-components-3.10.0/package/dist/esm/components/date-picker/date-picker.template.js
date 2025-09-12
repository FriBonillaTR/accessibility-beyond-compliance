import { html, ref, when } from '../../@microsoft/fast-element/dist/esm/index.js';
import { DatePicker } from './date-picker.js';
import { format } from '@saffron/date-fns';

const datePickerTemplate = () => html `
	<template tabindex="${(x) => (x.disabled ? null : '0')}">
		<saf-button-embedded name="datepicker">
			<saf-date-masked-input
				id="${(x) => x.id}"
				class="masked-input"
				part="masked-input"
				label="${(x) => x.label}"
				instructional-text="${(x) => (x.instructionalText ? x.instructionalText : null)}"
				optional-text="${(x) => { var _a; return (_a = x.optionalText) !== null && _a !== void 0 ? _a : null; }}"
				?readonly="${(x) => x.readOnly}"
				?disabled="${(x) => x.disabled}"
				?required="${(x) => x.required}"
				required-text="${(x) => x.requiredText}"
				is-success="${(x) => x.isSuccess}"
				invalid="${(x) => x.invalid}"
				validation-message="${(x) => x.validationMessage}"
				autocomplete="off"
				min-date="${(x) => x.minDate}"
				max-date="${(x) => x.maxDate}"
				autocorrect="${(x) => x.autocorrect}"
				format="${(x) => x.format}"
				@input="${(x, c) => x.onInput(c.event)}"
				@focusout=${(x, c) => {
    c.event.stopPropagation();
}}
				@sections-changed=${(x, c) => x.onSectionsChanged(c.event)}
				${ref('maskedInput')}
			>
			</saf-date-masked-input>

			<saf-button
				a11y-aria-label="${(x) => x.openPickerAriaLabel}"
				appearance="tertiary"
				icon-only
				@click=${(x) => x.onCalendarIconClick()}
				aria-haspopup="dialog"
				aria-controls="flyout"
				aria-expanded="${(x) => x.open}"
				?disabled="${(x) => x.disabled}"
				${ref('calendarButton')}
			>
				<saf-icon icon-name="calendar-days" appearance="light"></saf-icon>
			</saf-button>
		</saf-button-embedded>

		${when(
// this check ensures that anchored region is only rendered when the component is connected
// and the anchor element is available
(x) => x.$fastController.isConnected, html `
				<saf-anchored-region
					:anchorElement="${(x) => x.getAnchorElement()}"
					auto-update-mode="auto"
					vertical-positioning-mode="dynamic"
					vertical-default-position="bottom"
					horizontal-positioning-mode="dynamic"
					horizontal-inset="true"
					horizontal-default-position="${(x) => x.horizontalDefaultPosition}"
					fixed-placement="true"
					style="padding: var(--saf-spacing-2) 0;"
				>
					<saf-calendar
						?open="${(x) => x.open}"
						format="${(x) => x.format}"
						selected-date="${(x) => x.value ? format(x.value, DatePicker.dbFormat) : ''}"
						locale="${(x) => x.locale}"
						min-date="${(x) => x.minDate}"
						max-date="${(x) => x.maxDate}"
						first-day-of-the-week="${(x) => x.firstDayOfTheWeek}"
						default-picker-date="${(x) => x.defaultPickerDate || x.defaultPickerDateFromInputSections}"
						label="${(x) => x.label}"
						date-picker-aria-label="${(x) => x.datePickerAriaLabel}"
						month-select-aria-label="${(x) => x.monthSelectAriaLabel}"
						year-select-aria-label="${(x) => x.yearSelectAriaLabel}"
						prev-month-aria-label="${(x) => x.prevMonthAriaLabel}"
						next-month-aria-label="${(x) => x.nextMonthAriaLabel}"
						@date-selected="${(x, c) => x.onDaySelect(c.event)}"
						@close="${(x, c) => x.onClickAway(c.event)}"
						:getDateDisabled="${(x) => x.getDateDisabled}"
						${ref('calendar')}
					></saf-calendar>
				</saf-anchored-region>
			`)}
	</template>
`;

export { datePickerTemplate };
