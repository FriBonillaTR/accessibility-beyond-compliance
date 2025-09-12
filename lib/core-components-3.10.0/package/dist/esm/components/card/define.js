import { getRegistry, getComponentName } from '@saffron/config';
import { Card } from './card.js';
import { styles } from './card.styles.js';
import { cardTemplate } from './card.template.js';

const SafCard = () => Card.define({
    name: getComponentName('saf-card'),
    template: cardTemplate(),
    styles: styles(),
    registry: getRegistry(),
});

export { SafCard as default };
