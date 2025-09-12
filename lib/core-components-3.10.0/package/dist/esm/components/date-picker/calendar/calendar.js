import { __decorate } from 'tslib';
import { FASTElement, observable, attr } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { isBefore, isAfter, startOfToday, locales, parse, format, subMonths, addMonths, isSameDay, isWithinInterval, setMonth, setYear, subDays, addDays } from '@saffron/date-fns';
import '../../../utils/index.js';
import { DatePicker } from '../date-picker.js';
import { DatePickerDayOfWeekEnum } from './calendar.options.js';
import { getComponentName } from '@saffron/config';
import { capitalizeFirstLetter } from '../../../utils/string-helpers.js';

/**
 * A class for Calendar
 */
class Calendar extends FASTElement {
    constructor() {
        // ///////////////
        // Refs
        // ///////////////
        super(...arguments);
        // ///////////////
        // Props
        // ///////////////
        /**
         * value as Date for the minimum date.
         * @internal
         * @see min-date
         */
        this.minimumDate = new Date();
        /**
         * value as Date for the minimum date.
         * @internal
         * @see max-date
         */
        this.maximumDate = new Date();
        /**
         * Indicates if arrow for moving to previous month is disabled.
         * @internal
         */
        this.disabledPrevMonth = false;
        /**
         * Indicates if arrow for moving to previous month is disabled.
         * @internal
         */
        this.disabledNextMonth = false;
        /**
         * Current selected date in the picker.
         * value as Date for selectedDate
         * @private
         * @readonly
         * @see selected-date
         */
        this.value = null;
        /**
         * Locale used for calendar.
         * @public
         */
        this.locale = '';
        /**
         * Minimum date to select in format "yyyy-MM-dd".
         * @public
         */
        this.minDate = '1900-01-01';
        /**
         * Maximum date to select in format "yyyy-MM-dd".
         * @public
         */
        this.maxDate = '2099-12-31';
        /**
         * Default date format. If value is not provided or is invalid, the format will be based on the locale.
         * @public
         * @defaultValue computed from locale
         */
        this.format = '';
        /**
         * Denotes the selected date for the picker in the format "yyyy-MM-dd".
         * @public
         */
        this.selectedDate = null;
        /**
         * Shows/hides the date picker.
         *
         * @remarks Current state of the picker view. If true, picker is open and visible.
         * @public
         */
        this.open = false;
        /**
         * Indicates whether the calendar is rendered in a right-to-left (RTL) layout.
         * @internal
         */
        this.isRtl = false;
        /**
         * aria-label for the month select dropdown.
         * @public
         * @a11y
         */
        this.monthSelectAriaLabel = 'Month';
        /**
         * The text appended to the label for the `aria-label` of the dialog.
         * @public
         * @a11y
         */
        this.datePickerAriaLabel = 'date picker';
        /**
         * aria-label for the previous month icon button.
         * @public
         * @a11y
         */
        this.prevMonthAriaLabel = 'Previous month';
        /**
         * aria-label for the next month icon button.
         * @public
         * @a11y
         */
        this.nextMonthAriaLabel = 'Next month';
        /**
         * aria-label for the year select dropdown.
         * @public
         * @a11y
         */
        this.yearSelectAriaLabel = 'Year';
    }
    pickerMonthChanged() {
        if (isBefore(this.pickerMonth, this.minimumDate)) {
            this.pickerMonth = this.minimumDate;
        }
        if (isAfter(this.pickerMonth, this.maximumDate)) {
            this.pickerMonth = this.maximumDate;
        }
        this.daysMatrix = this.getMonthRows(this.pickerMonth, this.firstDayOfTheWeek);
        this.validateMonthsNavigation();
        setTimeout(() => {
            this.calendarMonth = this.pickerMonth.getMonth();
            this.calendarYear = this.pickerMonth.getFullYear();
        }, 50);
    }
    valueChanged() {
        if (this.value) {
            this.pickerMonth = this.value;
        }
        else {
            this.pickerMonth = startOfToday();
        }
    }
    get fnsLocale() {
        return locales[this.locale.replace('-', '')];
    }
    weekdaysShortChanged(prev, next) {
        if (prev && !next) {
            this.weekdaysShort = prev;
            return;
        }
        this.setWeekdays();
    }
    weekdaysFullChanged(prev, next) {
        if (prev && !next) {
            this.weekdaysShort = prev;
            return;
        }
        this.setWeekdays();
    }
    localeChanged() {
        this.validateMonthsNavigation();
        this.setWeekdaysShortAndFull();
        this.setFirstDayOfTheWeek();
    }
    minDateChanged() {
        this.setYearsAndMinMaxDates();
        this.validateMonthsNavigation();
        this.daysMatrix = this.getMonthRows(this.pickerMonth, this.firstDayOfTheWeek);
        this.pickerMonthChanged();
    }
    maxDateChanged() {
        this.setYearsAndMinMaxDates();
        this.validateMonthsNavigation();
        this.daysMatrix = this.getMonthRows(this.pickerMonth, this.firstDayOfTheWeek);
        this.pickerMonthChanged();
    }
    firstDayOfTheWeekChanged() {
        if (this.firstDayOfTheWeek !== undefined) {
            this.daysMatrix = this.getMonthRows(this.pickerMonth, this.firstDayOfTheWeek);
            this.setWeekdays();
        }
    }
    formatChanged() {
        if (this.firstDayOfTheWeek) {
            this.daysMatrix = this.getMonthRows(this.pickerMonth, this.firstDayOfTheWeek);
        }
    }
    selectedDateChanged() {
        this.value = this.selectedDate
            ? parse(this.selectedDate, DatePicker.dbFormat, new Date())
            : null;
    }
    openChanged() {
        if (this.open) {
            this.checkDirection();
            // resetting view to selected month
            if (this.value) {
                this.pickerMonth = this.value;
            }
            else {
                if (this.defaultPickerDate) {
                    this.pickerMonth = parse(this.defaultPickerDate, DatePicker.dbFormat, new Date());
                }
                else {
                    this.pickerMonth = startOfToday();
                }
            }
            this.calendarMonth = this.pickerMonth.getMonth();
            this.calendarYear = this.pickerMonth.getFullYear();
            if (!this.pickerMonth || !this.format)
                return;
            const focusId = format(this.pickerMonth, this.format);
            setTimeout(() => {
                var _a, _b;
                (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(focusId)) === null || _b === void 0 ? void 0 : _b.focus();
            }, 50);
        }
    }
    // ///////////////
    // Methods
    // ///////////////
    setWeekdays() {
        if (!(this.weekdaysFull && this.weekdaysShort))
            return;
        this.weekdays = this.weekdaysShort.map((day, index) => ({
            short: day,
            full: this.weekdaysFull[index],
        }));
        if (this.weekdays && this.firstDayOfTheWeek && this.firstDayOfTheWeek > 0) {
            for (let i = 0; i < this.firstDayOfTheWeek; i++) {
                this.weekdays.push(this.weekdays.shift());
            }
        }
    }
    setWeekdaysShortAndFull() {
        if (!this.locale)
            return;
        // getWeekdaysShort
        this.weekdaysShort = [...Array(7)]
            .map((_, index) => this.fnsLocale.localize.day(index, { width: 'narrow' }))
            .map(capitalizeFirstLetter);
        // getWeekdaysFull
        this.weekdaysFull = [...Array(7)]
            .map((_, index) => this.fnsLocale.localize.day(index, { width: 'wide' }))
            .map(capitalizeFirstLetter);
    }
    setFirstDayOfTheWeek() {
        var _a;
        if (!this.locale)
            return;
        if (this.firstDayOfTheWeek === undefined ||
            this.firstDayOfTheWeek < DatePickerDayOfWeekEnum.Sunday ||
            this.firstDayOfTheWeek > DatePickerDayOfWeekEnum.Saturday) {
            this.firstDayOfTheWeek =
                (_a = this.fnsLocale.options.weekStartsOn) !== null && _a !== void 0 ? _a : DatePickerDayOfWeekEnum.Sunday;
        }
    }
    setYearsAndMinMaxDates() {
        // getYears
        let minYear = 1900;
        let maxYear = 2099;
        const formatted = this.format || DatePicker.dbFormat;
        if (DatePicker.isValidDate(this.minDate, formatted)) {
            this.minimumDate = parse(this.minDate, formatted, new Date());
            minYear = this.minimumDate.getFullYear();
        }
        else {
            // Loading default minDate in format provided
            this.minimumDate = parse('1900-01-01', DatePicker.dbFormat, new Date());
            this.minDate = format(this.minimumDate, DatePicker.dbFormat);
        }
        if (DatePicker.isValidDate(this.maxDate, formatted)) {
            this.maximumDate = parse(this.maxDate, formatted, new Date());
            maxYear = this.maximumDate.getFullYear();
        }
        else {
            // Loading default maxDate in format provided
            this.maximumDate = parse('2099-12-31', DatePicker.dbFormat, new Date());
            this.maxDate = format(this.maximumDate, DatePicker.dbFormat);
        }
        if (!isBefore(this.minimumDate, this.maximumDate)) {
            [this.minimumDate, this.maximumDate] = [this.maximumDate, this.minimumDate];
            [this.minDate, this.maxDate] = [this.maxDate, this.minDate];
            minYear = this.minimumDate.getFullYear();
            maxYear = this.maximumDate.getFullYear();
        }
        this.years = Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i);
    }
    /**
     * Method to get the full month name from a month number.
     * @internal
     */
    getFullMonthName(monthIndex) {
        if (!this.fnsLocale)
            return '';
        return this.fnsLocale.localize.month(monthIndex, {
            width: 'wide',
        });
    }
    /**
     * Function to scroll into selected year in the picker.
     * @private
     */
    scrollToSelectedYear() {
        const selectedOption = this.yearSelect.querySelector(`${getComponentName('saf-option')}[id="opt-year-${this.calendarYear}"]`);
        const focusedOption = this.yearSelect.querySelector(`${getComponentName('saf-option')}[aria-selected="true"]`);
        if (selectedOption) {
            requestAnimationFrame(() => {
                selectedOption.scrollIntoView({ block: 'center' });
            });
        }
        if (focusedOption) {
            requestAnimationFrame(() => {
                focusedOption.scrollIntoView({ block: 'center' });
            });
        }
    }
    /**
     * Function to scroll into selected month in the picker.
     * @internal
     */
    scrollToSelectedMonth() {
        const selectedOption = this.monthSelect.querySelector(`${getComponentName('saf-option')}[id="opt-month-${this.calendarMonth}"]`);
        const focusedOption = this.monthSelect.querySelector(`${getComponentName('saf-option')}[aria-selected="true"]`);
        if (selectedOption) {
            requestAnimationFrame(() => {
                selectedOption.scrollIntoView({ block: 'nearest' });
            });
        }
        if (focusedOption) {
            requestAnimationFrame(() => {
                focusedOption.scrollIntoView({ block: 'nearest' });
            });
        }
    }
    /**
     * Function to validate the months navigation.
     * It enable/disable prev/next arrows based on minDate and maxDate.
     * It also updates the months in the dropdown based on minDate and maxDate.
     * @private
     * @internal
     */
    validateMonthsNavigation() {
        const prevDate = subMonths(this.pickerMonth, 1);
        const nextDate = addMonths(this.pickerMonth, 1);
        const minDateYear = this.minimumDate.getFullYear();
        const minDateMonth = this.minimumDate.getMonth();
        const maxDateYear = this.maximumDate.getFullYear();
        const maxDateMonth = this.maximumDate.getMonth();
        const prevDateYear = prevDate.getFullYear();
        const prevDateMonth = prevDate.getMonth();
        const nextDateYear = nextDate.getFullYear();
        const nextDateMonth = nextDate.getMonth();
        let updateMonths = false;
        let startIndex = 0;
        let endIndex = 11;
        // Validating Prev and Next Arrows
        this.disabledPrevMonth =
            prevDateYear < minDateYear ||
                (prevDateYear === minDateYear && prevDateMonth < minDateMonth);
        this.disabledNextMonth =
            nextDateYear > maxDateYear ||
                (nextDateYear === maxDateYear && nextDateMonth > maxDateMonth);
        if (!this.locale)
            return;
        // Validate months in dropdown
        this.months = [...Array(12)]
            .map((_, index) => ({
            index,
            label: this.fnsLocale.localize.month(index, {
                width: 'abbreviated',
            }),
        }))
            .map((month) => ({
            index: month.index,
            label: capitalizeFirstLetter(month.label),
        }));
        if (minDateYear === this.pickerMonth.getFullYear()) {
            startIndex = minDateMonth;
            updateMonths = true;
        }
        if (maxDateYear === this.pickerMonth.getFullYear()) {
            endIndex = maxDateMonth;
            updateMonths = true;
        }
        if (updateMonths) {
            this.months = this.months.slice(startIndex, endIndex + 1);
        }
    }
    /**
     * Function to generate a matrix with the days of the month.
     * @private
     * @internal
     */
    getMonthRows(date, firstDay) {
        if (!this.format)
            return [];
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDateOfMonth = new Date(year, month, 1);
        const lastDateOfMonth = new Date(year, month + 1, 0);
        const daysInMonth = lastDateOfMonth.getDate();
        const matrix = [];
        const DEFAULT_DATE = {
            date: new Date(),
            day: -1,
            dateText: '',
            formatted: '',
        };
        let week = new Array(7).fill(DEFAULT_DATE);
        let dayIndex = (firstDateOfMonth.getDay() - firstDay + 7) % 7;
        const today = startOfToday();
        for (let day = 1; day <= daysInMonth; day++) {
            const parsedDate = parse(`${day}/${month + 1}/${year}`, 'dd/MM/yyyy', new Date());
            const isSelected = this.value ? isSameDay(parsedDate, this.value) : false;
            week[dayIndex] = {
                date: parsedDate,
                day,
                dateText: format(parsedDate, 'MMMM do, yyyy'),
                formatted: format(parsedDate, this.format),
                disabled: this.getDateDisabledInternal(parsedDate),
                today: isSameDay(parsedDate, today),
                selected: isSelected,
                onDaySelect: () => this.onDaySelect(day, month, year),
            };
            dayIndex++;
            // adding new week
            if (dayIndex > 6 && day + 1 <= daysInMonth) {
                matrix.push(week);
                week = new Array(7).fill(DEFAULT_DATE);
                dayIndex = 0;
            }
        }
        if (week.some((day) => day !== null)) {
            matrix.push(week);
        }
        return matrix;
    }
    /**
     * Bind this function to be able to disable specific dates i.e. disable weekends.
     *
     * @category Public members
     * @remarks
     * Public function to know if a date is disabled.
     * Returns true if date is disabled.
     * @public
     */
    getDateDisabled(_date) {
        return false;
    }
    getDateDisabledChanged() {
        this.daysMatrix = this.getMonthRows(this.pickerMonth, this.firstDayOfTheWeek);
    }
    /**
     * Public function to know if a date is < minDate
     * or > maxDate, or disabled (using getDateDisabled).
     * @private
     */
    getDateDisabledInternal(date) {
        var _a;
        return (((_a = this.getDateDisabled) === null || _a === void 0 ? void 0 : _a.call(this, date)) ||
            !isWithinInterval(date, {
                start: this.minimumDate,
                end: this.maximumDate,
            }));
    }
    // ///////////////
    // Handlers
    // ///////////////
    /**
     * Handler for selecting a day in the picker.
     * @internal
     */
    onDaySelect(day, month, year) {
        this.pickerMonth = parse(`${year}-${month + 1}-${day}`, DatePicker.dbFormat, new Date());
        this.$emit('date-selected', this.pickerMonth);
        this.daysMatrix = this.getMonthRows(this.pickerMonth, this.firstDayOfTheWeek);
    }
    /**
     * Handler when picker loses focus.
     * @internal
     */
    onClickAway(event) {
        this.$emit('close', event.detail, { bubbles: false });
    }
    /**
     * Handler for click event in arrow buttons to change month
     * in the picker.
     * @internal
     */
    onCalendarChange(nextMonth, _e) {
        if (nextMonth) {
            this.pickerMonth = addMonths(this.pickerMonth, 1);
        }
        else {
            this.pickerMonth = subMonths(this.pickerMonth, 1);
        }
    }
    /**
     * Handler for click event in select with available months
     * in the picker.
     * @internal
     */
    onMonthSelectClick() {
        this.scrollToSelectedMonth();
    }
    /**
     * Handler for click event in select with available years
     * in the picker.
     * @internal
     */
    onYearSelectClick() {
        this.scrollToSelectedYear();
    }
    /**
     * Handler for change event in select with available months
     * in the picker.
     * @internal
     */
    onMonthChange(month) {
        this.calendarMonth = month;
        this.pickerMonth = setMonth(this.pickerMonth, month);
    }
    /**
     * Handler for change event in select with available years
     * in the picker.
     * @internal
     */
    onYearChange(year) {
        this.calendarYear = year;
        this.pickerMonth = setYear(this.pickerMonth, year);
        this.scrollToSelectedYear();
    }
    /**
     * Checks the computed style for the 'direction' property to set isRtl to true for RTL layouts.
     * @public
     * @internal
     */
    checkDirection() {
        const computedStyle = window.getComputedStyle(this);
        const directionValue = computedStyle.getPropertyValue('direction');
        this.isRtl = directionValue === 'rtl';
    }
    /**
     * Handler for Arrows keyboard interaction on picker.
     * This function is responsible for navigating through the days.
     * @internal
     */
    onArrowKeysPress(e, activeElement) {
        if (activeElement.localName === getComponentName('saf-button')) {
            const { key } = e;
            const currentDate = activeElement.getAttribute('data-value');
            if (!currentDate) {
                return;
            }
            let newDate = parse(currentDate, this.format, new Date());
            let moveDays = 0;
            switch (key) {
                case 'ArrowUp':
                    moveDays = -7;
                    newDate = subDays(newDate, 7);
                    break;
                case 'ArrowDown':
                    moveDays = 7;
                    newDate = addDays(newDate, 7);
                    break;
                case 'ArrowLeft':
                    moveDays = this.isRtl ? 1 : -1;
                    newDate = this.isRtl ? addDays(newDate, 1) : subDays(newDate, 1);
                    break;
                case 'ArrowRight':
                    moveDays = this.isRtl ? -1 : 1;
                    newDate = this.isRtl ? subDays(newDate, 1) : addDays(newDate, 1);
                    break;
            }
            if (newDate && !this.getDateDisabledInternal(newDate)) {
                this.pickerMonth = newDate;
                const selectedId = format(newDate, this.format);
                setTimeout(() => {
                    var _a, _b;
                    (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(selectedId)) === null || _b === void 0 ? void 0 : _b.focus();
                }, 50);
            }
            else {
                let validDateFound = true;
                while (this.getDateDisabledInternal(newDate)) {
                    if (!isWithinInterval(newDate, {
                        start: this.minimumDate,
                        end: this.maximumDate,
                    })) {
                        validDateFound = false;
                        break;
                    }
                    if (moveDays > 0) {
                        newDate = addDays(newDate, moveDays);
                    }
                    else {
                        newDate = subDays(newDate, Math.abs(moveDays));
                    }
                }
                if (validDateFound) {
                    this.pickerMonth = newDate;
                    const selectedId = format(newDate, this.format);
                    setTimeout(() => {
                        var _a, _b;
                        (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(selectedId)) === null || _b === void 0 ? void 0 : _b.focus();
                    }, 50);
                }
            }
        }
        if (activeElement.localName === getComponentName('saf-select')) {
            if (activeElement.hasAttribute('year-select')) {
                this.scrollToSelectedYear();
            }
            if (activeElement.hasAttribute('month-select')) {
                this.scrollToSelectedMonth();
            }
        }
        e.preventDefault();
    }
    /**
     * Handler for Escape keyboard interaction on picker.
     * @internal
     */
    onEscapePress(activeElement, e) {
        if (activeElement.localName === getComponentName('saf-select') &&
            activeElement.hasAttribute('open')) {
            return;
        }
        this.$emit('close', null, { bubbles: false });
        e.preventDefault();
    }
    /**
     * Handler for Tab keyboard interaction on picker.
     * @internal
     */
    onTabPress(e, activeElement) {
        var _a, _b, _c, _d;
        const focusableElements = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll(`${getComponentName('saf-button')}[month-arrow]:not([disabled]),${getComponentName('saf-select')}[month-select],${getComponentName('saf-select')}[year-select]`);
        if (!focusableElements || focusableElements.length === 0) {
            return;
        }
        const focusableArray = Array.from(focusableElements);
        // Focus Criteria on days: 1. Selected element, 2. Current day, 3. First enabled element
        const selectedElement = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(`${getComponentName('saf-button')}[selected]`);
        const currentDayElement = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector(`${getComponentName('saf-button')}.today`);
        const enabledElements = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelectorAll('[a11y-role="gridcell"]:not([disabled])');
        if (selectedElement) {
            focusableArray.push(selectedElement);
        }
        else if (currentDayElement) {
            focusableArray.push(currentDayElement);
        }
        else if (enabledElements && (enabledElements === null || enabledElements === void 0 ? void 0 : enabledElements.length) > 0) {
            focusableArray.push(enabledElements[0]);
        }
        const currentIndex = focusableArray.indexOf(activeElement);
        if (e.shiftKey) {
            // Move focus backward
            const previousIndex = (currentIndex - 1 + focusableArray.length) % focusableArray.length;
            focusableArray[previousIndex].focus();
        }
        else {
            // Move focus forward
            const nextIndex = (currentIndex + 1) % focusableArray.length;
            focusableArray[nextIndex].focus();
        }
        e.preventDefault();
    }
    /**
     * Handler for keyboard interaction on picker.
     * @internal
     */
    onPickerKeyPress(e) {
        var _a;
        const activeElement = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.activeElement;
        const { key } = e;
        switch (key) {
            case 'ArrowUp':
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight':
                this.onArrowKeysPress(e, activeElement);
                break;
            case 'Tab':
                this.onTabPress(e, activeElement);
                break;
            case 'Escape':
                this.onEscapePress(activeElement, e);
                break;
        }
        return true;
    }
}
__decorate([
    observable
], Calendar.prototype, "months", void 0);
__decorate([
    observable
], Calendar.prototype, "years", void 0);
__decorate([
    observable
], Calendar.prototype, "weekdays", void 0);
__decorate([
    observable
], Calendar.prototype, "calendarMonth", void 0);
__decorate([
    observable
], Calendar.prototype, "calendarYear", void 0);
__decorate([
    observable
], Calendar.prototype, "disabledPrevMonth", void 0);
__decorate([
    observable
], Calendar.prototype, "disabledNextMonth", void 0);
__decorate([
    observable
], Calendar.prototype, "pickerMonth", void 0);
__decorate([
    observable
], Calendar.prototype, "value", void 0);
__decorate([
    observable
], Calendar.prototype, "daysMatrix", void 0);
__decorate([
    attr({ attribute: 'weekdays-short' })
], Calendar.prototype, "weekdaysShort", void 0);
__decorate([
    attr({ attribute: 'weekdays-full' })
], Calendar.prototype, "weekdaysFull", void 0);
__decorate([
    attr({ attribute: 'locale' })
], Calendar.prototype, "locale", void 0);
__decorate([
    attr({ attribute: 'min-date' })
], Calendar.prototype, "minDate", void 0);
__decorate([
    attr({ attribute: 'max-date' })
], Calendar.prototype, "maxDate", void 0);
__decorate([
    attr({ attribute: 'first-day-of-the-week' })
], Calendar.prototype, "firstDayOfTheWeek", void 0);
__decorate([
    attr({ attribute: 'default-picker-date' })
], Calendar.prototype, "defaultPickerDate", void 0);
__decorate([
    attr({ attribute: 'format' })
], Calendar.prototype, "format", void 0);
__decorate([
    attr({ attribute: 'selected-date' })
], Calendar.prototype, "selectedDate", void 0);
__decorate([
    attr({ mode: 'boolean' })
], Calendar.prototype, "open", void 0);
__decorate([
    attr({ attribute: 'get-date-disabled' })
], Calendar.prototype, "getDateDisabled", null);
__decorate([
    observable
], Calendar.prototype, "isRtl", void 0);
__decorate([
    attr({ attribute: 'label' })
], Calendar.prototype, "label", void 0);
__decorate([
    attr({ attribute: 'month-select-aria-label' })
], Calendar.prototype, "monthSelectAriaLabel", void 0);
__decorate([
    attr({ attribute: 'date-picker-aria-label' })
], Calendar.prototype, "datePickerAriaLabel", void 0);
__decorate([
    attr({ attribute: 'prev-month-aria-label' })
], Calendar.prototype, "prevMonthAriaLabel", void 0);
__decorate([
    attr({ attribute: 'next-month-aria-label' })
], Calendar.prototype, "nextMonthAriaLabel", void 0);
__decorate([
    attr({ attribute: 'year-select-aria-label' })
], Calendar.prototype, "yearSelectAriaLabel", void 0);

export { Calendar };
