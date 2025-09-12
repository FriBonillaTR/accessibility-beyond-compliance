import { getRegistry, getComponentName } from '@saffron/config';
import SafButton from '../button/define.js';
import SafIcon from '../icon/define.js';
import { SideNav } from './side-nav.js';
import { styles } from './side-nav.styles.js';
import { sideNavTemplate } from './side-nav.template.js';

const safSideNavConfig = {
    events: {
        onClose: 'close',
        onOpen: 'open',
    },
};
const SafSideNav = () => {
    SafButton();
    SafIcon();
    return SideNav.define({
        name: getComponentName('saf-side-nav'),
        template: sideNavTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafSideNav as default, safSideNavConfig };
