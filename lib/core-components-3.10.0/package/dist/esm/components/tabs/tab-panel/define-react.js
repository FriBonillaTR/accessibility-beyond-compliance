import wrap from '../../../react-components/wrap.js';
import SafTabPanel, { safTabPanelConfig } from './define.js';

const SafReactTabPanel = wrap(SafTabPanel(), safTabPanelConfig);

export { SafReactTabPanel as default };
