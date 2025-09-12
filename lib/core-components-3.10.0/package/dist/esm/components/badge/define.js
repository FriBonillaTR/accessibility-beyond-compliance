import { getRegistry, getComponentName } from '@saffron/config';
import { Badge } from './badge.js';
import { styles } from './badge.styles.js';
import { badgeTemplate } from './badge.template.js';

const SafBadge = () => Badge.define({
    name: getComponentName('saf-badge'),
    template: badgeTemplate(),
    styles: styles(),
    registry: getRegistry(),
});

export { SafBadge as default };
