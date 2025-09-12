import wrap from '../../react-components/wrap.js';
import SafSideNav, { safSideNavConfig } from './define.js';

const SafReactSideNav = wrap(SafSideNav(), safSideNavConfig);

export { SafReactSideNav as default };
