import wrap from '../../react-components/wrap.js';
import SafMessageBox, { safMessageBoxConfig } from './define.js';

const SafReactMessageBox = wrap(SafMessageBox(), safMessageBoxConfig);

export { SafReactMessageBox as default };
