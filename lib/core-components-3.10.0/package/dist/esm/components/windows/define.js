import { getRegistry, getComponentName } from '@saffron/config';
import SafButton from '../button/define.js';
import SafIcon from '../icon/define.js';
import SafSrOnly from '../sr-only/define.js';
import SafTooltip from '../tooltip/define.js';
import { Windows } from './windows.js';
import { styles } from './windows.styles.js';
import { windowsTemplate } from './windows.template.js';

const safWindowsConfig = {
    events: {
        onAdd: 'add',
    },
};
const SafWindows = () => {
    SafTooltip();
    SafButton();
    SafIcon();
    SafSrOnly();
    return Windows.define({
        name: getComponentName('saf-windows'),
        template: windowsTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafWindows as default, safWindowsConfig };
