import wrap from '../../react-components/wrap.js';
import SafWindows, { safWindowsConfig } from './define.js';

const SafReactWindows = wrap(SafWindows(), safWindowsConfig);

export { SafReactWindows as default };
