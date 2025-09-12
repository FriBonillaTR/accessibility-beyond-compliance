import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safTooltipConfig, type SafTooltipInstance } from './define.js';
export type SafTooltipProps = SafReactComponentProps<SafTooltipInstance, typeof safTooltipConfig>;
declare const SafReactTooltip: ComponentType<SafTooltipProps>;
export default SafReactTooltip;
