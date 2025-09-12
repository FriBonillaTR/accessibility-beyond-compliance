import wrap from '../../react-components/wrap.js';
import SafRadioGroup, { safRadioGroupConfig } from './define.js';

const SafReactRadioGroup = wrap(SafRadioGroup(), safRadioGroupConfig);

export { SafReactRadioGroup as default };
