import { getRegistry, getComponentName } from '@saffron/config';
import { Radio } from './radio.js';
import { styles } from './radio.styles.js';
import { radioTemplate } from './radio.template.js';

const safRadioConfig = {
    events: {
        onClick: 'click',
    },
};
const SafRadio = () => Radio.define({
    name: getComponentName('saf-radio'),
    template: radioTemplate(),
    styles: styles(),
    shadowOptions: {
        delegatesFocus: true,
    },
    registry: getRegistry(),
});

export { SafRadio as default, safRadioConfig };
