import SafIcon from '../../icon/define.js';
import { getRegistry, getComponentName } from '@saffron/config';
import SafSrOnly from '../../sr-only/define.js';
import { CheckboxGroup } from './checkbox-group.js';
import { styles } from './checkbox-group.styles.js';
import { checkboxGroupTemplate } from './checkbox-group.template.js';

const safCheckboxGroupConfig = {
    events: {
        onChange: 'change',
        onInvalid: 'invalid',
        onReset: 'reset',
    },
};
const SafCheckboxGroup = () => {
    SafIcon();
    SafSrOnly();
    return CheckboxGroup.define({
        name: getComponentName('saf-checkbox-group'),
        template: checkboxGroupTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafCheckboxGroup as default, safCheckboxGroupConfig };
