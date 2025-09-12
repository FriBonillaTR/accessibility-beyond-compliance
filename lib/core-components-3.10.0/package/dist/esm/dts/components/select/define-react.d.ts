import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safSelectConfig, type SafSelectInstance } from './define.js';
export type SafSelectProps = SafReactComponentProps<SafSelectInstance, typeof safSelectConfig>;
declare const SafReactSelect: ComponentType<SafSelectProps>;
export default SafReactSelect;
