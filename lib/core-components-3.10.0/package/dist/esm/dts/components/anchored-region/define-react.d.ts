import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safAnchoredRegionConfig, type SafAnchoredRegionInstance } from './define.js';
export type SafAnchoredRegionProps = SafReactComponentProps<SafAnchoredRegionInstance, typeof safAnchoredRegionConfig>;
declare const SafReactAnchoredRegion: ComponentType<SafAnchoredRegionProps>;
export default SafReactAnchoredRegion;
