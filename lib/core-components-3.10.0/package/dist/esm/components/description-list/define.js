import { getRegistry, getComponentName } from '@saffron/config';
import { DescriptionList } from './description-list.js';
import { styles } from './description-list.styles.js';
import { descriptionListTemplate } from './description-list.template.js';

const SafDescriptionList = () => {
    return DescriptionList.define({
        name: getComponentName('saf-description-list'),
        template: descriptionListTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafDescriptionList as default };
