import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { SafTabsEventDetails } from './define.js';
import { safTabsConfig, type SafTabsInstance } from './define.js';
export type SafTabsProps = SafReactComponentProps<SafTabsInstance, typeof safTabsConfig, SafTabsEventDetails>;
declare const SafReactTabs: ComponentType<SafTabsProps>;
export default SafReactTabs;
