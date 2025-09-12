import { AugmentClassEvents } from '../../../utils/types.js';
import { DateMaskedInput, Sections } from './date-masked-input.js';
declare const DateMaskedInputDefine: () => typeof DateMaskedInput;
export declare const safDateMaskedInputConfig: {
    readonly events: {
        readonly onSectionsChanged: "sections-changed";
        readonly onInput: "input";
    };
};
export type SafDateMaskedInputEventDetails = {
    'sections-changed': {
        detail: Sections;
    };
    input: {
        detail: string;
    };
};
export default DateMaskedInputDefine;
export type SafDateMaskedInputInstance = AugmentClassEvents<DateMaskedInput, typeof safDateMaskedInputConfig, SafDateMaskedInputEventDetails>;
