import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../../react-components/types.js';
import { SafCheckboxGroupEventDetails } from './define.js';
import { safCheckboxGroupConfig, type SafCheckboxGroupInstance } from './define.js';
export type SafCheckboxGroupProps = SafReactComponentProps<SafCheckboxGroupInstance, typeof safCheckboxGroupConfig, SafCheckboxGroupEventDetails>;
declare const SafReactCheckboxGroup: ComponentType<SafCheckboxGroupProps>;
export default SafReactCheckboxGroup;
