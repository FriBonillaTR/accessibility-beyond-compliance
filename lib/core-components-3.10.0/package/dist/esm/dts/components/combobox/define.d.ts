import type { AugmentClassEvents } from '../../utils/types.js';
import { Combobox } from './combobox.js';
export declare const safComboboxConfig: {
    readonly events: {
        readonly onInput: "input";
        readonly onClick: "click";
        readonly onClear: "clear";
        readonly onScrollEnd: "scroll-end";
        readonly onChange: "change";
    };
};
export type SafComboboxEventDetails = {
    input: {
        detail: string;
    };
};
declare const SafCombobox: () => typeof Combobox;
export default SafCombobox;
export type SafComboboxInstance = AugmentClassEvents<Combobox, typeof safComboboxConfig, SafComboboxEventDetails>;
