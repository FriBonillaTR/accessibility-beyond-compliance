import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../../react-components/types.js';
import { safRadioConfig, type SafRadioInstance } from './define.js';
export type SafRadioProps = SafReactComponentProps<SafRadioInstance, typeof safRadioConfig>;
declare const SafReactRadio: ComponentType<SafRadioProps>;
export default SafReactRadio;
