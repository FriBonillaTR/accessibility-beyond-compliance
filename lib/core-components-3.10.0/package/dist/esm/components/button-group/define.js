import { getRegistry, getComponentName } from '@saffron/config';
import { ButtonGroup } from './button-group.js';
import { styles } from './button-group.styles.js';
import { buttonGroupTemplate } from './button-group.template.js';

const SafButtonGroup = () => {
    return ButtonGroup.define({
        name: getComponentName('saf-button-group'),
        template: buttonGroupTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafButtonGroup as default };
