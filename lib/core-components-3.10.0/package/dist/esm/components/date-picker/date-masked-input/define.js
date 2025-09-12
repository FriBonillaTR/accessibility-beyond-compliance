import { getRegistry, getComponentName } from '@saffron/config';
import SafTextField from '../../text-field/define.js';
import { DateMaskedInput } from './date-masked-input.js';
import { styles } from './date-masked-input.styles.js';
import { dateMaskedInputTemplate } from './date-masked-input.template.js';

const DateMaskedInputDefine = () => {
    SafTextField();
    return DateMaskedInput.define({
        name: getComponentName('saf-date-masked-input'),
        template: dateMaskedInputTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};
const safDateMaskedInputConfig = {
    events: {
        onSectionsChanged: 'sections-changed',
        onInput: 'input',
    },
};

export { DateMaskedInputDefine as default, safDateMaskedInputConfig };
