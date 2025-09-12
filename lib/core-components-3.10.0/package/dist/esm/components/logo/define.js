import { getRegistry, getComponentName } from '@saffron/config';
import { Logo } from './logo.js';
import { styles } from './logo.styles.js';
import { logoTemplate } from './logo.template.js';

const SafLogo = () => Logo.define({
    name: getComponentName('saf-logo'),
    template: logoTemplate(),
    styles: styles(),
    registry: getRegistry(),
});

export { SafLogo as default };
