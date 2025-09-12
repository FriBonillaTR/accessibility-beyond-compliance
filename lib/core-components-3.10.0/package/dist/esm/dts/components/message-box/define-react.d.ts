import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safMessageBoxConfig, type SafMessageBoxInstance } from './define.js';
export type SafMessageBoxProps = SafReactComponentProps<SafMessageBoxInstance, typeof safMessageBoxConfig>;
declare const SafReactMessageBox: ComponentType<SafMessageBoxProps>;
export default SafReactMessageBox;
