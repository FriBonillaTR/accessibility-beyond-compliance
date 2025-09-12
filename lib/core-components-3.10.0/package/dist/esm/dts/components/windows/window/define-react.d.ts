import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../../react-components/types.js';
import { safWindowConfig, type SafWindowInstance } from './define.js';
export type SafWindowProps = SafReactComponentProps<SafWindowInstance, typeof safWindowConfig>;
declare const SafReactWindow: ComponentType<SafWindowProps>;
export default SafReactWindow;
