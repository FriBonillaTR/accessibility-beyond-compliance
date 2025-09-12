import wrap from '../../react-components/wrap.js';
import SafAnchor, { safAnchorConfig } from './define.js';

const SafReactAnchor = wrap(SafAnchor(), safAnchorConfig);

export { SafReactAnchor as default };
