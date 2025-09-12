import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safDatePickerConfig, SafDatePickerEventDetails, type SafDatePickerInstance } from './define.js';
export type SafDatePickerProps = SafReactComponentProps<SafDatePickerInstance, typeof safDatePickerConfig, SafDatePickerEventDetails>;
declare const SafReactDatePicker: ComponentType<SafDatePickerProps>;
export default SafReactDatePicker;
