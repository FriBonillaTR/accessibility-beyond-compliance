import { getRegistry, getComponentName } from '@saffron/config';
import { DescriptionDetails } from './description-details.js';
import { styles } from './description-details.styles.js';
import { descriptionDetailsTemplate } from './description-details.template.js';

const SafDescriptionDetails = () => DescriptionDetails.define({
    name: getComponentName('saf-description-details'),
    template: descriptionDetailsTemplate(),
    styles: styles(),
    registry: getRegistry(),
});

export { SafDescriptionDetails as default };
