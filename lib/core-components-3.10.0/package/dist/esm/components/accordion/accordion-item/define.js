import { getRegistry, getComponentName } from '@saffron/config';
import SafIcon from '../../icon/define.js';
import { AccordionItem } from './accordion-item.js';
import { styles } from './accordion-item.styles.js';
import { accordionItemTemplate } from './accordion-item.template.js';

const safAccordionConfig = {
    events: {
        onChange: 'change',
    },
};
const SafAccordionItem = () => {
    SafIcon();
    return AccordionItem.define({
        name: getComponentName('saf-accordion-item'),
        template: accordionItemTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafAccordionItem as default, safAccordionConfig };
