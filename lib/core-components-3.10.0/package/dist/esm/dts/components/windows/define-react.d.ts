import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safWindowsConfig, type SafWindowsInstance } from './define.js';
export type SafWindowsProps = SafReactComponentProps<SafWindowsInstance, typeof safWindowsConfig>;
declare const SafReactWindows: ComponentType<SafWindowsProps>;
export default SafReactWindows;
