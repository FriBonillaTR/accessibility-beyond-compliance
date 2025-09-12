import { __awaiter, __decorate } from 'tslib';
import { FASTElement, Updates, attr, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import { locales, parse, isSameDay, format, startOfToday, setDate, setMonth, setYear, isValid, isWithinInterval, isBefore } from '@saffron/date-fns';
import { autoUpdate, computePosition, autoPlacement, offset, size, hide } from '@floating-ui/dom';

/**
 * A class for DatePicker
 */
class DatePicker extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * The text appended to the label for the `aria-label` of the dialog.
         * @public
         * @passedTo Calendar
         */
        this.datePickerAriaLabel = 'date picker';
        /**
         * A value is required or must be checked for the form to be submittable.
         * @public
         * @passedTo DateMaskedInput
         */
        this.required = false;
        /**
         * Adds additional character to the label when text-field is required.
         * @remarks
         * Text to indicate required field. By default, it is '*'.
         * @public
         * @passedTo DateMaskedInput
         */
        this.requiredText = '*';
        /**
         * When true, the control will be immutable by user interaction.
         * @public
         * @passedTo DateMaskedInput
         */
        this.readOnly = false;
        /**
         * Locale used for date-picker. If value is not provided or is invalid, locale will be `navigator.language`.
         * @public
         * @defaultValue navigator.language
         */
        this.locale = '';
        /**
         * Default date format. If value is not provided or is invalid, the format will be based on the locale.
         * @public
         * @defaultValue computed from locale
         */
        this.format = '';
        /**
         * Minimum selectable date. Defaults to 'yyyy-MM-dd' format unless a custom format is specified using the 'format' attribute.
         * @public
         */
        this.minDate = '1900-01-01';
        /**
         * Maximum selectable date. Defaults to 'yyyy-MM-dd' format unless a custom format is specified using the 'format' attribute.
         * @public
         */
        this.maxDate = '2099-12-31';
        /**
         * Determines whether the component automatically corrects invalid dates
         * @public
         *
         * @passedTo DateMaskedInput
         */
        this.autocorrect = true;
        /**
         * Minimum date to select in date format.
         * @internal
         * @public
         */
        this.minimumDate = new Date();
        /**
         * Maximum date to select in date format.
         * @internal
         * @public
         */
        this.maximumDate = new Date();
        /**
         * Default value for the date picker. Defaults to 'yyyy-MM-dd' format unless a custom format is specified using the 'format' attribute.
         * @public
         */
        this.defaultDate = '';
        /**
         * Indicates the entered value does not conform to the format expected by the application.
         * @remarks
         * Validation state. If true, DatePicker is invalid.
         * If false, DatePicker is indeterminate.
         * Initializes as false.
         * @public
         * @passedTo DateMaskedInput
         */
        this.invalid = false;
        /**
         * aria-label for the icon button that opens the picker.
         * @public
         */
        this.openPickerAriaLabel = 'Open calendar';
        /**
         * aria-label for the previous month icon button.
         * @public
         * @passedTo Calendar
         */
        this.prevMonthAriaLabel = 'Previous month';
        /**
         * aria-label for the next month icon button.
         * @public
         * @passedTo Calendar
         */
        this.nextMonthAriaLabel = 'Next month';
        /**
         * aria-label for the month select dropdown.
         * @public
         * @passedTo Calendar
         */
        this.monthSelectAriaLabel = 'Month';
        /**
         * aria-label for the year select dropdown.
         * @public
         * @passedTo Calendar
         */
        this.yearSelectAriaLabel = 'Year';
        // ///////////////
        // Props
        // ///////////////
        /**
         * Represents the input value. Readonly. See `setValue()` for setting the value.
         * @public
         * @readonly
         */
        this.inputValue = '';
        /**
         * Value of current selected date.
         * @public
         * @internal
         */
        this.value = null;
        /**
         * Indicates whether the picker is open or closed.
         * @internal
         */
        this.open = false;
        /**
         * Method to close Picker when active element is not
         * contained inside the Date Picker.
         * @internal
         */
        this.onClickAway = (event) => {
            const focusOnMaskedInput = event.detail && event.detail.includes(this.maskedInput);
            this.closePicker(!focusOnMaskedInput);
        };
    }
    /**
     * Function to initialize date picker when
     * locale changed.
     * @internal
     */
    localeChanged() {
        if (this.$fastController.isConnected) {
            this.initializeDatePicker();
        }
    }
    get fnsLocale() {
        return locales[this.locale.replace('-', '')];
    }
    /**
     * Retrieves the effective date format.
     *
     * Returns the consumer-provided format if available; otherwise, falls back to the default `en-US` format.
     * This computed format is used when parsing default, minimum, and maximum dates.
     */
    get resolvedFormat() {
        return this.format || 'MM/DD/YYYY';
    }
    /**
     * Function to initialize date picker when
     * format changed.
     * @internal
     */
    formatChanged() {
        if (this.$fastController.isConnected) {
            this.initializeDatePicker();
        }
    }
    /**
     * Function to initialize date picker when
     * minDate changed.
     * @internal
     */
    minDateChanged() {
        if (this.$fastController.isConnected) {
            this.initializeDatePicker();
        }
    }
    /**
     * Function to initialize date picker when
     * maxDate changed.
     * @internal
     */
    maxDateChanged() {
        if (this.$fastController.isConnected) {
            this.initializeDatePicker();
        }
    }
    /**
     * Function to initialize date picker when
     * defaultDate changed.
     * @internal
     */
    defaultDateChanged() {
        if (this.$fastController.isConnected) {
            this.initializeDatePicker();
        }
    }
    /**
     * Function to initialize date picker when
     * firstDayOfTheWeek changed.
     * @internal
     */
    firstDayOfTheWeekChanged() {
        if (this.$fastController.isConnected) {
            this.initializeDatePicker();
        }
    }
    /**
     * @public
     * @internal
     * Method for retrieving the .control element from the textField's shadow DOM to be used as the anchorElement.
     */
    getAnchorElement() {
        return this.maskedInput.textField.control;
    }
    onInput(e) {
        this.inputValue = e.target.value;
        if (DatePicker.isValidDate(this.inputValue, this.format)) {
            this.value = parse(this.inputValue, this.format, new Date());
        }
        else {
            this.value = null;
        }
    }
    valueChanged(prev, next) {
        if ((prev && !next) || (next && !prev) || (prev && next && !isSameDay(prev, next))) {
            this.$emit('change', next ? format(next, this.format) : null);
        }
    }
    weekdaysShortChanged() {
        this.calendar.weekdaysShort = this.weekdaysShort;
    }
    weekdaysFullChanged() {
        this.calendar.weekdaysFull = this.weekdaysFull;
    }
    /**
     * Emits open and close events when the picker opens and closes.
     * @internal
     */
    openChanged() {
        if (this.open) {
            this.$emit('open', null, { bubbles: false });
        }
        else {
            this.$emit('close', null, { bubbles: false });
        }
    }
    // ///////////////
    // Event handlers
    // ///////////////
    /**
     * handler for when the calendar icon is clicked.
     * @public
     * @internal
     */
    onCalendarIconClick() {
        if (!this.open)
            this.openPicker();
    }
    /**
     * Handler for selecting a day in the picker.
     * @internal
     * @public
     */
    onDaySelect(event) {
        this.setValue(event.detail);
        this.closePicker();
        this.maskedInput.focus();
    }
    onSectionsChanged(event) {
        const sections = event.detail;
        // start with current date
        let date = startOfToday();
        // then replace the date/month/year with the corresponding input sections if filled, if a reference to a saf-date-masked-input is provided
        [
            { section: 'day', fn: setDate, isValid: (x) => x > 0 && x <= 31 },
            { section: 'month', fn: setMonth, isValid: (x) => x > 0 && x <= 12 },
            { section: 'year', fn: setYear, isValid: (_) => true },
        ].forEach(({ section, fn, isValid }) => {
            if (sections[section].isFilled) {
                const value = Number(sections[section].value);
                if (!isNaN(value) && isValid(value)) {
                    date = fn(date, section === 'month' ? value - 1 : value);
                }
            }
        });
        this.defaultPickerDateFromInputSections = format(date, DatePicker.dbFormat);
    }
    // ///////////////
    // Functions / methods
    // ///////////////
    /**
     * Public function to set value of the date picker
     * and the input.
     * @public
     * @defaultValue setValue(date: Date): void
     */
    setValue(date) {
        this.value = date;
        if (date) {
            this.inputValue = format(date, this.format);
        }
        else {
            this.inputValue = this.format.toLowerCase();
        }
        Updates.enqueue(() => {
            this.maskedInput.setValue(this.inputValue);
        });
    }
    /**
     * Bind this function to be able to disable specific dates i.e. disable weekends.
     *
     * @remarks
     * Public function to know if a date is disabled.
     * Returns true if date is disabled.
     * @public
     */
    getDateDisabled(_date) {
        return false;
    }
    /**
     * @public
     * Public method for opening the picker.
     */
    openPicker() {
        this.open = true;
        Updates.enqueue(() => this.setPositioning());
    }
    /**
     * @public
     * Public method for closing the picker.
     */
    closePicker(focusOnCalendarButton = true) {
        var _a;
        this.open = false;
        if (focusOnCalendarButton)
            (_a = this.calendarButton) === null || _a === void 0 ? void 0 : _a.focus();
    }
    /**
     * Function for open and close the picker.
     * @public
     * @internal
     */
    togglePicker() {
        this.open = !this.open;
    }
    /**
     * Function to validate a locale with the available
     * locales in date-fns.
     * @internal
     */
    isValidLocale(locale) {
        return locale.replace('-', '') in locales;
    }
    /**
     * Function to validate a format using date-fns.
     * @internal
     */
    isValidFormat(dateFormat) {
        try {
            const formatted = format(new Date(), dateFormat);
            const parsed = parse(formatted, dateFormat, new Date());
            return isValid(parsed);
        }
        catch (_error) {
            return false;
        }
    }
    /**
     * Function to validate a date using certain format.
     * @internal
     */
    static isValidDate(dateText, dateFormat) {
        try {
            if (dateText && dateText.length !== 10) {
                return false;
            }
            const parsed = parse(dateText, dateFormat, new Date());
            return isValid(parsed);
        }
        catch (_error) {
            return false;
        }
    }
    /**
     * Function to initialize the date picker.
     * @private
     */
    initializeDatePicker() {
        var _a;
        if (!this.isValidLocale(this.locale)) {
            if (this.locale.length > 2 && this.isValidLocale(this.locale.substring(0, 2))) {
                this.locale = this.locale.substring(0, 2);
            }
            else if (this.isValidLocale(navigator.language)) {
                this.locale = navigator.language;
            }
            else if (navigator.language.length > 2 &&
                this.isValidLocale(navigator.language.substring(0, 2))) {
                this.locale = navigator.language.substring(0, 2);
            }
            else {
                this.locale = 'en-US';
            }
        }
        if (!this.isValidFormat(this.format)) {
            const dateFormat = (_a = this.fnsLocale.formatLong) === null || _a === void 0 ? void 0 : _a.date({ width: 'short' }).replace(/\b(yy|y)(?!yy)\b/, 'yyyy').replace(/\b(M)(?!M)\b/, 'MM').replace(/\b(d)(?!d)\b/, 'dd').replace(/[^/.\-dMy]/g, '');
            this.format = dateFormat;
        }
        this.inputValue = this.format.toLowerCase();
        if (DatePicker.isValidDate(this.defaultDate, this.resolvedFormat)) {
            const parsed = parse(this.defaultDate, this.resolvedFormat, new Date());
            if (isWithinInterval(parsed, { start: this.minimumDate, end: this.maximumDate })) {
                this.setValue(parsed);
            }
        }
        if (DatePicker.isValidDate(this.minDate, this.resolvedFormat)) {
            this.minimumDate = parse(this.minDate, this.resolvedFormat, new Date());
        }
        else {
            // Loading default minDate in format provided
            this.minimumDate = parse('1900-01-01', DatePicker.dbFormat, new Date());
            this.minDate = format(this.minimumDate, DatePicker.dbFormat);
        }
        if (DatePicker.isValidDate(this.maxDate, this.resolvedFormat)) {
            this.maximumDate = parse(this.maxDate, this.resolvedFormat, new Date());
        }
        else {
            // Loading default maxDate in format provided
            this.maximumDate = parse('2099-12-31', DatePicker.dbFormat, new Date());
            this.maxDate = format(this.maximumDate, DatePicker.dbFormat);
        }
        if (!isBefore(this.minimumDate, this.maximumDate)) {
            [this.minimumDate, this.maximumDate] = [this.maximumDate, this.minimumDate];
            [this.minDate, this.maxDate] = [this.maxDate, this.minDate];
        }
    }
    /**
     * Method to get the full month name from a month number.
     * @public
     * @internal
     */
    getFullMonthName(monthIndex) {
        return this.fnsLocale.localize.month(monthIndex, {
            width: 'wide',
        });
    }
    /**
     * Sets the horizontal-default-position 'left' for RTL layouts and 'right' for LTR layouts.
     * @public
     * @internal
     */
    get horizontalDefaultPosition() {
        return getComputedStyle(this).direction === 'rtl' ? 'left' : 'right';
    }
    /**
     * Calculate and apply floating calendar positioning based on available viewport space.
     *
     * @internal
     */
    setPositioning() {
        var _a, _b, _c;
        const container = (_b = (_a = this.maskedInput) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.firstElementChild;
        const control = (_c = container === null || container === void 0 ? void 0 : container.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('.control');
        if (this.$fastController.isConnected) {
            this.cleanup = autoUpdate(control, this.calendar, () => __awaiter(this, void 0, void 0, function* () {
                var _a;
                const { middlewareData } = yield computePosition(control, this.calendar, {
                    placement: 'bottom',
                    strategy: 'fixed',
                    middleware: [
                        autoPlacement({
                            allowedPlacements: ['top', 'bottom'],
                        }),
                        offset(8),
                        size({
                            apply: ({ availableHeight }) => {
                                // Get the full date picker width
                                const datePickerWidth = this.getBoundingClientRect().width;
                                // Use date picker width if less than 290px, otherwise use max width
                                const calendarWidth = datePickerWidth < 290
                                    ? `${datePickerWidth}px`
                                    : 'var(--saf-datepicker-calendar-max-width)';
                                Object.assign(this.calendar.style, {
                                    maxHeight: `${availableHeight}px`,
                                    width: calendarWidth,
                                });
                            },
                        }),
                        hide(),
                    ],
                });
                if ((_a = middlewareData.hide) === null || _a === void 0 ? void 0 : _a.referenceHidden) {
                    this.open = false;
                    this.cleanup();
                    return;
                }
            }));
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.initializeDatePicker();
    }
}
/**
 * SQL database format, used to parse consumer passed dates
 */
DatePicker.dbFormat = 'yyyy-MM-dd';
__decorate([
    attr({ attribute: 'name' })
], DatePicker.prototype, "name", void 0);
__decorate([
    attr
], DatePicker.prototype, "id", void 0);
__decorate([
    attr({ attribute: 'label' })
], DatePicker.prototype, "label", void 0);
__decorate([
    attr({ attribute: 'date-picker-aria-label' })
], DatePicker.prototype, "datePickerAriaLabel", void 0);
__decorate([
    attr({ attribute: 'instructional-text' })
], DatePicker.prototype, "instructionalText", void 0);
__decorate([
    attr({ attribute: 'disabled', mode: 'boolean' })
], DatePicker.prototype, "disabled", void 0);
__decorate([
    attr({ attribute: 'required', mode: 'boolean' })
], DatePicker.prototype, "required", void 0);
__decorate([
    attr({ attribute: 'required-text' })
], DatePicker.prototype, "requiredText", void 0);
__decorate([
    attr({ mode: 'boolean', attribute: 'readonly' })
], DatePicker.prototype, "readOnly", void 0);
__decorate([
    attr({ attribute: 'optional-text' })
], DatePicker.prototype, "optionalText", void 0);
__decorate([
    attr({ attribute: 'locale' })
], DatePicker.prototype, "locale", void 0);
__decorate([
    attr({ attribute: 'format' })
], DatePicker.prototype, "format", void 0);
__decorate([
    attr({ attribute: 'min-date' })
], DatePicker.prototype, "minDate", void 0);
__decorate([
    attr({ attribute: 'max-date' })
], DatePicker.prototype, "maxDate", void 0);
__decorate([
    attr({ attribute: 'autocorrect', mode: 'boolean' })
], DatePicker.prototype, "autocorrect", void 0);
__decorate([
    attr({ attribute: 'default-date' })
], DatePicker.prototype, "defaultDate", void 0);
__decorate([
    attr({ attribute: 'default-picker-date' })
], DatePicker.prototype, "defaultPickerDate", void 0);
__decorate([
    observable
], DatePicker.prototype, "defaultPickerDateFromInputSections", void 0);
__decorate([
    attr({ attribute: 'is-success', mode: 'boolean' })
], DatePicker.prototype, "isSuccess", void 0);
__decorate([
    attr({ attribute: 'invalid', mode: 'boolean' })
], DatePicker.prototype, "invalid", void 0);
__decorate([
    attr({ attribute: 'validation-message' })
], DatePicker.prototype, "validationMessage", void 0);
__decorate([
    attr({ attribute: 'open-picker-aria-label' })
], DatePicker.prototype, "openPickerAriaLabel", void 0);
__decorate([
    attr({ attribute: 'prev-month-aria-label' })
], DatePicker.prototype, "prevMonthAriaLabel", void 0);
__decorate([
    attr({ attribute: 'next-month-aria-label' })
], DatePicker.prototype, "nextMonthAriaLabel", void 0);
__decorate([
    attr({ attribute: 'month-select-aria-label' })
], DatePicker.prototype, "monthSelectAriaLabel", void 0);
__decorate([
    attr({ attribute: 'year-select-aria-label' })
], DatePicker.prototype, "yearSelectAriaLabel", void 0);
__decorate([
    attr({ attribute: 'first-day-of-the-week' })
], DatePicker.prototype, "firstDayOfTheWeek", void 0);
__decorate([
    observable
], DatePicker.prototype, "inputValue", void 0);
__decorate([
    observable
], DatePicker.prototype, "value", void 0);
__decorate([
    attr({ attribute: 'weekdays-short' })
], DatePicker.prototype, "weekdaysShort", void 0);
__decorate([
    attr({ attribute: 'weekdays-full' })
], DatePicker.prototype, "weekdaysFull", void 0);
__decorate([
    attr({ attribute: 'open', mode: 'boolean' })
], DatePicker.prototype, "open", void 0);
__decorate([
    attr({ attribute: 'get-date-disabled' })
], DatePicker.prototype, "getDateDisabled", null);

export { DatePicker };
