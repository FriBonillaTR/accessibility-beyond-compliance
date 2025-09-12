import type { AugmentClassEvents } from '../../../utils/types.js';
import { TreeItem } from './tree-item.js';
export declare const safTreeItemConfig: {
    readonly events: {
        readonly expandedChange: "expanded-change";
        readonly selectedChange: "selected-change";
    };
};
declare const SafTreeItem: () => typeof TreeItem;
export default SafTreeItem;
export type SafTreeItemInstance = AugmentClassEvents<TreeItem, typeof safTreeItemConfig>;
