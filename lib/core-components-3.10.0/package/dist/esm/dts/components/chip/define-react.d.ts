import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safChipConfig, type SafChipInstance } from './define.js';
export type SafChipProps = SafReactComponentProps<SafChipInstance, typeof safChipConfig>;
declare const SafReactChip: ComponentType<SafChipProps>;
export default SafReactChip;
