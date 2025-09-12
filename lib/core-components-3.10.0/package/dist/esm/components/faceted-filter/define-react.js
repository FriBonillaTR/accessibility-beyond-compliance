import wrap from '../../react-components/wrap.js';
import SafFacetedFilter, { safFacetedFilterConfig } from './define.js';

const SafReactFacetedFilter = wrap(SafFacetedFilter(), safFacetedFilterConfig);

export { SafReactFacetedFilter as default };
