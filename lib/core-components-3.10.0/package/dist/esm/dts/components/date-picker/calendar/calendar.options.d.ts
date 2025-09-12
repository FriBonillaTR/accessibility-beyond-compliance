/**
 * Day of the week.
 *
 * @public
 */
export declare const DatePickerDayOfWeekEnum: {
    readonly Sunday: 0;
    readonly Monday: 1;
    readonly Tuesday: 2;
    readonly Wednesday: 3;
    readonly Thursday: 4;
    readonly Friday: 5;
    readonly Saturday: 6;
};
/**
 * Types for day of the week.
 *
 * @public
 */
export type DatePickerDayOfWeek = (typeof DatePickerDayOfWeekEnum)[keyof typeof DatePickerDayOfWeekEnum];
