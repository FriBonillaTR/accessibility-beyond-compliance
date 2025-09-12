import { getRegistry, getComponentName } from '@saffron/config';
import SafAvatar from '../avatar/define.js';
import { MessageBox } from './message-box.js';
import { styles } from './message-box.styles.js';
import { messageBoxTemplate } from './message-box.template.js';

const safMessageBoxConfig = {
    events: {
        onClick: 'click',
    },
};
const SafMessageBox = () => {
    SafAvatar();
    return MessageBox.define({
        name: getComponentName('saf-message-box'),
        template: messageBoxTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafMessageBox as default, safMessageBoxConfig };
