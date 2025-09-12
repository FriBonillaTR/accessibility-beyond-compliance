import type { AugmentClassEvents } from '../../utils/types.js';
import { Tabs } from './tabs.js';
export declare const safTabsConfig: {
    readonly events: {
        readonly onChange: "change";
    };
};
export type SafTabsEventDetails = {
    change: {
        detail: HTMLElement;
    };
};
declare const SafTabs: () => typeof Tabs;
export default SafTabs;
export type SafTabsInstance = AugmentClassEvents<Tabs, typeof safTabsConfig, SafTabsEventDetails>;
