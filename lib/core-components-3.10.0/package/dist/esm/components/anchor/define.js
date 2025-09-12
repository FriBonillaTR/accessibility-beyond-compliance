import { getRegistry, getComponentName } from '@saffron/config';
import { Anchor } from './anchor.js';
import { styles } from './anchor.styles.js';
import { anchorTemplate } from './anchor.template.js';

const safAnchorConfig = {
    events: {
        // TODO: deprecated event. Remove in v4
        onTransferFocus: 'transfer-focus',
    },
};
const SafAnchor = () => Anchor.define({
    name: getComponentName('saf-anchor'),
    template: anchorTemplate(),
    styles: styles(),
    shadowOptions: {
        delegatesFocus: true,
    },
    registry: getRegistry(),
});

export { SafAnchor as default, safAnchorConfig };
