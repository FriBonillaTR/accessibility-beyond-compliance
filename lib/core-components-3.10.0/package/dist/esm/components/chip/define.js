import { getRegistry, getComponentName } from '@saffron/config';
import SafButton from '../button/define.js';
import SafIcon from '../icon/define.js';
import SafSrOnly from '../sr-only/define.js';
import SafTooltip from '../tooltip/define.js';
import { Chip } from './chip.js';
import { styles } from './chip.styles.js';
import { chipTemplate } from './chip.template.js';

const safChipConfig = {
    events: {
        onRemove: 'remove',
    },
};
const SafChip = () => {
    SafButton();
    SafIcon();
    SafSrOnly();
    SafTooltip();
    return Chip.define({
        name: getComponentName('saf-chip'),
        template: chipTemplate(),
        styles: styles(),
        shadowOptions: {
            delegatesFocus: true,
        },
        registry: getRegistry(),
    });
};

export { SafChip as default, safChipConfig };
