import wrap from '../../react-components/wrap.js';
import SafTabs, { safTabsConfig } from './define.js';

const SafReactTabs = wrap(SafTabs(), safTabsConfig);

export { SafReactTabs as default };
