import type { AugmentClassEvents } from '../../utils/types.js';
import { NumberField } from './number-field.js';
export declare const safNumberFieldConfig: {
    readonly events: {
        readonly onChange: "change";
        readonly onInput: "input";
        readonly onInvalid: "invalid";
        readonly onClick: "click";
    };
};
declare const SafNumberField: () => typeof NumberField;
export default SafNumberField;
export type SafNumberFieldInstance = AugmentClassEvents<NumberField, typeof safNumberFieldConfig>;
