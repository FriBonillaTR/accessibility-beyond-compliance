import { getRegistry, getComponentName } from '@saffron/config';
import SafIcon from '../icon/define.js';
import { NumberField } from './number-field.js';
import { styles } from './number-field.styles.js';
import { numberFieldTemplate } from './number-field.template.js';

const safNumberFieldConfig = {
    events: {
        onChange: 'change',
        onInput: 'input',
        onInvalid: 'invalid',
        onClick: 'click',
    },
};
const SafNumberField = () => {
    SafIcon();
    return NumberField.define({
        name: getComponentName('saf-number-field'),
        template: numberFieldTemplate(),
        styles: styles(),
        shadowOptions: {
            delegatesFocus: true,
        },
        registry: getRegistry(),
    });
};

export { SafNumberField as default, safNumberFieldConfig };
