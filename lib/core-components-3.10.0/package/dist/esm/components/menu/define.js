import { getRegistry, getComponentName } from '@saffron/config';
import { Menu } from './menu.js';
import { styles } from './menu.styles.js';
import { menuTemplate } from './menu.template.js';

const SafMenu = () => {
    return Menu.define({
        name: getComponentName('saf-menu'),
        template: menuTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafMenu as default };
