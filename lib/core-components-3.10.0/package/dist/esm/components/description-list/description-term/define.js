import { getRegistry, getComponentName } from '@saffron/config';
import { DescriptionTerm } from './description-term.js';
import { styles } from './description-term.styles.js';
import { descriptionTermTemplate } from './description-term.template.js';

const SafDescriptionTerm = () => DescriptionTerm.define({
    name: getComponentName('saf-description-term'),
    template: descriptionTermTemplate(),
    styles: styles(),
    registry: getRegistry(),
});

export { SafDescriptionTerm as default };
