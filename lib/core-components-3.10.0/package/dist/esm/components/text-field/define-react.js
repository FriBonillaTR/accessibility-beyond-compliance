import wrap from '../../react-components/wrap.js';
import SafTextField, { safTextFieldConfig } from './define.js';

const SafReactTextField = wrap(SafTextField(), safTextFieldConfig);

export { SafReactTextField as default };
