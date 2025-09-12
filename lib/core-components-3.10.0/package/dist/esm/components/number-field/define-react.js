import wrap from '../../react-components/wrap.js';
import SafNumberField, { safNumberFieldConfig } from './define.js';

const SafReactNumberField = wrap(SafNumberField(), safNumberFieldConfig);

export { SafReactNumberField as default };
