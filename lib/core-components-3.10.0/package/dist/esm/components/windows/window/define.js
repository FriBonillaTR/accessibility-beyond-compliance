import { getRegistry, getComponentName } from '@saffron/config';
import SafButton from '../../button/define.js';
import SafIcon from '../../icon/define.js';
import SafSrOnly from '../../sr-only/define.js';
import SafTooltip from '../../tooltip/define.js';
import { Window } from './window.js';
import { styles } from './window.styles.js';
import { windowTemplate } from './window.template.js';

const safWindowConfig = {
    events: {
        onClose: 'close',
    },
};
const SafWindow = () => {
    SafTooltip();
    SafButton();
    SafIcon();
    SafSrOnly();
    return Window.define({
        name: getComponentName('saf-window'),
        template: windowTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafWindow as default, safWindowConfig };
