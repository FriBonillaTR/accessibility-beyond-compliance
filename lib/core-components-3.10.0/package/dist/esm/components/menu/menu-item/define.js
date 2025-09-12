import { getRegistry, getComponentName } from '@saffron/config';
import { MenuItem } from './menu-item.js';
import { styles } from './menu-item.styles.js';
import { menuItemTemplate } from './menu-item.template.js';
import SafIcon from '../../icon/define.js';

const safMenuItemConfig = {
    events: {
        onExpandedChange: 'expanded-change',
        onChange: 'change',
        onClick: 'click',
    },
};
const SafMenuItem = () => {
    SafIcon();
    return MenuItem.define({
        name: getComponentName('saf-menu-item'),
        template: menuItemTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafMenuItem as default, safMenuItemConfig };
