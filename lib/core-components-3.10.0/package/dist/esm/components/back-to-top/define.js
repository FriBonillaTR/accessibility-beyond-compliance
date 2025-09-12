import { getRegistry, getComponentName } from '@saffron/config';
import SafIcon from '../icon/define.js';
import SafSrOnly from '../sr-only/define.js';
import SafTooltip from '../tooltip/define.js';
import { BackToTop } from './back-to-top.js';
import { styles } from './back-to-top.styles.js';
import { backToTopTemplate } from './back-to-top.template.js';

const SafBackToTop = () => {
    SafIcon();
    SafTooltip();
    SafSrOnly();
    return BackToTop.define({
        name: getComponentName('saf-back-to-top'),
        template: backToTopTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafBackToTop as default };
