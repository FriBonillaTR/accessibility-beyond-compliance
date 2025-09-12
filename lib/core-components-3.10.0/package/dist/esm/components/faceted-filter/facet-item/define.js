import { getRegistry, getComponentName } from '@saffron/config';
import SafBadge from '../../badge/define.js';
import SafButton from '../../button/define.js';
import SafCheckbox from '../../checkbox/define.js';
import SafIcon from '../../icon/define.js';
import SafSrOnly from '../../sr-only/define.js';
import { FacetItem } from './facet-item.js';
import { styles } from './facet-item.styles.js';
import { facetItemTemplate } from './facet-item.template.js';

const safFacetItemConfig = {
    events: {
        onToggle: 'toggle',
        onExpandedChange: 'expanded-change',
    },
};
const SafFacetItem = () => {
    SafButton();
    SafIcon();
    SafSrOnly();
    SafCheckbox();
    SafBadge();
    return FacetItem.define({
        name: getComponentName('saf-facet-item'),
        template: facetItemTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafFacetItem as default, safFacetItemConfig };
