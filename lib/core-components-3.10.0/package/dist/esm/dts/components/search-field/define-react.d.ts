import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safSearchFieldConfig, type SafSearchFieldInstance } from './define.js';
export type SafSearchFieldProps = SafReactComponentProps<SafSearchFieldInstance, typeof safSearchFieldConfig>;
declare const SafReactSearchField: ComponentType<SafSearchFieldProps>;
export default SafReactSearchField;
