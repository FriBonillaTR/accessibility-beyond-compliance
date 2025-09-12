import wrap from '../../react-components/wrap.js';
import SafStepper, { safStepperConfig } from './define.js';

const SafReactStepper = wrap(SafStepper(), safStepperConfig);

export { SafReactStepper as default };
