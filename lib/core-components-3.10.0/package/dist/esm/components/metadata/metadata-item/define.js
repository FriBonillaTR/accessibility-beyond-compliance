import { getRegistry, getComponentName } from '@saffron/config';
import { MetadataItem } from './metadata-item.js';
import { styles } from './metadata-item.styles.js';
import { metadataItemTemplate } from './metadata-item.template.js';

const SafMetadataItem = () => MetadataItem.define({
    name: getComponentName('saf-metadata-item'),
    template: metadataItemTemplate(),
    styles: styles(),
    registry: getRegistry(),
});

export { SafMetadataItem as default };
