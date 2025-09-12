import { getRegistry, getComponentName } from '@saffron/config';
import SafIcon from '../icon/define.js';
import { Switch } from './switch.js';
import { styles } from './switch.styles.js';
import { switchTemplate } from './switch.template.js';

const safSwitchConfig = {
    events: {
        onChange: 'change',
    },
};
const SafSwitch = () => {
    SafIcon();
    return Switch.define({
        name: getComponentName('saf-switch'),
        template: switchTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafSwitch as default, safSwitchConfig };
