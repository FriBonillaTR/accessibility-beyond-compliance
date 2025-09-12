import { getRegistry, getComponentName } from '@saffron/config';
import SafIcon from '../icon/define.js';
import { Disclosure } from './disclosure.js';
import { styles } from './disclosure.styles.js';
import { disclosureTemplate } from './disclosure.template.js';

const SafDisclosure = () => {
    SafIcon();
    return Disclosure.define({
        name: getComponentName('saf-disclosure'),
        template: disclosureTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafDisclosure as default };
