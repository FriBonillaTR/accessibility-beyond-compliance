import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../../react-components/types.js';
import { safMenuItemConfig, type SafMenuItemInstance } from './define.js';
export type SafMenuItemProps = SafReactComponentProps<SafMenuItemInstance, typeof safMenuItemConfig>;
declare const SafReactMenuItem: ComponentType<SafMenuItemProps>;
export default SafReactMenuItem;
