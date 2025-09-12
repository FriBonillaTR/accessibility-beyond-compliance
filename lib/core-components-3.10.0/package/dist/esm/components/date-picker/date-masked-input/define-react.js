import wrap from '../../../react-components/wrap.js';
import DateMaskedInputDefine, { safDateMaskedInputConfig } from './define.js';

const SafReactDateMaskedInput = wrap(DateMaskedInputDefine(), safDateMaskedInputConfig);

export { SafReactDateMaskedInput as default };
