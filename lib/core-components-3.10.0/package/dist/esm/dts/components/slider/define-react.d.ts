import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safSliderConfig, type SafSliderInstance } from './define.js';
export type SafSliderProps = SafReactComponentProps<SafSliderInstance, typeof safSliderConfig>;
declare const SafReactSlider: ComponentType<SafSliderProps>;
export default SafReactSlider;
