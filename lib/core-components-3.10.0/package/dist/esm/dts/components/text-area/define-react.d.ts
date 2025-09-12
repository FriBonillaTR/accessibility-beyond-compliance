import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safTextAreaConfig, type SafTextAreaInstance } from './define.js';
export type SafTextAreaProps = SafReactComponentProps<SafTextAreaInstance, typeof safTextAreaConfig>;
declare const SafReactTextArea: ComponentType<SafTextAreaProps>;
export default SafReactTextArea;
