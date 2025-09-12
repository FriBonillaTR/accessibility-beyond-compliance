import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safSplitterConfig, SafSplitterInstance } from './define.js';
export type SafSplitterProps = SafReactComponentProps<SafSplitterInstance, typeof safSplitterConfig>;
declare const SafReactSplitter: ComponentType<SafSplitterProps>;
export default SafReactSplitter;
