import wrap from '../../react-components/wrap.js';
import SafCheckbox, { safCheckboxConfig } from './define.js';

const SafReactCheckbox = wrap(SafCheckbox(), safCheckboxConfig);

export { SafReactCheckbox as default };
