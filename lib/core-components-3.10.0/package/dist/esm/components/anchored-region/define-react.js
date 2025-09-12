import wrap from '../../react-components/wrap.js';
import SafAnchoredRegion, { safAnchoredRegionConfig } from './define.js';

const SafReactAnchoredRegion = wrap(SafAnchoredRegion(), safAnchoredRegionConfig);

export { SafReactAnchoredRegion as default };
