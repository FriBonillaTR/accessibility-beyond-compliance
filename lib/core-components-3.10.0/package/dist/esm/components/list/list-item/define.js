import { getRegistry, getComponentName } from '@saffron/config';
import { ListItem } from './list-item.js';
import { styles } from './list-item.styles.js';
import { listItemTemplate } from './list-item.template.js';

const SafListItem = () => ListItem.define({
    name: getComponentName('saf-list-item'),
    template: listItemTemplate(),
    styles: styles(),
    registry: getRegistry(),
});

export { SafListItem as default };
