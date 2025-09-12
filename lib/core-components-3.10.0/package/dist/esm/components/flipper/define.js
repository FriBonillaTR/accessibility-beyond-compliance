import { getRegistry, getComponentName } from '@saffron/config';
import SafButton from '../button/define.js';
import SafIcon from '../icon/define.js';
import SafSrOnly from '../sr-only/define.js';
import { Flipper } from './flipper.js';
import { styles } from './flipper.styles.js';
import { flipperTemplate } from './flipper.template.js';

const SafFlipper = () => {
    SafButton();
    SafIcon();
    SafSrOnly();
    return Flipper.define({
        name: getComponentName('saf-flipper'),
        template: flipperTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafFlipper as default };
