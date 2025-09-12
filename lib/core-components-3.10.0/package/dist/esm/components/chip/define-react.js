import wrap from '../../react-components/wrap.js';
import SafChip, { safChipConfig } from './define.js';

const SafReactChip = wrap(SafChip(), safChipConfig);

export { SafReactChip as default };
