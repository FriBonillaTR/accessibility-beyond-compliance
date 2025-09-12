import wrap from '../../react-components/wrap.js';
import SafTextArea, { safTextAreaConfig } from './define.js';

const SafReactTextArea = wrap(SafTextArea(), safTextAreaConfig);

export { SafReactTextArea as default };
