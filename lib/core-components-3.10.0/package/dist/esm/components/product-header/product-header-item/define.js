import { getRegistry, getComponentName } from '@saffron/config';
import { ProductHeaderItem } from './product-header-item.js';
import { styles } from './product-header-item.styles.js';
import { productHeaderItemTemplate } from './product-header-item.template.js';

const SafProductHeaderItem = () => ProductHeaderItem.define({
    name: getComponentName('saf-product-header-item'),
    template: productHeaderItemTemplate(),
    styles: styles(),
    registry: getRegistry(),
});

export { SafProductHeaderItem as default };
