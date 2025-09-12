import { getRegistry, getComponentName } from '@saffron/config';
import { Divider } from './divider.js';
import { styles } from './divider.styles.js';
import { dividerTemplate } from './divider.template.js';

const SafDivider = () => Divider.define({
    name: getComponentName('saf-divider'),
    template: dividerTemplate(),
    styles: styles(),
    registry: getRegistry(),
});

export { SafDivider as default };
