import wrap from '../../../react-components/wrap.js';
import SafFacetItem, { safFacetItemConfig } from './define.js';

const SafReactFacetItem = wrap(SafFacetItem(), safFacetItemConfig);

export { SafReactFacetItem as default };
