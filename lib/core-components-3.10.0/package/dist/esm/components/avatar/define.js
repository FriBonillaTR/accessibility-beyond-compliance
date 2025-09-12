import { getRegistry, getComponentName } from '@saffron/config';
import SafIcon from '../icon/define.js';
import SafSrOnly from '../sr-only/define.js';
import { Avatar } from './avatar.js';
import { styles } from './avatar.styles.js';
import { avatarTemplate } from './avatar.template.js';

const SafAvatar = () => {
    SafIcon();
    SafSrOnly();
    return Avatar.define({
        name: getComponentName('saf-avatar'),
        template: avatarTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafAvatar as default };
