import type { AugmentClassEvents } from '../../utils/types.js';
import { RadioGroup } from './radio-group.js';
export declare const safRadioGroupConfig: {
    readonly events: {
        readonly onChange: "change";
        readonly onClick: "click";
        readonly onKeyDown: "keydown";
        readonly onFocusOut: "focusout";
        readonly onReset: "reset";
    };
};
declare const SafRadioGroup: () => typeof RadioGroup;
export default SafRadioGroup;
export type SafRadioGroupInstance = AugmentClassEvents<RadioGroup, typeof safRadioGroupConfig>;
