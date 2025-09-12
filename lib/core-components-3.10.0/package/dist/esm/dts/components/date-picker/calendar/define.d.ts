import { AugmentClassEvents } from '../../../utils/types.js';
import { Calendar } from './calendar.js';
declare const CalendarDefine: () => typeof Calendar;
export declare const safCalendarConfig: {
    readonly events: {
        readonly onClose: "close";
        readonly onDateSelected: "date-selected";
    };
};
export type SafCalendarEventDetails = {
    close: {
        detail: EventTarget[] | undefined;
    };
    'date-selected': {
        detail: Date;
    };
};
export default CalendarDefine;
export type SafCalendarInstance = AugmentClassEvents<Calendar, typeof safCalendarConfig, SafCalendarEventDetails>;
