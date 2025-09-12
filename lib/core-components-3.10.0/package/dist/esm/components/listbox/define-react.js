import wrap from '../../react-components/wrap.js';
import SafListbox, { safListboxConfig } from './define.js';

const SafReactListbox = wrap(SafListbox(), safListboxConfig);

export { SafReactListbox as default };
