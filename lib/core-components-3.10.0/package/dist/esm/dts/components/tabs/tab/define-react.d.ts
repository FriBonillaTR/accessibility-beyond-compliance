import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../../react-components/types.js';
import { safTabConfig, type SafTabInstance } from './define.js';
export type SafTabProps = SafReactComponentProps<SafTabInstance, typeof safTabConfig>;
declare const SafReactTab: ComponentType<SafTabProps>;
export default SafReactTab;
