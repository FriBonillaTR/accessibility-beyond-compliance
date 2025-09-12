import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { Locale } from '@saffron/date-fns';
import { DatePickerDayOfWeek } from './calendar/calendar.options.js';
import { SafDateMaskedInputEventDetails } from './date-masked-input/define.js';
/**
 * A class for DatePicker
 */
export declare class DatePicker extends FASTElement {
    /**
     * The name of the datePicker.
     * @public
     */
    name: string;
    /**
     * The id attribute of the date picker element.
     * @public
     */
    id: string;
    /**
     * Text that describes the input.
     * @public
     * @passedTo DateMaskedInput
     */
    label?: string;
    /**
     * The text appended to the label for the `aria-label` of the dialog.
     * @public
     * @passedTo Calendar
     */
    datePickerAriaLabel: string;
    /**
     * Provides additional instructional text that provides extra guidance for the input.
     * @remarks
     * Paragraph element that takes instructional text.
     * @public
     * @passedTo DateMaskedInput
     */
    instructionalText?: string;
    /**
     * Prevents the user from interacting with the input.
     * @public
     */
    disabled: boolean;
    /**
     * A value is required or must be checked for the form to be submittable.
     * @public
     * @passedTo DateMaskedInput
     */
    required: boolean;
    /**
     * Adds additional character to the label when text-field is required.
     * @remarks
     * Text to indicate required field. By default, it is '*'.
     * @public
     * @passedTo DateMaskedInput
     */
    requiredText: string;
    /**
     * When true, the control will be immutable by user interaction.
     * @public
     * @passedTo DateMaskedInput
     */
    readOnly: boolean;
    /**
     * Provides additional optional text to the label. Accepts any text but intended to indicate `(Required)` or `(Optional)`.
     * @remarks
     * For accessibility purposes, allows author to mentions in text next to label
     * whether the field is optional '(Optional)' or '(Required)'.
     * @public
     * @passedTo DateMaskedInput
     */
    optionalText?: string;
    /**
     * Locale used for date-picker. If value is not provided or is invalid, locale will be `navigator.language`.
     * @public
     * @defaultValue navigator.language
     */
    locale: string;
    get fnsLocale(): Locale;
    /**
     * Default date format. If value is not provided or is invalid, the format will be based on the locale.
     * @public
     * @defaultValue computed from locale
     */
    format: string;
    /**
     * Retrieves the effective date format.
     *
     * Returns the consumer-provided format if available; otherwise, falls back to the default `en-US` format.
     * This computed format is used when parsing default, minimum, and maximum dates.
     */
    private get resolvedFormat();
    /**
     * SQL database format, used to parse consumer passed dates
     */
    static dbFormat: string;
    /**
     * Minimum selectable date. Defaults to 'yyyy-MM-dd' format unless a custom format is specified using the 'format' attribute.
     * @public
     */
    minDate: string;
    /**
     * Maximum selectable date. Defaults to 'yyyy-MM-dd' format unless a custom format is specified using the 'format' attribute.
     * @public
     */
    maxDate: string;
    /**
     * Determines whether the component automatically corrects invalid dates
     * @public
     *
     * @passedTo DateMaskedInput
     */
    autocorrect: boolean;
    /**
     * Default value for the date picker. Defaults to 'yyyy-MM-dd' format unless a custom format is specified using the 'format' attribute.
     * @public
     */
    defaultDate: string;
    /**
     * Default picker view month and date to focus in
     * the format "yyyy-MM-dd".
     * @public
     * @passedTo Calendar
     */
    defaultPickerDate?: string;
    /**
     * Specifies that the control is valid and that a success message should display.
     * @remarks
     * Validation state. If true and invalid is false,
     * Date Picker is in success state.
     * If false, DatePicker is in indeterminate state.
     * @public
     * @passedTo DateMaskedInput
     */
    isSuccess: boolean | undefined;
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     * @remarks
     * Validation state. If true, DatePicker is invalid.
     * If false, DatePicker is indeterminate.
     * Initializes as false.
     * @public
     * @passedTo DateMaskedInput
     */
    invalid: boolean;
    /**
     * The message displayed when the control is valid or invalid.
     * @remarks
     * Text message to show when invalid is true (error)
     * or isSuccess is true (success).
     * @public
     * @passedTo DateMaskedInput
     */
    validationMessage: string;
    /**
     * aria-label for the icon button that opens the picker.
     * @public
     */
    openPickerAriaLabel?: string;
    /**
     * aria-label for the previous month icon button.
     * @public
     * @passedTo Calendar
     */
    prevMonthAriaLabel?: string;
    /**
     * aria-label for the next month icon button.
     * @public
     * @passedTo Calendar
     */
    nextMonthAriaLabel?: string;
    /**
     * aria-label for the month select dropdown.
     * @public
     * @passedTo Calendar
     */
    monthSelectAriaLabel?: string;
    /**
     * aria-label for the year select dropdown.
     * @public
     * @passedTo Calendar
     */
    yearSelectAriaLabel?: string;
    /**
     * Determines the day shown at the beginning of date picker.
     * Takes a value from 0 to 6, representing Sunday to Saturday.
     * If value is not provided or is invalid, the first day of the week will be based on the locale.
     *
     * @defaultValue computed from locale
     *
     * @remarks
     * Determines the day shown at beginning of each row in picker.
     * Takes a value from 0 to 6, representing Sunday to Saturday.
     *
     * @public
     * @passedTo Calendar
     */
    firstDayOfTheWeek?: DatePickerDayOfWeek;
    /**
     * Represents the input value. Readonly. See `setValue()` for setting the value.
     * @public
     * @readonly
     */
    inputValue: string;
    onInput(e: InputEvent): void;
    valueChanged(prev: Date, next: Date): void;
    /**
     * Abbreviated names for weekdays. Override to change the weekdays letters shown in the picker.
     *
     * @defaultValue computed from locale
     * @public
     * @passedTo Calendar
     */
    weekdaysShort: string[];
    weekdaysShortChanged(): void;
    /**
     * Full names for weekdays. Override to change the weekdays aria-label.
     *
     * @defaultValue computed from locale
     * @public
     * @passedTo Calendar
     */
    weekdaysFull: string[];
    weekdaysFullChanged(): void;
    onSectionsChanged(event: CustomEvent<SafDateMaskedInputEventDetails['sections-changed']['detail']>): void;
    /**
     * Public function to set value of the date picker
     * and the input.
     * @public
     * @defaultValue setValue(date: Date): void
     */
    setValue(date: Date): void;
    /**
     * Bind this function to be able to disable specific dates i.e. disable weekends.
     *
     * @remarks
     * Public function to know if a date is disabled.
     * Returns true if date is disabled.
     * @public
     */
    getDateDisabled(_date: Date): boolean;
    /**
     * @public
     * Public method for opening the picker.
     */
    openPicker(): void;
    /**
     * @public
     * Public method for closing the picker.
     */
    closePicker(focusOnCalendarButton?: boolean): void;
    /**
     * Function to initialize the date picker.
     * @private
     */
    private initializeDatePicker;
    connectedCallback(): void;
}
