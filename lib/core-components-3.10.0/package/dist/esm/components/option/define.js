import { getRegistry, getComponentName } from '@saffron/config';
import SafIcon from '../icon/define.js';
import { Option } from './option.js';
import { styles } from './option.styles.js';
import { optionTemplate } from './option.template.js';

const SafOption = () => {
    SafIcon();
    return Option.define({
        name: getComponentName('saf-option'),
        template: optionTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafOption as default };
