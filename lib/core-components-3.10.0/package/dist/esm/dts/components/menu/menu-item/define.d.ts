import type { AugmentClassEvents } from '../../../utils/types.js';
import { MenuItem } from './menu-item.js';
export declare const safMenuItemConfig: {
    readonly events: {
        readonly onExpandedChange: "expanded-change";
        readonly onChange: "change";
        readonly onClick: "click";
    };
};
declare const SafMenuItem: () => typeof MenuItem;
export default SafMenuItem;
export type SafMenuItemInstance = AugmentClassEvents<MenuItem, typeof safMenuItemConfig>;
