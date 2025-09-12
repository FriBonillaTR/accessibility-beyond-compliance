import { getRegistry, getComponentName } from '@saffron/config';
import { Text } from './text.js';
import { styles } from './text.styles.js';
import { textTemplate } from './text.template.js';

const SafText = () => Text.define({
    name: getComponentName('saf-text'),
    template: textTemplate(),
    styles: styles(),
    registry: getRegistry(),
});

export { SafText as default };
