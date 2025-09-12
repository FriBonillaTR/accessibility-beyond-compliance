import type { AugmentClassEvents } from '../../../utils/types.js';
import { FacetItem } from './facet-item.js';
export declare const safFacetItemConfig: {
    readonly events: {
        readonly onToggle: "toggle";
        readonly onExpandedChange: "expanded-change";
    };
};
export type SafFacetItemEventDetails = {
    toggle: {
        detail: SafFacetItemInstance;
    };
};
declare const SafFacetItem: () => typeof FacetItem;
export default SafFacetItem;
export type SafFacetItemInstance = AugmentClassEvents<FacetItem, typeof safFacetItemConfig, SafFacetItemEventDetails>;
