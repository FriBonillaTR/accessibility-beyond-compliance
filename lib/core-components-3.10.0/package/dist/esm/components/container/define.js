import { getRegistry, getComponentName } from '@saffron/config';
import { Container } from './container.js';
import { styles } from './container.styles.js';
import { containerTemplate } from './container.template.js';

const SafContainer = () => {
    return Container.define({
        name: getComponentName('saf-container'),
        template: containerTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafContainer as default };
