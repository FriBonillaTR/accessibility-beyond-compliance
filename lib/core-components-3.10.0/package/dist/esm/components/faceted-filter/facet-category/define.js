import { getRegistry, getComponentName } from '@saffron/config';
import SafBadge from '../../badge/define.js';
import SafDisclosure from '../../disclosure/define.js';
import SafSrOnly from '../../sr-only/define.js';
import { FacetCategory } from './facet-category.js';
import { styles } from './facet-category.styles.js';
import { facetCategoryTemplate } from './facet-category.template.js';

const SafFacetCategory = () => {
    SafDisclosure();
    SafBadge();
    SafSrOnly();
    return FacetCategory.define({
        name: getComponentName('saf-facet-category'),
        template: facetCategoryTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafFacetCategory as default };
