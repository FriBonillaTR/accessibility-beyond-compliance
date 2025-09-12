import { getRegistry, getComponentName } from '@saffron/config';
import { BreadcrumbItem } from './breadcrumb-item.js';
import { styles } from './breadcrumb-item.styles.js';
import { breadcrumbItemTemplate } from './breadcrumb-item.template.js';

const SafBreadcrumbItem = () => BreadcrumbItem.define({
    name: getComponentName('saf-breadcrumb-item'),
    template: breadcrumbItemTemplate(),
    styles: styles(),
    shadowOptions: {
        delegatesFocus: true,
    },
    registry: getRegistry(),
});

export { SafBreadcrumbItem as default };
