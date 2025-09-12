import { getRegistry, getComponentName } from '@saffron/config';
import SafButton from '../button/define.js';
import SafIcon from '../icon/define.js';
import SafSrOnly from '../sr-only/define.js';
import { Alert } from './alert.js';
import { styles } from './alert.styles.js';
import { alertTemplate } from './alert.template.js';

const safAlertConfig = {
    events: {
        onClose: 'close',
    },
};
const SafAlert = () => {
    SafIcon();
    SafButton();
    SafSrOnly();
    return Alert.define({
        name: getComponentName('saf-alert'),
        template: alertTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafAlert as default, safAlertConfig };
