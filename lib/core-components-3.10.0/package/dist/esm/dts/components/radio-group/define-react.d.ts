import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safRadioGroupConfig, type SafRadioGroupInstance } from './define.js';
export type SafRadioGroupProps = SafReactComponentProps<SafRadioGroupInstance, typeof safRadioGroupConfig>;
declare const SafReactRadioGroup: ComponentType<SafRadioGroupProps>;
export default SafReactRadioGroup;
