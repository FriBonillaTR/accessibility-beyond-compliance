import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safListboxConfig, type SafListboxInstance } from './define.js';
export type SafListboxProps = SafReactComponentProps<SafListboxInstance, typeof safListboxConfig>;
declare const SafReactListbox: ComponentType<SafListboxProps>;
export default SafReactListbox;
