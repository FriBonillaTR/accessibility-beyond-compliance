import { getRegistry, getComponentName } from '@saffron/config';
import { tabPanelTemplate } from '../../tabs/tab-panel/tab-panel.template.js';
import { WindowPanel } from './window-panel.js';
import { styles } from './window-panel.styles.js';

const SafWindowPanel = () => WindowPanel.define({
    name: getComponentName('saf-window-panel'),
    template: tabPanelTemplate(),
    styles: styles(),
    registry: getRegistry(),
});

export { SafWindowPanel as default };
