import type { AugmentClassEvents } from '../../utils/types.js';
import { Listbox } from './listbox.js';
export declare const safListboxConfig: {
    readonly events: {
        readonly onClick: "click";
    };
};
declare const SafListbox: () => typeof Listbox;
export default SafListbox;
export type SafListboxInstance = AugmentClassEvents<Listbox, typeof safListboxConfig>;
