import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../../react-components/types.js';
import { safTabPanelConfig, type SafTabPanelInstance } from './define.js';
export type SafTabPanelProps = SafReactComponentProps<SafTabPanelInstance, typeof safTabPanelConfig>;
declare const SafReactTabPanel: ComponentType<SafTabPanelProps>;
export default SafReactTabPanel;
