import wrap from '../../../react-components/wrap.js';
import SafWindow, { safWindowConfig } from './define.js';

const SafReactWindow = wrap(SafWindow(), safWindowConfig);

export { SafReactWindow as default };
