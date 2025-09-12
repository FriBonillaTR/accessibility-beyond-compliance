import wrap from '../../react-components/wrap.js';
import SafTooltip, { safTooltipConfig } from './define.js';

const SafReactTooltip = wrap(SafTooltip(), safTooltipConfig);

export { SafReactTooltip as default };
