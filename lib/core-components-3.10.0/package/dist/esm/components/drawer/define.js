import { getRegistry, getComponentName } from '@saffron/config';
import SafButton from '../button/define.js';
import SafIcon from '../icon/define.js';
import SafSrOnly from '../sr-only/define.js';
import { Drawer } from './drawer.js';
import { styles } from './drawer.styles.js';
import { drawerTemplate } from './drawer.template.js';

const safDrawerConfig = {
    events: {
        onDismiss: 'dismiss',
        onHide: 'hide',
        onShow: 'show',
    },
};
const SafDrawer = () => {
    SafButton();
    SafIcon();
    SafSrOnly();
    return Drawer.define({
        name: getComponentName('saf-drawer'),
        template: drawerTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafDrawer as default, safDrawerConfig };
