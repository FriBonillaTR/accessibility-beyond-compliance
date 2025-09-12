import { getRegistry, getComponentName } from '@saffron/config';
import SafIcon from '../icon/define.js';
import { Status } from './status.js';
import { styles } from './status.styles.js';
import { statusTemplate } from './status.template.js';

const SafStatus = () => {
    SafIcon();
    return Status.define({
        name: getComponentName('saf-status'),
        template: statusTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafStatus as default };
