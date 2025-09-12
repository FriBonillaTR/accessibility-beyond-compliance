import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import type { SafCardInstance } from './define.js';
export type SafCardProps = SafReactComponentProps<SafCardInstance>;
declare const SafReactCard: ComponentType<SafCardProps>;
export default SafReactCard;
