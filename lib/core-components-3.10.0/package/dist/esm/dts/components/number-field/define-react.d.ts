import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safNumberFieldConfig, type SafNumberFieldInstance } from './define.js';
export type SafNumberFieldProps = SafReactComponentProps<SafNumberFieldInstance, typeof safNumberFieldConfig>;
declare const SafReactNumberField: ComponentType<SafNumberFieldProps>;
export default SafReactNumberField;
