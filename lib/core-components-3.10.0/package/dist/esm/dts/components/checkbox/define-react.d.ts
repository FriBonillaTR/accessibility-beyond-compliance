import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safCheckboxConfig, type SafCheckboxInstance } from './define.js';
export type SafCheckboxProps = SafReactComponentProps<SafCheckboxInstance, typeof safCheckboxConfig>;
declare const SafReactCheckbox: ComponentType<SafCheckboxProps>;
export default SafReactCheckbox;
