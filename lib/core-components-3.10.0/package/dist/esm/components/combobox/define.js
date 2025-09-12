import { getRegistry, getComponentName } from '@saffron/config';
import { Combobox } from './combobox.js';
import { styles } from './combobox.styles.js';
import { comboboxTemplate } from './combobox.template.js';
import SafButton from '../button/define.js';
import SafIcon from '../icon/define.js';
import SafOption from '../option/define.js';
import SafProgressRing from '../progress-ring/define.js';
import SafSrOnly from '../sr-only/define.js';

const safComboboxConfig = {
    events: {
        onInput: 'input',
        onClick: 'click',
        onClear: 'clear',
        onScrollEnd: 'scroll-end',
        onChange: 'change',
    },
};
const SafCombobox = () => {
    SafProgressRing();
    SafButton();
    SafIcon();
    SafOption();
    SafSrOnly();
    return Combobox.define({
        name: getComponentName('saf-combobox'),
        template: comboboxTemplate(),
        styles: styles(),
        shadowOptions: {
            delegatesFocus: true,
        },
        registry: getRegistry(),
    });
};

export { SafCombobox as default, safComboboxConfig };
