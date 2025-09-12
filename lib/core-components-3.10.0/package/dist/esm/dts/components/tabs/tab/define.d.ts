import type { AugmentClassEvents } from '../../../utils/types.js';
import { Tab } from './tab.js';
export declare const safTabConfig: {
    readonly events: {
        readonly onChange: "change";
    };
};
declare const SafTab: () => typeof Tab;
export default SafTab;
export type SafTabInstance = AugmentClassEvents<Tab, typeof safTabConfig>;
