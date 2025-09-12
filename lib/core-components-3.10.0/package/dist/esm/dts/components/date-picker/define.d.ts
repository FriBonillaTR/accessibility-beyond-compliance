import { AugmentClassEvents } from '../../utils/types.js';
import { DatePicker } from './date-picker.js';
export declare const safDatePickerConfig: {
    readonly events: {
        readonly onInput: "input";
        readonly onChange: "change";
        readonly onOpen: "open";
        readonly onClose: "close";
    };
};
export type SafDatePickerEventDetails = {
    change: {
        detail: string | null;
    };
    input: {
        detail: string;
    };
};
declare const SafDatePicker: () => typeof DatePicker;
export default SafDatePicker;
export type SafDatePickerInstance = AugmentClassEvents<DatePicker, typeof safDatePickerConfig, SafDatePickerEventDetails>;
