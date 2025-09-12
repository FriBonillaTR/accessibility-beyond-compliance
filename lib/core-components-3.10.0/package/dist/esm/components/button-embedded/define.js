import { getRegistry, getComponentName } from '@saffron/config';
import { ButtonEmbedded } from './button-embedded.js';
import { styles } from './button-embedded.styles.js';
import { buttonEmbeddedTemplate } from './button-embedded.template.js';

const SafButtonEmbedded = () => {
    return ButtonEmbedded.define({
        name: getComponentName('saf-button-embedded'),
        template: buttonEmbeddedTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafButtonEmbedded as default };
