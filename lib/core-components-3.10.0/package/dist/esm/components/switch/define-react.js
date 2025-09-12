import wrap from '../../react-components/wrap.js';
import SafSwitch, { safSwitchConfig } from './define.js';

const SafReactSwitch = wrap(SafSwitch(), safSwitchConfig);

export { SafReactSwitch as default };
