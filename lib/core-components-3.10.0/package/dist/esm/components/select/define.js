import { getRegistry, getComponentName } from '@saffron/config';
import SafIcon from '../icon/define.js';
import { Select } from './select.js';
import { styles } from './select.styles.js';
import { selectTemplate } from './select.template.js';

const safSelectConfig = {
    events: {
        onChange: 'change',
        onInput: 'input',
    },
};
const SafSelect = () => {
    SafIcon();
    return Select.define({
        name: getComponentName('saf-select'),
        template: selectTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafSelect as default, safSelectConfig };
