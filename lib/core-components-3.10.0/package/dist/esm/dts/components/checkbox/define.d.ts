import type { AugmentClassEvents } from '../../utils/types.js';
import { Checkbox } from './checkbox.js';
export declare const safCheckboxConfig: {
    readonly events: {
        readonly onChange: "change";
    };
};
declare const SafCheckbox: () => typeof Checkbox;
export default SafCheckbox;
export type SafCheckboxInstance = AugmentClassEvents<Checkbox, typeof safCheckboxConfig>;
