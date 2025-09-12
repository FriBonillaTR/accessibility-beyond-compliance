import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safAlertConfig, type SafAlertInstance } from './define.js';
export type SafAlertProps = SafReactComponentProps<SafAlertInstance, typeof safAlertConfig>;
declare const SafReactAlert: ComponentType<SafAlertProps>;
export default SafReactAlert;
