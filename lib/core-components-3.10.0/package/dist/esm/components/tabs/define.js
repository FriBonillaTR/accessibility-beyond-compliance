import { getRegistry, getComponentName } from '@saffron/config';
import { Tabs } from './tabs.js';
import { styles } from './tabs.styles.js';
import { tabsTemplate } from './tabs.template.js';

const safTabsConfig = {
    events: {
        onChange: 'change',
    },
};
const SafTabs = () => {
    return Tabs.define({
        name: getComponentName('saf-tabs'),
        template: tabsTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafTabs as default, safTabsConfig };
