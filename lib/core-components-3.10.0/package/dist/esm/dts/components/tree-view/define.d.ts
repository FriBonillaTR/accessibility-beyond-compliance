import type { AugmentClassEvents } from '../../utils/types.js';
import { TreeView } from './tree-view.js';
declare const SafTreeView: () => typeof TreeView;
export default SafTreeView;
export type SafTreeViewInstance = AugmentClassEvents<TreeView>;
