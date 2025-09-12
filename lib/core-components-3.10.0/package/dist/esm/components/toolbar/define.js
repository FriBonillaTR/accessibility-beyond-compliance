import { getRegistry, getComponentName } from '@saffron/config';
import SafDivider from '../divider/define.js';
import { Toolbar } from './toolbar.js';
import { styles } from './toolbar.styles.js';
import { toolbarTemplate } from './toolbar.template.js';

const SafToolbar = () => {
    SafDivider();
    return Toolbar.define({
        name: getComponentName('saf-toolbar'),
        template: toolbarTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafToolbar as default };
