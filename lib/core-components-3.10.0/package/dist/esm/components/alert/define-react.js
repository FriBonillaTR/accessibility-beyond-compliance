import wrap from '../../react-components/wrap.js';
import SafAlert, { safAlertConfig } from './define.js';

const SafReactAlert = wrap(SafAlert(), safAlertConfig);

export { SafReactAlert as default };
