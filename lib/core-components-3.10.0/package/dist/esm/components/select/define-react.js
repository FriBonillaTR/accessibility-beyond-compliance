import wrap from '../../react-components/wrap.js';
import SafSelect, { safSelectConfig } from './define.js';

const SafReactSelect = wrap(SafSelect(), safSelectConfig);

export { SafReactSelect as default };
