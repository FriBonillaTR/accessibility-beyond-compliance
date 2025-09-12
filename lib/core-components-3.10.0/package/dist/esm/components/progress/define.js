import { getRegistry, getComponentName } from '@saffron/config';
import { Progress } from './progress.js';
import { styles } from './progress.styles.js';
import { progressTemplate } from './progress.template.js';

const SafProgress = () => Progress.define({
    name: getComponentName('saf-progress'),
    template: progressTemplate(),
    styles: styles(),
    registry: getRegistry(),
});

export { SafProgress as default };
