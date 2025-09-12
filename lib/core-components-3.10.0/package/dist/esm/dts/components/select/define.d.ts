import type { AugmentClassEvents } from '../../utils/types.js';
import { Select } from './select.js';
export declare const safSelectConfig: {
    readonly events: {
        readonly onChange: "change";
        readonly onInput: "input";
    };
};
declare const SafSelect: () => typeof Select;
export default SafSelect;
export type SafSelectInstance = AugmentClassEvents<Select, typeof safSelectConfig>;
