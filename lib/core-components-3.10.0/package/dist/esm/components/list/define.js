import { getRegistry, getComponentName } from '@saffron/config';
import { List } from './list.js';
import { styles } from './list.styles.js';
import { listTemplate } from './list.template.js';

const SafList = () => {
    return List.define({
        name: getComponentName('saf-list'),
        template: listTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafList as default };
