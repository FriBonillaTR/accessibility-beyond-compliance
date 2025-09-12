import type { AugmentClassEvents } from '../../utils/types.js';
import { FacetedFilter } from './faceted-filter.js';
export declare const safFacetedFilterConfig: {
    readonly events: {
        readonly onClear: "clear";
    };
};
declare const SafFacetedFilter: () => typeof FacetedFilter;
export default SafFacetedFilter;
export type SafFacetedFilterInstance = AugmentClassEvents<FacetedFilter, typeof safFacetedFilterConfig>;
