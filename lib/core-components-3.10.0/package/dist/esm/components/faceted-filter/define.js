import { getRegistry, getComponentName } from '@saffron/config';
import SafButton from '../button/define.js';
import SafDivider from '../divider/define.js';
import SafIcon from '../icon/define.js';
import { FacetedFilter } from './faceted-filter.js';
import { styles } from './faceted-filter.styles.js';
import { facetedFilterTemplate } from './faceted-filter.template.js';

const safFacetedFilterConfig = {
    events: {
        onClear: 'clear',
    },
};
const SafFacetedFilter = () => {
    SafButton();
    SafIcon();
    SafDivider();
    return FacetedFilter.define({
        name: getComponentName('saf-faceted-filter'),
        template: facetedFilterTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafFacetedFilter as default, safFacetedFilterConfig };
