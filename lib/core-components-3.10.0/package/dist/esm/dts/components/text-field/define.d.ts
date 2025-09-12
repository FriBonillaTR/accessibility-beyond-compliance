import type { AugmentClassEvents } from '../../utils/types.js';
import { TextField } from './text-field.js';
export declare const safTextFieldConfig: {
    readonly events: {
        readonly onChange: "change";
        readonly onInput: "input";
        readonly onValidate: "validate";
        readonly onInvalid: "invalid";
        readonly onReset: "reset";
    };
};
declare const SafTextField: () => typeof TextField;
export default SafTextField;
export type SafTextFieldInstance = AugmentClassEvents<TextField, typeof safTextFieldConfig>;
