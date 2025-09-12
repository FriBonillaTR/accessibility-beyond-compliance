import wrap from '../../react-components/wrap.js';
import ClickAwayListenerDefine, { safClickAwayListenerConfig } from './define.js';

const SafReactClickAwayListener = wrap(ClickAwayListenerDefine(), safClickAwayListenerConfig);

export { SafReactClickAwayListener as default };
