import { getRegistry, getComponentName } from '@saffron/config';
import { ClickAwayListener } from './click-away-listener.js';
import { styles } from './click-away-listener.styles.js';
import { clickAwayListenerTemplate } from './click-away-listener.template.js';

const ClickAwayListenerDefine = () => {
    return ClickAwayListener.define({
        name: getComponentName('saf-click-away-listener'),
        template: clickAwayListenerTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};
const safClickAwayListenerConfig = {
    events: {
        onClickAway: 'click-away',
    },
};

export { ClickAwayListenerDefine as default, safClickAwayListenerConfig };
