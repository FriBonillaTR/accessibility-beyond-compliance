import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safAnchorConfig, type SafAnchorInstance } from './define.js';
export type SafAnchorProps = SafReactComponentProps<SafAnchorInstance, typeof safAnchorConfig>;
declare const SafReactAnchor: ComponentType<SafAnchorProps>;
export default SafReactAnchor;
