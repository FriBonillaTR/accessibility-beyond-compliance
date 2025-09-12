import { getRegistry, getComponentName } from '@saffron/config';
import { Footer } from './footer.js';
import { styles } from './footer.styles.js';
import { footerTemplate } from './footer.template.js';
import SafLogo from '../logo/define.js';

const SafFooter = () => {
    SafLogo();
    return Footer.define({
        name: getComponentName('saf-footer'),
        template: footerTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafFooter as default };
