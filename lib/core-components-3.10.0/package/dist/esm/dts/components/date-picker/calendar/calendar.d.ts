import { FASTElement } from '../../../@microsoft/fast-element/index.js';
import { DatePickerDayOfWeek } from './calendar.options.js';
export interface DateInfo {
    date: Date;
    day: number;
    dateText: string;
    formatted: string;
    disabled: boolean;
    today: boolean;
    selected: boolean;
    onDaySelect: () => void;
}
export interface MonthInfo {
    index: number;
    label: string;
}
export interface WeekdayInfo {
    short: string;
    full: string;
}
/**
 * A class for Calendar
 */
export declare class Calendar extends FASTElement {
    /**
     * Short names of months to list in the dropdown.
     * Override to change the months names in the month dropdown
     * @type {Array<{index: number; label: string;}>}
     * @defaultValue computed from locale
     * @public
     */
    months: MonthInfo[];
    pickerMonthChanged(): void;
    /**
     * Current selected date in the picker.
     * value as Date for selectedDate
     * @private
     * @readonly
     * @see selected-date
     */
    private value;
    valueChanged(): void;
    private get fnsLocale();
    /**
     * Abbreviated names for weekdays.
     * Override to change the weekdays letters shown in the picker.
     * @category Public members
     * @defaultValue computed from locale
     * @public
     */
    weekdaysShort: string[];
    weekdaysShortChanged(prev: string[], next: string[]): void;
    /**
     * Full names for weekdays.
     * Override to change the weekdays aria-label.
     * @category Public members
     * @defaultValue computed from locale
     * @public
     */
    weekdaysFull: string[];
    weekdaysFullChanged(prev: string[], next: string[]): void;
    /**
     * Locale used for calendar.
     * @public
     */
    locale: string;
    localeChanged(): void;
    /**
     * Minimum date to select in format "yyyy-MM-dd".
     * @public
     */
    minDate: string;
    minDateChanged(): void;
    /**
     * Maximum date to select in format "yyyy-MM-dd".
     * @public
     */
    maxDate: string;
    maxDateChanged(): void;
    /**
     * Determines the day shown at beginning of each row in picker.
     * Takes a value from 0 to 6, representing Sunday to Saturday.
     * @public
     */
    firstDayOfTheWeek?: DatePickerDayOfWeek;
    firstDayOfTheWeekChanged(): void;
    /**
     * Default picker view month and date to focus in the format "yyyy-MM-dd".
     * @public
     */
    defaultPickerDate?: string;
    /**
     * Default date format. If value is not provided or is invalid, the format will be based on the locale.
     * @public
     * @defaultValue computed from locale
     */
    format: string;
    formatChanged(): void;
    /**
     * Denotes the selected date for the picker in the format "yyyy-MM-dd".
     * @public
     */
    selectedDate: string | null;
    selectedDateChanged(): void;
    /**
     * Shows/hides the date picker.
     *
     * @remarks Current state of the picker view. If true, picker is open and visible.
     * @public
     */
    open: boolean;
    openChanged(): void;
    private setWeekdays;
    private setWeekdaysShortAndFull;
    private setFirstDayOfTheWeek;
    private setYearsAndMinMaxDates;
    /**
     * Function to scroll into selected year in the picker.
     * @private
     */
    private scrollToSelectedYear;
    /**
     * Bind this function to be able to disable specific dates i.e. disable weekends.
     *
     * @category Public members
     * @remarks
     * Public function to know if a date is disabled.
     * Returns true if date is disabled.
     * @public
     */
    getDateDisabled(_date: Date): boolean;
    getDateDisabledChanged(): void;
    /**
     * Public function to know if a date is < minDate
     * or > maxDate, or disabled (using getDateDisabled).
     * @private
     */
    private getDateDisabledInternal;
    /**
     * Text that describes the input.
     * @public
     */
    label?: string;
    /**
     * aria-label for the month select dropdown.
     * @public
     * @a11y
     */
    monthSelectAriaLabel?: string;
    /**
     * The text appended to the label for the `aria-label` of the dialog.
     * @public
     * @a11y
     */
    datePickerAriaLabel?: string;
    /**
     * aria-label for the previous month icon button.
     * @public
     * @a11y
     */
    prevMonthAriaLabel?: string;
    /**
     * aria-label for the next month icon button.
     * @public
     * @a11y
     */
    nextMonthAriaLabel?: string;
    /**
     * aria-label for the year select dropdown.
     * @public
     * @a11y
     */
    yearSelectAriaLabel?: string;
}
