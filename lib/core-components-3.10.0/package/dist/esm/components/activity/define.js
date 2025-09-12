import { getRegistry, getComponentName } from '@saffron/config';
import { Activity } from './activity.js';
import { styles } from './activity.styles.js';
import { activityTemplate } from './activity.template.js';

const SafActivity = () => {
    return Activity.define({
        name: getComponentName('saf-activity'),
        template: activityTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafActivity as default };
