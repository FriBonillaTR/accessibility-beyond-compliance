import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../../react-components/types.js';
import { safDateMaskedInputConfig } from './define.js';
import type { SafDateMaskedInputEventDetails, SafDateMaskedInputInstance } from './define.js';
export type SafDateMaskedInputProps = SafReactComponentProps<SafDateMaskedInputInstance, typeof safDateMaskedInputConfig, SafDateMaskedInputEventDetails>;
declare const SafReactDateMaskedInput: ComponentType<SafDateMaskedInputProps>;
export default SafReactDateMaskedInput;
