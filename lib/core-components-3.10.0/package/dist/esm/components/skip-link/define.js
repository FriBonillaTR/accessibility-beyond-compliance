import { getRegistry, getComponentName } from '@saffron/config';
import { skipLinkTemplate } from './skip-link.template.js';
import { styles } from './skip-link.styles.js';
import { SkipLink } from './skip-link.js';

const SkipLinkDefine = () => {
    return SkipLink.define({
        name: getComponentName('saf-skip-link'),
        template: skipLinkTemplate(),
        styles: styles(),
        shadowOptions: {
            delegatesFocus: true,
        },
        registry: getRegistry(),
    });
};

export { SkipLinkDefine as default };
