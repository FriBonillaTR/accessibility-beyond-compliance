import { getRegistry, getComponentName } from '@saffron/config';
import { ProgressRing } from './progress-ring.js';
import { styles } from './progress-ring.styles.js';
import { progressRingTemplate } from './progress-ring.template.js';

const SafProgressRing = () => ProgressRing.define({
    name: getComponentName('saf-progress-ring'),
    template: progressRingTemplate(),
    styles: styles(),
    registry: getRegistry(),
});

export { SafProgressRing as default };
