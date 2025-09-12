import { html, when, ref, repeat } from '../../../@microsoft/fast-element/dist/esm/index.js';

const calendarTemplate = () => html `
	<template>
		${when((x) => x.open, html `
				<saf-click-away-listener
					@click-away="${(x, c) => x.onClickAway(c.event)}"
				>
					<div
						@keydown="${(x, c) => x.onPickerKeyPress(c.event)}"
						role="dialog"
						aria-modal="true"
						class="calendar"
						part="calendar"
						aria-label="${(x) => x.label} ${(x) => x.datePickerAriaLabel}"
					>
						<saf-sr-only
							><span aria-live="polite" aria-atomic="false" id="date-heading">
								${(x) => `${x.getFullMonthName(x.calendarMonth)} ${x.calendarYear}`}
							</span></saf-sr-only
						>
						<div class="controls" part="controls">
							<saf-button
								nested-item
								density="compact"
								appearance="tertiary"
								icon-only
								a11y-aria-label="${(x) => x.prevMonthAriaLabel}"
								?disabled="${(x) => x.disabledPrevMonth}"
								month-arrow
								prev-month
								@click="${(x, c) => x.onCalendarChange(false, c.event)}"
							>
								<saf-icon
									icon-name="chevron-left"
									size="12"
									appearance="solid"
								></saf-icon>
							</saf-button>
							<saf-select
								density="compact"
								aria-label="${(x) => String(x.monthSelectAriaLabel)}"
								month-select
								:value=${(x) => String(x.calendarMonth)}
								@change=${(x, c) => {
    x.onMonthChange(Number(c.event.target.value));
}}
								@input="${(x, c) => c.event.stopPropagation()}"
								@click="${(x) => x.onMonthSelectClick()}"
								${ref('monthSelect')}
							>
								${repeat((x) => x.months, html ` <saf-option
										id="opt-month-${(x) => x.index}"
										:value=${(x) => String(x.index)}
									>
										${(x) => x.label}
									</saf-option>`)}
							</saf-select>
							<saf-select
								density="compact"
								aria-label="${(x) => x.yearSelectAriaLabel}"
								year-select
								:value=${(x) => String(x.calendarYear)}
								@change=${(x, c) => {
    x.onYearChange(Number(c.event.target.value));
}}
								@input="${(x, c) => c.event.stopPropagation()}"
								@click="${(x) => x.onYearSelectClick()}"
								${ref('yearSelect')}
							>
								${repeat((x) => x.years, html ` <saf-option
										id="opt-year-${(x) => x}"
										:value=${(x) => String(x)}
									>
										${(x) => x}
									</saf-option>`)}
							</saf-select>
							<saf-button
								nested-item
								density="compact"
								appearance="tertiary"
								icon-only
								a11y-aria-label="${(x) => x.nextMonthAriaLabel}"
								?disabled="${(x) => x.disabledNextMonth}"
								month-arrow
								next-month
								@click="${(x, c) => x.onCalendarChange(true, c.event)}"
							>
								<saf-icon
									icon-name="chevron-right"
									size="12"
									appearance="solid"
								></saf-icon>
							</saf-button>
						</div>
						<div class="month" part="month">
							<table
								class="month-table"
								part="month-table"
								role="grid"
								aria-labelledby="date-heading"
							>
								<thead>
									<tr class="week" part="week">
										${repeat((x) => x.weekdays, html `<th
												class="weekday"
												part="weekday"
												aria-label="${(x) => x.full}"
											>
												${(x) => x.short}
											</th>`)}
									</tr>
								</thead>
								<tbody>
									${repeat((x) => x.daysMatrix, html `<tr class="week" part="week">
											${repeat((x) => x, html ` <td
													class="date"
													part="date"
													role="${(x) => x.day > 0 ? 'none' : 'gridcell'}"
												>
													${when((x) => x.day > 0, html `<saf-button
															nested-item
															a11y-role="gridcell"
															id="${(x) => x.formatted}"
															density="compact"
															appearance="tertiary"
															shape="circle"
															icon-only
															data-value="${(x) => x.formatted}"
															aria-label="${(x) => x.dateText}"
															@click="${(x) => x.onDaySelect()}"
															?disabled="${(x) => x.disabled}"
															?selected="${(x) => x.selected}"
															aria-selected="${(x) => x.selected ? 'true' : 'false'}"
															aria-current="${(x) => x.today ? 'date' : ''}"
															class="${(x) => x.selected ? 'selected ' : ''}${(x) => (x.today ? 'today' : '')}"
															>${(x) => x.day}</saf-button
														>`)}
												</td>`)}
										</tr>`)}
								</tbody>
							</table>
						</div>
					</div>
				</saf-click-away-listener>
			`)}
	</template>
`;

export { calendarTemplate };
