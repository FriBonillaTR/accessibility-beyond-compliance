import wrap from '../../react-components/wrap.js';
import SafSlider, { safSliderConfig } from './define.js';

const SafReactSlider = wrap(SafSlider(), safSliderConfig);

export { SafReactSlider as default };
