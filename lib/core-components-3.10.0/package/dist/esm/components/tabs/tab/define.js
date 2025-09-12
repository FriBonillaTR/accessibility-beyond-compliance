import { getRegistry, getComponentName } from '@saffron/config';
import { Tab } from './tab.js';
import { styles } from './tab.styles.js';
import { tabTemplate } from './tab.template.js';

const safTabConfig = {
    events: {
        onChange: 'change',
    },
};
const SafTab = () => Tab.define({
    name: getComponentName('saf-tab'),
    template: tabTemplate(),
    styles: styles(),
    registry: getRegistry(),
});

export { SafTab as default, safTabConfig };
