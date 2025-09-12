import { getRegistry, getComponentName } from '@saffron/config';
import ClickAwayListenerDefine from '../click-away-listener/define.js';
import { Tooltip } from './tooltip.js';
import { styles } from './tooltip.styles.js';
import { tooltipTemplate } from './tooltip.template.js';

const safTooltipConfig = {
    events: {
        onDismiss: 'dismiss',
    },
};
const SafTooltip = () => {
    ClickAwayListenerDefine();
    return Tooltip.define({
        name: getComponentName('saf-tooltip'),
        template: tooltipTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafTooltip as default, safTooltipConfig };
