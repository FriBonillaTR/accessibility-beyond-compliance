import type { AugmentClassEvents } from '../../utils/types.js';
import { SideNav } from './side-nav.js';
export declare const safSideNavConfig: {
    readonly events: {
        readonly onClose: "close";
        readonly onOpen: "open";
    };
};
declare const SafSideNav: () => typeof SideNav;
export default SafSideNav;
export type SafSideNavInstance = AugmentClassEvents<SideNav, typeof safSideNavConfig>;
