import { getRegistry, getComponentName } from '@saffron/config';
import { LayoutGrid } from './layout-grid.js';
import { styles } from './layout-grid.styles.js';
import { layoutGridTemplate } from './layout-grid.template.js';

const LayoutGridDefine = () => {
    return LayoutGrid.define({
        name: getComponentName('saf-layout-grid'),
        template: layoutGridTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { LayoutGridDefine as default };
