import wrap from '../../react-components/wrap.js';
import SafDrawer, { safDrawerConfig } from './define.js';

const SafReactDrawer = wrap(SafDrawer(), safDrawerConfig);

export { SafReactDrawer as default };
