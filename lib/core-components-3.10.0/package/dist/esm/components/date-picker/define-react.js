import wrap from '../../react-components/wrap.js';
import SafDatePicker, { safDatePickerConfig } from './define.js';

const SafReactDatePicker = wrap(SafDatePicker(), safDatePickerConfig);

export { SafReactDatePicker as default };
