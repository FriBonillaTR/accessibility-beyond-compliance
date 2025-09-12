import { getRegistry, getComponentName } from '@saffron/config';
import { Accordion } from './accordion.js';
import { styles } from './accordion.styles.js';
import { accordionTemplate } from './accordion.template.js';

const safAccordionConfig = {
    events: {
        onChange: 'change',
    },
};
const SafAccordion = () => {
    return Accordion.define({
        name: getComponentName('saf-accordion'),
        template: accordionTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafAccordion as default, safAccordionConfig };
