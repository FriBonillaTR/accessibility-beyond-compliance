import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { SafComboboxEventDetails } from './define.js';
import { safComboboxConfig, type SafComboboxInstance } from './define.js';
export type SafComboboxProps = SafReactComponentProps<SafComboboxInstance, typeof safComboboxConfig, SafComboboxEventDetails>;
declare const SafReactCombobox: ComponentType<SafComboboxProps>;
export default SafReactCombobox;
