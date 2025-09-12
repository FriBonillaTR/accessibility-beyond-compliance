import { getRegistry, getComponentName } from '@saffron/config';
import SafMessageBox from '../message-box/define.js';
import SafProgressText from '../progress-text/define.js';
import { Chat } from './chat.js';
import { styles } from './chat.styles.js';
import { chatTemplate } from './chat.template.js';

const SafChat = () => {
    SafMessageBox();
    SafProgressText();
    return Chat.define({
        name: getComponentName('saf-chat'),
        template: chatTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafChat as default };
