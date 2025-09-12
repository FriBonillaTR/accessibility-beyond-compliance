import type { AugmentClassEvents } from '../../utils/types.js';
import { Drawer } from './drawer.js';
export declare const safDrawerConfig: {
    readonly events: {
        readonly onDismiss: "dismiss";
        readonly onHide: "hide";
        readonly onShow: "show";
    };
};
declare const SafDrawer: () => typeof Drawer;
export default SafDrawer;
export type SafDrawerInstance = AugmentClassEvents<Drawer, typeof safDrawerConfig>;
