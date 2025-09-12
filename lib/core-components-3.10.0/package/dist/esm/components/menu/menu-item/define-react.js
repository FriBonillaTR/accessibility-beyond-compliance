import wrap from '../../../react-components/wrap.js';
import SafMenuItem, { safMenuItemConfig } from './define.js';

const SafReactMenuItem = wrap(SafMenuItem(), safMenuItemConfig);

export { SafReactMenuItem as default };
