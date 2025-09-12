import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safDrawerConfig, type SafDrawerInstance } from './define.js';
export type SafDrawerProps = SafReactComponentProps<SafDrawerInstance, typeof safDrawerConfig>;
declare const SafReactDrawer: ComponentType<SafDrawerProps>;
export default SafReactDrawer;
