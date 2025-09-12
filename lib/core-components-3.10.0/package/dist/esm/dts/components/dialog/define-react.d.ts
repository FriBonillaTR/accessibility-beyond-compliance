import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safDialogConfig, type SafDialogInstance } from './define.js';
export type SafDialogProps = SafReactComponentProps<SafDialogInstance, typeof safDialogConfig>;
declare const SafReactDialog: ComponentType<SafDialogProps>;
export default SafReactDialog;
