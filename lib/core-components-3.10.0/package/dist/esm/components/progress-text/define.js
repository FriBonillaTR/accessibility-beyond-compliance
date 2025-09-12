import { getRegistry, getComponentName } from '@saffron/config';
import { ProgressText } from './progress-text.js';
import { styles } from './progress-text.styles.js';
import { progressTextTemplate } from './progress-text.template.js';

const SafProgressText = () => ProgressText.define({
    name: getComponentName('saf-progress-text'),
    template: progressTextTemplate(),
    styles: styles(),
    registry: getRegistry(),
});

export { SafProgressText as default };
