import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safTextFieldConfig, type SafTextFieldInstance } from './define.js';
export type SafTextFieldProps = SafReactComponentProps<SafTextFieldInstance, typeof safTextFieldConfig>;
declare const SafReactTextField: ComponentType<SafTextFieldProps>;
export default SafReactTextField;
