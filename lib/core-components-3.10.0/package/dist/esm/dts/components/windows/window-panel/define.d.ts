import type { AugmentClassEvents } from '../../../utils/types.js';
import { WindowPanel } from './window-panel.js';
declare const SafWindowPanel: () => typeof WindowPanel;
export default SafWindowPanel;
export type SafWindowPanelInstance = AugmentClassEvents<WindowPanel>;
