import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../../react-components/types.js';
import { safTreeItemConfig, type SafTreeItemInstance } from './define.js';
export type SafTreeItemProps = SafReactComponentProps<SafTreeItemInstance, typeof safTreeItemConfig>;
declare const SafReactTreeItem: ComponentType<SafTreeItemProps>;
export default SafReactTreeItem;
