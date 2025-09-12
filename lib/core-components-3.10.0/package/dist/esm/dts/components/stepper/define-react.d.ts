import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safStepperConfig, type SafStepperInstance } from './define.js';
export type SafStepperProps = SafReactComponentProps<SafStepperInstance, typeof safStepperConfig>;
declare const SafReactStepper: ComponentType<SafStepperProps>;
export default SafReactStepper;
