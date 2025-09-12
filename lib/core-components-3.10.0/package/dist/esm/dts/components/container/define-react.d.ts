import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import type { SafContainerInstance } from './define.js';
export type SafContainerProps = SafReactComponentProps<SafContainerInstance>;
declare const SafReactContainer: ComponentType<SafContainerProps>;
export default SafReactContainer;
