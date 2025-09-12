import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safSideNavConfig, type SafSideNavInstance } from './define.js';
export type SafSideNavProps = SafReactComponentProps<SafSideNavInstance, typeof safSideNavConfig>;
declare const SafReactSideNav: ComponentType<SafSideNavProps>;
export default SafReactSideNav;
