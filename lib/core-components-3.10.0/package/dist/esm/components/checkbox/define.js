import { getRegistry, getComponentName } from '@saffron/config';
import SafIcon from '../icon/define.js';
import { Checkbox } from './checkbox.js';
import { styles } from './checkbox.styles.js';
import { checkboxTemplate } from './checkbox.template.js';

const safCheckboxConfig = {
    events: {
        onChange: 'change',
    },
};
const SafCheckbox = () => {
    SafIcon();
    return Checkbox.define({
        name: getComponentName('saf-checkbox'),
        template: checkboxTemplate(),
        styles: styles(),
        shadowOptions: {
            delegatesFocus: true,
        },
        registry: getRegistry(),
    });
};

export { SafCheckbox as default, safCheckboxConfig };
