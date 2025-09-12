import type { AugmentClassEvents } from '../../../utils/types.js';
import { FacetCategory } from './facet-category.js';
declare const SafFacetCategory: () => typeof FacetCategory;
export default SafFacetCategory;
export type SafFacetCategoryInstance = AugmentClassEvents<FacetCategory>;
