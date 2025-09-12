import wrap from '../../../react-components/wrap.js';
import SafCheckboxGroup, { safCheckboxGroupConfig } from './define.js';

const SafReactCheckboxGroup = wrap(SafCheckboxGroup(), safCheckboxGroupConfig);

export { SafReactCheckboxGroup as default };
