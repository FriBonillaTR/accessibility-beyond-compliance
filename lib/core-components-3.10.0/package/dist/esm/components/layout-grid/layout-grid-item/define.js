import { getRegistry, getComponentName } from '@saffron/config';
import { LayoutGridItem } from './layout-grid-item.js';
import { styles } from './layout-grid-item.styles.js';
import { LayoutGridItemTemplate } from './layout-grid-item.template.js';

const SafLayoutGridItem = () => {
    return LayoutGridItem.define({
        name: getComponentName('saf-layout-grid-item'),
        template: LayoutGridItemTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafLayoutGridItem as default };
