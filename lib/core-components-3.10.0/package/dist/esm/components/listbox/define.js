import { getRegistry, getComponentName } from '@saffron/config';
import { Listbox } from './listbox.js';
import { styles } from './listbox.styles.js';
import { listboxTemplate } from './listbox.template.js';

const safListboxConfig = {
    events: {
        onClick: 'click',
    },
};
const SafListbox = () => {
    return Listbox.define({
        name: getComponentName('saf-listbox'),
        template: listboxTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafListbox as default, safListboxConfig };
