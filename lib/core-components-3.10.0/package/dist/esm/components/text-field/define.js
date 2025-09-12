import { getRegistry, getComponentName } from '@saffron/config';
import SafIcon from '../icon/define.js';
import { TextField } from './text-field.js';
import { styles } from './text-field.styles.js';
import { textInputTemplate } from './text-field.template.js';

const safTextFieldConfig = {
    events: {
        onChange: 'change',
        onInput: 'input',
        onValidate: 'validate',
        onInvalid: 'invalid',
        onReset: 'reset',
    },
};
const SafTextField = () => {
    SafIcon();
    return TextField.define({
        name: getComponentName('saf-text-field'),
        template: textInputTemplate(),
        styles: styles(),
        shadowOptions: {
            delegatesFocus: true,
        },
        registry: getRegistry(),
    });
};

export { SafTextField as default, safTextFieldConfig };
