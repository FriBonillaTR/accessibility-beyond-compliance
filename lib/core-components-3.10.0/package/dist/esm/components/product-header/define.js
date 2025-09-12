import { getRegistry, getComponentName } from '@saffron/config';
import { ProductHeader } from './product-header.js';
import { styles } from './product-header.styles.js';
import { productHeaderTemplate } from './product-header.template.js';
import SafAnchoredRegion from '../anchored-region/define.js';
import SafButton from '../button/define.js';
import SafDivider from '../divider/define.js';
import SafIcon from '../icon/define.js';

const SafProductHeader = () => {
    SafButton();
    SafDivider();
    SafIcon();
    SafAnchoredRegion();
    return ProductHeader.define({
        name: getComponentName('saf-product-header'),
        template: productHeaderTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafProductHeader as default };
