import { getRegistry, getComponentName } from '@saffron/config';
import { Breadcrumb } from './breadcrumb.js';
import { styles } from './breadcrumb.styles.js';
import { breadcrumbTemplate } from './breadcrumb.template.js';

const SafBreadcrumb = () => {
    return Breadcrumb.define({
        name: getComponentName('saf-breadcrumb'),
        template: breadcrumbTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafBreadcrumb as default };
