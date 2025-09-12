import wrap from '../../react-components/wrap.js';
import SafDialog, { safDialogConfig } from './define.js';

const SafReactDialog = wrap(SafDialog(), safDialogConfig);

export { SafReactDialog as default };
