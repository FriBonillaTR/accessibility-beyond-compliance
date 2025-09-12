import { getRegistry, getComponentName } from '@saffron/config';
import { TabPanel } from './tab-panel.js';
import { styles } from './tab-panel.styles.js';
import { tabPanelTemplate } from './tab-panel.template.js';

const safTabPanelConfig = {
    events: {
        onChange: 'change',
    },
};
const SafTabPanel = () => TabPanel.define({
    name: getComponentName('saf-tab-panel'),
    template: tabPanelTemplate(),
    styles: styles(),
    registry: getRegistry(),
});

export { SafTabPanel as default, safTabPanelConfig };
