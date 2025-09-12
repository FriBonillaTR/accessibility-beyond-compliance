import wrap from '../../react-components/wrap.js';
import SafCombobox, { safComboboxConfig } from './define.js';

const SafReactCombobox = wrap(SafCombobox(), safComboboxConfig);

export { SafReactCombobox as default };
