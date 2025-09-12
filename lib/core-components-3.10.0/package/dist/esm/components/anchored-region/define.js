import { getRegistry, getComponentName } from '@saffron/config';
import { AnchoredRegion } from './anchored-region.js';
import { styles } from './anchored-region.styles.js';
import { anchoredRegionTemplate } from './anchored-region.template.js';

const safAnchoredRegionConfig = {
    events: {
        onLoaded: 'loaded',
        onPositionChange: 'positionchange',
    },
};
const SafAnchoredRegion = () => AnchoredRegion.define({
    name: getComponentName('saf-anchored-region'),
    template: anchoredRegionTemplate(),
    styles: styles(),
    registry: getRegistry(),
});

export { SafAnchoredRegion as default, safAnchoredRegionConfig };
