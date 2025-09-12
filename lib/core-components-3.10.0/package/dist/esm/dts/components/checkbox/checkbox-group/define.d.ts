import type { AugmentClassEvents } from '../../../utils/types.js';
import { CheckboxGroup } from './checkbox-group.js';
export declare const safCheckboxGroupConfig: {
    readonly events: {
        readonly onChange: "change";
        readonly onInvalid: "invalid";
        readonly onReset: "reset";
    };
};
export type SafCheckboxGroupEventDetails = {
    invalid: {
        detail: boolean;
    };
};
declare const SafCheckboxGroup: () => typeof CheckboxGroup;
export default SafCheckboxGroup;
export type SafCheckboxGroupInstance = AugmentClassEvents<CheckboxGroup, typeof safCheckboxGroupConfig, SafCheckboxGroupEventDetails>;
