import type { AugmentClassEvents } from '../../../utils/types.js';
import { TabPanel } from './tab-panel.js';
export declare const safTabPanelConfig: {
    readonly events: {
        readonly onChange: "change";
    };
};
declare const SafTabPanel: () => typeof TabPanel;
export default SafTabPanel;
export type SafTabPanelInstance = AugmentClassEvents<TabPanel, typeof safTabPanelConfig>;
