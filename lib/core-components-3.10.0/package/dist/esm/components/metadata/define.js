import { getRegistry, getComponentName } from '@saffron/config';
import { Metadata } from './metadata.js';
import { styles } from './metadata.styles.js';
import { metadataTemplate } from './metadata.template.js';

const SafMetadata = () => {
    return Metadata.define({
        name: getComponentName('saf-metadata'),
        template: metadataTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafMetadata as default };
