import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import type { SafClickAwayListenerEventDetails, SafClickAwayListenerInstance } from './define.js';
import { safClickAwayListenerConfig } from './define.js';
export type SafClickAwayListenerProps = SafReactComponentProps<SafClickAwayListenerInstance, typeof safClickAwayListenerConfig, SafClickAwayListenerEventDetails>;
declare const SafReactClickAwayListener: ComponentType<SafClickAwayListenerProps>;
export default SafReactClickAwayListener;
