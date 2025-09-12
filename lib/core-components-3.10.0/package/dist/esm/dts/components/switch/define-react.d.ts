import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safSwitchConfig, type SafSwitchInstance } from './define.js';
export type SafSwitchProps = SafReactComponentProps<SafSwitchInstance, typeof safSwitchConfig>;
declare const SafReactSwitch: ComponentType<SafSwitchProps>;
export default SafReactSwitch;
